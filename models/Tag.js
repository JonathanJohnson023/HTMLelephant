const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  type:{
    type: String,
    required: true
  },
  styles: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tag = mongoose.model('tag', TagSchema);
