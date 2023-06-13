---
order: 3
---

# JDK内置的基本注解类型

## 注解的理解

1. 注解(Annotation)也被称为元数据(Metadata)，用于修饰解释 包、类、方法、属性、构造器、局部变量等数据信息
2. 和注释一样，注解不影响程序逻辑，但注解可以被编译或运行，相当于嵌入在代码中的补充信息。
3. 在 **JavaSE** 中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在 **JavaEE** 中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替 **javaEE** 旧版中所遗留的繁元代码和 **XML** 配置等

## 基本的 Annotation 介绍
> 使用 **Annotation** 时要在其前面增加 @ 符号,并把该 **Annotation** 当成一个修饰符使用。用于修饰它支持的程序元素

### 三个基本的 Annotation
1. **@Override：** 限定某个方法，是重写父类方法，只能修饰方法，不能修饰其它类，包，属性等等

    这里如果没有写 **@override** 还是重写了父类

    如果你写了 **@Override** 注解，编译器就会去检查该方法是否真的重写了父类的方法，如果的确重写了，则编译通过，如果没有构成重写，则编译错误
2. **@Deprecated：** 用于表示某个程序元素(类,方法等)已过时
3. **@SuppressWarning：** 抑制编译器警告
4. **@interface** 不是 **interface** 是注解类 JDK5.0之后加入的
5. **@Target** 是修饰注解的注解，称为元注解

### @Deprecated 的说明
1. 用于表示某个程序元素(类,方法等)已过时
2. 可以修饰方法，类，字段，包，参数 等等
3. **@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD PACKAGE, PARAMETER,TYPE})**
4. **@Deprecated** 的作用可以做到新旧版本的兼容和过渡

### 基本的 Annotation 应用案例
**@SuppressWarnings：** 注解的案例

**@SuppressWarnings：**抑制编译器警告