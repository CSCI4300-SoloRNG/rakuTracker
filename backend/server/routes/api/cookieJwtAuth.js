const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
module.exports = router;

router.cookieJwtAuth = (req, res, next) => {
    console.log("cookieJwtAuth");
    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.MY_SECRET);
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.clearCookie("token");
        return res.redirect("/");
    }
};