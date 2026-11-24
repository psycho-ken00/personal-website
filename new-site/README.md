# 新版个人网站（阶段 E 发布准备中）

本目录是与旧 MkDocs 站点并行开发的 Astro 静态站。中文首页包含合并的 Hero 与 About、5 个项目轮播卡片、双栏实习与三校教育（含所属项目及在校荣誉）、Skills、Research 摘要和 Contact；另有 5 个项目详情页与研究页。视觉与体验验收已完成，目前不参与线上部署。

## 本地运行

需要 Node.js 和 pnpm。在本目录执行：

```sh
pnpm install --frozen-lockfile
pnpm dev
```

预览地址为 `http://localhost:4321/personal-website/`。`/personal-website/` 是现有 GitHub Pages 仓库子路径；站内链接通过 `src/lib/paths.ts` 自动加此前缀。

检查与构建：

```sh
pnpm check
pnpm build
```

构建产物位于 `dist/`，不会由当前 MkDocs 工作流发布。`sitemap.xml` 随静态构建生成。个人定位与公开邮箱位于 `src/data/profile.ts`，实习、教育和技能位于 `src/data/home.ts`，项目正文位于 `src/content/cases/`，研究成果位于 `src/data/research.ts`，v2 色板位于 `src/styles/tokens.css`。项目页由 `src/content.config.ts` 的 schema 校验，并由单个详情模板生成。教育模块校徽来源见 `ASSET_SOURCES.md`。
