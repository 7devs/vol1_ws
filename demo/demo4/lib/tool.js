//定义工具方法
function printDate() {
    var d = new Date();
    console.log(d.toString());
}

function printLine() {
    console.log('------------------------------');
}

//对外开放接口
module.exports.printDate = printDate;
module.exports.printLine =printLine;
