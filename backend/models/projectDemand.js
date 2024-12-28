const mongoose = require("mongoose")

const projectDemandSchema = mongoose.Schema({
    date:{
        type: String
    },
    progressName:{
        type: String
    },
    building:{
        type: String
    },
    demand:{
        type: String
    },
    description:{
        type: String
    }
})

module.exports = mongoose.model('ProjectDemand',projectDemandSchema)