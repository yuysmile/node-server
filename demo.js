let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs');

//  创建服务器
let server = http.createServer(function(req, res){
    //res.statusCode = 200;
    //res.setHeader("Content-Type", "text/plain; charset=utf-8");
    var pathname = url.parse(req.url).pathname;
    console.log('file:' + pathname.substring(1));
        fs.readFile(pathname.substring(1), function(err, data) {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                res.write(data.toString());
            }
            res.end();
        })
    })

// 监听端口，查看网页
server.listen(3000, '127.0.0.1', function(){
     console.log('服务器已经运行');
})