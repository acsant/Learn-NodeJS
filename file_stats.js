var fs = require('fs');
fs.stat('file_stats.js', function (err, stats) {
    if (!err) {
        console.log('stats: ' + JSON.stringify(stats, null, ' '));
        console.log(stats.isFile() ? "Is a File" : "Is Not a File");
        console.log(stats.isDirectory() ? "Is a Folder" : "Is Not a Folder");
        console.log(stats.isSocket() ? "Is a Socket" : "Is Not a socket");
        stats.isDirectory();
        stats.isBlockDevice();
        stats.isCharacterDevice();
        stats.isFIFO();
        stats.isSocket();
    }
});
