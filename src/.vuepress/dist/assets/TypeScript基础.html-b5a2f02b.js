import{_ as i,W as a,X as r,$ as s,a0 as e,a1 as l,Z as t,C as o}from"./framework-b8ce1a77.js";const c=""+new URL("1-6f288564.png",import.meta.url).href,p={},d=t(`<h1 id="typescript-基础" tabindex="-1"><a class="header-anchor" href="#typescript-基础" aria-hidden="true">#</a> TypeScript 基础</h1><h2 id="typescript-介绍" tabindex="-1"><a class="header-anchor" href="#typescript-介绍" aria-hidden="true">#</a> TypeScript 介绍</h2><h3 id="typescript为什么要为js添加类型支持" tabindex="-1"><a class="header-anchor" href="#typescript为什么要为js添加类型支持" aria-hidden="true">#</a> TypeScript为什么要为JS添加类型支持?</h3><ol><li><strong>背景：</strong> JS的类型系统存在“先天缺陷”，JS代码中绝大部分错误都是类型错误(UncaughtTypeError)。</li><li><strong>问题：</strong> 增加了找Bug、改Bug的时间，严重影响开发效率</li><li>从编程语言的动静来区分，TypeScript属于静态类型的编程语言，JS属于动态类型的编程语言。</li><li><strong>静态类型：</strong> 编译期做类型检查;动态类型:执行期做类型检查。</li><li><strong>编译和执行顺序：</strong> 1. 编译 2. 执行</li><li><strong>对于JS来说：</strong> 需要等到代码真正去执行的时候才能发现错误(晚)，对于 TS 来说:在代码编译的时候 (代码执行前)就可以发现错误 (早)。并且，配合VSCode 等开发工具，T5 可以提前到在编写代码的同时就发现代码中的错误，减少找 Bug、改 Bug 时间。</li></ol><h3 id="typescript相比js的优势" tabindex="-1"><a class="header-anchor" href="#typescript相比js的优势" aria-hidden="true">#</a> TypeScript相比JS的优势</h3><ol><li>更早 (写代码的同时)发现错误，减少找 Bug、改 Bug 时间，提升开发效率</li><li>程序中任何位置的代码都有代码提示，随时随地的安全感，增强了开发体验</li><li>强大的类型系统提升了代码的可维护性，使得重构代码更加容易</li><li>支持最新的 ECMAScript 语法，优先体验最新的语法，让你走在前端技术的最前沿</li><li>TS 类型推断机制，不需要在代码中的每个地方都显示标注类型，让你在享受优势的同时，尽量降低了成本。</li><li>除此之外，Vue3源码使用TS重写、Anqular默认支持TS、React与TS 完美配合，TypeScript已成为大中型前端项目的首先编程语言。</li></ol><h2 id="typescript初体验" tabindex="-1"><a class="header-anchor" href="#typescript初体验" aria-hidden="true">#</a> TypeScript初体验</h2><h3 id="安装编译ts的工具包" tabindex="-1"><a class="header-anchor" href="#安装编译ts的工具包" aria-hidden="true">#</a> 安装编译TS的工具包</h3><div class="hint-container tip"><p class="hint-container-title">问题： 为什么要安装编译TS的工具包?</p><p><strong>回答：</strong> Node.js/浏览器，只认识JS代码，不认识T5 代码。需要先将TS 代码转化为JS代码，然后才能运行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#ABB2BF;"> npm </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-g</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">typescript</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 证是否安装成功</span></span>
<span class="line"><span style="color:#ABB2BF;"> tsc </span><span style="color:#D19A66;">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typescript 包: 用来编译 TS 代码的包，提供了 <strong>tsc</strong> 命令，实现了<strong>TS -&gt; JS</strong> 的转化。 编译过程图 <img src="`+c+'" alt="" loading="lazy"></p></div><h3 id="编译并运行ts代码" tabindex="-1"><a class="header-anchor" href="#编译并运行ts代码" aria-hidden="true">#</a> 编译并运行TS代码</h3><ol><li>创建 <strong>hello.ts</strong> 文件（注意: TS文件的后缀名为 .ts）</li><li>将TS 编译为 JS:在终端中输命令，<strong>tsc hello.ts</strong> (此时，在同级目录中会出现一个同名的TS文件)</li><li>执行JS 代码：在终端中输入命令，<strong>node hello.js</strong></li></ol><h3 id="简化运行ts的步骤" tabindex="-1"><a class="header-anchor" href="#简化运行ts的步骤" aria-hidden="true">#</a> 简化运行TS的步骤</h3>',12),h={class:"hint-container tip"},S=s("p",{class:"hint-container-title"},"问题描述： 每次修改代码后，都要重复执行两个命令，才能运行TS代码，太繁琐。",-1),u=s("strong",null,"简化方式：",-1),g={href:"http://Node.is",target:"_blank",rel:"noopener noreferrer"},y=s("li",null,[s("strong",null,"安装命令："),e(),s("code",null,"npm i -g ts-node (ts-node 包提供了 ts-node 命令)")],-1),T=s("li",null,[s("strong",null,"使用方式："),e(" ts-node hello.ts")],-1),_=s("li",null,[s("strong",null,"解释："),e(" ts-node 命令在内部偷偷的将 TS->JS，然后，再运行JS代码")],-1),f=t('<h2 id="typescript-常用类型" tabindex="-1"><a class="header-anchor" href="#typescript-常用类型" aria-hidden="true">#</a> <strong>TypeScript</strong> 常用类型</h2><h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>TypeScript</strong> 是JS的超集，TS提供了JS的所有功能，并且额外的增加了：类型系统</p><ul><li>所有的JS代码都是TS代码。</li><li>JS有类型(比如，number/string等)，但是JS 不会检查变量的类型是否发生变化。而TS 会检查</li><li>TypeScript 类型系统的主要优势: 可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。</li></ul></div><h3 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h3>',4);function b(m,v){const n=o("ExternalLinkIcon");return a(),r("div",null,[d,s("div",h,[S,s("ul",null,[s("li",null,[u,e(" 使用 ts-node 包，直接在 "),s("a",g,[e("Node.is"),l(n)]),e(" 中执行TS代码")]),y,T,_])]),f])}const x=i(p,[["render",b],["__file","TypeScript基础.html.vue"]]);export{x as default};
