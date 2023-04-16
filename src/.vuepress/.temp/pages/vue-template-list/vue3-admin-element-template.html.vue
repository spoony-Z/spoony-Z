<template><div><h1 id="vue3-admin-element-template" tabindex="-1"><a class="header-anchor" href="#vue3-admin-element-template" aria-hidden="true">#</a> Vue3 admin element template</h1>
<!-- more -->
<blockquote>
<p>Vue3-admin-element-template 是 Vue3-admin-element的精简版本，去掉了完整版本中丰富的组件库。项目使用的是<code v-pre>Composition Api</code>、和<code v-pre>&lt;script setup&gt;</code>新语法糖风格编写。</p>
</blockquote>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p><code v-pre>Vue3-admin-element-template</code>项目是<code v-pre>js</code>版本,相信有部分刚入门的程序员不熟悉<code v-pre>ts</code>编写，在github上查找了关于vue3中后台模板,大部分都是基于ts版本。所以决定自己写一个基于js版本的中后台模板，当然如果您很熟练ts建议您使用它！不熟悉的建议您开始纳入学习计划。后期准备用ts和<a href="https://www.naiveui.com/zh-CN/light" target="_blank" rel="noopener noreferrer">Naiveui<ExternalLinkIcon/></a>开发一套开箱即用的中后台模板。</p>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p><code v-pre>Vue3-admin-element-template</code>是一个免费开源的中后台模板你，使用了最新的<code v-pre>vue3</code>、<code v-pre>vite2</code> 等主流技术开发，开箱即用的中后台前端解决方案。</p>
<p>项目目的：</p>
<ul>
<li>学习<code v-pre>Vue3</code>相关Api</li>
<li>掌握<code v-pre>Vite2</code>插件机制、构建配置</li>
</ul>
<p>提示：项目使用 新语法编写，会有黄色警告信息，不用理会！！！</p>
<p>在线预览地址：<a href="https://hu-snail.gitee.io/vue3-admin-element-template" target="_blank" rel="noopener noreferrer">https://hu-snail.gitee.io/vue3-admin-element-template<ExternalLinkIcon/></a></p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ul>
<li>最新技术栈：vue3.2.12/vite2</li>
<li>Javascript版本</li>
<li>可自定义主题</li>
<li>vue-i18n国际化方案</li>
<li>Mock 数据方案</li>
<li>权限控制</li>
</ul>
<h2 id="vue3资源库" tabindex="-1"><a class="header-anchor" href="#vue3资源库" aria-hidden="true">#</a> vue3资源库</h2>
<p>一个收集vue3资源的网站，包含web端/移动端/小程序等
在线预览地址：<a href="https://hu-snail.github.io/vue3-resource" target="_blank" rel="noopener noreferrer">vue3-resource<ExternalLinkIcon/></a></p>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<p>正在编写中......</p>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<ul>
<li><code v-pre>Node</code>: 版本建议 &gt;= 12.0.0 <a href="https://nodejs.org/zh-cn/download/" target="_blank" rel="noopener noreferrer">下载链接<ExternalLinkIcon/></a></li>
<li><code v-pre>Git</code>: <a href="https://www.git-scm.com/download" target="_blank" rel="noopener noreferrer">版本管理工具<ExternalLinkIcon/></a></li>
<li><code v-pre>Visual Studio Code</code>: <a href="https://code.visualstudio.com/Download/" target="_blank" rel="noopener noreferrer">最新版本<ExternalLinkIcon/></a>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noopener noreferrer">Vetur<ExternalLinkIcon/></a> - vue开发必备</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">Eslint<ExternalLinkIcon/></a>- 脚本代码检查</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier<ExternalLinkIcon/></a> - 代码格式化</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint" target="_blank" rel="noopener noreferrer">Stylelin<ExternalLinkIcon/></a> - css格式化</li>
</ul>
</li>
</ul>
<h2 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h2>
<ul>
<li>获取代码</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">git </span><span style="color: #98C379">clone</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">https://github.com/hu-snail/vue3-admin-element-template.git</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>安装依赖</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>运行</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">serve</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>打包</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">build</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>本地预览</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">preview</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>打包/预览</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">build:preview</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2>
<p>在线预览地址：<a href="https://hu-snail.gitee.io/vue3-admin-element-template" target="_blank" rel="noopener noreferrer">https://hu-snail.gitee.io/vue3-admin-element-template<ExternalLinkIcon/></a></p>
<p>测试账号：admin/admin 密码可以随意输入</p>
<figure><img src="https://gitee.com/hu-snail/vue3-admin-element-template/raw/master/src/assets/demo/01.png" alt="截图1" tabindex="0" loading="lazy"><figcaption>截图1</figcaption></figure>
<figure><img src="https://gitee.com/hu-snail/vue3-admin-element-template/raw/master/src/assets/demo/02.png" alt="截图2" tabindex="0" loading="lazy"><figcaption>截图2</figcaption></figure>
<figure><img src="https://gitee.com/hu-snail/vue3-admin-element-template/raw/master/src/assets/demo/03.png" alt="截图3" tabindex="0" loading="lazy"><figcaption>截图3</figcaption></figure>
<figure><img src="https://gitee.com/hu-snail/vue3-admin-element-template/raw/master/src/assets/demo/04.png" alt="截图4" tabindex="0" loading="lazy"><figcaption>截图4</figcaption></figure>
<h2 id="浏览器支持" tabindex="-1"><a class="header-anchor" href="#浏览器支持" aria-hidden="true">#</a> 浏览器支持</h2>
<p>本地开发推荐使用<code v-pre>Chrome 80+</code> 浏览器</p>
<p>支持现代浏览器, 不支持 IE</p>
</div></template>


