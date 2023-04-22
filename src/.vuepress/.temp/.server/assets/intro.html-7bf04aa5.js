import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="介绍页" tabindex="-1"><a class="header-anchor" href="#介绍页" aria-hidden="true">#</a> 介绍页</h1><p>将你的个人介绍和档案放置在此处。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/intro.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intro_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "intro.html.vue"]]);
export {
  intro_html as default
};
