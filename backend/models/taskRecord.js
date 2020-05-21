const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const TaskRecordSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        isDone: {
            type: Boolean,
            required: true,
        }
    },
    { collection: "Tasks" }
);

module.exports = mongoose.model("TaskRecord", TaskRecordSchema);
