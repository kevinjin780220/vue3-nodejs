// Author: ChatGPT
// Date: 2021-09-23

// server.js (Node.js 后端)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 使用 body-parser 中间件解析JSON请求体
app.use(bodyParser.json());

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// 处理 GET 请求
app.get('/', (req, res) => {
  res.send(JSON.stringify(users))
});

// 处理 POST 请求
app.post('/user', (req, res) => {
  const user = req.body;  // 获取前端发送的 JSON 数据
  console.log('Received user info:', user);

  // 返回响应
  res.json({
    message: 'User information received successfully!',
    receivedData: user
  });
});

// 启动服务器，监听 3000 端口
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
