import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Badge = resolveComponent("Badge");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h1><!-- more --><h2 id="java-转义符" tabindex="-1"><a class="header-anchor" href="#java-转义符" aria-hidden="true">#</a> java 转义符</h2><p>​ 1. `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "\\t ",
    vertical: "middle"
  }, null, _parent));
  _push(`：一个制表位，实现对其的功能</p><p>​ 2. `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "\\n",
    vertical: "middle"
  }, null, _parent));
  _push(`：换行符</p><p>​ 3. `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "\\\\",
    vertical: "middle"
  }, null, _parent));
  _push(`：一个\\</p><p>​ 4. `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "\\“",
    vertical: "middle"
  }, null, _parent));
  _push(`：一个&quot;</p><p>​ 5. `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "\\'",
    vertical: "middle"
  }, null, _parent));
  _push(`：一个&#39;</p><p>​ 6. `);
  _push(ssrRenderComponent(_component_Badge, {
    type: "tip",
    text: "\\r",
    vertical: "middle"
  }, null, _parent));
  _push(`：一个回车</p><h2 id="java-注释" tabindex="-1"><a class="header-anchor" href="#java-注释" aria-hidden="true">#</a> java 注释</h2><h3 id="单行注释" tabindex="-1"><a class="header-anchor" href="#单行注释" aria-hidden="true">#</a> 单行注释 //</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}">// 单行注释</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="多行注释" tabindex="-1"><a class="header-anchor" href="#多行注释" aria-hidden="true">#</a> 多行注释 /* */</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}">/*</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"> * 多行注释</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"> */</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档注释" tabindex="-1"><a class="header-anchor" href="#文档注释" aria-hidden="true">#</a> 文档注释</h3><p>注释内容可以被 JDK 提供的工具 javadoc所解析，生成一套以网页文件形式的该程序的说明文档，一般写在类</p><p><strong>基本格式</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"> * </span><span style="${ssrRenderStyle({ "color": "#C678DD", "font-style": "italic" })}">@author</span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"> SOBER</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"> * </span><span style="${ssrRenderStyle({ "color": "#C678DD", "font-style": "italic" })}">@version</span><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"> 1.0.0</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"> */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C678DD" })}">public</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}"> </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">class</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}"> </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">Hello</span><span style="${ssrRenderStyle({ "color": "#E06C75" })}"> </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E06C75" })}">    </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">public</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">static</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C678DD" })}">void</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}"> main</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">String</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">[] </span><span style="${ssrRenderStyle({ "color": "#E06C75", "font-style": "italic" })}">args</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">)</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">  </span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">        </span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">System</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#E5C07B" })}">out</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">.</span><span style="${ssrRenderStyle({ "color": "#61AFEF" })}">println</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">(</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">&quot;hello,word&quot;</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用命令运行该 java 文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="${ssrRenderStyle({ "background-color": "#282c34" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># javadoc -d 存放网页的文件夹路径 -yyy -xxx java文件.java</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#7F848E", "font-style": "italic" })}"># 例 </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}">javadoc </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">-d</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">D:</span><span style="${ssrRenderStyle({ "color": "#56B6C2" })}">\\\\</span><span style="${ssrRenderStyle({ "color": "#98C379" })}">temp</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">-author</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#D19A66" })}">-version</span><span style="${ssrRenderStyle({ "color": "#ABB2BF" })}"> </span><span style="${ssrRenderStyle({ "color": "#98C379" })}">Hello.java</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用 javadoc 标签</strong></p><table><thead><tr><th>标签</th><th>描述</th><th>实例</th></tr></thead><tbody><tr><td>@author</td><td>标识一个类的作者</td><td>@author description</td></tr><tr><td>@deprecated</td><td>指名一个过期的类或成员</td><td>@deprecated description</td></tr><tr><td></td><td>指明当前文档根目录的路径</td><td>Directory Path</td></tr><tr><td>@exception</td><td>标志一个类抛出的异常</td><td>@exception exception-name explanation</td></tr><tr><td></td><td>从直接父类继承的注释</td><td>Inherits a comment from the immediate surperclass.</td></tr><tr name="" text=""><td></td><td>插入一个到另一个主题的链接</td><td></td></tr><tr><td></td><td>插入一个到另一个主题的链接，但是该链接显示纯文本字体</td><td>Inserts an in-line link to another topic.</td></tr><tr><td>@param</td><td>说明一个方法的参数</td><td>@param parameter-name explanation</td></tr><tr><td>@return</td><td>说明返回值类型</td><td>@return explanation</td></tr><tr><td>@see</td><td>指定一个到另一个主题的链接</td><td>@see anchor</td></tr><tr><td>@serial</td><td>说明一个序列化属性</td><td>@serial description</td></tr><tr><td>@serialData</td><td>说明通过writeObject( ) 和 writeExternal( )方法写的数据</td><td>@serialData description</td></tr><tr><td>@serialField</td><td>说明一个ObjectStreamField组件</td><td>@serialField name type description</td></tr><tr><td>@since</td><td>标记当引入一个特定的变化时</td><td>@since release</td></tr><tr><td>@throws</td><td>和 @exception标签一样.</td><td>The @throws tag has the same meaning as the @exception tag.</td></tr><tr><td></td><td>显示常量的值，该常量必须是static属性。</td><td>Displays the value of a constant, which must be a static field.</td></tr><tr><td>@version</td><td>指定类的版本</td><td>@version info</td></tr></tbody></table><h2 id="java代码规范" tabindex="-1"><a class="header-anchor" href="#java代码规范" aria-hidden="true">#</a> java代码规范</h2><p>​ 1.类、方法的注释，要以javadoc的方式来写。</p><p>​ 2.非Java Doc的注释，往往是给代码的维护者看的，着重告述读者为什么这样写如何修改，注意什么问题等</p><p>​ 3.使用tab操作，实现缩进,默认整体向右边移动，时候用shift+tab整体向左移 4.运算符和 = 两边习惯性各加一个空格。比如: 2 + 4 * 5 + 345</p><p>​ 5.源文件使用utf-8编码</p><p>​ 6.行宽度不要超过80字符</p><p>​ 7.代码编写次行风格和行尾风格</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/learning-notes/java/primary/java基础.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const java___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "java基础.html.vue"]]);
export {
  java___html as default
};
