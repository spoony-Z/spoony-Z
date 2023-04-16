# toLocaleString与toString的区别
<!-- more -->

1. ###  toLocaleString( )返回对象的字符串表示，该字符串与执行环境的地区对应；

2. ### toString( )返回对象的字符串表示

   ```javascript
    `数字型`
       var a = 6666;
       a.toLocaleString(); //"6,666"
       a.toString(); //"6666"
       # 可以看到，当数字是三位以上时，会每三位出现一个分隔号；
       
    `字符串`
       var a = '6666';
       a.toLocaleString(); //"6666"
       a.toString(); //"6666"
       # 返回结果不变
    `数组`
       var c = [1,2,3];
   	console.log(c.toLocaleString()); //1,2,3
   	console.log(c.toString()); //1,2,3
   	# 返回结果不变
     `日期`
       var dt = new Date();
   	console.log(dt.toLocaleString()); //2022/12/3 13:25:04
   	console.log(dt.toString()); //TSat Dec 03 2022 13:25:04 GMT+0800 (中国标准时间)
   	# 返回结果不同
   ```

   **区别：**  LocaleString() 会根据你机器的本地环境来返回字符串，它和 toString() 返回的值在不同的本地环境下使用的符号可能变化；所以使用toString()是保险的方法，它不会因为本地环境（例如国家）改变而改变；如果是获取时间，建议使用 LocaleString

