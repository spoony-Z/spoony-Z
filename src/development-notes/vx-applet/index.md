# api

## 页面自动横屏强制横屏

**自动横屏：** 在 app.json 的 window 段中设置 "pageOrientation": "auto" ，或在页面 json 文件中配置 "pageOrientation": "auto" 

**强制横屏：** 在 app.json 的 window 段中设置 "pageOrientation": "landscape" ，或在页面 json 文件中配置 "pageOrientation": "landscape" 
```json
{
"pageOrientation": "auto",
"pageOrientation": "landscape"
}
```