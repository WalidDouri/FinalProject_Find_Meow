const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

module.exports = (db) => {

  router.post('/', (req, res) => {
    db.query(`SELECT * FROM users WHERE username = $1;`, [req.body.username])
      .then(data => {
        const user = data.rows[0];
        if (!user) {
          res
            .status(401)
            .send({ message: 'This username is not registered.' });
          return;
        }

        bcrypt.compare(req.body.password, user.password)
          .then(result => {
            if (result) {
              // req.session.user_id = user.id;
              res
                .status(200)
                .send({
                  message: "Login Success!",
                  id: user.id
                });
            } else {
              res
                .status(401)
                .send({ message: "Entry password invalid. Try again!" });
            }
          });
      }).catch(err => {
        console.log(err);
      });
  });

  return router;
};