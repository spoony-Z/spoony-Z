export const data = JSON.parse("{\"key\":\"v-1bda4865\",\"path\":\"/learning-notes/TypeScript/TypeScript%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B.html\",\"title\":\"TypeScript 常用类型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"description\":\"TypeScript 常用类型 概述 提示 TypeScript 是JS的超集，TS提供了JS的所有功能，并且额外的增加了：类型系统 所有的JS代码都是TS代码。 JS有类型(比如，number/string等)，但是JS 不会检查变量的类型是否发生变化。而TS 会检查 TypeScript 类型系统的主要优势: 可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/spoony-z/learning-notes/TypeScript/TypeScript%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"SOBER\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"TypeScript 常用类型\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"TypeScript 常用类型 概述 提示 TypeScript 是JS的超集，TS提供了JS的所有功能，并且额外的增加了：类型系统 所有的JS代码都是TS代码。 JS有类型(比如，number/string等)，但是JS 不会检查变量的类型是否发生变化。而TS 会检查 TypeScript 类型系统的主要优势: 可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-04-19T01:50:50.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"SOBER\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-04-19T01:50:50.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"TypeScript 常用类型\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-04-19T01:50:50.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"SOBER\\\",\\\"url\\\":\\\"https://github.com/spoony-Z\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[]},{\"level\":2,\"title\":\"类型注解\",\"slug\":\"类型注解\",\"link\":\"#类型注解\",\"children\":[]},{\"level\":2,\"title\":\"常用基础类型概述\",\"slug\":\"常用基础类型概述\",\"link\":\"#常用基础类型概述\",\"children\":[]},{\"level\":2,\"title\":\"原始类型\",\"slug\":\"原始类型\",\"link\":\"#原始类型\",\"children\":[]},{\"level\":2,\"title\":\"数组类型\",\"slug\":\"数组类型\",\"link\":\"#数组类型\",\"children\":[]},{\"level\":2,\"title\":\"类型别名（type）\",\"slug\":\"类型别名-type\",\"link\":\"#类型别名-type\",\"children\":[]},{\"level\":2,\"title\":\"函数类型\",\"slug\":\"函数类型\",\"link\":\"#函数类型\",\"children\":[{\"level\":3,\"title\":\"函数的类型实际上指的是：函数参数和返回值的类型\",\"slug\":\"函数的类型实际上指的是-函数参数和返回值的类型\",\"link\":\"#函数的类型实际上指的是-函数参数和返回值的类型\",\"children\":[]},{\"level\":3,\"title\":\"如果函数没有返回值，那么，函数返回值类型为: void\",\"slug\":\"如果函数没有返回值-那么-函数返回值类型为-void\",\"link\":\"#如果函数没有返回值-那么-函数返回值类型为-void\",\"children\":[]},{\"level\":3,\"title\":\"函数类型的可选参数\",\"slug\":\"函数类型的可选参数\",\"link\":\"#函数类型的可选参数\",\"children\":[]}]},{\"level\":2,\"title\":\"对象类型\",\"slug\":\"对象类型\",\"link\":\"#对象类型\",\"children\":[]},{\"level\":2,\"title\":\"接口（interface）\",\"slug\":\"接口-interface\",\"link\":\"#接口-interface\",\"children\":[{\"level\":3,\"title\":\"接口介绍\",\"slug\":\"接口介绍\",\"link\":\"#接口介绍\",\"children\":[]},{\"level\":3,\"title\":\"interface(接口) 和 type 的对比\",\"slug\":\"interface-接口-和-type-的对比\",\"link\":\"#interface-接口-和-type-的对比\",\"children\":[]},{\"level\":3,\"title\":\"接口继承\",\"slug\":\"接口继承\",\"link\":\"#接口继承\",\"children\":[]}]},{\"level\":2,\"title\":\"元组（Tuple）\",\"slug\":\"元组-tuple\",\"link\":\"#元组-tuple\",\"children\":[]},{\"level\":2,\"title\":\"类型推论\",\"slug\":\"类型推论\",\"link\":\"#类型推论\",\"children\":[]},{\"level\":2,\"title\":\"类型断言（as）\",\"slug\":\"类型断言-as\",\"link\":\"#类型断言-as\",\"children\":[]},{\"level\":2,\"title\":\"字面量类型\",\"slug\":\"字面量类型\",\"link\":\"#字面量类型\",\"children\":[]},{\"level\":2,\"title\":\"枚举（enum）\",\"slug\":\"枚举-enum\",\"link\":\"#枚举-enum\",\"children\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":3,\"title\":\"数字枚举\",\"slug\":\"数字枚举\",\"link\":\"#数字枚举\",\"children\":[]},{\"level\":3,\"title\":\"字符串枚举\",\"slug\":\"字符串枚举\",\"link\":\"#字符串枚举\",\"children\":[]}]},{\"level\":2,\"title\":\"any 类型\",\"slug\":\"any-类型\",\"link\":\"#any-类型\",\"children\":[]},{\"level\":2,\"title\":\"typeof操作符\",\"slug\":\"typeof操作符\",\"link\":\"#typeof操作符\",\"children\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍-1\",\"link\":\"#介绍-1\",\"children\":[]},{\"level\":3,\"title\":\"使用场景\",\"slug\":\"使用场景\",\"link\":\"#使用场景\",\"children\":[]}]}],\"git\":{\"createdTime\":1681751533000,\"updatedTime\":1681869050000,\"contributors\":[{\"name\":\"杨胜军\",\"email\":\"shenjun_y@yeah.net\",\"commits\":2}]},\"readingTime\":{\"minutes\":12.04,\"words\":3613},\"filePathRelative\":\"learning-notes/TypeScript/TypeScript常用类型.md\",\"localizedDate\":\"2023年4月18日\",\"excerpt\":\"<h1> <strong>TypeScript</strong> 常用类型</h1>\\n<h2> 概述</h2>\\n<div class=\\\"hint-container tip\\\">\\n<p class=\\\"hint-container-title\\\">提示</p>\\n<p><strong>TypeScript</strong> 是JS的超集，TS提供了JS的所有功能，并且额外的增加了：类型系统</p>\\n<ul>\\n<li>所有的JS代码都是TS代码。</li>\\n<li>JS有类型(比如，number/string等)，但是JS 不会检查变量的类型是否发生变化。而TS 会检查</li>\\n<li>TypeScript 类型系统的主要优势: 可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。</li>\\n</ul>\\n</div>\",\"autoDesc\":true}")
