//引入 express 包
var express = require('express')
  bodyParser = require('body-parser'),
  app = express(); //default method of express

//post 数据解析
//中间件 use:在req和res，返回之间将数据预先处理。 作为表单的数据先放到body里。
app.use(bodyParser.urlencoded({
    extended: false //不判断，接收所有字符
}));


//路由表
//GET 方法－取得数据， "/"是地址
app.get('/', function(req, res, next) {
  res.send('index and home');
  next();
});

//演示next()，这里也可以不写，如果有.all，则
/*
app.all('/test', function(req, res, next) {
    console.log('xxxxx');
    if(true) {
        next();//定义中间件时需要用到next()
    } else {
        res.status(403).send({msg: '验证失败'})；
    }
});
*/

//POST方法-创建新条目，“/test”地址的处理
app.post('/test', function(req, res, next) {
    res.status(200).send({ //200是状态码，一般是express的默认值
        method: 'POST',
        path: req.path,
        body: req.body,  //表单传递
        query: req.query  //向服务端提交数据分为两部分，一是表单body；二是地址栏传递的在query里，例／test?key=value
    });
    next();
})

//GET /test
app.get('/test', function(req, res, next) {
    res.send('test。。。');
    next();
});

// DELETE /user/:id
app.delete('/user/:id', function(req, res, next) {
    console.log('我要删除 ID为', req.params.id, '的用户。');
    //判断是否为管理员
    if(req.query.admin === '1') {
        console.log('删除成功');
        res.status(200).end();        
    } else {
        console.log('删除失败');
        res.status(403).end();
    }
});

// GET /user/:name
app.get('/user/:name', function(req, res, next) {
    res.send({
        user: req.params.name
    });
});

app.listen(3000, function() {
    console.log('demo running...');
});
