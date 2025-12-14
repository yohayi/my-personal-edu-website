// 1. 重要：只需在这里添加新案例，无需改HTML
const CASES = [
  {
    id: "germany",
    flag: "🇩🇪",
    title: "德国双元制",
    description: "企业深度参与培训，70%学生通过双元制直接进入职场",
    stats: ["企业参与率: 92%", "学生就业率: 89%"],
    tag: "职业教育标杆",
    icon: "✨"
  },
  {
    id: "japan",
    flag: "🇯🇵",
    title: "日本课后学习",
    description: "学校-企业-社区三方联动，课后学习与产业需求对接",
    stats: ["社区参与率: 75%", "项目转化率: 62%"],
    tag: "社区教育典范",
    icon: "📚"
  },
  {
    id: "singapore",
    flag: "🇸🇬",
    title: "新加坡PBL教育",
    description: "政府主导PBL，学生创新项目对接产业需求",
    stats: ["产业合作率: 78%", "创新孵化率: 45%"],
    tag: "亚洲典范",
    icon: "🚀"
  },
  {
    id: "shenzhen",
    flag: "🇨🇳",
    title: "深圳PBL实践",
    description: "2023年覆盖200+所学校，学生项目完成率85%",
    stats: ["跨学科项目: 120+", "企业合作: 65家"],
    tag: "国内先行者",
    icon: "💡"
  }
];

// 2. 自动渲染案例卡片
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('case-grid');
  
  CASES.forEach(caseItem => {
    const card = document.createElement('div');
    card.className = 'case-card';
    card.innerHTML = `
      <div class="card-header">
        <div class="country-flag">${caseItem.flag}</div>
        <h2>${caseItem.title}</h2>
      </div>
      <div class="card-content">
        <p>${caseItem.description}</p>
        <div class="card-stats">
          ${caseItem.stats.map(stat => `<span>${stat}</span>`).join('')}
        </div>
      </div>
      <div class="card-footer">
        <div class="card-tag">${caseItem.tag}</div>
        <div class="card-icon">${caseItem.icon}</div>
      </div>
    `;
    grid.appendChild(card);
  });
});
