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

```typescript
```

:::tip 解释

:::