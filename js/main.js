
// js/main.js - 主交互脚本
document.addEventListener('DOMContentLoaded', function() {
    console.log('全球教育创新案例研究中心页面已加载');
    
    // 1. 导航栏滚动效果
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scroll');
        } else {
            nav.classList.remove('nav-scroll');
        }
    });
    
    // 2. 平滑滚动导航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    // 更新导航激活状态
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // 平滑滚动到目标
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 3. 滚动时更新导航激活状态
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // 4. 数字动画计数
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    function animateNumber(element, target) {
        const duration = 2000;
        const startTime = Date.now();
        const startValue = 0;
        
        function update() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // 缓动函数
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
            
            element.textContent = currentValue.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        }
        
        update();
    }
    
    // 观察数字元素，进入视口时开始动画
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-count'));
                animateNumber(element, target);
                numberObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(number => {
        numberObserver.observe(number);
    });
    
    // 5. 主题切换
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // 检查本地存储的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    // 6. 滚动触发动画
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    scrollElements.forEach(element => {
        elementObserver.observe(element);
    });
    
    // 7. 案例筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const caseCards = document.querySelectorAll('.case-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 筛选案例
            caseCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 10);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('visible');
                }
            });
        });
    });
    
    // 8. 标签页切换
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // 更新按钮状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // 切换内容
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // 9. 加载更多案例
    const loadMoreBtn = document.getElementById('loadMoreCases');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // 模拟加载更多案例
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 加载中...';
            this.disabled = true;
            
            setTimeout(() => {
                // 在实际应用中，这里会从服务器加载更多数据
                this.innerHTML = '<i class="fas fa-check"></i> 已加载全部案例';
                this.style.backgroundColor = 'var(--success-color)';
                this.style.borderColor = 'var(--success-color)';
            }, 1500);
        });
    }
    
    // 10. 访问量统计（模拟）
    const visitCountElement = document.getElementById('visitCount');
    if (visitCountElement) {
        // 模拟从服务器获取访问量
        const baseCount = 1428;
        const randomIncrement = Math.floor(Math.random() * 20);
        visitCountElement.textContent = (baseCount + randomIncrement).toLocaleString();
    }
    
    // 11. 数据控制交互
    const regionSelect = document.getElementById('regionSelect');
    const indicatorSelect = document.getElementById('indicatorSelect');
    
    if (regionSelect && indicatorSelect) {
        function updateCharts() {
            const region = regionSelect.value;
            const indicator = indicatorSelect.value;
            
            console.log(`更新图表: 地区=${region}, 指标=${indicator}`);
            // 这里会调用charts.js中的函数来更新图表
            if (typeof updateChartData === 'function') {
                updateChartData(region, indicator);
            }
        }
        
        regionSelect.addEventListener('change', updateCharts);
        indicatorSelect.addEventListener('change', updateCharts);
    }
    
    // 12. 页面加载完成动画
    setTimeout(() => {
        document.body.classList.add('page-load');
    }, 100);
});
