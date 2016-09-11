function start() {
    console.log("Request handler 'start' was called.");

    //add sleep 10s before call "start()"
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds );
    }
    sleep(10000);
    //add end.
    return "Hello Start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
