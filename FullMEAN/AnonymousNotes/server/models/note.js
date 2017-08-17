var mongoose = require('mongoose')

var NoteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  }
  
}, {timestamps: true})

mongoose.model('Note', NoteSchema);