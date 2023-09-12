const Cart = require('../model/cart');
const Bill = require('../model/bill');

// Create a new bill and associate it with a cart
exports.createBill = async (req, res) => {
  try {
    const { truckDriverId, vendorId, products } = req.body;

    // Calculate the total amount based on the products and their quantities
    const totalAmount = calculateTotalAmount(products);


    // Find the user's cart
    const userCart = await Cart.findOne({ user: truckDriverId });

    if (!userCart) {
      return res.status(400).json({ error: 'Cart not found. Please add products to your cart first.' });
    }

    // Create a new bill
    const bill = new Bill({
      truckDriver: truckDriverId,
      vendor: vendorId,
      cart: userCart._id, // Associate the cart with the bill
      totalAmount,
      products,
    });

    // Save the bill to the database
    await bill.save();

    // Optionally, clear the user's cart after creating the bill
    userCart.products = [];
    userCart.totalAmount = 0;
    await userCart.save();

    return res.status(201).json({ message: 'Bill created successfully.' });
  } catch (error) {
    console.error('Error creating bill:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

//to read bill by admin
exports.getbill=async(req,res)=>{
    try{
        const bill=await Bill.find()
        res.status(200).json(bill)
    }
    catch(error){
        res.status(400).json(error)
    }
}

function calculateTotalAmount(products) {
    let totalAmount = 0;
    for (const product of products) {
      console.log(product.quantity);
      console.log( product.price);
    
      totalAmount += product.quantity * product.price;
    }
     return totalAmount;
  }  