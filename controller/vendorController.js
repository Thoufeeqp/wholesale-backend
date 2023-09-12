const vendors=require('../model/vendor')


// To create a new vendor
exports.createvendor=async(req,res)=>{
    
    try {
        const { name, location, contactInformation, email } = req.body;
        // To check vendor already exist or not
         const vendor=await vendors.findOne({name,email})
         if(vendor){
          res.status(400).json("vendor already exist ")
         }
         else{
           // Create a new vendor document
        const vendor = new vendors({
          name,
          location,
          contactInformation,
          email,
        });
         // Save the vendor to the database
    await vendor.save();

    res.status(201).json(vendor);
         }  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// To get all vendors
exports.getallvendors=async(req,res)=>{
    console.log('kaka');
  try{
    const vendor=await vendors.find()
    console.log(vendor);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    else{
      console.log(vendor);
      res.status(200).json(vendor)

    }
  }
  catch(error){
    res.status(400).json(error.message)
  }
}



// To get vendor details by id
exports.getvendors=async(req,res)=>{
  const vendorId = req.params.id;
  
  try{
    const vendor=await vendors.findOne({_id:vendorId})
    console.log(vendor);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    else{
      console.log(vendor);
      res.status(200).json(vendor)

    }
  }
  catch(error){
    res.status(400).json(error.message)
  }
}

// To update vendor details by id
exports.updatevendor=async(req,res)=>{
  const vendorId = req.params.id;
  try {
    // Find the vendor by ID and update its details
    const updatedVendor = await vendors.findByIdAndUpdate(vendorId, req.body, {
      new: true, // Return the updated vendor
      runValidators: true, // Validate the updated data
    });

    if (!updatedVendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.json(updatedVendor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }


}

// To delete vendor details by id

exports.deletevendor=async(req,res)=>{
  const vendorId=req.params.id
  try{
    if( await vendors.findOneAndDelete({_id:vendorId})){
      res.status(200).json("deleted successfully");
    }
    else{
      res.status(400).json("vendor not found")
    }
     
    }
  catch (err) {
    res.status(400).json({ error: err.message });
  }
}