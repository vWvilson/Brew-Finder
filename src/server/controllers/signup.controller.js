const Signup = require("../models/signup.model");


exports.test = function (req, res) {
    res.send('Test is working');
};

exports.user_create = function (req, res) {
    let signup = new Signup(
        {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
    );
    console.log("create user")

    console.log(signup.username)
    console.log(signup.email)
    console.log(signup.password)



    signup.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('Signup successfull')
    })
};

exports.user_details = function (req, res) {
    Signup.findById(req.params.id, function (err, signup) {
        if (err) return (err);
        res.send(signup);
    })
};

exports.user_update = function (req, res) {
    Signup.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return (err);
        res.send('User udpated.');
    });
};

exports.user_delete = function (req, res) {
    Signup.findByIdAndRemove(req.params.id, function (err) {
        if (err) return (err);
        res.send('Deleted successfully!');
    })
};
exports.login = function login(req, res) {
    Signup.findOne({
    username: req.body.username, 
    password: req.body.password
    }, function(err, doc){
    if(err || !doc){
    res.send(403)
    return
    }
    
    res.sendStatus(200)
    
    })
    
    }