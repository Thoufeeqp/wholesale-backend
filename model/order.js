const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  products: [
    {
      name: String,
      quantity: Number,
    },
  ],
  truckDriverId: {
    type: String,
    required: true,
  },
  vendorId: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  collectedAmount: {
    type: Number,
    required: true,
  }
});

// Create the Order model
const orders = mongoose.model('order', orderSchema);

module.exports = orders
