const rabbits = require('../controllers/rabbits.js')

module.exports = function(app) {
    app.get('/', rabbits.index)
    app.post('/', rabbits.home)
    app.get('/new', rabbits.new)
    app.get('/:id', rabbits.showID)
    app.post('/:id', rabbits.editID)
    app.get('/edit/:id', rabbits.edit_home)
    app.get('/destroy/:id', rabbits.destroyID)
}