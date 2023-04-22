import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _imports_0 = "/spoony-z/assets/10-1278522c.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="java-api-文档" tabindex="-1"><a class="header-anchor" href="#java-api-文档" aria-hidden="true">#</a> Java API 文档</h1><!-- more --><h3 id="中文在线文档-https-www-matools-com" tabindex="-1"><a class="header-anchor" href="#中文在线文档-https-www-matools-com" aria-hidden="true">#</a> <a href="https://www.matools.com" target="_blank" rel="noopener noreferrer">中文在线文档： https://www.matools.com`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></h3><ol><li><p>API (Application Programming Interface,应用程序编程接口)是 Java 提供的基本编程接口(java提供的类还有相关的方法)。</p></li><li><p>Java语言提供了大量的基础类，因此 Oracle公司也为这些基础类提供了相应的API文档，用于告诉开发者如何使用这些类，以及这些类里包含的方法</p></li><li><p>Java类的组织形式</p><figure><img${ssrRenderAttr("src", _imports_0)} alt="image-20230224003002648" tabindex="0" loading="lazy"><figcaption>image-20230224003002648</figcaption></figure></li><li><p>举例说明如何使用 ArrayList类有哪些方法: 包 -&gt; 类 -&gt; 方法</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/learning-notes/java/primary/Java API 文档.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Java_API____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Java API 文档.html.vue"]]);
export {
  Java_API____html as default
};
