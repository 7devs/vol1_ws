var http = require('http');
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname +" received.");

        response.writeHead(200, {"Content-Type": "text/plain"});
        var content = route(handle, pathname);
//error:TEST the type of content, it's "undefined"
        console.log("content's type is " + typeof(content));
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
