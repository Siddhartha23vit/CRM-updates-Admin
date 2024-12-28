const mongoose = require("mongoose")

const attendance = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: Object,
    }
})

module.exports = mongoose.model('Attendance', attendance)