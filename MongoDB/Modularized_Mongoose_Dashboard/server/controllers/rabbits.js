var mongoose = require('mongoose')
var Rabbit = mongoose.model('Rabbit') 

module.exports = {
    index: function(req, res) {
        Rabbit.find({}, function(err, results) {
            if(err) {
                console.log("error please try again")
            } else {
                res.render("index", {rabbits: results})
            }
        })
    },

    home: function(req, res) {
        var rabbit = new Rabbit({name: req.body.name, age: req.body.age, height: req.body.height})
        rabbit.save(function(err) {
            if(err) {
                res.render("errors", {errors: err})
            } else {
                res.redirect('/')
            }
        })
    },

    new: function(req, res) {
        res.render("new")
    },

    showID: function(req, res) {
        Rabbit.find({_id: req.params.id}, function(err, result) {
            if(err) {
                console.log("error please try again")
            } else {
                res.render("show", {rabbit: result[0]})
            }
        })
    },

    editID: function(req, res) {
        Rabbit.update({_id: req.params.id}, req.body, function(err) {
            if(err) {
                console.log("error please try again")
            } else { 
                res.redirect('/');
            }
        })
    },

    edit_home: function(req, res) {
        Rabbit.find({_id: req.params.id}, function(err, result) {
            if(err) {
                console.log("error please try again")
            } else {
                res.render("edit", {rabbit: result[0]})
            }
        })
    },

    destroyID: function(req, res) {
        Rabbit.remove({_id: req.params.id}, function(err, result) {
            if(err) {
                console.log("error please try again")
            } else {
                res.redirect('/')
            }
        })
    }
}