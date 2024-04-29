const express = require('express'); 
const router = express.Router();
const bcrypt = require('bcrypt');
var bodyParser = require("body-parser");
const User = require('../../models/user');

// Gets all users
router.get('/', (req, res) => {
User.find()
.then((items) => res.json(items))
.catch((err) => res.status (404).json({ noitemsfound: 'No Users found' }));
});

// Get user by ID
router.get('/:id', (req, res) => 
{
    User.findById(req.params.id)
     .then((item) => res.json (item))
     .catch((err) => res.status (404).json({ noitemfound: 'No User found' }));
});

// Add user
router.post('/signup', bodyParser.json(), (req, res) => 
{
    hash = ""
    bcrypt.genSalt(10,(err,salt) => 
    {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            if (err) {
              console.error(err);
              return res.status(500).send('Error hashing password: ' + err);
            }
            req.body.password = hash;
            req.params.id = req.body.username
            console.log(req.body)
            User.create(req.body)
            .then((item)=>res.json({ msg: 'User added successfully' }))
            .catch((err)=>res.status(400).json({ error: '400 Error ' + err}));
        });
    })
});

// Update user by id in database
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate (req.params.id, req.body)
    .then((item) => res.json({ msg: 'Updated successfully' })) 
    .catch((err) =>
    res.status(400).json({ error: 'Unable to update the Database' }));
    });

// Delete user by id in database
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete (req.params.id)
    .then((item) => res.json({ mgs: 'Item entry deleted successfully' })) 
    .catch((err) => res.status (404).json({ error: 'No such a User' }));
    });

module.exports = router;