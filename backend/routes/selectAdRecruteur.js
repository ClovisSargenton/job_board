var express = require('express');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();


/* GET home page. */
router.post('/', function(req, res) {
    connection.query(`SELECT numAdvertisements
    FROM advertisements ad JOIN companies comp ON ad.numCompanies = comp.numCompanies
    JOIN people p ON comp.numRecruteur = p.numPeople WHERE numPeople=${req.body.numPeople}`, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

module.exports = router;
