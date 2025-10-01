# Vercel部署指南

## 部署步骤

### 1. 安装Vercel CLI
```bash
npm i -g vercel
```

### 2. 登录Vercel
```bash
vercel login
```

### 3. 部署到Vercel
```bash
vercel
```

### 4. 设置环境变量
在Vercel Dashboard中设置以下环境变量：
- `EMAIL_USER`: 你的Gmail邮箱地址
- `EMAIL_PASS`: 你的Gmail应用密码

### 5. 生产环境部署
```bash
vercel --prod
```

## 环境变量配置

### Gmail应用密码设置
1. 启用Gmail两步验证
2. 生成应用专用密码
3. 在Vercel Dashboard中添加环境变量：
   - `EMAIL_USER`: 你的Gmail地址
   - `EMAIL_PASS`: 应用专用密码

## 项目结构
```
├── api/
│   └── contact.js          # Serverless Function
├── src/                    # React应用
├── vercel.json            # Vercel配置
└── package.json           # 项目依赖
```

## API端点
- `POST /api/contact` - 处理联系表单提交

## 本地开发
```bash
npm run dev
```

## 构建和部署
```bash
npm run build
npm run deploy
```
