const express = require("express")
const path = require("path")
const app = express()
var bodyParser = require("body-parser")
var session = require("express-session")
app.use(session({secret: "passoword"}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "./static")))
app.set('views', path.join(__dirname, './static/views'))
app.set("view engine", "ejs")

app.get('/', function(req, res) {
    if (!req.session.number) {
        req.session.number = Math.floor(Math.random() * 100) + 1
        req.session.status = false
        req.session.guess = ""
    }
    res.render("index", {data: req.session})
})

app.post('/guess', function(req, res) {
    if(req.session.number > req.body.guess) {
        req.session.guess = "Too low!"
    } else if (req.session.number < req.body.guess) {
        req.session.guess = "Too high!"
    } else {
        req.session.guess = "Correct!"
        req.session.status = true;
    }
    res.redirect('/')
})

app.post('/reset', function(req, res) {
    req.session.destroy()
    res.redirect('/')
})

app.listen(8000, function() {
    console.log("listening on port 8000")
})