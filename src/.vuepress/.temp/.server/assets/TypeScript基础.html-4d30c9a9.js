import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="typescript-介绍" tabindex="-1"><a class="header-anchor" href="#typescript-介绍" aria-hidden="true">#</a> TypeScript 介绍</h1><h2 id="typescript为什么要为js添加类型支持" tabindex="-1"><a class="header-anchor" href="#typescript为什么要为js添加类型支持" aria-hidden="true">#</a> TypeScript为什么要为JS添加类型支持?</h2><ol><li><strong>背景：</strong> JS的类型系统存在“先天缺陷”，JS代码中绝大部分错误都是类型错误(UncaughtTypeError)。</li><li><strong>问题：</strong> 增加了找Bug、改Bug的时间，严重影响开发效率</li><li>从编程语言的动静来区分，TypeScript属于静态类型的编程语言，JS属于动态类型的编程语言。</li><li><strong>静态类型：</strong> 编译期做类型检查;动态类型:执行期做类型检查。</li><li><strong>编译和执行顺序：</strong> 1. 编译 2. 执行</li><li><strong>对于JS来说：</strong> 需要等到代码真正去执行的时候才能发现错误(晚)，对于 TS 来说:在代码编译的时候 (代码执行前)就可以发现错误 (早)。并且，配合VSCode 等开发工具，T5 可以提前到在编写代码的同时就发现代码中的错误，减少找 Bug、改 Bug 时间。</li></ol><h2 id="typescript相比js的优势" tabindex="-1"><a class="header-anchor" href="#typescript相比js的优势" aria-hidden="true">#</a> TypeScript相比JS的优势</h2><ol><li>更早 (写代码的同时)发现错误，减少找 Bug、改 Bug 时间，提升开发效率</li><li>程序中任何位置的代码都有代码提示，随时随地的安全感，增强了开发体验</li><li>强大的类型系统提升了代码的可维护性，使得重构代码更加容易</li><li>支持最新的 ECMAScript 语法，优先体验最新的语法，让你走在前端技术的最前沿</li><li>TS 类型推断机制，不需要在代码中的每个地方都显示标注类型，让你在享受优势的同时，尽量降低了成本。</li><li>除此之外，Vue3源码使用TS重写、Anqular默认支持TS、React与TS 完美配合，TypeScript已成为大中型前端项目的首先编程语言。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/learning-notes/TypeScript/TypeScript基础.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TypeScript___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "TypeScript基础.html.vue"]]);
export {
  TypeScript___html as default
};
