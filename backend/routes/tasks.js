const express = require("express");
const router = express.Router();
//Local imports-----------------------------------------
const TaskRecord = require("../models/taskRecord");
const UserRecord = require("../models/userRecord")
const { Response } = require("../models/response");

/**
 * Creates a task object
 * @returns {TaskRecord} the record of the task
 */
router.route("/Create").post(async (req, res) => {
  const name = req.body.name;
  const duration = req.body.duration;
  const description = req.body.description;
  const isDone = req.body.isDone;

  const newTask = {
    name: name,
    duration: duration,
    description: description,
    isDone: isDone
  };

  var newTaskRecord = new TaskRecord(newTask);

  newTaskRecord
    .save()
    .then(() => {
      let response = new Response(true, null, newTask);
      res.send(response);
    })
    .catch(() => {
      let response = new Response(false, "An error occured", null);
      res.send(response);
    });
});

/**
 * Adds a task id to a user
 * @returns {String} all the Tasks
 */
router.route("/AddToUser/:userid").post(async (req, res) => {
  const userid = req.params.userid;
  const taskId = req.body.id;
  await UserRecord.findOne({ _id: userid })
    .then((user) => {
      user.tasks.push(taskId);
      user.save()
      let response = new Response(true, null, taskId);
      res.send(response);
    })
    .catch((err) => {
      let response = new Response(false, "an error occured", null);
      res.send(response);
    });
});

/**
 * Adds a task id to a user
 * @returns {TaskRecord} all the Tasks
 */
router.route("/Get/:id").get(async (req, res) => {
  const taskId = req.params.id;
  console.log(taskId)
  await TaskRecord.findOne({ _id: taskId })
    .then((task) => {
      console.log(task)
      let response = new Response(true, null, task);
      res.send(response);
    })
    .catch((err) => {
      let response = new Response(false, "an error occured", null);
      res.send(response);
    });
});

/**
 * Marks task as done
 * @returns {TaskRecord} 
 */
router.route("/MarkDone/:id").post(async (req, res) => {
  const taskId = req.params.id;
  await TaskRecord.findOne({ _id: taskId })
    .then((task) => {
      task.isDone = true;
      task.save();
      let response = new Response(true, null, task);
      res.send(response);
    })
    .catch((err) => {
      let response = new Response(false, "an error occured", null);
      res.send(response);
    });
});

/**
 * Marks task as done
 * @returns {TaskRecord} 
 */
router.route("/MarkUnDone/:id").post(async (req, res) => {
  const taskId = req.params.id;
  await TaskRecord.findOne({ _id: taskId })
    .then((task) => {
      task.isDone = false;
      task.save();
      let response = new Response(true, null, task);
      res.send(response);
    })
    .catch((err) => {
      let response = new Response(false, "an error occured", null);
      res.send(response);
    });
});




module.exports = router;
