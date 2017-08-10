var mongoose = require('mongoose')
var User = mongoose.model('User') 
var bcrypt = require('bcrypt')

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, results) {
            console.log(results)
            res.render("index", {error: ''})
        })
    },

    add: function(req, res) {
        if (req.body.pass != req.body.confirm) {
            res.render("index", {error: "Password must match!"})
        }
        User.findOne({email: req.body.email}, function(err, result) {
            if(result) {
                res.render("index", {error: "Please try another email"})
            }
            if(err) {
                console.log(err)
            } else {
                var user = new User({first: req.body.first, last: req.body.last,
                    email: req.body.email, gender: req.body.gender, birthday: req.body.birthday, password: req.body.pass})
                user.save(function(err) {
                    if(err) {
                        console.log(err)
                    } else {
                        console.log("User created!")
                        res.redirect('/')
                    }
                })
            }
        })
    },

    login: function(req, res) {
        User.findOne({email: req.body.login_email}, function(err, result) {
            console.log("working")
            if(result) {
                if(bcrypt.compareSync(req.body.login_pass, result.password)) {
                    req.session.name = req.body.first
                    console.log("Login success")
                    res.render("success", {session: req.session})
                } else {
                    res.render("index", {error: "Incorrect Password"})
                }
            } else {
                res.render("index", {error: "Cannot find email"})
            }
        })
    }

}