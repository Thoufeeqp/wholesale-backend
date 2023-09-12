const products=require('../model/product')


// To create a new product
exports.createproduct=async(req,res)=>{
    
    try {
        const { name,price,category,image}= req.body;
        // To check product already exist or not
         const product=await products.findOne({name})
         if(product){
          res.status(400).json("product already exist ")
         }
         else{
           // Create a new product document
        const product = new products({
            name,price,category,image
        });
         // Save the product to the database
    await product.save();

    res.status(201).json(product);
         }  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// To get product details by id
exports.getproduct=async(req,res)=>{
    const productId = req.params.id;
    
    try{
      const product=await products.findOne({_id:productId})
      if (!product) {
        return res.status(404).json({ message: 'product not found' });
      }
      else{
        //console.log(product);
        res.status(200).json(product)
  
      }
    }
    catch(error){
      res.status(400).json(error.message)
    }
  }
  
  // To update product details by id
  exports.updateproduct=async(req,res)=>{
    const productId = req.params.id;
    //console.log(productId);
    try {
      // Find the product by ID and update its details
      const updatedproduct = await products.findByIdAndUpdate(productId, req.body, {
        new: true, // Return the updated product
        runValidators: true, // Validate the updated data
      });
  
      if (!updatedproduct) {
        return res.status(404).json({ message: 'product not found' });
      }
  
      res.json(updatedproduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  
  
  }
  
  // To delete product details by id
  
  exports.deleteproduct=async(req,res)=>{
    const productId=req.params.id
    try{
      if( await products.findOneAndDelete({_id:productId})){
        res.status(200).json("deleted successfully");
      }
      else{
        res.status(400).json("product not found")
      }
       
      }
    catch (err) {
      res.status(400).json({ error: err.message });
    }
  }


