const mongoose = require("mongoose")

const customerModel = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    whatsappNumber: {
        type: Number
    },
    registerDate: {
        type: Date
    },
    fatherName: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cityModel',
    },
    fullAddress: {
        type: String
    },
    profession: {
        type: String
    },
    emailId: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    anniversary: {
        type: Date
    },
    gender: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    panNumber: {
        type: String
    },
    photo:{
        data:Buffer,
        contentType:String
    }
});

module.exports = mongoose.model("customer",customerModel)