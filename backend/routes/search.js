const express = require('express');
const router = express.Router();
const db = require('../db');


/* Search Form */

router.get('/', function (req, res) {

  const { last_seen_city, last_seen_postal_code, status } = req.query
  console.log("hello:", last_seen_city);

  // use exact values
  db.query(`
    SELECT 
    last_seen_city,
    last_seen_postal_code,
    status
    FROM cat_forms WHERE 
    last_seen_city LIKE $1 OR
    last_seen_postal_code LIKE $2 OR 
    status LIKE $3;`,
    [`%${last_seen_city}`, `%${last_seen_postal_code}`, `%${status}`])
    .then(results =>
      res.status(200).send(results.rows)
    )
    .catch(error => {
      console.error(error)
      res.send(error.message)
    })
});

module.exports = router;