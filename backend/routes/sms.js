const express = require('express');
const router = express.Router();
// const sendNotification = require('../helpers/notificationHelpers');


const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = (db) => {

  router.get("/:postId", (req, res) => {
    console.log("get: /sms/postId", req.params);
    // sendNotification(req.params.postId);
    const userInfoQuery = `SELECT users.id, first_name, last_name, phone_number, cat_forms.id FROM users JOIN cat_forms ON users.id = cat_forms.user_id WHERE cat_forms.id =$1;`;
    const queryParams = [req.params.postId];
    db.query(userInfoQuery, queryParams)
      .then(data => {
        const user = data.rows[0];
        if (!user) {
          res.status(403).json({ msg: `Doesn't send notification` });
          throw new Error(`This post doesn't exist.`);
        }
        const { id, first_name, last_name, phone_number } = user;
        console.log(id, first_name, last_name, phone_number);
        const msg = `Hi! ${first_name} ${last_name}, your got a comment on your post: ${id}.`;
        if (false) {
          client.messages
            .create({
              body: msg,
              from: process.env.SOURCE_NUMBER,
              to: process.env.DESTINATION_NUMBER
            })
            .then(message => {
              res.status(203).json({ msg: `Sent Notification` });
              console.log(message.sid);
            });
        }
      }).catch(err => {
        console.log(err);
      });
  });

  return router;
};