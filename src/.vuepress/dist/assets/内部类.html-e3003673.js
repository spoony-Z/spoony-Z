const e=JSON.parse('{"key":"v-4019cbe5","path":"/learning-notes/java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1(%E9%AB%98%E7%BA%A7)/%E5%86%85%E9%83%A8%E7%B1%BB.html","title":"内部类","lang":"zh-CN","frontmatter":{"order":8,"description":"内部类 基本介绍 一个类的内部又完整的嵌套了另一个类结构。被嵌套的类称为**内部类(inner class)**嵌套其他类的类称为外部类 (outer class) 。是我们类的第五大成员，内部类最大的特点就是可以直接访问私有属性，并且可以体现类与类之间的包含关系 思考: 类的五大成员是哪些? 属性、方法、构造器、代码块、内部类， 基本语法 /** 外部类 */ class Outer{ /** 内部类 */ class Inner{} } class Other {} /** 外部其他类 */","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/spoony-z/learning-notes/java/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1(%E9%AB%98%E7%BA%A7)/%E5%86%85%E9%83%A8%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"SOBER"}],["meta",{"property":"og:title","content":"内部类"}],["meta",{"property":"og:description","content":"内部类 基本介绍 一个类的内部又完整的嵌套了另一个类结构。被嵌套的类称为**内部类(inner class)**嵌套其他类的类称为外部类 (outer class) 。是我们类的第五大成员，内部类最大的特点就是可以直接访问私有属性，并且可以体现类与类之间的包含关系 思考: 类的五大成员是哪些? 属性、方法、构造器、代码块、内部类， 基本语法 /** 外部类 */ class Outer{ /** 内部类 */ class Inner{} } class Other {} /** 外部其他类 */"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-11T17:30:18.000Z"}],["meta",{"property":"article:author","content":"SOBER"}],["meta",{"property":"article:modified_time","content":"2023-06-11T17:30:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内部类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-11T17:30:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SOBER\\",\\"url\\":\\"https://github.com/spoony-Z\\"}]}"]]},"headers":[{"level":2,"title":"基本介绍","slug":"基本介绍","link":"#基本介绍","children":[]},{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[]},{"level":2,"title":"内部类的分类","slug":"内部类的分类","link":"#内部类的分类","children":[{"level":3,"title":"定义在外部类局部位置上 (比如方法内)","slug":"定义在外部类局部位置上-比如方法内","link":"#定义在外部类局部位置上-比如方法内","children":[]},{"level":3,"title":"定义在外部类的成员位置上","slug":"定义在外部类的成员位置上","link":"#定义在外部类的成员位置上","children":[]},{"level":3,"title":"局部内部类的使用","slug":"局部内部类的使用","link":"#局部内部类的使用","children":[]}]},{"level":2,"title":"匿名内部类的使用(重要!!!!!!!)","slug":"匿名内部类的使用-重要","link":"#匿名内部类的使用-重要","children":[{"level":3,"title":"基本语法","slug":"基本语法-1","link":"#基本语法-1","children":[]},{"level":3,"title":"演示（基于接口）","slug":"演示-基于接口","link":"#演示-基于接口","children":[]},{"level":3,"title":"演示（基于类）","slug":"演示-基于类","link":"#演示-基于类","children":[]},{"level":3,"title":"实践简化","slug":"实践简化","link":"#实践简化","children":[]}]},{"level":2,"title":"成员内部类","slug":"成员内部类","link":"#成员内部类","children":[]}],"git":{"createdTime":1684429757000,"updatedTime":1686504618000,"contributors":[{"name":"杨胜军","email":"shenjun_y@yeah.net","commits":3}]},"readingTime":{"minutes":4.4,"words":1321},"filePathRelative":"learning-notes/java/面向对象(高级)/内部类.md","localizedDate":"2023年5月19日","excerpt":"<h1> 内部类</h1>\\n<h2> 基本介绍</h2>\\n<p>一个类的内部又完整的嵌套了另一个类结构。被嵌套的类称为**内部类(inner class)**嵌套其他类的类称为外部类 <strong>(outer class)</strong> 。是我们类的第五大成员，内部类最大的特点就是可以直接访问私有属性，并且可以体现类与类之间的包含关系</p>\\n<blockquote>\\n<p>思考: 类的五大成员是哪些?</p>\\n<p>属性、方法、构造器、代码块、内部类，</p>\\n</blockquote>\\n<h2> 基本语法</h2>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">/** 外部类 */</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #E5C07B\\">Outer</span><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">    /** 内部类 */</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">    </span><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #E5C07B\\">Inner</span><span style=\\"color: #ABB2BF\\">{}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">class</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #E5C07B\\">Other</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #ABB2BF\\">{}</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #7F848E; font-style: italic\\">/** 外部其他类 */</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
