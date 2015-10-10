var Store = require('../models/store');

exports.init = function() {
  var store = new Store('1234567890', 'Ralph Lauryn', 'San Francisco, Ca');
  store.createItem('some item');
  console.log(store.getAll());
}
