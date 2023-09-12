const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactInformation: String,
  email: {
    type: String,
    required: true,
    unique: true,
  }
});
const vendors=mongoose.model('Vendor', vendorSchema);
module.exports=vendors