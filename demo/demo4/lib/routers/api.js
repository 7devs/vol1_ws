var router = require('express').Router() //引入Express的路由处理
    userModel = require('../models/user.js'); //引入数据类型

// debug
console.log('Router is in...1')

/*router.route('/')
    .get(function(req, res, next) {
        res.status(200).send({
            msg: 'api is ok.'
        })
    });
*/
    router.route('/')
        .get(function(req, res, next) {
            res.status(200).send({
                msg: 'api is ok.'
            })
        });

// debug
console.log('Router is in...2')

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
            res.status(404).send('data is not exiting.');
        }
    });

module.exports = router;
