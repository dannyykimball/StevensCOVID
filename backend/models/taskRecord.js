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
        status: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        }
    },
    { collection: "Tasks" }
);

module.exports = mongoose.model("TaskRecord", TaskRecordSchema);
