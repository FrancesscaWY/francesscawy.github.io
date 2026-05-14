const content = {
  zh: {
    nav: {
      name: '魏艳',
      role: '软件工程 · AI 系统',
      research: '研究',
      projects: '项目',
      trajectory: '路径',
      contact: '联系',
      lang: 'EN',
    },
    hero: {
      eyebrow: 'LLM Systems · RAG · Intelligent Education',
      name: '魏艳',
      title: '把可运行的系统，推进成可验证的研究问题。',
      lede:
        '西南大学软件工程本科生，关注可信大模型应用系统、RAG 可靠性评估、LLM/Agent 应用安全与 AI 应用的数据基础设施。',
      primary: '查看精选项目',
      profileName: 'Yan Wei / 魏艳',
      profileMeta: '软件工程本科 · 西南大学 · 2023 至今',
    },
    signals: {
      rank: '专业成绩排名',
      www: 'Demo Track 第三作者',
      national: '国家级项目奖项',
      copyright: '软件著作权',
    },
    research: {
      eyebrow: 'Research Direction',
      title: '从智能教育场景出发，研究大模型系统的可靠性。',
      body1:
        '魏艳的经历有两条互相支撑的线：一条是把真实需求落成系统，另一条是把系统中的不确定性抽象成研究问题。她在 RAG、MCP、数字人交互、学习分析与题目质量评估中持续实践，尤其关注知识如何组织、模型如何调用工具、系统如何被评估与验证。',
      body2:
        '当前重点包括基于 LLM 与 Bloom 认知模型的自动题目评估、可信 RAG 应用、Agent 工具交互流程以及面向资源受限场景的轻量化智能教育系统。',
    },
    publication: {
      eyebrow: 'Publication & Research Output',
      title: '检索增强生成驱动的沉浸式智能教育系统',
      venue: 'The Web Conference 2026 Demo Track · 第三作者',
      summary:
        '一个轻量化 Web 智能学习系统，融合 RAG、MCP、数字人交互、沉浸式课堂、学习分析与注意力监测，面向资源受限教育场景提供可部署的智能学习体验。',
    },
    projects: {
      eyebrow: 'Selected Work',
      title: '精选项目，而不是仓库清单。',
      note:
        '公开 GitHub 仓库里包含课程作业、fork、实验和系统项目。这里优先展示最能体现研究与工程积累的项目。',
    },
    skills: {
      eyebrow: 'Technical Foundation',
      title: '能把想法拆成模块、接口、流程和可验证实验。',
    },
    trajectory: {
      eyebrow: 'Trajectory',
      title: '从应用落地到研究问题。',
    },
    awards: {
      eyebrow: 'Awards & Honors',
      title: '项目、科研与学业共同构成的证据链。',
    },
    contact: {
      eyebrow: 'Contact',
      title: '欢迎围绕可信 AI 系统、RAG、Agent 工具交互与智能教育展开交流。',
    },
    footer: {
      built: '为 GitHub Pages 构建的双语个人主页，内容以公开展示与隐私克制为边界。',
      back: '回到顶部',
    },
  },
  en: {
    nav: {
      name: 'Yan Wei',
      role: 'Software Engineering · AI Systems',
      research: 'Research',
      projects: 'Projects',
      trajectory: 'Trajectory',
      contact: 'Contact',
      lang: '中',
    },
    hero: {
      eyebrow: 'LLM Systems · RAG · Intelligent Education',
      name: 'Yan Wei',
      title: 'Turning runnable systems into research questions that can be tested.',
      lede:
        'B.Eng. candidate in Software Engineering at Southwest University, focusing on trustworthy LLM application systems, RAG reliability evaluation, LLM/Agent application security, and data infrastructure for AI applications.',
      primary: 'View selected work',
      profileName: 'Yan Wei / 魏艳',
      profileMeta: 'B.Eng. candidate · Southwest University · 2023-present',
    },
    signals: {
      rank: 'Academic ranking',
      www: 'Demo Track, third author',
      national: 'National-level project awards',
      copyright: 'Software copyright',
    },
    research: {
      eyebrow: 'Research Direction',
      title: 'Studying reliability of LLM systems from intelligent education scenarios.',
      body1:
        'Yan Wei’s work is shaped by two mutually reinforcing threads: building systems for real needs, and turning system uncertainty into research problems. Her practice spans RAG, MCP, digital-human interaction, learning analytics, and question-quality assessment, with a particular interest in knowledge organization, tool invocation, and system evaluation.',
      body2:
        'Current interests include automatic question assessment with LLMs and Bloom’s cognitive model, trustworthy RAG applications, agentic tool-interaction workflows, and lightweight intelligent education systems for resource-constrained environments.',
    },
    publication: {
      eyebrow: 'Publication & Research Output',
      title: 'A Retrieval-Augmented Generation Enhanced Immersive System for Education',
      venue: 'The Web Conference 2026 Demo Track · Third author',
      summary:
        'A lightweight web-based intelligent learning system integrating RAG, MCP, digital-human interaction, immersive classrooms, learning analytics, and attention monitoring for deployable education in resource-constrained settings.',
    },
    projects: {
      eyebrow: 'Selected Work',
      title: 'Selected work, not a raw repository list.',
      note:
        'The public GitHub account includes coursework, forks, experiments, and systems. This page highlights the projects most relevant to research and software engineering practice.',
    },
    skills: {
      eyebrow: 'Technical Foundation',
      title: 'Breaking ideas into modules, interfaces, workflows, and verifiable experiments.',
    },
    trajectory: {
      eyebrow: 'Trajectory',
      title: 'From application delivery to research formulation.',
    },
    awards: {
      eyebrow: 'Awards & Honors',
      title: 'A compact evidence chain across projects, research, and coursework.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Open to research conversations around trustworthy AI systems, RAG, agentic tools, and intelligent education.',
    },
    footer: {
      built: 'A bilingual GitHub Pages portfolio built with a public-facing, privacy-conscious structure.',
      back: 'Back to top',
    },
  },
};

const data = {
  zh: {
    projects: [
      {
        name: 'BEACON：基于 LLM 与 Bloom 认知模型的自动题目评估',
        meta: '2025.09 至今 · Research',
        summary:
          '围绕题目质量评估中的认知层级有效性，结合 Bloom 分类、DOK、结构规范、证据可解性和 LLM 评估能力，构建可解释的单题质量评估框架。',
        role: '负责文献调研、任务定义、方法设计、实验框架搭建与阶段性结果分析。',
        tags: ['LLM Evaluation', 'Bloom', 'Educational AI', 'Python'],
        link: null,
      },
      {
        name: 'RISE / 灵知寓学：RAG 增强的沉浸式智能教育系统',
        meta: '2025.07 - 2026.01 · WWW 2026 Demo Track',
        summary:
          '融合本地知识库、RAG、MCP、数字人交互、沉浸式课堂和学习分析，面向资源受限教育场景提供轻量化智能学习体验。',
        role: '参与交互流程设计、沉浸式教学模块开发、系统原型集成、前端与 LLM 接口联调。',
        tags: ['RAG', 'MCP', 'Digital Human', 'Vue'],
        link: 'https://github.com/FrancesscaWY/IntelliHealthCare',
      },
      {
        name: 'VirTour：智能体驱动的沉浸式虚拟旅游系统',
        meta: '2025.03 - 2025.07 · National Special Prize',
        summary:
          '构建景点讲解、语音交互、数字人导览与全景漫游平台，基于 RAG 提供景点知识增强，并通过 MCP 控制场景跳转、镜头切换与工具调用。',
        role: '负责 TTS 流式播放链路、MCP 交互流程、数字人模块和前端核心集成。',
        tags: ['Agent', 'RAG', 'MCP', 'TTS'],
        link: 'https://github.com/FrancesscaWY/VirtualTour-Back',
      },
      {
        name: 'EmoSpark：多模态情绪识别社交辅助系统',
        meta: '2025.03 - 2025.06 · Software Copyright',
        summary:
          '面向自闭症儿童情绪理解与社交训练，融合面部、语音、文本信息，提供情绪识别、注意力识别、可视化反馈与场景训练。',
        role: '负责项目规划、系统架构、FastAPI 后端服务、视频流情绪识别模块与接口集成。',
        tags: ['FastAPI', 'OpenCV', 'DeepFace', 'Vue'],
        link: 'https://github.com/FrancesscaWY/Emotions-Attention-Identify',
      },
      {
        name: 'IntelliHealthCare / 智诊康养',
        meta: '2026.04 · Full-stack Monorepo',
        summary:
          '面向长者、家属与机构的智慧康养平台，整合健康档案、服务预约、内容社区、后台运营、RAG 检索与多智能体运行时。',
        role: '参与服务推荐、健康档案、后台管理和智能体能力相关页面与业务联调。',
        tags: ['Vue 3', 'NestJS', 'Prisma', 'RAG'],
        link: 'https://github.com/FrancesscaWY/IntelliHealthCare',
      },
      {
        name: 'SketchMind：科学草图评估与 AI 反馈原型',
        meta: '2025.10 · AI Learning Tool',
        summary:
          '基于 Excalidraw、Next.js、Express 与 Gemini 的科学草图学习原型，支持绘图过程验证、上传分析和 AI 反馈。',
        role: '关注 AI 反馈、绘图任务验证与教学交互体验的工程实现。',
        tags: ['Next.js', 'Express', 'Gemini', 'Excalidraw'],
        link: 'https://github.com/FrancesscaWY/SketchMind',
      },
    ],
    timeline: [
      ['2023.09', '进入西南大学软件工程专业，系统学习数据结构、操作系统、网络、数据库、计算机组成等核心课程。'],
      ['2024', '围绕班级作业管理需求，搭建并迭代作业提交平台，开始将真实流程抽象成 Web 系统。'],
      ['2025.03', '参与 VirTour 与 EmoSpark 等 AI 应用项目，在 RAG、MCP、数字人、多模态识别与系统集成中积累经验。'],
      ['2025.09', '推进 BEACON 自动题目评估研究，从项目实现转向任务定义、评估方法和实验设计。'],
      ['2026.01', 'RISE 相关成果被 The Web Conference 2026 Demo Track 录用，作为第三作者参与。'],
    ],
    awards: [
      ['第 19 届“挑战杯”全国大学生课外学术科技作品竞赛国家级特等奖', '2025'],
      ['第 18 届中国大学生计算机设计大赛国家级二等奖', '2025'],
      ['国家励志奖学金、国家筑梦奖学金、三好学生', '2025'],
      ['二等奖学金、三好学生、砥砺奋斗奖', '2024'],
      ['软件著作权 1 项', '2026'],
    ],
    skills: [
      'Python',
      'PyTorch',
      'Transformers',
      'RAG',
      'LLM Evaluation',
      'MCP',
      'TypeScript',
      'Vue',
      'Node.js',
      'FastAPI',
      'NestJS',
      'Prisma',
      'SQLite',
      'Linux',
      'Docker',
      'Git',
    ],
  },
  en: {
    projects: [
      {
        name: 'BEACON: Automatic Question Assessment with LLMs and Bloom’s Cognitive Model',
        meta: 'Sep. 2025 - Present · Research',
        summary:
          'A question-quality assessment framework that combines Bloom taxonomy, DOK, item-writing compliance, evidence-based solvability, and LLM-based evaluators to diagnose cognitive-level validity.',
        role: 'Led literature review, task formulation, evaluation design, experimental framework construction, and preliminary analysis.',
        tags: ['LLM Evaluation', 'Bloom', 'Educational AI', 'Python'],
        link: null,
      },
      {
        name: 'RISE / Lingzhi Yuxue: RAG-enhanced Immersive Intelligent Education System',
        meta: 'Jul. 2025 - Jan. 2026 · WWW 2026 Demo Track',
        summary:
          'A lightweight intelligent learning system integrating local knowledge bases, RAG, MCP, digital-human interaction, immersive classrooms, and learning analytics for resource-constrained education.',
        role: 'Contributed to interaction workflow design, immersive teaching modules, prototype integration, front-end implementation, and LLM API coordination.',
        tags: ['RAG', 'MCP', 'Digital Human', 'Vue'],
        link: 'https://github.com/FrancesscaWY/IntelliHealthCare',
      },
      {
        name: 'VirTour: Agent-driven Immersive Virtual Tourism System',
        meta: 'Mar. 2025 - Jul. 2025 · National Special Prize',
        summary:
          'A virtual tourism platform with scenic narration, voice interaction, digital-human guidance, and panoramic roaming, using RAG for grounded explanations and MCP for scene/tool control.',
        role: 'Implemented streaming TTS, MCP-based interaction flow, digital-human modules, and core front-end integration.',
        tags: ['Agent', 'RAG', 'MCP', 'TTS'],
        link: 'https://github.com/FrancesscaWY/VirtualTour-Back',
      },
      {
        name: 'EmoSpark: Multimodal Emotion Recognition Social Support System',
        meta: 'Mar. 2025 - Jun. 2025 · Software Copyright',
        summary:
          'A social-support system for emotion understanding and social training in children with autism, integrating facial, speech, and text signals with visual feedback.',
        role: 'Worked on project planning, system architecture, FastAPI backend services, video-stream emotion recognition, and API integration.',
        tags: ['FastAPI', 'OpenCV', 'DeepFace', 'Vue'],
        link: 'https://github.com/FrancesscaWY/Emotions-Attention-Identify',
      },
      {
        name: 'IntelliHealthCare',
        meta: 'Apr. 2026 · Full-stack Monorepo',
        summary:
          'A smart healthcare and eldercare platform for seniors, families, and institutions, integrating health records, service booking, community content, admin workflows, RAG retrieval, and agent orchestration.',
        role: 'Contributed to service recommendation, health archive, admin functions, and agent-related product flows.',
        tags: ['Vue 3', 'NestJS', 'Prisma', 'RAG'],
        link: 'https://github.com/FrancesscaWY/IntelliHealthCare',
      },
      {
        name: 'SketchMind: Scientific Sketch Assessment and AI Feedback Prototype',
        meta: 'Oct. 2025 · AI Learning Tool',
        summary:
          'A learning prototype built with Excalidraw, Next.js, Express, and Gemini for validating scientific sketches and providing AI feedback.',
        role: 'Focused on AI feedback, drawing-task validation, and teaching-oriented interaction design.',
        tags: ['Next.js', 'Express', 'Gemini', 'Excalidraw'],
        link: 'https://github.com/FrancesscaWY/SketchMind',
      },
    ],
    timeline: [
      ['Sep. 2023', 'Entered Software Engineering at Southwest University and built foundations in data structures, OS, networks, databases, and computer organization.'],
      ['2024', 'Built and iterated a homework submission platform from real class-management needs, translating workflows into a usable Web system.'],
      ['Mar. 2025', 'Worked on AI application systems including VirTour and EmoSpark, gaining experience in RAG, MCP, digital humans, multimodal recognition, and system integration.'],
      ['Sep. 2025', 'Started BEACON question-assessment research, moving from implementation toward task formulation, evaluation design, and experimental validation.'],
      ['Jan. 2026', 'RISE was accepted to The Web Conference 2026 Demo Track, with Yan Wei as third author.'],
    ],
    awards: [
      ['National Special Prize, Challenge Cup', '2025'],
      ['National Second Prize, China Collegiate Computer Design Contest', '2025'],
      ['National Endeavor Scholarship, National Zhulong Scholarship, Merit Student', '2025'],
      ['Second-class Scholarship, Merit Student, Diligence Award', '2024'],
      ['One software copyright', '2026'],
    ],
    skills: [
      'Python',
      'PyTorch',
      'Transformers',
      'RAG',
      'LLM Evaluation',
      'MCP',
      'TypeScript',
      'Vue',
      'Node.js',
      'FastAPI',
      'NestJS',
      'Prisma',
      'SQLite',
      'Linux',
      'Docker',
      'Git',
    ],
  },
};

const state = {
  lang: localStorage.getItem('lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en'),
  theme: localStorage.getItem('theme') || 'dark',
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
  renderProjects();
  renderTimeline();
  renderAwards();
  renderSkills();
  localStorage.setItem('lang', state.lang);
}

function renderProjects() {
  const grid = document.querySelector('#projectGrid');
  grid.innerHTML = data[state.lang].projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-topline">
            <span>${project.meta}</span>
            ${
              project.link
                ? `<a href="${project.link}" target="_blank" rel="noreferrer" aria-label="${project.name} GitHub"><span class="button-icon code-icon" aria-hidden="true"></span></a>`
                : `<span class="research-dot" aria-label="Research in progress"></span>`
            }
          </div>
          <h3>${project.name}</h3>
          <p>${project.summary}</p>
          <p class="role">${project.role}</p>
          <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        </article>
      `,
    )
    .join('');
  observeReveals();
}

function renderTimeline() {
  const timeline = document.querySelector('#timeline');
  timeline.innerHTML = data[state.lang].timeline
    .map(
      ([date, text]) => `
        <article class="timeline-item reveal">
          <time>${date}</time>
          <p>${text}</p>
        </article>
      `,
    )
    .join('');
  observeReveals();
}

function renderAwards() {
  const list = document.querySelector('#awardList');
  list.innerHTML = data[state.lang].awards
    .map(
      ([name, year]) => `
        <article>
          <span>${name}</span>
          <time>${year}</time>
        </article>
      `,
    )
    .join('');
}

function renderSkills() {
  const cloud = document.querySelector('#skillCloud');
  cloud.innerHTML = data[state.lang].skills.map((skill) => `<span>${skill}</span>`).join('');
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem('theme', state.theme);
}

function observeReveals() {
  const nodes = document.querySelectorAll('.reveal:not(.is-observed)');
  nodes.forEach((node) => {
    node.classList.add('is-observed');
    revealObserver.observe(node);
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.15 },
);

document.querySelector('#languageToggle').addEventListener('click', () => {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  applyLanguage();
});

document.querySelector('#themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
});

function animateField() {
  const canvas = document.querySelector('#field');
  const ctx = canvas.getContext('2d');
  const ratio = window.devicePixelRatio || 1;
  let width;
  let height;
  let points = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(95, Math.max(42, Math.floor(width / 17)));
    points = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 1 + (index % 4) * 0.28,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const isLight = document.documentElement.dataset.theme === 'light';
    ctx.fillStyle = isLight ? 'rgba(18, 34, 51, 0.22)' : 'rgba(238, 246, 255, 0.28)';
    ctx.strokeStyle = isLight ? 'rgba(20, 80, 120, 0.08)' : 'rgba(140, 190, 255, 0.09)';

    points.forEach((point) => {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < -20) point.x = width + 20;
      if (point.x > width + 20) point.x = -20;
      if (point.y < -20) point.y = height + 20;
      if (point.y > height + 20) point.y = -20;

      ctx.beginPath();
      ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const distance = Math.hypot(dx, dy);
        if (distance < 125) {
          ctx.globalAlpha = (125 - distance) / 125;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

applyTheme();
applyLanguage();
observeReveals();
animateField();
