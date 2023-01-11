// Library
const mongoose = require('mongoose');
// Mongoose Schema
const productSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true }
    // productImage: { type: String, required: true }
});
// Module Export
module.exports = mongoose.model('Product', productSchema);