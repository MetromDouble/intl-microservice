const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  clientId: {
    type: String,
    unique: true,
    required: true
  },
  clientSecret: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

try {
  mongoose.model('Client');
} catch (_) {
  mongoose.model('Client', ClientSchema);
}

module.exports = ClientSchema;
