var mongoose = require('mongoose')
var Note = mongoose.model('Note') 

module.exports = {
    add: function(req, res) {
        console.log(req.body)
        var note = new Note({content: req.body.content})
        note.save(function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log("Note created!")
                res.json(note)
            }
        })
    },

    get: function(req, res) {
        Note.find()
        .then(notes => res.json(notes))
			.catch(err => {
				console.log("user find all error", err)
				res.status(500).json(err)
			})
    }

}