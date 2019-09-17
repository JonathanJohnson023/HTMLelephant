const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  tags: {
    type: Schema.Types.ObjectId,
    ref: tags
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = DocumentSchema = mongoose.model('Document', DocumentSchema);