const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/:id', (req, res) => {
    
    const userId = [req.params.id];
    const getUserQuery = `SELECT first_name, last_name, username, phone_number,email FROM users WHERE id = $1;`;
    const getCatFomrsQuery = `SELECT * FROM cat_forms JOIN users ON users.id = cat_forms.user_id WHERE users.id = $1;`;
    
    const userPromise = db.query(getUserQuery, userId);
    const catFomrsPromise = db.query(getCatFomrsQuery, userId);

    Promise.all([userPromise, catFomrsPromise])
      .then(data => {
        const user = data[0].rows;
        const catForms = data[1].rows;
        res
          .status(200)
          .json({user, catForms});
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  return router;
};