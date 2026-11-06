# Project 1 自查清单

提交前逐项勾掉。

## 仓库 / 部署 (10%)

- [ ] 代码全部 push，线上站点访客可正常访问
- [ ] 根目录是 `index.html`，URL 里看不到 `.html`
- [ ] 共享 CSS 在 `assets/css/`，页面专属 CSS 在页面旁边
- [ ] id / class 命名有意义且风格一致
- [ ] `.gitignore` 存在
- [ ] 仓库里没有任何 `.js` 文件

## 四个页面 (10%)

- [ ] `/` 介绍站点，header 里有到 puzzle 的链接
- [ ] `/game` 填字游戏
- [ ] `/about` 经历与教育
- [ ] `/contact` email / GitHub / LinkedIn / 社交媒体

## Navbar (15%)

- [ ] 四页完全相同
- [ ] 滚动时固定（sticky/fixed）
- [ ] 链接到所有页面
- [ ] 当前页有视觉标识
- [ ] 标题含自己的名字
- [ ] 未滚动时不遮挡内容
- [ ] 用 `<nav>` + 链接列表，不是一排 `div`
- [ ] 纯键盘可用，focus 可见

## 填字游戏 (15%)

- [ ] 网格 ≥ 5×5
- [ ] 用 `display: grid` 搭建
- [ ] 黑格与白格视觉区分明显
- [ ] 线索编号在格子角上
- [ ] Across / Down 用真正的列表元素
- [ ] 格子可输入（`<input maxlength="1">`）
- [ ] 每个 input 都有 accessible name（`aria-label`）
- [ ] 揭示答案支持键盘 + 触屏（`<details>` 或纯 CSS toggle，**不能只靠 `:hover`**）

## 移动端 (10%)

- [ ] 320px 宽度下可用
- [ ] 864px 宽度下可用
- [ ] 桌面能做的事手机都能做
- [ ] 点击目标 ≥ 44×44px（含填字格）
- [ ] 文字 / 图片 / 网格缩放合理

## 必用 HTML 元素 (10%)

- [ ] `header` `nav` `main` `footer`
- [ ] `section` 或 `article`
- [ ] `h1`–`h6` 构成真实大纲层级
- [ ] `a` `img`（有意义 alt）`p`
- [ ] `ul` 或 `ol`
- [ ] `label` + `input`
- [ ] W3C validator 零 error
- [ ] `div` / `span` 用得少

## 必用 CSS 特性 (10%)

- [ ] `font-family`
- [ ] `background` 或 `background-color`
- [ ] `margin` + `padding`
- [ ] `position`
- [ ] `display: grid`
- [ ] `display: flex`
- [ ] `@media`
- [ ] 自定义变量（颜色 + 间距，顶部集中定义）
- [ ] ≥ 2 个不同伪类
- [ ] ≥ 1 个伪元素
- [ ] `:focus-visible` 刻意设计
- [ ] `transition` 或 `transform`

## 无障碍 (10%)

- [ ] 全站纯键盘可用，focus 始终可见
- [ ] 文字对比度 ≥ 4.5:1
- [ ] 所有图片 alt 合适，装饰图用空 alt
- [ ] 每个 input 有 accessible name
- [ ] 没有可点击的 `div`
- [ ] Lighthouse 无障碍分 ≥ 95

## 设计 (10%)

- [ ] 写 CSS 前定好 type scale / 中性色阶 / 一个强调色 / 间距比例
- [ ] 全部定义为自定义变量
- [ ] 正文行宽受限
- [ ] 视觉风格一致
- [ ] 每个颜色和尺寸都能说出理由

## 提交物

- [ ] 线上网站链接
- [ ] GitHub 仓库链接
- [ ] Writeup（见 `WRITEUP.md`，每点 ≥ 3 句）
- [ ] Lighthouse 分数截图
- [ ] 提前 48 小时提交（+5 分）
