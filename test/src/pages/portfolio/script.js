// 初始化Swiper轮播
const projectGallery = new Swiper('.project-gallery', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 处理项目链接的悬停效果
document.querySelectorAll('.project-links .btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0)';
    });
});

// 处理技术标签的点击事件
document.querySelectorAll('.tech-category li').forEach(item => {
    item.addEventListener('click', () => {
        const techName = item.textContent.trim();
        // 可以添加搜索相关技术的功能
        console.log(`Clicked on technology: ${techName}`);
    });
});

// 图片加载优化
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// 滚动动画
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-description h2, .tech-category, .project-info-card, .project-links-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// 初始化滚动动画的样式
document.querySelectorAll('.project-description h2, .tech-category, .project-info-card, .project-links-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
});

// 监听滚动事件
window.addEventListener('scroll', animateOnScroll);
// 初始加载时也执行一次
animateOnScroll(); 