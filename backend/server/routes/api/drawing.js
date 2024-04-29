const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const Drawing = require('../../models/drawing');

// Gets all items
router.get('/', (req, res) => {
    Drawing.find().then((items) => {
        console.log(`responding to get all drawings request with ${items}`);
        res.json(items);
    }).catch((err) => {
        console.log(err);
        res.status(404).json({noitemsfound: 'No Items found'})
    });
});

// Get item by ID
router.get('/:id', (req, res) => {
    Drawing.findById(req.params.id)
        .then((item) => res.json(item))
        .catch((err) => res.status(404).json({noitemfound: 'No Item found'}));
});

// Add item
router.post('/', bodyParser.json(), (req, res) => {
    Drawing.create(req.body)
        .then((item) => res.json({msg: 'Item added successfully'}))
        .catch((err) => {
            console.log(err);
            res.status(400).json({error: 'Error'});
        });
});

// Update item by id in database
router.put('/:id', (req, res) => {
    Drawing.findByIdAndUpdate(req.params.id, req.body)
        .then((item) => res.json({msg: 'Updated successfully'}))
        .catch((err) => res.status(400).json({error: 'Unable to update the Database'}));
});

// Delete item by id in database
router.delete('/:id', (req, res) => {
    Drawing.findByIdAndDelete(req.params.id)
        .then((item) => res.json({mgs: 'Item entry deleted successfully'}))
        .catch((err) => res.status(404).json({error: 'No such a item'}));
});

module.exports = router;