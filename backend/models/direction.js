const mongoose = require("mongoose")

const directionModel = mongoose.Schema({
    direction:{
        type:String
    },
    directionAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports= mongoose.model("directionModel",directionModel)