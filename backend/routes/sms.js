const express = require('express');
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = (db) => {

  router.get("/:id", (req, res) => {
    console.log("Success");
    const isUser = true;
    const msg = "Good morning";
    if (isUser) {
      client.messages
        .create({
          body: msg,
          from: process.env.SOURCE_NUMBER,
          to: process.env.DESTINATION_NUMBER
        })
        .then(message => console.log(message.sid));
    }
    res.json({result: "OK"});
  });

  return router;
};
