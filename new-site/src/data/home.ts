export const experience = [
  {
    period: '2025.05 — 2025.08',
    organization: '安克创新',
    role: '人因研究实习生',
    summary: '围绕显示、佩戴、音频与商品信息体验开展研究，完成实验、消费者问卷、分析报告与评估规范。',
    projectIds: ['anker-brightness', 'anker-listing'],
  },
  {
    period: '2024.07 — 2024.09',
    organization: 'vivo',
    role: '人因工程师实习生',
    summary: '结合大规模行为数据与定性研究，支持折叠屏和机器人方向的体验分析与设计建议。',
    projectIds: ['vivo-foldable'],
  },
] as const;

export const education = [
  {
    period: '2025.09 — 2026.08',
    school: '威斯康星大学麦迪逊分校',
    degree: '理学硕士',
    detail: '工业工程｜GPA 3.9/4.0｜Top 10%｜美国，麦迪逊',
    ranking: '2026 U.S. News专业排名第6',
    logo: '/marks/uw-madison-crest.svg',
    logoAlt: '威斯康星大学麦迪逊分校 W Crest 校徽',
  },
  {
    period: '2023.09 — 2025.03',
    school: '华盛顿大学',
    degree: '理学硕士',
    detail: '工业工程｜GPA 3.9/4.0｜Top 10%｜美国，西雅图',
    ranking: '2026 U.S. News专业排名第24',
    logo: '/marks/uw-seattle-block-w.png',
    logoAlt: '华盛顿大学 Block W 标识',
    teaching: '2024.03 — 2024.12 担任助教，参与优化模型与用户界面设计课程的答疑、项目指导和教学协作。',
  },
  {
    period: '2019.09 — 2023.06',
    school: '浙江大学',
    degree: '理学学士',
    detail: '心理学｜GPA 3.9/4.0｜Top 5%｜中国，杭州',
    logo: '/marks/zhejiang-university.png',
    logoAlt: '浙江大学校标',
  },
] as const;

export const honors = [
  { title: 'Chancellor’s Opportunity Award' },
  { title: '浙江大学优秀毕业生' },
  { title: '学业优秀标兵（两次）' },
  { title: '优秀学生（两次）' },
  { title: '粤港澳大湾区高校青年社会创业项目大赛优秀奖' },
] as const;

export const skills = [
  {
    title: '研究与人因',
    description: '从问题与情境出发，设计能够支持判断的研究。',
    items: ['实验设计', '访谈与问卷', '可用性测试', '眼动与多模态评价'],
  },
  {
    title: '分析与转译',
    description: '将行为与体验证据整理成团队可使用的结论。',
    items: ['行为日志分析', '统计建模', '用户分层', '评估规范'],
  },
  {
    title: '产品与 AI',
    description: '界定功能边界、设计工作流并通过原型验证。',
    items: ['需求与流程拆解', '原型迭代', 'Prompt 设计', '人在回路评测'],
  },
] as const;
