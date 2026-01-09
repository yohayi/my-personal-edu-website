// main.js - 主页面JavaScript功能

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    initPage();
});

// 页面初始化函数
function initPage() {
    // 显示加载提示
    document.getElementById('loader').classList.add('active');
    
    // 延迟加载案例，模拟网络请求
    setTimeout(() => {
        renderCases(casesData);
        updateCategoryCounts();
        document.getElementById('loader').classList.remove('active');
    }, 500);
    
    // 绑定筛选按钮事件
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterCases(filter);
            
            // 更新按钮状态
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 绑定搜索事件
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // 绑定模态框关闭事件
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('caseModal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });
}

// 渲染案例卡片
function renderCases(cases) {
    const casesGrid = document.getElementById('casesGrid');
    casesGrid.innerHTML = '';
    
    if (cases.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        updateCounts(0);
        return;
    }
    
    document.getElementById('noResults').style.display = 'none';
    
    // 分离政府合作案例和其他案例
    const governmentCases = cases.filter(caseItem => caseItem.isGovernment);
    const otherCases = cases.filter(caseItem => !caseItem.isGovernment);
    
    // 先渲染政府合作案例（置顶）
    governmentCases.forEach(caseItem => {
        const caseCard = createCaseCard(caseItem);
        caseCard.classList.add('government-highlight');
        casesGrid.appendChild(caseCard);
    });
    
    // 再渲染其他案例
    otherCases.forEach(caseItem => {
        const caseCard = createCaseCard(caseItem);
        casesGrid.appendChild(caseCard);
    });
    
    updateCounts(cases.length);
}

// 创建单个案例卡片
function createCaseCard(caseItem) {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.setAttribute('data-category', caseItem.category);
    card.setAttribute('data-id', caseItem.id);
    
    if (caseItem.isGovernment) {
        card.setAttribute('data-government', 'true');
    }
    
    // 获取分类显示名称
    const categoryNames = {
        'vocational': '职业教育',
        'basic': '基础教育',
        'curriculum': '课程改革',
        'policy': '政策创新',
        'digital': '数字转型',
        'government': '政府合作'
    };
    
    // 设置卡片颜色 - 政府合作案例使用特殊颜色
    let colorClass;
    if (caseItem.isGovernment) {
        colorClass = 'category-government';
    } else {
        colorClass = `category-${caseItem.category}`;
    }
    
    // 判断是否有独立页面
    let detailUrl = '#';
    let isExternalLink = false;
    
    if (caseItem.isGovernment) {
        // 政府合作案例链接到独立页面
        const cityName = getCityNameFromTitle(caseItem.title);
        detailUrl = `政府合作案例/${encodeURIComponent(cityName)}/index.html`;
        isExternalLink = true;
    }
    
    // 政府合作案例特殊标记
    const govBadge = caseItem.isGovernment ? 
        '<span style="display: inline-flex; align-items: center; gap: 4px; margin-left: 8px; color: #1a5fb4; font-size: 0.9rem; font-weight: 600;"><i class="fas fa-handshake"></i> 政府合作</span>' : '';
    
    card.innerHTML = `
        <div class="case-card-header">
            <div class="case-country">
                <i class="fas fa-map-marker-alt"></i>
                <span>${caseItem.country}</span>
                ${govBadge}
            </div>
            <div class="case-category ${colorClass}">
                <span>${categoryNames[caseItem.category] || caseItem.category}</span>
            </div>
        </div>
        <div class="case-content">
            <h3 class="case-title">${caseItem.title}</h3>
            <p class="case-description">${caseItem.description}</p>
            
            <div class="case-impact">
                <div class="impact-title">
                    <i class="fas fa-chart-line"></i>
                    <span>${caseItem.isGovernment ? '合作单位' : '主要成效'}</span>
                </div>
                <p>${caseItem.isGovernment ? (caseItem.cooperationUnit || '政府合作项目') : caseItem.impact}</p>
            </div>
            
            <div class="case-stats">
                <div class="stat-item">
                    <div class="stat-value">${caseItem.stats.satisfaction}%</div>
                    <div class="stat-label">满意度</div>
                </div>
                ${caseItem.stats.employment ? `
                <div class="stat-item">
                    <div class="stat-value">${caseItem.stats.employment}%</div>
                    <div class="stat-label">就业率</div>
                </div>
                ` : ''}
                <div class="stat-item">
                    <div class="stat-value">${caseItem.stats.skillMatch}%</div>
                    <div class="stat-label">技能匹配</div>
                </div>
            </div>
            
            <div class="case-tags">
                ${caseItem.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            
            <div class="case-actions">
                ${isExternalLink ? `
                <a href="${detailUrl}" class="detail-btn">
                    <i class="fas fa-external-link-alt"></i>
                    <span>查看详情</span>
                </a>
                ` : `
                <button class="detail-btn" data-id="${caseItem.id}">
                    <i class="fas fa-search"></i>
                    <span>查看详情</span>
                </button>
                `}
                
                ${caseItem.isGovernment ? `
                <a href="${detailUrl}#downloads" class="compare-btn">
                    <i class="fas fa-download"></i>
                    <span>下载文件</span>
                </a>
                ` : `
                <button class="compare-btn" data-id="${caseItem.id}">
                    <i class="fas fa-balance-scale"></i>
                    <span>加入对比</span>
                </button>
                `}
            </div>
        </div>
    `;
    
    // 绑定查看详情事件（非政府合作案例）
    if (!caseItem.isGovernment) {
        const detailBtn = card.querySelector('.detail-btn');
        if (detailBtn) {
            detailBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const caseId = parseInt(this.getAttribute('data-id'));
                showCaseDetail(caseId);
            });
        }
    }
    
    // 绑定加入对比事件（非政府合作案例）
    if (!caseItem.isGovernment) {
        const compareBtn = card.querySelector('.compare-btn');
        if (compareBtn) {
            compareBtn.addEventListener('click', function() {
                const caseId = parseInt(this.getAttribute('data-id'));
                addToComparison(caseId);
            });
        }
    }
    
    return card;
}

// 从标题中提取城市名
function getCityNameFromTitle(title) {
    const cityNames = {
        '全国九州': '教育部',
        '晋江市': '晋江市',
        '合肥市': '合肥市',
        '大理白族自治州': '大理白族自治州',
        '霍尔果斯市': '霍尔果斯市',
        '深圳市': '深圳市',
        '天津市': '天津市',
        '浙江省': '浙江省',
        '武汉市': '武汉市',
        '上海市': '上海市'
    };
    
    for (const [key, value] of Object.entries(cityNames)) {
        if (title.includes(key)) {
            return value;
        }
    }
    
    return '政府合作';
}

// 筛选案例
function filterCases(category) {
    let filteredCases;
    
    if (category === 'all') {
        filteredCases = casesData;
    } else if (category === 'government') {
        // 筛选政府合作案例
        filteredCases = casesData.filter(caseItem => caseItem.isGovernment);
    } else {
        // 筛选其他分类，排除政府合作案例
        filteredCases = casesData.filter(caseItem => 
            caseItem.category === category && !caseItem.isGovernment
        );
    }
    
    renderCases(filteredCases);
}

// 搜索案例
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        // 如果搜索框为空，显示当前筛选条件下的所有案例
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        filterCases(activeFilter);
        return;
    }
    
    // 获取当前筛选条件
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    
    // 根据当前筛选条件过滤
    let filteredCases;
    if (activeFilter === 'all') {
        filteredCases = casesData;
    } else if (activeFilter === 'government') {
        filteredCases = casesData.filter(caseItem => caseItem.isGovernment);
    } else {
        filteredCases = casesData.filter(caseItem => 
            caseItem.category === activeFilter && !caseItem.isGovernment
        );
    }
    
    // 在筛选结果中搜索
    const searchResults = filteredCases.filter(caseItem => {
        return caseItem.title.toLowerCase().includes(query) ||
               caseItem.description.toLowerCase().includes(query) ||
               caseItem.country.toLowerCase().includes(query) ||
               caseItem.tags.some(tag => tag.toLowerCase().includes(query)) ||
               (caseItem.cooperationUnit && caseItem.cooperationUnit.toLowerCase().includes(query));
    });
    
    renderCases(searchResults);
}

// 显示案例详情（非政府合作案例）
function showCaseDetail(caseId) {
    const caseItem = casesData.find(c => c.id === caseId);
    if (!caseItem) return;
    
    // 获取分类显示名称
    const categoryNames = {
        'vocational': '职业教育',
        'basic': '基础教育',
        'curriculum': '课程改革',
        'policy': '政策创新',
        'digital': '数字转型',
        'government': '政府合作'
    };
    
    // 设置分类颜色
    let colorClass;
    if (caseItem.isGovernment) {
        colorClass = 'category-government';
    } else {
        colorClass = `category-${caseItem.category}`;
    }
    
    // 更新模态框内容
    document.getElementById('modalTitle').textContent = caseItem.title;
    document.getElementById('modalCountry').textContent = caseItem.country;
    document.getElementById('modalCategory').className = `case-category ${colorClass}`;
    document.getElementById('modalCategoryText').textContent = categoryNames[caseItem.category] || caseItem.category;
    document.getElementById('modalDescription').textContent = caseItem.description;
    document.getElementById('modalImpact').textContent = caseItem.impact;
    document.getElementById('modalSatisfaction').textContent = `${caseItem.stats.satisfaction}%`;
    document.getElementById('modalEmployment').textContent = caseItem.stats.employment ? `${caseItem.stats.employment}%` : 'N/A';
    document.getElementById('modalSkillMatch').textContent = `${caseItem.stats.skillMatch}%`;
    
    // 更新标签
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    caseItem.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // 显示模态框
    document.getElementById('caseModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    document.getElementById('caseModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// 添加到对比
function addToComparison(caseId) {
    // 这里可以扩展对比功能
    const caseItem = casesData.find(c => c.id === caseId);
    if (!caseItem) return;
    
    // 简单提示
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-check-circle"></i>
            <span>已添加 "${caseItem.title}" 到对比列表</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后自动消失
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 更新分类计数
function updateCategoryCounts() {
    const categories = ['vocational', 'basic', 'curriculum', 'policy', 'digital'];
    
    categories.forEach(category => {
        // 排除政府合作案例
        const count = casesData.filter(caseItem => 
            caseItem.category === category && !caseItem.isGovernment
        ).length;
        document.getElementById(`count-${category}`).textContent = count;
    });
    
    // 更新政府合作计数
    const governmentCount = casesData.filter(caseItem => caseItem.isGovernment).length;
    document.getElementById('count-government').textContent = governmentCount;
    
    // 更新全部计数
    document.getElementById('count-all').textContent = casesData.length;
}

// 更新显示计数
function updateCounts(filteredCount) {
    document.getElementById('visible-count').textContent = casesData.length;
    document.getElementById('filtered-count').textContent = filteredCount;
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
