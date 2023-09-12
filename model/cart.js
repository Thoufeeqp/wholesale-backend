const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user associated with the cart
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the product added to the cart
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price:{
        type:Number,
        required:true
      },
    },
  ],
 
  totalAmount: {
    type: Number,
    required: true,
  },
  
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
