const translations = {
  zh: {
    nav: {
      research: '研究',
      projects: '项目',
      experience: '经历',
      contact: '联系',
      lang: 'EN',
    },
    hero: {
      eyebrow: 'Software Engineering · Intelligent Education · Trustworthy AI',
      kicker: '个人主页',
      title: '软件工程本科生，关注智能教育与可信 AI 系统。',
      lede:
        '我是西南大学软件工程本科生，关注 RAG 增强的智能教育、可信 AI 系统、Agent/MCP 工作流与应用型原型。我的研究和项目都从具体使用场景出发：知识从哪里来，模型怎样调用工具，系统如何暴露依据与失败。',
      primary: '查看项目',
      role: '西南大学 · 软件工程本科',
    },
    facts: {
      educationLabel: '教育',
      education: '西南大学（211），软件工程，2023.09 至今',
      rankLabel: '成绩',
      rank: '综合排名 8/117，成绩排名 12/117，GPA 3.61/5.00',
      focusLabel: '方向',
      focus: '智能教育、RAG、Agent、LLM 评估、应用原型',
    },
    metrics: {
      paper: 'Demo Track 论文第三作者',
      rank: '成绩排名 12/117',
      awards: '挑战杯国特与计设国二',
      copyright: '软件著作权',
    },
    research: {
      eyebrow: 'Research',
      title: '我的研究兴趣集中在智能教育与可信 AI 系统。',
      lede:
        '我关心大模型如何进入教育任务、如何组织知识与交互流程，也关心结果是否可以被解释、复查和迭代。相比只展示模型能力，我更希望系统能留下依据、边界和评估记录。',
      items: {
        rise: {
          title: 'RAG 增强智能教育系统',
          body:
            '围绕教育知识库构建、个性化问答、沉浸式课堂与学习分析开展系统研究。相关成果发表于 The Web Conference 2026 Demo Track，本人为第三作者。',
        },
        eval: {
          title: '智能体记忆与题目自动评估',
          body:
            '梳理检索式记忆、参数化记忆、工作流记忆等方法，并基于 Bloom 教育目标分类设计题目认知层级、认知一致性与可解性评估框架。',
        },
        system: {
          title: 'RAG / Agent 工程化流程',
          body:
            '关注知识来源、检索增强、工具调用边界、MCP 控制流程与人机交互如何共同决定一个 AI 系统是否可靠可用。',
        },
      },
    },
    paper: {
      eyebrow: 'Publication',
      title: 'RISE: A Retrieval-Augmented Generation Enhanced Immersive System for Education',
      body:
        'Guo Chen, Haowei Tang, Yan Wei, Yuming Wang, Haoyang Zhang, Yikang Hou, Maolin Zheng, Junjie Huang. The Web Conference 2026 Demo Track, 2026.',
    },
    projects: {
      eyebrow: 'Selected Projects',
      title: '项目不是堆技术名词，而是我定义问题、搭系统和验证结果的证据。',
      lede: '这里选择了最能体现研究兴趣、工程实现与应用意识的工作。更多仓库可以在 GitHub 查看。',
      items: {
        rise: {
          name: '灵知寓学 / RISE',
          body:
            '基于 LLM、RAG、MCP 与数字人技术的智能教育系统，支持教育知识问答、课堂互动与教学辅助。我负责数字人交互设计、MCP 教学流程、系统原型、前端开发与 LLM 接口联调。',
          outcome: '成果：中国大学生计算机设计大赛国家级二等奖；WWW 2026 Demo Track 论文。',
        },
        virtour: {
          body:
            '智能体驱动的沉浸式虚拟旅游系统，融合景点问答、语音交互、数字人导览与全景漫游。我负责 TTS 流式链路、MCP 控制流程、数字人接入与前端核心开发。',
          outcome: '成果：第 19 届“挑战杯”国家级特等奖。',
        },
        ihc: {
          body:
            '面向长者、家属与机构运营团队的智慧康养平台，覆盖健康档案、监测、服务预约、内容社区、RAG 与多智能体能力。我关注多角色流程下的页面联调与一致性。',
          outcome: '公开仓库采用 Monorepo，包含用户端、后台端、后端与文档。',
        },
        emo: {
          name: '多模态情绪识别社交辅助系统',
          body:
            '针对自闭症儿童情绪识别与社交困难，构建融合面部、语音、文本信息的辅助系统；公开识别模块基于 FastAPI、OpenCV、DeepFace 与 Mediapipe。',
          outcome: '成果：软件著作权 1 项。',
        },
        sketch: {
          body:
            '草图学习反馈原型，支持绘图任务校验、作品分析与 AI 反馈，让学习建议嵌入绘制过程。项目使用 Next.js、Excalidraw、Express 与 Gemini。',
          outcome: '关注点：把 AI 反馈从“结果点评”推进到“过程支持”。',
        },
        homework: {
          name: '在线作业管理系统',
          body:
            '面向班级作业收取的 Web 应用，支持管理员发布、编辑、收取作业，学生登录、查看与提交作业。我独立完成前后端开发、部署及运维。',
          outcome: '公开仓库包含前端与后端两个部分。',
        },
      },
    },
    experience: {
      eyebrow: 'Experience & Skills',
      title: '我希望自己既能提出问题，也能把系统落到真实流程里。',
      cards: {
        research: {
          title: '研究与评估',
          body: '文献调研、任务定义、指标拆解、实验验证、学习评价与 LLM 评估。',
        },
        ai: {
          title: 'AI 系统实现',
          body: 'RAG、MCP、Agent workflow、LLM API、多模态识别、TTS 与数字人交互。',
        },
        engineering: {
          title: '工程与协作',
          body: '前后端开发、接口联调、原型设计、部署运维、文档沉淀与版本管理。',
        },
      },
    },
    timeline: {
      eyebrow: 'Milestones',
      title: '一些可以快速核对的节点。',
      items: {
        paper: 'RISE 论文发表于 The Web Conference 2026 Demo Track；获得软件著作权 1 项。',
        awards: '获得第 19 届“挑战杯”国家级特等奖、中国大学生计算机设计大赛国家级二等奖。',
        research: '参与 RAG 智能教育、智能体记忆、题目自动评估等研究与实验验证。',
        projects: '完成情绪识别、作业管理、智慧康养、虚拟导览等多类应用系统开发。',
        start: '进入西南大学软件工程专业，系统学习计算机基础与软件工程。',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: '欢迎联系我讨论智能教育、可信 AI、RAG/Agent 系统或应用原型。',
    },
    footer: {
      built: 'Built for GitHub Pages · Last updated 2026',
      back: '回到顶部',
    },
  },
  en: {
    nav: {
      research: 'Research',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
      lang: '中',
    },
    hero: {
      eyebrow: 'Software Engineering · Intelligent Education · Trustworthy AI',
      kicker: 'Personal Homepage',
      title: 'Software engineering undergraduate focused on intelligent education and trustworthy AI systems.',
      lede:
        'I am a software engineering undergraduate at Southwest University. My interests include RAG-enhanced intelligent education, trustworthy AI systems, Agent/MCP workflows, and applied prototypes. I start from concrete use cases: where knowledge comes from, how models call tools, and how a system exposes evidence and failure.',
      primary: 'View projects',
      role: 'Southwest University · Software Engineering',
    },
    facts: {
      educationLabel: 'Education',
      education: 'Southwest University (Project 211), Software Engineering, since Sep 2023',
      rankLabel: 'Academics',
      rank: 'Comprehensive rank 8/117, academic rank 12/117, GPA 3.61/5.00',
      focusLabel: 'Focus',
      focus: 'Intelligent education, RAG, Agent systems, LLM evaluation, applied prototypes',
    },
    metrics: {
      paper: 'Third author, Demo Track paper',
      rank: 'Academic rank 12/117',
      awards: 'Challenge Cup special prize and national contest second prize',
      copyright: 'Software copyright',
    },
    research: {
      eyebrow: 'Research',
      title: 'My research interests center on intelligent education and trustworthy AI systems.',
      lede:
        'I care about how large models enter educational tasks, how knowledge and interaction flows are organized, and whether results can be explained, reviewed, and iterated. Beyond showing model capability, I want systems to preserve evidence, boundaries, and evaluation traces.',
      items: {
        rise: {
          title: 'RAG-enhanced intelligent education',
          body:
            'I work around educational knowledge bases, personalized QA, immersive classrooms, and learning analytics. The related work was published in The Web Conference 2026 Demo Track, where I am the third author.',
        },
        eval: {
          title: 'Agent memory and automatic question assessment',
          body:
            'I review retrieval-based, parametric, and workflow memory methods, and design a Bloom-based framework for cognitive-level, cognitive-consistency, and solvability assessment.',
        },
        system: {
          title: 'RAG / Agent engineering workflows',
          body:
            'I focus on knowledge sources, retrieval augmentation, tool boundaries, MCP control flows, and human-system interaction as the conditions for reliable AI systems.',
        },
      },
    },
    paper: {
      eyebrow: 'Publication',
      title: 'RISE: A Retrieval-Augmented Generation Enhanced Immersive System for Education',
      body:
        'Guo Chen, Haowei Tang, Yan Wei, Yuming Wang, Haoyang Zhang, Yikang Hou, Maolin Zheng, Junjie Huang. The Web Conference 2026 Demo Track, 2026.',
    },
    projects: {
      eyebrow: 'Selected Projects',
      title: 'Projects are evidence of how I define problems, build systems, and verify outcomes.',
      lede: 'I selected work that best reflects my research interests, engineering practice, and sense for real use. More repositories are available on GitHub.',
      items: {
        rise: {
          name: 'Lingzhi Yuxue / RISE',
          body:
            'An intelligent education system built with LLMs, RAG, MCP, and digital-human technology. I worked on digital-human interaction, MCP teaching flows, system prototyping, frontend development, and LLM API integration.',
          outcome: 'Outcome: national second prize in China Collegiate Computing Contest; WWW 2026 Demo Track paper.',
        },
        virtour: {
          body:
            'An agent-driven immersive virtual tourism system combining scenic QA, voice interaction, digital-human guidance, and panoramic touring. I worked on streaming TTS, MCP control flows, digital-human integration, and core frontend development.',
          outcome: 'Outcome: National Special Prize in the 19th Challenge Cup.',
        },
        ihc: {
          body:
            'A smart eldercare platform for older adults, families, and institutional teams, covering health archives, monitoring, service booking, community content, RAG, and multi-agent capabilities. I focus on consistency across multi-role flows.',
          outcome: 'The public Monorepo includes user web, admin web, backend services, and documentation.',
        },
        emo: {
          name: 'Multimodal Emotion Recognition Social Assistance System',
          body:
            'A social-assistance system for autistic children, integrating facial, speech, and text signals. The public recognition module is built with FastAPI, OpenCV, DeepFace, and Mediapipe.',
          outcome: 'Outcome: one software copyright.',
        },
        sketch: {
          body:
            'A sketch-learning feedback prototype for task validation, drawing analysis, and AI feedback during the learning process. It uses Next.js, Excalidraw, Express, and Gemini.',
          outcome: 'Focus: moving AI feedback from end-of-task comments into process support.',
        },
        homework: {
          name: 'Online Homework Management System',
          body:
            'A web app for class assignment collection, supporting admin publishing/editing/collecting and student login/viewing/submission. I completed full-stack development, deployment, and maintenance independently.',
          outcome: 'The public repositories include frontend and backend parts.',
        },
      },
    },
    experience: {
      eyebrow: 'Experience & Skills',
      title: 'I want to ask meaningful questions and also place systems into real workflows.',
      cards: {
        research: {
          title: 'Research & evaluation',
          body: 'Literature review, task formulation, metric decomposition, experimental validation, learning assessment, and LLM evaluation.',
        },
        ai: {
          title: 'AI system implementation',
          body: 'RAG, MCP, agent workflows, LLM APIs, multimodal recognition, TTS, and digital-human interaction.',
        },
        engineering: {
          title: 'Engineering & collaboration',
          body: 'Frontend and backend development, API integration, prototyping, deployment, documentation, and version control.',
        },
      },
    },
    timeline: {
      eyebrow: 'Milestones',
      title: 'A few quickly checkable milestones.',
      items: {
        paper: 'RISE was published in The Web Conference 2026 Demo Track; received one software copyright.',
        awards: 'Won the National Special Prize in the 19th Challenge Cup and a national second prize in China Collegiate Computing Contest.',
        research: 'Worked on RAG-based intelligent education, agent memory, automatic question assessment, and experimental validation.',
        projects: 'Built applications in emotion recognition, homework management, smart eldercare, and virtual tourism.',
        start: 'Entered Software Engineering at Southwest University and began systematic study in computer science and software engineering.',
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Feel free to reach out about intelligent education, trustworthy AI, RAG/Agent systems, or applied prototypes.',
    },
    footer: {
      built: 'Built for GitHub Pages · Last updated 2026',
      back: 'Back to top',
    },
  },
};

const html = document.documentElement;
const languageToggle = document.querySelector('#languageToggle');
const themeToggle = document.querySelector('#themeToggle');

const getNestedValue = (source, path) =>
  path.split('.').reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), source);

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations.zh;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const text = getNestedValue(dictionary, element.dataset.i18n);
    if (text !== undefined) {
      element.textContent = text;
    }
  });
  html.lang = lang === 'zh' ? 'zh-CN' : 'en';
  localStorage.setItem('preferred-language', lang);
};

const applyTheme = (theme) => {
  html.dataset.theme = theme;
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  localStorage.setItem('preferred-theme', theme);
};

const preferredLanguage = localStorage.getItem('preferred-language') || 'zh';
const preferredTheme =
  localStorage.getItem('preferred-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

applyLanguage(preferredLanguage);
applyTheme(preferredTheme);

languageToggle?.addEventListener('click', () => {
  const nextLanguage = html.lang === 'zh-CN' ? 'en' : 'zh';
  applyLanguage(nextLanguage);
});

themeToggle?.addEventListener('click', () => {
  applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark');
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('no-motion');
}
