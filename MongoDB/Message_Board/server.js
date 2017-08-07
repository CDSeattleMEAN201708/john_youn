var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/messages_db');

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    text: {type: String, required: true }, 
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }, {timestamps: true });

var CommentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    text: {type: String, required: true }
    }, {timestamps: true });

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

mongoose.Promise = global.Promise;
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// route for getting a particular post and comments

app.get('/', function(req, res) {
    Message.find({}, false, true).populate('comments').exec(function(err, messages) {
        if(err) {
            console.log(err)
        } else {
            console.log(messages)
            res.render("index", {messages: messages})
        }
    })
})

app.post('/message', function(req, res) {
    var message = new Message({name: req.body.name, text: req.body.message})
    message.save(function(err) {
        if(err) {
            console.log(err)
        } else {
            console.log("message posted")
            res.redirect('/')
        }
    })
})

// route for creating one comment with the parent post id
app.post('/comment/:id', function (req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
        var comment = new Comment({name: req.body.name, text: req.body.comment})
        comment._message = message._id
        message.comments.push(comment)
        comment.save(function(err){
            message.save(function(err){
                if(err) { console.log('Error') } 
                else { res.redirect('/') }
            })
        })
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})