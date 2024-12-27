// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
let lastScrollTop = 0;
let scrollThreshold = 5;
let isScrollingDown = false;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(currentScroll - lastScrollTop) < scrollThreshold) {
        return;
    }

    if (currentScroll > lastScrollTop && !isScrollingDown && currentScroll > 100) {
        // 向下滚动
        header.style.transform = 'translateY(-100%)';
        isScrollingDown = true;
    } else if (currentScroll < lastScrollTop && isScrollingDown) {
        // 向上滚动
        header.style.transform = 'translateY(0)';
        isScrollingDown = false;
    }
    lastScrollTop = currentScroll;
});

// 技能标签动画
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'scale(1.1)';
    });
    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'scale(1)';
    });
});

// 作品集筛选功能
const portfolioFilters = document.querySelector('.portfolio-filters');
const portfolioItems = document.querySelectorAll('.portfolio-item');

if (portfolioFilters) {
    portfolioFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            // 移除所有按钮的active类
            portfolioFilters.querySelectorAll('.btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // 添加active类到点击的按钮
            e.target.classList.add('active');
            
            const filterValue = e.target.textContent.trim().toLowerCase();
            
            // 筛选作品
            portfolioItems.forEach(item => {
                const techStack = item.querySelector('.tech-stack').textContent.toLowerCase();
                const projectTitle = item.querySelector('h3').textContent.toLowerCase();
                
                if (filterValue === '全部' || 
                    techStack.includes(filterValue) || 
                    projectTitle.includes(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        }
    });
}

// 文章卡片悬停效果
document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// 社交链接悬停效果
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
}); 