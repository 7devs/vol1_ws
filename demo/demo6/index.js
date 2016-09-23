var app = require('express')(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.listen(8013, function(err) {
    console.log('listenning at 8013');
}) //处理监听的回调
