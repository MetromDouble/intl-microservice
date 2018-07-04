const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccessTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  clientId: {
    type: String,
    required: true
  },
  token: {
    type: String,
    unique: true,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

try {
  mongoose.model('AccessToken');
} catch (_) {
  mongoose.model('AccessToken', AccessTokenSchema);
}

module.exports = AccessTokenSchema;
