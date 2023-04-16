<template><div><h1 id="vue-next-admin" tabindex="-1"><a class="header-anchor" href="#vue-next-admin" aria-hidden="true">#</a> vue-next-admin</h1>
<!-- more -->
<h2 id="🌈-介绍" tabindex="-1"><a class="header-anchor" href="#🌈-介绍" aria-hidden="true">#</a> 🌈 介绍</h2>
<p>基于 vue3.x + CompositionAPI setup 语法糖 + typescript + vite + element plus + vue-router-next + pinia 技术，适配手机、平板、pc 的后台开源免费模板，希望减少工作量，帮助大家实现快速开发。</p>
<h2 id="⛱️-线上预览" tabindex="-1"><a class="header-anchor" href="#⛱️-线上预览" aria-hidden="true">#</a> ⛱️ 线上预览</h2>
<ul>
<li>vue3.x 版本预览（vue-next-admin）<a href="https://lyt-top.gitee.io/vue-next-admin-preview/#/login" target="_blank"><a href="https://lyt-top.gitee.io/vue-next-admin-preview/#/login" target="_blank" rel="noopener noreferrer">https://lyt-top.gitee.io/vue-next-admin-preview/#/login<ExternalLinkIcon/></a></a></li>
<li>vue2.x 版本预览（vue-prev-admin）<a href="https://lyt-top.gitee.io/vue-prev-admin-preview/#/login" target="_blank"><a href="https://lyt-top.gitee.io/vue-prev-admin-preview/#/login" target="_blank" rel="noopener noreferrer">https://lyt-top.gitee.io/vue-prev-admin-preview/#/login<ExternalLinkIcon/></a></a></li>
</ul>
<h2 id="💒-代码仓库" tabindex="-1"><a class="header-anchor" href="#💒-代码仓库" aria-hidden="true">#</a> 💒 代码仓库</h2>
<ul>
<li>vue3.x 版本 <a href="https://gitee.com/lyt-top/vue-next-admin" target="_blank"><a href="https://gitee.com/lyt-top/vue-next-admin" target="_blank" rel="noopener noreferrer">https://gitee.com/lyt-top/vue-next-admin<ExternalLinkIcon/></a></a></li>
<li>vue2.x 版本 <a href="https://gitee.com/lyt-top/vue-next-admin/tree/vue-prev-admin" target="_blank"><a href="https://gitee.com/lyt-top/vue-next-admin/tree/vue-prev-admin" target="_blank" rel="noopener noreferrer">https://gitee.com/lyt-top/vue-next-admin/tree/vue-prev-admin<ExternalLinkIcon/></a></a></li>
</ul>
<h2 id="🚧-安装-cnpm、yarn" tabindex="-1"><a class="header-anchor" href="#🚧-安装-cnpm、yarn" aria-hidden="true">#</a> 🚧 安装 cnpm、yarn</h2>
<ul>
<li>复制代码(桌面 cmd 运行) <code v-pre>npm install -g cnpm --registry=https://registry.npm.taobao.org</code></li>
<li>复制代码(桌面 cmd 运行) <code v-pre>npm install -g yarn</code></li>
</ul>
<h2 id="🏭-环境支持" tabindex="-1"><a class="header-anchor" href="#🏭-环境支持" aria-hidden="true">#</a> 🏭 环境支持</h2>
<table>
<thead>
<tr>
<th>Edge</th>
<th>Firefox</th>
<th>Chrome</th>
<th>Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td>Edge ≥ 88</td>
<td>Firefox ≥ 78</td>
<td>Chrome ≥ 87</td>
<td>Safari ≥ 13</td>
</tr>
</tbody>
</table>
<blockquote>
<p>由于 Vue3 不再支持 IE11，故而 ElementPlus 也不支持 IE11 及之前版本。</p>
</blockquote>
<h2 id="⚡-使用说明" tabindex="-1"><a class="header-anchor" href="#⚡-使用说明" aria-hidden="true">#</a> ⚡ 使用说明</h2>
<p>建议使用 cnpm，因为 yarn 有时会报错。<a href="http://nodejs.cn/" target="_blank">node 版本 &gt; 14.18+/16+</a></p>
<blockquote>
<p>Vite 不再支持 Node 12 / 13 / 15，因为上述版本已经进入了 EOL 阶段。现在你必须使用 Node 14.18+ / 16+ 版本。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 克隆项目</span></span>
<span class="line"><span style="color: #ABB2BF">git </span><span style="color: #98C379">clone</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">https://gitee.com/lyt-top/vue-next-admin.git</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 进入项目</span></span>
<span class="line"><span style="color: #56B6C2">cd</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">vue-next-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 安装依赖</span></span>
<span class="line"><span style="color: #ABB2BF">cnpm </span><span style="color: #98C379">install</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 运行项目</span></span>
<span class="line"><span style="color: #ABB2BF">cnpm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 打包发布</span></span>
<span class="line"><span style="color: #ABB2BF">cnpm </span><span style="color: #98C379">run</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">build</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📚-开发文档" tabindex="-1"><a class="header-anchor" href="#📚-开发文档" aria-hidden="true">#</a> 📚 开发文档</h2>
<ul>
<li>查看开发文档：<a href="https://lyt-top.gitee.io/vue-next-admin-doc-preview" target="_blank">vue-next-admin-doc</a></li>
</ul>
<h2 id="💯-学习交流加-qq-群" tabindex="-1"><a class="header-anchor" href="#💯-学习交流加-qq-群" aria-hidden="true">#</a> 💯 学习交流加 QQ 群</h2>
<blockquote>
<p>若加群了没同意（一般秒过），那就是群满了（500 人群），请换一个群试试。群会定期清理半年（6 个月）未发言的群友，资源有限，请谅解。建议勿加多群，可能会误伤！微信群由于只有 <code v-pre>7天有效</code> 就不放这里了。</p>
</blockquote>
<ul>
<li>
<p>1 群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=RdUY97Vx0T0vZ_1OOu-X1yFNkWgDwbjC&jump_from=webapi">665452019</a></p>
</li>
<li>
<p>2 群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=zVfy3gNy7pNWVK3kMduDzwU369PZg2fw&jump_from=webapi">766356862</a></p>
</li>
<li>
<p>3 群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=02EWb5P2JkP-8iwzaDadgFdxA0HSHPpn&jump_from=webapi">795345435</a></p>
</li>
<li>
<p>4 群：<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=0gTFO04WwkeZZ6R4lju6gucbeXHK-wNd&jump_from=webapi">736626228</a></p>
<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=RdUY97Vx0T0vZ_1OOu-X1yFNkWgDwbjC&jump_from=webapi">
	<img src="https://img-blog.csdnimg.cn/35e00f12a3fe4820892ec630ca72f15f.png" width="220" height="220" alt="vue-next-admin 讨论群1" title="vue-next-admin 讨论群1"/>
</a>
<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=zVfy3gNy7pNWVK3kMduDzwU369PZg2fw&jump_from=webapi">
	<img src="https://img-blog.csdnimg.cn/5f1b548abd9f434eb41edde31d1c1fa9.png" width="220" height="220" alt="vue-next-admin 讨论群2" title="vue-next-admin 讨论群2"/>
</a>
<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=02EWb5P2JkP-8iwzaDadgFdxA0HSHPpn&jump_from=webapi">
	<img src="https://img-blog.csdnimg.cn/70c8a012dd304246bddeac2184c4ab3a.png" width="220" height="220" alt="vue-next-admin 讨论群3" title="vue-next-admin 讨论群3"/>
</a>
<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=0gTFO04WwkeZZ6R4lju6gucbeXHK-wNd&jump_from=webapi">
	<img src="https://img-blog.csdnimg.cn/e5c9704eed1342bc9d9e74b37203402d.png" width="220" height="220" alt="vue-next-admin 讨论群4" title="vue-next-admin 讨论群4"/>
</a>
</li>
</ul>
<h2 id="💒-集成后端" tabindex="-1"><a class="header-anchor" href="#💒-集成后端" aria-hidden="true">#</a> 💒 集成后端</h2>
<ul>
<li><a target="_blank" href="https://github.com/PandaGoAdmin/PandaX">@熊猫 PandaGoAdmin</a></li>
<li><a target="_blank" href="https://toscode.gitee.com/GionConnection/gopro_free">@甜蜜蜜 GoPro 平台</a></li>
<li><a target="_blank" href="https://gitee.com/GionConnection/niupi-free">@甜蜜蜜 NiuPi 平台</a></li>
<li><a target="_blank" href="https://gitee.com/tiger1103/gfast/tree/os-v3/">@游子 GFast-V3</a></li>
<li><a target="_blank" href="https://gitee.com/diygw/diygw-ui-php/">@diygw.com gw-ui-php</a></li>
<li><a target="_blank" href="https://gitee.com/zsvg/vboot-net">@zsvg vboot-net</a></li>
<li><a target="_blank" href="https://gitee.com/zsvg/vboot-java">@zsvg vboot-java</a></li>
<li><a target="_blank" href="https://gitee.com/wonderful-code/buildadmin">@青红造了个白 buildadmin</a></li>
<li><a target="_blank" href="https://github.com/xiaodingding/iotfast">@Goodwell iotfast(一个开源的物联网平台)</a></li>
</ul>
<h2 id="❤️-鸣谢列表" tabindex="-1"><a class="header-anchor" href="#❤️-鸣谢列表" aria-hidden="true">#</a> ❤️ 鸣谢列表</h2>
<ul>
<li><a href="https://github.com/vuejs/vue" target="_blank">vue</a></li>
<li><a href="https://github.com/vuejs/vue-next" target="_blank">vue-next</a></li>
<li><a href="https://github.com/ElemeFE/element" target="_blank">element-ui</a></li>
<li><a href="https://github.com/element-plus/element-plus" target="_blank">element-plus</a></li>
<li><a href="https://github.com/vuejs/vue-router-next" target="_blank">vue-router-next</a></li>
<li><a href="https://github.com/vuejs/pinia" target="_blank">pinia</a></li>
<li><a href="https://github.com/apache/echarts" target="_blank">echarts</a></li>
<li><a href="https://github.com/axios/axios" target="_blank">axios</a></li>
<li><a href="https://github.com/zenorocha/clipboard.js" target="_blank">clipboard</a></li>
<li><a href="https://github.com/inorganik/countUp.js" target="_blank">countUp</a></li>
<li><a href="https://github.com/developit/mitt" target="_blank">mitt</a></li>
<li><a href="https://github.com/rstacruz/nprogress" target="_blank">nprogress</a></li>
<li><a href="https://github.com/sindresorhus/screenfull.js" target="_blank">screenfull</a></li>
<li><a href="https://github.com/SortableJS/Sortable" target="_blank">sortablejs</a></li>
<li><a href="https://github.com/sass/sass" target="_blank">sass</a></li>
<li><a href="https://github.com/microsoft/TypeScript" target="_blank">typescript</a></li>
<li><a href="https://github.com/vitejs/vite" target="_blank">vite</a></li>
<li><a href="https://github.com/wangeditor-team/wangEditor" target="_blank">wangeditor</a></li>
<li><a href="https://github.com/fengyuanchen/cropperjs" target="_blank">cropperjs</a></li>
<li><a href="https://github.com/davidshimjs/qrcodejs" target="_blank">qrcodejs</a></li>
<li><a href="https://github.com/crabbly/Print.js" target="_blank">print-js</a></li>
<li><a href="https://github.com/jbaysolutions/vue-grid-layout" target="_blank">vue-grid-layout</a></li>
<li><a href="https://github.com/antoniandre/splitpanes" target="_blank">splitpanes</a></li>
<li><a href="https://github.com/jsplumb/jsplumb" target="_blank">jsplumb</a></li>
<li><a href="https://github.com/hxj9102/table2excel" target="_blank">js-table2excel</a></li>
</ul>
<h2 id="💕-特别感谢" tabindex="-1"><a class="header-anchor" href="#💕-特别感谢" aria-hidden="true">#</a> 💕 特别感谢</h2>
<p>特别感谢老哥们的建议、指导与帮忙。谢谢！</p>
<ul>
<li><a href="https://gitee.com/click33/sa-plus" target="_blank">@省长</a></li>
<li><a href="https://gitee.com/jskz/Jskz-SpringCloud" target="_blank">@唐参</a></li>
<li><a href="https://gitee.com/chuange" target="_blank">@川歌</a></li>
<li>@华仔</li>
</ul>
</div></template>


