<template><div><h1 id="vue-element-admin" tabindex="-1"><a class="header-anchor" href="#vue-element-admin" aria-hidden="true">#</a> vue-element-admin</h1>
<!-- more -->
<p align="center">
  <img width="320" src="https://wpimg.wallstcn.com/ecc53a42-d79b-42e2-8852-5126b810a4c8.svg">
</p>
<table align="center" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="center" valign="middle">
       <a href="https://www.vform666.com/" title="variantForm" target="_blank" style="padding-right: 20px;">
        <img height="200px" style="padding-right: 20px;" src="https://s3.bmp.ovh/imgs/2022/04/11/3379c1c1cf2e3228.png" title="variantForm">
        </a>
      </td>
    </tr>
  </tbody>
</table>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p><a href="https://panjiachen.github.io/vue-element-admin" target="_blank" rel="noopener noreferrer">vue-element-admin<ExternalLinkIcon/></a> 是一个后台前端解决方案，它基于 <a href="https://github.com/vuejs/vue" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a> 和 <a href="https://github.com/ElemeFE/element" target="_blank" rel="noopener noreferrer">element-ui<ExternalLinkIcon/></a>实现。它使用了最新的前端技术栈，内置了 i18n 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。</p>
<ul>
<li>
<p><a href="https://panjiachen.github.io/vue-element-admin" target="_blank" rel="noopener noreferrer">在线预览<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://panjiachen.github.io/vue-element-admin-site/zh/" target="_blank" rel="noopener noreferrer">使用文档<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://gitter.im/vue-element-admin/discuss" target="_blank" rel="noopener noreferrer">Gitter 讨论组<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/donate" target="_blank" rel="noopener noreferrer">Donate<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://github.com/PanJiaChen/vue-element-admin/wiki" target="_blank" rel="noopener noreferrer">Wiki<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://panjiachen.gitee.io/vue-element-admin/" target="_blank" rel="noopener noreferrer">Gitee<ExternalLinkIcon/></a> 在线预览（国内用户可访问该地址）</p>
</li>
<li>
<p><a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/" target="_blank" rel="noopener noreferrer">国内访问文档<ExternalLinkIcon/></a> 文档（方便没翻墙的用户查看）</p>
</li>
<li>
<p>基础模板建议使用: <a href="https://github.com/PanJiaChen/vue-admin-template" target="_blank" rel="noopener noreferrer">vue-admin-template<ExternalLinkIcon/></a></p>
</li>
<li>
<p>桌面端: <a href="https://github.com/PanJiaChen/electron-vue-admin" target="_blank" rel="noopener noreferrer">electron-vue-admin<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Typescript 版: <a href="https://github.com/Armour/vue-typescript-admin-template" target="_blank" rel="noopener noreferrer">vue-typescript-admin-template<ExternalLinkIcon/></a> (鸣谢: <a href="https://github.com/Armour" target="_blank" rel="noopener noreferrer">@Armour<ExternalLinkIcon/></a>)</p>
</li>
<li>
<p><a href="https://github.com/PanJiaChen/vue-element-admin/issues/2312" target="_blank" rel="noopener noreferrer">awesome-project<ExternalLinkIcon/></a></p>
</li>
</ul>
<p><strong><code v-pre>v4.1.0+</code>版本之后默认 master 分支将不支持国际化，有需要的请使用<a href="https://github.com/PanJiaChen/vue-element-admin/tree/i18n" target="_blank" rel="noopener noreferrer">i18n<ExternalLinkIcon/></a>分支，它会和 master 保持同步更新</strong></p>
<p><strong>该项目不支持低版本浏览器(如 ie)，有需求请自行添加 polyfill <a href="https://github.com/PanJiaChen/vue-element-admin/wiki#babel-polyfill" target="_blank" rel="noopener noreferrer">详情<ExternalLinkIcon/></a></strong></p>
<p><strong>目前版本为 <code v-pre>v4.0+</code> 基于 <code v-pre>vue-cli</code> 进行构建，若发现问题，欢迎提<a href="https://github.com/PanJiaChen/vue-element-admin/issues/new" target="_blank" rel="noopener noreferrer">issue<ExternalLinkIcon/></a>。若你想使用旧版本，可以切换分支到<a href="https://github.com/PanJiaChen/vue-element-admin/tree/tag/3.11.0" target="_blank" rel="noopener noreferrer">tag/3.11.0<ExternalLinkIcon/></a>，它不依赖 <code v-pre>vue-cli</code></strong></p>
<p>群主 <strong><a href="https://jianshiapp.com/circles/1209" target="_blank" rel="noopener noreferrer">圈子<ExternalLinkIcon/></a></strong> 群主会经常分享一些技术相关的东西，或者加入 <a href="https://github.com/PanJiaChen/vue-element-admin/issues/602" target="_blank" rel="noopener noreferrer">qq 群<ExternalLinkIcon/></a> 或者关注 <a href="https://weibo.com/u/3423485724?is_all=1" target="_blank" rel="noopener noreferrer">微博<ExternalLinkIcon/></a></p>
<h2 id="前序准备" tabindex="-1"><a class="header-anchor" href="#前序准备" aria-hidden="true">#</a> 前序准备</h2>
<p>你需要在本地安装 <a href="http://nodejs.org/" target="_blank" rel="noopener noreferrer">node<ExternalLinkIcon/></a> 和 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git<ExternalLinkIcon/></a>。本项目技术栈基于 <a href="http://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">ES2015+<ExternalLinkIcon/></a>、<a href="https://cn.vuejs.org/index.html" target="_blank" rel="noopener noreferrer">vue<ExternalLinkIcon/></a>、<a href="https://vuex.vuejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">vuex<ExternalLinkIcon/></a>、<a href="https://router.vuejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">vue-router<ExternalLinkIcon/></a> 、<a href="https://github.com/vuejs/vue-cli" target="_blank" rel="noopener noreferrer">vue-cli<ExternalLinkIcon/></a> 、<a href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios<ExternalLinkIcon/></a> 和 <a href="https://github.com/ElemeFE/element" target="_blank" rel="noopener noreferrer">element-ui<ExternalLinkIcon/></a>，所有的请求数据都使用<a href="https://github.com/nuysoft/Mock" target="_blank" rel="noopener noreferrer">Mock.js<ExternalLinkIcon/></a>进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。</p>
<p>同时配套了系列教程文章，如何从零构建后一个完整的后台项目，建议大家先看完这些文章再来实践本项目</p>
<ul>
<li><a href="https://juejin.im/post/59097cd7a22b9d0065fb61d2" target="_blank" rel="noopener noreferrer">手摸手，带你用 vue 撸后台 系列一(基础篇)<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/591aa14f570c35006961acac" target="_blank" rel="noopener noreferrer">手摸手，带你用 vue 撸后台 系列二(登录权限篇)<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/593121aa0ce4630057f70d35" target="_blank" rel="noopener noreferrer">手摸手，带你用 vue 撸后台 系列三 (实战篇)<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/595b4d776fb9a06bbe7dba56" target="_blank" rel="noopener noreferrer">手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5c92ff94f265da6128275a85" target="_blank" rel="noopener noreferrer">手摸手，带你用vue撸后台 系列五(v4.0新版本)<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000009090836" target="_blank" rel="noopener noreferrer">手摸手，带你封装一个 vue component<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/59bb864b5188257e7a427c09" target="_blank" rel="noopener noreferrer">手摸手，带你优雅的使用 icon<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5b56909a518825195f499806" target="_blank" rel="noopener noreferrer">手摸手，带你用合理的姿势使用 webpack4（上）<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc" target="_blank" rel="noopener noreferrer">手摸手，带你用合理的姿势使用 webpack4（下）<ExternalLinkIcon/></a></li>
</ul>
<p><strong>如有问题请先看上述使用文档和文章，若不能满足，欢迎 issue 和 pr</strong></p>
<figure><a href="https://codesandbox.io/s/github/PanJiaChen/vue-element-admin/tree/CodeSandbox" target="_blank" rel="noopener noreferrer"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit on CodeSandbox" tabindex="0" loading="lazy"><ExternalLinkIcon/></a><figcaption>Edit on CodeSandbox</figcaption></figure>
<p align="center">
  <img width="900" src="https://wpimg.wallstcn.com/a5894c1b-f6af-456e-82df-1151da0839bf.png">
</p>
<h2 id="sponsors" tabindex="-1"><a class="header-anchor" href="#sponsors" aria-hidden="true">#</a> Sponsors</h2>
<p>Become a sponsor and get your logo on our README on GitHub with a link to your site. <a href="https://www.patreon.com/panjiachen" target="_blank" rel="noopener noreferrer">[Become a sponsor]<ExternalLinkIcon/></a></p>
<h3 id="akveo" tabindex="-1"><a class="header-anchor" href="#akveo" aria-hidden="true">#</a> Akveo</h3>
<p><a href="https://store.akveo.com/products/vue-java-admin-dashboard-spring?utm_campaign=akveo_store-Vue-Vue_demo%2Fgithub&utm_source=vue_admin&utm_medium=referral&utm_content=github_banner"><img width="500px" src="https://raw.githubusercontent.com/PanJiaChen/vue-element-admin-site/master/docs/.vuepress/public/images/vue-java-banner.png" /></a><p>Java 后端整合，可以使用优惠码：SWB0RAZPZR1M，获得20%的价格优化</p></p>
<h3 id="flatlogic" tabindex="-1"><a class="header-anchor" href="#flatlogic" aria-hidden="true">#</a> Flatlogic</h3>
<p><a href="https://flatlogic.com/admin-dashboards?from=vue-element-admin"><img width="150px" src="https://wpimg.wallstcn.com/9c0b719b-5551-4c1e-b776-63994632d94a.png" /></a><p>Admin Dashboard Templates made with Vue, React and Angular.</p></p>
<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #abb2bf">- 登录 / 注销</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 权限验证</span></span>
<span class="line"><span style="color: #abb2bf">  - 页面权限</span></span>
<span class="line"><span style="color: #abb2bf">  - 指令权限</span></span>
<span class="line"><span style="color: #abb2bf">  - 权限配置</span></span>
<span class="line"><span style="color: #abb2bf">  - 二步登录</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 多环境发布</span></span>
<span class="line"><span style="color: #abb2bf">  - dev</span></span>
<span class="line"><span style="color: #abb2bf">  - sit</span></span>
<span class="line"><span style="color: #abb2bf">  - stage</span></span>
<span class="line"><span style="color: #abb2bf">  - prod</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 全局功能</span></span>
<span class="line"><span style="color: #abb2bf">  - 国际化多语言</span></span>
<span class="line"><span style="color: #abb2bf">  - 多种动态换肤</span></span>
<span class="line"><span style="color: #abb2bf">  - 动态侧边栏（支持多级路由嵌套）</span></span>
<span class="line"><span style="color: #abb2bf">  - 动态面包屑</span></span>
<span class="line"><span style="color: #abb2bf">  - 快捷导航(标签页)</span></span>
<span class="line"><span style="color: #abb2bf">  - Svg Sprite 图标</span></span>
<span class="line"><span style="color: #abb2bf">  - 本地/后端 mock 数据</span></span>
<span class="line"><span style="color: #abb2bf">  - Screenfull全屏</span></span>
<span class="line"><span style="color: #abb2bf">  - 自适应收缩侧边栏</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 编辑器</span></span>
<span class="line"><span style="color: #abb2bf">  - 富文本</span></span>
<span class="line"><span style="color: #abb2bf">  - Markdown</span></span>
<span class="line"><span style="color: #abb2bf">  - JSON 等多格式</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- Excel</span></span>
<span class="line"><span style="color: #abb2bf">  - 导出excel</span></span>
<span class="line"><span style="color: #abb2bf">  - 导入excel</span></span>
<span class="line"><span style="color: #abb2bf">  - 前端可视化excel</span></span>
<span class="line"><span style="color: #abb2bf">  - 导出zip</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 表格</span></span>
<span class="line"><span style="color: #abb2bf">  - 动态表格</span></span>
<span class="line"><span style="color: #abb2bf">  - 拖拽表格</span></span>
<span class="line"><span style="color: #abb2bf">  - 内联编辑</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 错误页面</span></span>
<span class="line"><span style="color: #abb2bf">  - 401</span></span>
<span class="line"><span style="color: #abb2bf">  - 404</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 組件</span></span>
<span class="line"><span style="color: #abb2bf">  - 头像上传</span></span>
<span class="line"><span style="color: #abb2bf">  - 返回顶部</span></span>
<span class="line"><span style="color: #abb2bf">  - 拖拽Dialog</span></span>
<span class="line"><span style="color: #abb2bf">  - 拖拽Select</span></span>
<span class="line"><span style="color: #abb2bf">  - 拖拽看板</span></span>
<span class="line"><span style="color: #abb2bf">  - 列表拖拽</span></span>
<span class="line"><span style="color: #abb2bf">  - SplitPane</span></span>
<span class="line"><span style="color: #abb2bf">  - Dropzone</span></span>
<span class="line"><span style="color: #abb2bf">  - Sticky</span></span>
<span class="line"><span style="color: #abb2bf">  - CountTo</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 综合实例</span></span>
<span class="line"><span style="color: #abb2bf">- 错误日志</span></span>
<span class="line"><span style="color: #abb2bf">- Dashboard</span></span>
<span class="line"><span style="color: #abb2bf">- 引导页</span></span>
<span class="line"><span style="color: #abb2bf">- ECharts 图表</span></span>
<span class="line"><span style="color: #abb2bf">- Clipboard(剪贴复制)</span></span>
<span class="line"><span style="color: #abb2bf">- Markdown2html</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 克隆项目</span></span>
<span class="line"><span style="color: #ABB2BF">git </span><span style="color: #98C379">clone</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">https://github.com/PanJiaChen/vue-element-admin.git</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 进入项目目录</span></span>
<span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">vue-element-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 安装依赖</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">install</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">install</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--registry=https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 启动服务</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器访问 <a href="http://localhost:9527" target="_blank" rel="noopener noreferrer">http://localhost:9527<ExternalLinkIcon/></a></p>
<h2 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 构建测试环境</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">build:stage</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 构建生产环境</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">build:prod</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 预览发布环境效果</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">preview</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 预览发布环境效果 + 静态资源分析</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">preview</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--report</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 代码格式检查</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">lint</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 代码格式检查并自动修复</span></span>
<span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">lint</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--fix</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多信息请参考 <a href="https://panjiachen.github.io/vue-element-admin-site/zh/" target="_blank" rel="noopener noreferrer">使用文档<ExternalLinkIcon/></a></p>
<h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h2>
<p>Detailed changes for each release are documented in the <a href="https://github.com/PanJiaChen/vue-element-admin/releases" target="_blank" rel="noopener noreferrer">release notes<ExternalLinkIcon/></a>.</p>
<h2 id="online-demo" tabindex="-1"><a class="header-anchor" href="#online-demo" aria-hidden="true">#</a> Online Demo</h2>
<p><a href="https://panjiachen.github.io/vue-element-admin" target="_blank" rel="noopener noreferrer">在线 Demo<ExternalLinkIcon/></a></p>
<h2 id="购买贴纸" tabindex="-1"><a class="header-anchor" href="#购买贴纸" aria-hidden="true">#</a> 购买贴纸</h2>
<p>你也可以通过 购买<a href="https://smallsticker.com/product/vue-element-admin" target="_blank" rel="noopener noreferrer">官方授权的贴纸<ExternalLinkIcon/></a> 的方式来支持 vue-element-admin - 每售出一张贴纸，本项目将获得 2 元的捐赠。</p>
<h2 id="browsers-support" tabindex="-1"><a class="header-anchor" href="#browsers-support" aria-hidden="true">#</a> Browsers support</h2>
<p>Modern browsers and Internet Explorer 10+.</p>
<table>
<thead>
<tr>
<th><a href="https://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /><ExternalLinkIcon/></a>IE / Edge</th>
<th><a href="https://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><ExternalLinkIcon/></a>Firefox</th>
<th><a href="https://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><ExternalLinkIcon/></a>Chrome</th>
<th><a href="https://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><ExternalLinkIcon/></a>Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td>IE10, IE11, Edge</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
<td>last 2 versions</td>
</tr>
</tbody>
</table>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
<p>Copyright (c) 2017-present PanJiaChen</p>
</div></template>


