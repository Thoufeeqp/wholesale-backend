const admins = require("../model/admin");
const jwt=require('jsonwebtoken')
// To register a new admin
exports.createadmin=async(req,res)=>{
    
    try {
        const { name,mobileNumber,password } = req.body;
        // To check admin already exist or not
         const admin=await admins.findOne({name,mobileNumber})
         if(admin){
          res.status(400).json("admin already exist ")
         }
         else{
           // Create a new admin 
        const admin = new admins({
            name,mobileNumber,password });
         // Save the admin to the database
    await admin.save();

    res.status(201).json(admin);
         }  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// admin login using phone number and password
exports.loginadmin=async(req,res)=>{
    const {mobileNumber,password}=req.body
    try{
      const admin=await admins.findOne({mobileNumber,password})
      if(admin){
        const token=jwt.sign({
          name:admin.name
          },"thoufeeq")
          res.status(200).json({token})
      }
      else{
        res.status(400).json("invalid credentials")
       }
      
    }
    catch(error){
      res.status(400).json(error.message)
    }
  }
