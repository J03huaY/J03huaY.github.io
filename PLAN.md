# 一天半计划 · Project 1 The Arcade

**周期：10/05（日）全天 + 10/06（一）上午** · 可用约 13h

> 原三天计划已作废（见 git 历史）。当前进度：`tokens.css` 颜色部分完成，其余全空。

## 压缩后的核心策略

1. **不设独立的检查阶段。** 原计划 Day 3 有 3h 的"验证 + 修"，现在没有这个预算。
   改为：每写完一个文件当场验（W3C、键盘、对比度），错了立刻改。
2. **高风险的先做。** 填字游戏（15 分）排在精力最好的时段，不留到最后。
3. **"免费的 20 分"靠清单拿。** HTML 元素（10 分）和 CSS 特性（10 分）不需要额外工时 ——
   边写边对照下面那张清单勾掉就行，但**必须边写边勾**，不能等到最后补。
4. **要牺牲的是设计分（10 分）里的精致度**，不是任何硬性技术项。四页内容写薄一点、
   装饰性元素少一点，但 rubric 上每一条技术要求都要满足。

---

## 今天 10/05 · 约 9h

### A1 · 补完 tokens.css（20 min）

- [ ] 字号 6 个：`--font-size-sm/base/lg/xl/2xl/h1`
- [ ] 间距 9 个：`--space-1` … `--space-9`
- [ ] 其他 3 个：`--radius` `--measure` `--font-sans`
- [ ] **commit**

### A2 · base.css（40 min）

- [ ] 轻量 reset：`box-sizing: border-box`、`margin` 归零、`img { max-width: 100% }`
- [ ] `body` 设 `font-family` `background-color` `color` `line-height: 1.6`
- [ ] h1–h6 套用字号变量，h1 加 `font-weight: 700` + `letter-spacing: -0.02em`
- [ ] 正文容器 `max-width: var(--measure)`
- [ ] **全局 `:focus-visible`** —— 现在就写，别留到明天
- [ ] **commit**

### A3 · Navbar + layout.css（2h）← 15 分，单位时间回报最高

先建一个最小的 `index.html`（只有 header/nav/main/footer 骨架）把导航调通，
再去填内容。

- [ ] `<nav>` + `<ul>` + `<li>` + `<a>`，不用 `div`
- [ ] `position: sticky; top: 0`，未滚动时不遮挡内容
- [ ] 含你名字的站点标题
- [ ] 四个链接：`/` `/game/` `/about/` `/contact/`（**相对路径**，见下方陷阱）
- [ ] 当前页用 `aria-current="page"` 标记 + CSS 选择器做视觉标识（小方块，呼应网格母题）
- [ ] Tab 走一遍，focus 可见
- [ ] 共享 `<footer>` 一起写掉
- [ ] **commit**

### A4 · 填字游戏（3.5h）← 高风险，趁精力好

- [ ] 定题：5×5，用 AI 生成线索和答案也可以（**必须写进 writeup credits**）
- [ ] 黑格安排 4–5 个 → 开放格降到约 20 个，少 5 个 input 就少 5 条 aria-label
- [ ] `display: grid` 画网格，黑格白格视觉区分
- [ ] 线索编号用**伪元素**定位在格子角上 → 顺手满足"≥1 个伪元素"
- [ ] 每个开放格 `<input type="text" maxlength="1">`
- [ ] **每个 input 一条 `aria-label`**，如 `"Row 1, column 2, 3 Across"`
      → 这步最枯燥也最容易被砍，但它同时是无障碍分和填字分的硬性项
- [ ] Across / Down 各一个 `<ol>`
- [ ] 揭示答案用 `<details>/<summary>` —— **绝不能只靠 `:hover`**
- [ ] 格子 ≥ 44×44px，且用 `min()` 之类让它跟视口缩放，别写死 px
- [ ] 手机宽度下自测一次
- [ ] **commit**

### A5 · Landing page 内容（1.5h）

- [ ] 介绍站点，header 里有到 `/game/` 的链接
- [ ] `main` + `section` 或 `article` + `h1` + `p` + `img`（有意义 alt）
- [ ] 用 `display: flex` 排点东西 → 勾掉 CSS 清单那一项
- [ ] **commit**

### A6 · About + Contact（1h，各 30 min）

薄但完整。内容不计分（不查错别字语法，信息可以编）。

- [ ] About：经历 + 教育，`section` 分块，标题层级真实，`ul`/`ol` 列点
- [ ] Contact：email / GitHub / LinkedIn
- [ ] **Contact 页放一个联系表单** → 满足 `label` + `input` 硬性要求（没后端没关系）
- [ ] **commit + push**

---

## 明天 10/06 上午 · 约 4h

### B1 · 移动端（1h）

- [ ] `@media` 查询
- [ ] **320px** 四页逐一检查：无横向滚动、文字不溢出、网格放得下
- [ ] **864px** 四页逐一检查
- [ ] 小屏导航变形（移到底部）
- [ ] 点击目标 ≥ 44×44px，**包括填字格**

### B2 · 无障碍 + Lighthouse（1h）

- [ ] 纯键盘走完四页，focus 全程可见
- [ ] 所有 `img` 有合适 alt，装饰图 `alt=""`，装饰性网格 `aria-hidden="true"`
- [ ] 搜一遍有没有可点击的 `div`
- [ ] **Lighthouse ≥ 95，截图存好**

### B3 · 验证 + 清理（45 min）

- [ ] **W3C validator 四页零 error**
- [ ] 对照下方两张清单逐项确认
- [ ] 确认仓库无任何 `.js` 文件
- [ ] 删掉死代码和注释掉的实验

### B4 · Writeup（45 min）

- [ ] 填 `WRITEUP.md`，每题 ≥ 3 句
- [ ] credits：字体栈（无导入）、AI 协助范围、填字题来源

### B5 · 提交 + buffer（30 min）

- [ ] 最后 push，确认线上是最新版
- [ ] 交：线上链接 + 仓库链接 + writeup + Lighthouse 截图

---

## 边写边勾的清单（这是那"免费的 20 分"）

**HTML 元素** —— 写页面时自然就会用到，但要确认一个都没漏

- [ ] `header` `nav` `main` `footer`（A3 一次搞定）
- [ ] `section` 或 `article`（A5）
- [ ] `h1`–`h6` 真实大纲层级
- [ ] `a` `img`（有 alt） `p`
- [ ] `ul` 或 `ol`（导航是 `ul`，线索是 `ol`，A3/A4 已覆盖）
- [ ] `label` + `input`（A4 填字格 + A6 表单）

**CSS 特性**

- [ ] `font-family`（A2）
- [ ] `background` 或 `background-color`（A2）
- [ ] `margin` 和 `padding`（到处）
- [ ] `position`（A3 sticky 导航）
- [ ] `display: grid`（A4 填字）
- [ ] `display: flex`（A3 导航或 A5）
- [ ] `@media`（B1）
- [ ] 自定义变量（A1）
- [ ] **≥ 2 个不同伪类**（`:hover` `:focus-visible` `:nth-child` 任选两个以上）
- [ ] **≥ 1 个伪元素**（A4 线索编号用 `::before`）
- [ ] `:focus-visible` 刻意设计（A2）
- [ ] `transition` 或 `transform`（A3 导航 hover 或 A4 格子）

---

## 两个会浪费时间的陷阱

**1. 绝对路径会在线上 404。** 站点在 `/the-arcade/` 子路径下，所以：

```html
<!-- 根页面 index.html -->
<link rel="stylesheet" href="assets/css/tokens.css">
<a href="game/">Puzzle</a>

<!-- 子页面 game/index.html -->
<link rel="stylesheet" href="../assets/css/tokens.css">
<a href="../about/">About</a>
```

写成 `/assets/...` 或 `/about/`（开头带斜杠）本地看着正常，一上线全挂。

**2. CSS 引入顺序错了变量就是空的。**

```
tokens.css → base.css → layout.css → 页面自己的 css
```

变量必须先定义。顺序反了不报错，只是颜色字号全部失效，很难查。

---

## 关于加分

提前 48h 的 5 分加分，按这个时间线基本拿不到了。**去确认一下实际 deadline** ——
如果 deadline 其实在 10/08 之后，那 10/06 交完还是能拿到，值得查一眼。
