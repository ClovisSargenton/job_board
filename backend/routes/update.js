var express = require('express');

let _ = require('lodash');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

/* POST registering user. */


router.post('/', function (req, res) {
    if (_.isEmpty(req.body.titre)) {
        connection.query(`SELECT * FROM advertisements WHERE numAdvertisements='${req.body.numAdvertisements}'`, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        });
    }
    else {
        connection.query(`UPDATE advertisements SET titre='${req.body.titre}', objet='${req.body.objet}', contenu='${req.body.contenu}', date='${Date(Date.now()).slice(0, 25)}'
            WHERE numAdvertisements='${req.body.numAdvertisements}'`, err => {
            if (err) {
                throw err;
            }
        });
    }
});

module.exports = router;