import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="快速删除node-modeules" tabindex="-1"><a class="header-anchor" href="#快速删除node-modeules" aria-hidden="true">#</a> 快速删除node_modeules</h1><!-- more --><h4 id="_1-全局下载-rimraf" tabindex="-1"><a class="header-anchor" href="#_1-全局下载-rimraf" aria-hidden="true">#</a> 1. 全局下载 rimraf</h4><p><code>npm install rimraf -g</code></p><h4 id="_2-打开命令提示符-进入到项目跟目录执行" tabindex="-1"><a class="header-anchor" href="#_2-打开命令提示符-进入到项目跟目录执行" aria-hidden="true">#</a> 2. 打开命令提示符，进入到项目跟目录执行</h4><p><code>rimraf node_modules</code></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/npm-tool/rimraf.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rimraf_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "rimraf.html.vue"]]);
export {
  rimraf_html as default
};
