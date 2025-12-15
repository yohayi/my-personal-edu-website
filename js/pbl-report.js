// js/pbl-report.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('深圳PBL2.0报告页面加载完毕');

    // 1. 动态时间轴导航交互
    const timelineItems = document.querySelectorAll('.timeline-item');
    const sections = document.querySelectorAll('.report-section');

    function updateTimeline() {
        let currentIndex = 0;
        const scrollPos = window.scrollY + 100;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentIndex = index;
            }
        });

        timelineItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateTimeline);

    // 2. 数字动画（统计数据）
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        stat.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current).toLocaleString();
                    }
                }, 16);
                observer.unobserve(stat);
            }
        }, { threshold: 0.5 });
        observer.observe(stat);
    });

    // 3. 案例标签页切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // 切换内容
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // 4. 初始化图表（如果存在）
    if (typeof Chart !== 'undefined') {
        initCharts();
    }

    // 5. 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// 图表初始化函数
function initCharts() {
    const ctx1 = document.getElementById('chartGraduateTrend')?.getContext('2d');
    const ctx2 = document.getElementById('chartInvestment')?.getContext('2d');

    if (ctx1) {
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: '普通高校',
                    data: [45.2, 46.5, 47.1, 47.8, 48.3],
                    borderColor: '#1a56db',
                    tension: 0.4
                }, {
                    label: '职业院校',
                    data: [38.7, 37.9, 37.2, 36.5, 35.9],
                    borderColor: '#f59e0b',
                    tension: 0.4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
    // ... 可初始化更多图表
}
