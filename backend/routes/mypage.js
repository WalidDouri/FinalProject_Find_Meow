const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/:id', (req, res) => {
    // getting data from the client
    const getUsernameQuery = `SELECT users.id, first_name, last_name, cat_forms.* FROM users JOIN cat_forms ON users.id = cat_forms.user_id WHERE users.id = $1;`;
    const userId = [req.params.id];

    db.query(getUsernameQuery, userId)
      .then(data => {
        res.json(data.rows);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return router;
};