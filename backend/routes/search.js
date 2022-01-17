const express = require('express');
const router = express.Router();

/* Search Form */
      ///api/searchform
router.get('/', function(req, res) {
  // getting data from the client
  // const newUser = req.body;
  console.log("req------>", req);
  console.log('====================');
  console.log("res------>", res)

  
  // do some db stuff
  // const signUpQuery = "INSERT INTO users(first_name, last_name, username, phone_number, email, password) VALUES($1, $2, $3, $4, $5, $6) returning id";
  // const queryParams = [newUser.first_name,
  //   newUser.last_name, newUser.username, newUser.phone_number, newUser.email, newUser.password];

  // console.log(queryParams);
  // db.query(signUpQuery, queryParams).then(data =>{
  //   console.log(data.rows);
  // }).catch(err =>{
  //   console.log(err);
  // });
  

  // sending a response back to the front
  // res.status(204).json({result: "success!"});
  res.send({test: "Yay! From Server"});
  
});
module.exports = router;