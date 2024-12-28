const mongoose= require("mongoose")

const flatType=mongoose.Schema({
    flatType:{
        type:String
    },
    flatTypeAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("flatType",flatType)