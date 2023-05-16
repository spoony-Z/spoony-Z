import{_ as n,X as a,Y as l,Z as e,a0 as s,a1 as p,$ as o}from"./framework-2185e866.js";const i="/spoony-z/assets/4-ec6e5b9a.png",c={},t=s("h1",{id:"super-关键字",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#super-关键字","aria-hidden":"true"},"#"),p(" super 关键字")],-1),r=o(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><blockquote><p><strong>super</strong> 代表父类的引用，用于访问父类的属性、方法、构造器</p></blockquote><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/** </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 访问父类的属性，但不能访问父类的private属性 super.属性名; </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 访问父类的方法，不能访问父类的 private方法 super.方法名(参数列表);</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 访问父类的构造器: super(参数列表); 只能放在构造器的第一句，与 this() 只能出现一个!</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#E06C75;"> </span><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">B</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">extends</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">A</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> hi</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">/** 访问父类中的 n1 与 n2 */</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">System</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">out</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">println</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">super</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">n1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">super</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">n2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> ok</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">/** 访问父类中的方法 */</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">super</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">test1</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">super</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">test2</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="super-带来的便利" tabindex="-1"><a class="header-anchor" href="#super-带来的便利" aria-hidden="true">#</a> super 带来的便利</h2><ol><li>调用父类的构造器的好处 (分工明确,父类属性由父类初始化，子类的属性由子类初始化)</li><li>当子类中有和父类中的成员(属性和方法)重名时，为了访问父类的成员，必须通过 <strong>super</strong>。如果没有重名，使用 <strong>super</strong>、<strong>this</strong>、直接访问是一样的效果!</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 调用 父类A 中的 cal 方法时 顺序如下：</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 1.先找本类，如果有，则调用</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 2.如果没有，则找父类(如果有，并可以调用，则调用)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 3.如果父类没有，则继续找父类的父类，整个规则，就是一样的 直到 0bject类</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * 提示: 如果找到，但不能访问， 则报错</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *       如果没有找到，则提示方法不存在</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#E06C75;"> </span><span style="color:#C678DD;">public</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">class</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">B</span><span style="color:#E06C75;"> </span><span style="color:#C678DD;">extends</span><span style="color:#E06C75;"> </span><span style="color:#E5C07B;">A</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;">    </span><span style="color:#C678DD;">public</span><span style="color:#61AFEF;"> </span><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> hi</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">         * cal(); 等价于 this.cal();</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">         * super.cal(); 直接查找父类</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">         */</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">cal</span><span style="color:#ABB2BF;">(); </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>super 的访问不限于直接父类，如果爷爷类和本类中有同名的成员，也可以使用super去访问爷爷类的成员;如果多个基类(上级类)中都有同名的成员，使用super。访问遵循就近原则。A-&gt;B-&gt;C</li></ol><h2 id="super-与-this-的比较" tabindex="-1"><a class="header-anchor" href="#super-与-this-的比较" aria-hidden="true">#</a> super 与 this 的比较</h2><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10);function d(y,B){return a(),l("div",null,[t,e(" more "),r])}const v=n(c,[["render",d],["__file","super关键字.html.vue"]]);export{v as default};
