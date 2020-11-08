var express = require('express');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();


router.post('/', (req, res ) => {
    connection.query('SELECT * FROM people', (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
});

module.exports = router;