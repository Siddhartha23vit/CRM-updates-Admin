const mongoose = require("mongoose");

const projectList = mongoose.Schema({
  projectName: String,
  headName: String,
  companyName: String,
  reraNumber: String,
  totalBuilding:{
    type:Number,
    default:0
  },
  totalPlot:{
    type:Number,
    default:0
  },
  totalfarmLand:{
    type:Number,
    default:0
  },
  totalrowHouse:{
    type:Number,
    default:0
  },
  mobileNumber: String,
  amenities: {
    type:Array,
    default:[]
  },
  guideLineValue: String,
  projectType: String,
  startDate: String,
  completionDate: String,
  projectDescription: String,
  status: String,
  state: String,
  city: String,
  address: String,
  latitude: String,
  longitude: String,
  bank: String,
  accountNumber: String,
  ifscCode: String,
  bankAddress: String,
  commissionMethod: String,
  commission: String,
  inclusiveRegistry: String,
  buildingList: [
    {
      buildingName: String,
      buildingFloor:String,
      buildingflat:String,
      buildingStatus: String,
      buildingStartDate: String,
      buildingCompletionDate: String,
      buildingAmenties: String,
      remark: String,
      floorList: [
        {
          floorName: String,
          floorflat: String,
          floorStatus: String,
          remark: String,
          flatList: [
            {
              flatName: String,
              flatNumber: String,
              flatType: String,
              squareBuildingArea: String,
              buildupArea: String,
              flatPricing: String,
              price: String,
              PLCcharges: String,
              cost: String,
              guideLineValue: String,
              inventoryType: String,
              status: String,
              remark: String,
            },
          ],
        },
      ],
    },
  ],
  plotList: [
    {
      plotName: String,
      plotWidth: String,
      plotDepth: String,
      totalSize: String,
      facing: String,
      price: String,
      plcCharge: String,
      amount: String,
      guideLineValue: String,
      inventoryType: String,
      status: String,
      remark: String,
    },
  ],
  rowHouseList: [
    {
      rowHouseName: String,
      rowHouseWidth: String,
      rowHouseDepth: String,
      totalSize: String,
      type: String,
      facing: String,
      rate: String,
      plcCharge: String,
      amount: String,
      guideLineValue: String,
      inventoryType: String,
      status: String,
      remark: String,
    },
  ],
  farmLandList: [
    {
      farmLandName: String,
      farmLandWidth: String,
      farmLandDepth: String,
      farmlandtype:String,
      totalSize: String,
      facing: String,
      FramLandRate: String,
      plcCharge: String,
      amount: String,
      guideLineValue: String,
      inventoryType: String,
      status: String,
      remark: String,
    },
  ],
});

module.exports = mongoose.model("projectList", projectList);
