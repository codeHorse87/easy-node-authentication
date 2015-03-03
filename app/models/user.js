// load the things we need
//var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Sequelize = require('sequelize');
var db = require('../db.js');

// define the schema for our user model

var userSchema = db.define('user', {
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

userSchema.sync();

/*
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
 password     : String,
 },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});
 */

// generating a hash
userSchema.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.validPassword = function (password) {
    //return bcrypt.compareSync(password, this.local.password);
    return true;
};

// create the model for users and expose it to our app
//module.exports = mongoose.model('User', userSchema);

module.exports = db.model('user');
