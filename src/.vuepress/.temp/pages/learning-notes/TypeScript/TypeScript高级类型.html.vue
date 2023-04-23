<template><div><h1 id="typescript高级类型" tabindex="-1"><a class="header-anchor" href="#typescript高级类型" aria-hidden="true">#</a> TypeScript高级类型</h1>
<h2 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> class 类</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p><strong>Typescript</strong> 全面支持 ES2015 中引入的 <strong>class</strong> 关键字，并为其添加了类型注解和其他语法(比如，可见性修饰符等)</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 基本使用 </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 声明成员age，类型为number (没有初始值)</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 声明成员 gender，并设置初始值，此时，可省略类型注解 (TS类型推论为 string 类型)</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> **/</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">gender</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;男&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 此时 p 的类型为 Person */</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">gender</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">/** 不能指定构造器的返回值类型 */</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// constructor(age: number, gender: string): number{}</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">constructor</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">, </span><span style="color: #E06C75; font-style: italic">gender</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">string</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">gender</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">gender</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">， </span><span style="color: #98C379">&quot;男&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">gender</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ol>
<li>根据 TS 中的类型推断，可知道Person类的实例对象 p 的类型是Person</li>
<li>TS 中的 <strong>class</strong> 不仅提供了class 的语法功能，也作为一种类型存在。</li>
<li>需要为构造函数指定类型注解，否则会被隐式推断为any；构造函数不需要返回值类型</li>
</ol>
</div>
<h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h3>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Point</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">x</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">y</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">scale</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">n</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">x</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">*=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">n</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">y</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">*=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">n</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">P</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Ponit</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">scale</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">x</span><span style="color: #ABB2BF">, </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">y</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<p>方法的类型注解(参数和返回值)与函数用法相同。</p>
</div>
<h3 id="class-的继承" tabindex="-1"><a class="header-anchor" href="#class-的继承" aria-hidden="true">#</a> class 的继承</h3>
<p><strong>两种方式：</strong></p>
<ul>
<li><strong>extends</strong> （继承父类）</li>
<li><strong>implements</strong>（实现接口）</li>
</ul>
<blockquote>
<p><strong>说明：</strong> JS 中只有 <strong>extends</strong>，而 <strong>implements</strong> 是TS 提供的</p>
</blockquote>
<h4 id="使用-extends-继承" tabindex="-1"><a class="header-anchor" href="#使用-extends-继承" aria-hidden="true">#</a> <strong>使用 extends 继承</strong></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Animal</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是Animal类&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Dog</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">extends</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Animal</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">bark</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是Dog类，继承Animal类&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">d</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Dog</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E5C07B">d</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E5C07B">d</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">bark</span><span style="color: #ABB2BF">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>通过 <strong>extends</strong> 关键字实现继承。</li>
<li>子类 Dog 继承父类 Animal，则 Dog 的实例对象dog 就同时具有了父类 Animal 和子类 Dog 的所有属性和方法</li>
</ul>
</div>
<h4 id="使用-implements-继承" tabindex="-1"><a class="header-anchor" href="#使用-implements-继承" aria-hidden="true">#</a> <strong>使用 implements 继承</strong></h4>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">interface</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Singable</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sing</span><span style="color: #ABB2BF">(): </span><span style="color: #E5C07B">void</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">implements</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Singabl</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">sing</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;实现接口implements&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>通过 <strong>implements</strong> 关键字让 <strong>class</strong> 实现接口</li>
<li><strong>Person</strong> 类实现接口 <strong>Singable</strong> 意味着，<strong>Person</strong> 类中必须提供 <strong>Singable</strong> 接口中指定的所有方法和属性</li>
</ul>
</div>
<h3 id="class-的修饰符" tabindex="-1"><a class="header-anchor" href="#class-的修饰符" aria-hidden="true">#</a> class 的修饰符</h3>
<h4 id="public-公有的" tabindex="-1"><a class="header-anchor" href="#public-公有的" aria-hidden="true">#</a> <strong>public(公有的)</strong></h4>
<blockquote>
<p>表示公有的、公开的，公有成员可以被任何地方访问，默认可见性</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Animal</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">public</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是Animal类&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Dog</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">extends</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Animal</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">bark</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是Dog类，继承Animal类&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">d</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Dog</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E5C07B">d</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E5C07B">d</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">bark</span><span style="color: #ABB2BF">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>在类属性或方法前面添加 <strong>public</strong> 关键字，来修饰该属性或方法是共有的。</li>
<li>因为 <strong>public</strong> 是默认可见性，所以，可以直接省略。</li>
</ul>
</div>
<h4 id="protected" tabindex="-1"><a class="header-anchor" href="#protected" aria-hidden="true">#</a> <strong>protected</strong></h4>
<blockquote>
<p>表示受保护的，仅对其声明所在类和子类中(非实例对象)可见</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Animal</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">protected</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是Animal类&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">son</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** 可以访问 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Dog</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">extends</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Animal</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">bark</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是Dog类，继承Animal类&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">/** 可以访问 */</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">() </span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">d</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Dog</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 不能访问 报错 */</span></span>
<span class="line"><span style="color: #E5C07B">d</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E5C07B">d</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">bark</span><span style="color: #ABB2BF">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>在类属性或方法前面添加 <strong>protected</strong> 关键字，来修饰该属性或方法是受保护的</li>
<li>在子类的方法内部可以通过 <strong>this</strong> 来访问父类中受保护的成员，但是，<strong>对实例不可见</strong>!</li>
</ul>
</div>
<h4 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> <strong>private</strong></h4>
<blockquote>
<p>表示私有的，只在当前类中可见，对实例对象以及子类也是不可见的</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Animal</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">private</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是Animal类&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">protected</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">son</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** 可以访问 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Dog</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">extends</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Animal</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">bark</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">console</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">log</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是Dog类，继承Animal类&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">/** 不能访问 报错 */</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">() </span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">d</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Dog</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 不能访问 报错 */</span></span>
<span class="line"><span style="color: #E5C07B">d</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">move</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E5C07B">d</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">bark</span><span style="color: #ABB2BF">();</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>在类属性或方法前面添加 <strong>private</strong> 关键字，来修饰该属性或方法是私有的。</li>
<li>私有的属性或方法只在当前类中可见，对子类和实例对象也都是不可见的!</li>
</ul>
</div>
<h4 id="readonly-只读" tabindex="-1"><a class="header-anchor" href="#readonly-只读" aria-hidden="true">#</a> <strong>readonly(只读)</strong></h4>
<blockquote>
<p>表示只读，用来防止在构造函数之外对属性进行赋值</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">readonly</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">constructor</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** 注：只要是 readonly 来修饰的属性，必须手动提供明确的类型 */</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person2</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">readonly</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">18</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">constructor</span><span style="color: #ABB2BF">(</span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** eadonly age = 18; 没有明确的类型，所以报错 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">解释</p>
<ul>
<li>使用 <strong>readonly</strong> 关键字修饰该属性是只读的，</li>
<li>接口或者价表示的对象类型，也可以使用 <strong>readonly</strong></li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li><strong>注意！</strong> <strong>只能修饰属性不能修饰方法</strong></li>
<li>属性 <strong>age</strong> 后面的类型注解(比如，此处的 <strong>number</strong> ) 如果不加，则 <strong>age</strong> 的类型为 18 (字面量类型)。</li>
</ul>
</div>
<h3 id="类型兼容性" tabindex="-1"><a class="header-anchor" href="#类型兼容性" aria-hidden="true">#</a> 类型兼容性</h3>
</div></template>


