const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  truckDriver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TruckDriver',
    required: true,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true,
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price:{
        type:Number,
        required:true
      }
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
});

const bill = mongoose.model('bill', billSchema);

module.exports = bill;
