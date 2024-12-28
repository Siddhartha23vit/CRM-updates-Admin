const mongoose= require("mongoose")

const projectprogressType=mongoose.Schema({
    projectprogressType:{
        type:String
    },
    progress:{
        type:String
    },
    projectprogressAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("projectprogressType",projectprogressType)