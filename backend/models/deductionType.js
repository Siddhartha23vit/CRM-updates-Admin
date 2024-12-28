const mongoose = require("mongoose")

const deductionType = mongoose.Schema({
    deductionName:{
        type:String
    },
    deductionPercentage:{
        type:Number
    },
    deductionType:{
        type:String
    },
    status:{
        type:Boolean
    }
})


module.exports = mongoose.model("deductionType", deductionType)
