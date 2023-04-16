<template><div><h1 id="vue-pure-admin" tabindex="-1"><a class="header-anchor" href="#vue-pure-admin" aria-hidden="true">#</a> vue-pure-admin</h1>
<!-- more -->
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p><code v-pre>vue-pure-admin</code> 是一款开源免费且开箱即用的中后台管理系统模版。使用了最新的 <code v-pre>Vue3</code>、<code v-pre>Vite</code>、<code v-pre>Element-Plus</code>、<code v-pre>TypeScript</code>、<code v-pre>Pinia</code>、<code v-pre>Tailwindcss</code> 等主流技术开发</p>
<h2 id="精简版-实际项目开发请用精简版-提供-非国际化-、国际化-两个版本选择" tabindex="-1"><a class="header-anchor" href="#精简版-实际项目开发请用精简版-提供-非国际化-、国际化-两个版本选择" aria-hidden="true">#</a> 精简版（实际项目开发请用精简版，提供 <code v-pre>非国际化</code> 、<code v-pre>国际化</code> 两个版本选择）</h2>
<p>精简版是基于 <a href="https://github.com/pure-admin/vue-pure-admin" target="_blank" rel="noopener noreferrer">vue-pure-admin<ExternalLinkIcon/></a> 提炼出的架子，包含主体功能，更适合实际项目开发，打包后的大小在全局引入 <a href="https://element-plus.org" target="_blank" rel="noopener noreferrer">element-plus<ExternalLinkIcon/></a> 的情况下仍然低于 <code v-pre>2.3MB</code>，并且会永久同步完整版的代码。开启 <code v-pre>brotli</code> 压缩和 <code v-pre>cdn</code> 替换本地库模式后，打包大小低于 <code v-pre>350kb</code></p>
<ul>
<li><a href="https://github.com/pure-admin/pure-admin-thin" target="_blank" rel="noopener noreferrer">点我查看非国际化精简版<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/pure-admin/pure-admin-thin/tree/i18n" target="_blank" rel="noopener noreferrer">点我查看国际化精简版<ExternalLinkIcon/></a></li>
</ul>
<h2 id="配套视频" tabindex="-1"><a class="header-anchor" href="#配套视频" aria-hidden="true">#</a> 配套视频</h2>
<ul>
<li><a href="https://www.bilibili.com/video/BV1kg411v7QT" target="_blank" rel="noopener noreferrer">点我查看快速开发教程<ExternalLinkIcon/></a></li>
<li><a href="https://www.bilibili.com/video/BV17g411T7rq" target="_blank" rel="noopener noreferrer">点我查看 UI 设计<ExternalLinkIcon/></a></li>
</ul>
<h2 id="配套保姆级文档-支持-pwa-快速、离线访问" tabindex="-1"><a class="header-anchor" href="#配套保姆级文档-支持-pwa-快速、离线访问" aria-hidden="true">#</a> 配套保姆级文档（支持 <code v-pre>PWA</code> 快速、离线访问）</h2>
<ul>
<li><a href="https://yiming_chang.gitee.io/pure-admin-doc" target="_blank" rel="noopener noreferrer">点我查看国内文档站<ExternalLinkIcon/></a></li>
<li><a href="https://pure-admin.github.io/pure-admin-doc" target="_blank" rel="noopener noreferrer">点我查看国外文档站<ExternalLinkIcon/></a></li>
</ul>
<h2 id="tauri-版" tabindex="-1"><a class="header-anchor" href="#tauri-版" aria-hidden="true">#</a> <code v-pre>Tauri</code> 版</h2>
<ul>
<li><a href="https://github.com/pure-admin/tauri-pure-admin" target="_blank" rel="noopener noreferrer">点我查看 Tauri 版<ExternalLinkIcon/></a></li>
</ul>
<h2 id="electron-版" tabindex="-1"><a class="header-anchor" href="#electron-版" aria-hidden="true">#</a> <code v-pre>Electron</code> 版</h2>
<ul>
<li><a href="https://github.com/pure-admin/electron-pure-admin" target="_blank" rel="noopener noreferrer">点我查看 Electron 版<ExternalLinkIcon/></a></li>
</ul>
<h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2>
<ul>
<li>
<p><a href="https://yiming_chang.gitee.io/vue-pure-admin" target="_blank" rel="noopener noreferrer">点我查看国内预览站<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://pure-admin.github.io/vue-pure-admin" target="_blank" rel="noopener noreferrer">点我查看国外预览站<ExternalLinkIcon/></a></p>
</li>
<li>
<p>PC 端</p>
</li>
</ul>
<p align="center">
  <img alt="PureAdmin Logo" width="100%" src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d45c15ccbe674fe291a4faa528d11eda~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?">
</p>
<ul>
<li>暗黑模式</li>
</ul>
<p align="center">
  <img alt="PureAdmin Logo" width="100%" src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10a351f0d9c94b90ba3b408a786b9ede~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?">
</p>
<ul>
<li>移动端</li>
</ul>
<p align="center">
  <img alt="PureAdmin Logo" width="100%" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3061c7b92f6d4cb4bcdf227d966ac696~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?">
</p>
<h3 id="使用-gitpod" tabindex="-1"><a class="header-anchor" href="#使用-gitpod" aria-hidden="true">#</a> 使用 <code v-pre>Gitpod</code></h3>
<p>在 Gitpod（适用于 GitHub 的免费在线开发环境）中打开项目，并立即开始编码.</p>
<figure><a href="https://gitpod.io/#https://github.com/pure-admin/vue-pure-admin" target="_blank" rel="noopener noreferrer"><img src="https://gitpod.io/button/open-in-gitpod.svg" alt="Open in Gitpod" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>Open in Gitpod</figcaption></figure>
<h2 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h2>
<ul>
<li>获取项目代码</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">git </span><span style="color: #98C379">clone</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">https://github.com/pure-admin/vue-pure-admin.git</span></span>
<span class="line"><span style="color: #ABB2BF">or</span></span>
<span class="line"><span style="color: #ABB2BF">git </span><span style="color: #98C379">clone</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">https://gitee.com/yiming_chang/vue-pure-admin.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>安装依赖</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">vue-pure-admin</span></span>
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
<h2 id="如何贡献" tabindex="-1"><a class="header-anchor" href="#如何贡献" aria-hidden="true">#</a> 如何贡献</h2>
<p>非常欢迎您的加入！<a href="https://github.com/pure-admin/vue-pure-admin/issues/new/choose" target="_blank" rel="noopener noreferrer">提一个 Issue<ExternalLinkIcon/></a> 或者提交一个 <code v-pre>Pull Request</code></p>
<p><strong>Pull Request:</strong></p>
<ol>
<li>Fork 代码!</li>
<li>创建自己的分支: <code v-pre>git checkout -b feat/xxxx</code></li>
<li>提交您的修改: <code v-pre>git commit -am 'feat(function): add xxxxx'</code></li>
<li>推送您的分支: <code v-pre>git push origin feat/xxxx</code></li>
<li>提交<code v-pre>pull request</code></li>
</ol>
<h2 id="git-贡献提交规范" tabindex="-1"><a class="header-anchor" href="#git-贡献提交规范" aria-hidden="true">#</a> <code v-pre>Git</code> 贡献提交规范</h2>
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
<p>本地开发推荐使用 <code v-pre>Chrome 80+</code> 浏览器</p>
<p>支持现代浏览器, 不支持 <code v-pre>IE</code></p>
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
<h2 id="维护者" tabindex="-1"><a class="header-anchor" href="#维护者" aria-hidden="true">#</a> 维护者</h2>
<p><a href="https://github.com/xiaoxian521" target="_blank" rel="noopener noreferrer">xiaoxian521<ExternalLinkIcon/></a>、<a href="https://github.com/Ten-K" target="_blank" rel="noopener noreferrer">Ten-K<ExternalLinkIcon/></a></p>
<h2 id="qq-交流群" tabindex="-1"><a class="header-anchor" href="#qq-交流群" aria-hidden="true">#</a> <code v-pre>QQ</code> 交流群</h2>
<p><a href="https://yiming_chang.gitee.io/pure-admin-doc/pages/support/#qq-%E4%BA%A4%E6%B5%81%E7%BE%A4" target="_blank" rel="noopener noreferrer">点击去加入<ExternalLinkIcon/></a></p>
<h2 id="许可证" tabindex="-1"><a class="header-anchor" href="#许可证" aria-hidden="true">#</a> 许可证</h2>
<p>原则上不收取任何费用及版权，可以放心使用，不过如需二次开源（比如用此平台二次开发并开源）请联系作者获取许可！</p>
<p><a href="./LICENSE">MIT © xiaoxian521-2023</a></p>
</div></template>


