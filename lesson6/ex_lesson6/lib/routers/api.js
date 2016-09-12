var router = require('express').Router() //引入Express的路由处理
    userModel = require('../models/news.js'); //引入数据类型

// debug
console.log('Router is in...1')

router.route('/news')
    .get(function(req, res, next) {
        res.status(200).send(userModel);
    });

router.route('/news/:id')
    .get(function(req, res, next) {
        var id = parseInt(req.params.id, 10);
        //console.log(typeof(id), id);
        //console.log(userModel[0]);
        if(userModel[id-1]) {
            res.status(200).send(userModel[id-1]);
        } else {
            res.status(404).send('data is not exiting.');
        }

    });

router.route('/news/:id')
     .delete(function(req, res, next) {
        var id = parseInt(req.params.id, 10);
        //console.log(typeof(id), id);
        //console.log(userModel[0]);
//删除指定id
        if(userModel[id-1]) {
            var new_userModel =  userModel.splice([id-1], 1);
            res.status(200).send(userModel);
            } else {
            res.status(404).send('data is not exiting.');
         }
         });



module.exports = router;
