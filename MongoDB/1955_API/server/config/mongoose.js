var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/people_db', {useMongoClient: true});

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});