// Library
const mongoose = require('mongoose');
// Modules
const Order = require('../models/orders');
//-----------------------------------
// GET - List All Orders
//-----------------------------------
exports.orders_get_all = async (req, res, next) => {
    await Order.find()
        .select('_id productId quantity')
        .exec()
        .then(docs => {
            if(docs.length > 0) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};
//-----------------------------------
// POST - Add Order
//-----------------------------------
exports.orders_create_order = async (req, res, next) => {
    // Get the data
    const order = new Order({
        _id: new mongoose.Types.ObjectId,
        productId: req.body.productId,
        quantity: req.body.quantity
    });
    // Order
    await order.save()
        .then(result => {
            res.status(200).json({
                message: "Product registered with success!",
                ID: result._id,
                Quantity: result.quantity,
                ProductId: result.productId,
                URL: `http://localhost:3000/order/${result._id}`
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};
//-----------------------------------
// GET - List a Order by ID
//-----------------------------------
exports.orders_get_order = async (req, res, next) => {
    const id = req.params.id;
    
    await Order.findById(id)
        .exec()
        .then(doc => {
            if(doc) {
                res.status(200).json({
                    ID: doc._id,
                    product: doc.product,
                    quantity: doc.quantity,
                    URL: `http://localhost:3000/order/${ doc._id }`
                })
            } else {
                res.status(404).json({
                    message: 'Order not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};
//-----------------------------------
// DELETE - Delete a Order by ID
//-----------------------------------
exports.orders_delete_order = async (req, res, next) => {
    const id = req.params.id;

    await Order.remove({_id: id})
        .then(result => {
            res.status(200).json({
                message: "The document was removed",
                _id: req.params.id,
                product: req.body.product,
                quantity: req.body.quantity
            });
        })
        .catch(err => {
            res.status(404).json({
                error: err
            });
        });
};