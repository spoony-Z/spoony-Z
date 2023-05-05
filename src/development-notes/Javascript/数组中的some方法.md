# 数组中的方法

## 数组中的 some 方法
<!-- more -->

#### **使用场景** ：

```javascript
      let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
      arr.some((value, index, arr) => {
        // console.log(value, index, arr);
        // 1 0 (12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        // 2 1 (12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        // 3 2 (12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        // 4 3 (12) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        // ......
      })
    // 数组中若满足条件，返回 true 且只返回一次
    arr.some((value) => value > 5) // true
    
```

## **findIndex**（返回数组索引）
> 在数组中搜索要找的值，返回它的元素位置。
```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.findIndex((v) => v==4));
```
### 实现原理
```javascript
let arr = [1, 2, 3, 4, 5];
function findIndex(arr, callback){
    t = false;
    for (const key in arr){
        if (callback(key) === true){
            t = true;
            return key;
        } 
    }
    if (!t) return -1;
}
let find = 4;
let res = findIndex(arr, function(item){
    return arr[item] == find;
});
console.log(res);
```

## 使用 ES6 过滤数组
```javascript
 let arr1 = [{id:1,name:'网'},{id:2,name:'二位'}]
 let arr2 = [{id:1,name:'问问'},{id:3,name:'多少'},{id:44,name:'多少'},{id:45,name:'多少'},]

  let add = arr2.filter(item=>!arr1.some(ele=>ele.id===item.id))
  console.log(add)
```

