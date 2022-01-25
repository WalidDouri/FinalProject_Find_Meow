const express = require('express');
const router = express.Router();
const db = require('../db');
// const { createNotification } = require('../helpers/notificationHelpers');


router.get('/:id', (req, res) => {

  const query = {
    text: `SELECT comments.id, cat_form_id, comment, cat_forms.date_created, users.username
      FROM comments 
      JOIN cat_forms ON cat_forms.id = comments.cat_form_id
      JOIN users ON users.id = comments.user_id 
      WHERE cat_forms.id = $1;`
  }
  const catFormId = [req.params.id];

  // res.status(200).send("HELLO WORLD")
  db.query(query, catFormId)
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
  const { comment, date_created, cat_form_id } = req.body

  // res.status(200).send("HELLO WORLD")
  db.query(`
      INSERT INTO comments (comment, date_created, cat_form_id, user_id)
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