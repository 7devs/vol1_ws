//引入路由对象，载入express框架及方法
var router = require('express').Router(),
//引入路由数据变量，载入自定义数据模型
    userModel = require('../models/users.js');

router.route('/')
    .get(function(req, res, next) {
        res.status(200).send(userModel);
    });


//获取指定性别的人数统计
router.route('/count/:sex')
    .get(function(req, res, next) {
        var sex = req.params.sex;
        //在userModel 里，逐个对象判断是否符合给定的 sex 条件，累加。
        var sexTotal = 0;
        for(var i = 0; i < userModel.length; i++) {
            if(userModel[i].sex === sex) {
                //console.log(userModel[i].sex);
                sexTotal++;
            }
        }
    res.status(200).send('the Total ' + sex + ' is: ' + sexTotal);
    })

//返回所有用户年龄平均值
router.route('/ageAvg')
    .get(function(req, res, next) {
        var ageTotal = 0,
            ageAvg = 0,
            userNum = 0;
        //每个用户的 age 累加，得到年龄总和
        //得到用户总数
        for(var i = 0; i < userModel.length; i++) {
            ageTotal = userModel[i].age + ageTotal;
            userNum ++;
            }
        ageAvg = ageTotal / userNum;
    res.status(200).send('the Average age is: ' + ageAvg);
    })



//返回符合 company 搜索条件的用户列表
router.route('/search')
    .get(function(req, res, next) {
        var comSearch = req.query.company,
            //将搜索 字符串 转化为 RegExP,不区分大小写
            re = new RegExp(comSearch, "i"),
            userList = new Array();
        //console.log(re);
        for(i = 0; i < userModel.length; i++) {
            if(re.test(userModel[i].company) === true ) {
                //console.log(userModel[i]);
                userList.push(userModel[i]);
            }
        }

        //如果用户不存在，返回 Not Found
        if (userList.length > 0 ) {
            res.status(200).send(userList);
        } else {
            res.status(404).send('Not Found.');
        }

      })


//得到指定用户 id 的 lastName 和 lastName ，并返回
router.route('/:id')
    .get(function(req, res, next) {
        //console.log("here is id...")
        var id = req.params.id,
            index = id - 1;
        if(userModel[index]) {
            res.status(200).send('firstName: ' + userModel[index].firstName
                + '; ' + 'lastName: ' + userModel[index].lastName);
        } else {
            res.status(404).send('Not Found.');
        }
    })


/*
.PUT
*/




//对外开放 router 对象
module.exports = router;
