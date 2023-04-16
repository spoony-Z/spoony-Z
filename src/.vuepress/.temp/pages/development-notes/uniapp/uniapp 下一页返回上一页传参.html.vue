<template><div><h1 id="uniapp-下一页返回上一页传参" tabindex="-1"><a class="header-anchor" href="#uniapp-下一页返回上一页传参" aria-hidden="true">#</a> uniapp 下一页返回上一页传参</h1>
<!-- more -->
<p>作者：<Badge type="tip" text="滋泼泼" vertical="middle" /></p>
<ol>
<li>
<p>B 页面</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">onBackPress() {</span></span>
<span class="line"><span style="color: #ABB2BF">   let pages = getCurrentPages();</span></span>
<span class="line"><span style="color: #ABB2BF">   if (pages.length &gt;= 2) {</span></span>
<span class="line"><span style="color: #ABB2BF">    let curPage = pages[pages.length - 1]; // 当前页面</span></span>
<span class="line"><span style="color: #ABB2BF">    let prePage = pages[pages.length - 2]; // 上一页面</span></span>
<span class="line"><span style="color: #ABB2BF">    prePage.$vm.参数名 = 参数值;</span></span>
<span class="line"><span style="color: #ABB2BF">   }</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>A 页面</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">let pages = getCurrentPages();</span></span>
<span class="line"><span style="color: #ABB2BF">let curPage = pages[pages.length - 1];</span></span>
<span class="line"><span style="color: #ABB2BF">curPage.$vm.参数名;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


