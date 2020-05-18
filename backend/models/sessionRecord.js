const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const SessionRecordSchema = new Schema(
    {
        createdBy: {
            type: String,
            required: true,
        },
        roomName: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        }
    },
    { collection: "Sessions" }
);

module.exports = mongoose.model("SessionRecord", SessionRecordSchema);
