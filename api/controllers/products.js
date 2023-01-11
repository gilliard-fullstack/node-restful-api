// Mongoose
const mongoose = require('mongoose');
// Modules
const Product = require('../models/products');
//-----------------------------------
// GET - List All Products
//-----------------------------------
exports.products_get_all = async (req, res, next) => {
    await Product.find()
        .select('_id name price')
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
// PORT - Add Product
//-----------------------------------
exports.products_create_product = async (req, res, next) => {
    // Get the data
    const product = new Product({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        price: req.body.price,
        //image: req.file
    })
    await product.save()
        .then(result => {
            res.status(200).json({
                status: 1,
                ID: result._id,
                Name: result.name,
                Price: result.price,
                //image: result.image
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};
//-----------------------------------
// GET - List a Product by ID
//-----------------------------------
exports.products_get_product = async (req, res, next) => {
    const id = req.params.id;
    
    await Product.findById(id)
        .exec()
        .then(doc => {
            if(doc) {
                res.status(200).json({
                    ID: doc._id,
                    name: doc.name,
                    price: doc.price
                })
            } else {
                res.status(404).json({
                    message: 'Product not found'
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
// PATCH - Alter a Product by ID
//-----------------------------------
exports.products_update_product = async (req, res, next) => {
    const id = req.params.id;

    await Product.updateOne({_id: id}, { $set: { name: req.body.name, price: req.body.price } })
    .then(result => {
        res.status(200).json({
            status: 1,
            message: 'The product was updated',
            _id: result._id,
            name: result.name,
            price: result.price
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
};
//-----------------------------------
// DELETE - Delete a Product by ID
//-----------------------------------
exports.products_delete_product = async (req, res, next) =>{
    const id = req.params.id;

    Product.remove({_id: id})
        .then(result => {
            res.status(200).json({
                status: 1,
                message: "The product was removed"
            });
        })
        .catch(err => {
            res.status(404).json({
                error: err
            });
        });
};