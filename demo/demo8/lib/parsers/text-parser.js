module.exports = function(content) {
    var reContent;
    switch (content) {
      case '1':
          reContent = '111';
          break;
      case '2':
          reContent = '222';
          break;
      case '3':
          reContent = '333';
          break;
      case '4';
          reContent = '444';
          break;
      default:
          reContent = 'xxx';
          break;
    }
    return reContent;
}
