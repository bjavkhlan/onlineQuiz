
var express = require('express');
var router = express.Router();

var User = require('../models/user.model');

router.post('/register', (req, res)=>{
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    
    User.addUser(user, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});


router.post('/login', (req, res)=>{
    User.login(req.body.email, req.body.password, (err, result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});
// const router = require('express').Router();

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
