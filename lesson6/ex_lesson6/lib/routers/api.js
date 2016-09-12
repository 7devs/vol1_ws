var router = require('express').Router() //引入Express的路由处理
    news = require('../models/news.js'); //引入数据类型

// debug
console.log('Router is in...1')

router.route('/')
    .get(function(req, res, next) {
        res.status(200).send(news);
    });

router.route('/:id')
    .get(function(req, res, next) {
        var id = parseInt(req.params.id, 10);
        //console.log(typeof(id), id);
        //console.log(news[0]);
        if(news[id-1]) {
            res.status(200).send(news[id-1]);
        } else {
            res.status(404).send('data is not exiting.');
        }

    });

router.route('/:id')
     .delete(function(req, res, next) {
        var id = parseInt(req.params.id, 10);
        //console.log(typeof(id), id);
        //console.log(news[0]);
//删除指定id
        if(news[id-1]) {
            var new_news =  news.splice([id-1], 1);
            res.status(200).send(news);
            console.log(news);
            } else {
            res.status(404).send('data is not exiting.');
         }
      });



module.exports = router;
