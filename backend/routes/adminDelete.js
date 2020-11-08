var express = require('express');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

router.post('/', (req) => {
    connection.query(`DELETE FROM people WHERE numPeople = ${req.body.numPeople}`, (err) => {
        if (err) {
            throw err;
        }
        console.log('deleted');
    })
})

module.exports = router;