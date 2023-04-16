# uniapp 下一页返回上一页传参
<!-- more -->

作者：<Badge type="tip" text="滋泼泼" vertical="middle" />

1. B 页面

   ```vue
   onBackPress() {
      let pages = getCurrentPages();
      if (pages.length >= 2) {
       let curPage = pages[pages.length - 1]; // 当前页面
       let prePage = pages[pages.length - 2]; // 上一页面
       prePage.$vm.参数名 = 参数值;
      }
     }
   ```

2. A 页面

   ```vue
   let pages = getCurrentPages();
   let curPage = pages[pages.length - 1];
   curPage.$vm.参数名;
   ```

