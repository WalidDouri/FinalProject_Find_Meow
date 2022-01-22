const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req, res) => {
    const signUpQuery = `SELECT * FROM users WHERE username = $1;`;
    const queryParams = [req.body.username];
    db.query(signUpQuery, queryParams)
      .then(data => {
        const user = data.rows[0];
        if (!user) {
          res
            .status(401)
            .send({ message: 'This username is not registered!' });
          return;
        }

        if (user.username === req.body.username && user.password === req.body.password) {
          const id = data.rows[0].id;
          res
            .status(200)
            .send({
              message: "Login success!",
              id: id
            });
        } else {
          res
            .status(401)
            .send({ message: "Incorrect password!" });
        }
      }).catch(err => {
        console.log(err);
      });
      
  });

  return router;
};