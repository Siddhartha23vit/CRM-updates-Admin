const mongoose= require("mongoose")

const leadSourceType=mongoose.Schema({
    leadSourceType:{
        type:String
    },
    leadSourceAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("leadSourceType",leadSourceType)