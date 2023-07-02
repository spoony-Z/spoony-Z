const t=JSON.parse('{"key":"v-55321e75","path":"/learning-notes/java/Exception/%E5%BC%82%E5%B8%B8%E7%9A%84%E6%A6%82%E5%BF%B5.html","title":"异常的概念","lang":"zh-CN","frontmatter":{"order":1,"description":"异常的概念 对异常进行捕获，保证程序可以继续运行 try catch 基本概念 Java语言中，将程序执行中发生的不正常情况称为 “异常” （开发过程中的语法错误和逻辑错误不是异常） 执行过程中所发生的异常事件可分为两类 Error（错误）： Java 虚拟机无法解决的严重问题。如: JVM 系统内部错误、资源耗尽等严重情况。比如：StackOverflowError[栈溢出] 和 OOM(out ofmemory)， Error 是严重错误，程序会崩溃。 Exception： 其它因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码进行处理。例如空指针访问，试图读取不存在的文件，网络连接中断等等，Exception 分为两大类：运行时异常和编译时异常","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/spoony-z/learning-notes/java/Exception/%E5%BC%82%E5%B8%B8%E7%9A%84%E6%A6%82%E5%BF%B5.html"}],["meta",{"property":"og:site_name","content":"SOBER"}],["meta",{"property":"og:title","content":"异常的概念"}],["meta",{"property":"og:description","content":"异常的概念 对异常进行捕获，保证程序可以继续运行 try catch 基本概念 Java语言中，将程序执行中发生的不正常情况称为 “异常” （开发过程中的语法错误和逻辑错误不是异常） 执行过程中所发生的异常事件可分为两类 Error（错误）： Java 虚拟机无法解决的严重问题。如: JVM 系统内部错误、资源耗尽等严重情况。比如：StackOverflowError[栈溢出] 和 OOM(out ofmemory)， Error 是严重错误，程序会崩溃。 Exception： 其它因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码进行处理。例如空指针访问，试图读取不存在的文件，网络连接中断等等，Exception 分为两大类：运行时异常和编译时异常"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-11T17:30:18.000Z"}],["meta",{"property":"article:author","content":"SOBER"}],["meta",{"property":"article:modified_time","content":"2023-06-11T17:30:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"异常的概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-11T17:30:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SOBER\\",\\"url\\":\\"https://github.com/spoony-Z\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"执行过程中所发生的异常事件可分为两类","slug":"执行过程中所发生的异常事件可分为两类","link":"#执行过程中所发生的异常事件可分为两类","children":[]}]}],"git":{"createdTime":1686418292000,"updatedTime":1686504618000,"contributors":[{"name":"杨胜军","email":"shenjun_y@yeah.net","commits":2}]},"readingTime":{"minutes":0.75,"words":225},"filePathRelative":"learning-notes/java/Exception/异常的概念.md","localizedDate":"2023年6月11日","excerpt":"<h1> 异常的概念</h1>\\n<blockquote>\\n<p>对异常进行捕获，保证程序可以继续运行 try catch</p>\\n</blockquote>\\n<h2> 基本概念</h2>\\n<p>Java语言中，将程序执行中发生的不正常情况称为 “异常” （开发过程中的语法错误和逻辑错误不是异常）</p>\\n<h3> 执行过程中所发生的异常事件可分为两类</h3>\\n<ol>\\n<li><strong>Error</strong>（错误）： <strong>Java</strong> 虚拟机无法解决的严重问题。如: <strong>JVM</strong> 系统内部错误、资源耗尽等严重情况。比如：<strong>StackOverflowError</strong>[栈溢出] 和 <strong>OOM(out ofmemory)，</strong> <strong>Error</strong> 是严重错误，程序会崩溃。</li>\\n<li><strong>Exception</strong>： 其它因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码进行处理。例如空指针访问，试图读取不存在的文件，网络连接中断等等，<strong>Exception</strong> 分为两大类：<strong>运行时异常</strong>和<strong>编译时异常</strong></li>\\n</ol>","autoDesc":true}');export{t as data};
