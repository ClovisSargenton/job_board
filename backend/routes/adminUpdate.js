var express = require('express');

let _ = require('lodash');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

router.post('/', (req, res) => {
    if (_.isEmpty(req.body.nomPeople)) {
        connection.query(`SELECT * FROM people WHERE numPeople='${req.body.numPeople}'`, (err, result) => {
            if (err) {
                throw err;
            }
            else {
                res.send(result);
            }
        });
    }
    else {
        connection.query(`UPDATE people SET prenomPeople='${req.body.prenomPeople}', 
        nomPeople='${req.body.nomPeople}', emailPeople='${req.body.emailPeople}' 
        WHERE numPeople='${req.body.numPeople}'`, (err) => {
            if (err) {
                throw err;
            }
        })
    }
});

module.exports = router;