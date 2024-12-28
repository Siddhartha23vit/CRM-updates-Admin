const mongoose = require('mongoose');

// create login schema
const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: { type: String, default: 'user' },
    phoneNumber: { type: Number },
    firstName: String,
    lastName: String,
    createdDate: {
        type: Date,
    },
    deleted: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('user', user)
