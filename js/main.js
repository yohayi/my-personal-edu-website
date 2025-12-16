// 主JavaScript文件

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 主题切换功能
    const themeToggle = document.getElementById('themeToggle');
    const themeText = themeToggle.querySelector('.theme-text');
    const themeIcon = themeToggle.querySelector('i');
    
    // 检查本地存储的主题偏好
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        // 添加点击动画
        this.classList.add('animate-pulse');
        setTimeout(() => {
            this.classList.remove('animate-pulse');
        }, 300);
    });
    
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = '亮色模式';
        } else {
            document.body.classList.remove('dark');
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = '暗色模式';
        }
    }
    
    // 导航栏滚动效果
    const mainNav = document.querySelector('.main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            mainNav.classList.add('scrolled');
            if (scrollTop > lastScrollTop) {
                mainNav.style.transform = 'translateY(-100%)';
            } else {
                mainNav.style.transform = 'translateY(0)';
            }
        } else {
            mainNav.classList.remove('scrolled');
            mainNav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 更新导航链接状态
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // 更新活动导航链接
    function updateActiveNavLink(targetId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }
    
    // 滚动时更新导航链接状态
    const sections = document.querySelectorAll('section');
    
    function onScroll() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                updateActiveNavLink('#' + sectionId);
            }
        });
        
        // 显示/隐藏返回顶部按钮
        const backToTop = document.getElementById('backToTop');
        if (scrollPosition > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', onScroll);
    
    // 返回顶部功能
    const backToTop = document.getElementById('backToTop');
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 数字计数器动画
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2秒
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    stat.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, 16);
        });
    }
    
    // 观察器用于动画触发器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // 如果是统计数字，开始计数
                if (entry.target.classList.contains('stat-card')) {
                    setTimeout(animateCounters, 300);
                }
            }
        });
    }, observerOptions);
    
    // 观察所有动画元素
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // 移动端菜单切换
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        this.classList.toggle('active');
        
        // 切换图标
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // 点击外部关闭菜单
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
            navToggle.querySelector('i').className = 'fas fa-bars';
        }
    });
    
    // 数据控制功能
    const regionSelect = document.getElementById('regionSelect');
    const indicatorSelect = document.getElementById('indicatorSelect');
    const resetControls = document.getElementById('resetControls');
    
    regionSelect.addEventListener('change', updateCharts);
    indicatorSelect.addEventListener('change', updateCharts);
    
    resetControls.addEventListener('click', function() {
        regionSelect.value = 'global';
        indicatorSelect.value = 'graduation';
        updateCharts();
        
        // 添加重置动画
        this.classList.add('animate-spin');
        setTimeout(() => {
            this.classList.remove('animate-spin');
        }, 300);
    });
    
    function updateCharts() {
        // 这里会调用charts.js中的更新函数
        console.log('更新图表数据:', {
            region: regionSelect.value,
            indicator: indicatorSelect.value
        });
        
        // 添加图表更新动画
        document.querySelectorAll('.chart-card').forEach(card => {
            card.classList.add('animate-pulse');
            setTimeout(() => {
                card.classList.remove('animate-pulse');
            }, 300);
        });
    }
    
    // 案例筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const casesContainer = document.getElementById('casesContainer');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新活动按钮
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterCases(category);
        });
    });
    
    function filterCases(category) {
        // 这里会调用cases.js中的过滤函数
        console.log('筛选案例:', category);
        
        // 添加筛选动画
        casesContainer.classList.add('animate-pulse');
        setTimeout(() => {
            casesContainer.classList.remove('animate-pulse');
        }, 300);
    }
    
    // 加载更多案例
    const loadMoreBtn = document.getElementById('loadMoreCases');
    let currentPage = 1;
    
    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        loadMoreCases(currentPage);
        
        // 添加加载动画
        const icon = this.querySelector('i');
        const originalClass = icon.className;
        icon.className = 'fas fa-spinner fa-spin';
        
        setTimeout(() => {
            icon.className = originalClass;
        }, 1000);
    });
    
    function loadMoreCases(page) {
        // 这里会调用cases.js中的加载更多函数
        console.log('加载第', page, '页案例');
    }
    
    // 标签页切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 更新活动标签
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应内容
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId + '-tab') {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // 卡片悬停效果
    const cards = document.querySelectorAll('.card-hover');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 页面加载动画
    function initPageLoad() {
        // 添加页面加载完成类
        document.body.classList.add('loaded');
        
        // 初始化计数器
        setTimeout(animateCounters, 500);
    }
    
    // 页面加载完成后初始化
    window.addEventListener('load', initPageLoad);
    
    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // Ctrl + T 切换主题
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            themeToggle.click();
        }
        
        // ESC 关闭菜单
        if (e.key === 'Escape') {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
            navToggle.querySelector('i').className = 'fas fa-bars';
        }
    });
    
    // 访问量计数器
    function updateVisitCount() {
        const visitCount = document.getElementById('visitCount');
        let count = parseInt(localStorage.getItem('visitCount') || '1428');
        count++;
        localStorage.setItem('visitCount', count.toString());
        visitCount.textContent = count.toLocaleString();
    }
    
    // 检查是否是首次访问
    if (!localStorage.getItem('firstVisit')) {
        localStorage.setItem('firstVisit', new Date().toISOString());
        updateVisitCount();
    }
    
    // 初始化工具提示
    initTooltips();
    
    function initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                const tooltipText = this.getAttribute('data-tooltip');
                showTooltip(this, tooltipText);
            });
            
            el.addEventListener('mouseleave', function() {
                hideTooltip();
            });
        });
    }
    
    function showTooltip(element, text) {
        // 实现工具提示显示逻辑
        // ...
    }
    
    function hideTooltip() {
        // 实现工具提示隐藏逻辑
        // ...
    }
});
