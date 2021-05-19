# express使用https服务
## 证书
```
	//生成CA私钥
    $ openssl genrsa -out ca.key 1024
    //生成csr文件
    $ openssl req -new -key ca.key -out ca.csr
    //生成自签名证书
    $ openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
    //生成server.csr文件
    $ openssl req -new -key server.key -out server.csr
    //生成带有ca签名的证书
    $ openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt
    ```
## 使用
``` js
var https = require('https');
var http = require('http');
var fs = require('fs');

//同步读取密钥和签名证书
var options = {
    key:fs.readFileSync('./keys/server.key'),
    cert:fs.readFileSync('./keys/server.crt')
};
var app = express();
var httpsServer = https.createServer(options,app);
var httpServer = http.createServer(app);

app.get('/',function(req,res,next){
    res.send('Hello Express+https');
});
//https监听3000端口
httpsServer.listen(3000);
//http监听3001端口
httpServer.listen(3001);
```