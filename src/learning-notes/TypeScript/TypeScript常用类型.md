---
order: 3
---
# **TypeScript** 常用类型

## 概述
:::tip
**TypeScript** 是JS的超集，TS提供了JS的所有功能，并且额外的增加了：类型系统
- 所有的JS代码都是TS代码。
- JS有类型(比如，number/string等)，但是JS 不会检查变量的类型是否发生变化。而TS 会检查
- TypeScript 类型系统的主要优势: 可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。
:::

## 类型注解

:::tip 示例代码
```typescript
let age: number = 18;
```
- **说明：** 代码中的 **number** 就是类型注解。
- **作用：** 为变量添加类型约束。比如，上述代码中，约定变量age 的类型为 number (数值类型)
- **解释：** 约定了什么类型，就只能给变量赋值该类型的值，否则，就会报错
```typescript
/** 错误写法 */
let age: number = '18';

/** 正确写法 */
let age: number = 18;
```
:::

## 常用基础类型概述

可以将TS中的常用基础类型细分为两类:
1. **jS已有类型**
    - *原始类型:* number/string/boolean/null/undefined/symbol
    - *对象类型：* object (包括，数组、对象、函数等对象)
2. **TS新增类型**
    - 联合类型、自定义类型(类型别名)、接口、元组、字面量类型、枚举、void、any 等

## 原始类型
- **原始类型：** number/string/boolean/null/undefined/symbol。
- **特点：** 简单。这些类型，完全按照JS中类型的名称来书写。
```typescript
let age: number = 18;
let myName: String = '杨胜军';
let isLoading: boolean = false;
let a: null = null;
let b: undefined = undefined;
let s: symbol = Symbol();
等等 。。。
```

## 数组类型
- **对象类型：** object (包括，数组、对象、函数等对象)
- **特点：** 对象类型，在TS中更加细化，每个具体的对象都有自己的类型语法
- **两种写法如下：（推荐使用第一种）**
```typescript
/** 数组中只有一种类型 */
let numberList: number[] = [1, 2, 3];
let stringList: Array<string> = ['a', 'b', 'c'];
```
**需求：** 数组中既有 **number** 类型，又有 **string** 类型，这个数组的类型应该如何写?
```typescript
/** 数组中含有多种类型 */
let arr: (number | string)[] = [1, 2, 3, 'a', 'b'];

/** 不加小括号 变量可以是多种类型 */
let arr1: number | string = '416';
let arr2: number | string[] = ['a', 'b']
```
:::tip 解释
| （竖线）在TS 中叫做**联合类型**(由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种)。
:::
:::warning 注意
这是 TS 中联合类型的语法，只有一根竖线，不要与JS中的或 （ || ） 混淆了
:::

## 类型别名（type）

- **类型别名(自定义类型)：** 为任意类型起别名
- **使用场景：** 当同一类型(复杂)被多次使用时，可以通过类型别名，简化该类型的使用。
```typescript
type CustomArray = (number | string)[];
let arr: CustomArray = [1, 2, 3, 'a', 'b'];
let arr2: CustomArray = [1, 'x', 2, 'y'];
```
:::tip 解释
- 使用 **type** 关键字来创建类型别名
- 类型别名(比如，此处的 **CustomArray** )，可以是任意合法的变量名称
- 创建类型别名后，直接使用该类型别名作为变量的类型注解即可
:::

## 函数类型

### **函数的类型实际上指的是：函数参数和返回值的类型**
> **为函数指定类型的两种方式:**
> 1. 单独指定参数、返回值的类型 
>```typescript
> /** function 函数写法 */
> function add(number1: number, number2: number): number{
>     return number1 + number2;
> }
>
>/** 箭头函数写法 */
>const add = (number1: number, number2: number): number => {
>    return number1 + number2;
>}
>```
> 2. 同时指定参数、返回值的类型。
>```typescript
> const add: (number1: number, number2: number) => number = (number1, number2) => {
>    return number1 + number2;
>}
>```
>:::tip 解释
>当函数作为表达式时，可以通过类似箭头函数形式的语法来为函数添加类型
>:::
>:::warning 注意
>这种形式只适用于函数表达式。
>:::

### **如果函数没有返回值，那么，函数返回值类型为: void**

>```typescript
> function greet(name: string): void{
>     console.log(name);
> };
>```

### **函数类型的可选参数**

>使用函数实现某个功能时，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到可选参数了<br />
>比如，数组的 **slice** 方法，可以 **slice()** 也可以 **slice(1)** 还可以 **slice(1,3)**
>```typescript
>function mySlice(start?: number, end?: number): void{
>    console.log('起始索引', start, '结束索引', end);
>}
>mySlice();
>mySlice(1)
>mySlice(1, 2);
>```
>:::tip 可选参数
>在可传可不传的参数名称后面添加 ? (问号)
>:::
>:::warning 注意
>可选参数只能出现在参数列表的最后，也就是说可选参数后面不能再出现必选参数。
>:::

## 对象类型
**]S 中的对象是由 属性 和 方法 构成的，而 TS 中对象的类型就是在描述对象的结构(有什么类型的 属性 和 方法 )**
```typescript
let person: { name: string; age: number; sayHi(): void; greet(name: string): number} = {
    name: '杨胜军',
    age: 18,
    sayHi(){},
    greet(name){}
}

/** 多行 可以去掉封号 */
let person: { 
    name: string
    age: number
    sayHi: () => void
    greet(name: string): void
    } = {
    name: '杨胜军',
    age: 18,
    sayHi(){},
    greet(name){}
}
```
:::tip 解释
- 直接使用 {} 来描述对象结构。属性采用**属性名： 类型** 的形式，方法采用**方法名(): 返回值类型** 的形式。
- 如果方法有参数，就在方法名后面的小括号中指定参数类型(比如: **greet(name:string): void**)
- 在一行代码中指定对象的多个属性类型时，使用;(分号)来分隔
- 如果一行代码只指定一个属性类型(通过换行来分隔多个属性类型)，可以去掉;(分号)
- 方法的类型也可以使用箭头函数形式 (比如:{sayHi:()=> void})
:::

**对象的属性或方法，也可以是可选的，此时就用到可选属性了**<br />
**比如，我们在使用 axios({...}) 时，如果发送GET 请求，method 属性就可以省略**
```typescript
function myAxios(config: {url: string; method?: string }){
    myAxios({
        url: ""
    })
}
```
:::tip
**可选属性** 的语法与**函数可选参数** 的语法**一致**，都使用?(问号)来表示。 
:::

## 接口（interface）
### **接口介绍**
当一个对象类型被多次使用时，一般会使用接口 **(interface)** 来描述对象的类型，达到**复用**的目的
```typescript
/** 定义接口 */
interface IPerson {
    name: string
    age: number
    sayHi(): void
}
let person: IPerson = {
    name: '杨胜军',
    age: 18,
    sayHi(){}
}
```
:::tip 解释
- 使用 **interface** 关键字来声明接口
- 接口名称 (比如，此处的 **IPerson**)，可以是任意合法的变量名称
- 声明接口后，直接**使用接口名称作为变量的类型**
- 因为每一行只有一个属性类型，因此，属性类型后没有;(分号)
:::

### **interface**(接口) 和 type 的对比

- **相同点**：都可以给对象指定类型
- **不同点**：
    > - 接口，只能为对象指定类型
    > - 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名

```typescript
/** 接口 */
interface IPerson1 {
    name: string
    age: number
    sayHi(): void
}
let person: IPerson1 = {
    name: '杨胜军',
    age: 18,
    sayHi(){}
}

/** 类型别名 */
type IPerson2 {
    name: string
    age: number
    sayHi(): void
}
let person: IPerson2 = {
    name: '杨胜军',
    age: 18,
    sayHi(){}
}

type NumStr = number | string
```

### 接口继承

**使用场景：** 如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用。
```typescript
/** Point3D 继承 Poin2D 的属性 */
interface Point2D {
    x: number
    y: string
}
interface Point3D extends Point2D {
    z: number
}
let p3: Point3D = {
    x: 10,
    y: '10',
    z: 10
}
```
:::tip 解释
1. 使用 **extends** (继承)关键字实现了接口 Point3D 继承Point2D
2. 继承后，Point3D就有了 Point2D 的所有属性和方法(此时，Point3D 同时有X、y、Z三个属性)
:::

## 元组（Tuple）
**场景：** 指定数组的固定长度与类型

```typescript
/** 元组的使用 */
let postion: [number, number] = [44, 44];
```

:::tip 解释
1. 元组类型可以确切地标记出有多少个元素，以及每个元素的类型
2. 该示例中，元素有两个元素，每个元素的类型都是number 不能添加第三个或者更多
:::

## 类型推论

**介绍：** 由于类型推论的存在，有些地方，类型注解可以省略不写!<br />
```typescript
/** 省略前 */
let age: number = 44;

/** 省略后 */
let age = 44;
```
:::warning 注意：只有这两种场景可以使用！
- 1. 声明变量并初始化时 
- 2. 决定函数返回值时
:::
**推荐：** 能省略类型注解的地方就省略 (偷懒，充分利用TS类型推论的能力，提升开发效率)<br />
**技巧：** 如果不知道类型，可以通过鼠标放在变量名称上，利用VSCode的提示来查看类型。

## 类型断言（as）
**介绍：** 有时候你会比TS 更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型

```html
<a href="https://spoony-z.gitee.io/spoony-z/" id="link" />
```
```typescript
const aLink = document.getElementById("link");
aLink.href // 访问不到 href 属性
```
:::warning 注意：getElementByld方法返回值的类型是 HTMLElement，该类型只包含所有标签公共的属性或方法，不包含a标签特有的 href 等属性。
因此，这个类型太宽泛(不具体)，无法操作 href等a标签特有的属性或方法
解决方式：使用类型断言指定更加具体的类型
:::
使用类型断言
```typescript
const aLink = document.getElementById("link") as HTMLAnchorElement
aLink.href // 可以访问 href 属性
```

:::tip 解释
1. 使用 as 关键字实现类型断言。
2. 关键字 as 后面的类型是一个更加具体的类型 ( HTMLAnchorElement 是 HTMLElement 的子类型)
3. 通过类型断言，aLink 的类型变得更加具体，这样就可以访问 a 标签特有的属性或方法了<br />
**另一种语法，使用<>语法，这种语法形式不常用**
```typescript
const aLink = <HTMLAnchorElement>document.getElementById("link");
```
:::
**技巧：** 在浏览器控制台，通过console.dir() 打印 DOM 元素，在属性列表的最后面，即可看到该元素的类型。
1. 打开控制选中元素
2. 控制台输入：console.dir($0) //选中的元素为$0

## 字面量类型
```typescript
/** str1 的类型为 string */
let str1 = 'Hello TS';

/** str1 的类型为 'Hello TS' */
const str2 = 'Hello TS';
``` 
:::tip 解释
- str1 是一个变量 (let)，它的值可以是任意字符串，所以类型为: string。
- str2 是一个常量 (const)，它的值不能变化只能是Hello TS'，所以，它的类型为:HelloTS'。
:::
:::warning 注意!
此处的 'Hello TS'，就是一个字面量类型。也就是说某个特定的字符串也可以作为TS 中的类型<br />
除字符串外，任意的JS 字面量 (比如，对象、数字等)都可以作为类型使用
:::
```typescript
/** age 的类型为 18 */
let age: 18 = 18;

/** 报错 age 的类型为 18 所以只能等于18 */
// let age: 18 = 19;
``` 

**使用模式：** 字面量类型配合联合类型一起使用。<br />
**使用场景：** 用来表示一组明确的可选值列表 比如：方向的可选值只能是上、下、左、右中的任意一个 <br />
```typescript
function changeDirection(direction: 'up' | 'down' | 'left' | 'right'){
    console.log(direction)
}

/** 参数direction 的值只能是up/down/left/right 中的任意一个 */
changeDirection('up') // up
changeDirection('down') // down
changeDirection('bnm') // 报错
``` 
**优势：** 相比于string 类型，使用字面量类型更加精确、严谨。

## 枚举（enum）

### 介绍

类似于字面量类型 + 联合类型组合的功能，也可以表示一组明确的可选值

### 数字枚举

```typescript
/** 定义枚举 */
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

function changeDirection(direction: Direction){
    console.log(direction)
}
/** 调用函数 */
changeDirection(Direction.Left)
```
:::tip 解释
1. 使用 enum 关键字定义枚举
2. 约定枚举名称、枚举中的值以大写字母开头。
3. 枚举中的多个值之间通过，(逗号)分隔。
4. 定义好枚举后，直接使用枚举名称作为类型注解
:::
:::warning 注意!
- 形参 **direction** 的类型为枚举 **Direction**，那么，实参的值就应该是枚举 **Direction** 成员的任意一个。
- 直接通过点 (.) 语法访问枚举的成员
- 枚举成员是有值的，默认为: 从0 开始自增的数值
- 把枚举成员的值为数字的枚举，称为：数字枚举
- 也可以给枚举中的成员初始化值
```typescript
/** 定义枚举 */
enum Direction {
    Up = 10,
    Down = 20,
    Left = 30,
    Right,
}

function changeDirection(direction: Direction){
    console.log(direction)
}
/** 调用函数 */
changeDirection(Direction.Left)
```
:::

### 字符串枚举

**字符串枚举：** 枚举成员的值是字符串
```typescript
/** 定义枚举 */
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

function changeDirection(direction: Direction){
    console.log(direction)
}
/** 调用函数 */
changeDirection(Direction.Left)
```
:::warning 注意!
字符串枚举没有自增长行为，因此，字符串枚举的每个成员必须有初始值
:::

## any 类型

