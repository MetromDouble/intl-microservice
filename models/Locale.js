const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  project: {
    type: Schema.Types.ObjectId,
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId
  },
});

try {
  mongoose.model('Project');
} catch (_) {
  mongoose.model('Project', ProjectSchema);
}

module.exports = ProjectSchema;
