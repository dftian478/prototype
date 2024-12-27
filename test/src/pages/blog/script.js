// 目录导航
const createTableOfContents = () => {
    const headings = document.querySelectorAll('.article-body h2, .article-body h3');
    const tocList = document.querySelector('.toc-list');
    
    if (!tocList || headings.length === 0) return;

    headings.forEach((heading, index) => {
        const link = document.createElement('a');
        const listItem = document.createElement('li');
        const headingId = `heading-${index}`;
        
        heading.id = headingId;
        link.href = `#${headingId}`;
        link.textContent = heading.textContent;
        
        if (heading.tagName === 'H3') {
            listItem.classList.add('toc-h3');
        }
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth' });
        });
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
};

// 代码高亮
const highlightCode = () => {
    document.querySelectorAll('pre code').forEach(block => {
        hljs.highlightBlock(block);
    });
};

// 图片加载优化
const optimizeImages = () => {
    document.querySelectorAll('.article-body img').forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
};

// 分享功能
const initializeSharing = () => {
    const shareButtons = document.querySelectorAll('.share-button');
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    
    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let shareUrl = '';
            
            if (button.classList.contains('twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
            } else if (button.classList.contains('facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
            } else if (button.classList.contains('linkedin')) {
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
};

// 评论功能
const initializeComments = () => {
    const commentForm = document.querySelector('.comment-form');
    const commentsList = document.querySelector('.comments-list');
    
    if (!commentForm) return;
    
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const textarea = commentForm.querySelector('textarea');
        const commentText = textarea.value.trim();
        
        if (!commentText) return;
        
        // 创建新评论
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `
            <div class="comment-header">
                <img src="../../assets/images/avatar-placeholder.jpg" alt="用户头像" class="comment-avatar">
                <span class="comment-author">访客用户</span>
                <span class="comment-date">${new Date().toLocaleDateString()}</span>
            </div>
            <div class="comment-body">
                <p>${commentText}</p>
            </div>
        `;
        
        // 添加到评论列表
        commentsList.insertBefore(comment, commentsList.firstChild);
        
        // 清空表单
        textarea.value = '';
        
        // 滚动到新评论
        comment.scrollIntoView({ behavior: 'smooth' });
    });
};

// 阅读进度指示器
const createReadingProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    createTableOfContents();
    highlightCode();
    optimizeImages();
    initializeSharing();
    initializeComments();
    createReadingProgress();
}); 