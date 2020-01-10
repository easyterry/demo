
/* eslint-disable */
const express = require('express');
const app     = express();
const server  = require('http').createServer(app);
const io      = require('socket.io')(server);

// 设置静态文件托管目录
app.use(express.static('node_modules'));

app.get('/', (request, response) => {
    response.send('index.html');
});

//监听客户端链接,回调函数会传递本次链接的socket
io.on('connection', socket => {
    // 监听客户端发送的信息
    socket.on("sentToServer", message => {
        // 给客户端返回信息
        io.emit("sendToClient", {message});
    });

    socket.on('message', message => {
        io.emit('message', message)
    })
});

server.listen(3000);
console.log('listening 3000');
