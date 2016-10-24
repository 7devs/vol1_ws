#Lesson11
Date:2016-10-14
主题：HTML5/CSS/JS HTML DOM

链接:`http://www.w3schools.com/html/default.asp`
IE9以后，都支持HTML5

##HTML：页面结构与内容  
* 文档类型 `<!DOCTYPE html>`
* 必须有且只有一个根节点 如 `<html>`  

```
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```




##CSS3：边框、背景、文本效果、字体、动画等
* .class  //以类为定义,统一定位属性class的style。
          //可以重复

* #id  //id,不可以重复，一个页面只有一个相同的ID name
* 外部引入 样式表 ，用
```
<head>
    <link href="*.css">
</head>
```

##JavaScript
###第三方JS库，
* `jQuery`，
* zepto 轻量

作业：
1)连接到项目菜单，可以页面
2)尝试引入WeUI
----
##`index.js` 中
'/pages'定义路由  

app.set(); //设置模版路径 `lib/views`，  
`__dirname`(index.js的同级目录)  
path.join() 该方法可以自动处理转义符号；  
app.set();//使用模版引擎 `ejs`(解析ejs模版的包)  
app.use(express.static())//静态文件目录
```
app.use(
    express.static(
        path.join(__dirname, 'static'),
        {
            index: false,
            maxAge: '7 days'
        }
      )
  );
```

## 完善路由 `pages.js`
router.route()    
res.render() //解析.ejs模版文件，渲染成页面  
res.render() //其中第二个参数，如'title',替换指定内容  
客户端(浏览器)页面中，<%= title %>引用上面res.render()中定义的内容;  
若模版中用js代码(服务器端)，注意每行都用`%`
```
<% for (var i=0;i<arr.length;i++) { %>
    <p><%= arr[i] %></p>
<% } %
```

## WeUI（样式表）怎么用

链接:`https://github.com/weui/weui/wiki/getting-started`  
