---
order: 2
---
# 基础
<!-- more -->
## java 转义符

​	1. <Badge type="tip" text="\t " vertical="middle" />：一个制表位，实现对其的功能

​	2. <Badge type="tip" text="\n" vertical="middle" />：换行符

​	3. <Badge type="tip" text="\\" vertical="middle" />：一个\

​	4. <Badge type="tip" text="\“" vertical="middle" />：一个"

​	5. <Badge type="tip" text="\'" vertical="middle" />：一个'

​	6. <Badge type="tip" text="\r" vertical="middle" />：一个回车

## java 注释

### 单行注释  //
 ```java
 // 单行注释
 ```
### 多行注释  /*   */
 ```java
 /*
  * 多行注释
  */
 ```
### 文档注释
  注释内容可以被 JDK 提供的工具 javadoc所解析，生成一套以网页文件形式的该程序的说明文档，一般写在类

 **基本格式**

```java
/**
 * @author SOBER
 * @version 1.0.0
 */
public class Hello {
    public static void main(String[] args)  {
        System.out.println("hello,word");
    }
}
```
**使用命令运行该 java 文件**
```sh
# javadoc -d 存放网页的文件夹路径 -yyy -xxx java文件.java
# 例 
javadoc -d D:\\temp -author -version Hello.java
```

**常用 javadoc 标签**

| 标签          | 描述                                                   | 实例                                                         |
| ------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| @author       | 标识一个类的作者                                       | @author description                                          |
| @deprecated   | 指名一个过期的类或成员                                 | @deprecated description                                      |
| {@docRoot}    | 指明当前文档根目录的路径                               | Directory Path                                               |
| @exception    | 标志一个类抛出的异常                                   | @exception exception-name explanation                        |
| {@inheritDoc} | 从直接父类继承的注释                                   | Inherits a comment from the immediate surperclass.           |
| {@link}       | 插入一个到另一个主题的链接                             | {@link name text}                                            |
| {@linkplain}  | 插入一个到另一个主题的链接，但是该链接显示纯文本字体   | Inserts an in-line link to another topic.                    |
| @param        | 说明一个方法的参数                                     | @param parameter-name explanation                            |
| @return       | 说明返回值类型                                         | @return explanation                                          |
| @see          | 指定一个到另一个主题的链接                             | @see anchor                                                  |
| @serial       | 说明一个序列化属性                                     | @serial description                                          |
| @serialData   | 说明通过writeObject( ) 和 writeExternal( )方法写的数据 | @serialData description                                      |
| @serialField  | 说明一个ObjectStreamField组件                          | @serialField name type description                           |
| @since        | 标记当引入一个特定的变化时                             | @since release                                               |
| @throws       | 和 @exception标签一样.                                 | The @throws tag has the same meaning as the @exception tag.  |
| {@value}      | 显示常量的值，该常量必须是static属性。                 | Displays the value of a constant, which must be a static field. |
| @version      | 指定类的版本                                           | @version info                                                |

## java代码规范

​	1.类、方法的注释，要以javadoc的方式来写。

​	2.非Java Doc的注释，往往是给代码的维护者看的，着重告述读者为什么这样写如何修改，注意什么问题等

​	3.使用tab操作，实现缩进,默认整体向右边移动，时候用shift+tab整体向左移	4.运算符和 = 两边习惯性各加一个空格。比如: 2 + 4 * 5 + 345 

​	5.源文件使用utf-8编码

​	6.行宽度不要超过80字符

​	7.代码编写次行风格和行尾风格

## 