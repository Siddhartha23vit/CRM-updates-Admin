const mongoose= require("mongoose")

const rowhouseType=mongoose.Schema({
    rowhouseType:{
        type:String
    },
    rowhouseAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("rowhouseType",rowhouseType)