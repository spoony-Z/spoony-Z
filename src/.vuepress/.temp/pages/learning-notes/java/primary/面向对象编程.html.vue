<template><div><h1 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程" aria-hidden="true">#</a> 面向对象编程</h1>
<!-- more -->
<h2 id="类与对象-oop" tabindex="-1"><a class="header-anchor" href="#类与对象-oop" aria-hidden="true">#</a> 类与对象(OOP)</h2>
<h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>
<div class="hint-container tip">
<p class="hint-container-title">张老太养了两只猫猫: 一只名字叫小白,今年3岁，白色。还有一只叫小花,今年100岁,花色。请编写一个程序，当用户输入小猫的名字时就显示该猫的名字，年龄，颜色。</p>
<blockquote>
<p>如果用户输入的小猫名 错误.则显示 张老太没有这只猫猫。</p>
</blockquote>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">// 定义一个类</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Cat</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 名字</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 年龄</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> color</span><span style="color: #ABB2BF">;</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 颜色</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 使用OOP面向对象解决</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 实例化一直猫[ 创建一只猫 ]</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 1.new Cat() 创建一只猫</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 2.Cat cat1 = new Cat(); 把创建的猫赋给 cat1</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 3.cat1 就是一个对象</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 4.访问 cat1 中的属性 cat1.name</span></span>
<span class="line"><span style="color: #E5C07B">Cat</span><span style="color: #E06C75"> cat1 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">Cat</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">cat1</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #98C379">&quot;姓名&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">cat1</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">13</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">cat1</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">color</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #98C379">&#39;red&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">Sytem</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">cat1</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">nam</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">cat1</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">cat1</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">color</span><span style="color: #ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象在内存中的分布示意图" tabindex="-1"><a class="header-anchor" href="#对象在内存中的分布示意图" aria-hidden="true">#</a> 对象在内存中的分布示意图</h3>
<figure><img src="@source/learning-notes/java/primary/image/18.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<h3 id="属性-成员变量" tabindex="-1"><a class="header-anchor" href="#属性-成员变量" aria-hidden="true">#</a> 属性 / 成员变量</h3>
<h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h4>
<ol>
<li>
<p>从概念或叫法上看: 成员变量 = 属性 = field (即 成员变量是用来表示属性
的，授课中，统一叫 属性)</p>
</li>
<li>
<p>属性是类的一个组成部分，一般是<strong>基本数据类型</strong>,也可是<strong>引用类型</strong>(对象，数组)
比如我们前面定义猫类 的 int age 就是属性</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Car</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">double</span><span style="color: #E06C75"> price</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> color</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75">[] master</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意事项和细节说明" tabindex="-1"><a class="header-anchor" href="#注意事项和细节说明" aria-hidden="true">#</a> 注意事项和细节说明</h4>
<ol>
<li>属性的定义语法同变量，示例: 访问修饰符 属性类型 属性名：简单介绍访问修饰符:
控制属性的访问范围有四种访问修饰符 public, proctected, 默认, private</li>
<li>属性的定义类型可以为任意类型，包含基本类型或引用类型</li>
<li>属性如果不赋值，有默认值，规则和数组一致</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 1.创建 Person 对象</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 2.p1 是对象名（对象引用）</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 3.new Person() 创建对象空间（数据）</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 对象属性的默认值，遵守规则：int 0, byte 0 ···</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> */</span></span>
<span class="line"><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> p1 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">Person</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">double</span><span style="color: #E06C75"> sal</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">boolean</span><span style="color: #E06C75"> isPass</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75"> </span><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何创建对象" tabindex="-1"><a class="header-anchor" href="#如何创建对象" aria-hidden="true">#</a> 如何创建对象</h3>
<ol>
<li>先声明在创建<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">Cat</span><span style="color: #E06C75"> cat</span><span style="color: #ABB2BF">;</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 声明对象</span></span>
<span class="line"><span style="color: #E06C75">cat </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">Cat</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 创建对象</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>直接创建<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">Cat</span><span style="color: #E06C75"> cat </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">Cat</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="类和对象的分配机制" tabindex="-1"><a class="header-anchor" href="#类和对象的分配机制" aria-hidden="true">#</a> 类和对象的分配机制</h3>
<figure><img src="@source/learning-notes/java/primary/image/19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="对象的创建过程" tabindex="-1"><a class="header-anchor" href="#对象的创建过程" aria-hidden="true">#</a> 对象的创建过程</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> p </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">Person</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #98C379">&quot;jack&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>先加载 <strong>Person</strong> 类信息(属性和方法信息,只会加载一次)</li>
<li>在堆中分配空间,进行默认初始化(看规则)</li>
<li>把地址赋给 p，p 就指向对象</li>
<li>进行指定初始化，比如 <a href="http://p.name" target="_blank" rel="noopener noreferrer">p.name<ExternalLinkIcon/></a> = &quot;jac&quot; p.age =10</li>
</ol>
<h2 id="成员方法" tabindex="-1"><a class="header-anchor" href="#成员方法" aria-hidden="true">#</a> 成员方法</h2>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 创建 spack 方法</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 1.public 表示方法是公开的</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 2.void 表示方法没有返回值</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 3.spack() spack是方法名 () 是形参列表</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> *</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 创建 getSum 方法</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * int 表示该方法会返回一个 int 值</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> */</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Hello</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">(); </span><span style="color: #7F848E; font-style: italic">// 创建方法</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">spack</span><span style="color: #ABB2BF">(); </span><span style="color: #7F848E; font-style: italic">// 调用</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">e</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">getSum</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> spack</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Syste</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;创建方法&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">int</span><span style="color: #61AFEF"> getSum</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">b</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">c</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> a </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> b;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">spack</span><span style="color: #ABB2BF">(); </span><span style="color: #7F848E; font-style: italic">// 同一个类中的方法 直接调用，不用创建</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">B</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">h</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">B</span><span style="color: #ABB2BF">(); </span><span style="color: #7F848E; font-style: italic">// 创建 B 对象</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">h</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">sum</span><span style="color: #ABB2BF">(); </span><span style="color: #7F848E; font-style: italic">// 调用 B 对象的方法</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> c;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 夸类调用</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">B</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">int</span><span style="color: #61AFEF"> sum</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">a</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">b</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">c</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> a </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> b;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">spack</span><span style="color: #ABB2BF">(); </span><span style="color: #7F848E; font-style: italic">// 同一个类中的方法 直接调用，不用创建</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> c;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法的调用机制" tabindex="-1"><a class="header-anchor" href="#方法的调用机制" aria-hidden="true">#</a> 方法的调用机制</h3>
<figure><img src="@source/learning-notes/java/primary/image/20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="克隆对象" tabindex="-1"><a class="header-anchor" href="#克隆对象" aria-hidden="true">#</a> 克隆对象</h3>
<div class="hint-container tip">
<p class="hint-container-title">要求：</p>
<p>编写一个方法 <strong>copyPerson</strong>，可以复制一个 <strong>Person</strong> 对象，返回复制的对象。克隆对象,
注意要求得到新对象和原来的对象是两个<strong>独立的对象</strong>，只是他们的<strong>属性相同</strong></p>
</div>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Hello</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&#39;yang&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">27</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">MyTools</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">tools</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">MyTools</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">tools</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">copyPerson</span><span style="color: #ABB2BF">(p);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** 验证 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(p </span><span style="color: #56B6C2">==</span><span style="color: #ABB2BF"> p2); </span><span style="color: #7F848E; font-style: italic">// false</span></span>
<span class="line"><span style="color: #ABB2BF">	}</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Mytools</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">Person</span><span style="color: #61AFEF"> copyPerson</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">p</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** 创建一个新的对象 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">p2</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">p2</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法递归调用" tabindex="-1"><a class="header-anchor" href="#方法递归调用" aria-hidden="true">#</a> 方法递归调用</h2>
<h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3>
<p>递归就是方法自己调用自己,每次调用时传入不同的变量递归有助于编程者解决
复杂问题,同时可以让代码变得简洁</p>
<h3 id="递归能解决什么问题" tabindex="-1"><a class="header-anchor" href="#递归能解决什么问题" aria-hidden="true">#</a> 递归能解决什么问题？</h3>
<ol>
<li>各种数学问题如: 8皇后问题，汉诺塔, 阶乘问题,迷宫问题,球和篮子的问题(google编程
大赛)</li>
<li>各种算法中也会使用到递归，比如快排，归并排序，二分查找，分治算法等</li>
<li>将用栈解决的问题--&gt;递归代码比较简洁</li>
</ol>
<h3 id="递归的重要规则" tabindex="-1"><a class="header-anchor" href="#递归的重要规则" aria-hidden="true">#</a> 递归的重要规则</h3>
<ul>
<li>执行一个方法时，就创建一个新的受保护的独立空间(栈空间)</li>
<li>方法的局部变量是独立的，不会相互影响，</li>
<li>如果方法中使用的是引用类型变量(比如数组)，就会共享该引用类型的数据.</li>
<li>递归必须向退出递归的条件逼近，否则就是无限递归,出现 <strong>StackOverflowError</strong>，死龟了</li>
<li>当一个方法执行完毕，或者遇到 <strong>return</strong>，就会返回，遵守谁调用，就将结果返回给谁，同时当方法执行完毕或者返回时，该方法也就执行完毕</li>
</ul>
<h3 id="演示-1" tabindex="-1"><a class="header-anchor" href="#演示-1" aria-hidden="true">#</a> 演示</h3>
<div class="hint-container tip">
<p class="hint-container-title">演示一：求斐波那契数</p>
<p>请使用递归的方式求出斐波那契数1,1,2,3,5,8,13...给你一个整数n，求出它的值是多少</p>
<ul>
<li>提示： 斐波那契数就是后面的一个数就是前面两个数的和，例如：
<blockquote>
<ul>
<li>1 + 1 = 2；</li>
<li>1 + 2 = 3；</li>
<li>2 + 3 = 5；</li>
<li>3 + 5 = 8；</li>
<li>5 + 8 = 13；</li>
</ul>
</blockquote>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Hello</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">T</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">t1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">T</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">n</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">res</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">t1</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">fibonacci</span><span style="color: #ABB2BF">(n);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">if</span><span style="color: #ABB2BF">(res </span><span style="color: #56B6C2">!=</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">-</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">Sytem</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;当 n=&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> n </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot; 对饮的斐波那契数为&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> res);</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">T</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> fibonacci</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">if</span><span style="color: #ABB2BF">(n </span><span style="color: #56B6C2">&gt;=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #C678DD">if</span><span style="color: #ABB2BF">(n </span><span style="color: #56B6C2">==</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">||</span><span style="color: #ABB2BF"> n </span><span style="color: #56B6C2">==</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">                </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">            } </span><span style="color: #C678DD">else</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">                </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">fibonacci</span><span style="color: #ABB2BF">(n </span><span style="color: #56B6C2">-</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">) </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">fibonacci</span><span style="color: #ABB2BF">(n </span><span style="color: #56B6C2">-</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">            } </span><span style="color: #C678DD">else</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">                </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;要求输入的 n &gt;= 1 的正整数&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">                </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">-</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">            }</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">演示二：猴子吃桃</p>
<p>有一堆桃子，猴子第一天吃了其中的一半，并再多吃了一个! 以后每天猴子都吃其中的一半，然后再多吃一个。当到第10天时，想再吃时 (即还没吃)发现只有1个桃子了。问题: 最初共多少个桃子?</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">演示三：老鼠出迷宫</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">演示四：汉诺塔</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">演示五：八皇后</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div>
<h2 id="方法重载-overload" tabindex="-1"><a class="header-anchor" href="#方法重载-overload" aria-hidden="true">#</a> 方法重载（OverLoad）</h2>
<h3 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h3>
<p>java中允许同一个类中，多个同名方法的存在，但要求 形参列表不一致!</p>
<h3 id="重载的好处" tabindex="-1"><a class="header-anchor" href="#重载的好处" aria-hidden="true">#</a> 重载的好处</h3>
<ul>
<li>减轻了起名的麻烦</li>
<li>减轻了记名的麻烦</li>
</ul>
<h3 id="演示-2" tabindex="-1"><a class="header-anchor" href="#演示-2" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">T</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** 两个正数的和 */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">int</span><span style="color: #61AFEF"> calculate</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n1</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n2</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> n1 </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> n2;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** 一个正数，一个 double 的和 */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">double</span><span style="color: #61AFEF"> calculate</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n1</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">double</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n2</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> n1 </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> n2;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** 一个double 一个int 的和 */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">double</span><span style="color: #61AFEF"> calculate</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">double</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n1</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n2</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> n1 </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> n2;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** 三个 int 的和 */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">int</span><span style="color: #61AFEF"> calculate</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n1</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">n2</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> n1 </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> n2;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项和细节" tabindex="-1"><a class="header-anchor" href="#注意事项和细节" aria-hidden="true">#</a> 注意事项和细节</h3>
<ol>
<li>方法名：必须相同</li>
<li>形参列表: 必须不同(形参类型或个数或顺序，至少有一样不同，参数名无要求)</li>
<li>返回类型: 无要求</li>
</ol>
<h2 id="可变参数" tabindex="-1"><a class="header-anchor" href="#可变参数" aria-hidden="true">#</a> 可变参数</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>   <strong>java</strong> 允许将同一个类中<strong>多个同名</strong>同功能但参数个数不同的方法，封装成一个方法</p>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Hello</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">HspMethod</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">m</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">HspMethod</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">m</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">sum</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">2</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">6</span><span style="color: #ABB2BF">));</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">HspMethod</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    * 1.int... 表示接受的是可变参数，类型是 int，既可以接收多个为int类型的值</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    * 2.使用可变参数时，可以当做数组来使用 即 nums 可以当做数组</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    * 3.遍历 nums </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    *</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">int</span><span style="color: #61AFEF"> sum</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF">... </span><span style="color: #E06C75; font-style: italic">nums</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">res</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">for</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">i</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">; i </span><span style="color: #56B6C2">&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">nums</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">length</span><span style="color: #ABB2BF">; i++){</span></span>
<span class="line"><span style="color: #ABB2BF">            res </span><span style="color: #56B6C2">+=</span><span style="color: #ABB2BF"> nums[i];</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;接收的参数个数=&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">nums</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">length</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> res;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项和细节-1" tabindex="-1"><a class="header-anchor" href="#注意事项和细节-1" aria-hidden="true">#</a> 注意事项和细节</h3>
<ol>
<li>可变参数的实参可以为0个或任意多个</li>
<li>可变参数的实参可以为数组</li>
<li>可变参数的本质就是数组</li>
<li>可变参数可以和普通类型的参数一起放在形参列表，但必须保证可变参数在最后<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">void</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">f2</span><span style="color: #E06C75">(</span><span style="color: #C678DD">double</span><span style="color: #E06C75"> str</span><span style="color: #ABB2BF">,</span><span style="color: #E06C75"> </span><span style="color: #C678DD">double</span><span style="color: #ABB2BF">...</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">nums</span><span style="color: #E06C75">){}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>一个形参列表中只能出现一个可变参数</li>
</ol>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<ol>
<li>在java编程中，主要的变量就是属性(成员变量)和局部变量</li>
<li>我们说的局部变量一般是指在成员方法中定义的变量。[举例 Cat类: cry]</li>
<li>java中作用域的分类
<ul>
<li><strong>全局变量：</strong> 也就是属性，作用域为整个类体 Cat类: cry eat 等方法使用属性</li>
<li><strong>局部变量：</strong> 也就是除了属性之外的其他变量，作用域为定义它的代码块中!</li>
</ul>
</li>
<li>全局变量可以不赋值，直接使用，因为有默认值，局部变量必须赋值后，才能使
用，因为没有默认值。</li>
</ol>
<h3 id="演示-3" tabindex="-1"><a class="header-anchor" href="#演示-3" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Cat</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     * 全局变量：也就是属性，作用域为整个类体 Cat类 :cry eat 等方法使用属性</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     */</span></span>
<span class="line"><span style="color: #E06C75">     </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">20</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">void</span><span style="color: #E06C75"> cry {</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">         * 1.局部变量一般是指在成员方法中定义的变量</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">         * 2.n 和 name 就是局部变量</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">         * 3.n 和 name 的作用域在 cry 方法中</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">         */</span></span>
<span class="line"><span style="color: #E06C75">         </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> n </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">         </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #98C379">&#39;jack&#39;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">         </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;输出全局变量&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> age);</span></span>
<span class="line"><span style="color: #E06C75">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">void</span><span style="color: #E06C75"> eat {</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;输出全局变量&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> age);</span></span>
<span class="line"><span style="color: #E06C75">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用注意事项和细节" tabindex="-1"><a class="header-anchor" href="#作用注意事项和细节" aria-hidden="true">#</a> 作用注意事项和细节</h2>
<ol>
<li>属性和局部变量可以重名，访问时遵循就近原则。<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Cat</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">20</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">void</span><span style="color: #E06C75"> cry {</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(age);</span></span>
<span class="line"><span style="color: #E06C75">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>在同一个作用域中，比如在同一个成员方法中，两个局部变量，不能重名</li>
<li>属性生命周期较长，伴随着对象的创建而创建，伴随着对象的死亡而死亡。局部变量，生命周期较短，伴随着它的代码块的执行而创建，伴随着代码块的结束而死亡，即在一次方法调用过程中。</li>
<li>作用域范围不同
<ul>
<li><strong>全局变量/属性：</strong> 可以被本类使用，或其他类使用(通过对象调用)</li>
<li><strong>局部变量：</strong> 只能在本类中对应的方法中使用</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">test</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">void</span><span style="color: #E06C75"> cry {</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> p1 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">Person</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">p1</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #E06C75">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">20</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>修饰符不同
<ul>
<li><strong>全局变量/属性：</strong> 可以加修饰符</li>
<li><strong>局部变量：</strong> 不可以加修饰符</li>
</ul>
</li>
</ol>
<h2 id="构造器-constructor" tabindex="-1"><a class="header-anchor" href="#构造器-constructor" aria-hidden="true">#</a> 构造器（constructor）</h2>
<h3 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h3>
<p>构造方法又叫构造器( <strong>constructor</strong> )，是类的一种特殊的方法，它的主要作用是
完成对<strong>新对象的初始化</strong>。它有几个特点:</p>
<div class="hint-container warning">
<p class="hint-container-title">构造器特点</p>
<ul>
<li>方法名和类名必须相同</li>
<li>没有返回值</li>
<li>在创建对象时，系统会自动的调用该类的构造器完成对对象的初始化</li>
<li>构造器的修饰符可以默认</li>
<li>参数列表 和 成员方法一样的规则</li>
</ul>
</div>
<h3 id="基本语法-1" tabindex="-1"><a class="header-anchor" href="#基本语法-1" aria-hidden="true">#</a> 基本语法</h3>
<p>[修饰符] 方法名(形参列表){
方法体;
}</p>
<h3 id="演示-4" tabindex="-1"><a class="header-anchor" href="#演示-4" aria-hidden="true">#</a> 演示</h3>
<div class="hint-container tip">
<p class="hint-container-title">在创建人类的对象时，就直接指定这个对象的年龄和姓名</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Hello</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;yang&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">27</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     * 1.构造器没有返回值，也不能写void</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     * 2.构造器的名称和类Person一样</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     * 3.(string pName, int pAge) 是构造器形参列表，规则和成员方法一样</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     * */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Person</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">pName</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">pAge</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">prinyln</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;构造器被调用~~ 完成对象的初始化&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">        name </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> pName;</span></span>
<span class="line"><span style="color: #ABB2BF">        age </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> pAge;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="注意事项和使用细节" tabindex="-1"><a class="header-anchor" href="#注意事项和使用细节" aria-hidden="true">#</a> 注意事项和使用细节</h3>
<ol>
<li>一个类可以定义多个不同的构造器，即构造器重载 比如: 我们可以再给 Person 类定义一个构造器,用来创建对象的时候,只指定人名不需要指定年龄<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Hello</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;yang&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">27</span><span style="color: #ABB2BF">); </span><span style="color: #7F848E; font-style: italic">/** 第一个构造器*/</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;yang&#39;</span><span style="color: #ABB2BF">); </span><span style="color: #7F848E; font-style: italic">/** 第二个构造器*/</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** 第一个构造器*/</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Person</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">pName</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">pAge</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        name </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> pName;</span></span>
<span class="line"><span style="color: #ABB2BF">        age </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> pAge;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** 第二个构造器*/</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Person</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">pName</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        name </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> pName;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>构造器名和类名要相同</li>
<li>构造器没有返回值</li>
<li>构造器是完成对象的初始化,并不是创建对象</li>
<li>在创建对象时,系统自动的调用该类的构造方法</li>
<li>如果程序员没有定义构造器，系统会自动给类生成一个默认无参构造方法(也叫默认构造方法)，比如 Dog (){},使用 <strong>javap</strong> 指令 反编译看看
<ul>
<li><strong>反编译步骤</strong></li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Hello</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Dog</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">dog1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Dog</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Dog</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     * Dog是默认构造器</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     * Dog(){}</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">     */</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">javac </span><span style="color: #98C379">Hello.java</span><span style="color: #ABB2BF">   </span><span style="color: #7F848E; font-style: italic"># 先编译java文件</span></span>
<span class="line"><span style="color: #ABB2BF">javap </span><span style="color: #98C379">Dog.class</span><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic"># 反编译 class 文件 也可省略 .class 后缀</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># 输出默认构造器</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># class Dog {</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># Dog();</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"># }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>一旦定义了自己的构造器，默认的构造器就覆盖了就不能再使用默认的无参构造器，除非显式的定义一下，即: <strong>Person(){}</strong><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Dog</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Dog</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">dName</span><span style="color: #ABB2BF">){}</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">//覆盖默认构造器</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #61AFEF">Dog</span><span style="color: #ABB2BF">(){}</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 显示的定义 无参数构造器</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="演示-5" tabindex="-1"><a class="header-anchor" href="#演示-5" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="对象创建的流程分析-重点" tabindex="-1"><a class="header-anchor" href="#对象创建的流程分析-重点" aria-hidden="true">#</a> 对象创建的流程分析（重点）</h3>
<h2 id="this-关键字" tabindex="-1"><a class="header-anchor" href="#this-关键字" aria-hidden="true">#</a> this 关键字</h2>
<h3 id="什么是-this" tabindex="-1"><a class="header-anchor" href="#什么是-this" aria-hidden="true">#</a> 什么是 this</h3>
<p><strong>java虚拟机会给每个对象分配 this，代表当前对象</strong></p>
<h3 id="演示-6" tabindex="-1"><a class="header-anchor" href="#演示-6" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Hello</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;yang&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">27</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&#39;yang2&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">30</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;p1的hashCode()&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p1</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">hashCode</span><span style="color: #ABB2BF">());</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;p2的hashCode()&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p2</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">hashCode</span><span style="color: #ABB2BF">());</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">        </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Person</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #7F848E; font-style: italic">// this 就是指向当前对象的属性</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> name;</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> age;</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;this的hashCode()&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">hashCode</span><span style="color: #ABB2BF">());</span></span>
<span class="line"><span style="color: #ABB2BF">        }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this-的注意事项和细节" tabindex="-1"><a class="header-anchor" href="#this-的注意事项和细节" aria-hidden="true">#</a> this 的注意事项和细节</h3>
<ol>
<li>this 关键字可以用来访问本类的属性、方法、构造器</li>
<li>this 用于区分当前类的属性和局部变量</li>
<li>访问成员方法的语法: this.方法名(参数列表);</li>
<li>访问构造器语法: this(参数列表): <strong>注意只能在构造器中使用</strong></li>
<li>this 不能在类定义的外部使用，只能在类定义的方法中使用</li>
</ol>
<h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h2>
</div></template>


