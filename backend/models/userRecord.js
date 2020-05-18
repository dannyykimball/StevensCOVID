const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserRecordSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        school: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        isTutor: {
            type: Boolean,
            required: true,
        },
    },
    { collection: "Users" }
);

module.exports = mongoose.model("UserRecord", UserRecordSchema);
