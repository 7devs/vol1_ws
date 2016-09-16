//引入包
var app = require('express')(),
    bodyParser = require('body-parser');

//中间件
app.use(bodyParser.urlencoded({
    extended: false
  })
);

//路由表
app.use('/user', require('./lib/routers/userAPI'));
app.use('/album', require('./lib/routers/albumAPI'));
app.use('/*', function(request, response, next) {
    response.status(400).send('Not Found!\n ' + 'Welcome to Homework0914!\n ' +"The time is " + Date());
});


app.listen(3000, function() {
    console.log("Homework0914 is running...")
});
