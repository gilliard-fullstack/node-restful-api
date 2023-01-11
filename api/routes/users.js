// Library
const express = require('express');

const jwtAuth = require('../middleware/check-auth');
// Conbtrollers
const UsersController = require('../controllers/users');
// Run Router from Express
const router = express.Router();
//-----------------------------------
// GET - List All Users
//-----------------------------------
router.get('/', jwtAuth, UsersController.get_all_users);
//-----------------------------------
// POST - Add User
//-----------------------------------
router.post('/', UsersController.users_create_user);
//-----------------------------------
// GET - List a User by ID
//-----------------------------------
router.get('/:id', jwtAuth, UsersController.users_get_user);
//-----------------------------------
// PATCH - Alter a User by ID
//-----------------------------------
router.patch('/:id', jwtAuth, UsersController.users_update_user);
//-----------------------------------
// DELETE - Delete a User by ID
//-----------------------------------
router.delete('/:id', jwtAuth, UsersController.users_delete_user);
//-----------------------------------
// POST - User Login
//-----------------------------------
router.post('/login', UsersController.users_login);
// Export Module
module.exports = router;