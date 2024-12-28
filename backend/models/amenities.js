const mongoose= require("mongoose")

const amenityType=mongoose.Schema({
    amenityType:{
        type:String
    },
    amenity:{
        type:String
    },
    amenityAlias:{
        type:String
    },
    status:{
        type:Boolean
    }
})

module.exports = mongoose.model("amenityType",amenityType)