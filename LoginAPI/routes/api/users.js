const express = require('express');
var cors = require("cors");

const router = express.Router();
router.use(cors());

// User Model
const User = require('../../models/User');

router.post('/login', (req, res) => {
    var username = req.body.username,
        password = req.body.password;

        User.findOne({ "username": username,"password":password }).then(function (user) {
            if (user) {
                    res.json({user, isRedirect:true});
            } else {
                res.json({username:"",password:"", isRedirect:false});
            }
        });

});

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
     .then(user => user.remove().then(() => res.json({user})))
     .catch(err => res.status(404).json({success:false}));
});


// @route PUT api/users
// @desc Update user
// @access Public
router.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, user){
        res.json(user);
    });
});
module.exports = router;