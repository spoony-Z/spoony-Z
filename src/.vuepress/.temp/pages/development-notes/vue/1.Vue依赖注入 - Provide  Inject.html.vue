<template><div><h1 id="vue-依赖注入-provide-inject-重点" tabindex="-1"><a class="header-anchor" href="#vue-依赖注入-provide-inject-重点" aria-hidden="true">#</a> Vue 依赖注入 - Provide / Inject(重点)</h1>
<!-- more -->
<p>通常情况下，<strong>父</strong>组件向<strong>孙</strong>组件传递数据，可以采用父子<code v-pre>props</code>层层传递，也可以使用<code v-pre>bus（中央事件总线）</code>和<code v-pre>Vuex</code>直接交互。在<strong>Vue2.2.0</strong>之后，Vue还提供了<code v-pre>provide / inject</code>选项</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">//爷爷</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;{{ title }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">son</span><span style="color: #ABB2BF">&gt;&lt;/</span><span style="color: #E06C75">son</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">Son</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;./son&quot;</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;Father&#39;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">components</span><span style="color: #ABB2BF">: { </span><span style="color: #E06C75">Son</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #7F848E; font-style: italic">// provide选项提供变量</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">provide</span><span style="color: #ABB2BF">: {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">message</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;provided by father&#39;</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF"> () {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">        </span><span style="color: #E06C75">title</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;父组件&#39;</span></span>
<span class="line"><span style="color: #ABB2BF">      }</span></span>
<span class="line"><span style="color: #ABB2BF">    },</span></span>
<span class="line"><span style="color: #ABB2BF">  }</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">​</span></span>
<span class="line"><span style="color: #ABB2BF">//爸爸</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;{{ title }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">grand-son</span><span style="color: #ABB2BF">&gt;&lt;/</span><span style="color: #E06C75">grand-son</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">import</span><span style="color: #ABB2BF"> </span><span style="color: #E06C75">grandSon</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">from</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">&quot;./grandSon &quot;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;Son&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">components</span><span style="color: #ABB2BF">: { </span><span style="color: #E06C75">grandSon</span><span style="color: #ABB2BF"> },</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF"> () {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">title</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;子组件&#39;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">//孙子</span></span>
<span class="line"><span style="color: #ABB2BF">    &lt;</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;message：{{ message }}&lt;/</span><span style="color: #E06C75">p</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"><span style="color: #C678DD">export</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">default</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">name</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&quot;GrandSon&quot;</span><span style="color: #ABB2BF">,</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #E06C75">inject</span><span style="color: #ABB2BF">: [ </span><span style="color: #98C379">&quot;message&quot;</span><span style="color: #ABB2BF"> ],</span></span>
<span class="line"><span style="color: #ABB2BF">  </span><span style="color: #61AFEF">data</span><span style="color: #ABB2BF"> () {</span></span>
<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #C678DD">return</span><span style="color: #ABB2BF"> {</span></span>
<span class="line"><span style="color: #ABB2BF">      </span><span style="color: #E06C75">title</span><span style="color: #ABB2BF">: </span><span style="color: #98C379">&#39;孙组件&#39;</span></span>
<span class="line"><span style="color: #ABB2BF">    }</span></span>
<span class="line"><span style="color: #ABB2BF">  },</span></span>
<span class="line"><span style="color: #ABB2BF">};</span></span>
<span class="line"><span style="color: #ABB2BF">&lt;/</span><span style="color: #E06C75">script</span><span style="color: #ABB2BF">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


