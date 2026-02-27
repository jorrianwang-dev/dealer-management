const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 设置静态文件目录
app.use(express.static(__dirname));

// 路由：所有请求都返回 index.html（支持 SPA）
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 Dealer Management System is running on port ${PORT}`);
  console.log(`📍 Access the app at: http://localhost:${PORT}`);
});
