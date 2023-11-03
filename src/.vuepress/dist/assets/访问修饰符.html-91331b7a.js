import{_ as n,X as a,Y as l,Z as o,a0 as s,a1 as p,$ as e}from"./framework-2185e866.js";const t={},r=s("h1",{id:"访问修饰符",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#访问修饰符","aria-hidden":"true"},"#"),p(" 访问修饰符")],-1),c=e(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><strong>java 提供四种访问控制修饰符号，用于控制方法和属性( 成员变量 ) 的访问权限( 范围 )</strong></p><blockquote><ol><li><strong>公开级别：</strong> 用 <strong>public</strong> 修饰,对外公开</li><li><strong>受保护级别：</strong> 用 <strong>protected</strong> 修饰,对子类和同一个包中的类公开</li><li><strong>默认级别：</strong> 没有修饰符号,向同一个包的类公开</li><li><strong>私有级别：</strong> 用 <strong>private</strong> 修饰,只有类本身可以访问,不对外公开</li></ol></blockquote><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示" aria-hidden="true">#</a> 演示</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">Test</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;">  </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> n3 </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">30</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">  </span><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> n1 </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">  </span><span style="color:#C678DD;">protected</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> n2 </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> </span><span style="color:#D19A66;">20</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">  </span><span style="color:#C678DD;">private</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">int</span><span style="color:#E06C75;"> n4 </span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">40</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">  </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> setN1</span><span style="color:#ABB2BF;">()</span><span style="color:#61AFEF;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#7F848E;font-style:italic;">// 同类中 访问四个属性</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">n1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">n2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">n3</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">n4</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function B(i,y){return a(),l("div",null,[r,o(" more "),c])}const C=n(t,[["render",B],["__file","访问修饰符.html.vue"]]);export{C as default};
