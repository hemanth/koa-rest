'use strict';
var views = require('co-views');
var parse = require('co-body');
// From lifeofjs
var books = [{
    "name": "Functional JavaScript: Introducing Functional Programming with Underscore.js",
    "author": "Michael Fogus",
    "isbn": "978-1449360726",
    "url": "http://www.amazon.com/Functional-JavaScript-Introducing-Programming-Underscore-js/dp/1449360726"
}, {
    "name": "Maintainable JavaScript - Writing Readable Code",
    "author": "Nicholas C. Zakas",
    "isbn": "978-1449327682",
    "url": "http://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680"
}, {
    "name": "Professional JavaScript for Web Developers",
    "author": "Nicholas C. Zakas",
    "isbn": "978-1118026694",
    "url": "http://books.google.co.in/books?id=C3kabcBG0ZsC"
}, {
    "name": "JavaScript Patterns",
    "author": "Stoyan Stefanov",
    "isbn": "978-0596806750",
    "url": "http://books.google.co.in/books?id=WTZqecc9olUC"
}, {
    "name": "JavaScript: The Definitive Guide",
    "author": "David Flanagan",
    "isbn": "978-0596101992",
    "url": "http://books.google.co.in/books?id=6TAODdEIxrgC"
}, {
    "name": "Secrets of the JavaScript Ninja",
    "author": "John Resig, Bear Bibeault",
    "isbn": "978-1933988696",
    "url": "http://books.google.co.in/books?id=ab8CPgAACAAJ"
}, {
    "name": "Object-Oriented Javascript",
    "author": "Stoyan Stefanov",
    "isbn": "978-1849693127",
    "url": "http://books.google.co.in/books?id=v_oIIyw1vSIC"
}, {
    "name": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "isbn": "978-0596517748",
    "url": "http://books.google.co.in/books?id=PXa2bby0oQ0C"
}, {
    "name": "JavaScript & jQuery: The Missing Manual",
    "author": "David Sawyer McFarland",
    "isbn": "978-1449399023",
    "url": "http://books.google.co.in/books?id=dAJyxUtEZLMC"
}, {
    "name": "High Performance JavaScript",
    "author": "Nicholas C. Zakas",
    "isbn": "978-0596802790",
    "url": "http://books.google.co.in/books?id=ED6ph4WEIoQC"
}, {
    "name": "Eloquent JavaScript: A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "isbn": "978-1593272821",
    "url": "http://eloquentjavascript.net/"
}, {
    "name": "Pro JavaScript Techniques",
    "author": "John Resig",
    "isbn": "978-1590597279",
    "url": "http://books.google.co.in/books?id=GgJN2CC_2s4C"
}, {
    "name": "High Performance Web Sites: Essential Knowledge for Front-End Engineers",
    "author": "Steve Souders",
    "isbn": "978-0596529307",
    "url": "http://stevesouders.com/hpws/"
}, {
    "name": "Even Faster Web Sites",
    "author": "Steve Souders",
    "isbn": "978-0596522308",
    "url": "http://stevesouders.com/efws/"
}, {
    "name": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "isbn": "978-1449331818",
    "url": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
}, {
    "name": "jQuery in Action",
    "author": "Bear Bibeault, Yehuda Katz",
    "isbn": "978-1935182320",
    "url": "http://www.manning.com/bibeault2/"
}, {
    "name": "jQuery Pocket Reference",
    "author": "David Flanagan",
    "isbn": "978-1449397227",
    "url": "http://books.google.co.in/books?id=qPCCUdDefdkC"
}, {
    "name": "Book of Speed [Online]",
    "author": "Stoyan Stefanov",
    "url": "http://www.bookofspeed.com"
}, {
    "name": "JavaScript Allonge [Ebook]",
    "author": "Reginald Braithwaite",
    "url": "https://leanpub.com/javascript-allonge"
}, {
    "name": "JavaScript for PHP Developers",
    "author": "Stoyan Stefanov",
    "isbn": "978-1449320195",
    "url": "http://books.google.co.in/books?id=QT56xKb-S3sC"
}, {
    "name": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "author": "David Herman",
    "isbn": "978-0321812186",
    "url": "http://effectivejs.com/"
}];

var render = views(__dirname + '/../views', {
    map: {
        html: 'swig'
    }
});

module.exports.home = function * home() {
    this.body = yield render('list', {
        'books': books
    });
};

module.exports.list = function * list() {
    this.body = yield books;
};

module.exports.fetch = function * fetch(id) {
    var book = books[id];
    if (!book) {
        this.throw(404, 'book with id = ' + id + ' was not found');
    }
    this.body = yield book;
};
