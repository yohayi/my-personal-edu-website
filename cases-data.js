// cases-data.js - 独立的案例数据文件
const allCasesData = [
    // 原来那45个案例数据（从你主页面的第141-1411行复制过来）
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
    // ... 其他所有案例数据（第3到45个案例）
    
    // 新增：9个地方政府合作案例
    {
        id: 46,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
     {
        id: 47,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
     {
        id: 48,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
     {
        id: 49,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
     {
        id: 50,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
     {
        id: 51,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
     {
        id: 52,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
     {
        id: 53,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
     {
        id: 54,
        title: "北京市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "北京市教育局",
        projectPeriod: "2023.09-2024.12",
        isGovernment: true
    },
    {
        id: 55,
        title: "上海市基础教育创新实践",
        category: "basic",
        country: "中国",
        description: "合作开展小班化教学改革试点，建立个性化学习支持系统，推动基础教育高质量发展。",
        impact: "试点学校课堂互动质量提升40%，学生个性化学习方案覆盖率100%，形成可推广的'上海经验'",
        tags: ["政府合作", "小班化教学", "个性化学习"],
        color: "orange",
        icon: "fas fa-school",
        stats: {
            satisfaction: 93,
            employment: 0,
            skillMatch: 90
        },
        cooperationUnit: "上海市教委",
        projectPeriod: "2023.10-2024.06",
        isGovernment: true
    },
];
