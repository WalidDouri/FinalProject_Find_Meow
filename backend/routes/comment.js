const express = require('express');
const router = express.Router();
const db = require('../db');


/* Search Form */

router.get('/', function (req, res) {

  const query = {
    text: `SELECT * FROM comments`
  }

  return db.query(query)
    .then(result => result.rows)
    .catch(err => err);

});

module.exports = router;