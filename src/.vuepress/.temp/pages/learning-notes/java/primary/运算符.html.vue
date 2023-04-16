<template><div><h1 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h1>
<!-- more -->
<div class="hint-container tip">
<p class="hint-container-title">运算符介绍</p>
<blockquote>
<p>运算符是一种<strong>特殊的符号</strong>，用以表示数据的运算、赋值和比较等</p>
<ol>
<li><strong>算术运算符</strong></li>
<li><strong>赋值运算符</strong></li>
<li><strong>关系运算符 [比较运算符]</strong></li>
<li><strong>逻辑运算符</strong></li>
<li><strong>位运算符 [需要二进制基础]</strong></li>
<li><strong>三元运算符</strong></li>
</ol>
</blockquote>
</div>
<h2 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍:</h3>
<p>算术运算符是对数值类型的变量进行运算的，在Java程序中使用的非常多</p>
<h3 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h3>
<figure><img src="@source/learning-notes/java/primary/image/12.png" alt="image-20230224003002648" tabindex="0" loading="lazy"><figcaption>image-20230224003002648</figcaption></figure>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3>
<ol>
<li>
<p>基本使用</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">10</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">/</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">4</span><span style="color: #ABB2BF">);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 输出 2</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">10.0</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">/</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">4</span><span style="color: #ABB2BF">);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 输出 2.5</span></span>
<span class="line"><span style="color: #C678DD">double</span><span style="color: #E06C75"> d </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">10</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">/</span><span style="color: #E06C75"> </span><span style="color: #D19A66">4</span><span style="color: #ABB2BF">;</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 10/4 = 2 所以 double 型为 2.0 </span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(d);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 输出 2.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>取模（取余：%）</p>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 公式：a % b = a - a / b * b;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 例如：</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * -10 % 3 =&gt; -10 - (-10) / 3 * 3 = -10 + 9 = -1</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 10 % - 3 = 10 - 10 / (-3) = 10 - 9 = 1</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> */</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">10</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">%</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #56B6C2">-</span><span style="color: #D19A66">10</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">%</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">10</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">%</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">-</span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #56B6C2">-</span><span style="color: #D19A66">10</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">%</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">-</span><span style="color: #D19A66">3</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>++ 的使用（前++，后++）</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">int</span><span style="color: #E06C75"> i </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">i</span><span style="color: #ABB2BF">++;</span></span>
<span class="line"><span style="color: #ABB2BF">++</span><span style="color: #E06C75">i</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(i);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// 12</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 前++：++i 先自增后赋值</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 后++：i++ 先赋值后自增</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h2>
<h3 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h3>
<ol>
<li>关系运算符的结果都是 <strong>boolean</strong> 型，也就是要么是 <strong>true</strong>，要么是 <strong>false</strong></li>
<li>关系表达式 经常用在 if结构的条件中或循环结构的条件中</li>
</ol>
<h3 id="概览-1" tabindex="-1"><a class="header-anchor" href="#概览-1" aria-hidden="true">#</a> 概览</h3>
<figure><img src="@source/learning-notes/java/primary/image/13.png" alt="image-20230224003002648" tabindex="0" loading="lazy"><figcaption>image-20230224003002648</figcaption></figure>
<h3 id="演示-1" tabindex="-1"><a class="header-anchor" href="#演示-1" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">int</span><span style="color: #E06C75"> a </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">9</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">int</span><span style="color: #E06C75"> b </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">8</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(a </span><span style="color: #56B6C2">&gt;</span><span style="color: #ABB2BF"> b);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// true</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(a </span><span style="color: #56B6C2">&gt;=</span><span style="color: #ABB2BF"> b);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// true</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(a </span><span style="color: #56B6C2">&lt;=</span><span style="color: #ABB2BF"> b);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// false</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(a </span><span style="color: #56B6C2">&lt;</span><span style="color: #ABB2BF"> b);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// false</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(a </span><span style="color: #56B6C2">==</span><span style="color: #ABB2BF"> b);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// false</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(a </span><span style="color: #56B6C2">==</span><span style="color: #ABB2BF"> b);</span><span style="color: #E06C75"> </span><span style="color: #7F848E; font-style: italic">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="细节说明" tabindex="-1"><a class="header-anchor" href="#细节说明" aria-hidden="true">#</a> 细节说明</h3>
<ol>
<li>关系运算符的结果都是 <strong>boolean</strong> 型，也就是要么是 <strong>true</strong>，要么是 <strong>false</strong>.</li>
<li>关系运算符组成的表达式，我们称为关系表达式 a &gt; b</li>
<li>比较运算符&quot;==&quot;不能误写成 &quot;=&quot;</li>
</ol>
<h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2>
<h3 id="概览-2" tabindex="-1"><a class="header-anchor" href="#概览-2" aria-hidden="true">#</a> 概览</h3>
<ol>
<li>
<p>短路与 &amp;&amp; ，短路 || ，去反 ！</p>
</li>
<li>
<p>逻辑与 &amp; ，逻辑或 |，^ 逻辑异或</p>
<figure><img src="@source/learning-notes/java/primary/image/14.png" alt="image-20230224003002648" tabindex="0" loading="lazy"><figcaption>image-20230224003002648</figcaption></figure>
</li>
</ol>
<h3 id="运算规则" tabindex="-1"><a class="header-anchor" href="#运算规则" aria-hidden="true">#</a> 运算规则</h3>
<ol>
<li><strong>a &amp; b</strong> ：&amp; 叫逻辑与:规则: 当 a 和 b 同时为 <strong>true</strong> ,则结果为 <strong>true</strong>,否则为 <strong>false</strong></li>
<li><strong>a &amp;&amp; b ：</strong>&amp;&amp; 叫短路与: 规则: 当a 和 b 同时为 <strong>true</strong> ,则结果为 <strong>true</strong>,否则为<strong>false</strong></li>
<li><strong>a | b</strong> ：| 叫逻辑或，规则：当a 和 b，有一个为 <strong>true</strong> ,则结果为 <strong>true</strong>,否则为<strong>false</strong></li>
<li><strong>a || b：</strong>|| 叫短路或，规则: 当a 和 b ，有一个为 <strong>true</strong> ,则结果为 <strong>true</strong>,否则为<strong>false</strong></li>
<li><strong>!a：</strong> 叫取反，或者非运算。当a 为 <strong>true</strong>,则结果为 <strong>false</strong>,当 a 为 <strong>false</strong>是，结果为 <strong>true</strong></li>
<li><strong>a ^ b：</strong> 叫逻辑异或，当 a 和 b 不同时，则结果为 <strong>true</strong>,否则为 <strong>false</strong></li>
</ol>
<h3 id="演示-2" tabindex="-1"><a class="header-anchor" href="#演示-2" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">int</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">50</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 对于 &amp;&amp; 短路与而言，如果第一个条件为 false，后面条件不再判断</span></span>
<span class="line"><span style="color: #C678DD">if</span><span style="color: #E06C75">(age </span><span style="color: #56B6C2">&lt;</span><span style="color: #E06C75"> </span><span style="color: #D19A66">80</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">&amp;&amp;</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">&gt;</span><span style="color: #E06C75"> </span><span style="color: #D19A66">20</span><span style="color: #E06C75">){</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;输出&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #E06C75">}</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 对于 &amp; 逻辑与而言，如果第一个条件为 false，后面条件仍判断</span></span>
<span class="line"><span style="color: #C678DD">if</span><span style="color: #E06C75">(age </span><span style="color: #56B6C2">&lt;</span><span style="color: #E06C75"> </span><span style="color: #D19A66">80</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">&amp;</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">&gt;</span><span style="color: #E06C75"> </span><span style="color: #D19A66">20</span><span style="color: #E06C75">){</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;输出&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #E06C75">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 对于 || 短路与而言，如果第一个条件为 true，后面条件不再判断</span></span>
<span class="line"><span style="color: #C678DD">if</span><span style="color: #E06C75">(age </span><span style="color: #56B6C2">&lt;</span><span style="color: #E06C75"> </span><span style="color: #D19A66">80</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">||</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">&gt;</span><span style="color: #E06C75"> </span><span style="color: #D19A66">20</span><span style="color: #E06C75">){</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;输出&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #E06C75">}</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 对于 | 逻辑与而言，如果第一个条件为 true，后面条件仍判断</span></span>
<span class="line"><span style="color: #C678DD">if</span><span style="color: #E06C75">(age </span><span style="color: #56B6C2">&lt;</span><span style="color: #E06C75"> </span><span style="color: #D19A66">80</span><span style="color: #E06C75"> </span><span style="color: #56B6C2">|</span><span style="color: #E06C75"> age </span><span style="color: #56B6C2">&gt;</span><span style="color: #E06C75"> </span><span style="color: #D19A66">20</span><span style="color: #E06C75">){</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;输出&quot;</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #E06C75">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h2>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法：</h3>
<p>条件表达式? 表达式1 : 表达式2;</p>
<h3 id="运算规则-1" tabindex="-1"><a class="header-anchor" href="#运算规则-1" aria-hidden="true">#</a> 运算规则</h3>
<ol>
<li>如果条件表达式为true，运算后的结果是表达式1；</li>
<li>如果条件表达式为false，运算后的结果是表达式2；</li>
</ol>
<h3 id="演示-3" tabindex="-1"><a class="header-anchor" href="#演示-3" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">int</span><span style="color: #E06C75"> a </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">int</span><span style="color: #E06C75"> b </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">99</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/** </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 解读</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 1. a &gt; b 为 false</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 2. 返回 b-- 先返回 b 的值，然后再 b-1</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 3. 返回结果99</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> */</span></span>
<span class="line"><span style="color: #C678DD">int</span><span style="color: #E06C75"> res </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> a </span><span style="color: #56B6C2">&lt;</span><span style="color: #E06C75"> b </span><span style="color: #C678DD">?</span><span style="color: #E06C75"> a</span><span style="color: #ABB2BF">++</span><span style="color: #E06C75"> </span><span style="color: #C678DD">:</span><span style="color: #E06C75"> b</span><span style="color: #ABB2BF">--;</span></span>
<span class="line"><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(res);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用细节" tabindex="-1"><a class="header-anchor" href="#使用细节" aria-hidden="true">#</a> 使用细节</h3>
<ol>
<li>表达式1和表达式2要为可以赋给接收变量的类型(或可以自动转换)</li>
<li>三元运算符可以转成 if--else 语句</li>
</ol>
<h2 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级" aria-hidden="true">#</a> 运算符的优先级</h2>
<figure><img src="@source/learning-notes/java/primary/image/15.png" alt="image-20230224003002648" tabindex="0" loading="lazy"><figcaption>image-20230224003002648</figcaption></figure>
<h2 id="标识符的命名规则和规范" tabindex="-1"><a class="header-anchor" href="#标识符的命名规则和规范" aria-hidden="true">#</a> 标识符的命名规则和规范</h2>
<ol>
<li>包名：多单词组成时所有字母都小写: aaa.bbb.ccc  比如 com.hsp.rm</li>
<li>类名、接口名:：多单词组成时，所有单词的首字母大写：XxxYyyZzz比如:TankShotGame</li>
<li>变量名、方法名:多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写: xxxYyyZzz比: tankShotGame</li>
<li>常量名: 所有字母都大写。多单词时每个单词用下划线连接: XXX_YYY_ ZZZ比如 :定义一个所得税率 TAX_RATE</li>
</ol>
<h2 id="键盘输入语句" tabindex="-1"><a class="header-anchor" href="#键盘输入语句" aria-hidden="true">#</a> 键盘输入语句</h2>
<h3 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h3>
<p>​	在编程中，需要接收用户输入的数据，!就可以使用键盘输入语句来获取</p>
<p>​	需要一个 扫描器(对象),就是 <strong>Scanner</strong></p>
<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>导入该类的所在包，java.util.*</li>
<li>创建该类对象 (声明变量)</li>
<li>调用里面的功能</li>
</ol>
<h3 id="演示-4" tabindex="-1"><a class="header-anchor" href="#演示-4" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">java.util.Scanner</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Input</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">        * 创建 Scanner 对象</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">        * </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">        */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Scanner</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">myScanner</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Scanner</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">in</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;请输入姓名&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">myScanner</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">next</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;请输入年龄&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">myScanner</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">nextInt</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;请输入工资&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">double</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">sal</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">myScanner</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">nextDouble</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;人的信息如下&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;姓名：&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> name </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;年龄：&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> age </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;工资&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> sal);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


