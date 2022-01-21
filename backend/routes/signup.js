const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post('/', (req, res) => {
    // getting data from the client
    const newUser = req.body;
    // console.log("This is username from frontend", newUser.username);
    const getUsernameQuery = `SELECT * FROM users WHERE username = $1;`;
    const username = [newUser.username];

    db.query(getUsernameQuery, username)
      .then(data => {
        const user = data.rows[0];
        console.log(user);
        if (user) {
          res.status(403).send({ message: 'The username is already registered' });
          console.log("RETURNING, NO MORE QUERIES");
          // throwing an error is like a break statement
          // it will jump directly to the catch block
          throw new Error("The username is already registered, username has to be unique");
        }
        // Insert user data to database
        const signUpQuery = "INSERT INTO users(first_name, last_name, username, phone_number, email, password) VALUES($1, $2, $3, $4, $5, $6) returning id";

        const queryParams = [newUser.first_name, newUser.last_name, newUser.username, newUser.phone_number, newUser.email, newUser.password];

        // when chaining .then blocks, make sure to return a promise (db.query returns a promise):
        // need to include 'return', or else it will not pass data to next block
        return db.query(signUpQuery, queryParams);
      }).then((data) => {
        const id = data.rows[0].id;
        res.status(200).send({
          message: "Signup successfully!",
          id: id
        });
      }).catch(err => {
        console.log(err);
      });
  });

  return router;
};