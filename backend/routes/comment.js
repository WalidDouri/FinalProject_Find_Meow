const express = require('express');
const router = express.Router();
const db = require('../db');
const {createNotification} = require('../helpers/notificationHelpers');


router.get('/', function (req, res) {

  const query = {
    text: `SELECT * FROM comments`
  }
  // const {comments , dated_created} = req.query
  // res.status(200).send("HELLO WORLD")
  db.query(query)
    .then(results =>
      res.status(200)
        .send(results.rows)
    )
    .catch(error => {
      console.error(error)
      res.send(error.message)
    })
});


router.post('/', (req, res) => {
  const { comment, date_created, cat_form_id, user_id } = req.body

  // res.status(200).send("HELLO WORLD")
  db.query(`
      INSERT INTO comments ( comment, date_created, cat_form_id, user_id )
      VALUES($1, $2, $3, $4) RETURNING *;`,
    [comment, date_created, cat_form_id, user_id])
    .then((results) => {
      // SMS
      // const sms = createNotification(cat_form_id);
      // console.log(sms);
      res.status(200);
      res.send(results);
    })
    .catch(error => {
      console.error(error)
    })
})


module.exports = router;


// use this website:https://zetcode.com/javascript/nodepostgres/