<template><div><h1 id="vue3-composition-admin" tabindex="-1"><a class="header-anchor" href="#vue3-composition-admin" aria-hidden="true">#</a> vue3-composition-admin</h1>
<!-- more -->
<blockquote>
<p>vue3-composition-admin 是一个管理端模板解决方案，它是基于vue3,ts和element-plus，项目都是以composition api风格编写。</p>
</blockquote>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>项目的基础版本出自于源于花裤衩大佬的 vue-element-admin。</p>
<p>版本：</p>
<p>vue2+js版本：<a href="https://github.com/PanJiaChen/vue-element-admin" target="_blank" rel="noopener noreferrer">vue-element-admin<ExternalLinkIcon/></a></p>
<p>vue2+ts版本：<a href="https://github.com/Armour/vue-typescript-admin-template" target="_blank" rel="noopener noreferrer">vue-typescript-admin-template<ExternalLinkIcon/></a></p>
<p>vue3 发布之后，性能增强，速度vue2的倍数，打包体积都在减小（treeshaking），composition api 增加了项目可读性。</p>
<p>项目目的：</p>
<ul>
<li>学习vue3+ts</li>
<li>保持 composition api 风格</li>
</ul>
<p>在线demo演示地址：<a href="https://admin-tmpl-test.rencaiyoujia.cn/" target="_blank" rel="noopener noreferrer">https://admin-tmpl-test.rencaiyoujia.cn/<ExternalLinkIcon/></a></p>
<h2 id="相关项目" tabindex="-1"><a class="header-anchor" href="#相关项目" aria-hidden="true">#</a> 相关项目</h2>
<ul>
<li>基于该项目<a href="https://github.com/rcyj-FED/RuoYi-Vue3" target="_blank" rel="noopener noreferrer">RuoYi-Vue3<ExternalLinkIcon/></a> (后端路由案例)</li>
<li>微应用乾坤版本<a href="https://github.com/RainManGO/RuoYi-Vue3-qiankun" target="_blank" rel="noopener noreferrer">RuoYi-Vue3-qinkun<ExternalLinkIcon/></a></li>
<li>国内gitee版本 <a href="https://gitee.com/codeZyZ_admin/vue3-composition-admin" target="_blank" rel="noopener noreferrer">vue3-composition-admin<ExternalLinkIcon/></a></li>
</ul>
<h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #abb2bf">- 用户管理</span></span>
<span class="line"><span style="color: #abb2bf">	- 登录（视频背景）</span></span>
<span class="line"><span style="color: #abb2bf">	- 注销</span></span>
<span class="line"><span style="color: #abb2bf">	</span></span>
<span class="line"><span style="color: #abb2bf">- 权限验证</span></span>
<span class="line"><span style="color: #abb2bf">  - 页面权限</span></span>
<span class="line"><span style="color: #abb2bf">  - 指令权限</span></span>
<span class="line"><span style="color: #abb2bf">  - 权限配置</span></span>
<span class="line"><span style="color: #abb2bf">  - 二步登录</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 多环境发布 (对应serve,build)</span></span>
<span class="line"><span style="color: #abb2bf">  - dev</span></span>
<span class="line"><span style="color: #abb2bf">  - test</span></span>
<span class="line"><span style="color: #abb2bf">  - prod</span></span>
<span class="line"><span style="color: #abb2bf">  </span></span>
<span class="line"><span style="color: #abb2bf">- 全局功能</span></span>
<span class="line"><span style="color: #abb2bf">  - iconfont</span></span>
<span class="line"><span style="color: #abb2bf">  - 国际化多语言</span></span>
<span class="line"><span style="color: #abb2bf">  - 多种动态换肤</span></span>
<span class="line"><span style="color: #abb2bf">  - 动态侧边栏（支持多级路由嵌套）</span></span>
<span class="line"><span style="color: #abb2bf">  - 动态面包屑</span></span>
<span class="line"><span style="color: #abb2bf">  - 快捷导航(标签页)</span></span>
<span class="line"><span style="color: #abb2bf">  - 本地/后端 mock 数据</span></span>
<span class="line"><span style="color: #abb2bf">  - Screenfull全屏</span></span>
<span class="line"><span style="color: #abb2bf">  - 自适应收缩侧边栏</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 编辑器</span></span>
<span class="line"><span style="color: #abb2bf">  - 富文本</span></span>
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
<span class="line"><span style="color: #abb2bf">  - Dropzone</span></span>
<span class="line"><span style="color: #abb2bf">  - Sticky</span></span>
<span class="line"><span style="color: #abb2bf">  - CountTo (to do)</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf">- 综合实例</span></span>
<span class="line"><span style="color: #abb2bf">- 错误日志</span></span>
<span class="line"><span style="color: #abb2bf">- Dashboard</span></span>
<span class="line"><span style="color: #abb2bf">- 引导页</span></span>
<span class="line"><span style="color: #abb2bf">- ECharts 图表</span></span>
<span class="line"><span style="color: #abb2bf">- Clipboard(剪贴复制)</span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #abb2bf">admin-tmpl</span></span>
<span class="line"><span style="color: #abb2bf">├─ .env.dev.build     # 开发环境</span></span>
<span class="line"><span style="color: #abb2bf">├─ .env.dev.serve     # 开发本地本地</span></span>
<span class="line"><span style="color: #abb2bf">├─ .env.prod.build    # 生产环境</span></span>
<span class="line"><span style="color: #abb2bf">├─ .env.prod.serve    # 生产环境本地</span></span>
<span class="line"><span style="color: #abb2bf">├─ .env.test.build    # 测试环境</span></span>
<span class="line"><span style="color: #abb2bf">├─ .env.test.serve    # 测试环境本地</span></span>
<span class="line"><span style="color: #abb2bf">├─ .eslintrc.js       # eslint</span></span>
<span class="line"><span style="color: #abb2bf">├─ README.md          </span></span>
<span class="line"><span style="color: #abb2bf">├─ dist               # 打包dist</span></span>
<span class="line"><span style="color: #abb2bf">├─ mock               # mock服务</span></span>
<span class="line"><span style="color: #abb2bf">├─ public             # 静态资源</span></span>
<span class="line"><span style="color: #abb2bf">├─ src                # 源码</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ @types          # ts 声明</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ apis            # 接口请求</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ assets          # webpack打包的资源</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ components      # 公共组件</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ config          # 全部配置</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ constant        # 常量</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ directives      # 全局指令</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ layout          # 全局Layout</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ locales         # 国际化</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ model           # 全部model存放</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ plugins         # 插件</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ router          # 路由</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ store           # 全局store管理</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ styles          # 全局样式</span></span>
<span class="line"><span style="color: #abb2bf">│  ├─ utils           # 全局公共方法</span></span>
<span class="line"><span style="color: #abb2bf">│  └─ views           # 所有业务页面</span></span>
<span class="line"><span style="color: #abb2bf">├─ tsconfig.json      # ts 编译配置</span></span>
<span class="line"><span style="color: #abb2bf">└─ vue.config.js      # vue-cli 配置</span></span>
<span class="line"><span style="color: #abb2bf"></span></span>
<span class="line"><span style="color: #abb2bf"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight" aria-hidden="true">#</a> HighLight</h2>
<p>项目均已最新技术实现，Vue3配套升级全家桶和涉及的插件组件等</p>
<p>项目采用技术:</p>
<ul>
<li>vue3 + composition api</li>
<li>typescript3.9</li>
<li>sass (dart sass)</li>
<li><a href="https://github.com/apache/echarts" target="_blank" rel="noopener noreferrer">echats5<ExternalLinkIcon/></a></li>
</ul>
<p>vue next 系列:</p>
<ul>
<li><a href="https://github.com/element-plus/element-plus" target="_blank" rel="noopener noreferrer">element-plus<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/vuejs/vue-router-next" target="_blank" rel="noopener noreferrer">vue-router-next<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/vuejs/vuex" target="_blank" rel="noopener noreferrer">vuex-4.0<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/intlify/vue-i18n-next" target="_blank" rel="noopener noreferrer">vue-i18n-next<ExternalLinkIcon/></a></li>
</ul>
<h2 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> Document</h2>
<ul>
<li><a href="https://blog.csdn.net/zy_flyway/category_6335128.html" target="_blank" rel="noopener noreferrer">博客文档地址<ExternalLinkIcon/></a></li>
<li><a href="https://rcyj-fed.github.io/vue3-composition-admin-docs/" target="_blank" rel="noopener noreferrer">文档地址<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/rcyj-FED/vue3-composition-admin-docs" target="_blank" rel="noopener noreferrer">文档项目git地址<ExternalLinkIcon/></a></li>
</ul>
<h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h2>
<p>项目主要是前端和mock server（node）</p>
<h3 id="前后端都启动" tabindex="-1"><a class="header-anchor" href="#前后端都启动" aria-hidden="true">#</a> 前后端都启动</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">  yarn</span></span>
<span class="line"><span style="color: #ABB2BF">  yarn </span><span style="color: #98C379">start</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单独启动-mock" tabindex="-1"><a class="header-anchor" href="#单独启动-mock" aria-hidden="true">#</a> 单独启动 Mock</h3>
<p>后台模拟服务器和其他版本不同，采用koa2+Faker进行模拟。</p>
<ul>
<li><a href="https://github.com/koajs/koa" target="_blank" rel="noopener noreferrer">Koa2<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/Marak/faker.js" target="_blank" rel="noopener noreferrer">Faker<ExternalLinkIcon/></a></li>
</ul>
<p>启动mock server:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">    yarn </span><span style="color: #98C379">mock</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mock 需要部署到服务器，单独项目地址：<a href="https://github.com/rcyj-FED/admin-tmpl-mock" target="_blank" rel="noopener noreferrer">https://github.com/rcyj-FED/admin-tmpl-mock<ExternalLinkIcon/></a>
mock在线测试地址：<a href="https://admin-tmpl-mock-test.rencaiyoujia.cn/" target="_blank" rel="noopener noreferrer">https://admin-tmpl-mock-test.rencaiyoujia.cn/<ExternalLinkIcon/></a></p>
<h3 id="单独启动-vue-admin" tabindex="-1"><a class="header-anchor" href="#单独启动-vue-admin" aria-hidden="true">#</a> 单独启动 vue admin</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">    yarn  </span><span style="color: #98C379">serve:dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多环境命令查看package.json  script:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #98C379">    &quot;serve:dev&quot;</span><span style="color: #ABB2BF">:</span><span style="color: #98C379"> &quot;cross-env NODE_ENV=development dotenv -e .env.dev.serve vue-cli-service serve&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #98C379">    &quot;build:dev&quot;</span><span style="color: #ABB2BF">:</span><span style="color: #98C379"> &quot;cross-env NODE_ENV=production  dotenv -e .env.dev.build vue-cli-service build&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #98C379">    &quot;serve:test&quot;</span><span style="color: #ABB2BF">:</span><span style="color: #98C379"> &quot;cross-env NODE_ENV=development dotenv -e .env.test.serve vue-cli-service serve&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #98C379">    &quot;build:test&quot;</span><span style="color: #ABB2BF">:</span><span style="color: #98C379"> &quot;cross-env NODE_ENV=production  dotenv -e .env.test.build vue-cli-service build&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #98C379">    &quot;serve:prod&quot;</span><span style="color: #ABB2BF">:</span><span style="color: #98C379"> &quot;cross-env NODE_ENV=development dotenv -e .env.prod.serve vue-cli-service serve&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #98C379">    &quot;build:prod&quot;</span><span style="color: #ABB2BF">:</span><span style="color: #98C379"> &quot;cross-env NODE_ENV=production  dotenv -e .env.prod.build vue-cli-service build&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> eslint</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">    yarn  </span><span style="color: #98C379">lint</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提交自动检测：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;gitHooks&quot;</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">&quot;pre-commit&quot;</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;lint-staged&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #98C379">&quot;lint-staged&quot;</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">&quot;*.{js,jsx,vue,ts,tsx}&quot;</span><span style="color: #ABB2BF">: [</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #98C379">&quot;vue-cli-service lint&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #98C379">&quot;git add&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    ]</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="browsers-support" tabindex="-1"><a class="header-anchor" href="#browsers-support" aria-hidden="true">#</a> Browsers support</h2>
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
<h2 id="讨论交流-qq群-584617908" tabindex="-1"><a class="header-anchor" href="#讨论交流-qq群-584617908" aria-hidden="true">#</a> 讨论交流（QQ群：584617908）</h2>
  <p align="left">
  <a  target="_blank">
    <img width="180" src="https://github.com/RainManGO/vue3-composition-admin/blob/main/IMAGE/QQ.JPG" alt="qq">
  </a>
</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/rcyj-FED/vue3-composition-admin/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
<p>Copyright (c) 2021-present</p>
</div></template>


