var express = require('express');
var app = express();
var storeCtrl = require('./controllers/store.seed');
var Firebase = require('firebase');

var dataStore = new Firebase('https://retail-simulation.firebaseio.com/');

var createStore = true;

app.listen(3000, function() {
  if (createStore) {
    var store = storeCtrl.create();

    dataStore.set(store);
    console.log('store created', store);

    dataStore.on("value", function(snapshot) {
      console.log("snapshot", snapshot.val());
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  }

});
