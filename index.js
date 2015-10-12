var express = require('express');
var app = express();
var cheerio = require('cheerio');
var _ = require('underscore');
var request = require('request');
var Firebase = require('firebase');

var dataStore = new Firebase('https://retail-store-app.firebaseio.com/');
var url = 'http://www.ralphlauren.com/family/index.jsp?categoryId=72870866&cp=1760781&s=A-ProductAge&ab=ln_men_cs_newarrivals'

var createStore = false;

app.listen(3000, function() {

  if (createStore) {

    var results = [];
    var opts = {
      normalizeWhitespace: true,
      xmlMode: false
    };

    request(url, function(err, response, html) {
      var $ = cheerio.load(html, opts);
      $body = $('body');
      $products = $('body').find('.product');
      _.each($products, function(product) {

        var obj = {};

        obj.title = $(product).find('.prodtitle').text();
        if (obj.title && obj.title.indexOf('$') !== -1) {
          obj.title = obj.title.split(':')[0];
        }

        obj.cost = $(product).find('.product-details').find('.money').find('a').text();
        if (obj.cost && obj.cost.indexOf('Price') !== -1) {
          obj.cost = obj.cost.split(' ')[1];
        }

        obj.photo = $(product).find('.photo img').attr('src');

        results.push(obj);
      });
      dataStore.set(results);

    });
  }
});
