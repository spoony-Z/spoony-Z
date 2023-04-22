---
order: 4
---
# TypeScript高级类型

## class 类

### 介绍
**Typescript** 全面支持 ES2015 中引入的 **class** 关键字，并为其添加了类型注解和其他语法(比如，可见性修饰符等)
```typescript
/** 
 * 基本使用 
 * 声明成员age，类型为number (没有初始值)
 * 声明成员 gender，并设置初始值，此时，可省略类型注解 (TS类型推论为 string 类型)
 **/

class Person {
    age: number
    gender = "男"
}

/** 此时 p 的类型为 Person */
const p = new Person();
```

### 构造函数

```typescript
class Person {
    age: number
    gender: string
    /** 不能指定构造器的返回值类型 */
    // constructor(age: number, gender: string): number{}
    constructor(age: number, gender: string){
        this.age = age;
        this.gender = gender;
    }
}
const p = new Person(18， "男");
console.log(p.age, p.gender);
```
:::tip 解释
1. 根据 TS 中的类型推断，可知道Person类的实例对象 p 的类型是Person 
2. TS 中的 **class** 不仅提供了class 的语法功能，也作为一种类型存在。
3. 需要为构造函数指定类型注解，否则会被隐式推断为any；构造函数不需要返回值类型
:::

### 实例方法
```typescript
class Point{
    x = 1;
    y = 2;
    scale(n: number){
        this.x *= n;
        this.y *= n;
    }
}
const P = new Ponit();
p.scale(10);
console.log(p.x, p.y);
```
:::tip 解释
方法的类型注解(参数和返回值)与函数用法相同。
:::

### class 的继承
**两种方式：** 
- **extends** （继承父类）
- **implements**（实现接口）
> **说明：** JS 中只有 **extends**，而 **implements** 是TS 提供的

#### **使用 extends 继承**
```typescript
class Animal {
    move(){
        console.log("我是Animal类");
    }
}
class Dog extends Animal {
    bark(){
        console.log("我是Dog类，继承Animal类")
    }
}
const d = new Dog();
d.move();
d.bark();
```

:::tip 解释
- 通过 **extends** 关键字实现继承。
- 子类 Dog 继承父类 Animal，则 Dog 的实例对象dog 就同时具有了父类 Animal 和子类 Dog 的所有属性和方法
:::

#### **使用 implements 继承**
```typescript
interface Singable {
    sing(): void
}
class Person implements Singabl {
    sing(){
        console.log("实现接口implements")
    }
}
```

:::tip 解释
- 通过 **implements** 关键字让 **class** 实现接口
- **Person** 类实现接口 **Singable** 意味着，**Person** 类中必须提供 **Singable** 接口中指定的所有方法和属性
:::

### class 的修饰符

#### **public(公有的)**

> 表示公有的、公开的，公有成员可以被任何地方访问，默认可见性

```typescript
class Animal {
    public move(){
        console.log("我是Animal类");
    }
}
class Dog extends Animal {
    bark(){
        console.log("我是Dog类，继承Animal类")
    }
}
const d = new Dog();
d.move();
d.bark();
```

:::tip 解释
- 在类属性或方法前面添加 **public** 关键字，来修饰该属性或方法是共有的。
- 因为 **public** 是默认可见性，所以，可以直接省略。
:::

#### **protected**
> 表示受保护的，仅对其声明所在类和子类中(非实例对象)可见
```typescript
class Animal {
    protected move(){
        console.log("我是Animal类");
    }
    son(){
        /** 可以访问 */
        this.move();
    }
}
class Dog extends Animal {
    bark(){
        console.log("我是Dog类，继承Animal类")
    }
    /** 可以访问 */
    this.move() 
}
const d = new Dog();
/** 不能访问 报错 */
d.move();
d.bark();
```

:::tip 解释
- 在类属性或方法前面添加 **protected** 关键字，来修饰该属性或方法是受保护的
- 在子类的方法内部可以通过 **this** 来访问父类中受保护的成员，但是，**对实例不可见**!
:::

#### **private**

> 表示私有的，只在当前类中可见，对实例对象以及子类也是不可见的

```typescript
class Animal {
    private move(){
        console.log("我是Animal类");
    }
    protected son(){
        /** 可以访问 */
        this.move();
    }
}
class Dog extends Animal {
    bark(){
        console.log("我是Dog类，继承Animal类")
    }
    /** 不能访问 报错 */
    this.move() 
}
const d = new Dog();
/** 不能访问 报错 */
d.move();
d.bark();
```

:::tip 解释
- 在类属性或方法前面添加 **private** 关键字，来修饰该属性或方法是私有的。
- 私有的属性或方法只在当前类中可见，对子类和实例对象也都是不可见的!
:::

#### **readonly(只读)**

> 表示只读，用来防止在构造函数之外对属性进行赋值

```typescript
class Person {
    readonly age: number = 18;
    constructor(age: number){
        this.age = age;
    }
}

/** 注：只要是 readonly 来修饰的属性，必须手动提供明确的类型 */
class Person2 {
    readonly age = 18;
    constructor(age: number){
        /** eadonly age = 18; 没有明确的类型，所以报错 */
        this.age = age;
    }
}
```

:::tip 解释
- 使用 **readonly** 关键字修饰该属性是只读的，
- 接口或者价表示的对象类型，也可以使用 **readonly**
:::

:::warning 注意
- **注意！** **只能修饰属性不能修饰方法**
- 属性 **age** 后面的类型注解(比如，此处的 **number** ) 如果不加，则 **age** 的类型为 18 (字面量类型)。
:::