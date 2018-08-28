const express = require('express');
var cors = require("cors");

const router = express.Router();
router.use(cors());

// User Model
const User = require('../../models/User');

// @route GET api/users
// @desc Get All Users
// @access Public
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
    .then(users => res.json(users));
});

// @route GET api/users
// @desc Get All Users
// @access Public
router.get('/users', (req, res) => {
    User.find()
     .sort({ dateAdded: -1})
     .then(users => res.json(users));
});

// @route POST api/users
// @desc Create user
// @access Public
router.post('/users', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        dateadded: Date.Now
    });

    newUser.save().then(user => res.json(user));
});

// @route DELETE api/users
// @desc Delete an user
// @access Public
router.delete('/users/:id', (req, res) => {
    User.findById(req.params.id)
     .then(user => user.remove().then(() => res.json({success: true})))
     .catch(err => res.status(404).json({success:false}));
});


// @route PUT api/users
// @desc Update user
// @access Public
router.put('/users/:id', (req, res) => {
    User.findById(req.params.id, function(err,user){
        if(!user) res.status(404).send({message: 'User does not exist!'});

        user.username = req.body.username;
        user.password= req.body.password;
    
        user.save().then(user => res.json(user));
    });
});
module.exports = router;