# 在vue中使用高德地图
<!-- more -->

## 1.先在高德开放平台注册账号申请 key ，[传送门](https://lbs.amap.com/)

## 2.在组件中 AppMap 组件中

```vue
<template>
  <div class="positionBox">
    <div class="mapContent">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="站点地址" prop="siteAddress">
          <el-input style="margin: 10px 0;" id="tipinput" class="form-control input-style" type="text"
            placeholder="请输入站点地址" prefix-icon="el-icon-search" v-model="form.siteAddress">
          </el-input>
        </el-form-item>
      </el-form>
      <div id="allmap"></div>
    </div>
  </div>
</template>
<script>
    
/* 引入高德地图 API */
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "AppMap",
  data() {
    return {
      buttonLoading: false,
      form: {},
      map: null,
      marker: null,
      startAutoComplete: null,
      startPlaceSearch: null,
      positionPicker: null,
      startSeacrh: [],
      }
    };
  },
  mounted() {
    this.loadmap();
  },
  methods: {
    loadmap() {
      const that = this;
      return new Promise((reslove, reject) => {
        AMapLoader.load({
          key: "申请到的 KEY ",
          plugins: ["AMap.ToolBar", "AMap.Scale"],
          AMapUI: {
            version: "1.1", // AMapUI 缺省 1.1
            plugins: [], // 需要加载的 AMapUI ui插件
          },
        }).then((AMap) => {
          that.map = new AMap.Map("allmap", {
            resizeEnable: true,
            viewMode: '3D', /* 地图模式，如果用二维地图 */
            pitch: 70,
            rotateEnable: true,
            pitchEnable: true,
            zoom: 18,
            rotation: -15,
            buildingAnimation: true,
            expandZoomRange: true,
            zooms: [3, 20],
            // layers: [
            // // 卫星
            // new AMap.TileLayer.Satellite(),
            // // 路网
            // new AMap.TileLayer.RoadNet()
            // ],
          });
          /**
           * 地图点击事件（仅适用二维图）
           */
          // that.map.on("click", (e) => {
          //   let lnglatXY = [e.lnglat.getLng(), e.lnglat.getLat()];
          //   console.log(lnglatXY)//当前经纬度
          // })

          /**
           * 地图控件
           */
          that.map.addControl(new AMap.Scale());
          that.map.addControl(new AMap.ToolBar());
          /**
           * 地图样式
           */
          // that.map.setMapStyle("amap://styles/blue")
          // that.map.setMapStyle("amap://styles/darkblue")

          /**
           * 地点查询
           */
          AMap.plugin(["AMap.PlaceSearch", "AMap.Autocomplete"], function () {
            let autoOptions1 = {
              input: "tipinput",
              city: "全国"
            };
            that.startAutoComplete = new AMap.Autocomplete(autoOptions1);
            that.startPlaceSearch = new AMap.PlaceSearch({
              map: that.map,
            });

            /**
             * 注册监听，当选中某条记录时会触发
             */
            that.startAutoComplete.on("select", that.handleStartSelect);
          });
          that.handlePositionPickerEvent(); //实现地图拖拽选址功能
          that.map.setZoom(18);
          reslove();
        }).catch((e) => {
          console.log(e, "高德地图加载失败");
          reject(e);
        });
      });
    },

    handlePositionPickerEvent() {
      let that = this;
      AMapUI.loadUI(["misc/PositionPicker"], (PositionPicker) => {
        console.log("拖拽加载成功");
        that.positionPicker = new PositionPicker({
          mode: "dragMarker",//拖拽图标
          map: that.map,
        });
        that.positionPicker.on("success", (positionResult) => {
          if (positionResult.address) {
            this.form.siteAddress = positionResult.address;
            this.form.longitude = positionResult.position.lng // 精度
            this.form.latitude = positionResult.position.lat // 维度

          } else {
            this.form.siteAddress = "";
            this.form.longitude = ''
            this.form.latitude = ''
          };
        });
      });
    },
    handleStartSelect(event) {
      console.log(event, "起点经纬度 [lng,lat]");
      if (event.poi.location == "") {
        this.$message({
          type: "warning",
          message: "该地点无经纬度数据，请输入具体一点的地点!",
          duration: 5 * 1000,
        });
        return;
      }
      if (this.marker) {
        this.map.remove(this.marker);
        this.marker = null;
      }
      this.startSeacrh = [];
      this.startSeacrh = [event.poi.location.lng, event.poi.location.lat];
      this.form.siteAddress = event.poi.district + event.poi.address + event.poi.name;
      this.form.longitude = event.poi.location.lng // 精度
      this.form.latitude = event.poi.location.lat // 维度

      // 传入经纬度，设置地图中心点
      this.map.setCenter(this.startSeacrh);
      this.positionPicker.start(this.startSeacrh);  //启动这句控制 地图出现一个maker点，可以移动
      this.map.setZoom(18);
    },
    markerClick(e) {
      let infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
      infoWindow.setContent(e.target.content);
      infoWindow.open(this.map, e.target.getPosition());
    },
  },
};
</script>
<style scoped>
.mapContent {
  padding-top: 20px;
  width: 80%;
  margin: 0 auto;
}

#allmap {
  width: 92%;
  height: 400px;
  font-family: "微软雅黑";
  border-radius: 15px;
  margin-left: 8%;
}

.posInput {
  z-index: 1;
  width: 100%;
  margin-top: 20px;
}

::v-deep .el-form-item {
  margin-bottom: 0 !important;
}

/* 去除高德水印 */
::v-deep .amap-logo {
  display: none;
  opacity: 0 !important;
}

::v-deep .amap-copyright {
  opacity: 0;
}
</style>

```

## 3.在 index.html 中

```html
    <div id="app">
        <script type="text/javascript">
            window._AMapSecurityConfig = {
                // serviceHost:'您的代理服务器域名或地址/_AMapService',  
                securityJsCode: "***************" //申请的秘钥
            }
        </script>
    </div>
```