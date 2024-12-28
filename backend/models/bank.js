const mongoose = require("mongoose")

const bankModel =  mongoose.Schema({
    bankName:{
        type:String
    },
    contactPerson:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    status:{
        type:Boolean
    },
    bankAlias:{
        type:String
    }
})

module.exports = mongoose.model("bankModel",bankModel)