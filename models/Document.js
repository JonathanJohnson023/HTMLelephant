const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    websiteData: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

{
  type:{

  }

  attributes:{

  }
  
}

module.exports = DocumentSchema = mongoose.model('Document', DocumentSchema);