const notes = require('../controllers/notes.js')

module.exports = function(app) {
    app.post('/add', notes.add),
    app.get('/get', notes.get)
}