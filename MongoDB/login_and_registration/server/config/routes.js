const users = require('../controllers/users.js')

module.exports = function(app) {
    app.get('/', users.index),
    app.post('/add', users.add),
    app.post('/login', users.login)
}