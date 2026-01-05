# DashBoard-APP

简洁、可扩展的仪表盘模版，基于 React + TypeScript + Vite 构建，集成 TailwindCSS、Radix UI、图表与数据表组件，适合作为后台管理或数据监控面板的起点。

## 快速概览

- 框架：React 19 + TypeScript
- 构建工具：Vite
- 样式：Tailwind CSS
- 组件：Radix UI（可访问性原语）、自定义 `components/ui` 组件库
- 可视化：Recharts（图表）、`AppBarChart`、`AppRadialChart` 示例组件
- 表格：@tanstack/react-table 驱动的数据表组件

## 技术亮点

- 现代前端栈：使用 Vite + TypeScript 提供极速启动与类型安全开发体验。
- 可定制主题：项目内含 `ThemeProvider`，支持暗色/亮色主题切换并可持久化到存储键位。
- 可访问/组合式 UI：基于 Radix UI 原语封装的 UI 组件（`components/ui`），便于组合与样式复用。
- 组件化仪表盘：Chart、Card、Sidebar、Header 等拆分清晰，便于扩展与复用。
- 数据表能力：集成 `@tanstack/react-table` 提供高性能的可扩展表格功能。
- 响应式布局：示例页面展示了栅格与侧边栏布局，适配不同屏幕。

## 目录结构（简要）

- `src/`：源码根目录
  - `components/`：页面与 UI 组件（含 `ui/` 目录下的原子组件）
  - `assets/`：静态资源
  - `lib/`：工具函数
  - `hooks/`：自定义 Hook（如移动端检测）

## 本地运行

确保已安装 Node.js（推荐 18+），然后：

```bash
npm install
npm run dev
```

构建与预览：

```bash
npm run build
npm run preview
```

## 开发建议

- UI 组件：在 `src/components/ui` 下新增或复用 Radix 原语以保持一致性与可访问性。
- 图表与数据：`src/components` 下包含 `AppBarChart`、`AppRadialChart` 等示例，可直接替换数据或接入后端。
- 类型与规范：项目使用 TypeScript 和 ESLint，建议在新增模块时添加类型定义并遵循现有 linter 规则。

## 贡献

欢迎提交 issue 或 PR。请在变更中尽量保持小而聚焦的提交，包含重现步骤与预期行为。



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
