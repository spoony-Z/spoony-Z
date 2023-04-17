<template><div><h1 id="typescript-基础" tabindex="-1"><a class="header-anchor" href="#typescript-基础" aria-hidden="true">#</a> TypeScript 基础</h1>
<h2 id="typescript-介绍" tabindex="-1"><a class="header-anchor" href="#typescript-介绍" aria-hidden="true">#</a> TypeScript 介绍</h2>
<h3 id="typescript为什么要为js添加类型支持" tabindex="-1"><a class="header-anchor" href="#typescript为什么要为js添加类型支持" aria-hidden="true">#</a> TypeScript为什么要为JS添加类型支持?</h3>
<ol>
<li><strong>背景：</strong> JS的类型系统存在“先天缺陷”，JS代码中绝大部分错误都是类型错误(UncaughtTypeError)。</li>
<li><strong>问题：</strong> 增加了找Bug、改Bug的时间，严重影响开发效率</li>
<li>从编程语言的动静来区分，TypeScript属于静态类型的编程语言，JS属于动态类型的编程语言。</li>
<li><strong>静态类型：</strong> 编译期做类型检查;动态类型:执行期做类型检查。</li>
<li><strong>编译和执行顺序：</strong> 1. 编译 2. 执行</li>
<li><strong>对于JS来说：</strong> 需要等到代码真正去执行的时候才能发现错误(晚)，对于 TS 来说:在代码编译的时候 (代码执行前)就可以发现错误 (早)。并且，配合VSCode 等开发工具，T5 可以提前到在编写代码的同时就发现代码中的错误，减少找 Bug、改 Bug 时间。</li>
</ol>
<h3 id="typescript相比js的优势" tabindex="-1"><a class="header-anchor" href="#typescript相比js的优势" aria-hidden="true">#</a> TypeScript相比JS的优势</h3>
<ol>
<li>更早 (写代码的同时)发现错误，减少找 Bug、改 Bug 时间，提升开发效率</li>
<li>程序中任何位置的代码都有代码提示，随时随地的安全感，增强了开发体验</li>
<li>强大的类型系统提升了代码的可维护性，使得重构代码更加容易</li>
<li>支持最新的 ECMAScript 语法，优先体验最新的语法，让你走在前端技术的最前沿</li>
<li>TS 类型推断机制，不需要在代码中的每个地方都显示标注类型，让你在享受优势的同时，尽量降低了成本。</li>
<li>除此之外，Vue3源码使用TS重写、Anqular默认支持TS、React与TS 完美配合，TypeScript已成为大中型前端项目的首先编程语言。</li>
</ol>
<h2 id="typescript初体验" tabindex="-1"><a class="header-anchor" href="#typescript初体验" aria-hidden="true">#</a> TypeScript初体验</h2>
<h3 id="安装编译ts的工具包" tabindex="-1"><a class="header-anchor" href="#安装编译ts的工具包" aria-hidden="true">#</a> 安装编译TS的工具包</h3>
<div class="hint-container tip">
<p class="hint-container-title">问题： 为什么要安装编译TS的工具包?</p>
<p><strong>回答：</strong> Node.js/浏览器，只认识JS代码，不认识T5 代码。需要先将TS 代码转化为JS代码，然后才能运行。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 安装</span></span>
<span class="line"><span style="color: #ABB2BF"> npm </span><span style="color: #98C379">i</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">-g</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">typescript</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 证是否安装成功</span></span>
<span class="line"><span style="color: #ABB2BF"> tsc </span><span style="color: #D19A66">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typescript 包: 用来编译 TS 代码的包，提供了 <strong>tsc</strong> 命令，实现了<strong>TS -&gt; JS</strong> 的转化。
编译过程图
<img src="@source/learning-notes/TypeScript/images/1.png" alt="" loading="lazy"></p>
</div>
<h3 id="编译并运行ts代码" tabindex="-1"><a class="header-anchor" href="#编译并运行ts代码" aria-hidden="true">#</a> 编译并运行TS代码</h3>
<ol>
<li>创建 <strong>hello.ts</strong> 文件（注意: TS文件的后缀名为 .ts）</li>
<li>将TS 编译为 JS:在终端中输命令，<strong>tsc hello.ts</strong> (此时，在同级目录中会出现一个同名的TS文件)</li>
<li>执行JS 代码：在终端中输入命令，<strong>node hello.js</strong></li>
</ol>
<h3 id="简化运行ts的步骤" tabindex="-1"><a class="header-anchor" href="#简化运行ts的步骤" aria-hidden="true">#</a> 简化运行TS的步骤</h3>
<div class="hint-container tip">
<p class="hint-container-title">问题描述： 每次修改代码后，都要重复执行两个命令，才能运行TS代码，太繁琐。</p>
<ul>
<li><strong>简化方式：</strong> 使用 ts-node 包，直接在 <a href="http://Node.is" target="_blank" rel="noopener noreferrer">Node.is<ExternalLinkIcon/></a> 中执行TS代码</li>
<li><strong>安装命令：</strong> <code v-pre>npm i -g ts-node (ts-node 包提供了 ts-node 命令)</code></li>
<li><strong>使用方式：</strong> ts-node hello.ts</li>
<li><strong>解释：</strong> ts-node 命令在内部偷偷的将 TS-&gt;JS，然后，再运行JS代码</li>
</ul>
</div>
<h2 id="typescript-常用类型" tabindex="-1"><a class="header-anchor" href="#typescript-常用类型" aria-hidden="true">#</a> <strong>TypeScript</strong> 常用类型</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><strong>TypeScript</strong> 是JS的超集，TS提供了JS的所有功能，并且额外的增加了：类型系统</p>
<ul>
<li>所有的JS代码都是TS代码。</li>
<li>JS有类型(比如，number/string等)，但是JS 不会检查变量的类型是否发生变化。而TS 会检查</li>
<li>TypeScript 类型系统的主要优势: 可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。</li>
</ul>
</div>
<h3 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h3>
<div class="hint-container tip">
<p class="hint-container-title">示例代码</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>说明：</strong> 代码中的 <strong>number</strong> 就是类型注解。</li>
<li><strong>作用：</strong> 为变量添加类型约束。比如，上述代码中，约定变量age 的类型为 number (数值类型)</li>
<li><strong>解释：</strong> 约定了什么类型，就只能给变量赋值该类型的值，否则，就会报错</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 错误写法 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;18&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 正确写法 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="常用基础类型概述" tabindex="-1"><a class="header-anchor" href="#常用基础类型概述" aria-hidden="true">#</a> 常用基础类型概述</h3>
<p>可以将TS中的常用基础类型细分为两类:</p>
<ol>
<li><strong>jS已有类型</strong>
<ul>
<li><em>原始类型:</em> number/string/boolean/null/undefined/symbol</li>
<li><em>对象类型：</em> object (包括，数组、对象、函数等对象)</li>
</ul>
</li>
<li><strong>TS新增类型</strong>
<ul>
<li>联合类型、自定义类型(类型别名)、接口、元组、字面量类型、枚举、void、any 等</li>
</ul>
</li>
</ol>
<h3 id="原始类型" tabindex="-1"><a class="header-anchor" href="#原始类型" aria-hidden="true">#</a> 原始类型</h3>
<ul>
<li><strong>原始类型：</strong> number/string/boolean/null/undefined/symbol。</li>
<li><strong>特点：</strong> 简单。这些类型，完全按照JS中类型的名称来书写。</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">myName</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;杨胜军&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">isLoading</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">boolean</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">false</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">a</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">null</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">null</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">b</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">undefined</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">undefined</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">s</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">symbol</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Symbol</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E06C75">等等</span><span style="color: #ABB2BF"> 。。。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组类型" tabindex="-1"><a class="header-anchor" href="#数组类型" aria-hidden="true">#</a> 数组类型</h3>
<ul>
<li><strong>对象类型：</strong> object (包括，数组、对象、函数等对象)</li>
<li><strong>特点：</strong> 对象类型，在TS中更加细化，每个具体的对象都有自己的类型语法</li>
<li><strong>两种写法如下：（推荐使用第一种）</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 数组中只有一种类型 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">numberList</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">[] </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">];</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">stringList</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">Array</span><span style="color: #ABB2BF">&lt;</span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">&gt; </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span><span style="color: #98C379">&#39;a&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;b&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;c&#39;</span><span style="color: #ABB2BF">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>需求：</strong> 数组中既有 <strong>number</strong> 类型，又有 <strong>string</strong> 类型，这个数组的类型应该如何写?</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 数组中含有多种类型 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">arr</span><span style="color: #ABB2BF">: (</span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> | </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">)[] </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;a&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;b&#39;</span><span style="color: #ABB2BF">];</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 不加小括号 变量可以是多种类型 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">arr1</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> | </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;416&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">arr2</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> | </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">[] </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span><span style="color: #98C379">&#39;a&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;b&#39;</span><span style="color: #ABB2BF">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<p>| （竖线）在TS 中叫做<strong>联合类型</strong>(由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种)。</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>这是 TS 中联合类型的语法，只有一根竖线，不要与JS中的或 （ || ） 混淆了</p>
</div>
<h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h3>
<ul>
<li><strong>类型别名(自定义类型)：</strong> 为任意类型起别名</li>
<li><strong>使用场景：</strong> 当同一类型(复杂)被多次使用时，可以通过类型别名，简化该类型的使用。</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">type</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">CustomArray</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> (</span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> | </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">)[];</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">arr</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">CustomArray</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;a&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;b&#39;</span><span style="color: #ABB2BF">];</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">arr2</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">CustomArray</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;x&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;y&#39;</span><span style="color: #ABB2BF">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>使用 <strong>type</strong> 关键字来创建类型别名</li>
<li>类型别名(比如，此处的 <strong>CustomArray</strong> )，可以是任意合法的变量名称</li>
<li>创建类型别名后，直接使用该类型别名作为变量的类型注解即可</li>
</ul>
</div>
<h3 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h3>
<h4 id="函数的类型实际上指的是-函数参数和返回值的类型" tabindex="-1"><a class="header-anchor" href="#函数的类型实际上指的是-函数参数和返回值的类型" aria-hidden="true">#</a> <strong>函数的类型实际上指的是：函数参数和返回值的类型</strong></h4>
<blockquote>
<p><strong>为函数指定类型的两种方式:</strong></p>
<ol>
<li>单独指定参数、返回值的类型</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** function 函数写法 */</span></span>
<span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">number1</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75; font-style: italic">number2</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">): </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">number1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">number2</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 箭头函数写法 */</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> (</span><span style="color: #E06C75; font-style: italic">number1</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75; font-style: italic">number2</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">): </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">   </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">number1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">number2</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>同时指定参数、返回值的类型。</li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">: (</span><span style="color: #E06C75; font-style: italic">number1</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75; font-style: italic">number2</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> (</span><span style="color: #E06C75; font-style: italic">number1</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75; font-style: italic">number2</span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">   </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">number1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">number2</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<p>当函数作为表达式时，可以通过类似箭头函数形式的语法来为函数添加类型</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>这种形式只适用于函数表达式。</p>
</div>
</blockquote>
<h4 id="如果函数没有返回值-那么-函数返回值类型为-void" tabindex="-1"><a class="header-anchor" href="#如果函数没有返回值-那么-函数返回值类型为-void" aria-hidden="true">#</a> <strong>如果函数没有返回值，那么，函数返回值类型为: void</strong></h4>
<blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">greet</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">): </span><span style="color: #E5C07B">void</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h4 id="函数类型的可选参数" tabindex="-1"><a class="header-anchor" href="#函数类型的可选参数" aria-hidden="true">#</a> <strong>函数类型的可选参数</strong></h4>
<blockquote>
<p>使用函数实现某个功能时，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到可选参数了<br />
比如，数组的 <strong>slice</strong> 方法，可以 <strong>slice()</strong> 也可以 <strong>slice(1)</strong> 还可以 <strong>slice(1,3)</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">mySlice</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">start</span><span style="color: #C678DD">?</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75; font-style: italic">end</span><span style="color: #C678DD">?</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">): </span><span style="color: #E5C07B">void</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">   </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;起始索引&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">start</span><span style="color: #ABB2BF">, </span><span style="color: #98C379">&#39;结束索引&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">end</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #61AFEF">mySlice</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #61AFEF">mySlice</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #61AFEF">mySlice</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">可选参数</p>
<p>在可传可不传的参数名称后面添加 ? (问号)</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>可选参数只能出现在参数列表的最后，也就是说可选参数后面不能再出现必选参数。</p>
</div>
</blockquote>
<h3 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型" aria-hidden="true">#</a> 对象类型</h3>
<p><strong>]S 中的对象是由 属性 和 方法 构成的，而 TS 中对象的类型就是在描述对象的结构(有什么类型的 属性 和 方法 )</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">person</span><span style="color: #ABB2BF">: { </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">; </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">; </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">(): </span><span style="color: #E5C07B">void</span><span style="color: #ABB2BF">; </span><span style="color: #61AFEF">greet</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">): </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">} </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;杨胜军&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">(){},</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">greet</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">){}</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 多行 可以去掉封号 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">person</span><span style="color: #ABB2BF">: { </span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">: () </span><span style="color: #C678DD">=&gt;</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">void</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">greet</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">): </span><span style="color: #E5C07B">void</span></span>
<span class="line"><span style="color: #ABB2BF">    } </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;杨胜军&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">(){},</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">greet</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">){}</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>直接使用 {} 来描述对象结构。属性采用<strong>属性名： 类型</strong> 的形式，方法采用<strong>方法名(): 返回值类型</strong> 的形式。</li>
<li>如果方法有参数，就在方法名后面的小括号中指定参数类型(比如: <strong>greet(name:string): void</strong>)</li>
<li>在一行代码中指定对象的多个属性类型时，使用;(分号)来分隔</li>
<li>如果一行代码只指定一个属性类型(通过换行来分隔多个属性类型)，可以去掉;(分号)</li>
<li>方法的类型也可以使用箭头函数形式 (比如:{sayHi:()=&gt; void})</li>
</ul>
</div>
<p><strong>对象的属性或方法，也可以是可选的，此时就用到可选属性了</strong><br />
<strong>比如，我们在使用 axios({...}) 时，如果发送GET 请求，method 属性就可以省略</strong></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">myAxios</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">config</span><span style="color: #ABB2BF">: {</span><span style="color: #E06C75">url</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">; </span><span style="color: #E06C75">method</span><span style="color: #C678DD">?</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF"> }){</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">myAxios</span><span style="color: #ABB2BF">({</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">url</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">    })</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><strong>可选属性</strong> 的语法与<strong>函数可选参数</strong> 的语法<strong>一致</strong>，都使用?(问号)来表示。</p>
</div>
<h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3>
<h4 id="接口介绍" tabindex="-1"><a class="header-anchor" href="#接口介绍" aria-hidden="true">#</a> <strong>接口介绍</strong></h4>
<p>当一个对象类型被多次使用时，一般会使用接口 <strong>(interface)</strong> 来描述对象的类型，达到<strong>复用</strong>的目的</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 定义接口 */</span></span>
<span class="line"><span style="color: #C678DD">interface</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">IPerson</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">sayHi</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">void</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">person</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">IPerson</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;杨胜军&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">(){}</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>使用 <strong>interface</strong> 关键字来声明接口</li>
<li>接口名称 (比如，此处的 <strong>IPerson</strong>)，可以是任意合法的变量名称</li>
<li>声明接口后，直接<strong>使用接口名称作为变量的类型</strong></li>
<li>因为每一行只有一个属性类型，因此，属性类型后没有;(分号)</li>
</ul>
</div>
</div></template>


