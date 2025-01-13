// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 加载所有动态内容
        await Promise.all([
            loadLatestNews(),
            loadFeaturedArticles(),
            loadUpcomingEvents(),
            loadHotTopics()
        ]);
    } catch (error) {
        console.error('加载内容失败:', error);
        showError('加载内容失败，请刷新页面重试');
    }
});

// 加载最新动态
async function loadLatestNews() {
    const newsContainer = document.getElementById('latestNews');
    const news = [
        {
            id: 'quantum-breakthrough-2024',
            title: '量子计算突破：首次实现100量子比特纠缠',
            summary: '科学家们在量子计算领域取得重大突破，成功实现了100个量子比特的稳定纠缠态，为大规模量子计算机的实现迈出关键一步。该研究发表在《Nature》杂志上...',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
            date: '2024-03-19',
            readTime: '5分钟阅读',
            author: '张明',
            category: '前沿进展'
        },
        {
            id: 'ibm-new-processor',
            title: 'IBM发布新一代量子处理器',
            summary: 'IBM宣布推出最新的Eagle量子处理器，拥有433个量子比特，并展示了更低的错误率和更长的相干时间，为实用量子计算带来新希望...',
            image: 'https://images.unsplash.com/photo-1624378515195-6bbdb73dff1a?w=800&auto=format&fit=crop&q=60',
            date: '2024-03-18',
            readTime: '4分钟阅读',
            author: '李华',
            category: '技术进展'
        },
        {
            id: 'china-quantum-communication',
            title: '中国科学家在量子通信领域获重要进展',
            summary: '中国科研团队成功实现千公里级量子密钥分发，为构建全球量子通信网络奠定基础。该技术有望彻底改变现有的网络安全格局...',
            image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&auto=format&fit=crop&q=60',
            date: '2024-03-17',
            readTime: '6分钟阅读',
            author: '王强',
            category: '研究进展'
        }
    ];

    newsContainer.innerHTML = news.map(item => `
        <div class="news-item list-item">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
            </div>
            <div class="news-content">
                <h4>
                    <a href="pages/news/${item.id}.html" class="text-decoration-none text-dark">
                        ${item.title}
                    </a>
                </h4>
                <p class="news-summary">${item.summary}</p>
                <div class="meta-info">
                    <span class="category-badge ${item.category.replace(/\s+/g, '-').toLowerCase()}">
                        ${item.category}
                    </span>
                    <span><i class="ri-user-line"></i> ${item.author}</span>
                    <span><i class="ri-time-line"></i> ${item.date}</span>
                    <span><i class="ri-book-read-line"></i> ${item.readTime}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 加载精选文章
async function loadFeaturedArticles() {
    const articlesContainer = document.getElementById('featuredArticles');
    const articles = [
        {
            title: '量子计算入门指南：从经典计算到量子计算',
            author: '张三',
            readTime: '15分钟',
            tags: ['入门', '理论基础'],
            views: 12580,
            link: 'pages/articles/quantum-computing-guide.html'
        },
        {
            title: 'Shor算法详解：破解RSA加密的量子方法',
            author: '李四',
            readTime: '20分钟',
            tags: ['算法', '密码学'],
            views: 8920,
            link: 'pages/articles/shor-algorithm.html'
        },
        {
            title: '量子纠缠与量子隐形传态：探索量子通信基础',
            author: '王五',
            readTime: '18分钟',
            tags: ['量子通信', '物理原理'],
            views: 6730,
            link: 'pages/articles/quantum-entanglement.html'
        },
        {
            title: 'NISQ时代的量子算法优化策略',
            author: '赵六',
            readTime: '25分钟',
            tags: ['算法优化', '实用量子计算'],
            views: 5840,
            link: 'pages/articles/nisq-optimization.html'
        }
    ];

    articlesContainer.innerHTML = articles.map(article => `
        <div class="article-item">
            <h4>
                <a href="${article.link}" class="text-decoration-none">
                    ${article.title}
                </a>
            </h4>
            <div class="article-meta">
                <span><i class="ri-user-line"></i> ${article.author}</span>
                <span><i class="ri-time-line"></i> ${article.readTime}</span>
                <span><i class="ri-eye-line"></i> ${article.views}</span>
            </div>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// 加载近期活动
async function loadUpcomingEvents() {
    const eventsContainer = document.getElementById('upcomingEvents');
    const events = [
        {
            title: '量子计算线上研讨会：探索NISQ时代的机遇与挑战',
            date: {
                day: '25',
                month: '3月'
            },
            time: '14:00-16:00',
            type: '线上',
            speakers: ['张三 博士（量子计算研究所）', '李四 教授（清华大学）'],
            participants: 1280,
            link: '#'
        },
        {
            title: '量子算法实践工作坊',
            date: {
                day: '28',
                month: '3月'
            },
            time: '09:00-17:00',
            type: '线下',
            speakers: ['王五 教授（北京大学）', '赵六 博士（IBM量子）'],
            participants: 120,
            link: '#'
        },
        {
            title: '2024量子计算创新挑战赛',
            date: {
                day: '1',
                month: '4月'
            },
            time: '为期30天',
            type: '线上',
            speakers: ['评委组（多位业内专家）'],
            participants: 580,
            link: '#'
        }
    ];

    eventsContainer.innerHTML = events.map(event => `
        <div class="event-item">
            <div class="event-date">
                <div class="day">${event.date.day}</div>
                <div class="month">${event.date.month}</div>
            </div>
            <div class="event-content">
                <h4>${event.title}</h4>
                <div class="event-meta">
                    <span><i class="ri-time-line"></i> ${event.time}</span>
                    <span><i class="ri-${event.type === '线上' ? 'video-line' : 'map-pin-line'}"></i> ${event.type}</span>
                    <span><i class="ri-group-line"></i> ${event.participants}人报名</span>
                </div>
                <div class="speakers">
                    <small>主讲人：${event.speakers.join(' | ')}</small>
                </div>
            </div>
        </div>
    `).join('');
}

// 加载热门讨论
async function loadHotTopics() {
    const topicsContainer = document.getElementById('hotTopics');
    const topics = [
        {
            title: '如何评价最新的量子优越性实验？',
            author: '量子探索者',
            replies: 128,
            views: 3420,
            lastUpdate: '10分钟前',
            tags: ['学术讨论', '前沿进展'],
            link: 'pages/discussions/quantum-supremacy.html'
        },
        {
            title: '分享：我的量子编程学习路线图',
            author: '编程爱好者',
            replies: 89,
            views: 2150,
            lastUpdate: '2小时前',
            tags: ['经验分享', '学习路线'],
            link: 'pages/discussions/learning-path.html'
        },
        {
            title: 'Qiskit vs. Cirq：哪个更适合入门？',
            author: '新手求助',
            replies: 156,
            views: 4280,
            lastUpdate: '4小时前',
            tags: ['工具对比', '入门咨询'],
            link: 'pages/discussions/qiskit-vs-cirq.html'
        },
        {
            title: '量子机器学习在金融领域的应用前景',
            author: '量子金融',
            replies: 94,
            views: 2840,
            lastUpdate: '6小时前',
            tags: ['应用研究', '行业前景'],
            link: 'pages/discussions/quantum-ml-finance.html'
        }
    ];

    topicsContainer.innerHTML = topics.map(topic => `
        <div class="discussion-item">
            <h4>
                <a href="${topic.link}" class="text-decoration-none">
                    ${topic.title}
                </a>
            </h4>
            <div class="discussion-meta">
                <span><i class="ri-user-line"></i> ${topic.author}</span>
                <span><i class="ri-chat-1-line"></i> ${topic.replies}</span>
                <span><i class="ri-eye-line"></i> ${topic.views}</span>
                <span><i class="ri-time-line"></i> ${topic.lastUpdate}</span>
            </div>
            <div class="discussion-tags">
                ${topic.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// 显示错误信息
function showError(message) {
    const alert = document.createElement('div');
    alert.className = 'alert alert-danger alert-dismissible fade show';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.querySelector('main').prepend(alert);
}

function loadHotDiscussions() {
    const hotDiscussions = [
        {
            title: "如何评价最新的量子优越性实验？",
            author: "量子探索者",
            date: "2024-03-19",
            views: 5280,
            comments: 245,
            url: "pages/discussions/quantum-supremacy.html"
        },
        {
            title: "分享：我的量子编程学习路线图",
            author: "量子开发者",
            date: "2024-03-19",
            views: 4680,
            comments: 186,
            url: "pages/discussions/learning-path.html"
        },
        {
            title: "Qiskit vs. Cirq：哪个更适合入门？",
            author: "新手求助",
            date: "2024-03-19",
            views: 4280,
            comments: 156,
            url: "pages/discussions/qiskit-vs-cirq.html"
        },
        {
            title: "量子计算在金融领域的应用前景",
            author: "金融科技专家",
            date: "2024-03-19",
            views: 3850,
            comments: 128,
            url: "pages/discussions/quantum-finance-applications.html"
        }
    ];

    const discussionsList = document.querySelector('#hotDiscussions');
    if (!discussionsList) return;

    discussionsList.innerHTML = hotDiscussions.map(discussion => `
        <div class="discussion-item">
            <h3><a href="${discussion.url}">${discussion.title}</a></h3>
            <div class="discussion-meta">
                <span><i class="fas fa-user"></i> ${discussion.author}</span>
                <span><i class="fas fa-calendar"></i> ${discussion.date}</span>
                <span><i class="fas fa-eye"></i> ${discussion.views}次浏览</span>
                <span><i class="fas fa-comments"></i> ${discussion.comments}条评论</span>
            </div>
        </div>
    `).join('');
} 