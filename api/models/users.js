// Library
const mongoose = require('mongoose');
// Mongoose Schema
const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: { type: String, required: true },
    password: { type: String, required: true }
});
// Module Export
module.exports = mongoose.model('User', userSchema);