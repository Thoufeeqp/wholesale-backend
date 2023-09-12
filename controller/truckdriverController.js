const truckdrivers=require('../model/truckdriver')
const jwt=require('jsonwebtoken')
const Carts = require('../model/cart');

// truck-driver login using phone number and password
exports.login=async(req,res)=>{
  const {mobileNumber,password}=req.body
  try{
    const truckdriver=await truckdrivers.findOne({mobileNumber,password})
    if(truckdriver){
      const token=jwt.sign({
        name:truckdriver.name
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


// To create a new truckdriver
exports.createtruckdriver=async(req,res)=>{
    
    try {
        const { name,mobileNumber,password,address,drivingLicense } = req.body;
        // To check truckdriver already exist or not
         const truckdriver=await truckdrivers.findOne({drivingLicense})
         if(truckdriver){
          res.status(400).json("truckdriver already exist ")
         }
         else{
           // Create a new truckdriver document
        const truckdriver = new truckdrivers({
            name,mobileNumber,password,address,drivingLicense
        });
         // Save the truckdriver to the database
    await truckdriver.save();

    res.status(201).json(truckdriver);
         }  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// To get truckdriver details by id
exports.gettruckdriver=async(req,res)=>{
    const driverId = req.params.id;
    
    try{
      const truckdriver=await truckdrivers.findOne({_id:driverId})
      if (!truckdriver) {
        return res.status(404).json({ message: 'truckdriver not found' });
      }
      else{
        //console.log(truckdriver);
        res.status(200).json(truckdriver)
  
      }
    }
    catch(error){
      res.status(400).json(error.message)
    }
  }
  
  // To update truckdriver details by id
  exports.updatetruckdriver=async(req,res)=>{
    const driverId = req.params.id;
    console.log(driverId);
    try {
      // Find the truckdriver by ID and update its details
      const updatedTruckdriver = await truckdrivers.findByIdAndUpdate(driverId, req.body, {
        new: true, // Return the updated truckdriver
        runValidators: true, // Validate the updated data
      });
  
      if (!updatedTruckdriver) {
        return res.status(404).json({ message: 'truck-driver not found' });
      }
  
      res.json(updatedTruckdriver);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  
  
  }
  
  // To delete truckdriver details by id
  
  exports.deletetruckdriver=async(req,res)=>{
    const driverId=req.params.id
    try{
      if( await truckdrivers.findOneAndDelete({_id:driverId})){
        res.status(200).json("deleted successfully");
      }
      else{
        res.status(400).json("driver not found")
      }
       
      }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  }


