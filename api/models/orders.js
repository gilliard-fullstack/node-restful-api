// Library
const mongoose = require('mongoose');
// Mongoose Schema
const orderSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    productId: String,
    quantity: String
});
// Module Export
module.exports = mongoose.model('Order', orderSchema);