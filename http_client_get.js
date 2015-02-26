var http = require('http');
var options = {
    hostname: 'localhost',
    port: '8080',
};
function handleResponse (reponse) {
    var serverData = '';
    response.on ('data', function (chunk) {
        serverData += chunk;
    });
    response.on('end', function () {
        console.log("Response Status: ", response.statusCode);
        console.log("Response Header: ", response.headers);
        console.log(serverData);
    });
}
http.request(options, function (response) {
    handleResponse(response);
}).end();
