# AI 原型项目开发规范 - 本地版本

## 适用场景
- 单页面简单原型
- 无需复杂组件复用
- 用户不具备开发环境配置能力
- 需要快速分享和预览

## 项目目标
作为产品经理的原型开发辅助工具，需要生成可直接打开的、独立运行的网页原型。

## 项目结构
```
project-root/                # 项目名称
├── pages/                  # 独立页面
│   └── [PageName]/
│       ├── index.html      # 可独立运行的HTML
│       ├── style.css
│       ├── script.js
│       └── lib/            # 当前页面依赖的库文件
├── shared/                 # 共享资源
│   ├── images/            # 图片资源
│   └── styles/            # 共享样式
└── index.html             # 项目入口页面
```

## 独立运行支持

### 1. 资源引用规范
为确保HTML文件可以通过双击直接运行：

1. 使用相对路径引用资源
2. 所有依赖库文件必须下载到本地
3. 避免使用模块化导入导出
4. 避免使用Web Components等需要服务器支持的特性

示例结构：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
    <!-- 本地库引用 -->
    <link rel="stylesheet" href="./lib/bootstrap.min.css">
    <!-- 页面自身样式 -->
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <!-- 页面内容 -->
    
    <!-- 本地库引用 -->
    <script src="./lib/bootstrap.bundle.min.js"></script>
    <!-- 页面自身脚本 -->
    <script src="./script.js"></script>
</body>
</html>
```

### 2. 代码组织
- 每个页面都是完全独立的
- 避免跨页面的代码复用
- 使用简单的JavaScript，避免复杂框架
- 注重代码可读性和可维护性

## HTML规范
1. 使用语义化标签（nav, header, main, footer等）
2. 使用有意义的class和id命名
3. 保持结构清晰，适当缩进
4. 每个HTML文件都应该是完整且可独立运行的
5. 使用相对路径引用资源
6. 确保跨平台兼容性（使用UTF-8编码）

## CSS规范
1. 使用简单清晰的类名
2. 避免过度嵌套
3. 使用相对单位（rem, em, %）
4. 响应式设计优先
5. 避免使用!important

## JavaScript规范
1. 使用ES5语法确保最大兼容性
2. 避免使用复杂的设计模式
3. 使用简单的事件处理
4. 保持代码简单直观
5. 添加必要的注释

## 推荐的本地依赖库
建议下载以下库到本地使用：

1. Bootstrap（基础版本）
   - bootstrap.min.css
   - bootstrap.bundle.min.js

2. Font Awesome（基础图标）
   - all.min.css
   - webfonts/

3. jQuery（可选）
   - jquery.min.js

## 开发建议
1. 使用Visual Studio Code等编辑器开发
2. 使用浏览器开发者工具调试
3. 定期测试双击打开功能
4. 保持文件结构简单清晰
5. 注重代码可读性 