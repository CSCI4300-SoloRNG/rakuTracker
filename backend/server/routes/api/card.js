const express = require('express'); 
const router = express.Router();
var bodyParser = require("body-parser");
const Card = require('../../models/card');

router.get('/', (req, res) => {
Card.find()
.then((items) => res.json(items))
.catch((err) => res.status (404).json({ noitemsfound: 'No Items found' }));
});

router.get('/:id', (req, res) => 
{
    Card.findById(req.params.id)
     .then((item) => res.json (item))
     .catch((err) => res.status (404).json({ noitemfound: 'No Item found' }));
});

router.post('/', bodyParser.json(), (req, res) => 
{ 
    Card.create(req.body)
    .then((item)=>res.json({ msg: 'Item added successfully' }))
    .catch((err)=>res.status(400).json({ error: 'Error' }));
});

router.put('/:id', (req, res) => {
    Card.findByIdAndUpdate (req.params.id, req.body)
    .then((item) => res.json({ msg: 'Updated successfully' })) 
    .catch((err) =>
    res.status(400).json({ error: 'Unable to update the Database' }));
    });

router.delete('/:id', (req, res) => {
    Card.findByIdAndDelete (req.params.id)
    .then((item) => res.json({ mgs: 'Item entry deleted successfully' })) 
    .catch((err) => res.status (404).json({ error: 'No such a item' }));
    });

module.exports = router;