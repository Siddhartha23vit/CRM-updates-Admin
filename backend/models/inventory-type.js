const mongoose = require("mongoose")

const inventoryType = mongoose.Schema({
    inventoryType:{
        type:String
    },
    unitType:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("inventoryType",inventoryType)