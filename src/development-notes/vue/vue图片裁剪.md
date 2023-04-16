# vue + elementUI + vue-cropper 实现图片裁剪实时预览
<!-- more -->

##### [vue-cropper  npm ：https://www.npmjs.com/package/vue-cropper](https://www.npmjs.com/package/vue-cropper)

## 1.下载依赖

`npm install -S vue-cropper`

## 2.子组件

```vue
<template>
  <el-dialog
    title="编辑头像"
    :visible.sync="dialogVisibleSta"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="600px"
  >
    <div style="display: flex" class="avatar">
      <div class="avatar-left">
        <div v-show="!options.img">
          <el-upload
            ref="upload"
            action=""
            style="text-align: center;margin-bottom: 24px"
            :on-change="uploads"
            accept="image/png, image/jpeg, image/jpg"
            :show-file-list="false"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary" ref="uploadBtn">选择图片</el-button>
          </el-upload>
          <div>支持jpg、png格式的图片，大小不超过3M</div>
        </div>
        <div v-show="options.img" class="avatar-left-crop">
          <VueCropper
            class="crop-box"
            ref="cropper"
            :img="options.img"
            :autoCrop="options.autoCrop"
            :fixedBox="options.fixedBox"
            :canMoveBox="options.canMoveBox"
            :autoCropWidth="options.autoCropWidth"
            :autoCropHeight="options.autoCropHeight"
            :centerBox="options.centerBox"
            @realTime="realTime">
          </VueCropper>
          <p class="avatar-left-p">
            鼠标滚轮缩放控制图片显示大小，鼠标拖拽调整显示位置</p>
        </div>
      </div>
      <div class="avatar-right">
        <div class="avatar-right-div" v-for="(item, index) in previewsDiv" :style="item.style" :key="index">
          <div v-show="options.img" :class="previews.div" class="avatar-right-previews" :style="item.zoomStyle">
            <img :src="previews.url" :style="previews.img">
          </div>
        </div>
        <div class="avatar-right-text">
          <el-button v-if="options.img" type="text" @click="uploadPreviews">重新上传</el-button>
          <span v-else>预览</span>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="closeDialog">取 消</el-button>
    <el-button type="primary" @click="getCrop">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import { VueCropper }  from 'vue-cropper' 
export default {
  name: "avatarEdit",
  components: {
    VueCropper
  },
  props: {
      dialogVisible: {
        type: Boolean,
        default: false
      },
      ImgURL: {
        type: String,
        default: "",
      }
    },
    watch:{
      dialogVisible(val){
        this.dialogVisibleSta = val
      },
      ImgURL:{
        handler(val){
          this.options.img = val
        },
        immutable: true
      }
    },
    data() {
      return {
        dialogVisibleSta: this.dialogVisible,
        FileList: null,
        //vueCropper组件 裁剪配置信息
        options: {
          img: this.ImgURL,  //原图文件
          autoCrop: true,  //默认生成截图框
          fixedBox: true,  //固定截图框大小
          canMoveBox: false,    //截图框不能拖动
          autoCropWidth: 200,  //截图框宽度
          autoCropHeight: 200, //截图框高度
          centerBox: true,    //截图框被限制在图片里面
        },
        //实时预览图数据
        previews: {},
        //实时预览图样式
        previewsDiv: [
          //108px 预览样式
          {
            style: {
              width: '108px',
              height: '108px',
              margin: '0 auto'
            },
            zoomStyle: {
              zoom: 0.51
            }
          },
          //68px 预览样式
          {
            style: {
              width: '68px',
              height: '68px',
              margin: '27px auto'
            },
            zoomStyle: {
              zoom: 0.31
            }
          },
          //48px 预览样式
          {
            style: {
              width: '48px',
              height: '48px',
              margin: '0 auto'
            },
            zoomStyle: {
              zoom: 0.21
            }
          }
        ],
      }
    },

    methods: {
      //读取原图
      uploads(file) {
        const isIMAGE = file.raw.type === 'image/jpeg' || file.raw.type === 'image/png';
        const isLt3M = file.raw.size / 1024 / 1024 < 3;
        console.log(file, "读取原图")
        this.FileList = file
        if (!isIMAGE) {
          this.$message.error( '请选择 jpg、png 格式的图片！');
          return false;
        }
        if (!isLt3M) {
          this.$message.error('上传图片大小不能超过 3MB');
          return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(file.raw);
        reader.onload = e => {
          this.options.img = e.target.result //base64
        }
      },
      //实时预览数据
      realTime(data) {
        this.previews = data
      },
      //重新上传
      uploadPreviews() {
        this.$refs.uploadBtn.$el.click()
      },
      //获取截图数据
      getCrop() {
        var _that = this
        this.$refs.cropper.getCropData((data) => {
          console.log(data, "base64 类型")
        })
        this.$refs.cropper.getCropBlob((data) => {
          console.log(data, "Blob 类型")
          let file = new File([data], fileName, { type: data.type });
          console.log(file, "File 类型")
        })
      },
      //关闭弹框
      closeDialog() {
        this.$parent.dialogVisible = false;
        /**
         * 重置 data 数据。
         * Object.assign(this.$data, this.$options.data())
         * 
         * Object.assign是对象深拷贝  
         * this.$data是组件内的数据对象 
         * this.$options.data()是原始的数据
         * */ 
      },
    }
  }
</script>

<style lang="scss" scoped>
  .avatar {
    display: flex;

    .avatar-left {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 400px;
      background-color: #F0F2F5;
      margin-right: 10px;
      border-radius: 4px;

      .avatar-left-crop {
        width: 400px;
        height: 400px;
        position: relative;

        .crop-box {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          overflow: hidden
        }

      }

      .avatar-left-p {
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: 20px;
        color: #ffffff;
        font-size: 14px;
      }
    }

    .avatar-right {
      width: 150px;
      height: 400px;
      background-color: #F0F2F5;
      border-radius: 4px;
      padding: 16px 0;
      box-sizing: border-box;

      .avatar-right-div {
        border: 3px solid #ffffff;
        border-radius: 50%;
      }

      .avatar-right-previews {
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
      }

      .avatar-right-text {
        text-align: center;
        margin-top: 50px;
        font-size: 14px;
        span {
          color: #666666;
        }
      }
    }
  }

</style>
<style scoped>
  /deep/ .el-dialog__header {
    padding: 24px 0 11px 28px;
  }

  /deep/ .el-dialog__title {
    color: #333333;
  }

  /deep/ .el-dialog__body {
    padding: 0 28px;
  }

  /deep/ .el-dialog__footer {
    padding: 20px 28px;

  }
</style>
```

## 3.父组件

```vue
<template>
  <div v-if="!form.lecturerImage" class="Upload-pictures" @click="ReUpload">
    <i class="el-icon-upload" style="font-size: 50px;" />
    <div>上传照片</div>
  </div>
  <div v-else class="img-Uploaded">
    <img :src="form.lecturerImage" alt="讲师照片">
    <div class="Photo-mask" @click="ReUpload">
      <i class="el-icon-refresh-left"></i>
      重新上传
    </div>
  </div>
  <editImg 
    :dialogVisible="dialogVisible" 
    :ImgURL="ImgURL"
    @PictureInstructor="PictureInstructor" />
</template>
<script>
import editImg from "./components/editImg.vue";
import axios from 'axios';
export default {
  components: { editImg,
  },
  data() {
    return {
      /** 上传照片弹窗 */
      dialogVisible: false,
      /** 图片回显地址 */
      ImgURL: '',
    }
  },
      methods: {
    /**
     * 上传照片
     */
     ReUpload(){
      this.dialogVisible = true;
      this.ImgURL = this.form.lecturerImage
     },
      /**
       * 提交讲师照片
       */
      PictureInstructor(val){
        let format = new FormData()
        format.append("imgFile", val);
        axios.post("/other/upload/file", format, uploadProgressEvent,
          (r) => {
            this.form.lecturerImage = r.data.pic
            this.dialogVisible = false;
          }
          )
        },
      }
}
</script>
```

