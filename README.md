# Dealer Management System - Railway Deployment

海外经销商管理系统 Railway 部署版本

## 📦 项目结构

```
dealer-management-railway/
├── index.html          # 主应用文件（单页应用）
├── server.js           # Express 静态服务器
├── package.json        # Node.js 依赖配置
├── .gitignore          # Git 忽略文件
└── README.md           # 本文档
```

## 🚀 部署到 Railway

### 方式一：通过 GitHub（推荐）

1. **创建 GitHub 仓库**
   ```bash
   cd dealer-management-railway
   git init
   git add .
   git commit -m "Initial commit: Dealer Management System"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **连接 Railway**
   - 访问 [Railway.app](https://railway.app/)
   - 点击 "New Project"
   - 选择 "Deploy from GitHub repo"
   - 选择你刚创建的仓库
   - Railway 会自动检测到 Node.js 项目并开始部署

3. **等待部署完成**
   - Railway 会自动运行 `npm install` 和 `npm start`
   - 部署完成后会生成一个公开访问的 URL

### 方式二：通过 Railway CLI

1. **安装 Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **登录 Railway**
   ```bash
   railway login
   ```

3. **初始化项目并部署**
   ```bash
   cd dealer-management-railway
   railway init
   railway up
   ```

4. **生成域名**
   ```bash
   railway domain
   ```

### 方式三：手动上传

1. 访问 [Railway.app](https://railway.app/)
2. 创建新项目
3. 选择 "Empty Project"
4. 上传项目文件
5. 配置启动命令：`npm start`

## 🔧 本地测试

在部署到 Railway 之前，可以先在本地测试：

```bash
# 安装依赖
npm install

# 启动服务器
npm start

# 访问应用
# 打开浏览器访问 http://localhost:3000
```

## 📝 环境变量

Railway 会自动设置 `PORT` 环境变量，无需手动配置。

如需添加其他环境变量，可以在 Railway 控制台的 Variables 选项卡中添加。

## ✨ 功能特性

- ✅ 单文件 HTML 应用，零数据库依赖
- ✅ 基于 localStorage 的前端数据存储
- ✅ 多语言支持（中文、英文、西班牙语、阿拉伯语、俄语）
- ✅ Apple 风格 UI 设计
- ✅ 响应式布局，支持移动端
- ✅ Express 静态服务器托管
- ✅ 适用于 Railway 的零配置部署

## 📊 数据管理

### 数据存储
- 所有数据存储在浏览器的 localStorage 中
- 每个用户的数据独立，不会互相影响
- 清除浏览器缓存会导致数据丢失

### 数据备份
建议定期使用系统内置的"导出数据"功能备份数据：
1. 点击右上角"导出数据"按钮
2. 下载 JSON 文件到本地
3. 需要恢复时使用"导入数据"功能

## 🛠️ 技术栈

- **前端**: HTML5 + CSS3 + JavaScript (ES6+)
- **后端**: Node.js + Express
- **部署**: Railway
- **数据**: localStorage（客户端存储）

## 📖 相关链接

- [Railway 文档](https://docs.railway.app/)
- [Express 文档](https://expressjs.com/)
- [项目主 README](../README.md)

## 📧 联系方式

- **组织**: Li Xiang Automotive - Overseas Channel Management
- **邮箱**: wuzuomin@lixiang.com

## 📄 许可证

MIT License

---

**部署成功后，您将获得一个类似以下格式的 URL：**
- `https://your-project-name.up.railway.app`

系统即可全球访问，支持多语言和移动端！🎉
