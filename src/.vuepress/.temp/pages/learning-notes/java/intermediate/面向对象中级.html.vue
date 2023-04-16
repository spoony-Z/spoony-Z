<template><div><h1 id="面向对象中级" tabindex="-1"><a class="header-anchor" href="#面向对象中级" aria-hidden="true">#</a> 面向对象中级</h1>
<!-- more -->
<h2 id="包" tabindex="-1"><a class="header-anchor" href="#包" aria-hidden="true">#</a> 包</h2>
<h3 id="包的三大作用" tabindex="-1"><a class="header-anchor" href="#包的三大作用" aria-hidden="true">#</a> 包的三大作用</h3>
<ul>
<li><strong>区分相同名字的类</strong></li>
<li><strong>控制访问范围</strong></li>
<li><strong>当类很多时,可以很好的管理类</strong></li>
</ul>
<h3 id="包的基本语法" tabindex="-1"><a class="header-anchor" href="#包的基本语法" aria-hidden="true">#</a> 包的基本语法</h3>
<p><strong>package com.haspedu;</strong></p>
<ol>
<li><strong>package</strong> 关键字， 表示打包</li>
<li><strong>com.hspedu</strong> 表示报名</li>
</ol>
<h3 id="包的本质分析-原理" tabindex="-1"><a class="header-anchor" href="#包的本质分析-原理" aria-hidden="true">#</a> 包的本质分析（原理）</h3>
<p>包的本质 实际上就是创建不同的文件夹来保存类文件</p>
<h3 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">// 第一个包文件 包名称为 com.xiaoming</span></span>
<span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.xiaoming</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Dog</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #61AFEF">System.out.println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是第一个包，类名为 Dog&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">// 第二个包文件 包名称为 com.xiaohong</span></span>
<span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.xiaohong</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Dog</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #61AFEF">System.out.println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;我是第二个包，类名为 Dog&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">// 第三个包文件 包名称为 com.use</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// 使用上面两个包</span></span>
<span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.use</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.xiaoming.Dog</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">// import com.xiaoming.*; * 表示导入com.cioaming 包下的所有类</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Test</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 等价于 com.xiaohong.Dog d1 = new com.xiaohong.Dog();</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 默认省略</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> */</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #E5C07B">Dog</span><span style="color: #E06C75"> d1 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">Dog</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span><span style="color: #E06C75"> </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * com.xiaohong 就是为了区分不同包的相同类名</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> */</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #E5C07B">com</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">xiaohong</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Dog</span><span style="color: #E06C75"> d2 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> com</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">xiaohong</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Dog</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包的命名" tabindex="-1"><a class="header-anchor" href="#包的命名" aria-hidden="true">#</a> 包的命名</h3>
<h4 id="包的命名规则" tabindex="-1"><a class="header-anchor" href="#包的命名规则" aria-hidden="true">#</a> 包的命名规则</h4>
<p><strong>只能包含数字、字母、下划线、小圆点.,但不能用数字开头，不能是关键字或保留字</strong></p>
<h4 id="包的命名规范" tabindex="-1"><a class="header-anchor" href="#包的命名规范" aria-hidden="true">#</a> 包的命名规范</h4>
<ul>
<li><strong>一般是小写字母 + 小圆点一般是</strong></li>
<li><strong>com .公司名 .项目名 .业务模块名</strong></li>
</ul>
<h3 id="java-常用的包" tabindex="-1"><a class="header-anchor" href="#java-常用的包" aria-hidden="true">#</a> Java 常用的包</h3>
<ul>
<li>java.lang  ：lang 包是基本包，默认引入，不需要再引入.</li>
<li>java.util ：util 包，系统提供的工具包，工具类，使用 Scanner</li>
<li><a href="http://java.net" target="_blank" rel="noopener noreferrer">java.net<ExternalLinkIcon/></a> ：网络包，网络开发</li>
<li>java.awt ：是做 java 界面开发，GUI</li>
</ul>
<h3 id="使用系统包-对数组排序" tabindex="-1"><a class="header-anchor" href="#使用系统包-对数组排序" aria-hidden="true">#</a> 使用系统包 对数组排序</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">package</span><span style="color: #E06C75"> </span><span style="color: #C678DD">com.use</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">com.xiaoming.Dog</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">java.util.Arrays</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Test</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #E5C07B">Dog</span><span style="color: #E06C75"> d1 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> </span><span style="color: #61AFEF">Dog</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #E5C07B">com</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">xiaohong</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">Dog</span><span style="color: #E06C75"> d2 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #C678DD">new</span><span style="color: #E06C75"> com</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">xiaohong</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">Dog</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75">arr</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> {</span><span style="color: #56B6C2">-</span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #56B6C2">-</span><span style="color: #D19A66">8</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">1</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">8</span><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">Arrays</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">sort</span><span style="color: #ABB2BF">(arr); </span><span style="color: #7F848E; font-style: italic">// 系统包中的方法</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">for</span><span style="color: #ABB2BF"> (</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">i</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">0</span><span style="color: #ABB2BF">; i </span><span style="color: #56B6C2">&lt;</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">arr</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">length</span><span style="color: #ABB2BF">; i++){</span></span>
<span class="line"><span style="color: #ABB2BF">         </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(arr[i]);</span></span>
<span class="line"><span style="color: #ABB2BF">      }</span></span>
<span class="line"><span style="color: #ABB2BF">   }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项和使用细节" tabindex="-1"><a class="header-anchor" href="#注意事项和使用细节" aria-hidden="true">#</a> 注意事项和使用细节</h3>
<ol>
<li><strong>package</strong> 的作用是声明当前类所在的包，需要放在类的最上面，一个类中最多只有一句package</li>
<li><strong>import</strong>指令 位置放在<strong>package</strong>的下面，在类定义前面,可以有多句且没有顺序要求。</li>
</ol>
<h2 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符" aria-hidden="true">#</a> 访问修饰符</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>java 提供四种访问控制修饰符号，用于控制方法和属性( 成员变量 ) 的访问权限( 范围 )</p>
<div class="hint-container tip">
<p class="hint-container-title">修饰符号：</p>
<ol>
<li><strong>公开级别：</strong> 用 <strong>public</strong> 修饰,对外公开</li>
<li><strong>受保护级别：</strong> 用 <strong>protected</strong> 修饰,对子类和同一个包中的类公开</li>
<li><strong>默认级别：</strong> 没有修饰符号,向同一个包的类公开</li>
<li><strong>私有级别：</strong> 用 <strong>private</strong> 修饰,只有类本身可以访问,不对外公开</li>
</ol>
<p><strong>演示</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Test</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">  </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> n3 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">30</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">  </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> n1 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">  </span><span style="color: #C678DD">protected</span><span style="color: #E06C75"> </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> n2 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">20</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">  </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> n4 </span><span style="color: #56B6C2">=</span><span style="color: #D19A66">40</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">  </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setN1</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">     </span><span style="color: #7F848E; font-style: italic">// 同类中 访问四个属性</span></span>
<span class="line"><span style="color: #ABB2BF">     </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">n1</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">     </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">n2</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">     </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">n3</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">     </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">n4</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="面向对象的三大特征-封装-继承-多态" tabindex="-1"><a class="header-anchor" href="#面向对象的三大特征-封装-继承-多态" aria-hidden="true">#</a> 面向对象的三大特征（封装，继承，多态）</h2>
<h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3>
<h4 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h4>
<p>封装 <strong>(encapsulation)</strong> 就是把抽象出的数据 <strong>[属性]</strong> 和对数据的操作 <strong>[方法]</strong> 封装在一起,数据被保护在内部,程序的其它部分只有通过被授权的操作 <strong>[方法]</strong>,才能对数据进行操作。</p>
<h4 id="封装的理解和好处" tabindex="-1"><a class="header-anchor" href="#封装的理解和好处" aria-hidden="true">#</a> 封装的理解和好处</h4>
<ol>
<li>隐藏实现细节： 方法( 连接数据库 ) &lt;-- 调用( 传入参数...)</li>
<li>可以对数据进行验证，保证安全合理</li>
</ol>
<h4 id="封装的实现步骤" tabindex="-1"><a class="header-anchor" href="#封装的实现步骤" aria-hidden="true">#</a> 封装的实现步骤</h4>
<ol>
<li>将属性进行私有化 <strong>private</strong> ( 不能直接修改属性 )</li>
<li>提供一个 set 方法， 用于对属性判断并赋值</li>
<li>提供一个公共的get方法，用于获取属性的值</li>
</ol>
<h4 id="演示-1" tabindex="-1"><a class="header-anchor" href="#演示-1" aria-hidden="true">#</a> 演示</h4>
<div class="hint-container tip">
<p class="hint-container-title">不能随便查看人的年龄,工资等隐私并对设置的年龄进行合理的验证。年龄合理就设置，否则给默认,年龄必须在 1-120,年龄，工资不能直接查看， name 的长度在 2-6 之间</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Test</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #E5C07B">p1</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">setName</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;杨胜军&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #E5C07B">p1</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">setAge</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">27</span><span style="color: #ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #7F848E; font-style: italic">/** 调用构造器 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;杨胜军&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">info</span><span style="color: #ABB2BF">());</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Person</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** 使用构造器 调用 set 方法 */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Person</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">setName</span><span style="color: #ABB2BF">(name);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">setAge</span><span style="color: #ABB2BF">(age);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** get 方法 */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #E5C07B">String</span><span style="color: #61AFEF"> getName</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> name;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">int</span><span style="color: #61AFEF"> getAge</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> age;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** set 方法 */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setName</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> name;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setAge</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> age;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">    /** 输出信息 */</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> info</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;name=&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;age&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速生成 get 和 set
<img src="@source/learning-notes/java/intermediate/images/1.png" alt="" loading="lazy"></p>
</div>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<p><strong>提出代码复用的问题</strong></p>
<ul>
<li><strong>问题：</strong> 我们编写了两个类，一个是 Pupil 类，一个是 Graduate 问题 : 两个类的属性和方法有很多是相同的，怎么办?</li>
</ul>
<h4 id="介绍-2" tabindex="-1"><a class="header-anchor" href="#介绍-2" aria-hidden="true">#</a> 介绍</h4>
<blockquote>
<p>继承可以解决代码复用,让我们的编程更加靠近人类思维.当多个类存在相同的属性(变量)和方法时,可以从这些类中抽象出父类,在父类中定义这些相同的属性和方法，所有的子类不需要重新定义这些属性和方法，只需要通过extends来声明继承父类即可。</p>
</blockquote>
<h4 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h4>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">子类</span><span style="color: #E06C75"> </span><span style="color: #C678DD">extends</span><span style="color: #E06C75"> 父类 </span><span style="color: #ABB2BF">{</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"><span style="color: #D19A66">1.</span><span style="color: #E06C75"> 子类就会自动拥有父类定义的属性和方法</span></span>
<span class="line"><span style="color: #D19A66">2.</span><span style="color: #E06C75"> 父类又叫 超类，基类。</span></span>
<span class="line"><span style="color: #D19A66">3.</span><span style="color: #E06C75"> 子类又叫派生类。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Pupil 类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Pupil</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #C678DD">double</span><span style="color: #E06C75"> score</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setScore</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">double</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">score</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">score</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> score;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> testInfo</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;小学生&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> name </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;年龄&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> age </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;成绩&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> score);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">Greaduate 类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Greaduate</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">String</span><span style="color: #E06C75"> name</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> age</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #C678DD">double</span><span style="color: #E06C75"> score</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #E06C75">  </span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> setScore</span><span style="color: #ABB2BF">(</span><span style="color: #C678DD">double</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">score</span><span style="color: #ABB2BF">)</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">score</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> score;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> testInfo</span><span style="color: #ABB2BF">()</span><span style="color: #61AFEF"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;大学生&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> name </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;年龄&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> age </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;成绩&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> score);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">Test2 类 中调用 上面两个类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Test2</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Pupil</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">pupil</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Pupil</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">pupil</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;小明&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">pupil</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">10</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">pupil</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">setScore</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">60</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">pupil</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">testInfo</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Greaduate</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">greaduate</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Greaduate</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">greaduate</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">name</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;大学生&quot;</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">greaduate</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">age</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">22</span><span style="color: #ABB2BF">;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">greaduate</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">setScore</span><span style="color: #ABB2BF">(</span><span style="color: #D19A66">70</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">greaduate</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">testInfo</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<ul>
<li>示意图
<img src="@source/learning-notes/java/intermediate/images/2.png" alt="" loading="lazy"></li>
</ul>
<h4 id="使用细节" tabindex="-1"><a class="header-anchor" href="#使用细节" aria-hidden="true">#</a> 使用细节</h4>
<ol>
<li>子类继承了所有的属性和方法，非私有的属性和方法可以在子类直接访问,但是私有属性和方法不能在子类直接访问，要通过公共的方法去访问
<blockquote>
<ul>
<li><strong>Base</strong> 父类</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Base</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">   /** 私有属性 */</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">private</span><span style="color: #E06C75"> </span><span style="color: #C678DD">int</span><span style="color: #E06C75"> n4 </span><span style="color: #56B6C2">=</span><span style="color: #E06C75"> </span><span style="color: #D19A66">400</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #7F848E; font-style: italic">   /** 父类提供一个 public 方法， 返回私有属性 */</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">int</span><span style="color: #61AFEF"> getN4</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> n4;</span></span>
<span class="line"><span style="color: #ABB2BF">   }</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">   /** 私有方法 */</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">private</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> test400</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;test400()...&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">   }</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">   /** 定义公共方法 将私有方法导出 */</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> callTest400</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">       </span><span style="color: #61AFEF">test400</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">   }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Sum 子类</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 这是子类 继承父类 Base */</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Sum</span><span style="color: #E06C75"> </span><span style="color: #C678DD">extends</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Base</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> sayOk</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** 访问私父类中的私有属性 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;Sum()...&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">getN4</span><span style="color: #ABB2BF">());</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** 调用父类中的公共方法从而访问私有方法 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">callTest400</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>主方法</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Inheritance</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">Sum</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">sum</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Sum</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">sum</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">sayOk</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
</li>
<li>子类必须调用父类的构造器,完成父类的初始化</li>
<li>当创建子类对象时，不管使用子类的哪个构造器，默认情况下总会去调用父类的无参构造器，如果父类没有提供无参构造器，则必须在子类的构造器中用 <strong>super</strong> 去指定使用父类的哪个构造器完成对父类的初始化工作，否则，编译不会通过</li>
</ol>
<blockquote>
<blockquote>
<p>子类中没有构造器 不影响</p>
</blockquote>
<ul>
<li><strong>Base</strong> 父类</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Base</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">   /** 父类构造器 */</span></span>
<span class="line"><span style="color: #E06C75">     </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Base</span><span style="color: #ABB2BF"> (){</span></span>
<span class="line"><span style="color: #ABB2BF">          </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;base()...&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">      }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Sum 子类</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 这是子类 继承父类 Base */</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Sum</span><span style="color: #E06C75"> </span><span style="color: #C678DD">extends</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Base</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Sum</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;Sum()...&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Sum</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;Sum(有参构造器)...&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>主方法</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Inheritance</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** sum 和 sum2 都会调用父类的构造器 */</span></span>
<span class="line"><span style="color: #ABB2BF">         </span><span style="color: #E5C07B">Sum</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">sum</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Sum</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">         </span><span style="color: #E5C07B">Sum</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">sum2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Sum</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;杨胜军&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<blockquote>
<blockquote>
<p>父类中没有构造器 则必须使用 <strong>super</strong> 指定构造器</p>
</blockquote>
<ul>
<li><strong>Base</strong> 父类</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Base</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">   /** 父类构造器(有参构造器会覆盖默认构造器) */</span></span>
<span class="line"><span style="color: #E06C75">   </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Base</span><span style="color: #ABB2BF"> (</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">, </span><span style="color: #C678DD">int</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">age</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;base()...&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">   }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Sum 子类</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** 这是子类 继承父类 Base */</span></span>
<span class="line"><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Sum</span><span style="color: #E06C75"> </span><span style="color: #C678DD">extends</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Base</span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Sum</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">super</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;杨胜军&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">27</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;Sum()...&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> Sum</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75; font-style: italic">name</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">super</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;杨胜军222&quot;</span><span style="color: #ABB2BF">, </span><span style="color: #D19A66">29</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;Sum(有参构造器)...&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>主方法</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">Inheritance</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">static</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> main</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">String</span><span style="color: #ABB2BF">[] </span><span style="color: #E06C75; font-style: italic">args</span><span style="color: #ABB2BF">){</span></span>
<span class="line"><span style="color: #ABB2BF">          </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;这是第一个对象&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">          </span><span style="color: #E5C07B">Sum</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">sum</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Sum</span><span style="color: #ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="color: #ABB2BF">          </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;这是第二个对象&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">          </span><span style="color: #E5C07B">Sum</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">sum2</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Sum</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;杨胜军&quot;</span><span style="color: #ABB2BF">);</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<ol start="4">
<li>如果希望指定去调用父类的某个构造器，则显式的调用一下 : super(参数列表)
<blockquote>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #E06C75"> </span><span style="color: #E5C07B">super</span><span style="color: #E06C75">()</span><span style="color: #ABB2BF">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
</li>
<li>super 在使用时，需要放在构造器第一行( super只能在构造器中使用 )</li>
<li><strong>super()</strong> 和 <strong>this()</strong> 都只能放在构造器第一行，因此这两个方法不能共存在一个构
造器</li>
<li>java 所有类都是 Object 类的子类, Object 是所有类的基类</li>
<li>父类构造器的调用不限于直接父类!将一直往上追溯直到 Object 类(顶级父类)</li>
<li>子类最多只能继承一个父类(指直接继承)，即java中是 <strong>单继承机制</strong>。
<ul>
<li><strong>思考:</strong> 如何让A类继承B类和C类? A 继承 B B继承 C</li>
</ul>
</li>
<li>不能滥用继承，子类和父类之间必须满足 is-a 的逻辑关系</li>
</ol>
<h4 id="继承的本质" tabindex="-1"><a class="header-anchor" href="#继承的本质" aria-hidden="true">#</a> 继承的本质</h4>
<p>我们看一个案例来分析当子类继承父类，创建子类对象时，内存中到底发生了什么?</p>
<ul>
<li>提示: 当子类对象创建好后，建立查找的关系</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">内存的布局 （要按照查找关系来返回信息）</p>
<ol>
<li>首先看子类是否有该属性</li>
<li>如果子类有这个属性，并且可以访问，则返回信息</li>
<li>如果子类没有这个属件，就看父举有没有这个属件(如果父类有该属性，并目可以访问，就返问信息。。。）</li>
<li>如果父类没有就按照(3)的规则，继续找上级父类，直到object。.。</li>
</ol>
<ul>
<li>示意图
<img src="@source/learning-notes/java/intermediate/images/3..png" alt="" loading="lazy"></li>
</ul>
</div>
<h3 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h3>
<h4 id="介绍-3" tabindex="-1"><a class="header-anchor" href="#介绍-3" aria-hidden="true">#</a> 介绍</h4>
<blockquote>
<p><strong>super</strong> 代表父类的引用，用于访问父类的属性、方法、构造器</p>
</blockquote>
<h3 id="基本语法-1" tabindex="-1"><a class="header-anchor" href="#基本语法-1" aria-hidden="true">#</a> 基本语法</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 访问父类的属性，但不能访问父类的private属性 super.属性名; </span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 访问父类的方法，不能访问父类的 private方法 super.方法名(参数列表);</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 访问父类的构造器: super(参数列表); 只能放在构造器的第一句，与 this() 只能出现一个!</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> */</span></span>
<span class="line"><span style="color: #E06C75"> </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">B</span><span style="color: #E06C75"> </span><span style="color: #C678DD">extends</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">A</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> hi</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** 访问父类中的 n1 与 n2 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">System</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">out</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">println</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">super</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">n1</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">+</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">super</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">n2</span><span style="color: #ABB2BF">)</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> ok</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/** 访问父类中的方法 */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">super</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">test1</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E5C07B">super</span><span style="color: #ABB2BF">.</span><span style="color: #61AFEF">test2</span><span style="color: #ABB2BF">();</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75"> </span><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="super-带来的便利" tabindex="-1"><a class="header-anchor" href="#super-带来的便利" aria-hidden="true">#</a> super 带来的便利</h4>
<ol>
<li>调用父类的构造器的好处 (分工明确,父类属性由父类初始化，子类的属性由子类初始化)</li>
<li>当子类中有和父类中的成员(属性和方法)重名时，为了访问父类的成员，必须通过 <strong>super</strong>。如果没有重名，使用 <strong>super</strong>、<strong>this</strong>、直接访问是一样的效果!</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 调用 父类A 中的 cal 方法时 顺序如下：</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 1.先找本类，如果有，则调用</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 2.如果没有，则找父类(如果有，并可以调用，则调用)</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 3.如果父类没有，则继续找父类的父类，整个规则，就是一样的 直到 0bject类</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> * 提示: 如果找到，但不能访问， 则报错</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> *       如果没有找到，则提示方法不存在</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic"> */</span></span>
<span class="line"><span style="color: #E06C75"> </span><span style="color: #C678DD">public</span><span style="color: #E06C75"> </span><span style="color: #C678DD">class</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">B</span><span style="color: #E06C75"> </span><span style="color: #C678DD">extends</span><span style="color: #E06C75"> </span><span style="color: #E5C07B">A</span><span style="color: #E06C75"> </span><span style="color: #ABB2BF">{</span></span>
<span class="line"><span style="color: #E06C75">    </span><span style="color: #C678DD">public</span><span style="color: #61AFEF"> </span><span style="color: #C678DD">void</span><span style="color: #61AFEF"> hi</span><span style="color: #ABB2BF">(){</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #7F848E; font-style: italic">/**</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">         * cal(); 等价于 this.cal();</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">         * super.cal(); 直接查找父类</span></span>
<span class="line"><span style="color: #7F848E; font-style: italic">         */</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">cal</span><span style="color: #ABB2BF">(); </span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #E06C75"> </span><span style="color: #ABB2BF">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>super 的访问不限于直接父类，如果爷爷类和本类中有同名的成员，也可以使用super去访问爷爷类的成员;如果多个基类(上级类)中都有同名的成员，使用super。访问遵循就近原则。A-&gt;B-&gt;C</li>
</ol>
<h3 id="super-与-this-的比较" tabindex="-1"><a class="header-anchor" href="#super-与-this-的比较" aria-hidden="true">#</a> super 与 this 的比较</h3>
<figure><img src="@source/learning-notes/java/intermediate/images/4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="方法重写-覆盖-override" tabindex="-1"><a class="header-anchor" href="#方法重写-覆盖-override" aria-hidden="true">#</a> 方法重写/覆盖（override）</h3>
<h4 id="介绍-4" tabindex="-1"><a class="header-anchor" href="#介绍-4" aria-hidden="true">#</a> 介绍</h4>
<p>简单的说:方法覆盖(重写)就是子类有一个方法，和父类的某个方法的名称、返回类型、参数一样,那么我们就说子类的这个方法覆盖了父类的那个方法</p>
<h4 id="注意事项和细节" tabindex="-1"><a class="header-anchor" href="#注意事项和细节" aria-hidden="true">#</a> 注意事项和细节</h4>
<div class="hint-container tip">
<p class="hint-container-title">方法重写也叫方法覆盖，需要满足下面的条件</p>
<ol>
<li>子类的方法的参数,方法名称,要和父类方法的参数,方法名称完全一样。</li>
<li>子类方法的返回类型和父类方法返回类型一样，或者是父类返回类型的子类
比如 父类 返回类型是 object ,子类方法返回类型是 String</li>
<li>子类方法不能缩小父类方法的访问权限</li>
</ol>
</div>
<h4 id="重写与重载比较" tabindex="-1"><a class="header-anchor" href="#重写与重载比较" aria-hidden="true">#</a> 重写与重载比较</h4>
<figure><img src="@source/learning-notes/java/intermediate/images/5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="练习" tabindex="-1"><a class="header-anchor" href="#练习" aria-hidden="true">#</a> 练习</h4>
</div></template>


