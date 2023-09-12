const orders=require('../model/order')
// To create a new order
exports.createorder=async(req,res)=>{
    try {
        const { products, truckDriverId, vendorId, totalAmount, collectedAmount}= req.body;
        if (!products || !truckDriverId || !vendorId || !totalAmount || !collectedAmount) {
            return res.status(400).json({ message: 'All fields are required.' });
          }
          const order = new orders({
            products,
            truckDriverId,
            vendorId,
            totalAmount,
            collectedAmount,
          });
          // Save the order to the database
          await order.save();
      
          return res.status(201).json("order created successfully");
         }  
   catch (error) {
    res.status(400).json({ error: error.message });
  }
}
