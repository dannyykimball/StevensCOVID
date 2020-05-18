const express = require("express");
const router = express.Router();
//Local imports-----------------------------------------
const UserRecord = require("../../models/userRecord");
const { Response } = require("../../models/response")

/**
 * Creates an account in MongoDB
 * @returns {UserRecord} the record of the user
 */
router.route("/Signup").post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const isTutor = req.body.isTutor;
    const school = req.body.school;
    const year = req.body.year;

    const newUser =
    {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        school: school,
        year: year,
        isTutor: isTutor
    }

    var newUserRecord = new UserRecord(newUser)

    await UserRecord.findOne({ email: email })
        .then((record) => {
            if (record) {
                let response = new Response(false, "Account Exists", null);
                res.send(response);
            } else {
                newUserRecord.save()
                    .then(() => {
                        let response = new Response(true, null, newUser);
                        res.send(response)
                    })
                    .catch(() => {
                        let response = new Response(false, "An error occured", null);
                        res.send(response);
                    })
            }
        }).catch(() => {
            let response = new Response(false, "An error occured", null);
            res.send(response);
        })
});

/**
 * Gets a user's record by email
 * @returns {UserRecord} the record of the user
 */
router.route("/Get/:email").get(async (req, res) => {
    const email = req.params.email;
    await UserRecord.findOne({ email: email })
        .then((record) => {
            let response = new Response(true, null, record);
            res.send(response);
        })
        .catch((err) => {
            let response = new Response(false, "an error occured", null);
            res.send(response);
        })
});

/**
 * Gets all user records
 * @returns {UserRecord[]} the record of the user
 */
router.route("/GetAll").get(async (req, res) => {
    await UserRecord.find({})
        .then((records) => {
            let response = new Response(true, null, records);
            res.send(response);
        })
        .catch((err) => {
            let response = new Response(false, "an error occured", null);
            res.send(response);
        })
});

/**
 * Checks if a users login is correct
 * @returns {UserRecord} the record of the user
 */
router.route("/Login").post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    await UserRecord.findOne({ email: email })
        .then((record) => {
            if (record.password === password) {
                let response = new Response(true, null, record);
                res.send(response);
            }
            else {
                let response = new Response(false, "Wrong Password", null);
                res.send(response);
            }
        })
        .catch((err) => {
            let response = new Response(false, "An account with that email does not exist", null);
            res.send(response);
        })
});


module.exports = router;
