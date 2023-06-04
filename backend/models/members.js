const mongoose = require("mongoose");
const { isEmail } = require("validator");

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email is already exists"],
        validate: [isEmail, 'Please enter a valid email']
    },
    insta: {
        type: String,
    },
    facebook: {
        type: String,
    }
})

const Member = new mongoose.model('Member', memberSchema);

module.exports = Member;