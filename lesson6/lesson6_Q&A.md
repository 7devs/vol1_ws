#Lesson6
##Q001:
本课中，对应DEMO4， `api.js` 中下列语句：
```
router.route('/user/:key')
    .get(function(req, res, next) {
        var key = req.params.key;
        if(userModel[key]) {
            res.status(200).send(userModel[key]);            
        } else {
            res.status(404).send('data is not exiting.');
        }
```
其中，
`req.params.key`是指什么？


##A001:
