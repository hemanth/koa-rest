#koa-REST

> REST demo with koa. (wip)

This is a simple demo of RESTful API with [koajs](http://koajs.com/)


__How to try it?__

```sh

$ git clone https://github.com/hemanth/kao-rest

$ cd koa-rest

$ npm install

$ npm run start

```

Open http://localhost:1337 to see the results.


```

GET /books -> List all the books.

GET /books/:id -> Returns the book for the given ID

POST /books/ -> JSON data to inserted to the books db.

PUT /books/:id -> JSON data to update the book data.

DELETE /books/:id -> Removes the book with the specified ID.

OPTIONS / -> Gives the list of allowed request types.

TRACE / -> Blocked for security reasons.

```

__TODO:__

* HEAD
