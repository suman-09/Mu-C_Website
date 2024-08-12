const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    insta: {
        type: String
    },
    facebook: {
        type: String
    }
})

const Member = new mongoose.model('Member', memberSchema);

module.exports = Member;