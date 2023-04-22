import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dos介绍" tabindex="-1"><a class="header-anchor" href="#dos介绍" aria-hidden="true">#</a> DOS介<strong>绍</strong></h1><!-- more --><p><strong>DOS</strong>：Disk Operating System 磁盘操作系统</p><h2 id="常用的dos命令" tabindex="-1"><a class="header-anchor" href="#常用的dos命令" aria-hidden="true">#</a> 常用的DOS命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">dir    </span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 无参数：查看当前所在目录的文件和文件夹</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">dir </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">/s</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 查看当前目录已经其所有子目录的文件和文件夹。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">dir </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">/a</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 查看包括隐含文件的所有文件。 </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">dir </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">/ah</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 只显示出隐含文件。 </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">dir </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">/w</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 以紧凑方式（一行显示5个文件）显示文件和文件夹。 </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">dir </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">/p</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 以分页方式（显示一页之后会自动暂停）显示。 </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">cls </span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 清除屏幕。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/learning-notes/java/primary/DOS命令了解.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DOS_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "DOS命令了解.html.vue"]]);
export {
  DOS_____html as default
};
