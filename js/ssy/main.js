var http = require("http")
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  let obj = {
    "name": "松山院",
    "skill": "编程",
    "friend": "达摩院"
  }
  response.end(JSON.stringify(obj))
}).listen(3000)

console.log('Server running at http://127.0.0.1:3000/')