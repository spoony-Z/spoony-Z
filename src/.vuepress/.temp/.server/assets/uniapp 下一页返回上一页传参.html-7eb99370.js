import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="uniapp-下一页返回上一页传参" tabindex="-1"><a class="header-anchor" href="#uniapp-下一页返回上一页传参" aria-hidden="true">#</a> uniapp 下一页返回上一页传参</h1><!-- more --><p>作者：`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "滋泼泼",
    vertical: "middle"
  }, null, _parent));
  _push(`</p><ol><li><p>B 页面</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">onBackPress() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   let pages = getCurrentPages();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   if (pages.length &gt;= 2) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    let curPage = pages[pages.length - 1]; // 当前页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    let prePage = pages[pages.length - 2]; // 上一页面</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    prePage.$vm.参数名 = 参数值;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">   }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">  }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>A 页面</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">let pages = getCurrentPages();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">let curPage = pages[pages.length - 1];</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">curPage.$vm.参数名;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/development-notes/uniapp/uniapp 下一页返回上一页传参.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uniapp____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "uniapp 下一页返回上一页传参.html.vue"]]);
export {
  uniapp____________html as default
};
