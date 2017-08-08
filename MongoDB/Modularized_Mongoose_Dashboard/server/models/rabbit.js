var mongoose = require('mongoose')
var RabbitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    height: {type: Number, required: true},
    created_at: {type: Date, default: Date.now}
})
mongoose.model('Rabbit', RabbitSchema);