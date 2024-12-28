const mongoose= require("mongoose")

const inquiryStatus = mongoose.Schema({
    inquiryStatus:{
        type:String
    },
    inquiryAlias:{
        type:String
    },
    stageType:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("inquiyStatus",inquiryStatus)