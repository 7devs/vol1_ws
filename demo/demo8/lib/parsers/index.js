// 消息解析入口
module.exports = function(data) {
    var msgType = data.msgtype;
    var reContent;
    // 按消息类型将消息数据分别分发给对应的消息解析器
    // 注意：不同的消息类型有不同的数据结构
    switch(msgType) {
        case 'text':
        // 引入解析包，调用，返回
        reContent = require('./text-parser.js')(data.content);
        break;
        case 'voice':
        reContent = require('./voice-parser.js')(data.recognition);
        case 'event':
        reContent = require('./event-parser.js')(data);
        case 'video':
        case 'location':
        case 'shortvideo':
        default:
        reContent = 'I have no idea.\n' + JSON.stringify(data);
        break;
    }

    return reContent;
}
