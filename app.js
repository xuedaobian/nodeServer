import express from 'express';
import { generateRandomString } from './utils.js';


const app = express();

// 处理跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.post('/login', (req, res) => {
  // 解析请求体
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });
  req.on('end', () => {
    console.log('body:', body);
    // 返回 json
    res.status(200).send(JSON.stringify({ token: generateRandomString(16) }));
  });
});

app.listen(8081, () => {
  console.log('server is running at http://localhost:8081');
});