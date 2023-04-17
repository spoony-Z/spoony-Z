import{_ as n,W as l,X as i,Y as p,$ as e,a0 as s,a1 as c,Z as r,C as t}from"./framework-b8ce1a77.js";const o={},d=e("h1",{id:"uniapp-下一页返回上一页传参",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uniapp-下一页返回上一页传参","aria-hidden":"true"},"#"),s(" uniapp 下一页返回上一页传参")],-1),u=r(`<ol><li><p>B 页面</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">onBackPress() {</span></span>
<span class="line"><span style="color:#ABB2BF;">   let pages = getCurrentPages();</span></span>
<span class="line"><span style="color:#ABB2BF;">   if (pages.length &gt;= 2) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    let curPage = pages[pages.length - 1]; // 当前页面</span></span>
<span class="line"><span style="color:#ABB2BF;">    let prePage = pages[pages.length - 2]; // 上一页面</span></span>
<span class="line"><span style="color:#ABB2BF;">    prePage.$vm.参数名 = 参数值;</span></span>
<span class="line"><span style="color:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>A 页面</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">let pages = getCurrentPages();</span></span>
<span class="line"><span style="color:#ABB2BF;">let curPage = pages[pages.length - 1];</span></span>
<span class="line"><span style="color:#ABB2BF;">curPage.$vm.参数名;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function v(B,g){const a=t("Badge");return l(),i("div",null,[d,p(" more "),e("p",null,[s("作者："),c(a,{type:"tip",text:"滋泼泼",vertical:"middle"})]),u])}const _=n(o,[["render",v],["__file","uniapp 下一页返回上一页传参.html.vue"]]);export{_ as default};
