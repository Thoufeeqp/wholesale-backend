const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
  }
});

const admins=mongoose.model('admin', adminSchema);
module.exports = admins