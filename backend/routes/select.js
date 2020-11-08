var express = require('express');

let connection = require('../public/javascripts/phpMyAdmin');

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  connection.query('SELECT * FROM advertisements', (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

module.exports = router;
