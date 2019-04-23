const Brew = require("../models/brew.model");


exports.test = function (req, res) {
    res.send('Test is working');
};
exports.list = function list(request, response) {
    Brew.find(function (err, brews) {
      if (err) return console.error(err)        
      return response.json(brews)
    })
  }

exports.brew_create = function (req, res) {
    let brew = new Brew(
        {
            brewery: req.body.brewery,
            beer: req.body.beer,
        }
    );
    brew.save(function (err) {
        if (err) {
            return (err);
        }
        res.send('favorite beer added succesfully')
    })
};

exports.brew_details = function (req, res) {
    Brew.findById(req.params.id, function (err, brew) {
        if (err) return (err);
        res.send(brew);
    })
};

exports.brew_update = function (req, res) {
    Brew.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, brew) {
        if (err) return (err);
        res.send('Favorite beer udpated.');
    });
};

exports.brew_delete = function (req, res) {
    Brew.findByIdAndRemove(req.params.id, function (err) {
        if (err) return (err);
        res.send('Deleted successfully!');
    })
};