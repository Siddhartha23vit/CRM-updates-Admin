const mongoose = require("mongoose")

const documentType = mongoose.Schema({
    documentType:{
        type:String
    },
    documentAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("documentType",documentType)