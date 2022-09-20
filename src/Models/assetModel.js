const mongooose = require('mongoose');

const assetSchema = new mongooose.Schema({
    // Your code goes here
    propertyType : {required : true, type : String},
    negotable : {required : true, type : String},
    price : {required : true, type : Number},
    ownership : {required : true, type : String},
    propertyAge : {required : true, type : String},
    propertyApproved : {required : true, type : String},
    propertyDescription : {required : true, type : String},
    bankLoan : {required : true, type : String},

    length : {required : true, type : Number},
    breath : {required : true, type : Number},
    totalArea : {required : true, type : Number},
    areaUnit : {required : true, type : String},
    noOfBHK : {required : true, type : Number},
    noOfFloor : {required : true, type : Number},
    attached : {required : true, type : String},
    western : {required : true, type : String},
    furnished : {required : true, type : String},
    carParking : {required : true, type : String},
    lift : {required : true, type : String},
    electricity : {required : true, type : String},
    facing : {required : true, type : String},

    name : {required : true, type : String},
    mobile : {required : true, type : Number},
    postedBy : {required : true, type : String},
    saleType : {required : true, type : String},
    featuredPackage : {required : true, type : String},
    ppdPackage : {required : true, type : String},

    email : {required : true, type : String},
    city : {required : true, type : String},
    area : {required : true, type : String},
    pincode : {required : true, type : Number},
    address : {required : true, type : String},
    landmark : {required : true, type : String},
    latitude : {required : true, type : String},
    longitude : {required : true, type : String},

}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Asset = mongooose.model('assets', assetSchema);

module.exports = Asset;