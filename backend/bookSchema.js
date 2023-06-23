const mongoose = require('mongoose');

const Schema = mongoose.Schema
const bookSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    suite: {
        type: String,
        required: true
    }
});

const book = mongoose.model('book', bookSchema);
module.exports = book;