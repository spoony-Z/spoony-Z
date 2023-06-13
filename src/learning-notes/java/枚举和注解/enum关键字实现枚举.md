---
order: 2
---

# enum关键字实现枚举

## 代码实现
 * 1. 使用 **enum** 关键字替代 class
 * 2. 将  `public static final EnumerationSon SPRING = new EnumerationSon("春天", "好1");` 直接使用 `SPRING("春天", "好1") 常量名(实参列表)`
 * 3. 如果有多个常量(对象)， 使用，号间隔即可 `SPRING("春天", "好1"), AUTUMN("秋天", "好3")`
 * 4. 使用 **enum** 来实现枚举，要求将定义常量对象，写在前面

 ```java
 public class Enumeration01 {
    public static void main(String[] args) {
        System.out.println(EnumerationSon.SPRING);
        System.out.println(EnumerationSon.SUMMER);
        System.out.println(EnumerationSon.AUTUMN);
        System.out.println(EnumerationSon.WINTER);
    }
}

enum EnumerationSon {
    SPRING("春天", "好1"),
    SUMMER("夏天", "好2"),
    AUTUMN("秋天", "好3"),
    WINTER("冬天", "好4");
    private String name;
    private String desc;

    private EnumerationSon(String name, String desc){
        this.name = name;
        this.desc = desc;
    }
    public String getDesc() {
        return desc;
    }

    @Override
    public String toString() {
        return "EnumerationSon{" +
                "name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                '}';
    }
}

 ```

 :::warning
 1. 当我们使用 **enum** 关键字开发一个枚举类时，默认会继承Enum类[如何证明]
 2. 传统的 `public static final Season2 SPRING = new Season2("春天","温暖");` 简化成 `SPRING(“春天”,"温暖")`这里必须知道，它调用的是哪个构造器
 3. 如果使用无参构造器创建  枚举对象，则实参列表和小括号都可以省略
 4. 当有多个枚举对象时，使用,间隔，最后有一个分号结尾
 5. 枚举对象必须放在枚举类的行首.
 :::

 ## enum 实现接口

1. 使用enum关键字后，就不能再继承其它类了，因为enum会隐式继承Enum，而Java是单继承机制
2. 枚举类和普通类一样，可以实现接口，如下形式

    `enum 类名 implements 接口1，接口2`
### 代码演示

```java
public class Enumeration01 {
    public static void main(String[] args) {
        Music.SPRING.playing();
        Music.SUMMER.playing();
        Music.AUTUMN.playing();
        Music.WINTER.playing();
    }
}
interface EnumerationSonInterface {
    public void playing();
}

enum Music implements EnumerationSonInterface {
    SPRING(),
    SUMMER(),
    AUTUMN(),
    WINTER();
    @Override
    public void playing(){
        System.out.println("kdkdkdk");
    }
}


```