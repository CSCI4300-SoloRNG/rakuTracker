const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

module.exports = router;
router.post('/', bodyParser.json(), (req, res) => {
    const token = req.body.token;
    try {
        const user = jwt.verify(token, process.env.MY_SECRET);
        res.status(200).json({user});
        console.log("Token success!")
        next();
    } catch (err) {
        res.clearCookie("token");
        res.status(403).json({error: "Error validating token: " + err});
        console.log("Token Error " + err);
        return res.redirect("/");
    }
});