var mongoose = require('mongoose')
var Person = mongoose.model('Person') 

module.exports = {
    index: function(req, res) {
        Person.find({}, function(err, results) {
            if(err) {
                console.log("error please try again")
            } else {
                res.json(results)
            }
        })
    },

    new: function(req, res) {
        var person = new Person({name: req.params.name})
        person.save(function(err) {
            if(err) {
                console.log("error please try again")
            } else {
                res.redirect('/')
            }
        })
    },

    get: function(req, res) {
        Person.find({name: req.params.name}, function(err, result) {
            if(err) {
                console.log("error please try again")
            } else {
                res.json(result)
            }
        })
    },

    remove: function(req, res) {
        Person.remove({name: req.params.name}, function(err, result) {
            if(err) {
                console.log("error please try again")
            } else {
                res.redirect('/')
            }
        })
    }
}