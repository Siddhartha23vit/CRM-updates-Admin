const mongoose = require("mongoose")

const userType =  mongoose.Schema({
    type:{
        type:String
    },
    backOffice:{
        type:Boolean
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("userType",userType)