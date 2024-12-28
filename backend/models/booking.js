const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    Date: {
        type: String
    },
    visit: {
        type: String
    },
    AssociateName: {
        type: String
    },
    Associatecommission: {
        type: String
    },
    associatenumber: {
        type: String
    },
    UnitType: {
        type: String
    },
    project: {
        type: String
    },
    Building: {
        type: String
    },
    unitNo: {
        type: String
    },
    fullName1: {
        type: String
    },
    mobileNumber1: {
        type: String
    },
    whatsappNumber1: {
        type: String
    },
    fatherName1: {
        type: String
    },
    fullAddress1: {
        type: String
    },
    emailId1: {
        type: String
    },
    dateOfBirth1: {
        type: Date
    },
    relation1: {
        type: String
    },
    fullName2: {
        type: String
    },
    mobileNumber2: {
        type: String
    },
    whatsappNumber2: {
        type: String
    },
    fatherName2: {
        type: String
    },
    fullAddress2: {
        type: String
    },
    emailId2: {
        type: String
    },
    dateOfBirth2: {
        type: Date
    },
    relation2: {
        type: String
    },
    RefferalName: {
        type: String
    },
    paymentmode: {
        type: String
    },
    remark: {
        type: String
    },
    ProjectCommission: {
        type: Number,
        default: 0
    },
    CommissionMethod: {
        type: Number,
        default: 0
    },
    InclusiveRegistry: {
        type: Number,
        default: 0
    },
    UnitSize: {
        type: Number,
        default: 0
    },
    Amount: {
        type: Number,
        default: 0
    },
    MPEBS: {
        type: Number,
        default: 0
    },
    Maintenance: {
        type: Number,
        default: 0
    },
    CornerCharges: {
        type: Number,
        default: 0
    },
    GST: {
        type: Number,
        default: 0
    },
    ParkingCharge: {
        type: Number,
        default: 0
    },
    TotalAmount: {
        type: Number,
        default: 0
    },
    CompanyDiscount: {
        type: Number,
        default: 0
    },
    OtherDiscount: {
        type: Number,
        default: 0
    },
    NetTotal: {
        type: Number,
        default: 0
    },
    TotalPaid: {
        type: Number,
        default: 0
    },
    DueAmount: {
        type: String
    }
});

module.exports = mongoose.model("bookingModel", bookingSchema);

