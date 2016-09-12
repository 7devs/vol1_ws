#NO.007
the error is from Demo4(of Lesson6).  
the code below is from `api.js` :
```
var router = require('express').Router // 引入 Express 的路由处理
```

**ERROR**:  
```
/demo4/node_modules/express/lib/router/index.js:502
  this.stack.push(layer);
            ^

TypeError: Cannot read property 'push' of undefined
    at Function.route (demo4/node_modules/express/lib/router/index.js:502:13)
    at Object.<anonymous> (demo4/lib/routers/api.js:14:12)
    at Module._compile (module.js:409:26)
    at Object.Module._extensions..js (module.js:416:10)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at Object.<anonymous> (demo4/index.js:14:17)
    at Module._compile (module.js:409:26)

```

**CORRECT**:  
check the method `Router`  
```
var router = require('express').Router() //引入Express的路由处理

```
