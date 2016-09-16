//引入路由对象，载入express框架及方法
var router = require('express').Router(),
//引入路由数据变量，载入自定义数据模型
    albumModel = require('../models/albums.js');

//GET / 返回全部唱片
router.route('/')
    .get(function(req, res, next) {
        res.status(200).send(albumModel);
    });

//获取曲长>3分钟的歌曲，并返回
router.route('/longerSong')
    .get(function(req, res, next) {
        var song3List = new Array();;
        for(var i = 0; i < albumModel.length; i++) {
            if(albumModel[i].length > 180) {
                song3List.push(albumModel[i].title)
            }
        }
    res.status(200).send('the longerSongs are: ' + song3List);
    })

//返回指定歌手的全部歌曲
router.route('/singer/:name')
    .get(function(req, res, next) {
        var singerSearch = req.params.name,
            //将搜索 字符串 转化为 RegExP,不区分大小写
            re = new RegExp(singerSearch, "g"),
            titleList = new Array();
        //console.log(singerSearch);
        //console.log(re);
        for(i = 0; i < albumModel.length; i++) {
            if(re.test(albumModel[i].singer) === true ) {
                titleList.push(albumModel[i].title);
            }
        }

        //如果歌手不存在，返回 Not Found
        if (titleList.length > 0 ) {
            res.status(200).send(singerSearch + '\'s songs are: ' + titleList);
        } else {
            res.status(404).send('Not Found.');
        }

      })

//获取指定分类 type 的歌曲列表
router.route('/search')
    .get(function(req, res, next) {
        var typeSearch = req.query.type,
            //将搜索 字符串 转化为 RegExP,不区分大小写
            re = new RegExp(typeSearch, "g"),
            songList = new Array();
        //console.log(typeSearch);
        //console.log(re);
        for(i = 0; i < albumModel.length; i++) {
            if(re.test(albumModel[i].type) === true ) {
                songList.push(albumModel[i]);
            }
        }

        //如果指定type的歌曲不存在，返回 Not Found
        if (songList.length > 0 ) {
            res.status(200).send(songList);
        } else {
            res.status(404).send('Not Found.');
        }

      })


//得到指定 id 的 唱片数据 ，并返回
router.route('/:id')
    .get(function(req, res, next) {
        var id = req.params.id,
            index = id - 1;
        console.log(albumModel[index]);
        if(albumModel[index]) {
            res.status(200).send(albumModel[index]);
        } else {
            res.status(404).send('Not Found.');
        }
    })




//对外开放 router 对象
module.exports = router;