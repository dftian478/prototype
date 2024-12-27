# 组件文档

## 通用组件

### 文章卡片组件 (ArticleCard)
**路径**: `src/components/article-card/`
**描述**: 用于展示博客文章预览
**使用示例**:
```html
<div class="article-card">
    <div class="article-image">
        <img src="path/to/image.jpg" alt="文章配图">
    </div>
    <div class="article-content">
        <h3>文章标题</h3>
        <p class="article-meta">发布日期 | 阅读时间</p>
        <p class="article-excerpt">文章摘要...</p>
    </div>
</div>
```

### 作品展示卡片 (PortfolioCard)
**路径**: `src/components/portfolio-card/`
**描述**: 用于展示项目作品
**使用示例**:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="path/to/image.jpg" alt="项目预览图">
    </div>
    <div class="portfolio-info">
        <h3>项目名称</h3>
        <p>项目描述</p>
        <div class="tech-stack">
            <span class="tech-tag">技术标签</span>
        </div>
        <a href="#" class="btn btn-primary">了解更多</a>
    </div>
</div>
```

### 技能标签 (SkillTag)
**路径**: `src/components/skill-tag/`
**描述**: 用于展示技能和专长
**使用示例**:
```html
<div class="skill-tag">
    <span>技能名称</span>
    <div class="skill-level" data-level="90"></div>
</div>
```

### 项目展示轮播 (ProjectGallery)
**路径**: `src/components/project-gallery/`
**描述**: 用于展示项目详情页面的图片轮播
**依赖**: Swiper.js
**使用示例**:
```html
<div class="swiper project-gallery">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="path/to/image.jpg" alt="项目截图">
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>
```

### 项目信息卡片 (ProjectInfoCard)
**路径**: `src/components/project-info-card/`
**描述**: 用于展示项目的基本信息
**使用示例**:
```html
<div class="project-info-card">
    <h3>项目信息</h3>
    <ul class="project-info-list">
        <li><strong>客户</strong>: 项目客户</li>
        <li><strong>角色</strong>: 项目角色</li>
        <li><strong>时间</strong>: 项目周期</li>
        <li><strong>状态</strong>: 项目状态</li>
    </ul>
</div>
```

## 页面组件

### 博客列表页面 (BlogList)
**路径**: `src/pages/blog/`
**描述**: 展示所有博客文章的列表页面
**依赖组件**: 
- ArticleCard

### 作品集页面 (Portfolio)
**路径**: `src/pages/portfolio/`
**描述**: 展示所有项目作品的页面
**依赖组件**: 
- PortfolioCard

### 作品详情页面 (ProjectDetail)
**路径**: `src/pages/portfolio/detail.html`
**描述**: 展示项目的详细信息
**依赖组件**:
- ProjectGallery
- ProjectInfoCard
**功能特点**:
- 响应式设计
- 图片轮播展示
- 技术栈展示
- 相关项目推荐
- 滚动动画效果

### 个人简介页面 (About)
**路径**: `src/pages/about/`
**描述**: 详细的个人介绍页面
**依赖组件**: 
- SkillTag 