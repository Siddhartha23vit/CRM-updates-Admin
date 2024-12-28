const mongoose = require("mongoose");

const leadsSchema = mongoose.Schema({
  sourceOfLeads: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "leadSourceType" 
},
  leadName: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "customer" 
  },
  projects:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "projectList" 
},
intrestedIn: {
  type: mongoose.Schema.Types.Mixed,
  refPath: 'intrestedInModel'
},
intrestedInModel: {
  type: String,
  enum: ['flatType', 'rowhouseType', 'farmlandType']
},
  budgetUpto: String,
  AssignTo: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Associate" 
},
  leadRemark: String,
  visitInquiryStatus: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "inquiyStatus" 
},
  visitPlanDate: String,
  visitFollowupRemark: String,
  referenceName: String,
  referencePhone: Number,
});

module.exports = mongoose.model("leadsModel", leadsSchema);
