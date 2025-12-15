// js/cases.js - 案例数据管理与渲染
const caseStudies = [
    {
        id: 'germany-dual',
        title: '德国双元制职业教育',
        category: 'vocational',
        country: '德国',
        icon: 'industry',
        color: '#1a56db',
        stats: [
            { value: '50万', label: '年学徒人数' },
            { value: '40万', label: '参与企业' },
            { value: '330+', label: '培训职业' }
        ],
        description: '法律化、标准化、行业深度参与的校企合作模式，实现职业教育与社会需求无缝对接。',
        link: 'cases/germany.html'
    },
    {
        id: 'finland-phenomenon',
        title: '芬兰现象教学',
        category: 'curriculum',
        country: '芬兰',
        icon: 'leaf',
        color: '#10b981',
        stats: [
            { value: '70%', label: '学校采用率' },
            { value: '200+', label: '教学主题' },
            { value: '85%', label: '教师支持率' }
        ],
        description: '以真实世界现象为主题，打破学科边界，培养学生跨学科解决问题能力。',
        link: 'cases/finland.html'
    },
    {
        id: 'singapore-tllm',
        title: '新加坡"少教多学"',
        category: 'policy',
        country: '新加坡',
        icon: 'balance-scale',
        color: '#f59e0b',
        stats: [
            { value: '-30%', label: '课程内容削减' },
            { value: '+25%', label: '探究学习时间' },
            { value: '95%', label: '学校实施率' }
        ],
        description: '系统性减轻学业负担，聚焦深度学习与21世纪核心能力培养。',
        link: 'cases/singapore.html'
    },
    {
        id: 'shanghai-pbl',
        title: '上海PBL探索',
        category: 'basic',
        country: '中国',
        icon: 'school',
        color: '#ef4444',
        stats: [
            { value: '50+', label: '参与学校' },
            { value: '200+', label: '实践项目' },
            { value: '92%', label: '学生满意度' }
        ],
        description: '本土化项目式学习实践，构建学校-家庭-社区协同育人生态。',
        link: 'cases/shanghai.html'
    },
    {
        id: 'japan-visa',
        title: '日本特定技能签证',
        category: 'vocational',
        country: '日本',
        icon: 'passport',
        color: '#7c3aed',
        stats: [
            { value: '14', label: '目标行业' },
            { value: '345,000', label: '五年目标' },
            { value: '80%', label: '考试通过率' }
        ],
        description: '通过移民政策驱动职业教育国际化，建立国际认可技能标准。',
        link: 'cases/japan.html'
    },
    {
        id: 'estonia-digital',
        title: '爱沙尼亚数字教育',
        category: 'policy',
        country: '爱沙尼亚',
        icon: 'laptop-code',
        color: '#3b82f6',
        stats: [
            { value: '99%', label: '学校联网率' },
            { value: '100%', label: '数字化学习材料' },
            { value: '89%', label: '教师数字能力' }
        ],
        description: '全面数字化教育生态系统，从基础设施到教学法的系统性转型。',
        link: 'cases/estonia.html'
    }
];

function renderCaseCards() {
    const container = document.getElementById('casesContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    caseStudies.forEach(caseStudy => {
        const card = document.createElement('div');
        card.className = 'case-card scroll-animate';
        card.setAttribute('data-category', caseStudy.category);
        
        card.innerHTML = `
            <div class="case-header">
                <div class="case-country">
                    <span class="country-flag">${getCountryFlag(caseStudy.country)}</span>
                    <span class="country-name">${caseStudy.country}</span>
                </div>
                <div class="case-category" style="background-color: ${caseStudy.color}20; color: ${caseStudy.color}">
                    ${getCategoryName(caseStudy.category)}
                </div>
            </div>
            
            <div class="case-icon" style="color: ${caseStudy.color}">
                <i class="fas fa-${caseStudy.icon}"></i>
            </div>
            
            <h3 class="case-title">${caseStudy.title}</h3>
            <p class="case-description">${caseStudy.description}</p>
            
            <div class="case-stats">
                ${caseStudy.stats.map(stat => `
                    <div class="case-stat">
                        <div class="case-stat-value">${stat.value}</div>
                        <div class="case-stat-label">${stat.label}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="case-actions">
                <a href="${caseStudy.link}" class="case-link">
                    查看完整案例 <i class="fas fa-arrow-right"></i>
                </a>
                <button class="case-compare" data-case="${caseStudy.id}">
                    <i class="fas fa-balance-scale"></i> 加入对比
                </button>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // 为对比按钮添加事件
    document.querySelectorAll('.case-compare').forEach(button => {
        button.addEventListener('click', function() {
            const caseId = this.getAttribute('data-case');
            addToComparison(caseId);
        });
    });
}

function getCountryFlag(country) {
    const flags = {
        '德国': '🇩🇪',
        '芬兰': '🇫🇮',
        '新加坡': '🇸🇬',
        '中国': '🇨🇳',
        '日本': '🇯🇵',
        '爱沙尼亚': '🇪🇪'
    };
    return flags[country] || '🌍';
}

function getCategoryName(category) {
    const names = {
        'vocational': '职业教育',
        'basic': '基础教育',
        'curriculum': '课程改革',
        'policy': '政策创新'
    };
    return names[category] || '其他';
}

function addToComparison(caseId) {
    const caseStudy = caseStudies.find(c => c.id === caseId);
    if (!caseStudy) return;
    
    // 显示提示信息
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>已将"${caseStudy.title}"加入对比分析</span>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动消失
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
    
    // 关闭按钮
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// 页面加载完成后渲染案例
document.addEventListener('DOMContentLoaded', function() {
    renderCaseCards();
});
