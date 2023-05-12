---
order: 6
---
# super 关键字
<!-- more -->

## 介绍
> **super** 代表父类的引用，用于访问父类的属性、方法、构造器

## 基本语法
```java
/** 
 * 访问父类的属性，但不能访问父类的private属性 super.属性名; 
 * 访问父类的方法，不能访问父类的 private方法 super.方法名(参数列表);
 * 访问父类的构造器: super(参数列表); 只能放在构造器的第一句，与 this() 只能出现一个!
 */
 public class B extends A {
    public void hi(){
        /** 访问父类中的 n1 与 n2 */
        System.out.println(super.n1 + super.n2)
    }
    public void ok(){
        /** 访问父类中的方法 */
        super.test1();
        super.test2();
    }
 }
```

## super 带来的便利
1. 调用父类的构造器的好处 (分工明确,父类属性由父类初始化，子类的属性由子类初始化)
2. 当子类中有和父类中的成员(属性和方法)重名时，为了访问父类的成员，必须通过 **super**。如果没有重名，使用 **super**、**this**、直接访问是一样的效果!
```java
/**
 * 调用 父类A 中的 cal 方法时 顺序如下：
 * 1.先找本类，如果有，则调用
 * 2.如果没有，则找父类(如果有，并可以调用，则调用)
 * 3.如果父类没有，则继续找父类的父类，整个规则，就是一样的 直到 0bject类
 * 提示: 如果找到，但不能访问， 则报错
 *       如果没有找到，则提示方法不存在
 */
 public class B extends A {
    public void hi(){
        /**
         * cal(); 等价于 this.cal();
         * super.cal(); 直接查找父类
         */
        cal(); 
    }
 }
```

3. super 的访问不限于直接父类，如果爷爷类和本类中有同名的成员，也可以使用super去访问爷爷类的成员;如果多个基类(上级类)中都有同名的成员，使用super。访问遵循就近原则。A->B->C

## super 与 this 的比较
![](./images/4.png)