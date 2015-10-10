var express = require('express');
var app = express();
var indexCtrl = require('./controllers/index');

app.listen(3000, function() {
  indexCtrl.init();
});
