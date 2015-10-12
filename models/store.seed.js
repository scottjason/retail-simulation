var extend = require('util')._extend;

function Store() {
  this.items = [];
  this.customers = [];
};

Store.prototype.createItem = function(item) {
  this.items.push(item);
};

Store.prototype.getItems = function() {
  return this.items;
};

Store.prototype.createCustomer = function(customer) {
  this.customers.push(customer)
};

Store.prototype.getCusomters = function() {
  return this.customers;
};

Store.prototype.getAll = function() {
  return this;
};

module.exports = Store;
