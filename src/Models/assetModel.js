const mongooose = require('mongoose');

const assetSchema = new mongooose.Schema({
    // Your code goes here
    propertyType: { required: true, type: String },
    negotable: { required: true, type: String },
    price: { required: true, type: String },
    ownership: { required: true, type: String },
    propertyAge: { required: true, type: String },
    propertyApproved: { required: true, type: String },
    propertyAge: { required: true, type: String },
    propertyDescription: { required: true, type: String },
    bankLoan: { required: true, type: String },

    length: { required: true, type: String },
    breath: { required: true, type: String },
    totalArea: { required: true, type: String },
    areaUnit: { required: true, type: String },
    noOfBHK: { required: true, type: String },
    noOfFloor: { required: true, type: String },
    attached: { required: true, type: String },
    western: { required: true, type: String },
    furnished: { required: true, type: String },
    carParking: { required: true, type: String },
    lift: { required: true, type: String },
    electricity: { required: true, type: String },
    facing: { required: true, type: String },

    name: { required: true, type: String },
    mobile: { required: true, type: String },
    postedBy: { required: true, type: String },
    saleType: { required: true, type: String },
    featuredPackage: { required: true, type: String },
    ppdPackage: { required: true, type: String },

    email: { required: true, type: String },
    city: { required: true, type: String },
    area: { required: true, type: String },
    pincode: { required: true, type: String },
    address: { required: true, type: String },
    landmark: { required: true, type: String },
    latitude: { required: true, type: String },
    longitude: { required: true, type: String },
    PPDId: { required: true, type: String },
    Views: { required: true, type: String },
    DaysLeft: { required: true, type: String }

}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Asset = mongooose.model('assets', assetSchema);

module.exports = Asset;