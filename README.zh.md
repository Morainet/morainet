# Morainet

<!-- README-I18N:START -->

[English](./README.md) | **汉语**

<!-- README-I18N:END -->

> **构建 · 共享 · 演化** —— 以开放协作打造持久的技术。
> **Build. Share. Evolve.** — Building enduring technology through open collaboration.

**Morainet** 的品牌/营销网站，Morainet 是一个专注于 AI、移动开发、开源和基础设施的技术社区。品牌灵感来源于地质学中的*冰碛（moraine）*概念——冰川随时间推移积累和沉积的碎屑物，象征着积累、演化和持久的影响力。

**在线地址：** https://morainet.vercel.app

---

## 技术栈

| 层级     | 选择                                      |
:| ------ | --------------------------------------- |
| 框架     | [Next.js 14](https://nextjs.org) (App Router) |
| 样式     | [Tailwind CSS 3](https://tailwindcss.com) |
| 动画     | [Framer Motion](https://www.framer.com/motion/) |
| 字体     | Inter (sans) + JetBrains Mono (mono)，通过 `next/font` 加载 |
| 国际化    | 轻量级 React Context（英文 / 中文）          |
| 部署     | [Vercel](https://vercel.com)            |

- **双语（英文 / 中文）** — 导航栏中的语言切换按钮；偏好设置保存在 `localStorage` 中。
- **暗色冰川主题** — 冰川蓝 + 石板灰 + 霓虹青点缀，玻璃态效果、漂移渐变光斑、粒子效果和岩石纹理。
- **SEO 就绪** — 动态生成 `robots.txt`、`sitemap.xml`，以及通过 `next/og` 生成的 Open Graph 图片。

---

## 快速开始

需要 **Node.js 20+**（参见 `.nvmrc`）。

```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器 → http://localhost:3000
```

其他脚本：

```bash
npm run build    # 生产构建（Vercel 运行此命令）
npm run start    # 本地运行生产构建
npm run lint     # next lint
```

> 从压缩包恢复？请运行 `npm ci` 而非 `npm install`，以安装 `package-lock.json` 中锁定的确切版本。

---

## 项目结构

```
morainet/
├── app/
│   ├── layout.js              # 根布局、字体、SEO 元数据
│   ├── page.js                # 组装所有页面区块
│   ├── globals.css            # 主题令牌、玻璃/纹理/噪点工具类
│   ├── robots.js              # → /robots.txt
│   ├── sitemap.js             # → /sitemap.xml
│   └── opengraph-image.js     # → 动态 1200×630 OG 图片 (next/og)
├── components/
│   ├── LanguageProvider.jsx   # 国际化上下文 + useT() 辅助函数
│   ├── LanguageToggle.jsx     # 英文 / 中文 切换开关
│   ├── Nav.jsx                # 吸顶玻璃导航 + 移动端菜单
│   ├── Backdrop.jsx           # 动态氛围背景
│   ├── Reveal.jsx             # 滚动显示包装组件 (Framer Motion)
│   ├── Icons.jsx              # 内联 SVG 图标 + 品牌符号
│   └── sections/              # Hero、About、Focus、Projects、
│                              # Philosophy、Community、Contact、Footer
├── lib/
│   └── content.js             # 所有文案（英文/中文）+ 站点常量
├── tailwind.config.js         # 调色板、关键帧、动画
├── vercel.json                # framework: nextjs
└── .nvmrc                     # Node 20
```

---

## 编辑内容

所有网站文案和关键常量都存放在 **`lib/content.js`** 中。每个文本条目都是一个
`{ en, zh }` 对象，因此编辑两种语言可以在一个地方完成：

```js
hero: {
  title: { en: "Build. Share. Evolve.", zh: "构建 · 共享 · 演化" },
  ...
}
```

站点全局常量（同样在 `lib/content.js` 中）：

| 常量        | 默认值                          | 用途                     |
:| --------- | -------------------------------- | -------------------------------- |
| `EMAIL`      | `morainet.dev@gmail.com`         | 联系邮箱                         |
| `GITHUB_URL` | `https://github.com/morainet`    | GitHub 链接                      |
| `SITE_URL`   | `https://morainet.dev`           | SEO 规范 URL（可通过环境变量覆盖） |

### 主题

颜色、动画和关键帧定义在 `tailwind.config.js` 中
（`glacier`、`slatey`、`neon` 调色板）。全局效果工具类 — `.glass`、
`.strata`、`.noise`、`.text-glacier-gradient` — 位于 `app/globals.css`。

---

## SEO

构建时自动生成：

- `GET /robots.txt`
- `GET /sitemap.xml`
- `GET /opengraph-image` — 1200×630 PNG，用于 `og:image` 和 Twitter 卡片

这些使用基于 `SITE_URL` 的绝对 URL。**通过环境变量设置规范域名**，以确保生产环境中的 URL 正确：

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 部署（Vercel）

该项目已关联到 Vercel 项目。部署方式：

```bash
npx vercel            # 预览部署
npx vercel --prod     # 生产部署
```

首次部署后，在 **Vercel → Settings → Environment Variables** 中设置规范 URL：

```
NEXT_PUBLIC_SITE_URL = https://morainet.vercel.app   # 或你的自定义域名
```

然后重新部署（`npx vercel --prod`），使 OG / 规范 / sitemap URL 生效。

如需每次提交自动部署，请在 Vercel 控制面板中连接 Git 仓库（Settings → Git）。

---

## 许可证

© Morainet. All rights reserved.
