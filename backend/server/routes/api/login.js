const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = router;
SECRET = "baka"


const validate = async (req, res) => 
{
     // Using find method to get user by username
    User.findOne({
        username: req.body.username
    })
    .then(user => {
        if (!user) {
            console.log('User not found');
            return;
            
        }
        // Accessing the found user
        console.log('Found user:', user);
        console.log('Username:', user.username);
        console.log('Email:', user.email);
        const { username, password, email } = user;
        console.log(username + " " + password)
        bcrypt.compare(req.body.password, password, function(err, res) {
            if (res) {
            // Passwords match
            delete user.password
            var token = jwt.sign({user}, SECRET, { expiresIn: '1h' })
            res.cookie("token", token, {
                httpOnly: true
            })
            return res.status(200)
            } else {
            console.log(username)
            }
            });
    })
    .catch(err => {
        console.error('Error finding user:', err);
    });
}

router.post('/', bodyParser.json(), (req, res) =>  
{
    validate(req, res)
})