var app = require('express')(),
    bodyParser = require('body-parser'),
    tool = require('./lib/tool.js');

app.use(bodyParser.urlencoded({
    extended: false
}));

// debug
console.log('urlencoded is in...1')

//将要处理的逻辑交给具体的包来执行
//app.use('/api', require('./lib/routers/api'));
app.use('/', require('./lib/routers/api'));

// debug
console.log('api is in...2')

app.use('/*', function(req, res, next) {
    res.status(404).send('Not Found.');
});

app.listen(3000, function(){
    console.log('this is an exercise of Lesson6.');
});
