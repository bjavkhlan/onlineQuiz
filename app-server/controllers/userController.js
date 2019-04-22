const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;
const saltRounds = 10;
const Users = mongoose.model('User');

module.exports.getUserById = async function(req, res) {
    const user = await Users.find();
    res.json(user);
}

module.exports.signup = async function(req, res, next) {
    const data = await Users.find({username: req.body.username});
    if (!data || data.length > 0) {
        next({msg: "username already exists"});
    } else {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) next(err);
            const user = new Users({
                username: req.body.username,
                email: req.body.email,
                password: hash
            });
            user.save(err => {
                if (err) next(err);
                else res.json({msg: "success"});
                // jwt.sign({
                //     username: req.body.username,
                //     email: req.body.email
                // }, SECRET, (err, token) => res.json({token: token}));
            })
        })
        
    }
}

module.exports.login = async function(req, res, next) {
    const user = await Users.findOne({email: req.body.email});
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) next(err);
        if (result === true) {
            jwt.sign({
                username: user.username,
                email: user.email
            }, SECRET, (err, token) => {
                res.json({ token: token });
            })
        } else {
            next({ msg: "email or password doesn't match"});
        }
    })
}