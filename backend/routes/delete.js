var express = require('express');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  connection.query(`DELETE FROM advertisements WHERE numAdvertisements = ${req.body.numAdvertisements}`, (err, result) => {
    if (err) {
      throw err;
    }
  });
});

module.exports = router;
