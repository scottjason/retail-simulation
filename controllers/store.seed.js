var Store = require('../models/store.seed');

exports.create = function() {

  var store = new Store();
  store.name = 'Ralph Lauren'
  store.id = 1234567890;
  store.location = 'San Francisco, Ca';

  var item = {};
  item.type = 'shoes';
  item.subType = 'boots';
  item.name = 'Chanson Suede Boot';
  item.url = 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-21397554_standard_t240.jpg';
  item.count = 5;
  item.price = 395.00;
  store.createItem(item);

  var item = {};
  item.type = 'shoes';
  item.subType = 'boots';
  item.name = 'Nori Vachetta Boot';
  item.url = 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-21544553_standard_t240.jpg';
  item.count = 8;
  item.price = 1500.00;
  store.createItem(item);

  var item = {};
  item.type = 'shoes';
  item.subType = 'boots';
  item.name = 'Nolita Suede Boot';
  item.url = 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-21544553_standard_t240.jpg';
  item.count = 6;
  item.price = 1250.00;
  store.createItem(item);

  var item = {};
  item.type = 'shoes';
  item.subType = 'boots';
  item.name = 'Marlow Suede Boot';
  item.url = 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-21544410_standard_t240.jpg';
  item.count = 3;
  item.price = 1250.00;
  store.createItem(item);
  store = store.getAll();

  var item = {};
  item.type = 'shoes';
  item.subType = 'boots';
  item.name = 'Teodora Suede Bootie';
  item.url = 'http://www.ralphlauren.com/graphics/product_images/pPOLO2-21544462_standard_t240.jpg';
  item.count = 3;
  item.price = 895.00;
  store.createItem(item);

  return store
};
