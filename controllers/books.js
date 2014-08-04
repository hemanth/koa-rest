'use strict';
var views = require('co-views');
var parse = require('co-body');
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/library');
var co = require('co');

var books = wrap(db.get('books'));

// From lifeofjs
co(function * () {
  var books = yield books.find({});
})

var render = views(__dirname + '/../views', {
  map: {
    html: 'swig'
  }
});

module.exports.home = function * home() {
  if ('GET' != this.method) return yield next;
  this.body = yield render('layout');
};

module.exports.list = function * list() {
  if ('GET' != this.method) return yield next;
  this.body = yield render('list', {
    'books': yield books.find({})
  });
};

module.exports.fetch = function * fetch(id) {
  if ('GET' != this.method) return yield next;
  var book = yield books.find({}, {
    'skip': id - 1,
    'limit': 1
  });
  if (!book) {
    this.throw(404, 'book with id = ' + id + ' was not found');
  }
  this.body = yield book;
};

module.exports.add = function * add(data) {
  if ('POST' != this.method) return yield next;
  var book = yield parse(this, {
    limit: '1kb'
  });
  var inserted = yield books.insert(book);
  if (!inserted) {
    this.throw(303, "The book couldn't be added.");
  }
  this.body = 'Done!';
}
