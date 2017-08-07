var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quotes_db');
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quote: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote') 
mongoose.Promise = global.Promise;
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render("index")
})

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, result) {
        if(err) {
            console.log("error please try again")
        } else {
            res.render("quotes", {quotes: result})
        }
    })
})

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
        if(err) {
            console.log("***********")
            console.log(err)
            res.render("errors", {errors: err})
        } else { 
            console.log('successfully added a quote!');
            res.redirect('/quotes');
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})