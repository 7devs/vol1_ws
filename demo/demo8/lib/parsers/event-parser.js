module.exprots = function(data) {
    var event = data.event.toLowCase(),
        eventKey = data.eventKey,
        reContent;
    switch (event) {
        // 处理菜单点击事件
        case 'click':
        // 根据不同的的 event key 给不同的返回值
        switch (eventKey) {
            case 'menu1':
            reContent = 'menu1 clicked';
            break;
            case 'menu2':
            reContent = 'menu2 clicked';
            break;
            default:
            reContent = '...';
            break;
        }
        break;
        case 'pic_sysphoto':
        case 'scancode_push':
        default:
        //
        console.log(data);
        reContent = JSON.stringify(data);
        break;
    }
    return reContent;
}
