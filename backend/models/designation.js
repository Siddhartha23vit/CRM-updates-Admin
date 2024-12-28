const mongoose = require("mongoose")

const designationModel = mongoose.Schema({
    designationName:{
        type:String
    },
    designationAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("designationModel",designationModel)