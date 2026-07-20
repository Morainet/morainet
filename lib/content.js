// Bilingual content dictionary for Morainet.
// Each entry has { en, zh } strings (or arrays of objects with en/zh fields).

export const content = {
  nav: {
    links: [
      { id: "about", en: "About", zh: "关于" },
      { id: "focus", en: "Focus", zh: "能力" },
      { id: "process", en: "Process", zh: "方式" },
      { id: "projects", en: "Projects", zh: "项目" },
      { id: "journey", en: "Journey", zh: "历程" },
      { id: "philosophy", en: "Philosophy", zh: "理念" },
      { id: "contact", en: "Contact", zh: "联系" },
    ],
    cta: { en: "Join Us", zh: "加入我们" },
  },

  hero: {
    eyebrow: { en: "Inspired by geological evolution", zh: "受地质演化启发" },
    established: { en: "Est. 2026", zh: "2026 创立" },
    title: { en: "Build. Share. Evolve.", zh: "构建 · 共享 · 演化" },
    subtitle: {
      en: "Morainet builds enduring technology through open collaboration — where ideas accumulate into ecosystems, layer by layer, the way a glacier lays down stone over millennia.",
      zh: "Morainet 以开放协作打造持久的技术 —— 让创意如冰川搬运岩石般层层沉积,历经岁月,最终汇聚成生态。",
    },
    primary: { en: "Explore our work", zh: "探索我们的工作" },
    secondary: { en: "View on GitHub", zh: "前往 GitHub" },
    stats: [
      { value: "AI", en: "Intelligent systems", zh: "智能系统" },
      { value: "OSS", en: "Open by default", zh: "默认开源" },
      { value: "∞", en: "Built to endure", zh: "为持久而建" },
    ],
  },

  stats: {
    label: { en: "By the numbers", zh: "数字一览" },
    items: [
      { value: "7", en: "Open repositories", zh: "开源仓库" },
      { value: "4", en: "Focus areas", zh: "能力领域" },
      { value: "2026", en: "Founded", zh: "成立于" },
      { value: "100%", en: "Open by default", zh: "默认开源" },
    ],
  },

  about: {
    label: { en: "About Morainet", zh: "关于 Morainet" },
    title: {
      en: "Technology that leaves a lasting mark.",
      zh: "构建留下时代印记的技术。",
    },
    body: [
      {
        en: "A moraine is the accumulated debris a glacier carries and deposits over millennia — a record of slow, relentless force shaping the landscape long after the ice is gone.",
        zh: "冰碛（Moraine）是冰川历经千年搬运、沉积下来的物质 —— 它记录着一种缓慢而坚定的力量,在冰川消融之后依然塑造着大地。",
      },
      {
        en: "Morainet applies the same idea to software. Every project, contribution, and idea settles into a growing foundation. Knowledge compounds. Systems endure. Impact lasts.",
        zh: "Morainet 把同样的理念带入软件世界。每一个项目、每一次贡献、每一个想法都沉淀为不断生长的基底。知识在累积,系统在延续,影响力得以持久。",
      },
    ],
    pillars: [
      {
        en: { t: "Accumulation", d: "Small contributions compound into lasting foundations." },
        zh: { t: "沉淀", d: "微小的贡献累积成持久的基础。" },
      },
      {
        en: { t: "Evolution", d: "Systems adapt, refine, and improve over time." },
        zh: { t: "演化", d: "系统随时间不断适应、精炼与改进。" },
      },
      {
        en: { t: "Endurance", d: "We build for the long arc, not the news cycle." },
        zh: { t: "持久", d: "我们着眼于长远,而非一时的喧嚣。" },
      },
    ],
  },

  focus: {
    label: { en: "Focus Areas", zh: "能力领域" },
    title: {
      en: "Four layers, one foundation.",
      zh: "四个层面,一个根基。",
    },
    subtitle: {
      en: "Like sediment settling into rock, our work builds up in distinct but connected layers.",
      zh: "如同沉积物固结成岩,我们的工作在彼此独立又相连的层面上不断累积。",
    },
    items: [
      {
        icon: "ai",
        en: {
          t: "Artificial Intelligence",
          d: "Applied AI, agents, and intelligent tooling that augment how people build and decide.",
        },
        zh: {
          t: "人工智能",
          d: "应用型 AI、智能体与智能工具,增强人们构建与决策的方式。",
        },
      },
      {
        icon: "mobile",
        en: {
          t: "Mobile Development",
          d: "Native and cross-platform apps engineered for performance, scale, and craft.",
        },
        zh: {
          t: "移动开发",
          d: "为性能、规模与品质而生的原生与跨平台应用。",
        },
      },
      {
        icon: "oss",
        en: {
          t: "Open Source",
          d: "Libraries and tools released to the community — open by default, built to be shared.",
        },
        zh: {
          t: "开源生态",
          d: "面向社区开放的库与工具 —— 默认开源,为共享而建。",
        },
      },
      {
        icon: "infra",
        en: {
          t: "Infrastructure",
          d: "Resilient digital infrastructure: the bedrock layers everything else is built upon.",
        },
        zh: {
          t: "基础设施",
          d: "稳健的数字基础设施 —— 承载万物的基岩层。",
        },
      },
    ],
  },

  process: {
    label: { en: "How We Work", zh: "我们的方式" },
    title: { en: "From idea to enduring layer.", zh: "从想法,到持久的一层。" },
    subtitle: {
      en: "Every project moves through the same patient cycle — research, build, open, refine.",
      zh: "每个项目都经历同样耐心的循环 —— 探索、构建、开放、精炼。",
    },
    steps: [
      {
        num: "01",
        en: { t: "Research", d: "We study the terrain — problems, prior art, and real needs — before moving a single stone." },
        zh: { t: "探索", d: "在搬动第一块石头之前,先勘察地形 —— 问题、已有方案与真实需求。" },
      },
      {
        num: "02",
        en: { t: "Build", d: "We prototype fast and engineer for the long run, choosing durability over hype." },
        zh: { t: "构建", d: "快速原型、长线工程,选择耐久而非追逐潮流。" },
      },
      {
        num: "03",
        en: { t: "Open", d: "We release in the open so others can review, reuse, and build on top." },
        zh: { t: "开放", d: "公开发布,让他人得以评审、复用并在其上继续构建。" },
      },
      {
        num: "04",
        en: { t: "Refine", d: "Feedback and time compound — each iteration settles into a stronger foundation." },
        zh: { t: "精炼", d: "反馈与时间不断累积 —— 每次迭代都沉淀为更坚实的基础。" },
      },
    ],
  },

  projects: {
    label: { en: "Featured Projects", zh: "精选项目" },
    title: { en: "What we're building.", zh: "我们正在构建的。" },
    subtitle: {
      en: "A selection of open work. Each repository is a layer in the sediment.",
      zh: "部分开放成果。每个仓库都是沉积中的一层。",
    },
    viewAll: { en: "View all on GitHub", zh: "在 GitHub 查看全部" },
    items: [
      {
        name: "morainet-ai",
        en: { d: "A lightweight, embeddable AI Agent runtime framework — turn any LLM into an agent that reasons, calls tools, and remembers." },
        zh: { d: "轻量、可嵌入的 AI Agent 运行时框架 —— 让任意大模型具备推理、工具调用与记忆能力。" },
        tech: ["Python", "LLM", "Agents"],
        lang: "Python",
        stars: 1,
        url: "https://github.com/Morainet/morainet-ai",
      },
      {
        name: "music-gen-platform",
        en: { d: "A self-hosted text-to-music platform: a working product on top of MusicGen, paired with a from-scratch research track for the underlying generation algorithms." },
        zh: { d: "自部署模型 + 算法自主研究的音乐生成平台 —— 基于 MusicGen 的可运行产品,叠加从零实现的生成算法研究线。" },
        tech: ["Python", "Spring Boot", "React"],
        lang: "Python",
        stars: 1,
        url: "https://github.com/Morainet/music-gen-platform",
      },
      {
        name: "SpiritDex",
        en: { d: "A data-driven companion wiki for a mobile game — full bestiary, type tools, damage calculators, and an AI assistant with RAG Q&A and image recognition." },
        zh: { d: "数据驱动的「洛克王国手游」攻略站 —— 精灵图鉴、属性工具、伤害计算器,以及具备 RAG 问答与图片识别的 AI 助手。" },
        tech: ["Next.js", "Spring Boot", "pgvector"],
        lang: "Java",
        stars: 1,
        url: "https://github.com/Morainet/SpiritDex",
      },
      {
        name: "widget-kit",
        en: { d: "An Android widget development toolkit built on Jetpack Glance — state machines, scheduling, animation, preview, debugging, and a YAML/JSON DSL." },
        zh: { d: "基于 Jetpack Glance 的 Android Widget 开发工具链 —— 状态机、调度、动画、预览、调试与 YAML/JSON DSL。" },
        tech: ["Kotlin", "Glance", "Android"],
        lang: "Kotlin",
        stars: 1,
        url: "https://github.com/Morainet/widget-kit",
      },
      {
        name: "livekit",
        en: { d: "A high-performance client-side Live Activities SDK for Android — renders native Android 16 ProgressStyle updates and gracefully degrades on older devices." },
        zh: { d: "面向 Android 的高性能客户端 Live Activities SDK —— 渲染原生 Android 16 ProgressStyle 更新,并在旧设备上优雅降级。" },
        tech: ["Kotlin", "Android 16", "SDK"],
        lang: "Kotlin",
        stars: 0,
        url: "https://github.com/Morainet/livekit",
      },
      {
        name: "morainet",
        en: { d: "This very site — the marketing & brand home for Morainet, built with Next.js, Tailwind, and Framer Motion." },
        zh: { d: "就是本站 —— Morainet 的品牌宣传主页,基于 Next.js、Tailwind 与 Framer Motion 构建。" },
        tech: ["Next.js", "Tailwind", "Framer"],
        lang: "JavaScript",
        stars: 0,
        url: "https://github.com/Morainet/morainet",
      },
    ],
  },

  journey: {
    label: { en: "Our Journey", zh: "发展历程" },
    title: { en: "Layer by layer.", zh: "一层,又一层。" },
    subtitle: {
      en: "Like a glacier, we move slowly and leave a record. A few markers along the way.",
      zh: "如同冰川,我们缓慢前行、留下印记。这是沿途的几处坐标。",
    },
    milestones: [
      {
        year: "2026.06",
        en: { t: "The first layer", d: "Morainet forms around a simple belief: technology should accumulate, not churn. The brand site and the first repositories go public." },
        zh: { t: "第一层", d: "Morainet 因一个朴素的信念而聚合:技术应当沉淀,而非空转。品牌站点与首批仓库相继上线。" },
      },
      {
        year: "2026.06",
        en: { t: "AI & mobile take shape", d: "morainet-ai establishes our agent runtime kernel, while widget-kit begins the Android tooling line." },
        zh: { t: "AI 与移动初成形", d: "morainet-ai 确立了智能体运行时内核,widget-kit 开启了 Android 工具链线。" },
      },
      {
        year: "2026.07",
        en: { t: "Going deeper", d: "SpiritDex ships a data-driven game wiki with RAG, and livekit pushes a Live Activities SDK for Android 16." },
        zh: { t: "向下扎根", d: "SpiritDex 上线数据驱动的游戏攻略站与 RAG 问答,livekit 推出面向 Android 16 的 Live Activities SDK。" },
      },
      {
        year: "Next",
        en: { t: "The long arc", d: "We keep depositing — building tools meant to outlast the trends that made them." },
        zh: { t: "长线", d: "我们继续沉积 —— 打造能超越潮流本身、长久留存的工具。" },
      },
    ],
  },

  philosophy: {
    label: { en: "Philosophy", zh: "理念" },
    title: { en: "Build. Share. Evolve.", zh: "构建 · 共享 · 演化" },
    steps: [
      {
        num: "01",
        en: { t: "Build", d: "We make real, useful, durable things — software meant to last." },
        zh: { t: "构建", d: "我们打造真实、有用、持久的事物 —— 经得起时间的软件。" },
      },
      {
        num: "02",
        en: { t: "Share", d: "We open our work so others can stand on it and go further." },
        zh: { t: "共享", d: "我们开放成果,让他人得以借力前行、走得更远。" },
      },
      {
        num: "03",
        en: { t: "Evolve", d: "We let feedback and time refine what we build into something better." },
        zh: { t: "演化", d: "我们让反馈与时间不断打磨,使其变得更好。" },
      },
    ],
  },

  community: {
    label: { en: "Community", zh: "社区" },
    title: {
      en: "Ideas accumulate when people collaborate.",
      zh: "当人们协作,创意便开始沉积。",
    },
    body: {
      en: "Morainet is built in the open by a community of engineers, researchers, and makers. We believe the best technology is shaped by many hands over time — contributed, reviewed, and improved together.",
      zh: "Morainet 由一群工程师、研究者与创造者共同开放构建。我们相信,最好的技术由众人之手随时间塑造 —— 共同贡献、共同评审、共同精进。",
    },
    points: [
      { en: "Open contribution & review", zh: "开放贡献与评审" },
      { en: "Developer-first culture", zh: "开发者优先的文化" },
      { en: "Knowledge shared, not siloed", zh: "知识共享,而非封闭" },
    ],
  },

  contact: {
    label: { en: "Join Us", zh: "加入我们" },
    title: {
      en: "Leave your mark with us.",
      zh: "与我们一起,留下印记。",
    },
    body: {
      en: "Building something enduring? Want to contribute, collaborate, or just talk shop? We'd love to hear from you.",
      zh: "想构建持久的东西？想贡献、协作,或只是聊聊技术？我们很期待与你交流。",
    },
    email: { en: "Email us", zh: "给我们发邮件" },
    github: { en: "Contribute on GitHub", zh: "在 GitHub 上贡献" },
  },

  footer: {
    tagline: {
      en: "Building enduring technology through open collaboration.",
      zh: "以开放协作打造持久的技术。",
    },
    rights: { en: "All rights reserved.", zh: "保留所有权利。" },
  },
};

export const EMAIL = "morainet.dev@gmail.com";
export const GITHUB_URL = "https://github.com/Morainet";

// Canonical site URL. Override at build/deploy time with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://morainet.dev"
).replace(/\/$/, "");
