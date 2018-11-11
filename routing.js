const express = require('express');

var routes = function(Book){

    const router = express.Router();

    router.route('/books')
        .post((req,res) => {
            const book = new Book(req.body);
            book.save();
            res.status(201).send(book);
        })
        .get((req,res) => {
            const query = req.query;
            Book.find(query, (err, books) => {
                if (err) {
                    console.error(err)
                } else {
                    res.json(books);
                }
            });
        });
    router.route('/books/:id')
        .get((req,res) => {
            Book.findById(req.params.id, (err, book) => {
                if (err) {
                    console.error(err)
                } else {
                    res.json(book);
                }
            })
        });

    return router;
};

module.exports = routes;