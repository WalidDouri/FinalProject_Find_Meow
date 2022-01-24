"use strict";

const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/map/:cat_forms/marker', function (req, res) {
    const cat_forms = req.params.cat_form
    const { lng, lat, place_id } = req.query;
    db.query("SELECT id FROM cat_forms WHERE lng = $1 AND lat = $2 AND place_id = $3 AND map_id = $4", [parseFloat(lng), parseFloat(lat), place_id, cat_forms])

      .then(result => {
        res.send(result.rows)
      })
      .catch(error => {
        res.status(500).send("error.message")
        // console.log("hello:", error);
      })

  });

  return router;
};
