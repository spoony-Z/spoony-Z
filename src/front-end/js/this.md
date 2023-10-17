# 正确认识this

## JavaScript 中的this

> 在绝大多数情况下，函数的调用方式决定了 this 的值(运行时绑定)。this 不能在执行期间被赋值，并且在每次函数被
调用时 this 的值也可能会不同。

###  如何确认this的值

> 在非严格模式下，总是 **指向一个对象，** 在严格模式下可以是 **任意值。**
1. 全局执行环境中指向全局对象 **window** (非严格模式、严格模式)
      ```javascript
      /** 非严格模式 */
      console.log(this); // window

      /** 严格模式 */
      'use strict'
      console.log(this); // window
      ```
2. 函数内部，取决于函数被调用的方式
   1. 直接调用的this值
         - **非严格模式：** 全局对象(window)
         - **严格模式：** undefined
   2. 对象方法调用的this值
         - 指向调用者（严格模，非严格模式）
    ```javascript
    /** 1. 直接调用（非严格模式） */
    function fun(){
        console.log(this); // window
    }
    fun()

    /** 1. 直接调用（严格模式） */
    function fun(){
        'use strict'
        console.log(this); // undefined
    }
    fun()

    /** 对象方法调用 （非严格模式）*/
    const food = {
        name: "炒拉条",
        eat() {
            console.log(this);
        }
    }
    // this指向调用者 调用者为 foot 所以 这里的thi指向 food 对象
    console.log(food.eat()); 

    /** 对象方法调用 （严格模式）*/
    const food = {
        name: "炒拉条",
        eat() {
            'use strict'
            console.log(this);
        }
    }
    // this指向调用者 调用者为 foot 所以 这里的thi指向 food 对象
    console.log(food.eat()); 
    ```
- 严格模式
  ```javascript
  /** 为整个脚本开启严格模式 */
  'use strict'

  /** 为函数开启严格模式 */
  function fun(){
    'use strict'
  }
  ```

### 如何指定this的值

### 手写call、apply 、 bind: