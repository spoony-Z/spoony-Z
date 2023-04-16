# uniapp中调起微信小程序授权
<!-- more -->
uni.login、 uni.getUserInfo

```html
<button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber"><u-icon name="weixin-fill"></u-icon>微信手机号一键绑定</button>
```



```javascript
uni.login({
    provider: 'weixin',
    success: res => {
        let appid = "You appid"
        let secret = "You secret" 
        let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${res.code}&grant_type=authorization_code`;
        uni.request({
            url: url,
            success: res => 
                console.log("用户的 openid", res.data.openid)
                console.log("用户的 session_key", res.data.session_key)
            },
            fail: err => {
                console.log('请求失败：',err)
            }
        });
    },
    fail: err => {
        console.log('登录失败：', err)
    }
})
```

```javascript
	  onGetPhoneNumber(e){
		  if(e.detail.errMsg=="getPhoneNumber:fail user deny"){
			console.log("用户拒绝授权")
		  }else{
		  uni.getUserInfo({
			   provider: 'weixin',
			   success: res => {
				   let pc = new WXBizDataCrypt('You appia', "You session_key");
				   let data = pc.decryptData(e.detail.encryptedData, e.detail.iv);
				   console.log('解密后：',data)
			   },
			   fail: err => {
				   console.log('获取用户信息错误：', err)
			   }
			  })
		  }
	  },
```

