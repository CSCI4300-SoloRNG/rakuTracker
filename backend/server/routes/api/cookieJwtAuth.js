const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
ports.cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    try {
        const user = jwt.verify(token, process.env.MY_SECRET);
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.redirect("/");
    }
};