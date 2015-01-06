var http     = require('http');
var greeting = require('./src/greeting');

var port = process.env.PORT || 8080;
var nenv = process.env.NODE_ENV || "unknown";
var cenv = process.env.COMMON_VARIABLE || "-";

http.createServer(function (request, response) {
	var content = greeting(new Date());
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write(content + '!\n');
	response.write(nenv + '!\n');
	response.write('*******!\n');
	response.end(cenv + '!\n');
}).listen(port);

console.log("Server running at http://127.0.0.1:" + port + "/");