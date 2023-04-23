import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CodeGroup = resolveComponent("CodeGroup");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vue生成二维码" tabindex="-1"><a class="header-anchor" href="#vue生成二维码" aria-hidden="true">#</a> vue生成二维码</h1><!-- more --><h2 id="方式一-使用-qrcodejs2-插件生成" tabindex="-1"><a class="header-anchor" href="#方式一-使用-qrcodejs2-插件生成" aria-hidden="true">#</a> 方式一：使用 qrcodejs2 插件生成</h2><ol><li>安装：</li></ol>`);
  _push(ssrRenderComponent(_component_CodeGroup, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CodeGroupItem, {
          title: "npm",
          active: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-bash" data-ext="sh"${_scopeId2}><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}>npm </span><span style="${ssrRenderStyle({ "color": "#98C379" })}"${_scopeId2}>install</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}"${_scopeId2}>--save</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}"${_scopeId2}>qrcodejs2</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}> </span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "language-bash",
                  "data-ext": "sh"
                }, [
                  createVNode("pre", {
                    class: "shiki one-dark-pro",
                    style: { "background-color": "#282c34" },
                    tabindex: "0"
                  }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#ABB2BF" } }, "npm "),
                        createVNode("span", { style: { "color": "#98C379" } }, "install"),
                        createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                        createVNode("span", { style: { "color": "#D19A66" } }, "--save"),
                        createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                        createVNode("span", { style: { "color": "#98C379" } }, "qrcodejs2"),
                        createVNode("span", { style: { "color": "#ABB2BF" } }, " ")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CodeGroupItem, { title: "pnpm" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-bash" data-ext="sh"${_scopeId2}><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}>pnpm </span><span style="${ssrRenderStyle({ "color": "#98C379" })}"${_scopeId2}>add</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}"${_scopeId2}>-S</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}"${_scopeId2}>qrcodejs2</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "language-bash",
                  "data-ext": "sh"
                }, [
                  createVNode("pre", {
                    class: "shiki one-dark-pro",
                    style: { "background-color": "#282c34" },
                    tabindex: "0"
                  }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#ABB2BF" } }, "pnpm "),
                        createVNode("span", { style: { "color": "#98C379" } }, "add"),
                        createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                        createVNode("span", { style: { "color": "#D19A66" } }, "-S"),
                        createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                        createVNode("span", { style: { "color": "#98C379" } }, "qrcodejs2")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_CodeGroupItem, { title: "yarn" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-bash" data-ext="sh"${_scopeId2}><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}>yarn </span><span style="${ssrRenderStyle({ "color": "#98C379" })}"${_scopeId2}>add</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}"${_scopeId2}>qrcodejs2</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "language-bash",
                  "data-ext": "sh"
                }, [
                  createVNode("pre", {
                    class: "shiki one-dark-pro",
                    style: { "background-color": "#282c34" },
                    tabindex: "0"
                  }, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#ABB2BF" } }, "yarn "),
                        createVNode("span", { style: { "color": "#98C379" } }, "add"),
                        createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                        createVNode("span", { style: { "color": "#98C379" } }, "qrcodejs2")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CodeGroupItem, {
            title: "npm",
            active: ""
          }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "language-bash",
                "data-ext": "sh"
              }, [
                createVNode("pre", {
                  class: "shiki one-dark-pro",
                  style: { "background-color": "#282c34" },
                  tabindex: "0"
                }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#ABB2BF" } }, "npm "),
                      createVNode("span", { style: { "color": "#98C379" } }, "install"),
                      createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                      createVNode("span", { style: { "color": "#D19A66" } }, "--save"),
                      createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                      createVNode("span", { style: { "color": "#98C379" } }, "qrcodejs2"),
                      createVNode("span", { style: { "color": "#ABB2BF" } }, " ")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "pnpm" }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "language-bash",
                "data-ext": "sh"
              }, [
                createVNode("pre", {
                  class: "shiki one-dark-pro",
                  style: { "background-color": "#282c34" },
                  tabindex: "0"
                }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#ABB2BF" } }, "pnpm "),
                      createVNode("span", { style: { "color": "#98C379" } }, "add"),
                      createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                      createVNode("span", { style: { "color": "#D19A66" } }, "-S"),
                      createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                      createVNode("span", { style: { "color": "#98C379" } }, "qrcodejs2")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          createVNode(_component_CodeGroupItem, { title: "yarn" }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "language-bash",
                "data-ext": "sh"
              }, [
                createVNode("pre", {
                  class: "shiki one-dark-pro",
                  style: { "background-color": "#282c34" },
                  tabindex: "0"
                }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#ABB2BF" } }, "yarn "),
                      createVNode("span", { style: { "color": "#98C379" } }, "add"),
                      createVNode("span", { style: { "color": "#ABB2BF" } }, " "),
                      createVNode("span", { style: { "color": "#98C379" } }, "qrcodejs2")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`<ol start="2"><li><p>引入：`);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "import QRCode from 'qrcodejs2'",
    vertical: "middle"
  }, null, _parent));
  _push(`</p></li><li><p>使用 ：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">div</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">class</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;qrcode&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">ref</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;qrCodeUrl&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">div</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">mounted</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">var</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">qrcode</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">=</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">new</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">QRCode</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">this</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">$refs</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">qrCodeUrl</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">, {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">            </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">text</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;xxxx&#39;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">, </span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}">// 需要转换为二维码的内容</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">            </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">width</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">100</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">            </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">height</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">100</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">            </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">colorDark</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;#000000&#39;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">            </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">colorLight</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&#39;#ffffff&#39;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">            </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">correctLevel</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">QRCode</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">CorrectLevel</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">H</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">        })</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">},</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="方式二-使用-vue-qr-插件" tabindex="-1"><a class="header-anchor" href="#方式二-使用-vue-qr-插件" aria-hidden="true">#</a> 方式二：使用 vue-qr 插件</h2><ol><li><p><code>npm install vue-qr --save</code></p></li><li><p><code>import vueQr from &#39;vue-qr&#39;</code></p></li><li><p>使用：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">vue-qr</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">:logoSrc</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;imageUrl&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">text</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;xxx&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">:size</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">=</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;200&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">vue-qr</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">        </span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">data</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">            </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">return</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> { </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">imageUrl</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">: </span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">require</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;../assets/logo.png&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">) }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">        },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">        components: { </span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">vueQr</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    },</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}">script</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/development-notes/vue/vue生成二维码.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "vue生成二维码.html.vue"]]);
export {
  vue______html as default
};
