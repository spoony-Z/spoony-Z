import{_ as t,X as a,Y as l,a0 as s,a1 as n,a2 as o,$ as i,D as r}from"./framework-2185e866.js";const c="/spoony-z/assets/1-6f288564.png",d={},p=i(`<h1 id="typescript初体验" tabindex="-1"><a class="header-anchor" href="#typescript初体验" aria-hidden="true">#</a> TypeScript初体验</h1><h2 id="安装编译ts的工具包" tabindex="-1"><a class="header-anchor" href="#安装编译ts的工具包" aria-hidden="true">#</a> 安装编译TS的工具包</h2><div class="hint-container tip"><p class="hint-container-title">问题： 为什么要安装编译TS的工具包?</p><p><strong>回答：</strong> Node.js/浏览器，只认识JS代码，不认识T5 代码。需要先将TS 代码转化为JS代码，然后才能运行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#ABB2BF;"> npm </span><span style="color:#98C379;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-g</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">typescript</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 证是否安装成功</span></span>
<span class="line"><span style="color:#ABB2BF;"> tsc </span><span style="color:#D19A66;">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typescript 包: 用来编译 TS 代码的包，提供了 <strong>tsc</strong> 命令，实现了<strong>TS -&gt; JS</strong> 的转化。 编译过程图 <img src="`+c+'" alt="" loading="lazy"></p></div><h2 id="编译并运行ts代码" tabindex="-1"><a class="header-anchor" href="#编译并运行ts代码" aria-hidden="true">#</a> 编译并运行TS代码</h2><ol><li>创建 <strong>hello.ts</strong> 文件（注意: TS文件的后缀名为 .ts）</li><li>将TS 编译为 JS:在终端中输命令，<strong>tsc hello.ts</strong> (此时，在同级目录中会出现一个同名的TS文件)</li><li>执行JS 代码：在终端中输入命令，<strong>node hello.js</strong></li></ol><h2 id="简化运行ts的步骤" tabindex="-1"><a class="header-anchor" href="#简化运行ts的步骤" aria-hidden="true">#</a> 简化运行TS的步骤</h2>',6),h={class:"hint-container tip"},_=s("p",{class:"hint-container-title"},"问题描述： 每次修改代码后，都要重复执行两个命令，才能运行TS代码，太繁琐。",-1),u=s("strong",null,"简化方式：",-1),g={href:"http://Node.is",target:"_blank",rel:"noopener noreferrer"},S=s("li",null,[s("strong",null,"安装命令："),n(),s("code",null,"npm i -g ts-node (ts-node 包提供了 ts-node 命令)")],-1),v=s("li",null,[s("strong",null,"使用方式："),n(" ts-node hello.ts")],-1),m=s("li",null,[s("strong",null,"解释："),n(" ts-node 命令在内部偷偷的将 TS->JS，然后，再运行JS代码")],-1);function y(f,T){const e=r("ExternalLinkIcon");return a(),l("div",null,[p,s("div",h,[_,s("ul",null,[s("li",null,[u,n(" 使用 ts-node 包，直接在 "),s("a",g,[n("Node.is"),o(e)]),n(" 中执行TS代码")]),S,v,m])])])}const B=t(d,[["render",y],["__file","初体验.html.vue"]]);export{B as default};
