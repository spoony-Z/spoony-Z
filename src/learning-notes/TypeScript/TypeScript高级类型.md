---
order: 4
---
# TypeScript高级类型
<!-- more -->

## 一、class 类

### 1. 介绍
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

## 二、构造函数

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

## 三、实例方法
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

## 四、class 的继承
> **说明：** JS 中只有 **extends**，而 **implements** 是TS 提供的
### **1. 使用 extends 继承**
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

### **2. 使用 implements 继承**
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

## 五、class 的修饰符

### **1. public(公有的)**

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

### **2. protected**
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

### **3. private**

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

### **4. readonly(只读)**

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

## 六、类型兼容性
> **两种类型系统：**
> - 结构化类型系统：StructuralType System 
> - 标明类型系统：Nominal Type System
> - TS 采用的是结构化类型系统，也叫做ducktyping（鸭子类型），类型检查关注的是值所具有的形

**类型的兼容性演示**
```typescript
let arr = ['a', 'b', 'c'];
arr.forEach(item => {});
arr.forEach((item, index) => {});
arr.forEach((item, index, array) => {});
```

**两个类的兼容性演示**
```typescript
class Point {
    x: number
    y: number
}
class Point2D {
    x: number
    y: number
}
class Point3D {
    x: number
    y: number
    z: number
}
let b:Point = new Point2D;
let c:Point = new Point3D;
```

:::tip 解释
- Point和 Point2D 是两个名称不同的类。
- 变量 p 的类型被显示标注为 **Point** 类型，但是，它的值却是 **Point2D** 的实例，并且没有类型错误
- 对于对象类型来说，**y** 的成员至少与 **X** 相同，则 **x** 兼容 **y** (成员多的可以赋值给少的)
- 如果在 **NominalType System** 中(比如，C#、Java等)，它们是不同的类，类型无法兼容。
:::

## 七、接口之间的兼容性
```typescript
interface Point {
    x: number
    y: number
}
interface Point2D {
    x: number
    y: number
}
interface Point3D {
    x: number
    y: number
    z: number
}
let p1: Point;
let p2: Point2D;
let p3: Point3D;

p1 = p2;
p2 = p1;
p1 = p3;
p3 = p1; // 报错

/** 类和接口之间也是兼容的 */
class Point4D {
    x: number
    y: number
    z: number
}
p2 = new Point4D()
```

## 八、函数之间的兼容性

> 比较复杂，需要考虑：
> - 参数个数：参数多的兼容参数少的(或者说，参数少的可以赋值给多的，类型兼容正好相反)
> - 参数类型：相同位置的参数类型要相同(原始类型)或兼容(对象类型)
> - 返回值类型：只关注返回值类型本身即可

### **1. 参数的个数兼容**
```typescript
 type F1 = (a: number) => void
 type F2 = (a: number, b: number) => void

 let f1: F1
 let f2: F2
 f2 = f1;
 f1 = f2 // 错误
```
:::tip 解释
- 参数少的可以赋值给参数多的，所以，f1 可以赋值给f2.
- 数组 **forEach** 方法的第一个参数是回调函数，该示例中类型为: **(value: string,index: number,array: stringl)=>void**
- 在 JS 中省略用不到的函数参数实际上是很常见的，这样的使用方式，促成了 TS 中函数类型之间的兼容性。
- 并且因为回调函数是有类型的，所以，TS 会自动推导出参数 **item、index、array** 的类型。
:::

### **2. 参数的参数类型**

```typescript
/**
 * 参数类型相同
 */
 type F1 = (a: number) => void
 type F2 = (a: number) => void

 let f1: F1;
 let f2: F2;
 
 f1 = f2
 f2 = f1

 /**
  * 参数类型不同
  */
 type F1 = (a: number) => void
 type F2 = (a: string) => void

 let f1: F1; // 错误
 let f2: F2; // 错误
 
 f1 = f2
 f2 = f1
```

```typescript
interface Point2D {
    x: number
    y: number
}
interface Point3D {
    x: number
    y: number
    z: number
}

type F1 = (p: Point2D) => void // 相当于有 2 个参数
type F2 = (p: Point3D) => void // 相当于有 3 个参数

let f2: F2
let f3: F3

f3 = f2
f2 = f3 // 错误 缺少属性 z
```

:::info 技巧
将对象拆开，把每个属性看做一个个参数，则，参数少的（ f2 ）可以赋值给参数多的 （ f3 ）
:::
:::tip 解释
函数兼容 F2 兼容函数类型 F1，因为 F1 和 F2 的第一个参数类型相同
:::

:::warning 注意
此处与前面讲到的接口兼容性冲突
:::

### 3. 参数的返回值类型
```typescript
/**
 * 原始类型
 */
type F5 = () => string 
type F6 = () => string 

let f5: F5;
let f6: F6;

f5 = f6;
f6 = f5;

/**
 * 对象类型
 */
type F7 = () => { name: string } 
type F8 = () => { name: string; age: number }


let f7: F7;
let f8: F8;

f7 = f8;
f8 = f7; // 报错 缺少属性 age
```
:::tip 解释
1. 如果返回值类型是原始类型，此时两个类型要相同，比如，左侧类型 F5 和 F6
2. 如果返回值类型是对象类型，此时成员多的可以赋值给成员少的，比如，右侧类型 F7 和 F8。
:::

## 九、交叉类型（&）
> 功能类似于接口继承 ( extends )，用于组合多个类型为一个类型 (常用于对象类型)
```typescript
interface Person {
    name: string
    say(): number
}
interface Contact {
    age: number
}

type PersonDetail = Person & Contact;

let obj: PersonDetail = {
    name: "yangshengjun"，
    age: 18,
    say(){ return 20 }
}
```
:::tip 解释
使用交叉类型后，新的类型 **PersonDetail** 就同时具备了 **Person** 和 **Contact** 的所有属性类型<br />
- 相当于
```typescript
type PersonDetail = { name: string; phone: string };
```
:::

## 十、交叉类型（**&**）和接口继承（**extends**）的对比
> - **相同点：** 都可以实现对象类型的组合。
> - **不同点：** 两种方式实现类型组合对于同名属性之间，处理类型冲突的方式不同
```typescript
/**
 * 继承
 * 以下继承会报错，value 参数类型不兼容
 */
interface A {
fn: (value: number) => string
}
interface B extends A {
fn: (value: string) => string
}

/**
 * 交叉类型
 */
interface A {
fn: (value: number) => string
}
interface B {
fn: (value: string) => string
}

type C = A & B

let c: C = {
    fn(value: number | string){
        return "返回字符串"
    }
}

/** 也可以直接调用 */
let c: C;
c.fn(1);
c.fn("2");
```
:::info 说明
以上代码，接口继承会报错(类型不兼容)；交叉类型没有错误，可以简单的理解为:

```typescript
fn: (value: string | number) => string
```
:::
 

 ## 十一、泛型
 ### 1. 介绍
 > 泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用，常用于:**函数、接口、class** 中
 > **需求：** 创建一个 id 函数，传入什么数据就返回该数据本身(也就是说，参数和返回值类型相同)。
 ### 2. 基本使用
 > 创建泛型
 ```typescript
 function id<Type>(value: Type): Type { return value }
 ```

:::tip 解释
- 1. **语法：** 在函数名称的后面添加<>(尖括号)，尖括号中添加类型变量，比如此处的**Type**。
- 2. **类型变量 Type，** 是一种特殊类型的变量，它处理类型而不是值。
- 3. 该类型变量相当于一个类型容器，能够捕获用户提供的类型（具体是什么类型由用户调用该函数时指定）
- 4. 因为 **Type** 是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型。
- 5. 类型变量 **Type**，可以是任意合法的变量名称
:::

### 3. 代码演示
```typescript
/** 使用泛型创建函数 */
function id<Type>(value: Type): Type{
    return value
}

/** 调用泛型函数 */

/** 1. 以 number 类型调用泛型函数 */
const num = id<number>(10);

/** 2. 以 string 类型调用泛型函数 */
const str = id<string>("abc");

/** 3. 以 boolean 类型调用泛型函数 */
const ret = id<boolean>(false);
```
:::tip
- 1. 语法: 在函数名称的后面添加 **<>** (尖括号)，尖括号中指定具体的类型，比如，此处的 **number**。
- 2. 当传入类型 **number** 后，这个类型就会被函数声明时指定的类型变量 **Type** 捕获到。 
- 3. 此时，**Type** 的类型就是 **number**，所以，函数 id 参数和返回值的类型也都是 **number**。<br />
这样，通过泛型就做到了让id 函数与多种不同的类型一起工作，实现了复用的同时保证了类型安全。
:::

### 4. 简化调用泛型函数

```typescript
/** 使用泛型创建函数 */
function id<Type>(value: Type): Type{
    return value
}

/** 调用泛型函数 */

/** 1. 以 number 类型调用泛型函数 */
const num = id(10);

/** 2. 以 string 类型调用泛型函数 */
const str = id("abc");

/** 3. 以 boolean 类型调用泛型函数 */
const ret = id(false);
```
:::tip 解释
- 1. 在调用泛型函数时，可以省略 <类型> 来简化泛型函数的调用
- 2. TS 内部会采用一种叫做类型参数推断的机制，来根据传入的实参自动推断出类型变量 **Type** 的类型。
- 3. 比如，传入实参10，TS 会自动推断出变量 num 的类型 **number**，并作为 **Type** 的类型
- 4. 推荐：使用这种简化的方式调用泛型函数，使代码更短，更易于阅读
:::
::: info 说明
当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数
:::

### 5. 泛型约束

> 默认情况下，泛型函数的类型变量 **Type** 可以代表多个类型，这导致无法访问任何属性。比如，id(a) 调用函数时获取参数的长度
> 添加泛型约束收缩类型主要有以下两种方式
#### **(1). 指定更加具体的类型**
```typescript
/** 泛型约束 给参数添加具体的类型 */
function id<Type>(value: Type[]): Type[]{
    console.log(value.length);
    return value
}

```
:::tip 解释
**Type** 可以代表任意类型，无法保证一定存在 **length** 属性，比如 number 类型就没有 **length**。
此时，就需要为泛型添加约束来收缩类型(缩窄类型取值范围)
:::

#### (2). **添加约束**
```typescript
interface ILength {
    length: number
}

function id<Type extends TLength>(value: Type): Type{
    console.log(value.length)
    return value
}

id(['a', 'b']); // 数组中有 length 属性
id("abcdef"); // 字符串中有 length 属性
id({length: 10, name: 'jack'}) // 对象中可以传入length 属性就不会报错
id(10); // 报错
```
:::tip 解释
- 1. 创建描述约束的接口 **ILength**，该接口要求提供 **length** 属性
- 2. 通过 **extends** 关键字使用该接口，为泛（类型变量）添加约束
- 3. 该约束表示：传入的类型必须具有 **length** 属性
:::

:::warning 注意！
传入的实参(比如，数组)只要有 **length** 属性即可，这也符合前面讲到的接口的类型兼容性
:::

#### **(3). 类型变量之间的约束**
> 泛型的类型变量可以有多个，并且类型变量之间还可以约束(比如，第二个类型变量受第一个类型变量约束)比如，创建一个函数来获取对象中属性的值:
```typescript
/** keyof 关键值是获取他后面类型的键值，从而约束第二个参数key的类型 */
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key){
    return obj[key]
}

let person = { name: "yangshengjun", age: 18 };

getProp(person, 'name');
getProp(person, 'age');
getProp(person, 'gender'); // 报错，person 对象中没有 gender，因为 keyof 获取不到

getProp(18, 'toFixed');
getProp('abc', 'split');
getProp('abc', 1); // 1 表示 'abc' 字符串的索引
getProp('abc', 'length');
getProp(['a', 'b'], 'length');
console.log('abcd'[1]) // 字符串也有索引
```
:::tip 解释
- 1. 添加了第二个类型变量 Key，两个类型变量之间使用 (,)逗号分隔
- 2. **keyof** 关键字接收一个对象类型，生成其键名称 (可能是字符串或数字)的联合类型。
- 3. 本示例中 **keyof Type** 实际上获取的是 **person** 对象所有键的联合类型，也就是: 'name'|'age'
- 4. 类型变量 **Key** 受 **Type** 约束，可以理解为: **Key** 只能是 **Type** 所有键中的任意一个，或者说只能访问对象中存在的属性。
:::

### 泛型接口