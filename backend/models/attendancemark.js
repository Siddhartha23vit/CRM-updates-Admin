const mongoose = require("mongoose");

const markattendence=new mongoose.Schema({
    Date:{
        type:String
    },
    Name:{
        type:String
    },
    status:{
        type:String
    },
    Project:{
        type:String
    },
    Remark:{
        type:String
    },
})
module.exports = mongoose.model("markattendence",markattendence)