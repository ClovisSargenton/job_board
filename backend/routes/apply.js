var express = require('express');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

router.post('/', (req, err) => {
    if(req.body.numPeople === null) {
        connection.query(`INSERT INTO infojob (numAdvertisements, mail, ncFirstName, 
            ncLastName, ncEmail) VALUES ('${req.body.numAdvertisements}', 
            '${req.body.mail}', '${req.body.first_name}', '${req.body.last_name}', 
            '${req.body.email}')`, (err) => {
                if(err) {
                    throw err;
                }
            })
    }
    else {
        connection.query(`INSERT INTO infojob (numPeople, numAdvertisements, mail) 
        VALUES ('${req.body.numPeople}', '${req.body.numAdvertisements}', 
            '${req.body.mail}')`, (err) => {
                if(err) {
                    throw err;
                }
            })
    }
});

module.exports = router;