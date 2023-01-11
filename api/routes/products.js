// Library
const express = require('express');
// Module
const jwtAuth = require('../middleware/check-auth');
// Conbtrollers
const productsController = require('../controllers/products');
// Run Router from Express
const router = express.Router();
//-----------------------------------
// GET - List All Products
//-----------------------------------
router.get('/', jwtAuth, productsController.products_get_all);
//-----------------------------------
// PORT - Add Product
//-----------------------------------
router.post('/', jwtAuth, productsController.products_create_product);
//-----------------------------------
// GET - List a Product by ID
//-----------------------------------
router.get('/:id', jwtAuth, productsController.products_get_product);
//-----------------------------------
// PATCH - Alter a Product by ID
//-----------------------------------
router.patch('/:id', jwtAuth, productsController.products_update_product);
//-----------------------------------
// DELETE - Delete a Product by ID
//-----------------------------------
router.delete('/:id', jwtAuth, productsController.products_delete_product);
// Export Module
module.exports = router;