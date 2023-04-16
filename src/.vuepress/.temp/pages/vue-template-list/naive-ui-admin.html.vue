<template><div><h1 id="naive-ui-admin" tabindex="-1"><a class="header-anchor" href="#naive-ui-admin" aria-hidden="true">#</a> naive-ui-admin</h1>
<!-- more -->
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p><a href="https://github.com/jekip/naive-ui-admin" target="_blank" rel="noopener noreferrer">Naive Ui Admin<ExternalLinkIcon/></a> 完全免费，且可商用，基于 <a href="https://github.com/vuejs/vue-next" target="_blank" rel="noopener noreferrer">Vue3.0<ExternalLinkIcon/></a>、<a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Vite<ExternalLinkIcon/></a>、 <a href="https://www.naiveui.com/" target="_blank" rel="noopener noreferrer">Naive UI<ExternalLinkIcon/></a>、<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript<ExternalLinkIcon/></a> 的中后台解决方案，它使用了最新的前端技术栈，并提炼了典型的业务模型，页面，包括二次封装组件、动态菜单、权限校验、粒子化权限控制等功能，它可以帮助你快速搭建企业级中后台项目， 相信不管是从新技术使用还是其他方面，都能帮助到你。</p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ul>
<li>二次封装实用高扩展性组件</li>
<li>响应式、多主题，多配置，快速集成，开箱即用</li>
<li>最新技术栈，使用 <code v-pre>Vue3</code>、<code v-pre>Typescript</code>、<code v-pre>Pinia</code>、<code v-pre>Vite</code> 等前端前沿技术</li>
<li>强大的鉴权系统，对路由、菜单、功能点等支持<code v-pre>三种鉴权模式</code>，满足不同的业务鉴权需求</li>
<li>持续更新，实用性页面模板功能和交互，随意搭配组合，让构建页面变得简单化</li>
</ul>
<h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2>
<ul>
<li><a href="https://v1.naiveadmin.com" target="_blank" rel="noopener noreferrer">naive-ui-admin<ExternalLinkIcon/></a></li>
</ul>
<p>账号：admin，密码：123456（随意）</p>
<h2 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h2>
<p>如果这个版本的功能和组件，并不能满足您的需求，不妨看看，我们全新 <code v-pre>NaiveAdmin v2</code> 他或许能让您眼前一亮O(∩_∩)O哈哈~</p>
<p><a href="https://www.naiveadmin.com" target="_blank" rel="noopener noreferrer">NaiveAdmin 官网<ExternalLinkIcon/></a></p>
<p><a href="https://pro.naiveadmin.com" target="_blank" rel="noopener noreferrer">NaiveAdmin v2 预览<ExternalLinkIcon/></a></p>
<p><a href="https://www.naiveadmin.com/guide/changelog" target="_blank" rel="noopener noreferrer">NaiveAdmin v2 变更日志<ExternalLinkIcon/></a></p>
<h2 id="新品" tabindex="-1"><a class="header-anchor" href="#新品" aria-hidden="true">#</a> 新品</h2>
<h3 id="antd-vue" tabindex="-1"><a class="header-anchor" href="#antd-vue" aria-hidden="true">#</a> Antd vue</h3>
<p>新产品，如果您选的技术栈是 <code v-pre>Antd</code> 的话，不妨看看</p>
<p><a href="https://antd.naiveadmin.com" target="_blank" rel="noopener noreferrer">NaiveAdmin Antd 预览<ExternalLinkIcon/></a></p>
<h3 id="arco-vue" tabindex="-1"><a class="header-anchor" href="#arco-vue" aria-hidden="true">#</a> Arco vue</h3>
<p>新产品，智能设计体系，连接轻盈体验</p>
<p><a href="https://arco.naiveadmin.com" target="_blank" rel="noopener noreferrer">NaiveAdmin Arco 预览<ExternalLinkIcon/></a></p>
<h3 id="element-plus" tabindex="-1"><a class="header-anchor" href="#element-plus" aria-hidden="true">#</a> Element Plus</h3>
<p>新产品，面向设计师和开发者的组件库</p>
<p><a href="https://element.naiveadmin.com" target="_blank" rel="noopener noreferrer">Element Plus Admin 预览<ExternalLinkIcon/></a></p>
<p>以上版本同时具备 <code v-pre>NaiveAdmin v2</code> 功能/组件/页面，一如既往、开箱即用，欢迎前往查看。</p>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<p><a href="https://docs.naiveadmin.com" target="_blank" rel="noopener noreferrer">v1文档地址<ExternalLinkIcon/></a></p>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<ul>
<li><a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">node<ExternalLinkIcon/></a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git<ExternalLinkIcon/></a> -项目开发环境</li>
<li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite<ExternalLinkIcon/></a> - 熟悉 vite 特性</li>
<li><a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3<ExternalLinkIcon/></a> - 熟悉 Vue 基础语法</li>
<li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript<ExternalLinkIcon/></a> - 熟悉<code v-pre>TypeScript</code>基本语法</li>
<li><a href="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">Es6+<ExternalLinkIcon/></a> - 熟悉 es6 基本语法</li>
<li><a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue-Router-Next<ExternalLinkIcon/></a> - 熟悉 vue-router 基本使用</li>
<li><a href="https://www.naiveui.com/" target="_blank" rel="noopener noreferrer">Naive-ui-admin<ExternalLinkIcon/></a> - ui 基本使用</li>
<li><a href="https://github.com/nuysoft/Mock" target="_blank" rel="noopener noreferrer">Mock.js<ExternalLinkIcon/></a> - mockjs 基本语法</li>
</ul>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<ul>
<li>获取项目代码</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">git </span><span style="color: #98C379">clone</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">https://github.com/jekip/naive-ui-admin.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>安装依赖</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">naive-ui-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">install</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>打包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">build</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h2>
<p><RouterLink to="/vue-template-list/CHANGELOG.html">CHANGELOG</RouterLink></p>
<h2 id="如何贡献" tabindex="-1"><a class="header-anchor" href="#如何贡献" aria-hidden="true">#</a> 如何贡献</h2>
<p>非常欢迎你的加入！ <a href="https://github.com/jekip/naive-ui-admin/issues" target="_blank" rel="noopener noreferrer">提一个 Issue<ExternalLinkIcon/></a> 或者提交一个 Pull Request。</p>
<p><strong>Pull Request:</strong></p>
<ol>
<li>Fork 代码!</li>
<li>创建自己的分支: <code v-pre>git checkout -b feat/xxxx</code></li>
<li>提交你的修改: <code v-pre>git commit -am 'feat(function): add xxxxx'</code></li>
<li>推送您的分支: <code v-pre>git push origin feat/xxxx</code></li>
<li>提交<code v-pre>pull request</code></li>
</ol>
<h2 id="git-贡献提交规范" tabindex="-1"><a class="header-anchor" href="#git-贡献提交规范" aria-hidden="true">#</a> Git 贡献提交规范</h2>
<ul>
<li>
<p>参考 <a href="https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a> 规范 (<a href="https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular" target="_blank" rel="noopener noreferrer">Angular<ExternalLinkIcon/></a>)</p>
<ul>
<li><code v-pre>feat</code> 增加新功能</li>
<li><code v-pre>fix</code> 修复问题/BUG</li>
<li><code v-pre>style</code> 代码风格相关无影响运行结果的</li>
<li><code v-pre>perf</code> 优化/性能提升</li>
<li><code v-pre>refactor</code> 重构</li>
<li><code v-pre>revert</code> 撤销修改</li>
<li><code v-pre>test</code> 测试相关</li>
<li><code v-pre>docs</code> 文档/注释</li>
<li><code v-pre>chore</code> 依赖更新/脚手架配置修改等</li>
<li><code v-pre>workflow</code> 工作流改进</li>
<li><code v-pre>ci</code> 持续集成</li>
<li><code v-pre>types</code> 类型定义文件更改</li>
<li><code v-pre>wip</code> 开发中</li>
</ul>
</li>
</ul>
<h2 id="浏览器支持" tabindex="-1"><a class="header-anchor" href="#浏览器支持" aria-hidden="true">#</a> 浏览器支持</h2>
<p>本地开发推荐使用<code v-pre>Chrome 80+</code> 浏览器</p>
<p>支持现代浏览器, 不支持 IE</p>
<table>
<thead>
<tr>
<th style="text-align:center"><a href="http://godban.github.io/browsers-support-badges" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" /><ExternalLinkIcon/></a>IE</th>
<th style="text-align:center"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" /><ExternalLinkIcon/></a>Edge</th>
<th style="text-align:center"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><ExternalLinkIcon/></a>Firefox</th>
<th style="text-align:center"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><ExternalLinkIcon/></a>Chrome</th>
<th style="text-align:center"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><ExternalLinkIcon/></a>Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">not support</td>
<td style="text-align:center">last 2 versions</td>
<td style="text-align:center">last 2 versions</td>
<td style="text-align:center">last 2 versions</td>
<td style="text-align:center">last 2 versions</td>
</tr>
</tbody>
</table>
</div></template>


