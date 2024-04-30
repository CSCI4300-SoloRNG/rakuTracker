const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports = router;
SECRET = process.env.MY_SECRET


const validate = async (req) => {

}

router.post('/', bodyParser.json(), (req, res) => {
    // Using find method to get user by username
    User.findOne({
        username: req.body.username
    })
        .then(user => {
            if (!user) {
                console.log('User not found');
                res.status(403).json({error: 'Invalid username or password'});
                return;
            }
            // Accessing the found user
            console.log('Found user:', user);
            console.log('Username:', user.username);
            console.log('Email:', user.email);
            const {username, password, email} = user;
            console.log(username + " " + password)
            bcrypt.compare(req.body.password, password, function (_err, _res) {
                if (_res) {
                    delete user.password
                    var token = jwt.sign({user}, SECRET, {expiresIn: '1h'})
                    res.json({token: token})
                } else {
                    res.status(403).json({error: 'Invalid username or password'})
                }
            });
        })
        .catch(err => {
            console.error('Error finding user:', err);
            res.status(403).json({error: 'Invalid username or password'});
        });
})