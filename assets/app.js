const content = {
  zh: {
    nav: {
      name: '魏艳 / Yan Wei',
      role: 'AI Systems · Intelligent Education',
      focus: '方向',
      work: '项目',
      capability: '能力',
      notes: '侧面',
      contact: '联系',
      lang: 'EN',
    },
    hero: {
      eyebrow: 'Personal Homepage',
      title: '我是魏艳，我在做可信 AI 系统与智能教育应用。',
      lede:
        '我目前学习软件工程，也在把 RAG、LLM 评估、智能体工具调用和真实场景系统结合起来。这个主页不是一份压缩简历，而是我向你介绍自己的入口：我关心什么、做过什么、正在怎样成长。',
      primary: '看我做过什么',
      name: '魏艳 / Yan Wei',
      role: '西南大学 · 软件工程本科',
    },
    focus: {
      eyebrow: 'Focus',
      title: '我把兴趣放在“可用、可信、可解释”的 AI 应用上。',
      lede: '我喜欢从一个真实问题出发，再追问系统如何组织知识、如何调用工具、如何被评估，以及最终是否真的帮助到人。',
    },
    work: {
      eyebrow: 'Selected Work',
      title: '项目不是仓库清单，而是我理解问题的路径。',
      lede: '我保留了最能说明研究兴趣、系统能力和应用意识的项目。每个项目都尽量写清楚问题、我的工作和可核对的结果。',
    },
    capability: {
      eyebrow: 'Capability',
      title: '我希望自己既能提出问题，也能把系统做出来。',
      lede:
        '对高校，我希望展现研究潜力和问题意识；对企业，我希望展现工程落地、协作与持续学习能力。它们在我的项目里是连在一起的。',
    },
    notes: {
      eyebrow: 'Notes',
      title: '除了技术，我也想让你看到我如何看待问题。',
      lede: '同领域的人认识彼此，不只靠项目名称。这里放一些更接近我的观察、偏好和工作习惯。',
    },
    evidence: {
      eyebrow: 'Milestones',
      title: '一些可以快速核对的节点。',
    },
    contact: {
      eyebrow: 'Contact',
      title: '如果你想聊可信 AI、智能教育、应用原型，或者只是想认识一下我，欢迎联系。',
    },
    footer: {
      built: '一个双语个人主页，不是简历模板；我会继续更新它。',
      back: '回到顶部',
    },
  },
  en: {
    nav: {
      name: 'Yan Wei / 魏艳',
      role: 'AI Systems · Intelligent Education',
      focus: 'Focus',
      work: 'Work',
      capability: 'Strengths',
      notes: 'Notes',
      contact: 'Contact',
      lang: '中',
    },
    hero: {
      eyebrow: 'Personal Homepage',
      title: 'I am Yan Wei, and I build trustworthy AI systems for real learning scenarios.',
      lede:
        'I study software engineering and work at the intersection of RAG, LLM evaluation, agentic tool use, and applied systems. This site is not a compressed CV. It is where I introduce what I care about, what I have built, and how I am growing.',
      primary: 'View my work',
      name: 'Yan Wei / 魏艳',
      role: 'Software Engineering · Southwest University',
    },
    focus: {
      eyebrow: 'Focus',
      title: 'I am drawn to AI applications that are useful, trustworthy, and explainable.',
      lede:
        'I usually start from a concrete problem, then ask how knowledge should be organized, how tools should be invoked, how the system can be evaluated, and whether it actually helps people.',
    },
    work: {
      eyebrow: 'Selected Work',
      title: 'My projects are not a repository list. They show how I approach problems.',
      lede:
        'I selected projects that best reflect my research interests, system-building ability, and product awareness. Each one is described through the problem, my role, and a checkable outcome.',
    },
    capability: {
      eyebrow: 'Capability',
      title: 'I want to be able to ask good questions and build working systems.',
      lede:
        'For academic audiences, I want to show research potential and problem formulation. For industry audiences, I want to show engineering execution, collaboration, and fast learning. In my work, these are connected.',
    },
    notes: {
      eyebrow: 'Notes',
      title: 'Beyond technical labels, I want you to see how I look at problems.',
      lede:
        'People in the same field get to know each other through more than project names. This section keeps a few observations, preferences, and working habits that feel closer to me.',
    },
    evidence: {
      eyebrow: 'Milestones',
      title: 'A few quick, checkable markers.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'If you want to talk about trustworthy AI, intelligent education, prototypes in real settings, or simply get to know me, feel free to reach out.',
    },
    footer: {
      built: 'Built as a bilingual personal homepage, not a resume template. I will keep updating it.',
      back: 'Back to top',
    },
  },
};

const data = {
  zh: {
    brief: [
      ['现在', '软件工程本科生，关注可信大模型系统与智能教育。'],
      ['关键词', 'RAG、LLM 评估、MCP、智能体工具调用、应用工程。'],
      ['我在寻找', '能把真实需求、研究问题和可运行系统放在一起的机会。'],
    ],
    overview: [
      ['研究兴趣', '我关注大模型系统如何被评估、解释和约束，尤其是在智能教育场景中。'],
      ['工程实践', '我做过前后端系统、RAG 应用、数字人交互、多模态识别和智能体流程。'],
      ['协作方式', '我习惯把问题拆成定义、流程、接口、实验和可交付结果。'],
      ['个人侧面', '我喜欢有真实对象的技术：学习者、照护者、游客、需要辅助的人。'],
    ],
    focus: [
      {
        title: '可信 AI 系统',
        body: '我关心系统是否能说明依据、暴露不确定性、控制工具边界，并在真实使用中稳定工作。',
      },
      {
        title: '智能教育与学习评估',
        body: '我希望 AI 不只是“给答案”，还能够帮助理解学习过程、题目质量、认知层级和反馈机制。',
      },
      {
        title: 'RAG 与工具调用',
        body: '我对知识组织、检索增强、MCP 交互和智能体流程感兴趣，因为它们决定模型能否接入真实任务。',
      },
    ],
    work: [
      {
        name: 'BEACON',
        label: 'Research · LLM Evaluation',
        problem: '我想回答的问题是：一道题是否真正测到了预期认知层级？',
        contribution:
          '我负责文献调研、任务定义、评估维度设计、实验框架搭建和阶段性结果分析，把“题目质量”拆成可讨论、可实验的指标。',
        outcome: '关键词：Bloom 认知模型、DOK、LLM-as-a-judge、教育测评。',
        tags: ['Bloom', 'LLM Evaluation', 'Educational AI'],
        link: null,
      },
      {
        name: 'RISE / 灵知寓学',
        label: 'WWW 2026 Demo Track · Intelligent Education',
        problem: '我参与构建面向资源受限教育场景的轻量化智能学习系统。',
        contribution:
          '我参与交互流程、沉浸式教学模块、系统原型集成，以及前端与 LLM 接口联调，让 RAG、MCP、数字人和学习分析形成完整体验。',
        outcome: '相关成果被 The Web Conference 2026 Demo Track 录用，我是第三作者。',
        tags: ['RAG', 'MCP', 'Digital Human'],
        link: null,
      },
      {
        name: 'VirTour',
        label: 'Application · Agent-guided Tourism',
        problem: '我把景点知识问答、数字人导览和全景漫游连接成一个可交互系统。',
        contribution:
          '我负责 TTS 流式播放链路、MCP 工具调用流程、数字人模块和前端核心集成，重点处理“模型回答”到“场景控制”的衔接。',
        outcome: '项目获第 19 届“挑战杯”国家级特等奖。',
        tags: ['Agent', 'RAG', 'TTS'],
        link: 'https://github.com/FrancesscaWY/VirtualTour-Back',
      },
      {
        name: 'EmoSpark',
        label: 'Application · Multimodal AI',
        problem: '我参与面向自闭症儿童情绪理解与社交训练的辅助系统。',
        contribution:
          '我负责系统架构、FastAPI 后端、视频流情绪识别模块和接口集成，尝试把多模态识别变成可反馈、可训练的产品流程。',
        outcome: '项目获得软件著作权，沉淀了我对特殊人群场景中 AI 应用边界的理解。',
        tags: ['FastAPI', 'OpenCV', 'Vue'],
        link: 'https://github.com/FrancesscaWY/Emotions-Attention-Identify',
      },
      {
        name: 'IntelliHealthCare / 智诊康养',
        label: 'Full-stack · Smart Eldercare',
        problem: '我参与智慧康养平台，把长者、家属和机构的不同流程放进同一个系统。',
        contribution:
          '我参与服务推荐、健康档案、后台管理和智能体能力相关页面联调，关注系统在多角色、多流程中的一致性。',
        outcome: '项目让我更熟悉 Vue 3、NestJS、Prisma、RAG 与多智能体运行时的工程协作。',
        tags: ['Vue 3', 'NestJS', 'Prisma'],
        link: 'https://github.com/FrancesscaWY/IntelliHealthCare',
      },
      {
        name: 'SketchMind',
        label: 'Prototype · AI Feedback',
        problem: '我探索科学草图学习中，AI 如何判断绘图过程并给出反馈。',
        contribution:
          '我关注绘图任务验证、上传分析和 AI 反馈体验，使用 Excalidraw、Next.js、Express 与 Gemini 搭建原型。',
        outcome: '这个项目帮助我思考“AI 反馈”怎样从一句建议变成可嵌入学习过程的交互。',
        tags: ['Next.js', 'Express', 'Gemini'],
        link: 'https://github.com/FrancesscaWY/SketchMind',
      },
    ],
    capabilities: [
      {
        title: '研究与评估',
        items: ['文献调研', '问题定义', '指标拆解', '实验设计', '结果分析'],
      },
      {
        title: 'AI 应用系统',
        items: ['RAG', 'LLM API', 'MCP', 'Agent Workflow', '多模态识别'],
      },
      {
        title: '工程实现',
        items: ['Vue / Next.js', 'FastAPI / NestJS', 'Prisma / SQLite', 'Git / Docker', '前后端联调'],
      },
    ],
    notes: [
      {
        title: '我喜欢从“人真的怎么用”开始',
        body: '教育、康养、旅游、社交训练这些场景里，技术不是孤立存在的。对我来说，一个系统好不好，最终要回到具体的人和具体的使用时刻。',
      },
      {
        title: '我不太满足于“能跑就行”',
        body: '我会反复问：依据在哪里？失败时怎样暴露？评估标准是什么？下一次迭代要验证什么？这些问题让我从工程实现走向研究表达。',
      },
      {
        title: '我也喜欢把复杂内容讲清楚',
        body: '不管是项目文档、答辩展示还是网页文案，我都希望减少空泛形容词，多说结构、证据和真实取舍。',
      },
    ],
    evidence: [
      ['2023', '进入西南大学软件工程专业，开始系统学习计算机基础与软件工程。'],
      ['2025', '参与 VirTour、EmoSpark 等 AI 应用项目，积累 RAG、MCP、数字人和多模态识别经验。'],
      ['2025', '第 19 届“挑战杯”全国大学生课外学术科技作品竞赛国家级特等奖。'],
      ['2026', 'RISE 相关成果被 The Web Conference 2026 Demo Track 录用，第三作者。'],
      ['2026', '获得软件著作权 1 项。'],
    ],
  },
  en: {
    brief: [
      ['Current', 'Software engineering undergraduate focused on trustworthy LLM systems and intelligent education.'],
      ['Keywords', 'RAG, LLM evaluation, MCP, agentic tool use, and applied software engineering.'],
      ['Looking for', 'Opportunities where real needs, research questions, and runnable systems meet.'],
    ],
    overview: [
      ['Research direction', 'I study how LLM systems can be evaluated, explained, and constrained, especially in intelligent education.'],
      ['Applied practice', 'I have worked on web systems, RAG applications, digital-human interaction, multimodal recognition, and agent workflows.'],
      ['How I work', 'I break problems into definitions, workflows, interfaces, experiments, and deliverable results.'],
      ['Personal angle', 'I am drawn to technology with real people behind it: learners, caregivers, travelers, and people who need support.'],
    ],
    focus: [
      {
        title: 'Trustworthy AI systems',
        body: 'I care about whether a system can show evidence, expose uncertainty, control tool boundaries, and remain stable in real use.',
      },
      {
        title: 'Intelligent education and learning assessment',
        body: 'I want AI to do more than answer questions. I want it to help describe learning processes, question quality, cognitive levels, and feedback mechanisms.',
      },
      {
        title: 'RAG and tool invocation',
        body: 'I am interested in knowledge organization, retrieval augmentation, MCP interaction, and agent workflows because they decide whether models can enter real tasks.',
      },
    ],
    work: [
      {
        name: 'BEACON',
        label: 'Research · LLM Evaluation',
        problem: 'The question I am asking: does a test item actually measure the intended cognitive level?',
        contribution:
          'I work on literature review, task formulation, evaluation dimensions, experimental framework design, and preliminary analysis, turning “question quality” into something discussable and testable.',
        outcome: 'Keywords: Bloom taxonomy, DOK, LLM-as-a-judge, educational assessment.',
        tags: ['Bloom', 'LLM Evaluation', 'Educational AI'],
        link: null,
      },
      {
        name: 'RISE / Lingzhi Yuxue',
        label: 'WWW 2026 Demo Track · Intelligent Education',
        problem: 'I helped build a lightweight intelligent learning system for resource-constrained education.',
        contribution:
          'I contributed to interaction workflows, immersive teaching modules, prototype integration, and front-end / LLM API coordination, connecting RAG, MCP, digital humans, and learning analytics.',
        outcome: 'The work was accepted to The Web Conference 2026 Demo Track, where I am the third author.',
        tags: ['RAG', 'MCP', 'Digital Human'],
        link: null,
      },
      {
        name: 'VirTour',
        label: 'Application · Agent-guided Tourism',
        problem: 'I connected scenic knowledge QA, digital-human guidance, and panoramic roaming into an interactive system.',
        contribution:
          'I worked on streaming TTS, MCP-based tool invocation, digital-human modules, and core front-end integration, focusing on the path from model responses to scene control.',
        outcome: 'The project won the National Special Prize in Challenge Cup.',
        tags: ['Agent', 'RAG', 'TTS'],
        link: 'https://github.com/FrancesscaWY/VirtualTour-Back',
      },
      {
        name: 'EmoSpark',
        label: 'Application · Multimodal AI',
        problem: 'I worked on a support system for emotion understanding and social training for children with autism.',
        contribution:
          'I contributed to system architecture, FastAPI backend services, video-stream emotion recognition, and API integration, turning multimodal recognition into feedback and training flows.',
        outcome: 'The project received a software copyright and shaped my understanding of AI boundaries in sensitive human-facing scenarios.',
        tags: ['FastAPI', 'OpenCV', 'Vue'],
        link: 'https://github.com/FrancesscaWY/Emotions-Attention-Identify',
      },
      {
        name: 'IntelliHealthCare',
        label: 'Full-stack · Smart Eldercare',
        problem: 'I contributed to an eldercare platform connecting seniors, families, and institutions within one system.',
        contribution:
          'I worked on service recommendation, health records, admin flows, and agent-related product pages, paying attention to consistency across roles and workflows.',
        outcome: 'The project strengthened my experience with Vue 3, NestJS, Prisma, RAG, and multi-agent runtime collaboration.',
        tags: ['Vue 3', 'NestJS', 'Prisma'],
        link: 'https://github.com/FrancesscaWY/IntelliHealthCare',
      },
      {
        name: 'SketchMind',
        label: 'Prototype · AI Feedback',
        problem: 'I explored how AI can evaluate scientific sketching processes and provide feedback.',
        contribution:
          'I focused on drawing-task validation, upload analysis, and AI feedback experience, prototyping with Excalidraw, Next.js, Express, and Gemini.',
        outcome: 'This helped me think about how AI feedback can become part of a learning interaction, not just a one-sentence suggestion.',
        tags: ['Next.js', 'Express', 'Gemini'],
        link: 'https://github.com/FrancesscaWY/SketchMind',
      },
    ],
    capabilities: [
      {
        title: 'Research and evaluation',
        items: ['Literature review', 'Problem formulation', 'Metric design', 'Experiment design', 'Result analysis'],
      },
      {
        title: 'AI application systems',
        items: ['RAG', 'LLM APIs', 'MCP', 'Agent workflows', 'Multimodal recognition'],
      },
      {
        title: 'Engineering implementation',
        items: ['Vue / Next.js', 'FastAPI / NestJS', 'Prisma / SQLite', 'Git / Docker', 'Front-end and back-end integration'],
      },
    ],
    notes: [
      {
        title: 'I like starting from how people actually use things',
        body: 'Education, eldercare, tourism, and social training are not abstract scenes. For me, whether a system is good eventually returns to concrete people and concrete moments of use.',
      },
      {
        title: 'I am not satisfied with “it runs”',
        body: 'I keep asking: where is the evidence, how does failure appear, what is the evaluation standard, and what should the next iteration verify? These questions move me from implementation toward research expression.',
      },
      {
        title: 'I enjoy making complex things clear',
        body: 'Whether in project documentation, presentations, or this homepage, I prefer structure, evidence, and real tradeoffs over vague adjectives.',
      },
    ],
    evidence: [
      ['2023', 'Entered Software Engineering at Southwest University and began systematic training in computer science and software engineering.'],
      ['2025', 'Worked on AI application systems including VirTour and EmoSpark, gaining experience in RAG, MCP, digital humans, and multimodal recognition.'],
      ['2025', 'National Special Prize, Challenge Cup.'],
      ['2026', 'RISE was accepted to The Web Conference 2026 Demo Track, with me as the third author.'],
      ['2026', 'One software copyright.'],
    ],
  },
};

const state = {
  lang: localStorage.getItem('lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en'),
  theme: localStorage.getItem('theme') || 'light',
};

function setText(key, value) {
  document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
    node.textContent = value;
  });
}

function applyLanguage() {
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const value = key.split('.').reduce((acc, part) => acc?.[part], content[state.lang]);
    if (typeof value === 'string') setText(key, value);
  });
  renderBrief();
  renderOverview();
  renderFocus();
  renderWork();
  renderCapabilities();
  renderNotes();
  renderEvidence();
  localStorage.setItem('lang', state.lang);
}

function renderBrief() {
  const list = document.querySelector('#briefList');
  list.innerHTML = data[state.lang].brief
    .map(
      ([label, text]) => `
        <div>
          <span>${label}</span>
          <p>${text}</p>
        </div>
      `,
    )
    .join('');
}

function renderOverview() {
  const grid = document.querySelector('#overviewGrid');
  grid.innerHTML = data[state.lang].overview
    .map(
      ([title, body]) => `
        <article>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `,
    )
    .join('');
}

function renderFocus() {
  const list = document.querySelector('#focusList');
  list.innerHTML = data[state.lang].focus
    .map(
      (item) => `
        <article class="focus-item reveal">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('');
  observeReveals();
}

function renderWork() {
  const list = document.querySelector('#workList');
  list.innerHTML = data[state.lang].work
    .map(
      (item) => `
        <article class="work-card reveal">
          <div class="work-meta">
            <span>${item.label}</span>
            ${
              item.link
                ? `<a href="${item.link}" target="_blank" rel="noreferrer" aria-label="${item.name} GitHub"><span class="button-icon code-icon" aria-hidden="true"></span></a>`
                : `<span class="quiet-dot" aria-label="No public repository"></span>`
            }
          </div>
          <h3>${item.name}</h3>
          <dl>
            <div>
              <dt>${state.lang === 'zh' ? '问题' : 'Problem'}</dt>
              <dd>${item.problem}</dd>
            </div>
            <div>
              <dt>${state.lang === 'zh' ? '我的工作' : 'My work'}</dt>
              <dd>${item.contribution}</dd>
            </div>
            <div>
              <dt>${state.lang === 'zh' ? '结果' : 'Outcome'}</dt>
              <dd>${item.outcome}</dd>
            </div>
          </dl>
          <div class="tag-row">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        </article>
      `,
    )
    .join('');
  observeReveals();
}

function renderCapabilities() {
  const grid = document.querySelector('#capabilityGrid');
  grid.innerHTML = data[state.lang].capabilities
    .map(
      (group) => `
        <article>
          <h3>${group.title}</h3>
          <div class="tag-row">${group.items.map((item) => `<span>${item}</span>`).join('')}</div>
        </article>
      `,
    )
    .join('');
}

function renderNotes() {
  const grid = document.querySelector('#notesGrid');
  grid.innerHTML = data[state.lang].notes
    .map(
      (item) => `
        <article class="note-card reveal">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `,
    )
    .join('');
  observeReveals();
}

function renderEvidence() {
  const list = document.querySelector('#evidenceList');
  list.innerHTML = data[state.lang].evidence
    .map(
      ([date, text]) => `
        <article>
          <time>${date}</time>
          <p>${text}</p>
        </article>
      `,
    )
    .join('');
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem('theme', state.theme);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.12 },
);

function observeReveals() {
  const nodes = document.querySelectorAll('.reveal:not(.is-observed)');
  nodes.forEach((node) => {
    node.classList.add('is-observed');
    revealObserver.observe(node);
  });
}

document.querySelector('#languageToggle').addEventListener('click', () => {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  applyLanguage();
});

document.querySelector('#themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
});

applyTheme();
applyLanguage();
observeReveals();
