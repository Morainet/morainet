// Bilingual content dictionary for Morainet.
// Each entry has { en, zh } strings (or arrays of objects with en/zh fields).

export const content = {
  nav: {
    links: [
      { id: "about", en: "About", zh: "关于" },
      { id: "focus", en: "Focus", zh: "能力" },
      { id: "projects", en: "Projects", zh: "项目" },
      { id: "philosophy", en: "Philosophy", zh: "理念" },
      { id: "community", en: "Community", zh: "社区" },
      { id: "contact", en: "Contact", zh: "联系" },
    ],
    cta: { en: "Join Us", zh: "加入我们" },
  },

  hero: {
    eyebrow: { en: "Inspired by geological evolution", zh: "受地质演化启发" },
    title: { en: "Build. Share. Evolve.", zh: "构建 · 共享 · 演化" },
    subtitle: {
      en: "Morainet builds enduring technology through open collaboration — where ideas accumulate into ecosystems, layer by layer.",
      zh: "Morainet 以开放协作打造持久的技术 —— 让创意层层沉积，最终汇聚成生态。",
    },
    primary: { en: "Explore our work", zh: "探索我们的工作" },
    secondary: { en: "View on GitHub", zh: "前往 GitHub" },
    stats: [
      { value: "AI", en: "Intelligent systems", zh: "智能系统" },
      { value: "OSS", en: "Open by default", zh: "默认开源" },
      { value: "∞", en: "Built to endure", zh: "为持久而建" },
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
        zh: "冰碛（Moraine）是冰川历经千年搬运、沉积下来的物质 —— 它记录着一种缓慢而坚定的力量，在冰川消融之后依然塑造着大地。",
      },
      {
        en: "Morainet applies the same idea to software. Every project, contribution, and idea settles into a growing foundation. Knowledge compounds. Systems endure. Impact lasts.",
        zh: "Morainet 把同样的理念带入软件世界。每一个项目、每一次贡献、每一个想法都沉淀为不断生长的基底。知识在累积，系统在延续，影响力得以持久。",
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
        zh: { t: "持久", d: "我们着眼于长远，而非一时的喧嚣。" },
      },
    ],
  },

  focus: {
    label: { en: "Focus Areas", zh: "能力领域" },
    title: {
      en: "Four layers, one foundation.",
      zh: "四个层面，一个根基。",
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
          d: "应用型 AI、智能体与智能工具，增强人们构建与决策的方式。",
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
          d: "面向社区开放的库与工具 —— 默认开源，为共享而建。",
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
        name: "morainet-core",
        en: { d: "Shared foundations and utilities powering every Morainet project." },
        zh: { d: "支撑每个 Morainet 项目的共享基础与工具库。" },
        tech: ["TypeScript", "Node"],
        url: "https://github.com/morainet",
      },
      {
        name: "strata-ai",
        en: { d: "An agent framework for layering reasoning, tools, and memory." },
        zh: { d: "用于叠加推理、工具与记忆的智能体框架。" },
        tech: ["Python", "LLM"],
        url: "https://github.com/morainet",
      },
      {
        name: "glacier-ui",
        en: { d: "A glassmorphic component system for dark, futuristic interfaces." },
        zh: { d: "面向深色未来风界面的玻璃拟态组件系统。" },
        tech: ["React", "Tailwind"],
        url: "https://github.com/morainet",
      },
      {
        name: "bedrock",
        en: { d: "Infrastructure-as-code templates for resilient, scalable deploys." },
        zh: { d: "面向稳健可扩展部署的基础设施即代码模板。" },
        tech: ["Terraform", "Go"],
        url: "https://github.com/morainet",
      },
      {
        name: "tide-mobile",
        en: { d: "A cross-platform mobile toolkit tuned for performance and craft." },
        zh: { d: "为性能与品质调优的跨平台移动开发工具集。" },
        tech: ["Kotlin", "Swift"],
        url: "https://github.com/morainet",
      },
      {
        name: "sediment",
        en: { d: "A data pipeline that turns raw streams into durable knowledge." },
        zh: { d: "将原始数据流转化为持久知识的数据管道。" },
        tech: ["Rust", "Arrow"],
        url: "https://github.com/morainet",
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
        zh: { t: "共享", d: "我们开放成果，让他人得以借力前行、走得更远。" },
      },
      {
        num: "03",
        en: { t: "Evolve", d: "We let feedback and time refine what we build into something better." },
        zh: { t: "演化", d: "我们让反馈与时间不断打磨，使其变得更好。" },
      },
    ],
  },

  community: {
    label: { en: "Community", zh: "社区" },
    title: {
      en: "Ideas accumulate when people collaborate.",
      zh: "当人们协作，创意便开始沉积。",
    },
    body: {
      en: "Morainet is built in the open by a community of engineers, researchers, and makers. We believe the best technology is shaped by many hands over time — contributed, reviewed, and improved together.",
      zh: "Morainet 由一群工程师、研究者与创造者共同开放构建。我们相信，最好的技术由众人之手随时间塑造 —— 共同贡献、共同评审、共同精进。",
    },
    points: [
      { en: "Open contribution & review", zh: "开放贡献与评审" },
      { en: "Developer-first culture", zh: "开发者优先的文化" },
      { en: "Knowledge shared, not siloed", zh: "知识共享，而非封闭" },
    ],
  },

  contact: {
    label: { en: "Join Us", zh: "加入我们" },
    title: {
      en: "Leave your mark with us.",
      zh: "与我们一起，留下印记。",
    },
    body: {
      en: "Building something enduring? Want to contribute, collaborate, or just talk shop? We'd love to hear from you.",
      zh: "想构建持久的东西？想贡献、协作，或只是聊聊技术？我们很期待与你交流。",
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
export const GITHUB_URL = "https://github.com/morainet";

// Canonical site URL. Override at build/deploy time with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://morainet.dev"
).replace(/\/$/, "");
