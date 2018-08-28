const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    dateAdded:{
        type: Date,
        default: Date.now   
    }
});

module.exports = User = mongoose.model('user', UserSchema);