---
order: 5
---

# final 关键字

## 基本介绍
**final** 可以修饰类、属性、方法和局部变量

## 使用场景
1. 当不希望类被继承时,可以用 **final** 修饰
2. 当不希望父类的某个方法被子类覆盖/重写(override)时,可以用final关键字修饰。
3. 当不希望类的某个属性的值被修改,可以用final修饰.
4. 当不希望某个局部变量被修改，可以使用final修饰

## 演示
```java
final class AA {}
// 不允许继承 AA 所以下面继承会报错
class BB extends AA {}
```

```java
class AA {
    // 不允许重写
    public final void h1(){}
}
class BB extends AA {
    @Override
    public void h1() {
        System.out.println("重写父类方法");
    }
}
```

```java
public class SluggardStyle {
    public static void main(String[] args) {
        AA aa = new AA();
        // 修改值
        aa.TAX_RATE = 0.09;
    }
}
class AA {
    // 不允许修改值
    public final double TAX_RATE = 0.08;
}
```

```java
public class SluggardStyle {
    public static void main(String[] args) {
        AA aa = new AA();
    }
}

class AA {
    // 不允许修改值
    final public double TAX_RATE = 0.08;
    // 修改局部变量
    TAX_RATE = 0.09;
}
```

## 注意事项
1. final修饰的属性又叫常量,一般 用 XX_XX_XX 来命名
2. final修饰的属性在定义时,必须赋初值,并且以后不能再修改，赋值可以在如下位置之一
    - 定义时赋值
    - 在构造器中
    - 在代码块中
3. 如果 **final** 修饰的属性是静态的，则初始化的位置只能是：
    - 定义时
    - 在静态代码块 **不能在构造中赋值**
4. **final** 类不能继承，但是可以实例化对象
5. 如果类不是 **final** 类，但是含有 **final** 方法，则该方法虽然不能重写，但是可以被继承
6. 般来说，如果一个类已经是 **final** 类了，就没有必要再将方法修饰成 **final** 方法
7. **final** 不能修饰构造方法(即构造器)
8. **final** 和 **static** 往往搭配使用，效率更高，底层编译器做了优化处理
9. 包装类（**Integer**, **Double**, **Float**, **Boolean** 等都是 **final** **），String** 也是 **final** 类