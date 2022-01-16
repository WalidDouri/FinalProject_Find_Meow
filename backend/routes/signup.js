const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'signup' });
});

router.put('/', function(req, res) {
  // getting data from the front
  const newUser = req.body;
  console.log("This is from frontend", newUser);
  
  // do some db stuff
  

  // sending a response back to the front
  // res.status(204).json({result: "success!"});
  res.send({test: "Yay!"});
  
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