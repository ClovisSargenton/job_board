var express = require('express');
const bcrypt = require('bcrypt');
const _ = require('lodash');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

/* POST connecting user. */
router.post('/', function (req, res) {
    connection.query(`SELECT * FROM people WHERE emailPeople='${req.body.email}'`, (err, result) => {
        
        if (_.isEmpty(result) || err) {     //vérifie si result est un objet vide
            res.send([false]);
        }
        else {                              //sinon lance la comparaison
            bcrypt.compare(req.body.password, result[0].password).then(valid => {
                res.send([valid, result]);
            }).catch(err => {
                throw err;
            });
        }
    });
});

module.exports = router;