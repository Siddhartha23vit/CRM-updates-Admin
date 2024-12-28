const mongoose = require("mongoose");

const associateSchema = new mongoose.Schema({
  registerDate: { type: String },
  fullName: { type: String },
  fatherOrHusbandName: { type: String },
  state: { type: String },
  city: { type: String },
  fullAddress: { type: String },
  dateOfBirth: { type: String },
  panNo: { type: String },
  aadhar: { type: String },
  qualification: { type: String },
  mobileNumber: { type: String },
  whatsappNumber: { type: String },
  emailId: { type: String },
  commission: { type: String },
  applicantDesignation: { type: String },
  role:{type:String},
  nomineeName: { type: String },
  nomineeMobileNumber: { type: String },
  relationWithNominee: { type: String },
  sponsorBy: { type: String },
  Sponsorcommission: { type: String },
  sponsorMobile: { type: String },
  sponsorDesignation: { type: String },
  photo: {
    data:Buffer,
    contentType:String
  },
  uniqueId: {
    type:String,
  },
  password:{
    type:String
  }
});

module.exports = mongoose.model("Associate", associateSchema);

