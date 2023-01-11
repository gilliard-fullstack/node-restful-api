// Mongoose
const mongoose = require('mongoose');
// Bcrypt
const bcrypt = require('bcrypt');
// JWT
const jwt = require('jsonwebtoken');
// Modules
const User = require('../models/users');
//-----------------------------------
// GET - List All Users
//-----------------------------------
exports.get_all_users = async (req, res, next) => { // <<<<<<< - Nao exibe os dados
    await User.find()
        .select('_id email password')
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
// POST - Add User
//-----------------------------------
exports.users_create_user = async (req, res, next) => { // <<<<<< Não envia as imagens
    await bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                })
            } else {
                // Object
                const user = new User({
                    _id: new mongoose.Types.ObjectId,
                    email: req.body.email,
                    password: hash
                });
                // Save
                user.save()
                    .then(result => {
                        res.status(200).json({
                            status: 1,
                            ID: result._id,
                            email: result.email,
                            password: result.password
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        })
};
//-----------------------------------
// GET - List a User by ID
//-----------------------------------
exports.users_get_user = async (req, res, next) => {
    const id = req.params.id;
    
    await User.findById(id)
        .exec()
        .then(usr => {
            if(usr) {
                res.status(200).json({
                    ID: usr._id,
                    email: usr.email,
                    password: usr.password
                })
            } else {
                res.status(404).json({
                    message: 'User not found'
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
// PATCH - Alter a User by ID
//-----------------------------------
exports.users_update_user = async (req, res, next) => {
    const id = req.params.id;

    await User.updateOne({_id: id}, { $set: { email: req.body.email, password: req.body.password } })
    .then(usr => {
        res.status(200).json({
            status: 1,
            message: 'The user was updated'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
};
//-----------------------------------
// DELETE - Delete a User by ID
//-----------------------------------
exports.users_delete_user = async (req, res, next) =>{
    const id = req.params.id;

    await User.remove({_id: id})
        .then(result => {
            res.status(200).json({
                status: 1,
                message: "The user was removed"
            });
        })
        .catch(err => {
            res.status(404).json({
                error: err
            });
        });
};
//-----------------------------------
// POST - User Login
//-----------------------------------
exports.users_login = async (req, res, next) => {
    await User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if(user.length < 1) {
            return res.status(404).json({
                message: 'Auth failed'
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.status(404).json({
                    message: "Auth failed"
                });
            }
            if (result) {
                const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    }, 
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
            }
            res.status(401).json({
                message: 'Auth failed'
            });
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
};