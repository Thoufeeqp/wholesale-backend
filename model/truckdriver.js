const mongoose = require('mongoose');

const truckDriverSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  mobileNumber:{
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true,
    unique:true
  },
  address: {
    type: String,
    required: true,
  },
  drivingLicense: {
    type: String,
    required: true,
    unique:true
  },
});

const truckdrivers=mongoose.model('TruckDriver', truckDriverSchema);
module.exports = truckdrivers