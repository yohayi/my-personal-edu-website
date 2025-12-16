// cases.js
const casesData = [
  {
    id: 1,
    title: "德国双元制职业教育现代化改革",
    category: "vocational",
    country: "德国",
    description: "企业深度参与、标准化培训条例、跨企业培训中心的模式创新",
    impact: "青年失业率降至5.2%，企业满意度达87%"
  },
  {
    id: 2,
    title: "芬兰现象式学习（Phenomenon-based Learning）",
    category: "curriculum",
    country: "芬兰",
    description: "打破学科界限，以真实世界问题为核心组织课程内容",
    impact: "学生问题解决能力提升35%，跨学科素养显著改善"
  },
  // 更多案例数据...
];

function renderCases(cases) {
  const container = document.getElementById('casesContainer');
  container.innerHTML = '';

  cases.forEach(caseItem => {
    const caseCard = document.createElement('div');
    caseCard.className = `case-card ${caseItem.category}`;
    caseCard.innerHTML = `
      <div class="case-card-header">
        <span class="case-country">${caseItem.country}</span>
        <span class="case-category">${caseItem.category}</span>
      </div>
      <h3 class="case-title">${caseItem.title}</h3>
      <p class="case-description">${caseItem.description}</p>
      <div class="case-impact">
        <strong>主要成效：</strong>${caseItem.impact}
      </div>
      <button class="case-detail-btn">查看详情</button>
    `;
    container.appendChild(caseCard);
  });
}

// 筛选案例
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 更新激活按钮
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    let filteredCases;
    if (category === 'all') {
      filteredCases = casesData;
    } else {
      filteredCases = casesData.filter(caseItem => caseItem.category === category);
    }

    renderCases(filteredCases);
  });
});

// 初始渲染
renderCases(casesData);

// 加载更多案例
const loadMoreBtn = document.getElementById('loadMoreCases');
loadMoreBtn.addEventListener('click', () => {
  // 模拟加载更多数据
  // 在实际应用中，这里应该是从服务器获取更多数据
  alert('加载更多案例功能需要连接数据库');
});
