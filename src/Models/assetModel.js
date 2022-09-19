const mongooose = require('mongoose');

const assetSchema = new mongooose.Schema({
    // Your code goes here

}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Asset = mongooose.model('assets', assetSchema);

module.exports = Asset;