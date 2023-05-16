---
order: 8
---

# Object类详解

## equals方法
> **==** 和 **equals** 的对比

### == 是一个比较运算符
- 既可以判断基本类型，又可以判断引用类型
- 如果判断基本类型，判断的是值是否相等。
::: tip 示例
```java
int i = 10; 
double d=10.0;
``` 
:::
- 如果判断引用类型，判断的是地址是否相等，即判定是不是同一个对象
::: tip 案例说明
```java
public static void main(String[] args) {
    A a = new A();
    A b = a;
    A c = b;
    System.out.println(a == c); // true
    System.out.println(b == c); //true
    B bobj = a;
    System.out.printIn(bobj == c); // true
}
class B {}
class A extends B {}
```
:::

### equals方法
> 是Object类中的方法，只能判断引用类型，如何看Jdk源码
> 默认判断的是地址是否相等，子类中往往重写该方法，用于判断内容是否相等。比如 Integer, String [看看String 和Integer的 equals 源代码]