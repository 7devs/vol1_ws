var r = require('express').Router();
    userModel = require('../models/user.js');

r.route('/')
    .get(function(request, reponse, next) {
        reponse.send('xxxxx');
    })
    .post(function(req, res, next) {
        res.send(userModel);
    })

module.exports = r ;
