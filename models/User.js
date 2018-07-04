const mongoose = require('mongoose');
const crypto = require('crypto');
const privates = require('mongoose-private');
const { toRawID, fromRawID } = require('../lib/id-converter');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  bdate: {
    type: String,
  },
  phone: {
    type: String,
  },
  cvr: {
    type: String,
  },
  country: {
    type: String,
  },
  address: {
    type: String,
  },
  zip: {
    type: String,
  },
  hashedPassword: {
    type: String,
    private: true
  },
  salt: {
    type: String,
    private: true
  },
  resetPwdToken: {
    type: String,
    private: true
  },
}, { id: false });

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });
UserSchema.plugin(privates);

/* eslint-disable func-names */
UserSchema.methods.encryptPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

UserSchema.virtual('age')
  .get(function () {
    const sourceBdate = /^(([0-2]{0,1}\d|3[01])\.(0{0,1}\d|1[012])\.(19|20)\d{2})$/ig.test(this.bdate)
      ? this.bdate.split('.')
      : null;
    const sourceAge = sourceBdate
      ? Math.floor((Date.now() - new Date(sourceBdate[2], sourceBdate[1] - 1, sourceBdate[0])) / 1000 / 60 / 60 / 24 / 365)
      : null;

    return sourceAge || 0;
  });

/* eslint-disable prefer-arrow-callback */
UserSchema.virtual('id')
  .get(fromRawID('u'))
  .set(toRawID('u'));

UserSchema.statics.findByBeautyId = function findByBeautyId(beautyId) {
  return this.findById(toRawID('u')(beautyId)).exec();
};

UserSchema.virtual('password')
  .set(function (password) {
    this._plainPassword = password;
    this.salt = crypto.randomBytes(32).toString('base64');
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(() => {
    return this._plainPassword;
  });

UserSchema.methods.checkPassword = function (password) {
  if (!password && !this.hashedPassword) return true;
  if (!this.hashedPassword) return false;
  return this.encryptPassword(password) === this.hashedPassword;
};

try {
  mongoose.model('User');
} catch (_) {
  mongoose.model('User', UserSchema);
}

module.exports = UserSchema;
