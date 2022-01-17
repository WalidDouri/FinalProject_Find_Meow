const express = require('express');
const router = express.Router();

/* Signup */

router.put('/', function(req, res) {
  // getting data from the client
  const newUser = req.body;
  console.log("This is from frontend", newUser);
  
  // do some db stuff
  const signUpQuery = "INSERT INTO users(first_name, last_name, username, phone_number, email, password) VALUES($1, $2, $3, $4, $5, $6) returning id";
  const queryParams = [newUser.first_name,
    newUser.last_name, newUser.username, newUser.phone_number, newUser.email, newUser.password];

  console.log(queryParams);
  // db.query(signUpQuery, queryParams).then(data =>{
  //   console.log(data.rows);
  // }).catch(err =>{
  //   console.log(err);
  // });
  

  // sending a response back to the front
  // res.status(204).json({result: "success!"});
  res.send({test: "Yay! From Server"});
  
});


//example
// router.put("/appointments/:id", (request, response) => {
//   if (process.env.TEST_ERROR) {
//     setTimeout(() => response.status(500).json({}), 1000);
//     return;
//   }

//   const { student, interviewer } = request.body.interview;

//   db.query(
//     `
//     INSERT INTO interviews (student, interviewer_id, appointment_id) VALUES ($1::text, $2::integer, $3::integer)
//     ON CONFLICT (appointment_id) DO
//     UPDATE SET student = $1::text, interviewer_id = $2::integer
//   `,
//     [student, interviewer, Number(request.params.id)]
//   )
//     .then(() => {
//       setTimeout(() => {
//         response.status(204).json({});
//         updateAppointment(Number(request.params.id), request.body.interview);
//       }, 1000);
//     })
//     .catch(error => console.log(error));
// });

module.exports = router;