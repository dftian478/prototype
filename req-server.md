# AI 原型项目开发规范 - 服务器版本

## 适用场景
- 多页面复杂原型
- 需要组件复用
- 用户具备基本的开发技能
- 需要更好的开发体验

## 项目目标
作为产品经理的原型开发辅助工具，需要生成符合前端最佳实践的、易于维护的、模块化的网页原型。

## 开发环境配置

### 1. 基础要求
- Node.js 环境（推荐 v14+）
- 包管理器（npm/yarn）
- 基本的命令行操作能力

### 2. 快速开始
```bash
# 安装开发服务器
npm install -g live-server

# 启动开发服务器
cd project-root
live-server src --port=3000
```

### 3. 开发工具推荐
- VSCode：轻量级代码编辑器
- Chrome DevTools：调试工具
- Git：版本控制（可选）

## 项目结构
```
project-root/                 # 项目根目录
├── docs/
│   ├── CHANGELOG.md          # 变更日志
│   └── COMPONENTS.md         # 组件文档
├── src/
│   ├── components/           # 可复用组件
│   │   └── [ComponentName]/
│   │       ├── index.html    # 组件可独立运行的HTML
│   │       ├── style.css
│   │       └── script.js
│   ├── pages/               # 页面组件
│   │   └── [PageName]/
│   │       ├── index.html    # 页面可独立运行的HTML
│   │       ├── style.css
│   │       └── script.js
│   ├── assets/             # 静态资源
│   │   ├── images/
│   │   ├── styles/
│   │   └── lib/            # 第三方库
│   ├── utils/             # 工具函数
│   │   └── helpers.js
│   ├── index.html         # 主页面
│   ├── style.css          # 全局样式
│   └── main.js            # 主脚本
└── metadata.json          # 项目元数据
```

## 资源引用规范

### 1. 路径规则
- 使用绝对路径（以 / 开头）引用资源
- 第三方库优先使用CDN，本地库作为备选
- 支持ES6模块化导入导出

示例结构：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
    <!-- CDN引用（优先） -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          onerror="this.onerror=null;this.href='/assets/lib/bootstrap.min.css';">
    <!-- 页面样式 -->
    <link rel="stylesheet" href="/pages/[PageName]/style.css">
</head>
<body>
    <!-- 页面内容 -->
    
    <!-- CDN引用（优先） -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            onerror="this.onerror=null;this.src='/assets/lib/bootstrap.bundle.min.js';"></script>
    <!-- 模块化脚本 -->
    <script type="module" src="/pages/[PageName]/script.js"></script>
</body>
</html>
```

## Web Components 开发规范

### 1. 组件基本结构
```javascript
// 组件定义
class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // 生命周期回调
    connectedCallback() {
        this.render();
    }

    // 监听属性变化
    static get observedAttributes() {
        return ['my-attr'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    // 渲染方法
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
            </style>
            <div class="component">
                <!-- 组件模板 -->
            </div>
        `;
    }
}

customElements.define('my-component', MyComponent);
```

### 2. 组件通信
```javascript
// 事件发送
this.dispatchEvent(new CustomEvent('my-event', {
    bubbles: true,
    composed: true,
    detail: { /* 事件数据 */ }
}));

// 事件监听
document.querySelector('my-component')
    .addEventListener('my-event', (e) => {
        console.log(e.detail);
    });
```

## CSS规范
1. 使用BEM命名规范
2. 组件样式模块化
3. 使用CSS变量定义主题
4. 响应式设计优先
5. 避免使用!important

## JavaScript规范
1. 使用ES6+语法
2. 使用模块化组织代码
3. 使用事件委托优化性能
4. 异步操作使用Promise或async/await
5. 使用TypeScript（可选）

## 元数据文件格式 (metadata.json)
```json
{
  "projectName": "项目名称",
  "version": "版本号",
  "lastUpdate": "最后更新时间",
  "components": [
    {
      "name": "组件名称",
      "path": "文件路径",
      "description": "功能描述",
      "dependencies": ["依赖组件"]
    }
  ],
  "pages": [
    {
      "name": "页面名称",
      "path": "文件路径",
      "components": ["使用的组件"],
      "description": "页面功能描述"
    }
  ]
}
```

## 文档要求

### 1. 变更日志 (CHANGELOG.md)
- 记录版本更新内容
- 使用语义化版本号
- 详细的更新说明

### 2. 组件文档 (COMPONENTS.md)
- 组件名称和功能说明
- 属性和事件列表
- 使用示例
- 依赖关系说明

## 开发流程
1. 分析需求
2. 更新元数据
3. 开发/修改组件
4. 更新文档
5. 本地测试
6. 提交代码（如果使用版本控制）

## 注意事项
1. 保持代码简洁清晰
2. 确保组件可复用性
3. 注重性能优化
4. 考虑浏览器兼容性
5. 保持文档及时更新 