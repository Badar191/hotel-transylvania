const mongoose = require('mongoose');

const Schema = mongoose.Schema
const signupSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    sname: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    phonenumb: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    }
});

const signup = mongoose.model('signup', signupSchema);
module.exports = signup;