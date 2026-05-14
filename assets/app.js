const content = {
  zh: {
    nav: {
      name: '魏艳 / Yan Wei',
      role: 'AI systems · education · products',
      focus: '研究',
      work: '作品',
      capability: '方法',
      notes: '侧面',
      contact: '联系',
      lang: 'EN',
    },
    hero: {
      title: '你好，我是魏艳。我在软件工程和 AI 应用之间做一些具体的事。',
      lede:
        '我关注智能教育、可信 AI 系统、RAG 和应用原型。比起把技术词堆在一起，我更想知道：一个系统能不能真的帮到人，失败时能不能被发现，下一次迭代能不能被验证。',
      primary: '看作品',
      name: '魏艳 / Yan Wei',
      role: '西南大学 · 软件工程本科',
    },
    about: {
      eyebrow: 'About',
      title: '我把这里当作一个入口，而不是另一份简历。',
    },
    focus: {
      eyebrow: 'Research',
      title: '我的兴趣从真实场景出发，慢慢走向可评估、可解释、可复用的 AI 系统。',
      lede:
        '教育、康养、导览和社交训练这些场景里，模型不是独立工作的。它需要知识来源、工具边界、交互流程和评估标准一起支撑。',
    },
    work: {
      eyebrow: 'Selected Work',
      title: '这些项目更像一组路标：我怎么定义问题，怎么把它做出来，又怎么回头检查。',
      lede:
        '我没有把所有仓库搬上来，只保留最能说明研究兴趣、工程能力和应用意识的部分。',
    },
    capability: {
      eyebrow: 'How I Work',
      title: '我希望自己既能提出问题，也能把系统落下来。',
      lede:
        '对高校，我想展示问题意识和研究潜力；对企业，我想展示工程实现、协作和持续学习。它们不是两套话术，而是同一批项目里的两面。',
    },
    notes: {
      eyebrow: 'Notes',
      title: '除了技术标签，我也想留下一点人的侧面。',
      lede:
        '如果你也在相近方向，也许这些偏好比项目名更容易让我们开始聊天。',
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
      built: '一个持续更新的双语个人主页。',
      back: '回到顶部',
    },
  },
  en: {
    nav: {
      name: 'Yan Wei / 魏艳',
      role: 'AI systems · education · products',
      focus: 'Research',
      work: 'Work',
      capability: 'Approach',
      notes: 'Notes',
      contact: 'Contact',
      lang: '中',
    },
    hero: {
      title: 'Hi, I am Yan Wei. I build practical AI systems and study how to make them more trustworthy.',
      lede:
        'My work sits around intelligent education, trustworthy AI systems, RAG, and applied prototypes. I care less about stacking buzzwords and more about whether a system helps real people, exposes failure, and leaves something testable for the next iteration.',
      primary: 'See work',
      name: 'Yan Wei / 魏艳',
      role: 'Software Engineering · Southwest University',
    },
    about: {
      eyebrow: 'About',
      title: 'I treat this site as an entry point, not another resume.',
    },
    focus: {
      eyebrow: 'Research',
      title: 'My interests start from real scenarios and move toward AI systems that can be evaluated, explained, and reused.',
      lede:
        'In education, eldercare, tourism, and social training, a model never works alone. It needs knowledge sources, tool boundaries, interaction flows, and evaluation standards around it.',
    },
    work: {
      eyebrow: 'Selected Work',
      title: 'These projects are markers of how I define problems, build systems, and check what changed.',
      lede:
        'I did not bring every repository here. I selected the pieces that best show my research interests, engineering practice, and sense for real use.',
    },
    capability: {
      eyebrow: 'How I Work',
      title: 'I want to ask good questions and also build the systems that test them.',
      lede:
        'For academic readers, I hope this shows problem formulation and research potential. For industry readers, I hope it shows implementation, collaboration, and fast learning. They come from the same work.',
    },
    notes: {
      eyebrow: 'Notes',
      title: 'Beyond technical labels, I want this page to leave a bit of a person.',
      lede:
        'If you work nearby, these small notes may be a better start for a conversation than project titles alone.',
    },
    evidence: {
      eyebrow: 'Milestones',
      title: 'A few quick, checkable markers.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'If you want to talk about trustworthy AI, intelligent education, applied prototypes, or simply get to know me, feel free to reach out.',
    },
    footer: {
      built: 'A bilingual personal homepage, kept in motion.',
      back: 'Back to top',
    },
  },
};

const data = {
  zh: {
    brief: [
      ['现在', '软件工程本科生，关注智能教育与可信 AI 系统。'],
      ['常用方式', '从场景和用户开始，再拆知识、流程、接口和评估。'],
      ['欢迎聊', 'RAG、LLM 评估、学习反馈、应用原型，以及真实系统里的取舍。'],
    ],
    about: [
      '我目前最稳定的兴趣在智能教育和可信 AI 系统之间。教育场景让我看到理解、反馈、题目质量和学习过程这些具体问题；RAG、LLM 评估和工具调用则让我思考系统怎样减少幻觉、说明依据，并接入真实任务。',
      '我也很在意工程实现。一个想法如果不能变成清晰的流程、接口、页面、实验记录和可复现结果，就很难继续讨论。我喜欢把模糊需求拆成可合作、可检查、可迭代的部分。',
      '这个主页希望同时服务几类人：同领域朋友能快速知道我在想什么，高校老师能看到我的研究线索，工程团队能看到我做系统的方式。但我不想把它写成三块硬邦邦的宣传栏。',
    ],
    focus: [
      {
        title: '可信 AI 系统',
        body: '我关心系统能否说明依据、暴露不确定性、控制工具边界，并在真实使用中稳定工作。',
      },
      {
        title: '智能教育与学习评估',
        body: '我希望 AI 不只是给答案，也能帮助描述学习过程、题目质量、认知层级和反馈机制。',
      },
      {
        title: 'RAG 与工具调用',
        body: '我对知识组织、检索增强、MCP 交互和智能体流程感兴趣，因为它们决定模型能否进入真实任务。',
      },
    ],
    work: [
      {
        name: 'BEACON',
        label: 'Research · LLM Evaluation',
        problem: '一道题看起来合理，不代表它真的测到了预期认知层级。',
        contribution:
          '我参与文献调研、任务定义、评估维度设计、实验框架和阶段性分析，把“题目质量”拆成可以讨论、比较和实验的指标。',
        outcome: '这让我开始把教育 AI 里的“好问题”当作一个可定义、可验证的研究对象。',
        tags: ['Bloom', 'LLM Evaluation', 'Educational AI'],
        link: null,
      },
      {
        name: 'RISE / 灵知寓学',
        label: 'WWW 2026 Demo Track · Intelligent Education',
        problem: '如果学校硬件和预算有限，AI 学习系统还能不能轻量部署、可靠运行？',
        contribution:
          '我参与交互流程、沉浸式教学模块、系统原型集成，以及前端与 LLM 接口联调，让 RAG、MCP、数字人和学习分析形成完整体验。',
        outcome: '相关成果被 The Web Conference 2026 Demo Track 录用，我是第三作者。',
        tags: ['RAG', 'MCP', 'Digital Human'],
        link: null,
      },
      {
        name: 'VirTour',
        label: 'Application · Agent-guided Tourism',
        problem: '我想让虚拟导览不只是播放介绍，而是能听懂提问、切换场景、调用工具。',
        contribution:
          '我负责 TTS 流式播放链路、MCP 工具调用流程、数字人模块和前端核心集成，重点处理从模型回答到场景控制的衔接。',
        outcome: '项目获第 19 届“挑战杯”国家级特等奖。',
        tags: ['Agent', 'RAG', 'TTS'],
        link: 'https://github.com/FrancesscaWY/VirtualTour-Back',
      },
      {
        name: 'EmoSpark',
        label: 'Application · Multimodal AI',
        problem: '在情绪理解和社交训练里，AI 的输出既要谨慎，也要能被照护者理解。',
        contribution:
          '我负责系统架构、FastAPI 后端、视频流情绪识别模块和接口集成，尝试把多模态识别变成可反馈、可训练的流程。',
        outcome: '项目获得软件著作权，也让我更认真地理解特殊人群场景中的 AI 边界。',
        tags: ['FastAPI', 'OpenCV', 'Vue'],
        link: 'https://github.com/FrancesscaWY/Emotions-Attention-Identify',
      },
      {
        name: 'IntelliHealthCare / 智诊康养',
        label: 'Full-stack · Smart Eldercare',
        problem: '康养场景里，长者、家属和机构看见的是同一件事的不同侧面。',
        contribution:
          '我参与服务推荐、健康档案、后台管理和智能体能力相关页面联调，关注系统在多角色、多流程中的一致性。',
        outcome: '项目让我更熟悉 Vue 3、NestJS、Prisma、RAG 与多智能体运行时的工程协作。',
        tags: ['Vue 3', 'NestJS', 'Prisma'],
        link: 'https://github.com/FrancesscaWY/IntelliHealthCare',
      },
      {
        name: 'SketchMind',
        label: 'Prototype · AI Feedback',
        problem: '草图学习里的反馈不该只在最后出现。',
        contribution:
          '我关注绘图任务验证、上传分析和 AI 反馈体验，使用 Excalidraw、Next.js、Express 与 Gemini 搭建原型。',
        outcome: '这个项目帮助我思考 AI 反馈怎样从一句建议变成可嵌入学习过程的交互。',
        tags: ['Next.js', 'Express', 'Gemini'],
        link: 'https://github.com/FrancesscaWY/SketchMind',
      },
    ],
    capabilities: [
      {
        title: '把问题变清楚',
        body: '文献调研、需求访谈、任务定义、指标拆解、实验设计和结果复盘。',
        items: ['Literature', 'Metrics', 'Evaluation'],
      },
      {
        title: '把原型做出来',
        body: 'RAG、LLM API、MCP、Agent workflow、多模态识别，以及前后端联调。',
        items: ['RAG', 'MCP', 'LLM APIs', 'FastAPI', 'Vue / Next.js'],
      },
      {
        title: '把协作留痕',
        body: '我喜欢把接口、实验记录、边界条件和下一步问题写清楚，让别人能接着工作。',
        items: ['Docs', 'Git', 'Experiment notes'],
      },
    ],
    notes: [
      {
        title: '我喜欢从“人真的怎么用”开始',
        body: '教育、康养、旅游、社交训练这些场景里，技术不是孤立存在的。系统好不好，最终要回到具体的人和具体的使用时刻。',
      },
      {
        title: '我不太满足于“能跑就行”',
        body: '我会反复问：依据在哪里？失败时怎样暴露？评估标准是什么？下一次迭代要验证什么？这些问题让我从工程实现走向研究表达。',
      },
      {
        title: '我喜欢把复杂内容讲清楚',
        body: '不管是项目文档、答辩展示还是网页文案，我都希望少一点空泛形容词，多一点结构、证据和真实取舍。',
      },
    ],
    evidence: [
      ['2023', '进入西南大学软件工程专业，系统学习计算机基础与软件工程。'],
      ['2025', '参与 VirTour、EmoSpark 等 AI 应用项目，积累 RAG、MCP、数字人和多模态识别经验。'],
      ['2025', '第 19 届“挑战杯”全国大学生课外学术科技作品竞赛国家级特等奖。'],
      ['2026', 'RISE 相关成果被 The Web Conference 2026 Demo Track 录用，第三作者。'],
      ['2026', '获得软件著作权 1 项。'],
    ],
  },
  en: {
    brief: [
      ['Current', 'Software engineering undergraduate working around intelligent education and trustworthy AI systems.'],
      ['How I work', 'Start from scenes and users, then separate knowledge, flows, interfaces, and evaluation.'],
      ['Open to', 'RAG, LLM evaluation, learning feedback, applied prototypes, and tradeoffs inside real systems.'],
    ],
    about: [
      'My most stable interests sit between intelligent education and trustworthy AI systems. Education gives me concrete questions about understanding, feedback, question quality, and learning processes; RAG, LLM evaluation, and tool use make me ask how systems can reduce hallucination, show evidence, and enter real tasks.',
      'I also care about implementation. If an idea cannot become a clear workflow, interface, page, experiment note, or reproducible result, it is hard to keep improving it. I like turning vague needs into parts that people can build, check, and iterate on together.',
      'This site is meant to work for several kinds of readers: nearby peers can see what I am thinking about, academic readers can trace my research interests, and engineering teams can see how I build. I just do not want to label those audiences as separate sales pitches.',
    ],
    focus: [
      {
        title: 'Trustworthy AI systems',
        body: 'I care about whether a system can show evidence, expose uncertainty, control tool boundaries, and remain stable in real use.',
      },
      {
        title: 'Intelligent education and learning assessment',
        body: 'I want AI to do more than give answers. I want it to help describe learning processes, question quality, cognitive levels, and feedback mechanisms.',
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
        problem: 'A question can look reasonable without measuring the intended cognitive level.',
        contribution:
          'I work on literature review, task formulation, evaluation dimensions, experimental framework design, and preliminary analysis, turning “question quality” into something discussable and testable.',
        outcome: 'This project helps me treat good educational questions as research objects that can be defined and checked.',
        tags: ['Bloom', 'LLM Evaluation', 'Educational AI'],
        link: null,
      },
      {
        name: 'RISE / Lingzhi Yuxue',
        label: 'WWW 2026 Demo Track · Intelligent Education',
        problem: 'If a school has limited hardware and budget, can an AI learning system still be lightweight, deployable, and reliable?',
        contribution:
          'I contributed to interaction workflows, immersive teaching modules, prototype integration, and front-end / LLM API coordination, connecting RAG, MCP, digital humans, and learning analytics.',
        outcome: 'The work was accepted to The Web Conference 2026 Demo Track, where I am the third author.',
        tags: ['RAG', 'MCP', 'Digital Human'],
        link: null,
      },
      {
        name: 'VirTour',
        label: 'Application · Agent-guided Tourism',
        problem: 'I wanted virtual touring to be more than playback: it should understand questions, switch scenes, and call tools.',
        contribution:
          'I worked on streaming TTS, MCP-based tool invocation, digital-human modules, and core front-end integration, focusing on the path from model responses to scene control.',
        outcome: 'The project won the National Special Prize in Challenge Cup.',
        tags: ['Agent', 'RAG', 'TTS'],
        link: 'https://github.com/FrancesscaWY/VirtualTour-Back',
      },
      {
        name: 'EmoSpark',
        label: 'Application · Multimodal AI',
        problem: 'In emotion understanding and social training, AI output needs to be careful and understandable to caregivers.',
        contribution:
          'I contributed to system architecture, FastAPI backend services, video-stream emotion recognition, and API integration, turning multimodal recognition into feedback and training flows.',
        outcome: 'The project received a software copyright and shaped my understanding of AI boundaries in sensitive human-facing scenarios.',
        tags: ['FastAPI', 'OpenCV', 'Vue'],
        link: 'https://github.com/FrancesscaWY/Emotions-Attention-Identify',
      },
      {
        name: 'IntelliHealthCare',
        label: 'Full-stack · Smart Eldercare',
        problem: 'In eldercare, seniors, families, and institutions see different sides of the same situation.',
        contribution:
          'I worked on service recommendation, health records, admin flows, and agent-related product pages, paying attention to consistency across roles and workflows.',
        outcome: 'The project strengthened my experience with Vue 3, NestJS, Prisma, RAG, and multi-agent runtime collaboration.',
        tags: ['Vue 3', 'NestJS', 'Prisma'],
        link: 'https://github.com/FrancesscaWY/IntelliHealthCare',
      },
      {
        name: 'SketchMind',
        label: 'Prototype · AI Feedback',
        problem: 'Feedback in sketch-based learning should not only arrive at the end.',
        contribution:
          'I focused on drawing-task validation, upload analysis, and AI feedback experience, prototyping with Excalidraw, Next.js, Express, and Gemini.',
        outcome: 'This helped me think about how AI feedback can become part of a learning interaction, not just a one-sentence suggestion.',
        tags: ['Next.js', 'Express', 'Gemini'],
        link: 'https://github.com/FrancesscaWY/SketchMind',
      },
    ],
    capabilities: [
      {
        title: 'Clarifying the problem',
        body: 'Literature review, needs analysis, task formulation, metric design, experiment setup, and result reflection.',
        items: ['Literature', 'Metrics', 'Evaluation'],
      },
      {
        title: 'Building the prototype',
        body: 'RAG, LLM APIs, MCP, agent workflows, multimodal recognition, and front-end / back-end integration.',
        items: ['RAG', 'MCP', 'LLM APIs', 'FastAPI', 'Vue / Next.js'],
      },
      {
        title: 'Leaving work reusable',
        body: 'I like writing down interfaces, experiment notes, boundary conditions, and next questions so others can continue the work.',
        items: ['Docs', 'Git', 'Experiment notes'],
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
  renderAbout();
  renderFocus();
  renderWork();
  renderCapabilities();
  renderNotes();
  renderEvidence();
  localStorage.setItem('lang', state.lang);
  updateActiveNav();
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

function renderAbout() {
  const copy = document.querySelector('#aboutCopy');
  copy.innerHTML = data[state.lang].about.map((paragraph) => `<p>${paragraph}</p>`).join('');
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
                : `<span class="quiet-dot" title="${state.lang === 'zh' ? '暂无公开仓库' : 'No public repository'}"></span>`
            }
          </div>
          <h3>${item.name}</h3>
          <p class="work-question">${item.problem}</p>
          <p>${item.contribution}</p>
          <p class="work-outcome">${item.outcome}</p>
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
          <p>${group.body}</p>
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
  document.querySelector('#themeToggle').setAttribute(
    'aria-label',
    state.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
  );
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

const navLinks = Array.from(document.querySelectorAll('.nav-links a, footer a, .brand, .primary-link'));

function targetFromHash(hash) {
  if (!hash || hash === '#') return null;
  return document.getElementById(decodeURIComponent(hash.slice(1)));
}

function updateActiveNav() {
  const current = window.location.hash || '#top';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const isCurrent = link.getAttribute('href') === current;
    link.toggleAttribute('aria-current', isCurrent);
  });
}

function initAnchorScrolling() {
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const hash = link.getAttribute('href');
      const target = targetFromHash(hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', hash);
      updateActiveNav();
    });
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible?.target.id) return;
    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.toggleAttribute('aria-current', link.getAttribute('href') === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: '-28% 0px -58% 0px',
    threshold: [0.12, 0.3, 0.5],
  },
);

function observeSections() {
  document.querySelectorAll('main > section[id]').forEach((section) => sectionObserver.observe(section));
}

document.querySelector('#languageToggle').addEventListener('click', () => {
  state.lang = state.lang === 'zh' ? 'en' : 'zh';
  applyLanguage();
});

document.querySelector('#themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
});

window.addEventListener('hashchange', updateActiveNav);

applyTheme();
applyLanguage();
observeReveals();
initAnchorScrolling();
observeSections();
