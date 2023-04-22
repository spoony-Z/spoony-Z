import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _imports_0 = "/spoony-z/assets/1-6f288564.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="typescript初体验" tabindex="-1"><a class="header-anchor" href="#typescript初体验" aria-hidden="true">#</a> TypeScript初体验</h1><h2 id="安装编译ts的工具包" tabindex="-1"><a class="header-anchor" href="#安装编译ts的工具包" aria-hidden="true">#</a> 安装编译TS的工具包</h2><div class="hint-container tip"><p class="hint-container-title">问题： 为什么要安装编译TS的工具包?</p><p><strong>回答：</strong> Node.js/浏览器，只认识JS代码，不认识T5 代码。需要先将TS 代码转化为JS代码，然后才能运行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 安装</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> npm </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">i</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">-g</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">typescript</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 证是否安装成功</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> tsc </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typescript 包: 用来编译 TS 代码的包，提供了 <strong>tsc</strong> 命令，实现了<strong>TS -&gt; JS</strong> 的转化。 编译过程图 <img${ssrRenderAttr("src", _imports_0)} alt="" loading="lazy"></p></div><h2 id="编译并运行ts代码" tabindex="-1"><a class="header-anchor" href="#编译并运行ts代码" aria-hidden="true">#</a> 编译并运行TS代码</h2><ol><li>创建 <strong>hello.ts</strong> 文件（注意: TS文件的后缀名为 .ts）</li><li>将TS 编译为 JS:在终端中输命令，<strong>tsc hello.ts</strong> (此时，在同级目录中会出现一个同名的TS文件)</li><li>执行JS 代码：在终端中输入命令，<strong>node hello.js</strong></li></ol><h2 id="简化运行ts的步骤" tabindex="-1"><a class="header-anchor" href="#简化运行ts的步骤" aria-hidden="true">#</a> 简化运行TS的步骤</h2><div class="hint-container tip"><p class="hint-container-title">问题描述： 每次修改代码后，都要重复执行两个命令，才能运行TS代码，太繁琐。</p><ul><li><strong>简化方式：</strong> 使用 ts-node 包，直接在 <a href="http://Node.is" target="_blank" rel="noopener noreferrer">Node.is`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> 中执行TS代码</li><li><strong>安装命令：</strong> <code>npm i -g ts-node (ts-node 包提供了 ts-node 命令)</code></li><li><strong>使用方式：</strong> ts-node hello.ts</li><li><strong>解释：</strong> ts-node 命令在内部偷偷的将 TS-&gt;JS，然后，再运行JS代码</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/learning-notes/TypeScript/初体验.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "初体验.html.vue"]]);
export {
  ____html as default
};
