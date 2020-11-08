var express = require('express');
const bcrypt = require('bcrypt');
const _ = require('lodash');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

/* POST registering user. */
router.post('/', function(req, res) {
    bcrypt.hash(req.body.pwd_string, 10).then(hash => {
        connection.query(`INSERT INTO people (nomPeople, prenomPeople, emailPeople, password, typeUser)
        VALUES ('${req.body.lastName}', '${req.body.firstName}', '${req.body.email_string}', '${hash}', '${req.body.typeUser}')`, (err) => {
            if(err) {
                throw err;
            }
            console.log(!_.isEmpty(req.body.companieName));
            if(!_.isEmpty(req.body.companieName)) {
                connection.query(`SELECT numPeople FROM people 
                WHERE emailPeople='${req.body.email_string}' AND nomPeople='${req.body.lastName}' AND prenomPeople='${req.body.firstName}'`, (err, result) => {
                    if (err) {
                        throw err;
                    }
                    connection.query(`INSERT INTO companies (nomCompanies, numRecruteur) VALUES ('${req.body.companieName}', '${result[0].numPeople}')`, (err) => {
                        if (err) {
                            throw err;
                        }
                    });
                });
            }
        });
    });
});

module.exports = router;