<template><div><h1 id="typescript-常用类型" tabindex="-1"><a class="header-anchor" href="#typescript-常用类型" aria-hidden="true">#</a> <strong>TypeScript</strong> 常用类型</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><strong>TypeScript</strong> 是JS的超集，TS提供了JS的所有功能，并且额外的增加了：类型系统</p>
<ul>
<li>所有的JS代码都是TS代码。</li>
<li>JS有类型(比如，number/string等)，但是JS 不会检查变量的类型是否发生变化。而TS 会检查</li>
<li>TypeScript 类型系统的主要优势: 可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。</li>
</ul>
</div>
<h2 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h2>
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
<h2 id="常用基础类型概述" tabindex="-1"><a class="header-anchor" href="#常用基础类型概述" aria-hidden="true">#</a> 常用基础类型概述</h2>
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
<h2 id="原始类型" tabindex="-1"><a class="header-anchor" href="#原始类型" aria-hidden="true">#</a> 原始类型</h2>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组类型" tabindex="-1"><a class="header-anchor" href="#数组类型" aria-hidden="true">#</a> 数组类型</h2>
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
<h2 id="类型别名-type" tabindex="-1"><a class="header-anchor" href="#类型别名-type" aria-hidden="true">#</a> 类型别名（type）</h2>
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
<h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2>
<h3 id="函数的类型实际上指的是-函数参数和返回值的类型" tabindex="-1"><a class="header-anchor" href="#函数的类型实际上指的是-函数参数和返回值的类型" aria-hidden="true">#</a> <strong>函数的类型实际上指的是：函数参数和返回值的类型</strong></h3>
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
<h3 id="如果函数没有返回值-那么-函数返回值类型为-void" tabindex="-1"><a class="header-anchor" href="#如果函数没有返回值-那么-函数返回值类型为-void" aria-hidden="true">#</a> <strong>如果函数没有返回值，那么，函数返回值类型为: void</strong></h3>
<blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">greet</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">): </span><span style="color: #E5C07B">void</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="函数类型的可选参数" tabindex="-1"><a class="header-anchor" href="#函数类型的可选参数" aria-hidden="true">#</a> <strong>函数类型的可选参数</strong></h3>
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
<h2 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型" aria-hidden="true">#</a> 对象类型</h2>
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
<h2 id="接口-interface" tabindex="-1"><a class="header-anchor" href="#接口-interface" aria-hidden="true">#</a> 接口（interface）</h2>
<h3 id="接口介绍" tabindex="-1"><a class="header-anchor" href="#接口介绍" aria-hidden="true">#</a> <strong>接口介绍</strong></h3>
<p>当一个对象类型被多次使用时，一般会使用接口 <strong>(interface)</strong> 来描述对象的类型，达到<strong>复用</strong>的目的</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 定义接口 */</span></span>
<span class="line"><span style="color: #C678DD">interface</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">IPerson</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">(): </span><span style="color: #E5C07B">void</span></span>
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
<h3 id="interface-接口-和-type-的对比" tabindex="-1"><a class="header-anchor" href="#interface-接口-和-type-的对比" aria-hidden="true">#</a> <strong>interface</strong>(接口) 和 type 的对比</h3>
<ul>
<li><strong>相同点</strong>：都可以给对象指定类型</li>
<li><strong>不同点</strong>：
<blockquote>
<ul>
<li>接口，只能为对象指定类型</li>
<li>类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名</li>
</ul>
</blockquote>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 接口 */</span></span>
<span class="line"><span style="color: #C678DD">interface</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">IPerson1</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">(): </span><span style="color: #E5C07B">void</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">person</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">IPerson1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;杨胜军&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">(){}</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 类型别名 */</span></span>
<span class="line"><span style="color: #C678DD">type</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">IPerson2</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    name: string</span></span>
<span class="line"><span style="color: #ABB2BF">    age: number</span></span>
<span class="line"><span style="color: #ABB2BF">    sayHi(): void</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">person</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">IPerson2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;杨胜军&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sayHi</span><span style="color: #ABB2BF">(){}</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">type</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">NumStr</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> | </span><span style="color: #E5C07B">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口继承" tabindex="-1"><a class="header-anchor" href="#接口继承" aria-hidden="true">#</a> 接口继承</h3>
<p><strong>使用场景：</strong> 如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** Point3D 继承 Poin2D 的属性 */</span></span>
<span class="line"><span style="color: #C678DD">interface</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Point2D</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">x</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">y</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">interface</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Point3D</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">extends</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Point2D</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">z</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p3</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">Point3D</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">x</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">y</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;10&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">z</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">10</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ol>
<li>使用 <strong>extends</strong> (继承)关键字实现了接口 Point3D 继承Point2D</li>
<li>继承后，Point3D就有了 Point2D 的所有属性和方法(此时，Point3D 同时有X、y、Z三个属性)</li>
</ol>
</div>
<h2 id="元组-tuple" tabindex="-1"><a class="header-anchor" href="#元组-tuple" aria-hidden="true">#</a> 元组（Tuple）</h2>
<p><strong>场景：</strong> 指定数组的固定长度与类型</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 元组的使用 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">postion</span><span style="color: #ABB2BF">: [</span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">] </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> [</span><span style="color: #D19A66">44</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">44</span><span style="color: #ABB2BF">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ol>
<li>元组类型可以确切地标记出有多少个元素，以及每个元素的类型</li>
<li>该示例中，元素有两个元素，每个元素的类型都是number 不能添加第三个或者更多</li>
</ol>
</div>
<h2 id="类型推论" tabindex="-1"><a class="header-anchor" href="#类型推论" aria-hidden="true">#</a> 类型推论</h2>
<p><strong>介绍：</strong> 由于类型推论的存在，有些地方，类型注解可以省略不写!<br /></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 省略前 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">44</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 省略后 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">44</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意：只有这两种场景可以使用！</p>
<ul>
<li>
<ol>
<li>声明变量并初始化时</li>
</ol>
</li>
<li>
<ol start="2">
<li>决定函数返回值时</li>
</ol>
</li>
</ul>
</div>
<p><strong>推荐：</strong> 能省略类型注解的地方就省略 (偷懒，充分利用TS类型推论的能力，提升开发效率)<br />
<strong>技巧：</strong> 如果不知道类型，可以通过鼠标放在变量名称上，利用VSCode的提示来查看类型。</p>
<h2 id="类型断言-as" tabindex="-1"><a class="header-anchor" href="#类型断言-as" aria-hidden="true">#</a> 类型断言（as）</h2>
<p><strong>介绍：</strong> 有时候你会比TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">a</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">href</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;https://spoony-z.gitee.io/spoony-z/&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">id</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;link&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #FFFFFF">/</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">aLink</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">document</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">getElementById</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;link&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #E5C07B">aLink</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">href</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic">// 访问不到 href 属性</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意：getElementByld方法返回值的类型是 HTMLElement，该类型只包含所有标签公共的属性或方法，不包含a标签特有的 href 等属性。</p>
<p>因此，这个类型太宽泛(不具体)，无法操作 href等a标签特有的属性或方法
解决方式：使用类型断言指定更加具体的类型</p>
</div>
<p>使用类型断言</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">aLink</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">document</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">getElementById</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;link&quot;</span><span style="color: #ABB2BF">) </span><span style="color: #C678DD">as</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">HTMLAnchorElement</span></span>
<span class="line"><span style="color: #E5C07B">aLink</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">href</span><span style="color: #ABB2BF"> </span><span style="color: #7F848E; font-style: italic">// 可以访问 href 属性</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ol>
<li>使用 as 关键字实现类型断言。</li>
<li>关键字 as 后面的类型是一个更加具体的类型 ( HTMLAnchorElement 是 HTMLElement 的子类型)</li>
<li>通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了<br />
<strong>另一种语法，使用&lt;&gt;语法，这种语法形式不常用</strong></li>
</ol>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">aLink</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> &lt;</span><span style="color: #E5C07B">HTMLAnchorElement</span><span style="color: #ABB2BF">&gt;</span><span style="color: #E5C07B">document</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">getElementById</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;link&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<p><strong>技巧：</strong> 在浏览器控制台，通过console.dir() 打印 DOM 元素，在属性列表的最后面，即可看到该元素的类型。</p>
<ol>
<li>打开控制选中元素</li>
<li>控制台输入：console.dir($0) //选中的元素为$0</li>
</ol>
<h2 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型" aria-hidden="true">#</a> 字面量类型</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** str1 的类型为 string */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">str1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;Hello TS&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** str1 的类型为 &#39;Hello TS&#39; */</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">str2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;Hello TS&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>str1 是一个变量 (let)，它的值可以是任意字符串，所以类型为: string。</li>
<li>str2 是一个常量 (const)，它的值不能变化只能是Hello TS'，所以，它的类型为:HelloTS'。</li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意!</p>
<p>此处的 'Hello TS'，就是一个字面量类型。也就是说某个特定的字符串也可以作为TS 中的类型<br />
除字符串外，任意的JS 字面量 (比如，对象、数字等)都可以作为类型使用</p>
</div>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** age 的类型为 18 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 报错 age 的类型为 18 所以只能等于18 */</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// let age: 18 = 19;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用模式：</strong> 字面量类型配合联合类型一起使用。<br />
<strong>使用场景：</strong> 用来表示一组明确的可选值列表 比如：方向的可选值只能是上、下、左、右中的任意一个 <br /></p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">direction</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;up&#39;</span><span style="color: #ABB2BF"> | </span><span style="color: #98C379">&#39;down&#39;</span><span style="color: #ABB2BF"> | </span><span style="color: #98C379">&#39;left&#39;</span><span style="color: #ABB2BF"> | </span><span style="color: #98C379">&#39;right&#39;</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">direction</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 参数direction 的值只能是up/down/left/right 中的任意一个 */</span></span>
<span class="line"><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;up&#39;</span><span style="color: #ABB2BF">) </span><span style="color: #7F848E; font-style: italic">// up</span></span>
<span class="line"><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;down&#39;</span><span style="color: #ABB2BF">) </span><span style="color: #7F848E; font-style: italic">// down</span></span>
<span class="line"><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;bnm&#39;</span><span style="color: #ABB2BF">) </span><span style="color: #7F848E; font-style: italic">// 报错</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优势：</strong> 相比于string 类型，使用字面量类型更加精确、严谨。</p>
<h2 id="枚举-enum" tabindex="-1"><a class="header-anchor" href="#枚举-enum" aria-hidden="true">#</a> 枚举（enum）</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>类似于字面量类型 + 联合类型组合的功能，也可以表示一组明确的可选值</p>
<h3 id="数字枚举" tabindex="-1"><a class="header-anchor" href="#数字枚举" aria-hidden="true">#</a> 数字枚举</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 定义枚举 */</span></span>
<span class="line"><span style="color: #C678DD">enum</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Up</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Down</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Left</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Right</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">direction</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">direction</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 调用函数 */</span></span>
<span class="line"><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">Left</span><span style="color: #ABB2BF">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ol>
<li>使用 enum 关键字定义枚举</li>
<li>约定枚举名称、枚举中的值以大写字母开头。</li>
<li>枚举中的多个值之间通过，(逗号)分隔。</li>
<li>定义好枚举后，直接使用枚举名称作为类型注解</li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意!</p>
<ul>
<li>形参 <strong>direction</strong> 的类型为枚举 <strong>Direction</strong>，那么，实参的值就应该是枚举 <strong>Direction</strong> 成员的任意一个。</li>
<li>直接通过点 (.) 语法访问枚举的成员</li>
<li>枚举成员是有值的，默认为: 从0 开始自增的数值</li>
<li>把枚举成员的值为数字的枚举，称为：数字枚举</li>
<li>也可以给枚举中的成员初始化值</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 定义枚举 */</span></span>
<span class="line"><span style="color: #C678DD">enum</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Up</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Down</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">20</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Left</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">30</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Right</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">direction</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">direction</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 调用函数 */</span></span>
<span class="line"><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">Left</span><span style="color: #ABB2BF">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="字符串枚举" tabindex="-1"><a class="header-anchor" href="#字符串枚举" aria-hidden="true">#</a> 字符串枚举</h3>
<p><strong>字符串枚举：</strong> 枚举成员的值是字符串</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 定义枚举 */</span></span>
<span class="line"><span style="color: #C678DD">enum</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Up</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;UP&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Down</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;DOWN&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Left</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;LEFT&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">Right</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;RIGHT&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">direction</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75">direction</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 调用函数 */</span></span>
<span class="line"><span style="color: #61AFEF">changeDirection</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Direction</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">Left</span><span style="color: #ABB2BF">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意!</p>
<p>字符串枚举没有自增长行为，因此，字符串枚举的每个成员必须有初始值</p>
</div>
<h2 id="any-类型" tabindex="-1"><a class="header-anchor" href="#any-类型" aria-hidden="true">#</a> any 类型</h2>
<p><strong>原则：</strong> 不推荐使用any！会让TypeScript 变为“AnyScript”（失去TS类型保护的优势）
因为当值的类型为 any 时，可以对该值进行任意操作，并且不会有代码提示。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">obj</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">any</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span><span style="color: #E06C75">x</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 访问不存在的属性 或 赋值 */</span></span>
<span class="line"><span style="color: #E5C07B">obj</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">aaa</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">obj</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">aaa</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 当做函数调用 */</span></span>
<span class="line"><span style="color: #61AFEF">obj</span><span style="color: #ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<p>以上操作都不会有任何类型错误提示，即使可能存在错误!
尽可能的避免使用 any 类型，除非临时使用 any 来“避免”书写很长、很复杂的类型!<br />
<strong>其他隐式具有any类型的情况</strong></p>
<ol>
<li>声明变量不提供类型也不提供默认值时</li>
<li>函数参数不加类型时</li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意！</p>
<p>因为不推荐使用any，所以，以上两种情况下都应该提供类型!</p>
</div>
<h2 id="typeof操作符" tabindex="-1"><a class="header-anchor" href="#typeof操作符" aria-hidden="true">#</a> typeof操作符</h2>
<h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3>
<p>在JS 中的 typeof 操作符用来获取数据的类型 <br />
在TS 中可以在类型上下文中引用变量或属性的类型(<strong>类型查询</strong>)</p>
<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3>
<p>根据已有变量的值，获取该值的类型，来简化类型书写</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 在js 中判断类型 输出string */</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">typeof</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;Hello&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 在 ts 中 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span><span style="color: #E06C75">x</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">y</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">};</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 不使用 typeof */</span></span>
<span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">formPoint</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">point</span><span style="color: #ABB2BF">: {</span><span style="color: #E06C75">x</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">; </span><span style="color: #E06C75">y</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">}){}</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 使用 typeof */</span></span>
<span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">formPoint</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">point</span><span style="color: #ABB2BF">: </span><span style="color: #C678DD">typeof</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">){}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ol>
<li>使用 typeof 操作符来获取变量p 的类型，结果与第一种 (对象字面量形式的类型)相同</li>
<li><strong>typeof</strong> 出现在类型注解的位置(参数名称的冒号后面)所处的环境就在类型上下文(区别于JS代码)</li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意！</p>
<p><strong>typeof</strong> 只能用来查询变量或属性的类型，无法查询其他形式的类型(比如，函数调用的类型)</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 查询对象属性的类型 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span><span style="color: #E06C75">x</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75">y</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">num</span><span style="color: #ABB2BF">: </span><span style="color: #C678DD">typeof</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">x</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 查询对象函数的类型 */</span></span>
<span class="line"><span style="color: #C678DD">function</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">num1</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75; font-style: italic">num2</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">num1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">num2</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 报错 不能查询函数的类型 */</span></span>
<span class="line"><span style="color: #C678DD">let</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">ret</span><span style="color: #ABB2BF">: </span><span style="color: #C678DD">typeof</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">add</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
</div></template>


