function Store(id, name, location) {
  this.id = id;
  this.name = name;
  this.location = location;
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