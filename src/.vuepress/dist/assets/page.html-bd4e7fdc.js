import{_ as B,X as A,Y as w,Z as m,a0 as s,a1 as e,a2 as a,a3 as n,$ as r,D as t}from"./framework-2185e866.js";const z={},x=s("p",null,[s("code",null,"more"),e(" 注释之前的内容被视为文章摘要。")],-1),E=r('<h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息" aria-hidden="true">#</a> 页面信息</h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容" aria-hidden="true">#</a> 页面内容</h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><p>你可以将图片和 Markdown 文件放置在一起，但是你需要使用<strong>相对链接</strong><code>./</code> 进行引用。</p></li><li><p>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</p></li></ul></div><p>主题包含了一个自定义徽章可以使用:</p>',7),F=s("h2",{id:"页面结构",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#页面结构","aria-hidden":"true"},"#"),e(" 页面结构")],-1),C=s("p",null,"此页面应当包含:",-1),j={href:"https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://theme-hope.vuejs.press/zh/guide/feature/page-info.html",target:"_blank",rel:"noopener noreferrer"},U={href:"https://theme-hope.vuejs.press/zh/guide/layout/page.html#%E6%A0%87%E9%A2%98%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},D={href:"https://theme-hope.vuejs.press/guide/feature/meta.html",target:"_blank",rel:"noopener noreferrer"},M={href:"https://theme-hope.vuejs.press/zh/guide/feature/comment.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html",target:"_blank",rel:"noopener noreferrer"},J={href:"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://theme-hope.vuejs.press/zh/guide/layout/footer.html",target:"_blank",rel:"noopener noreferrer"},G=s("li",null,"返回顶部按钮",-1),X=s("p",null,"你可以通过主题选项和页面 Frontmatter 自定义它们。",-1),Z=s("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),Y=s("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),K=s("h2",{id:"markdown-介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-介绍","aria-hidden":"true"},"#"),e(" Markdown 介绍")],-1),L={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},S=s("h2",{id:"markdown-配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-配置","aria-hidden":"true"},"#"),e(" Markdown 配置")],-1),W=s("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),q={class:"hint-container info"},H=s("p",{class:"hint-container-title"},"相关信息",-1),Q={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},O=s("h2",{id:"markdown-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-扩展","aria-hidden":"true"},"#"),e(" Markdown 扩展")],-1),R={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},$=s("h3",{id:"vuepress-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-扩展","aria-hidden":"true"},"#"),e(" VuePress 扩展")],-1),ss=s("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),es={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},as=s("h3",{id:"主题扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题扩展","aria-hidden":"true"},"#"),e(" 主题扩展")],-1),ls={href:"https://md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},ts=s("code",null,"vuepress-plugin-md-enhance",-1),ns=r(`<h4 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container danger"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7),rs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/container.html",target:"_blank",rel:"noopener noreferrer"},os=s("h4",{id:"代码块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码块","aria-hidden":"true"},"#"),e(" 代码块")],-1),is=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"pnpm "),s("span",{style:{color:"#98C379"}},"add"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"-D"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vuepress-theme-hope")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),cs=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"yarn "),s("span",{style:{color:"#98C379"}},"add"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"-D"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vuepress-theme-hope")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),ps=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"npm "),s("span",{style:{color:"#98C379"}},"i"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"-D"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},"vuepress-theme-hope")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),hs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},ms=s("h4",{id:"上下角标",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上下角标","aria-hidden":"true"},"#"),e(" 上下角标")],-1),ds=s("p",null,[e("19"),s("sup",null,"th"),e(" H"),s("sub",null,"2"),e("O")],-1),us={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},gs=s("h4",{id:"自定义对齐",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义对齐","aria-hidden":"true"},"#"),e(" 自定义对齐")],-1),ys=s("div",{style:{"text-align":"center"}},[s("p",null,"我是居中的")],-1),_s=s("div",{style:{"text-align":"right"}},[s("p",null,"我在右对齐")],-1),bs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},fs=s("h4",{id:"attrs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#attrs","aria-hidden":"true"},"#"),e(" Attrs")],-1),vs=s("p",null,[e("一个拥有 ID 的 "),s("strong",{id:"word"},"单词"),e("。")],-1),ks={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},Bs=r('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),As={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},ws=s("h4",{id:"标记",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#标记","aria-hidden":"true"},"#"),e(" 标记")],-1),zs=s("p",null,[e("你可以标记 "),s("mark",null,"重要的内容"),e(" 。")],-1),xs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},Es=s("h4",{id:"任务列表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#任务列表","aria-hidden":"true"},"#"),e(" 任务列表")],-1),Fs={class:"task-list-container"},Cs=r('<li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 计划 1</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划 2</label></p></li>',2),js={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},Vs=s("h3",{id:"图片增强",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图片增强","aria-hidden":"true"},"#"),e(" 图片增强")],-1),Us=s("p",null,"支持为图片设置颜色模式和大小",-1),Ds={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},Ms=s("h4",{id:"图表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图表","aria-hidden":"true"},"#"),e(" 图表")],-1),Is={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chart.html",target:"_blank",rel:"noopener noreferrer"},Js=s("h4",{id:"echarts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echarts","aria-hidden":"true"},"#"),e(" Echarts")],-1),Ps={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},Gs=s("h4",{id:"流程图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),e(" 流程图")],-1),Xs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Zs=s("h4",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid","aria-hidden":"true"},"#"),e(" Mermaid")],-1),Ys={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Ks=s("h4",{id:"tex-语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex-语法","aria-hidden":"true"},"#"),e(" Tex 语法")],-1),Ls=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("msup",null,[s("mi",null,"ω"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"⋯"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"ω"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"}," \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),Ts={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},Ss=s("h4",{id:"导入文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#导入文件","aria-hidden":"true"},"#"),e(" 导入文件")],-1),Ws={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},qs=s("h4",{id:"代码演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#"),e(" 代码演示")],-1),Hs=s("div",{class:"language-html line-numbers-mode","data-ext":"html"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"h1"),s("span",{style:{color:"#ABB2BF"}},">VuePress Theme Hope</"),s("span",{style:{color:"#E06C75"}},"h1"),s("span",{style:{color:"#ABB2BF"}},">")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"<"),s("span",{style:{color:"#E06C75"}},"p"),s("span",{style:{color:"#ABB2BF"}},"><"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"id"),s("span",{style:{color:"#ABB2BF"}},"="),s("span",{style:{color:"#98C379"}},'"very"'),s("span",{style:{color:"#ABB2BF"}},">非常</"),s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}},">强大!</"),s("span",{style:{color:"#E06C75"}},"p"),s("span",{style:{color:"#ABB2BF"}},">")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Qs=s("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E5C07B"}},"document"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"querySelector"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},'"#very"'),s("span",{style:{color:"#ABB2BF"}},")."),s("span",{style:{color:"#61AFEF"}},"addEventListener"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},'"click"'),s("span",{style:{color:"#ABB2BF"}},", () "),s("span",{style:{color:"#C678DD"}},"=>"),s("span",{style:{color:"#ABB2BF"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  "),s("span",{style:{color:"#61AFEF"}},"alert"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},'"非常强大"'),s("span",{style:{color:"#ABB2BF"}},");")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"});")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Os=s("div",{class:"language-css line-numbers-mode","data-ext":"css"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E06C75"}},"span"),s("span",{style:{color:"#ABB2BF"}}," {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"  color: "),s("span",{style:{color:"#D19A66"}},"red"),s("span",{style:{color:"#ABB2BF"}},";")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"}")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Rs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Ns=s("h4",{id:"样式化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#样式化","aria-hidden":"true"},"#"),e(" 样式化")],-1),$s={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},se=s("h4",{id:"交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#交互演示","aria-hidden":"true"},"#"),e(" 交互演示")],-1),ee={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},ae=s("h4",{id:"vue-交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-交互演示","aria-hidden":"true"},"#"),e(" Vue 交互演示")],-1),le={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},te=s("h4",{id:"幻灯片",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#幻灯片","aria-hidden":"true"},"#"),e(" 幻灯片")],-1),ne={href:"https://theme-hope.vuejs.press/zh/guide/markdown/presentation.html",target:"_blank",rel:"noopener noreferrer"},re=r('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function oe(ie,ce){const i=t("Badge"),l=t("ExternalLinkIcon"),d=t("CodeTabs"),u=t("ChartJS"),g=t("ECharts"),y=t("FlowChart"),_=t("Mermaid"),o=t("RouterLink"),b=t("CodeDemo"),f=t("Playground"),v=t("VuePlayground"),k=t("Presentation");return A(),w("div",null,[x,m(" more "),E,s("blockquote",null,[s("p",null,[e("文字结尾应该有深蓝色的 徽章文字 徽章。 "),a(i,{text:"徽章文字",color:"#242378"})])]),F,C,s("ul",null,[s("li",null,[s("a",j,[e("路径导航"),a(l)])]),s("li",null,[s("a",V,[e("标题和页面信息"),a(l)])]),s("li",null,[s("a",U,[e("TOC (文章标题列表)"),a(l)])]),s("li",null,[s("a",D,[e("贡献者、更新时间等页面元信息"),a(l)])]),s("li",null,[s("a",M,[e("评论"),a(l)])]),s("li",null,[s("a",I,[e("导航栏"),a(l)])]),s("li",null,[s("a",J,[e("侧边栏"),a(l)])]),s("li",null,[s("a",P,[e("页脚"),a(l)])]),G]),X,Z,Y,m(" more "),K,s("p",null,[e("如果你是一个新手，还不会编写 Markdown，请先阅读 "),s("a",L,[e("Markdown 介绍"),a(l)]),e(" 和 "),s("a",T,[e("Markdown 演示"),a(l)]),e("。")]),S,W,s("div",q,[H,s("p",null,[e("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),s("a",Q,[e("Frontmatter 介绍"),a(l)]),e("。")])]),O,s("p",null,[e("VuePress 会使用 "),s("a",R,[e("markdown-it"),a(l)]),e(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),s("a",N,[e("语法扩展"),a(l)]),e(" 。")]),$,ss,s("p",null,[e("关于这些扩展，请阅读 "),s("a",es,[e("VuePress 中的 Markdown 扩展"),a(l)]),e("。")]),as,s("p",null,[e("通过 "),s("a",ls,[ts,a(l)]),e("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),ns,s("ul",null,[s("li",null,[s("a",rs,[e("查看详情"),a(l)])])]),os,a(d,{id:"205",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],active:2},{tab0:n(({title:c,value:p,isActive:h})=>[is]),tab1:n(({title:c,value:p,isActive:h})=>[cs]),tab2:n(({title:c,value:p,isActive:h})=>[ps]),_:1}),s("ul",null,[s("li",null,[s("a",hs,[e("查看详情"),a(l)])])]),ms,ds,s("ul",null,[s("li",null,[s("a",us,[e("查看详情"),a(l)])])]),gs,ys,_s,s("ul",null,[s("li",null,[s("a",bs,[e("查看详情"),a(l)])])]),fs,vs,s("ul",null,[s("li",null,[s("a",ks,[e("查看详情"),a(l)])])]),Bs,s("ul",null,[s("li",null,[s("a",As,[e("查看详情"),a(l)])])]),ws,zs,s("ul",null,[s("li",null,[s("a",xs,[e("查看详情"),a(l)])])]),Es,s("ul",Fs,[Cs,s("li",null,[s("p",null,[s("a",js,[e("查看详情"),a(l)])])])]),Vs,Us,s("ul",null,[s("li",null,[s("a",Ds,[e("查看详情"),a(l)])])]),Ms,a(u,{id:"chart-331",config:"eJxtULsOgjAU3fmKppMmaETDoKufYRgKNIRYKYGaSAyLg5sjk6O7cfWHMP6F95byMGFp2vO6t+dsEUJVkXK6ITQPmFI8ozaCIVMMQBSYV85VDshOI8QwmhXM5wIT6urxubzr6lXfnt/7VScZjclr3TqB0BNAM2dhE1rAbUHK3tHxLeuM053bHXfP3Zafg6ITeIPdfBbso0wek3ArhczwJ1nkT5YuWNdrmzir5ZQaeZPgwamnUZmqWCZYjKkKWhS8fwOCawzaausWccJZ07ZhUpnHmIasL5WSh/+peJZWaf0ALadm1Q==",title:"%E4%B8%80%E4%B8%AA%E6%95%A3%E7%82%B9%E5%9B%BE%E6%A1%88%E4%BE%8B",type:"json"}),s("ul",null,[s("li",null,[s("a",Is,[e("查看详情"),a(l)])])]),Js,a(g,{id:"echarts-344",config:"eJyr5lJQUKpwrMgsVrJSAHGA3JLKglQgTyk5sSQ1Pb+oUkkHIp6SWJIIFI9W8s3PU9JRUAopTQVR4akpYF5GKYhyK8oEUcGJJWCqNE8pFqi7FmSEUiV2e8oSc4AmwVUVpxZlpoKURYOVQRQjWW9oaqCjYGQMIoxMgIShhY6CobEpkDAxB3LNDGIh7kWyISczD2wB0AogGctVywUA9j06jQ==",title:"%E4%B8%80%E4%B8%AA%E6%8A%98%E7%BA%BF%E5%9B%BE%E6%A1%88%E4%BE%8B"}),s("ul",null,[s("li",null,[s("a",Ps,[e("查看详情"),a(l)])])]),Gs,a(y,{id:"flowchart-357",code:"eJxLzs9LsbUDkZklmfl5VgrPZqx/OmHZs87lLxb2PJvc+2TvHHuugqL85NTiYlu7/ILUokSoOrAcV6qtXWpeipXC892Tn82dz8UFMkmjMrVYU9cOqkvXLhUimpcPFEzlAgD7FTFE",preset:"vue"}),s("ul",null,[s("li",null,[s("a",Xs,[e("查看详情"),a(l)])])]),Zs,a(_,{id:"mermaid-368",code:"eJzT1dXlKsksyUm1UnDLyS9PzkgsKuECCabBeAohTlwKQJBsqKtrl2gEZheXJqUXJRZkKOTnpYIFEpEkU/NSUBWVlOeDBZJAipJwKcooSoWYBbYoGVUZ0B4FoCjcKLBqVJHyfDAfqBEAuj83LQ=="}),s("ul",null,[s("li",null,[s("a",Ys,[e("查看详情"),a(l)])])]),Ks,Ls,s("ul",null,[s("li",null,[s("a",Ts,[e("查看详情"),a(l)])])]),Ss,s("ul",null,[s("li",null,[s("p",null,[a(o,{to:"/zh/page.html"},{default:n(()=>[e("页面展示")]),_:1})])]),s("li",null,[s("p",null,[a(o,{to:"/zh/slides.html"},{default:n(()=>[e("页面配置")]),_:1})])]),s("li",null,[s("p",null,[a(o,{to:"/zh/intro.html"},{default:n(()=>[e("个人信息")]),_:1})])])]),s("ul",null,[s("li",null,[s("a",Ws,[e("查看详情"),a(l)])])]),qs,a(b,{id:"code-demo-419",type:"normal",title:"%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%20Demo",code:"eJwljrGKAjEQhl9lbq5REJdrvZju4IorDhSrNEsysKvZZE2ygoiPopXgK4j4Olv4Fk7cZor5v3++OWCVGoszFNWXXHX0HyhGWFbUEPz6lkTBe+VEK0VsSwe1mSvcUdgrlM/Tub/dRJED2T/u/eX6IYqWcZzgOvJR43XXkEvTbceVBVnSyYeRws/hxHhaGvOzY+Kvjokc5UzbWm8UTmA0hrmEg3IApaWQOBuUg4vr38od82Cfjln4/vHd0N76MINAJkOMHF8ck1dC"},{default:n(()=>[Hs,Qs,Os]),_:1}),s("ul",null,[s("li",null,[s("a",Rs,[e("查看详情"),a(l)])])]),Ns,s("p",null,[e("向 Mr.Hope 捐赠一杯咖啡。 "),a(i,{type:"tip"},{default:n(()=>[e("Recommended")]),_:1})]),s("ul",null,[s("li",null,[s("a",$s,[e("查看详情"),a(l)])])]),se,a(f,{key:"2abe0a46",title:"TS%20%E6%A1%88%E4%BE%8B",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FMYewdgzgLgBAthA5jAvDARACwKYBtcgwDuIATrgCboDcAULaJLBAA7YCGA1qjABQKIAXDGikAlmEQBKVAD4YjCCFzYAdAUT8kUurVYdOW6XSA"}),s("ul",null,[s("li",null,[s("a",ee,[e("查看详情"),a(l)])])]),ae,a(v,{title:"Vue%20%E4%BA%A4%E4%BA%92%E6%BC%94%E7%A4%BA",key:"0e386008",settings:"%7B%7D",files:"eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcblxuY29uc3QgbXNnID0gcmVmKFwiSGVsbG8gV29ybGQhXCIpO1xuPC9zY3JpcHQ%2BXG5cbjx0ZW1wbGF0ZT5cbiAgPGgxPnt7IG1zZyB9fTwvaDE%2BXG4gIDxpbnB1dCB2LW1vZGVsPVwibXNnXCIgLz5cbjwvdGVtcGxhdGU%2BXG4ifQ%3D%3D"}),s("ul",null,[s("li",null,[s("a",le,[e("查看详情"),a(l)])])]),te,a(k,{id:"presentation-477",code:"eJzjUlZWeLpz9/PG9c872xUMubie7Gh4smPVszmdz6a1P107/emkHoXol5P3PetbGquRUVJSUGylr59blJFfkKpXnFmSqqnwfFbLs3VbX0zYy8Wlq6vLhWqgEVBQ4eXCnc9nrwMaDmeChDHUGusBrU9ISMgq5krOzysuUUhUsFUwtAYJgZRjqAYaoqLC5aURU5KRWpIYb6ADZRhqAvXFFJfmxldn2hrUghQBAI9BXC0=",theme:"auto"}),s("ul",null,[s("li",null,[s("a",ne,[e("查看详情"),a(l)])])]),re])}const he=B(z,[["render",oe],["__file","page.html.vue"]]);export{he as default};