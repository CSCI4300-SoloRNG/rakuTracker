const jwt = require('jsonwebtoken');
const User = require('../../models/user');

SECRET = "baka"

module.exports = async (req, res) => {
const { username, password } = req.body;
const user = await User.findById(req.params.username)
bcrypt.compare(req.params.password, hash, function(err, res) {
    if (res) {
    // Passwords match
    delete user.password
    const token = jwt.sign(user, SECRET, { expiresIn: "1h" })
    res.cookie("token", token, {
        httpOnly: true
    })
    return res.status(500)
    } else {
    return res.status(403).json({error: "Invalid login attempt"});
    }
    });
    
}