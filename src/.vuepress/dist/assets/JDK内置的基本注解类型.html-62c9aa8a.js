import{_ as n,X as t,Y as a,$ as r}from"./framework-2185e866.js";const e={},o=r('<h1 id="jdk内置的基本注解类型" tabindex="-1"><a class="header-anchor" href="#jdk内置的基本注解类型" aria-hidden="true">#</a> JDK内置的基本注解类型</h1><h2 id="注解的理解" tabindex="-1"><a class="header-anchor" href="#注解的理解" aria-hidden="true">#</a> 注解的理解</h2><ol><li>注解(Annotation)也被称为元数据(Metadata)，用于修饰解释 包、类、方法、属性、构造器、局部变量等数据信息</li><li>和注释一样，注解不影响程序逻辑，但注解可以被编译或运行，相当于嵌入在代码中的补充信息。</li><li>在 <strong>JavaSE</strong> 中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在 <strong>JavaEE</strong> 中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替 <strong>javaEE</strong> 旧版中所遗留的繁元代码和 <strong>XML</strong> 配置等</li></ol><h2 id="基本的-annotation-介绍" tabindex="-1"><a class="header-anchor" href="#基本的-annotation-介绍" aria-hidden="true">#</a> 基本的 Annotation 介绍</h2><blockquote><p>使用 <strong>Annotation</strong> 时要在其前面增加 @ 符号,并把该 <strong>Annotation</strong> 当成一个修饰符使用。用于修饰它支持的程序元素</p></blockquote><h3 id="三个基本的-annotation" tabindex="-1"><a class="header-anchor" href="#三个基本的-annotation" aria-hidden="true">#</a> 三个基本的 Annotation</h3><ol><li><p><strong>@Override：</strong> 限定某个方法，是重写父类方法，只能修饰方法，不能修饰其它类，包，属性等等</p><p>这里如果没有写 <strong>@override</strong> 还是重写了父类</p><p>如果你写了 <strong>@Override</strong> 注解，编译器就会去检查该方法是否真的重写了父类的方法，如果的确重写了，则编译通过，如果没有构成重写，则编译错误</p></li><li><p><strong>@Deprecated：</strong> 用于表示某个程序元素(类,方法等)已过时</p></li><li><p><strong>@SuppressWarning：</strong> 抑制编译器警告</p></li><li><p><strong>@interface</strong> 不是 <strong>interface</strong> 是注解类 JDK5.0之后加入的</p></li><li><p><strong>@Target</strong> 是修饰注解的注解，称为元注解</p></li></ol><h3 id="deprecated-的说明" tabindex="-1"><a class="header-anchor" href="#deprecated-的说明" aria-hidden="true">#</a> @Deprecated 的说明</h3><ol><li>用于表示某个程序元素(类,方法等)已过时</li><li>可以修饰方法，类，字段，包，参数 等等</li><li><strong>@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD PACKAGE, PARAMETER,TYPE})</strong></li><li><strong>@Deprecated</strong> 的作用可以做到新旧版本的兼容和过渡</li></ol><h3 id="基本的-annotation-应用案例" tabindex="-1"><a class="header-anchor" href="#基本的-annotation-应用案例" aria-hidden="true">#</a> 基本的 Annotation 应用案例</h3><p><strong>@SuppressWarnings：</strong> 注解的案例</p><p>**@SuppressWarnings：**抑制编译器警告</p>',12),i=[o];function s(d,l){return t(),a("div",null,i)}const g=n(e,[["render",s],["__file","JDK内置的基本注解类型.html.vue"]]);export{g as default};
