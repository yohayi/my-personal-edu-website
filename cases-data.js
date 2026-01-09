// cases-data.js - 案例数据文件
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
            },
            // 新增国内案例 - 职业教育
            {
                id: 9,
                title: "浙江温州工学一体化技能人才培养",
                category: "vocational",
                country: "中国",
                description: "系统构建'政企校研'协同的产教评生态链，创新'校中厂'、'厂中校'双轨模式，将企业真实项目融入教学全周期，破解学用脱节难题。",
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
                description: "在中心城区部分学校打破'插秧式'传统课堂布局，通过物理空间改造、分组围坐、分层教学和数字化评价体系，实现教师从'课程实施者'到'学生成长设计师'的角色转变。",
                impact: "试点学校课堂互动质量和学生参与度显著提升，相关成果被纳入《教育强国建设规划纲要》，形成可复制的'上海经验'。",
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
                description: "作为国家智慧教育平台整省试点，通过AI、VR、数字孪生等技术构建'三维教育场'，为山区学生提供沉浸式学习体验，并利用平台数据实现个性化教学与优质资源跨区域共享。",
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
                description: "全球公认的黄金标准，约三分之二的初中毕业生选择进入VET体系。采用'双轨制'，学生在企业（承担大部分培训成本）当学徒，同时在职业学校学习理论知识，联邦政府确保全国标准统一。",
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
                impact: "在PISA等国际评估中持续名列前茅，同时学生学习幸福感强、课时短，形成了'高质量、低压力'的独特教育生态。",
                tags: ["教师自主", "专业信任", "高质量培养"],
                color: "green",
                icon: "fas fa-chalkboard-teacher",
                stats: {
                    satisfaction: 96,
                    employment: 92,
                    skillMatch: 89
                }
            },
            // 更多案例 - 总计45个
            {
                id: 15,
                title: "英国学徒制改革与学位学徒计划",
                category: "vocational",
                country: "英国",
                description: "建立由雇主主导的学徒标准，引入学位学徒制，实现高等教育与职业教育的深度融合，学徒可获得学士甚至硕士学位。",
                impact: "学徒参与人数增长65%，雇主满意度达84%，学位学徒毕业生起薪比传统大学毕业生高15%",
                tags: ["学徒制", "学位学徒", "雇主主导"],
                color: "blue",
                icon: "fas fa-user-graduate",
                stats: {
                    satisfaction: 84,
                    employment: 93,
                    skillMatch: 88
                }
            },
            {
                id: 16,
                title: "丹麦终身学习账户制度",
                category: "policy",
                country: "丹麦",
                description: "为每位公民设立终身学习个人账户，政府与企业共同注资，个人可自主选择学习内容与时间，实现真正的终身学习。",
                impact: "成人参与终身学习比例达72%，技能更新周期缩短40%，劳动力市场适应性显著提升",
                tags: ["终身学习", "个人账户", "技能更新"],
                color: "green",
                icon: "fas fa-piggy-bank",
                stats: {
                    satisfaction: 89,
                    employment: 91,
                    skillMatch: 85
                }
            },
            {
                id: 17,
                title: "中国深圳职业教育产教融合试验区",
                category: "vocational",
                country: "中国",
                description: "在高新技术企业密集区设立职业教育改革试验区，实施'学校建在园区、专业对接产业、课程对接岗位'的深度产教融合模式。",
                impact: "毕业生本地就业率95%，平均起薪高于全省同类院校30%，为华为、腾讯等企业输送大批技能人才",
                tags: ["产教融合", "试验区", "高新技术"],
                color: "blue",
                icon: "fas fa-microchip",
                stats: {
                    satisfaction: 92,
                    employment: 95,
                    skillMatch: 91
                }
            },
            {
                id: 18,
                title: "以色列创新教育生态系统",
                category: "curriculum",
                country: "以色列",
                description: "从基础教育阶段引入创新思维与方法论教学，建立学校-企业-军方多元协同的创新人才培养体系。",
                impact: "每百万人口科技创业数量全球第一，青少年科技创新大赛获奖数连续多年位居世界前列",
                tags: ["创新思维", "生态系统", "创业教育"],
                color: "purple",
                icon: "fas fa-rocket",
                stats: {
                    satisfaction: 90,
                    employment: 87,
                    skillMatch: 83
                }
            },
            {
                id: 19,
                title: "新西兰土著文化融入基础教育",
                category: "basic",
                country: "新西兰",
                description: "将毛利文化、语言与传统知识系统融入国家课程体系，建立文化响应式教学框架，促进多元文化理解与尊重。",
                impact: "毛利学生学业完成率提升45%，文化认同感显著增强，跨文化理解能力测评优秀率78%",
                tags: ["文化响应", "土著教育", "多元文化"],
                color: "orange",
                icon: "fas fa-globe-asia",
                stats: {
                    satisfaction: 87,
                    employment: 82,
                    skillMatch: 80
                }
            },
            {
                id: 20,
                title: "爱沙尼亚数字公民教育",
                category: "digital",
                country: "爱沙尼亚",
                description: "从小学一年级开始系统实施数字素养教育，将编程思维、网络安全、数字伦理融入各学科，培养数字时代合格公民。",
                impact: "数字素养国际测评位居欧盟第一，99%的公共服务可在线完成，成为全球数字化程度最高的国家之一",
                tags: ["数字素养", "编程教育", "数字公民"],
                color: "cyan",
                icon: "fas fa-shield-alt",
                stats: {
                    satisfaction: 88,
                    employment: 90,
                    skillMatch: 87
                }
            },
            {
                id: 21,
                title: "法国高中教育改革与专业分科优化",
                category: "curriculum",
                country: "法国",
                description: "取消传统文理分科，引入跨学科教学模块，增加学生课程选择自主权，强化通用能力培养。",
                impact: "学生专业满意度提升40%，跨学科能力测评提升32%，高考改革平稳实施",
                tags: ["高中改革", "专业分科", "跨学科"],
                color: "purple",
                icon: "fas fa-university",
                stats: {
                    satisfaction: 82,
                    employment: 85,
                    skillMatch: 79
                }
            },
            {
                id: 22,
                title: "印度技能印度使命计划",
                category: "vocational",
                country: "印度",
                description: "通过公私合作模式大规模开展技能培训，建立行业驱动的技能标准与认证体系，重点面向青年与弱势群体。",
                impact: "累计培训超过1.2亿人，青年就业率提升22%，技能认证覆盖率从15%提升至65%",
                tags: ["技能培训", "公私合作", "大规模实施"],
                color: "blue",
                icon: "fas fa-hands-helping",
                stats: {
                    satisfaction: 79,
                    employment: 84,
                    skillMatch: 76
                }
            },
            {
                id: 23,
                title: "巴西基础教育质量监测与问责体系",
                category: "basic",
                country: "巴西",
                description: "建立全国统一的基础教育质量评估系统，公开学校绩效数据，实施基于证据的教育政策与资源分配。",
                impact: "基础教育质量十年间提升显著，区域教育差距缩小25%，家长择校信息透明度大幅提高",
                tags: ["质量监测", "问责制", "教育公平"],
                color: "orange",
                icon: "fas fa-chart-bar",
                stats: {
                    satisfaction: 81,
                    employment: 0,
                    skillMatch: 78
                }
            },
            {
                id: 24,
                title: "瑞典平等导向的教育政策",
                category: "policy",
                country: "瑞典",
                description: "通过资源倾斜、个性化支持、全纳教育等措施，系统性减少家庭背景对学生学业成就的影响。",
                impact: "教育基尼系数在OECD国家中最低，弱势家庭学生高等教育入学率接近全国平均水平",
                tags: ["教育平等", "全纳教育", "资源倾斜"],
                color: "green",
                icon: "fas fa-balance-scale",
                stats: {
                    satisfaction: 85,
                    employment: 88,
                    skillMatch: 82
                }
            },
            {
                id: 25,
                title: "阿联酋人工智能教育战略",
                category: "digital",
                country: "阿联酋",
                description: "在国家层面实施人工智能教育战略，将AI课程纳入K-12教育体系，培养面向未来的人工智能人才。",
                impact: "成为中东地区AI教育领先国家，学生AI素养测评优秀率62%，相关领域大学申请人数增长300%",
                tags: ["人工智能", "国家战略", "未来技能"],
                color: "cyan",
                icon: "fas fa-robot",
                stats: {
                    satisfaction: 86,
                    employment: 91,
                    skillMatch: 84
                }
            },
            {
                id: 26,
                title: "南非职业教育学院改革",
                category: "vocational",
                country: "南非",
                description: "重组职业教育学院体系，强化行业咨询委员会作用，引入工作本位学习模式，提高职业教育吸引力与质量。",
                impact: "职业学院毕业生就业率从35%提升至68%，企业参与职业教育比例增长120%",
                tags: ["学院改革", "工作本位", "行业参与"],
                color: "blue",
                icon: "fas fa-hard-hat",
                stats: {
                    satisfaction: 77,
                    employment: 68,
                    skillMatch: 72
                }
            },
            {
                id: 27,
                title: "墨西哥社区参与式学校管理",
                category: "basic",
                country: "墨西哥",
                description: "建立社区参与学校决策与管理的制度框架，家长与社区代表直接参与学校预算、人事与课程决策。",
                impact: "社区对学校满意度从45%提升至82%，学生辍学率下降30%，学校资源使用效率提高",
                tags: ["社区参与", "学校管理", "家长赋权"],
                color: "orange",
                icon: "fas fa-users",
                stats: {
                    satisfaction: 82,
                    employment: 0,
                    skillMatch: 75
                }
            },
            {
                id: 28,
                title: "爱尔兰语言复兴与教育融合",
                category: "curriculum",
                country: "爱尔兰",
                description: "通过沉浸式语言教育、文化融入课程、数字化学习资源等措施，系统性复兴爱尔兰语并增强文化认同。",
                impact: "能流利使用爱尔兰语的人口比例从10%提升至25%，语言学习兴趣显著增强",
                tags: ["语言复兴", "文化认同", "沉浸式教学"],
                color: "purple",
                icon: "fas fa-language",
                stats: {
                    satisfaction: 84,
                    employment: 83,
                    skillMatch: 80
                }
            },
            {
                id: 29,
                title: "智利教师职业发展阶梯体系",
                category: "policy",
                country: "智利",
                description: "建立基于绩效与专业发展的教师职业阶梯，将薪酬、职责与发展机会与专业成长阶段挂钩。",
                impact: "教师职业吸引力提升50%，优秀教师流失率下降35%，课堂教学质量显著改善",
                tags: ["教师发展", "职业阶梯", "绩效激励"],
                color: "green",
                icon: "fas fa-chalkboard-teacher",
                stats: {
                    satisfaction: 83,
                    employment: 0,
                    skillMatch: 81
                }
            },
            {
                id: 30,
                title: "马来西亚数字教育转型计划",
                category: "digital",
                country: "马来西亚",
                description: "全面升级学校数字基础设施，为教师提供数字教学能力培训，开发本土化数字学习资源与平台。",
                impact: "数字课堂覆盖率从40%提升至92%，教师数字教学能力达标率85%，偏远地区学生受益明显",
                tags: ["数字转型", "基础设施", "教师培训"],
                color: "cyan",
                icon: "fas fa-satellite-dish",
                stats: {
                    satisfaction: 84,
                    employment: 86,
                    skillMatch: 82
                }
            },
            {
                id: 31,
                title: "奥地利双元制高等教育",
                category: "vocational",
                country: "奥地利",
                description: "将双元制模式延伸至高等教育领域，应用科学大学与企业深度合作，培养高层次应用型人才。",
                impact: "双元制大学生毕业时已有平均2年工作经验，就业率98%，企业满意度91%",
                tags: ["双元制", "高等教育", "应用型人才"],
                color: "blue",
                icon: "fas fa-user-tie",
                stats: {
                    satisfaction: 91,
                    employment: 98,
                    skillMatch: 94
                }
            },
            {
                id: 32,
                title: "挪威户外教育国家课程",
                category: "basic",
                country: "挪威",
                description: "将户外教育正式纳入国家课程标准，规定各年级学生每年必须完成的户外学习时间与内容。",
                impact: "学生身心健康指标显著改善，环境意识与团队合作能力测评优秀率超过90%",
                tags: ["户外教育", "身心健康", "环境意识"],
                color: "orange",
                icon: "fas fa-tree",
                stats: {
                    satisfaction: 93,
                    employment: 0,
                    skillMatch: 85
                }
            },
            {
                id: 33,
                title: "泰国职业教育4.0改革",
                category: "vocational",
                country: "泰国",
                description: "对接国家4.0战略，改造传统职业教育专业，增设数字经济、机器人、生物技术等前沿领域课程。",
                impact: "新兴产业相关专业毕业生就业率达96%，起薪比传统专业高40%，企业定制培养订单增长300%",
                tags: ["工业4.0", "新兴产业", "专业改造"],
                color: "blue",
                icon: "fas fa-cogs",
                stats: {
                    satisfaction: 88,
                    employment: 96,
                    skillMatch: 90
                }
            },
            {
                id: 34,
                title: "葡萄牙学校自主权下放改革",
                category: "policy",
                country: "葡萄牙",
                description: "将课程安排、教师招聘、预算使用等权限下放至学校层面，增强学校应对本地需求的灵活性与创新性。",
                impact: "学校创新项目数量增长200%，家长与社区满意度提升40%，教育资源使用效率提高",
                tags: ["学校自主", "权限下放", "地方适应"],
                color: "green",
                icon: "fas fa-unlock",
                stats: {
                    satisfaction: 82,
                    employment: 0,
                    skillMatch: 79
                }
            },
            {
                id: 35,
                title: "越南农村地区教育数字化转型",
                category: "digital",
                country: "越南",
                description: "针对农村地区实施专项数字教育计划，提供设备补贴、网络接入、本地化数字内容与教师培训。",
                impact: "农村学校数字设备覆盖率从25%提升至85%，数字资源使用率增长400%，城乡数字教育差距缩小",
                tags: ["农村教育", "数字包容", "专项计划"],
                color: "cyan",
                icon: "fas fa-tractor",
                stats: {
                    satisfaction: 83,
                    employment: 81,
                    skillMatch: 78
                }
            },
            {
                id: 36,
                title: "波兰历史与公民教育改革",
                category: "curriculum",
                country: "波兰",
                description: "重新设计历史与公民教育课程，强化批判性思维、民主价值观与民族认同教育。",
                impact: "学生公民素养测评提升35%，历史理解深度显著改善，民主价值观认同度达88%",
                tags: ["公民教育", "历史教育", "批判性思维"],
                color: "purple",
                icon: "fas fa-monument",
                stats: {
                    satisfaction: 79,
                    employment: 0,
                    skillMatch: 76
                }
            },
            {
                id: 37,
                title: "阿根廷教师合作学习网络",
                category: "policy",
                country: "阿根廷",
                description: "建立全国性教师专业学习社群，鼓励跨校合作、经验分享与集体备课，减少教师专业孤立。",
                impact: "教师专业满意度提升45%，教学创新实践分享增长300%，新教师适应期缩短60%",
                tags: ["教师合作", "学习网络", "专业社群"],
                color: "green",
                icon: "fas fa-network-wired",
                stats: {
                    satisfaction: 87,
                    employment: 0,
                    skillMatch: 82
                }
            },
            {
                id: 38,
                title: "菲律宾K-12课程体系改革",
                category: "curriculum",
                country: "菲律宾",
                description: "将基础教育从10年延长至12年，新增两年高中教育，强化学术、技术与生活技能的平衡培养。",
                impact: "高中生毕业准备度提升50%，高等教育适应度改善40%，国际学历认可度大幅提高",
                tags: ["K-12", "课程延长", "技能平衡"],
                color: "purple",
                icon: "fas fa-layer-group",
                stats: {
                    satisfaction: 78,
                    employment: 82,
                    skillMatch: 80
                }
            },
            {
                id: 39,
                title: "肯尼亚移动学习创新项目",
                category: "digital",
                country: "肯尼亚",
                description: "利用移动电话普及率高的优势，开发短信、语音与轻量级App学习平台，为偏远地区学生提供学习支持。",
                impact: "偏远地区学生学业完成率提升30%，学习资源可及性改善80%，成本仅为传统数字方案的20%",
                tags: ["移动学习", "低成本", "普惠教育"],
                color: "cyan",
                icon: "fas fa-mobile-alt",
                stats: {
                    satisfaction: 85,
                    employment: 80,
                    skillMatch: 77
                }
            },
            {
                id: 40,
                title: "希腊职业教育国际化战略",
                category: "vocational",
                country: "希腊",
                description: "推动职业教育课程与欧盟资格框架对接，加强跨国企业合作，为学生提供欧盟内实习与就业机会。",
                impact: "职业教育毕业生欧盟内就业率从15%提升至45%，跨国企业合作项目增长200%",
                tags: ["国际化", "欧盟框架", "跨国就业"],
                color: "blue",
                icon: "fas fa-passport",
                stats: {
                    satisfaction: 82,
                    employment: 85,
                    skillMatch: 83
                }
            },
            {
                id: 41,
                title: "秘鲁原住民双语教育项目",
                category: "basic",
                country: "秘鲁",
                description: "为原住民学生提供西班牙语与母语的双语教育，开发文化响应式教材，培训双语教师。",
                impact: "原住民学生辍学率下降50%，学业成绩提升35%，文化认同与自尊心显著增强",
                tags: ["双语教育", "原住民", "文化响应"],
                color: "orange",
                icon: "fas fa-comments",
                stats: {
                    satisfaction: 86,
                    employment: 0,
                    skillMatch: 79
                }
            },
            {
                id: 42,
                title: "捷克技术教育振兴计划",
                category: "vocational",
                country: "捷克",
                description: "加大技术教育投入，更新实训设备，强化STEM课程，提升技术教育的社会地位与吸引力。",
                impact: "选择技术教育的学生比例从20%提升至35%，制造业技能缺口减少40%，企业参与度提高",
                tags: ["技术教育", "STEM", "设备更新"],
                color: "blue",
                icon: "fas fa-tools",
                stats: {
                    satisfaction: 84,
                    employment: 92,
                    skillMatch: 88
                }
            },
            {
                id: 43,
                title: "孟加拉国女子职业教育计划",
                category: "vocational",
                country: "孟加拉国",
                description: "针对女性提供安全、包容的职业培训环境，开设适合当地就业市场的技能课程，提供就业安置支持。",
                impact: "女性职业教育参与率提升300%，毕业生就业率达85%，女性经济赋权显著增强",
                tags: ["女性教育", "职业培训", "经济赋权"],
                color: "blue",
                icon: "fas fa-female",
                stats: {
                    satisfaction: 89,
                    employment: 85,
                    skillMatch: 82
                }
            },
            {
                id: 44,
                title: "乌拉圭全民数字素养计划",
                category: "digital",
                country: "乌拉圭",
                description: "为全国每位学生提供个人笔记本电脑，同时为教师、家长与社区成员提供数字技能培训。",
                impact: "数字设备覆盖率100%，全民数字素养显著提升，数字鸿沟大幅缩小",
                tags: ["全民计划", "数字鸿沟", "个人设备"],
                color: "cyan",
                icon: "fas fa-laptop",
                stats: {
                    satisfaction: 88,
                    employment: 86,
                    skillMatch: 84
                }
            },
            {
                id: 45,
                title: "罗马尼亚农村学校合并与优化",
                category: "policy",
                country: "罗马尼亚",
                description: "科学规划农村学校布局，合并规模过小学校，优化教育资源分配，提升农村教育质量。",
                impact: "农村学校生均经费提高60%，教师专业发展机会增加，学生学业成绩提升25%",
                tags: ["学校合并", "资源优化", "农村教育"],
                color: "green",
                icon: "fas fa-school",
                stats: {
                    satisfaction: 76,
                    employment: 0,
                    skillMatch: 74
                }
            },
    // 新增：9个地方政府合作案例
    {
        id: 46,
        title: "全国九州教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与中国教育部合作推动教育数字化转型，建立智慧教育评估体系，同时深度改革教育思想与主观能动性，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育","主观能动性"],
        color: "blue",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "中国教育部",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
     {
        id: 47,
        title: "晋江市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与晋江市教育局合作推动教育转型，建立智慧教育评估体系，构建” 品牌 + 产业 + 文化” 驱动的PBL 协同育人生态,促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "晋江市教育局",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
     {
        id: 48,
        title: "合肥市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与合肥市教育局合作推动教育数字化转型，构建科创型 PBL协同育人生态，建立智慧教育评估体系，打造” 科学-产业-教育” 三位一体的合肥范式，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "合肥市教育局",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
     {
        id: 49,
        title: "大理白族自治州教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与北京市教育局合作推动教育数字化转型，深化项目式学习（PBL）与社会资源对接的，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "大理白族自治州教育局",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
     {
        id: 50,
        title: "霍尔果斯市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与霍尔果斯市教育局合作推动教育数字化转型，深化项目式学习（PBL）与跨境资源对接的” 霍尔果斯模式” 建设，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "霍尔果斯市教育局",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
     {
        id: 51,
        title: "深圳市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "与深圳市教育局合作推动教育数字化转型，深化“每周半天”校外教育计划，构建“政企社校协同 PBL2.0 模式，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "深圳市教育局",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
     {
        id: 52,
        title: "天津市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "构建“港产教融合 PBL 模式”的合作建议，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "天津市教育局",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
     {
        id: 53,
        title: "浙江省教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "构建” 数字驱动、产教共富的PBL 协同育人生态，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "浙江省教育局",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
     {
        id: 54,
        title: "武汉市教育改革深度合作项目",
        category: "policy",
        country: "中国",
        description: "深化” 社会实践基地” 教育计划，建立智慧教育评估体系，促进区域教育优质均衡发展。",
        impact: "建成智慧教育示范校50所，教师数字素养提升65%，区域教育质量评估体系全面升级",
        tags: ["政府合作", "教育数字化", "智慧教育"],
        color: "green",
        icon: "fas fa-handshake",
        stats: {
            satisfaction: 95,
            employment: 0,
            skillMatch: 92
        },
        cooperationUnit: "武汉市教育局",
        projectPeriod: "2023.09-2026.12",
        isGovernment: true
    },
    {
        id: 55,
        title: "上海市基础教育创新实践",
        category: "basic",
        country: "中国",
        description: "合作开展小班化教学改革试点，构建都市型 PBL 协同育人生态，建立个性化学习支持系统，推动基础教育高质量发展，打造” 教育-产业-社区-文化” 四位一体的上海范式",
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
        projectPeriod: "2023.10-2026.12",
        isGovernment: true
    },
];
