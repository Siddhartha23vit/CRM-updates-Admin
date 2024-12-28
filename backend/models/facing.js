const mongoose = require("mongoose")

const facingModel = mongoose.Schema({
    facing:{
        type:String
    },
    facingAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("facingModel",facingModel)