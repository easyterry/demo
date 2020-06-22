/* eslint-disable */
var ws = require("nodejs-websocket")
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str)
        boardcast(str)
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
    conn.on('onMessage', (data) => {
        conn.sendText(data)
    })
}).listen(8001)

console.log('连接成功~~~', 8001);

function boardcast(str){
    server.connections.forEach(function(conn){
        conn.sendText(str);
    });
}
