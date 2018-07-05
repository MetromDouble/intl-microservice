const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

try {
  mongoose.model('Project');
} catch (_) {
  mongoose.model('Project', ProjectSchema);
}

module.exports = ProjectSchema;
