# vue生成二维码
<!-- more -->

## 方式一：使用 qrcodejs2 插件生成
1. 安装：
<CodeGroup>
  <CodeGroupItem title="npm" active>

```bash:no-line-numbers
npm install --save qrcodejs2 
```
  </CodeGroupItem>
  <CodeGroupItem title="pnpm">

```bash:no-line-numbers
pnpm add -S qrcodejs2
```
  </CodeGroupItem>
  <CodeGroupItem title="yarn">

```bash:no-line-numbers
yarn add qrcodejs2
```
  </CodeGroupItem>
</CodeGroup>

2. 引入：<Badge type="tip" text="import QRCode from 'qrcodejs2'" vertical="middle" />

3. 使用 ：

   ```html
   <div class="qrcode" ref="qrCodeUrl"></div>
   <script>
   mounted() {
       var qrcode = new QRCode(this.$refs.qrCodeUrl, {
               text: 'xxxx', // 需要转换为二维码的内容
               width: 100,
               height: 100,
               colorDark: '#000000',
               colorLight: '#ffffff',
               correctLevel: QRCode.CorrectLevel.H
           })
   },
   </script>
   ```

## 方式二：使用 vue-qr 插件

1. `npm install vue-qr --save`

2. `import vueQr from 'vue-qr'`

3. 使用：

   ```html
   <vue-qr :logoSrc="imageUrl" text="xxx" :size="200"></vue-qr>
   <script>
           data() {
               return { imageUrl: require("../assets/logo.png") }
           },
           components: { vueQr },
       },
   </script>
   ```
