const mongoose = require("mongoose")

const chargeModel = mongoose.Schema({
    chargeName:{
        type:String
    },
    chargeAlias:{
        type:String
    },
    chargeType:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("chargeModel",chargeModel)