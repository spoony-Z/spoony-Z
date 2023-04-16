<template><div><h1 id="vue-vben-admin" tabindex="-1"><a class="header-anchor" href="#vue-vben-admin" aria-hidden="true">#</a> Vue vben admin</h1>
<!-- more -->
<div align="center"> <a href="https://github.com/anncwb/vue-vben-admin"> <img alt="VbenAdmin Logo" width="200" height="200" src="https://anncwb.github.io/anncwb/images/logo.png"> </a> <br> <br>
</div>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>Vue Vben Admin 是一个免费开源的中后台模版。使用了最新的<code v-pre>vue3</code>,<code v-pre>vite2</code>,<code v-pre>TypeScript</code>等主流技术开发，开箱即用的中后台前端解决方案，也可用于学习参考。</p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ul>
<li><strong>最新技术栈</strong>：使用 Vue3/vite2 等前端前沿技术开发</li>
<li><strong>TypeScript</strong>: 应用程序级 JavaScript 的语言</li>
<li><strong>主题</strong>：可配置的主题</li>
<li><strong>国际化</strong>：内置完善的国际化方案</li>
<li><strong>Mock 数据</strong> 内置 Mock 数据方案</li>
<li><strong>权限</strong> 内置完善的动态路由权限生成方案</li>
<li><strong>组件</strong> 二次封装了多个常用的组件</li>
</ul>
<h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2>
<ul>
<li><a href="https://vben.vvbin.cn/" target="_blank" rel="noopener noreferrer">vue-vben-admin<ExternalLinkIcon/></a> - 完整版中文站点</li>
<li><a href="https://anncwb.github.io/vue-vben-admin/" target="_blank" rel="noopener noreferrer">vue-vben-admin-gh-pages<ExternalLinkIcon/></a> - 完整版 github 站点</li>
<li><a href="https://vben.vvbin.cn/thin/next/" target="_blank" rel="noopener noreferrer">vben-admin-thin-next<ExternalLinkIcon/></a> - 简化版中文站点</li>
<li><a href="https://anncwb.github.io/vben-admin-thin-next/" target="_blank" rel="noopener noreferrer">vben-admin-thin-gh-pages<ExternalLinkIcon/></a> - 简化版 github 站点</li>
</ul>
<p>测试账号: vben/123456</p>
<p align="center">
    <img alt="VbenAdmin Logo" width="100%" src="https://anncwb.github.io/anncwb/images/preview1.png">
    <img alt="VbenAdmin Logo" width="100%" src="https://anncwb.github.io/anncwb/images/preview2.png">
    <img alt="VbenAdmin Logo" width="100%" src="https://anncwb.github.io/anncwb/images/preview3.png">
</p>
<h3 id="使用-gitpod" tabindex="-1"><a class="header-anchor" href="#使用-gitpod" aria-hidden="true">#</a> 使用 Gitpod</h3>
<p>在 Gitpod（适用于 GitHub 的免费在线开发环境）中打开项目，并立即开始编码.</p>
<figure><a href="https://gitpod.io/#https://github.com/anncwb/vue-vben-admin" target="_blank" rel="noopener noreferrer"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>Open in Gitpod</figcaption></figure>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<p><a href="https://doc.vvbin.cn/" target="_blank" rel="noopener noreferrer">文档地址<ExternalLinkIcon/></a></p>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<ul>
<li><a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">node<ExternalLinkIcon/></a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git<ExternalLinkIcon/></a> -项目开发环境</li>
<li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite<ExternalLinkIcon/></a> - 熟悉 vite 特性</li>
<li><a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3<ExternalLinkIcon/></a> - 熟悉 Vue 基础语法</li>
<li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript<ExternalLinkIcon/></a> - 熟悉<code v-pre>TypeScript</code>基本语法</li>
<li><a href="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">Es6+<ExternalLinkIcon/></a> - 熟悉 es6 基本语法</li>
<li><a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue-Router-Next<ExternalLinkIcon/></a> - 熟悉 vue-router 基本使用</li>
<li><a href="https://2x.antdv.com/docs/vue/introduce-cn/" target="_blank" rel="noopener noreferrer">Ant-Design-Vue<ExternalLinkIcon/></a> - ui 基本使用</li>
<li><a href="https://github.com/nuysoft/Mock" target="_blank" rel="noopener noreferrer">Mock.js<ExternalLinkIcon/></a> - mockjs 基本语法</li>
</ul>
<h2 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h2>
<ul>
<li>获取项目代码</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">git </span><span style="color: #98C379">clone</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">https://github.com/anncwb/vue-vben-admin.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>安装依赖</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">vue-vben-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">pnpm </span><span style="color: #98C379">install</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">pnpm </span><span style="color: #98C379">serve</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>打包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">pnpm </span><span style="color: #98C379">build</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志" aria-hidden="true">#</a> 更新日志</h2>
<p><RouterLink to="/vue-template-list/CHANGELOG.zh_CN.html">CHANGELOG</RouterLink></p>
<h2 id="项目地址" tabindex="-1"><a class="header-anchor" href="#项目地址" aria-hidden="true">#</a> 项目地址</h2>
<ul>
<li><a href="https://github.com/anncwb/vue-vben-admin" target="_blank" rel="noopener noreferrer">vue-vben-admin<ExternalLinkIcon/></a> - 完整版</li>
<li><a href="https://github.com/anncwb/vben-admin-thin-next" target="_blank" rel="noopener noreferrer">vue-vben-admin-thin-next<ExternalLinkIcon/></a> - 简化版</li>
</ul>
<h2 id="如何贡献" tabindex="-1"><a class="header-anchor" href="#如何贡献" aria-hidden="true">#</a> 如何贡献</h2>
<p>非常欢迎你的加入！<a href="https://github.com/anncwb/vue-vben-admin/issues/new/choose" target="_blank" rel="noopener noreferrer">提一个 Issue<ExternalLinkIcon/></a> 或者提交一个 Pull Request。</p>
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
<th style="text-align:center"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" /><ExternalLinkIcon/></a>IE</th>
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
<h2 id="相关仓库" tabindex="-1"><a class="header-anchor" href="#相关仓库" aria-hidden="true">#</a> 相关仓库</h2>
<p>如果这些插件对你有帮助，可以给一个 star 支持下</p>
<ul>
<li><a href="https://github.com/anncwb/vite-plugin-mock" target="_blank" rel="noopener noreferrer">vite-plugin-mock<ExternalLinkIcon/></a> - 用于本地及开发环境数据 mock</li>
<li><a href="https://github.com/anncwb/vite-plugin-html" target="_blank" rel="noopener noreferrer">vite-plugin-html<ExternalLinkIcon/></a> - 用于 html 模版转换及压缩</li>
<li><a href="https://github.com/anncwb/vite-plugin-style-import" target="_blank" rel="noopener noreferrer">vite-plugin-style-import<ExternalLinkIcon/></a> - 用于组件库样式按需引入</li>
<li><a href="https://github.com/anncwb/vite-plugin-theme" target="_blank" rel="noopener noreferrer">vite-plugin-theme<ExternalLinkIcon/></a> - 用于在线切换主题色等颜色相关配置</li>
<li><a href="https://github.com/anncwb/vite-plugin-imagemin" target="_blank" rel="noopener noreferrer">vite-plugin-imagemin<ExternalLinkIcon/></a> - 用于打包压缩图片资源</li>
<li><a href="https://github.com/anncwb/vite-plugin-compression" target="_blank" rel="noopener noreferrer">vite-plugin-compression<ExternalLinkIcon/></a> - 用于打包输出.gz|.brotil 文件</li>
<li><a href="https://github.com/anncwb/vite-plugin-svg-icons" target="_blank" rel="noopener noreferrer">vite-plugin-svg-icons<ExternalLinkIcon/></a> - 用于快速生成 svg 雪碧图</li>
</ul>
<h2 id="后台整合示例" tabindex="-1"><a class="header-anchor" href="#后台整合示例" aria-hidden="true">#</a> 后台整合示例</h2>
<ul>
<li><a href="https://github.com/zuihou/lamp-cloud" target="_blank" rel="noopener noreferrer">lamp-cloud<ExternalLinkIcon/></a> - 基于 SpringCloud Alibaba 的微服务中后台快速开发平台</li>
<li><a href="https://github.com/matevip/matecloud" target="_blank" rel="noopener noreferrer">matecloud<ExternalLinkIcon/></a> - MateCloud 微服务脚手架，基于 Spring Cloud 2020.0.3、SpringBoot 2.5.3 的全开源平台</li>
</ul>
<h2 id="交流" tabindex="-1"><a class="header-anchor" href="#交流" aria-hidden="true">#</a> 交流</h2>
<p><code v-pre>Vue-vben-Admin</code> 是完全开源免费的项目，在帮助开发者更方便地进行中大型管理系统开发，同时也提供 QQ 交流群使用问题欢迎在群内提问。</p>
<ul>
<li>QQ 群 <code v-pre>569291866</code></li>
</ul>
</div></template>


