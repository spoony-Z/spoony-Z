import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_2023计划表" tabindex="-1"><a class="header-anchor" href="#_2023计划表" aria-hidden="true">#</a> 2023计划表</h1><h2 id="_3月-5月" tabindex="-1"><a class="header-anchor" href="#_3月-5月" aria-hidden="true">#</a> 3月 --- 5月</h2><pre><code>java基础学习完成，
</code></pre><h2 id="_5月-6月" tabindex="-1"><a class="header-anchor" href="#_5月-6月" aria-hidden="true">#</a> 5月 --- 6月</h2><pre><code>vue3 + vite + TS 学习完成
</code></pre><h2 id="_6月-7月" tabindex="-1"><a class="header-anchor" href="#_6月-7月" aria-hidden="true">#</a> 6月 --- 7月</h2><pre><code>css、JavaScript 复习
</code></pre><h2 id="_7月-8月" tabindex="-1"><a class="header-anchor" href="#_7月-8月" aria-hidden="true">#</a> 7月 --- 8月</h2><pre><code>three.js
</code></pre><h2 id="_8月-9月" tabindex="-1"><a class="header-anchor" href="#_8月-9月" aria-hidden="true">#</a> 8月 --- 9月</h2><pre><code>react
</code></pre><h2 id="_9月-10月" tabindex="-1"><a class="header-anchor" href="#_9月-10月" aria-hidden="true">#</a> 9月 --- 10月</h2><pre><code>python
</code></pre></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/2023计划表.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2023____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "2023计划表.html.vue"]]);
export {
  _2023____html as default
};
