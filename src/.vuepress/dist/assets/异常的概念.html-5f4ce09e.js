import{_ as r,X as t,Y as o,$ as e}from"./framework-2185e866.js";const n={},a=e('<h1 id="异常的概念" tabindex="-1"><a class="header-anchor" href="#异常的概念" aria-hidden="true">#</a> 异常的概念</h1><blockquote><p>对异常进行捕获，保证程序可以继续运行 try catch</p></blockquote><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><p>Java语言中，将程序执行中发生的不正常情况称为 “异常” （开发过程中的语法错误和逻辑错误不是异常）</p><h3 id="执行过程中所发生的异常事件可分为两类" tabindex="-1"><a class="header-anchor" href="#执行过程中所发生的异常事件可分为两类" aria-hidden="true">#</a> 执行过程中所发生的异常事件可分为两类</h3><ol><li><strong>Error</strong>（错误）： <strong>Java</strong> 虚拟机无法解决的严重问题。如: <strong>JVM</strong> 系统内部错误、资源耗尽等严重情况。比如：<strong>StackOverflowError</strong>[栈溢出] 和 <strong>OOM(out ofmemory)，</strong> <strong>Error</strong> 是严重错误，程序会崩溃。</li><li><strong>Exception</strong>： 其它因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码进行处理。例如空指针访问，试图读取不存在的文件，网络连接中断等等，<strong>Exception</strong> 分为两大类：<strong>运行时异常</strong>和<strong>编译时异常</strong></li></ol>',6),s=[a];function c(i,h){return t(),o("div",null,s)}const l=r(n,[["render",c],["__file","异常的概念.html.vue"]]);export{l as default};
