// 案例JavaScript文件

const casesData = [
    {
        id: 1,
        title: "德国双元制职业教育现代化改革",
        category: "vocational",
        country: "德国",
        description: "企业深度参与、标准化培训条例、跨企业培训中心的模式创新，实现了学校与企业的无缝对接。",
        impact: "青年失业率降至5.2%，企业满意度达87%，毕业生就业率达到94%",
        tags: ["职业教育", "校企合作", "德国模式"],
        color: "blue",
        icon: "fas fa-industry",
        stats: {
            satisfaction: 87,
            employment: 94,
            skillMatch: 76
        }
    },
    {
        id: 2,
        title: "芬兰现象式学习（Phenomenon-based Learning）",
        category: "curriculum",
        country: "芬兰",
        description: "打破学科界限，以真实世界问题为核心组织课程内容，培养学生综合解决问题的能力。",
        impact: "学生问题解决能力提升35%，跨学科素养显著改善，创造力指数提高42%",
        tags: ["课程改革", "跨学科", "创新教学"],
        color: "purple",
        icon: "fas fa-lightbulb",
        stats: {
            satisfaction: 92,
            employment: 88,
            skillMatch: 85
        }
    },
    {
        id: 3,
        title: "新加坡技能创前程（SkillsFuture）计划",
        category: "policy",
        country: "新加坡",
        description: "全民终身学习体系，政府资助个人技能提升，建立技能认证与职业发展衔接机制。",
        impact: "成人参与率62%，技能提升认证覆盖率75%，就业匹配度提高28%",
        tags: ["终身学习", "政策创新", "技能认证"],
        color: "green",
        icon: "fas fa-landmark",
        stats: {
            satisfaction: 85,
            employment: 90,
            skillMatch: 82
        }
    },
    {
        id: 4,
        title: "加拿大体验式学习框架",
        category: "basic",
        country: "加拿大",
        description: "将工作体验融入基础教育，从幼儿园到高中阶段逐步引入职业探索与实践机会。",
        impact: "学生职业认知度提升56%，学习动机增强41%，辍学率降低23%",
        tags: ["基础教育", "职业探索", "实践学习"],
        color: "orange",
        icon: "fas fa-school",
        stats: {
            satisfaction: 88,
            employment: 86,
            skillMatch: 79
        }
    },
    {
        id: 5,
        title: "日本超级全球化高中计划",
        category: "curriculum",
        country: "日本",
        description: "培养全球化领导力的特色高中，全英文授课，强化国际交流与合作项目。",
        impact: "学生英语能力提升73%，国际升学率65%，跨文化能力显著增强",
        tags: ["全球化", "特色学校", "语言教学"],
        color: "red",
        icon: "fas fa-globe",
        stats: {
            satisfaction: 84,
            employment: 89,
            skillMatch: 81
        }
    },
    {
        id: 6,
        title: "澳大利亚职业教育与培训包体系",
        category: "vocational",
        country: "澳大利亚",
        description: "行业主导的能力标准开发，灵活的学习路径，全国统一的资格认证框架。",
        impact: "行业标准覆盖率95%，培训质量满意度88%，技能转化率72%",
        tags: ["职业标准", "灵活学习", "认证体系"],
        color: "blue",
        icon: "fas fa-certificate",
        stats: {
            satisfaction: 86,
            employment: 91,
            skillMatch: 78
        }
    },
    {
        id: 7,
        title: "荷兰个性化学习路径",
        category: "basic",
        country: "荷兰",
        description: "基于学生能力与兴趣的个性化课程设计，灵活的学习进度安排与导师制支持。",
        impact: "学生参与度提升47%，学习效率提高39%，个性化支持满意度92%",
        tags: ["个性化", "灵活学习", "导师制"],
        color: "orange",
        icon: "fas fa-user-graduate",
        stats: {
            satisfaction: 91,
            employment: 85,
            skillMatch: 83
        }
    },
    {
        id: 8,
        title: "韩国数字化转型教育战略",
        category: "digital",
        country: "韩国",
        description: "全面推动教育数字化，智慧校园建设，人工智能辅助教学，数字素养普及。",
        impact: "数字化教学覆盖率98%，教师数字素养提升65%，学生学习效率提高31%",
        tags: ["数字化", "人工智能", "智慧教育"],
        color: "cyan",
        icon: "fas fa-laptop-code",
        stats: {
            satisfaction: 83,
            employment: 87,
            skillMatch: 80
        }
    }
    // 新增国内案例 - 职业教育
    {
        id: 9,
        title: "浙江温州工学一体化技能人才培养",
        category: "vocational",
        country: "中国",
        description: "系统构建‘政企校研’协同的产教评生态链，创新‘校中厂’、‘厂中校’双轨模式，将企业真实项目融入教学全周期，破解学用脱节难题。",
        impact: "学生平均就业率达98.4%，为当地电气、鞋服等支柱产业输送逾10万名技能人才，高技能人才年新增超10万人。",
        tags: ["工学一体", "产教融合", "技能生态链"],
        color: "blue",
        icon: "fas fa-industry",
        stats: {
            satisfaction: 88,
            employment: 98,
            skillMatch: 90
        }
    },
    // 新增国内案例 - 基础教育
    {
        id: 10,
        title: "上海市义务教育小班化教学改革",
        category: "basic",
        country: "中国",
        description: "在中心城区部分学校打破‘插秧式’传统课堂布局，通过物理空间改造、分组围坐、分层教学和数字化评价体系，实现教师从‘课程实施者’到‘学生成长设计师’的角色转变。",
        impact: "试点学校课堂互动质量和学生参与度显著提升，相关成果被纳入《教育强国建设规划纲要》，形成可复制的‘上海经验’。",
        tags: ["小班化", "因材施教", "课堂改革"],
        color: "orange",
        icon: "fas fa-users",
        stats: {
            satisfaction: 90,
            employment: 0,
            skillMatch: 85
        }
    },
    // 新增国内案例 - 数字教育
    {
        id: 11,
        title: "湖北教育数字化生态重塑",
        category: "digital",
        country: "中国",
        description: "作为国家智慧教育平台整省试点，通过AI、VR、数字孪生等技术构建‘三维教育场’，为山区学生提供沉浸式学习体验，并利用平台数据实现个性化教学与优质资源跨区域共享。",
        impact: "全省中小学多媒体教学设备覆盖率100%，智慧教育平台用户活跃度位居全国前列，新技术转化教学内容时间缩短85%。",
        tags: ["人工智能", "数字孪生", "教育公平"],
        color: "cyan",
        icon: "fas fa-laptop-code",
        stats: {
            satisfaction: 86,
            employment: 89,
            skillMatch: 82
        }
    },
    // 新增国外案例 - 职业教育（瑞士）
    {
        id: 12,
        title: "瑞士职业教育和培训（VET）体系",
        category: "vocational",
        country: "瑞士",
        description: "全球公认的黄金标准，约三分之二的初中毕业生选择进入VET体系。采用‘双轨制’，学生在企业（承担大部分培训成本）当学徒，同时在职业学校学习理论知识，联邦政府确保全国标准统一。",
        impact: "青年失业率长期维持在5%以下的极低水平，确保了经济各领域拥有稳定、高素质的技能人才供应，企业参与度超过90%。",
        tags: ["双轨制", "企业主导", "全国标准"],
        color: "blue",
        icon: "fas fa-user-tie",
        stats: {
            satisfaction: 95,
            employment: 96,
            skillMatch: 93
        }
    },
    // 新增国外案例 - 课程与教学（美国）
    {
        id: 13,
        title: "美国High Tech High项目式学习网络",
        category: "curriculum",
        country: "美国",
        description: "起源于加州的一所特许学校，现已发展为学校网络。完全取消传统学科分隔，所有学习围绕跨学科、真实世界的长期项目展开，学生通过公开展示作品来完成学业评价。",
        impact: "项目学校的学生，尤其是来自低收入家庭的学生，在大学持续深造率和毕业率上显著高于地区平均水平，创造力与合作能力备受赞誉。",
        tags: ["项目式学习", "跨学科", "作品评价"],
        color: "purple",
        icon: "fas fa-project-diagram",
        stats: {
            satisfaction: 91,
            employment: 88,
            skillMatch: 87
        }
    },
    // 新增国外案例 - 教育政策（芬兰）
    {
        id: 14,
        title: "芬兰基于信任的教师专业自主模式",
        category: "policy",
        country: "芬兰",
        description: "国家仅提供宽松的课程框架，教师拥有极大的教学设计与教材选择自主权。其基础是经过严格筛选（仅录取10%申请者）和高质量硕士层次培养的教师队伍，社会赋予教师高度专业信任。",
        impact: "在PISA等国际评估中持续名列前茅，同时学生学习幸福感强、课时短，形成了‘高质量、低压力’的独特教育生态。",
        tags: ["教师自主", "专业信任", "高质量培养"],
        color: "green",
        icon: "fas fa-chalkboard-teacher",
        stats: {
            satisfaction: 96,
            employment: 92,
            skillMatch: 89
        }
    }

];

// 初始化案例展示
function initCases() {
    const casesContainer = document.getElementById('casesContainer');
    casesContainer.innerHTML = '';
    
    casesData.forEach((caseItem, index) => {
        const caseCard = createCaseCard(caseItem, index);
        casesContainer.appendChild(caseCard);
    });
    
    // 初始化动画
    animateCaseCards();
}

// 创建案例卡片
function createCaseCard(caseItem, index) {
    const card = document.createElement('div');
    card.className = `case-card glass animate-on-scroll`;
    card.setAttribute('data-animation', 'fade-up');
    card.setAttribute('data-delay', (index % 4) * 100);
    card.setAttribute('data-category', caseItem.category);
    
    // 卡片颜色类
    const colorClass = `card-color-${caseItem.color}`;
    
    card.innerHTML = `
        <div class="case-card-header">
            <div class="case-country">
                <i class="fas fa-map-marker-alt"></i>
                <span>${caseItem.country}</span>
            </div>
            <div class="case-category ${colorClass}">
                <i class="${caseItem.icon}"></i>
                <span>${getCategoryLabel(caseItem.category)}</span>
            </div>
        </div>
        
        <h3 class="case-title">${caseItem.title}</h3>
        
        <p class="case-description">${caseItem.description}</p>
        
        <div class="case-impact">
            <div class="impact-header">
                <i class="fas fa-chart-line"></i>
                <span>主要成效</span>
            </div>
            <p>${caseItem.impact}</p>
        </div>
        
        <div class="case-stats">
            <div class="case-stat">
                <div class="stat-circle small" data-value="${caseItem.stats.satisfaction}">
                    <svg viewBox="0 0 100 100">
                        <circle class="circle-bg" cx="50" cy="50" r="40"></circle>
                        <circle class="circle-progress-bar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <div class="circle-value">${caseItem.stats.satisfaction}%</div>
                </div>
                <div class="stat-label">满意度</div>
            </div>
            <div class="case-stat">
                <div class="stat-circle small" data-value="${caseItem.stats.employment}">
                    <svg viewBox="0 0 100 100">
                        <circle class="circle-bg" cx="50" cy="50" r="40"></circle>
                        <circle class="circle-progress-bar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <div class="circle-value">${caseItem.stats.employment}%</div>
                </div>
                <div class="stat-label">就业率</div>
            </div>
            <div class="case-stat">
                <div class="stat-circle small" data-value="${caseItem.stats.skillMatch}">
                    <svg viewBox="0 0 100 100">
                        <circle class="circle-bg" cx="50" cy="50" r="40"></circle>
                        <circle class="circle-progress-bar" cx="50" cy="50" r="40"></circle>
                    </svg>
                    <div class="circle-value">${caseItem.stats.skillMatch}%</div>
                </div>
                <div class="stat-label">技能匹配</div>
            </div>
        </div>
        
        <div class="case-tags">
            ${caseItem.tags.map(tag => `<span class="case-tag">${tag}</span>`).join('')}
        </div>
        
        <div class="case-actions">
            <button class="case-detail-btn" data-case-id="${caseItem.id}">
                <i class="fas fa-search"></i>
                <span>查看详情</span>
            </button>
            <button class="case-compare-btn" data-case-id="${caseItem.id}">
                <i class="fas fa-balance-scale"></i>
                <span>加入对比</span>
            </button>
        </div>
        
        <div class="card-glow"></div>
    `;
    
    // 添加事件监听器
    const detailBtn = card.querySelector('.case-detail-btn');
    const compareBtn = card.querySelector('.case-compare-btn');
    
    detailBtn.addEventListener('click', () => showCaseDetail(caseItem.id));
    compareBtn.addEventListener('click', () => addToComparison(caseItem.id));
    
    return card;
}

// 获取分类标签
function getCategoryLabel(category) {
    const labels = {
        'vocational': '职业教育',
        'basic': '基础教育',
        'curriculum': '课程改革',
        'policy': '政策创新',
        'digital': '数字转型'
    };
    return labels[category] || category;
}

// 筛选案例
function filterCases(category) {
    const caseCards = document.querySelectorAll('.case-card');
    const casesGrid = document.getElementById('casesContainer');
    
    // 添加筛选动画
    casesGrid.classList.add('filtering');
    
    setTimeout(() => {
        caseCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                card.classList.add('animate-zoom-in');
            } else {
                card.style.display = 'none';
            }
        });
        
        casesGrid.classList.remove('filtering');
    }, 300);
}

// 显示案例详情
function showCaseDetail(caseId) {
    const caseItem = casesData.find(c => c.id === caseId);
    if (!caseItem) return;
    
    // 创建模态框
    const modal = createCaseModal(caseItem);
    document.body.appendChild(modal);
    
    // 显示模态框
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // 添加关闭功能
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    // 点击外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
}

// 创建案例模态框
function createCaseModal(caseItem) {
    const modal = document.createElement('div');
    modal.className = 'case-modal';
    
    modal.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-container glass">
            <button class="modal-close">
                <i class="fas fa-times"></i>
            </button>
            
            <div class="modal-header">
                <div class="modal-country">
                    <i class="fas fa-flag"></i>
                    <span>${caseItem.country}</span>
                </div>
                <h2 class="modal-title">${caseItem.title}</h2>
                <div class="modal-category card-color-${caseItem.color}">
                    <i class="${caseItem.icon}"></i>
                    <span>${getCategoryLabel(caseItem.category)}</span>
                </div>
            </div>
            
            <div class="modal-content">
                <div class="modal-section">
                    <h3><i class="fas fa-info-circle"></i> 案例概述</h3>
                    <p>${caseItem.description}</p>
                </div>
                
                <div class="modal-section">
                    <h3><i class="fas fa-bullseye"></i> 核心特征</h3>
                    <ul class="modal-features">
                        <li><i class="fas fa-check"></i> 创新性的教学模式设计</li>
                        <li><i class="fas fa-check"></i> 多方利益相关者协同</li>
                        <li><i class="fas fa-check"></i> 完善的实施保障机制</li>
                        <li><i class="fas fa-check"></i> 科学的评估与改进体系</li>
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3><i class="fas fa-chart-bar"></i> 实施效果</h3>
                    <div class="modal-stats">
                        <div class="modal-stat">
                            <div class="stat-value">${caseItem.stats.satisfaction}%</div>
                            <div class="stat-label">企业/学生满意度</div>
                        </div>
                        <div class="modal-stat">
                            <div class="stat-value">${caseItem.stats.employment}%</div>
                            <div class="stat-label">毕业生就业率</div>
                        </div>
                        <div class="modal-stat">
                            <div class="stat-value">${caseItem.stats.skillMatch}%</div>
                            <div class="stat-label">技能岗位匹配度</div>
                        </div>
                    </div>
                    <p class="impact-text">${caseItem.impact}</p>
                </div>
                
                <div class="modal-section">
                    <h3><i class="fas fa-lightbulb"></i> 可借鉴经验</h3>
                    <div class="modal-insights">
                        <div class="insight">
                            <div class="insight-icon success">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div class="insight-content">
                                <h4>成功因素</h4>
                                <p>完善的制度设计、充分的资源投入、持续的质量监控</p>
                            </div>
                        </div>
                        <div class="insight">
                            <div class="insight-icon warning">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <div class="insight-content">
                                <h4>迁移挑战</h4>
                                <p>文化差异、制度障碍、资源约束、教师能力</p>
                            </div>
                        </div>
                        <div class="insight">
                            <div class="insight-icon info">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <div class="insight-content">
                                <h4>实施建议</h4>
                                <p>试点先行、本土化改造、渐进式推广、多方协同</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3><i class="fas fa-book"></i> 参考资料</h3>
                    <div class="modal-references">
                        <a href="#" class="reference-link">
                            <i class="fas fa-file-pdf"></i>
                            <span>完整案例研究报告</span>
                            <i class="fas fa-download"></i>
                        </a>
                        <a href="#" class="reference-link">
                            <i class="fas fa-external-link-alt"></i>
                            <span>官方政策文件</span>
                        </a>
                        <a href="#" class="reference-link">
                            <i class="fas fa-video"></i>
                            <span>实施案例视频</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="modal-btn primary">
                    <i class="fas fa-download"></i>
                    下载详细报告
                </button>
                <button class="modal-btn secondary">
                    <i class="fas fa-share-alt"></i>
                    分享案例
                </button>
            </div>
        </div>
    `;
    
    return modal;
}

// 添加到对比
function addToComparison(caseId) {
    const caseItem = casesData.find(c => c.id === caseId);
    if (!caseItem) return;
    
    // 获取当前对比列表
    let comparisonList = JSON.parse(localStorage.getItem('comparisonList') || '[]');
    
    // 检查是否已经添加
    if (comparisonList.includes(caseId)) {
        showNotification('此案例已在对比列表中', 'warning');
        return;
    }
    
    // 限制最多比较4个案例
    if (comparisonList.length >= 4) {
        showNotification('最多可以比较4个案例', 'warning');
        return;
    }
    
    // 添加到列表
    comparisonList.push(caseId);
    localStorage.setItem('comparisonList', JSON.stringify(comparisonList));
    
    // 显示成功通知
    showNotification('案例已添加到对比列表', 'success');
    
    // 更新对比按钮状态
    updateComparisonBadge();
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 关闭按钮事件
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // 自动关闭
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 3000);
}

// 获取通知图标
function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'warning': 'exclamation-triangle',
        'error': 'times-circle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// 更新对比徽章
function updateComparisonBadge() {
    const comparisonList = JSON.parse(localStorage.getItem('comparisonList') || '[]');
    let badge = document.querySelector('.comparison-badge');
    
    if (!badge) {
        // 创建徽章
        const navLink = document.querySelector('a[href="#comparison"]');
        if (navLink) {
            badge = document.createElement('div');
            badge.className = 'nav-badge comparison-badge';
            navLink.appendChild(badge);
        }
    }
    
    if (badge) {
        badge.textContent = comparisonList.length;
        if (comparisonList.length > 0) {
            badge.classList.add('active');
        } else {
            badge.classList.remove('active');
        }
    }
}

// 动画化案例卡片
function animateCaseCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const delay = card.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    card.classList.add('animated');
                    
                    // 动画化进度条
                    const progressCircles = card.querySelectorAll('.stat-circle');
                    progressCircles.forEach(circle => {
                        animateProgressCircle(circle);
                    });
                }, parseInt(delay));
                
                observer.unobserve(card);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.case-card').forEach(card => {
        observer.observe(card);
    });
}

// 动画化进度条
function animateProgressCircle(circle) {
    const value = parseInt(circle.getAttribute('data-value'));
    const progressBar = circle.querySelector('.circle-progress-bar');
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;
    
    progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
    progressBar.style.strokeDashoffset = circumference;
    
    setTimeout(() => {
        progressBar.style.transition = 'stroke-dashoffset 1s ease';
        progressBar.style.strokeDashoffset = offset;
    }, 300);
}

// 搜索案例
function searchCases(query) {
    const filteredCases = casesData.filter(caseItem => {
        const searchText = query.toLowerCase();
        return (
            caseItem.title.toLowerCase().includes(searchText) ||
            caseItem.description.toLowerCase().includes(searchText) ||
            caseItem.country.toLowerCase().includes(searchText) ||
            caseItem.tags.some(tag => tag.toLowerCase().includes(searchText))
        );
    });
    
    return filteredCases;
}

// 初始化案例比较
function initComparison() {
    const comparisonList = JSON.parse(localStorage.getItem('comparisonList') || '[]');
    if (comparisonList.length > 0) {
        // 显示比较页面
        showComparisonPage(comparisonList);
    }
}

// 显示比较页面
function showComparisonPage(caseIds) {
    const comparisonCases = casesData.filter(c => caseIds.includes(c.id));
    
    // 创建比较表格
    createComparisonTable(comparisonCases);
}

// 创建比较表格
function createComparisonTable(cases) {
    // 实现比较表格创建逻辑
    // ...
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initCases();
    updateComparisonBadge();
    
    // 添加案例搜索功能
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索案例...';
    searchInput.className = 'case-search glass';
    
    const searchContainer = document.querySelector('.cases-filter').parentNode;
    searchContainer.insertBefore(searchInput, searchContainer.firstChild);
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        if (query.length >= 2) {
            const results = searchCases(query);
            displaySearchResults(results);
        } else if (query.length === 0) {
            initCases();
        }
    });
});

// 显示搜索结果
function displaySearchResults(results) {
    const casesContainer = document.getElementById('casesContainer');
    casesContainer.innerHTML = '';
    
    if (results.length === 0) {
        casesContainer.innerHTML = `
            <div class="no-results glass">
                <i class="fas fa-search"></i>
                <h3>未找到相关案例</h3>
                <p>请尝试其他搜索关键词</p>
            </div>
        `;
        return;
    }
    
    results.forEach((caseItem, index) => {
        const caseCard = createCaseCard(caseItem, index);
        casesContainer.appendChild(caseCard);
    });
    
    animateCaseCards();
}

// 添加CSS样式到页面
function addCasesStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .case-card {
            padding: 1.5rem;
            border-radius: 16px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .case-card:hover {
            transform: translateY(-5px);
        }
        
        .case-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .case-country, .case-category {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem 0.75rem;
            border-radius: 50px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .case-country {
            background: rgba(255, 255, 255, 0.1);
        }
        
        .case-category {
            color: white;
        }
        
        .card-color-blue { background: var(--gradient-1); }
        .card-color-purple { background: var(--gradient-2); }
        .card-color-green { background: var(--gradient-4); }
        .card-color-orange { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); }
        .card-color-red { background: linear-gradient(135deg, #f87171 0%, #ef4444 100%); }
        .card-color-cyan { background: var(--gradient-3); }
        
        .case-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
            line-height: 1.4;
        }
        
        .case-description {
            font-size: 0.875rem;
            opacity: 0.8;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        
        .case-impact {
            background: rgba(255, 255, 255, 0.05);
            padding: 1rem;
            border-radius: 12px;
            margin-bottom: 1.5rem;
        }
        
        .impact-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }
        
        .case-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .case-stat {
            text-align: center;
        }
        
        .stat-circle.small {
            width: 70px;
            height: 70px;
            margin: 0 auto 0.5rem;
        }
        
        .stat-circle.small .circle-value {
            font-size: 0.875rem;
        }
        
        .stat-label {
            font-size: 0.75rem;
            opacity: 0.7;
        }
        
        .case-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }
        
        .case-tag {
            padding: 0.25rem 0.5rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            font-size: 0.75rem;
        }
        
        .case-actions {
            display: flex;
            gap: 0.5rem;
        }
        
        .case-detail-btn, .case-compare-btn {
            flex: 1;
            padding: 0.75rem;
            border: none;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: inherit;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .case-detail-btn:hover, .case-compare-btn:hover {
            background: var(--gradient-1);
            color: white;
            transform: scale(1.05);
        }
        
        .card-glow {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-1);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }
        
        .case-card:hover .card-glow {
            opacity: 0.1;
        }
        
        .case-search {
            width: 100%;
            padding: 1rem;
            border-radius: 12px;
            border: none;
            margin-bottom: 2rem;
            font-size: 1rem;
        }
        
        .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 3rem;
            border-radius: 16px;
        }
        
        .no-results i {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.5;
        }
        
        .no-results h3 {
            margin-bottom: 0.5rem;
        }
        
        .case-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .case-modal.show {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }
        
        .modal-container {
            position: relative;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            border-radius: 24px;
            padding: 2rem;
            animation: modalSlideIn 0.3s ease;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: rgba(255, 255, 255, 0.1);
            color: inherit;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .modal-country {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50px;
            margin-bottom: 1rem;
        }
        
        .modal-title {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        .modal-category {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            color: white;
            border-radius: 50px;
            font-weight: 500;
        }
        
        .modal-section {
            margin-bottom: 2rem;
        }
        
        .modal-section h3 {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
        }
        
        .modal-features {
            list-style: none;
        }
        
        .modal-features li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }
        
        .modal-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .modal-stat {
            text-align: center;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
        }
        
        .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }
        
        .stat-label {
            font-size: 0.875rem;
            opacity: 0.7;
        }
        
        .impact-text {
            font-size: 0.875rem;
            opacity: 0.8;
            line-height: 1.6;
        }
        
        .modal-insights {
            display: grid;
            gap: 1rem;
        }
        
        .insight {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
        }
        
        .insight-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .insight-icon.success {
            background: rgba(74, 222, 128, 0.2);
            color: #4ade80;
        }
        
        .insight-icon.warning {
            background: rgba(251, 191, 36, 0.2);
            color: #fbbf24;
        }
        
        .insight-icon.info {
            background: rgba(96, 165, 250, 0.2);
            color: #60a5fa;
        }
        
        .insight-content h4 {
            margin-bottom: 0.25rem;
        }
        
        .modal-references {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .reference-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
        }
        
        .reference-link:hover {
            background: rgba(255, 255, 255, 0.1);
        }
        
        .modal-footer {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .modal-btn {
            flex: 1;
            padding: 1rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .modal-btn.primary {
            background: var(--gradient-1);
            color: white;
        }
        
        .modal-btn.secondary {
            background: rgba(255, 255, 255, 0.1);
            color: inherit;
        }
        
        .notification {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            background: var(--light-card);
            color: var(--light-text);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .dark .notification {
            background: var(--dark-card);
            color: var(--dark-text);
        }
        
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification-close {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            opacity: 0.5;
        }
        
        .notification-success {
            border-left: 4px solid #4ade80;
        }
        
        .notification-warning {
            border-left: 4px solid #fbbf24;
        }
        
        .notification-error {
            border-left: 4px solid #f87171;
        }
        
        .notification-info {
            border-left: 4px solid #60a5fa;
        }
        
        .nav-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            width: 20px;
            height: 20px;
            background: var(--gradient-1);
            color: white;
            border-radius: 50%;
            font-size: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
        }
        
        .nav-badge.active {
            opacity: 1;
            transform: scale(1);
        }
    `;
    
    document.head.appendChild(style);
}

// 添加样式到页面
addCasesStyles();
