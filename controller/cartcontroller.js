const Product=require('../model/product')
const Cart = require('../model/cart');


// Function to add products to the cart
exports.addToCart = async (req, res) => {
  try {
    const { userId,productId, quantity ,price} = req.body;
    const product = await Product.findById(productId);
        //console.log(product);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    // Assuming the user is authenticated 

    // Find the user's cart or create one if it doesn't exist
    let userCart = await Cart.findOne({ user: userId });

    if (!userCart) {
      userCart = new Cart({
        user: userId,
        products: [],
        totalAmount: 0,
      });
    }

    // Check if the product is already in the cart; if so, update the quantity
    const existingProduct = userCart.products.find((item) => item.product.equals(productId));

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      userCart.products.push({ product: productId, quantity ,price });
    }

    // Recalculate the total amount
    userCart.totalAmount = calculateTotalAmount(userCart.products);

    // Save the updated cart
    await userCart.save();
    
    return res.status(200).json({ message: `Product added to cart successfully.` });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

function calculateTotalAmount(products) {
  let totalAmount = 0;
  for (const product of products) {
    console.log(product.quantity);
    console.log( product.price);
  
    totalAmount += product.quantity * product.price;
  }
   return totalAmount;
}  

exports.getcart=async(req,res)=>{
  const {userId} =req.body
  try{
     const cart=await Cart.find({user:userId})
     res.status(200).json(cart)
  }
  catch(error){
    res.status(400).json(error.message)
  }
}