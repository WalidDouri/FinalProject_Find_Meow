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
          res.status(403).json({msg: 'This username is not registered!'});
          return;
        }

        if (user.username === req.body.username && user.password === req.body.password) {
          res.status(204).json({ result: "Login success!" });
        } else {
          res.send({ result: "Incorrect password!" });
          res.status(403);
        }
      }).catch(err => {
        console.log(err);
      });

    // const user = getUserByUsername(loginInfo.username);
    // console.log(user);
    // if (!user) {
    //   res.status(400);
    //   res.send('This username is not registered!');
    //   return;
    // } else if (user.password === loginInfo.password) {
    //   req.session.userId = user.id;
    //   console.log(req.session.userId);
    //   if (!req.session.userId) {
    //     res.redirect("/");
    //     return;
    //   }
    // }

    // sending a response back to the front
    // res.status(204).json({result: "success!"});
    // res.send({ test: "Yay! From Server" });
  });

  return router;
};