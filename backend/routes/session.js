const express = require("express");
const router = express.Router();
//Local imports-----------------------------------------
const SessionRecord = require("../models/sessionRecord");
const { Response } = require("../models/response");

/**
 * Creates a session object
 * @returns {SessionRecord} the record of the session
 */
router.route("/Create").post(async (req, res) => {
  const createdBy = req.body.createdBy;
  const roomName = req.body.roomName;
  const subject = req.body.subject;

  const newSession = {
    createdBy: createdBy,
    roomName: roomName,
    subject: subject,
  };

  var newSessionRecord = new SessionRecord(newSession);

  newSessionRecord
    .save()
    .then(() => {
      let response = new Response(true, null, newSession);
      res.send(response);
    })
    .catch(() => {
      let response = new Response(false, "An error occured", null);
      res.send(response);
    });
});

/**
 * Gets all session records
 * @returns {SessionRecord[]} all the sessions
 */
router.route("/GetAll").get(async (req, res) => {
  await SessionRecord.find({})
    .then((records) => {
      let response = new Response(true, null, records);
      res.send(response);
    })
    .catch((err) => {
      let response = new Response(false, "an error occured", null);
      res.send(response);
    });
});

/**
 * Gets all session records
 * @returns {SessionRecord[]} all the sessions
 */
router.route("/Get/:email").get(async (req, res) => {
  const email = req.params.email;
  await SessionRecord.find({ createdBy: email })
    .then((records) => {
      let response = new Response(true, null, records);
      res.send(response);
    })
    .catch((err) => {
      let response = new Response(false, "an error occured", null);
      res.send(response);
    });
});

/**
 * Deletes a session by Id
 */
router.route("/Delete/:id").delete(async (req, res) => {
  const id = req.params.id;
  await SessionRecord.deleteOne({ _id: id })
    .then((record) => {
      let response = new Response(true, null, record);
      res.send(response);
    })
    .catch((err) => {
      let response = new Response(false, "an error occured", null);
      res.send(response);
    });
});

module.exports = router;
