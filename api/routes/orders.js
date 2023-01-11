// Library
const express = require('express');
// Module
const jwtAuth = require('../middleware/check-auth');
// Conbtrollers
const OrdersController = require('../controllers/orders');
// Run Router from Express
const router = express.Router();
//-----------------------------------
// GET - List All Orders
//-----------------------------------
router.get('/', jwtAuth, OrdersController.orders_get_all);
//-----------------------------------
// POST - Add Order
//-----------------------------------
router.post('/', jwtAuth, OrdersController.orders_create_order);
//-----------------------------------
// GET - List a Order by ID
//-----------------------------------
router.get('/:id', jwtAuth, OrdersController.orders_get_order);
//-----------------------------------
// DELETE - Delete a Order by ID
//-----------------------------------
router.delete('/:id', jwtAuth, OrdersController.orders_delete_order);
// Export Module
module.exports = router;