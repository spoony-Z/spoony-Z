import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue-中动态渲染组件以及传值" tabindex="-1"><a class="header-anchor" href="#vue-中动态渲染组件以及传值" aria-hidden="true">#</a> vue 中动态渲染组件以及传值</h1><!-- more --><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">el-form-item</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">v-for</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;(item, index) in componentData&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">:key</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;index&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">:label</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;item.label&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">component</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">:is</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;item.component&#39;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">v-model</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;queryParams[item.field]&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">@keyup.enter.native</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;handleQuery&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">component</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">el-form-item</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用 component 标签，is 属性中就是需要渲染的组件名</strong></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/development-notes/vue/动态渲染组件以及传值.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "动态渲染组件以及传值.html.vue"]]);
export {
  ___________html as default
};
