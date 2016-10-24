# Lesson12
date:2016-10-17

## 分组
组长：姜姗
组员：熊翼诚、王森、盛瑾

---------------

##数据库建模
* 关系型
* 非关系型（key/value）
举例：  
例：订餐模块（人、时间、类型）

------
## MONGO数据库
启动服务（命令行）：mongo
库名（服务）：mongoose  
数据库文件放在: ./lib/models/\**.js
以订餐信息为例：
```  
from: String,
type: Number, //0: 午, 1: 晚 Number便于多种语言的输入识别
added: {type: Date, default: Date.now}
```
以user.js 为例，  
```
openid: String,
nickname: String,
name: String,
sex: Number,
language: String,
city: String,
province:
country:
headimgurl:
isadmin: {tpye: Boolean, default: false},
added: {type: Date, default: Date.now}
```

自动分配一条记录：ret.id；  
删除记录，一般使用id，保证唯一性；
每个项目对应一个库，库里有表。  

用到的工具：
*

思路：
举例：提醒功能  
* 用户
* 各类提醒（内容，是否重复）

## mongoose的语法
* var schema = mongoose.Schema({数据结构}, {扩展: 如版本号, 虚拟字段});  
-- 数据结构: 特殊的有 objectID；  
-- 虚拟字段virtual: first name, last name;

## 要求
1. 分工
 * 解决实际问题
 * 分组(模块)完成
 * github管理
 * 单元测试

1. 产品设计
 * 产品定义： 哪些人、哪些场景、哪些问题
 * 功能列表：划分功能模块、描述具体功能、确定优先级
 * 关键界面（原型）: 确定视觉风格、确定交互方式、确定业务流程和业务逻辑

1. 设计系统架构
1. 开发
1. 测试
1. 代码Review
1. 提交/部署

---
1.功能（参考文档）：
 1. 捐助人和学生对应信息的查询
 1. 

1. 关键界面：
 1. 登录
 1. 必要的提示
 1. WeUI（官方文件套用）

1. 结构设计和

1. 疑问：
* 查询结果如何呈现
* 后台如何录入数据
*

---作业
1. 产品功能列表
1. 关键界面（手画或Sketch）
1. 架构设计
1. 模块分工表
