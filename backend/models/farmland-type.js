const mongoose= require("mongoose")

const farmlandType=mongoose.Schema({
    farmlandType:{
        type:String
    },
    farmlandAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("farmlandType",farmlandType)