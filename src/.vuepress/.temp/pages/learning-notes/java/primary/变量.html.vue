<template><div><h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h1>
<!-- more -->
<h2 id="为什么需要变量" tabindex="-1"><a class="header-anchor" href="#为什么需要变量" aria-hidden="true">#</a> 为什么需要变量</h2>
<h3 id="变量是程序的基本组成单位" tabindex="-1"><a class="header-anchor" href="#变量是程序的基本组成单位" aria-hidden="true">#</a> 变量是程序的基本组成单位</h3>
<p>​	不论是使用那种高级程序语言编写，变量都是其程序的基本组成单位</p>
<p><strong>例如</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Test</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF">  </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">a</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">; </span><span style="color: #7F848E; font-style: italic">/* 声明 int 型的 a 变量 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">b</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">; </span><span style="color: #7F848E; font-style: italic">/* 声明 int 型的 b 变量 */</span></span>
<span class="line"><span style="color: #ABB2BF">        b </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> a;  </span><span style="color: #7F848E; font-style: italic">/* 赋值：变量 a 赋值给变量 b */</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量的介绍" tabindex="-1"><a class="header-anchor" href="#变量的介绍" aria-hidden="true">#</a> 变量的介绍</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念：</h3>
<p>​        变量相当于内存中一个数据存储空间的表示，你可以把变量看做是一个房间的牌号，通过门牌号我们可以找到房间，而通过变量名可以访问到变量(值)。</p>
<h3 id="变量使用的基本步骤" tabindex="-1"><a class="header-anchor" href="#变量使用的基本步骤" aria-hidden="true">#</a> 变量使用的基本步骤</h3>
<p>​	1.声明变量  int a;</p>
<p>​	2.a = 60; //应该这么说: 把60赋给a</p>
<p>​	3.使用 System.out.println(a);</p>
<p>​	也可以一步到位 <strong>int a = 60;</strong> 通常我们是一步完成</p>
<h2 id="变量使用注意事项" tabindex="-1"><a class="header-anchor" href="#变量使用注意事项" aria-hidden="true">#</a> 变量使用注意事项</h2>
<p>1.变量表示内存中的一个存储区域 [ 不同的变量，类型不同，占用的空间大小不同比如: int 4 个字节， double 就是 8个字节,先有基本印象，后面说字节 ]</p>
<p>2.该区域有自己的名称[变量名]和类型[数据类型]</p>
<p>3.变量必须先声明，后使用，即有顺序</p>
<p>4.该区域的数据/值可以在同一类型范围内不断变化</p>
<p>5.变量在同一个作用域内不能重名</p>
<p>6.<strong>变量 = 变量名 + 值 + 数据类型</strong>，这一点请大家注意。变量三要察</p>
<h2 id="加号-的使用" tabindex="-1"><a class="header-anchor" href="#加号-的使用" aria-hidden="true">#</a> 加号（+）的使用</h2>
<h4 id="_1-当左右两边都是数值型时-则做加法运算" tabindex="-1"><a class="header-anchor" href="#_1-当左右两边都是数值型时-则做加法运算" aria-hidden="true">#</a> 1. 当左右两边都是数值型时，则做加法运算</h4>
<h4 id="_2-当左右两边有一方为字符串-则做拼接运算" tabindex="-1"><a class="header-anchor" href="#_2-当左右两边有一方为字符串-则做拼接运算" aria-hidden="true">#</a> 2. 当左右两边有一方为字符串，则做拼接运算</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">100</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">98</span><span style="color: #ABB2BF">);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">//198</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;100&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">98</span><span style="color: #ABB2BF">)</span><span style="color: #C678DD">:</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 10098 </span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">100</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">3</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;Hello&quot;</span><span style="color: #ABB2BF">);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 103Hello</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;hello&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">100</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// hello1003</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


