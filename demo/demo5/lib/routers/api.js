var router = require('express').Router() // 引入 Express 的路由处理 Router是express的一个类
    userModel = require('../models/user.js'); // 引入数据模型

router.route('/')
    .post(function(req, res, next) {
        res.send('post');
    })
    .delete(function(req, res, next) {
        res.send('delete');
    })
    .get(function(req, res, next) {
        res.status(200).send({
            msg: 'api is ok.'
    })
    });

router.route('/user')
    .get(function(req, res, next) {
        res.status(200).send(userModel);
    });

router.route('/user/:key')
    .get(function(req, res, next) {
        var key = req.params.key;
        if(userModel[key]) {
            res.status(200).send(userModel[key]);
        } else {
            res.status(404).send('数据不存在。');
        }
    })

module.exports = router;
