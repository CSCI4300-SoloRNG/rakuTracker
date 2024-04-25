const express = require('express'); 
const router = express.Router();
var bodyParser = require("body-parser");
const Drawing = require('../../models/drawing');

router.get('/', (req, res) => {
Drawing.find()
.then((items) => res.json(items))
.catch((err) => res.status (404).json({ noitemsfound: 'No Items found' }));
});

router.get('/:id', (req, res) => 
{
    Drawing.findById(req.params.id)
     .then((item) => res.json (item))
     .catch((err) => res.status (404).json({ noitemfound: 'No Item found' }));
});

router.post('/', bodyParser.json(), (req, res) => 
{ 
    Drawing.create(req.body)
    .then((item)=>res.json({ msg: 'Item added successfully' }))
    .catch((err)=>res.status(400).json({ error: 'Error' }));
});

router.put('/:id', (req, res) => {
    Drawing.findByIdAndUpdate (req.params.id, req.body)
    .then((item) => res.json({ msg: 'Updated successfully' })) 
    .catch((err) =>
    res.status(400).json({ error: 'Unable to update the Database' }));
    });

router.delete('/:id', (req, res) => {
    Drawing.findByIdAndDelete (req.params.id)
    .then((item) => res.json({ mgs: 'Item entry deleted successfully' })) 
    .catch((err) => res.status (404).json({ error: 'No such a item' }));
    });

module.exports = router;