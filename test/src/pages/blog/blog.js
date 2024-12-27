// 文章数据
const articles = Array.from(document.querySelectorAll('.article-item')).map(article => ({
    element: article,
    title: article.querySelector('h2').textContent,
    excerpt: article.querySelector('.article-excerpt').textContent,
    date: new Date(article.querySelector('.article-date').textContent.match(/\d{4}-\d{2}-\d{2}/)[0]),
    views: parseInt(article.querySelector('.article-views').textContent.match(/\d+/)[0]),
    categories: JSON.parse(article.dataset.categories),
    tags: JSON.parse(article.dataset.tags)
}));

// 搜索功能
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const searchArticles = (query) => {
    query = query.toLowerCase();
    articles.forEach(article => {
        const matches = article.title.toLowerCase().includes(query) ||
                       article.excerpt.toLowerCase().includes(query) ||
                       article.categories.some(cat => cat.toLowerCase().includes(query)) ||
                       article.tags.some(tag => tag.toLowerCase().includes(query));
        
        article.element.style.display = matches ? 'block' : 'none';
    });
};

searchButton.addEventListener('click', () => {
    searchArticles(searchInput.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchArticles(searchInput.value);
    }
});

// 排序功能
const sortSelect = document.getElementById('sortSelect');

const sortArticles = (sortBy) => {
    const sortedArticles = [...articles].sort((a, b) => {
        switch (sortBy) {
            case 'date-desc':
                return b.date - a.date;
            case 'date-asc':
                return a.date - b.date;
            case 'views':
                return b.views - a.views;
            default:
                return 0;
        }
    });

    const articlesList = document.querySelector('.articles-list');
    sortedArticles.forEach(article => {
        articlesList.appendChild(article.element);
    });
};

sortSelect.addEventListener('change', (e) => {
    sortArticles(e.target.value);
});

// 分类过滤
const categoryLinks = document.querySelectorAll('.categories-list a');

const filterByCategory = (category) => {
    articles.forEach(article => {
        const matches = category === 'all' || article.categories.includes(category);
        article.element.style.display = matches ? 'block' : 'none';
    });
};

categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        
        // 更新活动状态
        categoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        filterByCategory(category);
    });
});

// 标签过滤
const tagLinks = document.querySelectorAll('.tags-cloud .tag');

const filterByTag = (tag) => {
    articles.forEach(article => {
        const matches = tag === 'all' || article.tags.includes(tag);
        article.element.style.display = matches ? 'block' : 'none';
    });
};

tagLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tag = link.dataset.tag;
        
        // 更新活动状态
        tagLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        filterByTag(tag);
    });
});

// 归档过滤
const archiveLinks = document.querySelectorAll('.archive-list a');

const filterByMonth = (month) => {
    articles.forEach(article => {
        const articleMonth = article.date.toISOString().slice(0, 7);
        const matches = month === 'all' || articleMonth === month;
        article.element.style.display = matches ? 'block' : 'none';
    });
};

archiveLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const month = link.dataset.month;
        
        // 更新活动状态
        archiveLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        filterByMonth(month);
    });
});

// 分页功能
const itemsPerPage = 6;
let currentPage = 1;

const setupPagination = () => {
    const totalPages = Math.ceil(articles.length / itemsPerPage);
    const pagination = document.querySelector('.pagination');
    
    // 清空现有分页
    while (pagination.firstChild) {
        pagination.firstChild.remove();
    }
    
    // 添加分页项
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item${i === currentPage ? ' active' : ''}`;
        
        const a = document.createElement('a');
        a.className = 'page-link';
        a.href = '#';
        a.textContent = i;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            showPage(currentPage);
            updatePagination();
        });
        
        li.appendChild(a);
        pagination.appendChild(li);
    }
};

const showPage = (page) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    articles.forEach((article, index) => {
        article.element.style.display = (index >= start && index < end) ? 'block' : 'none';
    });
};

const updatePagination = () => {
    const paginationLinks = document.querySelectorAll('.page-item');
    paginationLinks.forEach((link, index) => {
        link.classList.toggle('active', index + 1 === currentPage);
    });
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始排序
    sortArticles('date-desc');
    
    // 设置分页
    setupPagination();
    showPage(currentPage);
    
    // 添加返回顶部按钮
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
}); 