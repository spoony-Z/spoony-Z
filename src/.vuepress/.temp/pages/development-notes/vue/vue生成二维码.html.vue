<template><div><h1 id="vue生成二维码" tabindex="-1"><a class="header-anchor" href="#vue生成二维码" aria-hidden="true">#</a> vue生成二维码</h1>
<!-- more -->
<h2 id="方式一-使用-qrcodejs2-插件生成" tabindex="-1"><a class="header-anchor" href="#方式一-使用-qrcodejs2-插件生成" aria-hidden="true">#</a> 方式一：使用 qrcodejs2 插件生成</h2>
<ol>
<li>安装：</li>
</ol>
<CodeGroup>
  <CodeGroupItem title="npm" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">install</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">--save</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">qrcodejs2</span><span style="color: #ABB2BF"> </span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="pnpm">
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">pnpm </span><span style="color: #98C379">add</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">-S</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">qrcodejs2</span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
  <CodeGroupItem title="yarn">
<div class="language-bash" data-ext="sh"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">yarn </span><span style="color: #98C379">add</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">qrcodejs2</span></span>
<span class="line"></span></code></pre></div>  </CodeGroupItem>
</CodeGroup>
<ol start="2">
<li>
<p>引入：<Badge type="tip" text="import QRCode from 'qrcodejs2'" vertical="middle" /></p>
</li>
<li>
<p>使用 ：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">class</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;qrcode&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">ref</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;qrCodeUrl&quot;</span><span style="color: #ABB2BF">&gt;&lt;/</span><span style="color: #E06C75">div</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #61AFEF">mounted</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">var</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">qrcode</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">QRCode</span><span style="color: #ABB2BF">(</span><span style="color: #E5C07B">this</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">$refs</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">qrCodeUrl</span><span style="color: #ABB2BF">, {</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E06C75">text</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;xxxx&#39;</span><span style="color: #ABB2BF">, </span><span style="color: #7F848E; font-style: italic">// 需要转换为二维码的内容</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E06C75">width</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">100</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E06C75">height</span><span style="color: #ABB2BF">: </span><span style="color: #D19A66">100</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E06C75">colorDark</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;#000000&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E06C75">colorLight</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;#ffffff&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #E06C75">correctLevel</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">QRCode</span><span style="color: #ABB2BF">.</span><span style="color: #E5C07B">CorrectLevel</span><span style="color: #ABB2BF">.</span><span style="color: #E06C75">H</span></span>
<span class="line"><span style="color: #ABB2BF">        })</span></span>
<span class="line"><span style="color: #ABB2BF">},</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="方式二-使用-vue-qr-插件" tabindex="-1"><a class="header-anchor" href="#方式二-使用-vue-qr-插件" aria-hidden="true">#</a> 方式二：使用 vue-qr 插件</h2>
<ol>
<li>
<p><code v-pre>npm install vue-qr --save</code></p>
</li>
<li>
<p><code v-pre>import vueQr from 'vue-qr'</code></p>
</li>
<li>
<p>使用：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">vue-qr</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">:logoSrc</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;imageUrl&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">text</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;xxx&quot;</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">:size</span><span style="color: #ABB2BF">=</span><span style="color: #98C379">&quot;200&quot;</span><span style="color: #ABB2BF">&gt;&lt;/</span><span style="color: #E06C75">vue-qr</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF">() {</span></span>
<span class="line"><span style="color: #ABB2BF">            </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> { </span><span style="color: #E06C75">imageUrl</span><span style="color: #ABB2BF">: </span><span style="color: #61AFEF">require</span><span style="color: #ABB2BF">(</span><span style="color: #98C379">&quot;../assets/logo.png&quot;</span><span style="color: #ABB2BF">) }</span></span>
<span class="line"><span style="color: #ABB2BF">        },</span></span>
<span class="line"><span style="color: #ABB2BF">        components: { </span><span style="color: #E06C75">vueQr</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


