const people = require('../controllers/people.js')

module.exports = function(app) {
    app.get('/', people.index)
    app.get('/new/:name', people.new)
    app.get('/remove/:name', people.remove)
    app.get('/:name', people.get)
}