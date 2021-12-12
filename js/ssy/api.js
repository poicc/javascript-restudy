var express = require('express')
var app = express()
var urlLib = require('url')

app.get('/info', function (req, res, next) {
    let data = { 'name': 'ssy', 'age': '20' }
    let params = urlLib.parse(req.url, true)
    let str = params.query.callback + '(' + JSON.stringify(data) + ')'
    res.send(str)
})

var server = app.listen(3000, function () {
    console.log('服务器启动：http://localhost:3000')
})