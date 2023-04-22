import { defineAsyncComponent, ref, readonly, reactive, defineComponent, onMounted, computed, h as h$3, inject, getCurrentInstance, camelize, capitalize, nextTick, Transition, resolveComponent, watch, onUnmounted, toRef, provide, TransitionGroup, useSSRContext, createSSRApp } from "vue";
import { isString, isArray, dedupeHead, resolveLocalePath, isLinkHttp, removeLeadingSlash, isPlainObject, isLinkMailto, isLinkTel, ensureEndingSlash, isLinkExternal, removeEndingSlash } from "@vuepress/shared";
import { useWindowScroll, useStyleTag, useClipboard, useEventListener, useStorage, useToggle, useDebounceFn, useMutationObserver, usePreferredDark, useFullscreen, useScrollLock, useThrottleFn, useSessionStorage, onClickOutside, useLocalStorage } from "@vueuse/core";
import "ts-debounce";
import { useRouter, RouterLink, useRoute, useLink, RouterView, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { compareSync } from "bcrypt-ts/browser";
const pagesData$1 = {
  // path: /
  "v-8daa1a0e": () => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-f798a277.js"
  ).then(({ data }) => data),
  // path: /development-notes/
  "v-54fc9519": () => import(
    /* webpackChunkName: "v-54fc9519" */
    "./assets/index.html-47a2b2ad.js"
  ).then(({ data }) => data),
  // path: /guide/2023%E8%AE%A1%E5%88%92%E8%A1%A8.html
  "v-20833aa2": () => import(
    /* webpackChunkName: "v-20833aa2" */
    "./assets/2023计划表.html-a4c1633a.js"
  ).then(({ data }) => data),
  // path: /guide/
  "v-fffb8e28": () => import(
    /* webpackChunkName: "v-fffb8e28" */
    "./assets/index.html-ccefbc4f.js"
  ).then(({ data }) => data),
  // path: /npm-tool/rimraf.html
  "v-7ec14f5c": () => import(
    /* webpackChunkName: "v-7ec14f5c" */
    "./assets/rimraf.html-362f87dd.js"
  ).then(({ data }) => data),
  // path: /software-installation/IDEA%E5%AE%89%E8%A3%85.html
  "v-6aea5eee": () => import(
    /* webpackChunkName: "v-6aea5eee" */
    "./assets/IDEA安装.html-18d12587.js"
  ).then(({ data }) => data),
  // path: /software-installation/IDEA%E7%9A%84%E4%BD%BF%E7%94%A8.html
  "v-1242d0e0": () => import(
    /* webpackChunkName: "v-1242d0e0" */
    "./assets/IDEA的使用.html-2a3fc470.js"
  ).then(({ data }) => data),
  // path: /software-installation/MySql%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.html
  "v-b8be1f04": () => import(
    /* webpackChunkName: "v-b8be1f04" */
    "./assets/MySql安装教程.html-f5c4828f.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/fantastic-admin.html
  "v-7c03131a": () => import(
    /* webpackChunkName: "v-7c03131a" */
    "./assets/fantastic-admin.html-70caaf3c.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/gin-vue-admin.html
  "v-b16d0f60": () => import(
    /* webpackChunkName: "v-b16d0f60" */
    "./assets/gin-vue-admin.html-852b6f3c.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/naive-ui-admin.html
  "v-6372ff5d": () => import(
    /* webpackChunkName: "v-6372ff5d" */
    "./assets/naive-ui-admin.html-645056b0.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/soybean-admin.html
  "v-9dd68ef0": () => import(
    /* webpackChunkName: "v-9dd68ef0" */
    "./assets/soybean-admin.html-17fead97.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue-admin-better.html
  "v-5caa8386": () => import(
    /* webpackChunkName: "v-5caa8386" */
    "./assets/vue-admin-better.html-00e9073a.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue-admin-box.html
  "v-2fbd3c71": () => import(
    /* webpackChunkName: "v-2fbd3c71" */
    "./assets/vue-admin-box.html-6bc4ab80.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue-element-admin.html
  "v-2940ada0": () => import(
    /* webpackChunkName: "v-2940ada0" */
    "./assets/vue-element-admin.html-d8ba68eb.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue-next-admin.html
  "v-485200df": () => import(
    /* webpackChunkName: "v-485200df" */
    "./assets/vue-next-admin.html-cdbdc833.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue-pure-admin.html
  "v-0f6a97ba": () => import(
    /* webpackChunkName: "v-0f6a97ba" */
    "./assets/vue-pure-admin.html-c8bdaa75.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue-vben-admin.html
  "v-e09ecb86": () => import(
    /* webpackChunkName: "v-e09ecb86" */
    "./assets/vue-vben-admin.html-8b6bf5f4.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue3-admin-element-template.html
  "v-341a274e": () => import(
    /* webpackChunkName: "v-341a274e" */
    "./assets/vue3-admin-element-template.html-78e30d79.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue3-antd-admin.html
  "v-7c3f7418": () => import(
    /* webpackChunkName: "v-7c3f7418" */
    "./assets/vue3-antd-admin.html-c97d6b19.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/vue3-composition-admin.html
  "v-7e07386f": () => import(
    /* webpackChunkName: "v-7e07386f" */
    "./assets/vue3-composition-admin.html-43d0d55b.js"
  ).then(({ data }) => data),
  // path: /zh/intro.html
  "v-858cfdd6": () => import(
    /* webpackChunkName: "v-858cfdd6" */
    "./assets/intro.html-5c51fe59.js"
  ).then(({ data }) => data),
  // path: /zh/page.html
  "v-56c59782": () => import(
    /* webpackChunkName: "v-56c59782" */
    "./assets/page.html-eae17bcc.js"
  ).then(({ data }) => data),
  // path: /zh/
  "v-2d0ad528": () => import(
    /* webpackChunkName: "v-2d0ad528" */
    "./assets/index.html-3a12b43f.js"
  ).then(({ data }) => data),
  // path: /zh/slides.html
  "v-269ae70f": () => import(
    /* webpackChunkName: "v-269ae70f" */
    "./assets/slides.html-fe1fef86.js"
  ).then(({ data }) => data),
  // path: /zh/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html
  "v-cce9318c": () => import(
    /* webpackChunkName: "v-cce9318c" */
    "./assets/学习笔记.html-3e48d584.js"
  ).then(({ data }) => data),
  // path: /development-notes/Javascript/toLocaleString%E4%B8%8EtoString%E7%9A%84%E5%8C%BA%E5%88%AB.html
  "v-7f3f3cee": () => import(
    /* webpackChunkName: "v-7f3f3cee" */
    "./assets/toLocaleString与toString的区别.html-9f9f1f48.js"
  ).then(({ data }) => data),
  // path: /development-notes/Javascript/%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84some%E6%96%B9%E6%B3%95.html
  "v-3b49d4b6": () => import(
    /* webpackChunkName: "v-3b49d4b6" */
    "./assets/数组中的some方法.html-47a16942.js"
  ).then(({ data }) => data),
  // path: /development-notes/recat/recat%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95%E7%AC%AC%E4%B8%80%E7%AB%A0.html
  "v-46f649f1": () => import(
    /* webpackChunkName: "v-46f649f1" */
    "./assets/recat开发记录第一章.html-a7d4a31d.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/1.Vue%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%20-%20Provide%20%20Inject.html
  "v-1a27c043": () => import(
    /* webpackChunkName: "v-1a27c043" */
    "./assets/1.Vue依赖注入 - Provide  Inject.html-41b4829d.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/vue%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA.html
  "v-27e6293a": () => import(
    /* webpackChunkName: "v-27e6293a" */
    "./assets/vue图片裁剪.html-25fce2e4.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/vue%E7%94%9F%E6%88%90%E4%BA%8C%E7%BB%B4%E7%A0%81.html
  "v-e02a7b2e": () => import(
    /* webpackChunkName: "v-e02a7b2e" */
    "./assets/vue生成二维码.html-aa26fd4d.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/%E5%89%8D%E7%AB%AF%E6%89%B9%E9%87%8F%E5%AF%BC%E5%87%BA%E5%9B%BE%E7%89%87.html
  "v-6ae988d6": () => import(
    /* webpackChunkName: "v-6ae988d6" */
    "./assets/前端批量导出图片.html-c56be720.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6%E4%BB%A5%E5%8F%8A%E4%BC%A0%E5%80%BC.html
  "v-d4a19512": () => import(
    /* webpackChunkName: "v-d4a19512" */
    "./assets/动态渲染组件以及传值.html-7b2f12d2.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/%E5%9C%A8vue%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE.html
  "v-71457cdb": () => import(
    /* webpackChunkName: "v-71457cdb" */
    "./assets/在vue中使用高德地图.html-b2e31f7c.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/%E5%9F%BA%E4%BA%8Eelement-ui%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85%E8%A1%A8%E6%A0%BC.html
  "v-18a9f2a7": () => import(
    /* webpackChunkName: "v-18a9f2a7" */
    "./assets/基于element-ui二次封装表格.html-6a6aa7a9.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/%E5%B0%81%E8%A3%85%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8v-model%E4%BC%A0%E9%80%92%E5%80%BC.html
  "v-c48744e4": () => import(
    /* webpackChunkName: "v-c48744e4" */
    "./assets/封装组件使用v-model传递值.html-2a6b7191.js"
  ).then(({ data }) => data),
  // path: /development-notes/uniapp/uniapp%20%E4%B8%8B%E4%B8%80%E9%A1%B5%E8%BF%94%E5%9B%9E%E4%B8%8A%E4%B8%80%E9%A1%B5%E4%BC%A0%E5%8F%82.html
  "v-44381fd2": () => import(
    /* webpackChunkName: "v-44381fd2" */
    "./assets/uniapp 下一页返回上一页传参.html-d10db933.js"
  ).then(({ data }) => data),
  // path: /development-notes/uniapp/uniapp%E4%B8%AD%E8%B0%83%E8%B5%B7%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%88%E6%9D%83.html
  "v-c6604412": () => import(
    /* webpackChunkName: "v-c6604412" */
    "./assets/uniapp中调起微信小程序授权.html-788fa9b8.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/intro.html
  "v-44271714": () => import(
    /* webpackChunkName: "v-44271714" */
    "./assets/intro.html-695d6809.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/sumUp.html
  "v-b9bc5e48": () => import(
    /* webpackChunkName: "v-b9bc5e48" */
    "./assets/sumUp.html-715c531b.js"
  ).then(({ data }) => data),
  // path: /learning-notes/TypeScript/TypeScript%E5%9F%BA%E7%A1%80.html
  "v-36799354": () => import(
    /* webpackChunkName: "v-36799354" */
    "./assets/TypeScript基础.html-68fa0b4b.js"
  ).then(({ data }) => data),
  // path: /learning-notes/TypeScript/TypeScript%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B.html
  "v-1bda4865": () => import(
    /* webpackChunkName: "v-1bda4865" */
    "./assets/TypeScript常用类型.html-232476c1.js"
  ).then(({ data }) => data),
  // path: /learning-notes/TypeScript/TypeScript%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B.html
  "v-15f3a468": () => import(
    /* webpackChunkName: "v-15f3a468" */
    "./assets/TypeScript高级类型.html-e4eec81c.js"
  ).then(({ data }) => data),
  // path: /learning-notes/TypeScript/%E5%88%9D%E4%BD%93%E9%AA%8C.html
  "v-2e8a1b87": () => import(
    /* webpackChunkName: "v-2e8a1b87" */
    "./assets/初体验.html-b9f7b4a8.js"
  ).then(({ data }) => data),
  // path: /learning-notes/vue/%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE.html
  "v-b0967778": () => import(
    /* webpackChunkName: "v-b0967778" */
    "./assets/创建项目.html-f4b143b8.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/intermediate/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%BA%A7.html
  "v-23d83276": () => import(
    /* webpackChunkName: "v-23d83276" */
    "./assets/面向对象中级.html-d18ba645.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/senior/Java%E9%AB%98%E7%BA%A7%E6%95%99%E7%A8%8B.html
  "v-9b417ccc": () => import(
    /* webpackChunkName: "v-9b417ccc" */
    "./assets/Java高级教程.html-cf9a8812.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/DOS%E5%91%BD%E4%BB%A4%E4%BA%86%E8%A7%A3.html
  "v-0d6f74fe": () => import(
    /* webpackChunkName: "v-0d6f74fe" */
    "./assets/DOS命令了解.html-cf5131e8.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/Java%20API%20%E6%96%87%E6%A1%A3.html
  "v-774607c5": () => import(
    /* webpackChunkName: "v-774607c5" */
    "./assets/Java API 文档.html-cb9b4942.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/java%E5%9F%BA%E7%A1%80.html
  "v-c3ba9dae": () => import(
    /* webpackChunkName: "v-c3ba9dae" */
    "./assets/java基础.html-96d5dc0b.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/java%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html
  "v-8e40c442": () => import(
    /* webpackChunkName: "v-8e40c442" */
    "./assets/java快速入门.html-583399f4.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/%E5%8F%98%E9%87%8F.html
  "v-83ad57fe": () => import(
    /* webpackChunkName: "v-83ad57fe" */
    "./assets/变量.html-6b7f17e0.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html
  "v-15e38c6a": () => import(
    /* webpackChunkName: "v-15e38c6a" */
    "./assets/基本数据类型.html-b5b5e634.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%BD%AC%E6%8D%A2.html
  "v-22bf1c4e": () => import(
    /* webpackChunkName: "v-22bf1c4e" */
    "./assets/基本数据类型的转换.html-36b52f53.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/%E6%8E%A7%E5%88%B6%E7%BB%93%E6%9E%84.html
  "v-252217f8": () => import(
    /* webpackChunkName: "v-252217f8" */
    "./assets/控制结构.html-81ad5477.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/%E6%95%B0%E7%BB%84%E3%80%81%E6%8E%92%E5%BA%8F%E3%80%81%E6%9F%A5%E6%89%BE.html
  "v-fde30f02": () => import(
    /* webpackChunkName: "v-fde30f02" */
    "./assets/数组、排序、查找.html-0aa52f0e.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/%E8%BF%90%E7%AE%97%E7%AC%A6.html
  "v-e9d64f6a": () => import(
    /* webpackChunkName: "v-e9d64f6a" */
    "./assets/运算符.html-1ef2516d.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/%E8%BF%9B%E5%88%B6.html
  "v-4b466692": () => import(
    /* webpackChunkName: "v-4b466692" */
    "./assets/进制.html-047ab0bc.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html
  "v-1ab94b83": () => import(
    /* webpackChunkName: "v-1ab94b83" */
    "./assets/面向对象编程.html-0d3f7c00.js"
  ).then(({ data }) => data),
  // path: /404.html
  "v-3706649a": () => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-b1c07204.js"
  ).then(({ data }) => data),
  // path: /npm-tool/
  "v-00707d48": () => import(
    /* webpackChunkName: "v-00707d48" */
    "./assets/index.html-86f925c1.js"
  ).then(({ data }) => data),
  // path: /software-installation/
  "v-6c6b6470": () => import(
    /* webpackChunkName: "v-6c6b6470" */
    "./assets/index.html-7faeb00b.js"
  ).then(({ data }) => data),
  // path: /vue-template-list/
  "v-3e61ee1e": () => import(
    /* webpackChunkName: "v-3e61ee1e" */
    "./assets/index.html-90e48396.js"
  ).then(({ data }) => data),
  // path: /development-notes/Javascript/
  "v-488324ee": () => import(
    /* webpackChunkName: "v-488324ee" */
    "./assets/index.html-6cc0d2b4.js"
  ).then(({ data }) => data),
  // path: /development-notes/recat/
  "v-c98a53b6": () => import(
    /* webpackChunkName: "v-c98a53b6" */
    "./assets/index.html-344450ff.js"
  ).then(({ data }) => data),
  // path: /development-notes/vue/
  "v-a77c6ffc": () => import(
    /* webpackChunkName: "v-a77c6ffc" */
    "./assets/index.html-26417f6f.js"
  ).then(({ data }) => data),
  // path: /development-notes/uniapp/
  "v-7a82c3e5": () => import(
    /* webpackChunkName: "v-7a82c3e5" */
    "./assets/index.html-e2a47ee9.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/
  "v-2619446e": () => import(
    /* webpackChunkName: "v-2619446e" */
    "./assets/index.html-3cfb9d65.js"
  ).then(({ data }) => data),
  // path: /learning-notes/
  "v-65eaff04": () => import(
    /* webpackChunkName: "v-65eaff04" */
    "./assets/index.html-6dbeb850.js"
  ).then(({ data }) => data),
  // path: /learning-notes/TypeScript/
  "v-90290af4": () => import(
    /* webpackChunkName: "v-90290af4" */
    "./assets/index.html-c67e989e.js"
  ).then(({ data }) => data),
  // path: /learning-notes/vue/
  "v-6ac3446d": () => import(
    /* webpackChunkName: "v-6ac3446d" */
    "./assets/index.html-54fe3085.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/intermediate/
  "v-aa7521a6": () => import(
    /* webpackChunkName: "v-aa7521a6" */
    "./assets/index.html-6bd3f420.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/senior/
  "v-026853d4": () => import(
    /* webpackChunkName: "v-026853d4" */
    "./assets/index.html-75fbf8a7.js"
  ).then(({ data }) => data),
  // path: /learning-notes/java/primary/
  "v-4a663736": () => import(
    /* webpackChunkName: "v-4a663736" */
    "./assets/index.html-187661a8.js"
  ).then(({ data }) => data),
  // path: /category/
  "v-5bc93818": () => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-221ac917.js"
  ).then(({ data }) => data),
  // path: /tag/
  "v-744d024e": () => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-48e3ac88.js"
  ).then(({ data }) => data),
  // path: /article/
  "v-e52c881c": () => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-2a568af3.js"
  ).then(({ data }) => data),
  // path: /star/
  "v-154dc4c4": () => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-8c0b52c5.js"
  ).then(({ data }) => data),
  // path: /timeline/
  "v-01560935": () => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-b12f0d79.js"
  ).then(({ data }) => data),
  // path: /category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/
  "v-03d57386": () => import(
    /* webpackChunkName: "v-03d57386" */
    "./assets/index.html-ddbd4913.js"
  ).then(({ data }) => data),
  // path: /tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/
  "v-a378ad66": () => import(
    /* webpackChunkName: "v-a378ad66" */
    "./assets/index.html-ebe12bd2.js"
  ).then(({ data }) => data),
  // path: /category/%E7%AC%94%E8%AE%B0/
  "v-49425445": () => import(
    /* webpackChunkName: "v-49425445" */
    "./assets/index.html-c6c43a40.js"
  ).then(({ data }) => data),
  // path: /tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/
  "v-7b167472": () => import(
    /* webpackChunkName: "v-7b167472" */
    "./assets/index.html-3875e0c1.js"
  ).then(({ data }) => data),
  // path: /tag/ppt/
  "v-b30870ee": () => import(
    /* webpackChunkName: "v-b30870ee" */
    "./assets/index.html-f173505c.js"
  ).then(({ data }) => data)
};
const siteData$1 = JSON.parse('{"base":"/spoony-z/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"SOBER","description":"SOBER"}}}');
const pagesComponents = {
  // path: /
  "v-8daa1a0e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8daa1a0e" */
    "./assets/index.html-2aa98223.js"
  )),
  // path: /development-notes/
  "v-54fc9519": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-54fc9519" */
    "./assets/index.html-6f0a7a99.js"
  )),
  // path: /guide/2023%E8%AE%A1%E5%88%92%E8%A1%A8.html
  "v-20833aa2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-20833aa2" */
    "./assets/2023计划表.html-01116f42.js"
  )),
  // path: /guide/
  "v-fffb8e28": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-fffb8e28" */
    "./assets/index.html-602466d4.js"
  )),
  // path: /npm-tool/rimraf.html
  "v-7ec14f5c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7ec14f5c" */
    "./assets/rimraf.html-eb603f5d.js"
  )),
  // path: /software-installation/IDEA%E5%AE%89%E8%A3%85.html
  "v-6aea5eee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6aea5eee" */
    "./assets/IDEA安装.html-bd71da59.js"
  )),
  // path: /software-installation/IDEA%E7%9A%84%E4%BD%BF%E7%94%A8.html
  "v-1242d0e0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1242d0e0" */
    "./assets/IDEA的使用.html-6ca0e674.js"
  )),
  // path: /software-installation/MySql%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.html
  "v-b8be1f04": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b8be1f04" */
    "./assets/MySql安装教程.html-779c37f0.js"
  )),
  // path: /vue-template-list/fantastic-admin.html
  "v-7c03131a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7c03131a" */
    "./assets/fantastic-admin.html-af98d11b.js"
  )),
  // path: /vue-template-list/gin-vue-admin.html
  "v-b16d0f60": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b16d0f60" */
    "./assets/gin-vue-admin.html-3127d253.js"
  )),
  // path: /vue-template-list/naive-ui-admin.html
  "v-6372ff5d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6372ff5d" */
    "./assets/naive-ui-admin.html-711c969b.js"
  )),
  // path: /vue-template-list/soybean-admin.html
  "v-9dd68ef0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-9dd68ef0" */
    "./assets/soybean-admin.html-98270c10.js"
  )),
  // path: /vue-template-list/vue-admin-better.html
  "v-5caa8386": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5caa8386" */
    "./assets/vue-admin-better.html-5e4d8b23.js"
  )),
  // path: /vue-template-list/vue-admin-box.html
  "v-2fbd3c71": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2fbd3c71" */
    "./assets/vue-admin-box.html-12052da7.js"
  )),
  // path: /vue-template-list/vue-element-admin.html
  "v-2940ada0": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2940ada0" */
    "./assets/vue-element-admin.html-718f9eac.js"
  )),
  // path: /vue-template-list/vue-next-admin.html
  "v-485200df": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-485200df" */
    "./assets/vue-next-admin.html-f4da0f4e.js"
  )),
  // path: /vue-template-list/vue-pure-admin.html
  "v-0f6a97ba": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0f6a97ba" */
    "./assets/vue-pure-admin.html-113a1e2f.js"
  )),
  // path: /vue-template-list/vue-vben-admin.html
  "v-e09ecb86": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e09ecb86" */
    "./assets/vue-vben-admin.html-0b1538bb.js"
  )),
  // path: /vue-template-list/vue3-admin-element-template.html
  "v-341a274e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-341a274e" */
    "./assets/vue3-admin-element-template.html-e0456b10.js"
  )),
  // path: /vue-template-list/vue3-antd-admin.html
  "v-7c3f7418": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7c3f7418" */
    "./assets/vue3-antd-admin.html-03e2a4fb.js"
  )),
  // path: /vue-template-list/vue3-composition-admin.html
  "v-7e07386f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7e07386f" */
    "./assets/vue3-composition-admin.html-b054f900.js"
  )),
  // path: /zh/intro.html
  "v-858cfdd6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-858cfdd6" */
    "./assets/intro.html-7bf04aa5.js"
  )),
  // path: /zh/page.html
  "v-56c59782": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-56c59782" */
    "./assets/page.html-f91cf69e.js"
  )),
  // path: /zh/
  "v-2d0ad528": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2d0ad528" */
    "./assets/index.html-61e28d3b.js"
  )),
  // path: /zh/slides.html
  "v-269ae70f": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-269ae70f" */
    "./assets/slides.html-ebefa3b8.js"
  )),
  // path: /zh/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html
  "v-cce9318c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-cce9318c" */
    "./assets/学习笔记.html-202834cd.js"
  )),
  // path: /development-notes/Javascript/toLocaleString%E4%B8%8EtoString%E7%9A%84%E5%8C%BA%E5%88%AB.html
  "v-7f3f3cee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7f3f3cee" */
    "./assets/toLocaleString与toString的区别.html-7abd5d3d.js"
  )),
  // path: /development-notes/Javascript/%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84some%E6%96%B9%E6%B3%95.html
  "v-3b49d4b6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3b49d4b6" */
    "./assets/数组中的some方法.html-0803e0e1.js"
  )),
  // path: /development-notes/recat/recat%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95%E7%AC%AC%E4%B8%80%E7%AB%A0.html
  "v-46f649f1": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-46f649f1" */
    "./assets/recat开发记录第一章.html-5abda654.js"
  )),
  // path: /development-notes/vue/1.Vue%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%20-%20Provide%20%20Inject.html
  "v-1a27c043": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1a27c043" */
    "./assets/1.Vue依赖注入 - Provide  Inject.html-2a658842.js"
  )),
  // path: /development-notes/vue/vue%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA.html
  "v-27e6293a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-27e6293a" */
    "./assets/vue图片裁剪.html-0fb04df4.js"
  )),
  // path: /development-notes/vue/vue%E7%94%9F%E6%88%90%E4%BA%8C%E7%BB%B4%E7%A0%81.html
  "v-e02a7b2e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e02a7b2e" */
    "./assets/vue生成二维码.html-514fd1e1.js"
  )),
  // path: /development-notes/vue/%E5%89%8D%E7%AB%AF%E6%89%B9%E9%87%8F%E5%AF%BC%E5%87%BA%E5%9B%BE%E7%89%87.html
  "v-6ae988d6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6ae988d6" */
    "./assets/前端批量导出图片.html-a62d05cb.js"
  )),
  // path: /development-notes/vue/%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6%E4%BB%A5%E5%8F%8A%E4%BC%A0%E5%80%BC.html
  "v-d4a19512": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-d4a19512" */
    "./assets/动态渲染组件以及传值.html-bdfbc3f2.js"
  )),
  // path: /development-notes/vue/%E5%9C%A8vue%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE.html
  "v-71457cdb": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-71457cdb" */
    "./assets/在vue中使用高德地图.html-3848bb64.js"
  )),
  // path: /development-notes/vue/%E5%9F%BA%E4%BA%8Eelement-ui%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85%E8%A1%A8%E6%A0%BC.html
  "v-18a9f2a7": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-18a9f2a7" */
    "./assets/基于element-ui二次封装表格.html-736d316d.js"
  )),
  // path: /development-notes/vue/%E5%B0%81%E8%A3%85%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8v-model%E4%BC%A0%E9%80%92%E5%80%BC.html
  "v-c48744e4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c48744e4" */
    "./assets/封装组件使用v-model传递值.html-41bc23cb.js"
  )),
  // path: /development-notes/uniapp/uniapp%20%E4%B8%8B%E4%B8%80%E9%A1%B5%E8%BF%94%E5%9B%9E%E4%B8%8A%E4%B8%80%E9%A1%B5%E4%BC%A0%E5%8F%82.html
  "v-44381fd2": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-44381fd2" */
    "./assets/uniapp 下一页返回上一页传参.html-7eb99370.js"
  )),
  // path: /development-notes/uniapp/uniapp%E4%B8%AD%E8%B0%83%E8%B5%B7%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%88%E6%9D%83.html
  "v-c6604412": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c6604412" */
    "./assets/uniapp中调起微信小程序授权.html-30947c26.js"
  )),
  // path: /learning-notes/java/intro.html
  "v-44271714": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-44271714" */
    "./assets/intro.html-954563c7.js"
  )),
  // path: /learning-notes/java/sumUp.html
  "v-b9bc5e48": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b9bc5e48" */
    "./assets/sumUp.html-9ac0545e.js"
  )),
  // path: /learning-notes/TypeScript/TypeScript%E5%9F%BA%E7%A1%80.html
  "v-36799354": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-36799354" */
    "./assets/TypeScript基础.html-4d30c9a9.js"
  )),
  // path: /learning-notes/TypeScript/TypeScript%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B.html
  "v-1bda4865": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1bda4865" */
    "./assets/TypeScript常用类型.html-6d87d568.js"
  )),
  // path: /learning-notes/TypeScript/TypeScript%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B.html
  "v-15f3a468": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-15f3a468" */
    "./assets/TypeScript高级类型.html-d53f8b43.js"
  )),
  // path: /learning-notes/TypeScript/%E5%88%9D%E4%BD%93%E9%AA%8C.html
  "v-2e8a1b87": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2e8a1b87" */
    "./assets/初体验.html-3c69f974.js"
  )),
  // path: /learning-notes/vue/%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE.html
  "v-b0967778": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b0967778" */
    "./assets/创建项目.html-ca2295a0.js"
  )),
  // path: /learning-notes/java/intermediate/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%BA%A7.html
  "v-23d83276": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-23d83276" */
    "./assets/面向对象中级.html-2f1a6c51.js"
  )),
  // path: /learning-notes/java/senior/Java%E9%AB%98%E7%BA%A7%E6%95%99%E7%A8%8B.html
  "v-9b417ccc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-9b417ccc" */
    "./assets/Java高级教程.html-1f7b48f5.js"
  )),
  // path: /learning-notes/java/primary/DOS%E5%91%BD%E4%BB%A4%E4%BA%86%E8%A7%A3.html
  "v-0d6f74fe": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-0d6f74fe" */
    "./assets/DOS命令了解.html-74335576.js"
  )),
  // path: /learning-notes/java/primary/Java%20API%20%E6%96%87%E6%A1%A3.html
  "v-774607c5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-774607c5" */
    "./assets/Java API 文档.html-238a88f4.js"
  )),
  // path: /learning-notes/java/primary/java%E5%9F%BA%E7%A1%80.html
  "v-c3ba9dae": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c3ba9dae" */
    "./assets/java基础.html-dbe00414.js"
  )),
  // path: /learning-notes/java/primary/java%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html
  "v-8e40c442": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-8e40c442" */
    "./assets/java快速入门.html-80aecd58.js"
  )),
  // path: /learning-notes/java/primary/%E5%8F%98%E9%87%8F.html
  "v-83ad57fe": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-83ad57fe" */
    "./assets/变量.html-799fe2ab.js"
  )),
  // path: /learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html
  "v-15e38c6a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-15e38c6a" */
    "./assets/基本数据类型.html-ca24bfd9.js"
  )),
  // path: /learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%BD%AC%E6%8D%A2.html
  "v-22bf1c4e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-22bf1c4e" */
    "./assets/基本数据类型的转换.html-0abdab49.js"
  )),
  // path: /learning-notes/java/primary/%E6%8E%A7%E5%88%B6%E7%BB%93%E6%9E%84.html
  "v-252217f8": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-252217f8" */
    "./assets/控制结构.html-01fabe88.js"
  )),
  // path: /learning-notes/java/primary/%E6%95%B0%E7%BB%84%E3%80%81%E6%8E%92%E5%BA%8F%E3%80%81%E6%9F%A5%E6%89%BE.html
  "v-fde30f02": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-fde30f02" */
    "./assets/数组、排序、查找.html-325dc3ad.js"
  )),
  // path: /learning-notes/java/primary/%E8%BF%90%E7%AE%97%E7%AC%A6.html
  "v-e9d64f6a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e9d64f6a" */
    "./assets/运算符.html-1d814f83.js"
  )),
  // path: /learning-notes/java/primary/%E8%BF%9B%E5%88%B6.html
  "v-4b466692": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4b466692" */
    "./assets/进制.html-138194c1.js"
  )),
  // path: /learning-notes/java/primary/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html
  "v-1ab94b83": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-1ab94b83" */
    "./assets/面向对象编程.html-38a1c0ed.js"
  )),
  // path: /404.html
  "v-3706649a": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3706649a" */
    "./assets/404.html-037f8eb2.js"
  )),
  // path: /npm-tool/
  "v-00707d48": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-00707d48" */
    "./assets/index.html-435fa0f5.js"
  )),
  // path: /software-installation/
  "v-6c6b6470": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6c6b6470" */
    "./assets/index.html-9df89257.js"
  )),
  // path: /vue-template-list/
  "v-3e61ee1e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-3e61ee1e" */
    "./assets/index.html-a95a88ff.js"
  )),
  // path: /development-notes/Javascript/
  "v-488324ee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-488324ee" */
    "./assets/index.html-646a68cd.js"
  )),
  // path: /development-notes/recat/
  "v-c98a53b6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-c98a53b6" */
    "./assets/index.html-e543202b.js"
  )),
  // path: /development-notes/vue/
  "v-a77c6ffc": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a77c6ffc" */
    "./assets/index.html-9df8dee8.js"
  )),
  // path: /development-notes/uniapp/
  "v-7a82c3e5": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7a82c3e5" */
    "./assets/index.html-12c485e3.js"
  )),
  // path: /learning-notes/java/
  "v-2619446e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-2619446e" */
    "./assets/index.html-f875e21f.js"
  )),
  // path: /learning-notes/
  "v-65eaff04": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-65eaff04" */
    "./assets/index.html-9472a0ca.js"
  )),
  // path: /learning-notes/TypeScript/
  "v-90290af4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-90290af4" */
    "./assets/index.html-78248e5c.js"
  )),
  // path: /learning-notes/vue/
  "v-6ac3446d": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-6ac3446d" */
    "./assets/index.html-34afc282.js"
  )),
  // path: /learning-notes/java/intermediate/
  "v-aa7521a6": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-aa7521a6" */
    "./assets/index.html-58af117b.js"
  )),
  // path: /learning-notes/java/senior/
  "v-026853d4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-026853d4" */
    "./assets/index.html-33ead308.js"
  )),
  // path: /learning-notes/java/primary/
  "v-4a663736": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-4a663736" */
    "./assets/index.html-a8c09f36.js"
  )),
  // path: /category/
  "v-5bc93818": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-5bc93818" */
    "./assets/index.html-d8e9a019.js"
  )),
  // path: /tag/
  "v-744d024e": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-744d024e" */
    "./assets/index.html-dbcf72de.js"
  )),
  // path: /article/
  "v-e52c881c": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-e52c881c" */
    "./assets/index.html-6fe96b5b.js"
  )),
  // path: /star/
  "v-154dc4c4": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-154dc4c4" */
    "./assets/index.html-e9483f18.js"
  )),
  // path: /timeline/
  "v-01560935": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-01560935" */
    "./assets/index.html-0e2d15e2.js"
  )),
  // path: /category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/
  "v-03d57386": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-03d57386" */
    "./assets/index.html-4c135ae0.js"
  )),
  // path: /tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/
  "v-a378ad66": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-a378ad66" */
    "./assets/index.html-5d254e77.js"
  )),
  // path: /category/%E7%AC%94%E8%AE%B0/
  "v-49425445": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-49425445" */
    "./assets/index.html-1ca6875e.js"
  )),
  // path: /tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/
  "v-7b167472": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-7b167472" */
    "./assets/index.html-eb5f66a0.js"
  )),
  // path: /tag/ppt/
  "v-b30870ee": defineAsyncComponent(() => import(
    /* webpackChunkName: "v-b30870ee" */
    "./assets/index.html-168554ac.js"
  ))
};
var layoutsSymbol = Symbol(
  ""
);
var pagesData = ref(pagesData$1);
var pageDataEmpty = readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  headers: []
});
var pageData = ref(pageDataEmpty);
var usePageData = () => pageData;
var pageFrontmatterSymbol = Symbol(
  ""
);
var usePageFrontmatter = () => {
  const pageFrontmatter = inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol(
  ""
);
var usePageHead = () => {
  const pageHead = inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol(
  ""
);
var usePageHeadTitle = () => {
  const pageHeadTitle = inject(pageHeadTitleSymbol);
  if (!pageHeadTitle) {
    throw new Error("usePageHeadTitle() is called without provider.");
  }
  return pageHeadTitle;
};
var pageLangSymbol = Symbol(
  ""
);
var usePageLang = () => {
  const pageLang = inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var pageLayoutSymbol = Symbol(
  ""
);
var usePageLayout = () => {
  const pageLayout = inject(pageLayoutSymbol);
  if (!pageLayout) {
    throw new Error("usePageLayout() is called without provider.");
  }
  return pageLayout;
};
var routeLocaleSymbol = Symbol(
  ""
);
var useRouteLocale = () => {
  const routeLocale = inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = ref(siteData$1);
var useSiteData = () => siteData;
var siteLocaleDataSymbol = Symbol(
  ""
);
var useSiteLocaleData = () => {
  const siteLocaleData = inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var LAYOUT_NAME_DEFAULT = "Layout";
var LAYOUT_NAME_NOT_FOUND = "NotFound";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Resolve page data according to page key
   */
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 ?? pageDataEmpty;
  },
  /**
   * Resolve page frontmatter from page data
   */
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (page2, siteLocale) => [page2.title, siteLocale.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (page2) => page2.lang || "en",
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (page2, layouts) => {
    let layoutName;
    if (page2.path) {
      const frontmatterLayout = page2.frontmatter.layout;
      if (isString(frontmatterLayout)) {
        layoutName = frontmatterLayout;
      } else {
        layoutName = LAYOUT_NAME_DEFAULT;
      }
    } else {
      layoutName = LAYOUT_NAME_NOT_FOUND;
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, routePath),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      return isMounted.value ? (_b2 = (_a2 = ctx.slots).default) == null ? void 0 : _b2.call(_a2) : null;
    };
  }
});
var Content = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page2 = usePageData();
    const pageComponent = computed(
      () => pagesComponents[props.pageKey || page2.value.key]
    );
    return () => pageComponent.value ? (
      // use page component
      h$3(pageComponent.value)
    ) : (
      // fallback content
      h$3(
        "div",
        "404 Not Found"
      )
    );
  }
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  return `${"/spoony-z/"}${removeLeadingSlash(url)}`;
};
const hopeInject = "";
const clientConfig0 = {};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b2 = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b2[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new u32(b2[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j2 = b2[i2]; j2 < b2[i2 + 1]; ++j2) {
      r2[j2] = j2 - b2[i2] << 5 | i2;
    }
  }
  return [b2, r2];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0];
var rev = new u16(32768);
for (var i$2 = 0; i$2 < 32768; ++i$2) {
  var x$3 = (i$2 & 43690) >>> 1 | (i$2 & 21845) << 1;
  x$3 = (x$3 & 52428) >>> 2 | (x$3 & 13107) << 2;
  x$3 = (x$3 & 61680) >>> 4 | (x$3 & 3855) << 4;
  rev[i$2] = ((x$3 & 65280) >>> 8 | (x$3 & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le2 = new u16(mb);
  for (i2 = 0; i2 < mb; ++i2) {
    le2[i2] = le2[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le2[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le2[cd[i2] - 1]++] >>> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$2 = 0; i$2 < 144; ++i$2)
  flt[i$2] = 8;
for (var i$2 = 144; i$2 < 256; ++i$2)
  flt[i$2] = 9;
for (var i$2 = 256; i$2 < 280; ++i$2)
  flt[i$2] = 7;
for (var i$2 = 280; i$2 < 288; ++i$2)
  flt[i$2] = 8;
var fdt = new u8(32);
for (var i$2 = 0; i$2 < 32; ++i$2)
  fdt[i$2] = 5;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d2, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d2, p2) {
  var o2 = p2 / 8 | 0;
  return (d2[o2] | d2[o2 + 1] << 8 | d2[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (s2 == null || s2 < 0)
    s2 = 0;
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  var n2 = new (v2.BYTES_PER_ELEMENT == 2 ? u16 : v2.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e2 - s2);
  n2.set(v2.subarray(s2, e2));
  return n2;
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt)
    throw e2;
  return e2;
};
var inflt = function(dat, buf, st) {
  var sl = dat.length;
  if (!sl || st && st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf || st;
  var noSt = !st || st.i;
  if (!st)
    st = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type2 = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type2) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + l2);
        buf.set(dat.subarray(s2, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type2 == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type2 == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >>> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >>> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b2 = fleb[i2];
          add = bits(dat, pos, (1 << b2) - 1) + fl[i2];
          pos += b2;
        }
        var d2 = dm[bits16(dat, pos) & dms], dsym = d2 >>> 4;
        if (!d2)
          err(3);
        pos += d2 & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b2 = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b2) - 1, pos += b2;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var zlv = function(d2) {
  if ((d2[0] & 15) != 8 || d2[0] >>> 4 > 7 || (d2[0] << 8 | d2[1]) % 31)
    err(6, "invalid zlib data");
  if (d2[1] & 32)
    err(6, "invalid zlib data: preset dictionaries not supported");
};
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var te$1 = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
var dutf8 = function(d2) {
  for (var r2 = "", i2 = 0; ; ) {
    var c2 = d2[i2++];
    var eb = (c2 > 127) + (c2 > 223) + (c2 > 239);
    if (i2 + eb > d2.length)
      return [r2, slc(d2, i2 - 1)];
    if (!eb)
      r2 += String.fromCharCode(c2);
    else if (eb == 3) {
      c2 = ((c2 & 15) << 18 | (d2[i2++] & 63) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | c2 >> 10, 56320 | c2 & 1023);
    } else if (eb & 1)
      r2 += String.fromCharCode((c2 & 31) << 6 | d2[i2++] & 63);
    else
      r2 += String.fromCharCode((c2 & 15) << 12 | (d2[i2++] & 63) << 6 | d2[i2++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i2 = 0; i2 < str.length; ++i2)
      ar_1[i2] = str.charCodeAt(i2);
    return ar_1;
  }
  if (te$1)
    return te$1.encode(str);
  var l2 = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w2 = function(v2) {
    ar[ai++] = v2;
  };
  for (var i2 = 0; i2 < l2; ++i2) {
    if (ai + 5 > ar.length) {
      var n2 = new u8(ai + 8 + (l2 - i2 << 1));
      n2.set(ar);
      ar = n2;
    }
    var c2 = str.charCodeAt(i2);
    if (c2 < 128 || latin1)
      w2(c2);
    else if (c2 < 2048)
      w2(192 | c2 >> 6), w2(128 | c2 & 63);
    else if (c2 > 55295 && c2 < 57344)
      c2 = 65536 + (c2 & 1023 << 10) | str.charCodeAt(++i2) & 1023, w2(240 | c2 >> 18), w2(128 | c2 >> 12 & 63), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
    else
      w2(224 | c2 >> 12), w2(128 | c2 >> 6 & 63), w2(128 | c2 & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r2 = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r2 += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r2;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      err(8);
    return out;
  }
}
const c$4 = ({ name: e2 = "", color: n2 = "currentColor" }, { slots: t2 }) => {
  var o2;
  return h$3("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${e2} icon` }, (o2 = t2.default) == null ? void 0 : o2.call(t2));
};
c$4.displayName = "IconBase";
const I$2 = ({ size: e2 = 48, stroke: n2 = 4, wrapper: t2 = true, height: o2 = 2 * e2 }) => {
  const s2 = h$3("svg", { xmlns: "http://www.w3.org/2000/svg", width: e2, height: e2, preserveAspectRatio: "xMidYMid", viewBox: "25 25 50 50" }, [h$3("animateTransform", { attributeName: "transform", type: "rotate", dur: "2s", keyTimes: "0;1", repeatCount: "indefinite", values: "0;360" }), h$3("circle", { cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": n2, "stroke-linecap": "round" }, [h$3("animate", { attributeName: "stroke-dasharray", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "1,200;90,200;1,200" }), h$3("animate", { attributeName: "stroke-dashoffset", dur: "1.5s", keyTimes: "0;0.5;1", repeatCount: "indefinite", values: "0;-35px;-125px" })])]);
  return t2 ? h$3("div", { class: "loading-icon-wrapper", style: `display:flex;align-items:center;justify-content:center;height:${o2}px` }, s2) : s2;
};
I$2.displayName = "LoadingIcon";
const J$1 = (e2, { slots: n2 }) => {
  var t2;
  return ((t2 = n2.default) == null ? void 0 : t2.call(n2)) || null;
}, O$3 = () => h$3(c$4, { name: "github" }, () => h$3("path", { d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z" }));
O$3.displayName = "GitHubIcon";
const _$1 = () => h$3(c$4, { name: "gitlab" }, () => h$3("path", { d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z" }));
_$1.displayName = "GitLabIcon";
const k$2 = () => h$3(c$4, { name: "gitee" }, () => h$3("path", { d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z" }));
k$2.displayName = "GiteeIcon";
const S$4 = () => h$3(c$4, { name: "bitbucket" }, () => h$3("path", { d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z" }));
S$4.displayName = "BitbucketIcon";
const x$2 = () => h$3(c$4, { name: "source" }, () => h$3("path", { d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z" }));
x$2.displayName = "SourceIcon";
const m$4 = Array.isArray, X = (e2) => typeof e2 == "function", r$2 = (e2) => typeof e2 == "string";
var C$3 = (e2) => /^(https?:)?\/\//.test(e2), u$2 = (e2) => Object.prototype.toString.call(e2) === "[object Object]";
const Z = (e2, n2) => {
  const t2 = n2 ? n2._instance : getCurrentInstance();
  return u$2(t2 == null ? void 0 : t2.appContext.components) && (e2 in t2.appContext.components || camelize(e2) in t2.appContext.components || capitalize(camelize(e2)) in t2.appContext.components);
};
function ee(e2) {
  return e2;
}
function te(e2, n2 = true) {
  getCurrentInstance() ? onMounted(e2) : n2 ? e2() : nextTick(e2);
}
function ne(e2, n2 = false) {
  const t2 = ref(), o2 = () => t2.value = !!e2();
  return o2(), te(o2, n2), t2;
}
const z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, N$1 = "__vueuse_ssr_handlers__";
z[N$1] = z[N$1] || {};
var L$2;
(function(e2) {
  e2.UP = "UP", e2.RIGHT = "RIGHT", e2.DOWN = "DOWN", e2.LEFT = "LEFT", e2.NONE = "NONE";
})(L$2 || (L$2 = {}));
var oe = Object.defineProperty, M$1 = Object.getOwnPropertySymbols, se = Object.prototype.hasOwnProperty, ie = Object.prototype.propertyIsEnumerable, P$1 = (e2, n2, t2) => n2 in e2 ? oe(e2, n2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[n2] = t2, ae = (e2, n2) => {
  for (var t2 in n2 || (n2 = {}))
    se.call(n2, t2) && P$1(e2, t2, n2[t2]);
  if (M$1)
    for (var t2 of M$1(n2))
      ie.call(n2, t2) && P$1(e2, t2, n2[t2]);
  return e2;
};
const re = { easeInSine: [0.12, 0, 0.39, 0], easeOutSine: [0.61, 1, 0.88, 1], easeInOutSine: [0.37, 0, 0.63, 1], easeInQuad: [0.11, 0, 0.5, 0], easeOutQuad: [0.5, 1, 0.89, 1], easeInOutQuad: [0.45, 0, 0.55, 1], easeInCubic: [0.32, 0, 0.67, 0], easeOutCubic: [0.33, 1, 0.68, 1], easeInOutCubic: [0.65, 0, 0.35, 1], easeInQuart: [0.5, 0, 0.75, 0], easeOutQuart: [0.25, 1, 0.5, 1], easeInOutQuart: [0.76, 0, 0.24, 1], easeInQuint: [0.64, 0, 0.78, 0], easeOutQuint: [0.22, 1, 0.36, 1], easeInOutQuint: [0.83, 0, 0.17, 1], easeInExpo: [0.7, 0, 0.84, 0], easeOutExpo: [0.16, 1, 0.3, 1], easeInOutExpo: [0.87, 0, 0.13, 1], easeInCirc: [0.55, 0, 1, 0.45], easeOutCirc: [0, 0.55, 0.45, 1], easeInOutCirc: [0.85, 0, 0.15, 1], easeInBack: [0.36, 0, 0.66, -0.56], easeOutBack: [0.34, 1.56, 0.64, 1], easeInOutBack: [0.68, -0.6, 0.32, 1.6] };
ae({ linear: ee }, re);
const T$4 = () => ne(() => typeof window < "u" && window.navigator && "userAgent" in window.navigator), ce = () => {
  const e2 = T$4();
  return computed(() => e2.value && /\b(?:Android|iPhone)/i.test(navigator.userAgent));
}, le = (e2) => {
  const n2 = useRouteLocale();
  return computed(() => e2[n2.value]);
}, ge = (e2) => [/\((ipad);[-\w),; ]+apple/i, /applecoremedia\/[\w.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some((n2) => n2.test(e2)), ve = (e2) => [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i].some((n2) => n2.test(e2)), we = (e2) => [/(mac os x) ?([\w. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i].some((n2) => n2.test(e2)), ye = (e2 = "") => {
  if (e2) {
    if (typeof e2 == "number")
      return new Date(e2);
    const n2 = Date.parse(e2.toString());
    if (!Number.isNaN(n2))
      return new Date(n2);
  }
  return null;
}, Ee = (e2, n2) => {
  let t2 = 1;
  for (let o2 = 0; o2 < e2.length; o2++)
    t2 += e2.charCodeAt(o2), t2 += t2 << 10, t2 ^= t2 >> 6;
  return t2 += t2 << 3, t2 ^= t2 >> 11, t2 % n2;
}, A$1 = (e2, n2) => r$2(e2) && e2.startsWith(n2), Ie = (e2, n2) => r$2(e2) && e2.endsWith(n2), $$2 = Object.entries, h$2 = Object.keys, f$1 = (e2, ...n2) => {
  if (n2.length === 0)
    return e2;
  const t2 = n2.shift() || null;
  return t2 && $$2(t2).forEach(([o2, s2]) => {
    o2 === "__proto__" || o2 === "constructor" || (u$2(e2[o2]) && u$2(s2) ? f$1(e2[o2], s2) : m$4(s2) ? e2[o2] = [...s2] : u$2(s2) ? e2[o2] = { ...s2 } : e2[o2] = t2[o2]);
  }), f$1(e2, ...n2);
}, B$2 = (e2) => u$2(e2) && r$2(e2.name), ke = (e2, n2 = false) => e2 ? m$4(e2) ? e2.map((t2) => r$2(t2) ? { name: t2 } : B$2(t2) ? t2 : null).filter((t2) => t2 !== null) : r$2(e2) ? [{ name: e2 }] : B$2(e2) ? [e2] : (console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${n2 ? "" : "| false"} | undefined\`, but got`, e2), []) : [], g$2 = (e2, n2) => {
  if (e2) {
    if (m$4(e2) && e2.every(r$2))
      return e2;
    if (r$2(e2))
      return [e2];
    console.error(`Expect ${n2 || "value"} to be \`string[] | string | undefined\`, but got`, e2);
  }
  return [];
}, Se = (e2) => g$2(e2, "category"), xe = (e2) => g$2(e2, "tag"), ze = (e2) => A$1(e2, "/");
class Ne {
  constructor() {
    this.messageElements = {};
    const n2 = "message-container", t2 = document.getElementById(n2);
    t2 ? this.containerElement = t2 : (this.containerElement = document.createElement("div"), this.containerElement.id = n2, document.body.appendChild(this.containerElement));
  }
  pop(n2, t2 = 2e3) {
    const o2 = document.createElement("div"), s2 = Date.now();
    return o2.className = "message move-in", o2.innerHTML = n2, this.containerElement.appendChild(o2), this.messageElements[s2] = o2, t2 > 0 && setTimeout(() => {
      this.close(s2);
    }, t2), s2;
  }
  close(n2) {
    if (n2) {
      const t2 = this.messageElements[n2];
      t2.classList.remove("move-in"), t2.classList.add("move-out"), t2.addEventListener("animationend", () => {
        t2.remove(), delete this.messageElements[n2];
      });
    } else
      h$2(this.messageElements).forEach((t2) => this.close(Number(t2)));
  }
  destroy() {
    document.body.removeChild(this.containerElement);
  }
}
const H$3 = /#.*$/u, R$1 = (e2) => {
  const n2 = H$3.exec(e2);
  return n2 ? n2[0] : "";
}, b$2 = (e2) => decodeURI(e2).replace(H$3, "").replace(/(index)?\.(md|html)$/, ""), Le = (e2, n2) => {
  if (n2 === void 0)
    return false;
  const t2 = b$2(e2.path), o2 = b$2(n2), s2 = R$1(n2);
  return s2 ? s2 === e2.hash && (!o2 || t2 === o2) : t2 === o2;
};
const Te = (e2) => {
  const n2 = Buffer.from(e2, "base64").toString("binary");
  return strFromU8(unzlibSync(strToU8(n2, true)));
}, Ae = (e2) => C$3(e2) ? e2 : `https://github.com/${e2}`, $e = (e2) => !C$3(e2) || /github\.com/.test(e2) ? "GitHub" : /bitbucket\.org/.test(e2) ? "Bitbucket" : /gitlab\.com/.test(e2) ? "GitLab" : /gitee\.com/.test(e2) ? "Gitee" : null, j = (e2, ...n2) => {
  const t2 = e2.resolve(...n2), o2 = t2.matched[t2.matched.length - 1];
  if (!(o2 != null && o2.redirect))
    return t2;
  const { redirect: s2 } = o2, a2 = X(s2) ? s2(t2) : s2, l2 = r$2(a2) ? { path: a2 } : a2;
  return j(e2, { hash: t2.hash, query: t2.query, params: t2.params, ...l2 });
};
const badge = "";
const t$1 = ({ type: r2 = "info", text: e2 = "", vertical: i2 = "top", color: a2 }, { slots: l2 }) => {
  var o2;
  return h$3("span", { class: ["badge", r2, { diy: a2 }], style: { verticalAlign: i2, ...a2 ? { backgroundColor: a2 } : {} } }, e2 || ((o2 = l2.default) == null ? void 0 : o2.call(l2)));
};
t$1.displayName = "Badge";
const fontIcon = "";
var m$3 = defineComponent({ name: "FontIcon", props: { icon: { type: String, default: "" }, color: { type: String, default: "" }, size: { type: [String, Number], default: "" } }, setup(o2) {
  const c2 = computed(() => {
    const n2 = ["font-icon icon"], t2 = `${"iconfont icon-"}${o2.icon}`;
    return n2.push(t2), n2;
  }), r2 = computed(() => {
    const n2 = {};
    return o2.color && (n2.color = o2.color), o2.size && (n2["font-size"] = Number.isNaN(Number(o2.size)) ? o2.size : `${o2.size}px`), h$2(n2).length ? n2 : null;
  });
  return () => o2.icon ? h$3("span", { key: o2.icon, class: c2.value, style: r2.value, ...{} }) : null;
} });
const l$3 = () => h$3(c$4, { name: "back-to-top" }, () => [h$3("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), h$3("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
l$3.displayName = "BackToTopIcon";
const balloon = "";
const backToTop = "";
var T$3 = defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(t2) {
  const a2 = usePageFrontmatter(), e2 = le({ "/": { "backToTop": "返回顶部" } }), { y: r2 } = useWindowScroll(), l2 = computed(() => a2.value.backToTop !== false && r2.value > t2.threshold);
  return () => h$3(Transition, { name: "fade" }, () => l2.value ? h$3("button", { type: "button", class: "back-to-top", "aria-label": e2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } }, h$3(l$3)) : null);
} });
const srOnly = "";
const clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    if (!Z("Badge"))
      app.component("Badge", t$1);
    if (!Z("FontIcon"))
      app.component("FontIcon", m$3);
  },
  setup: () => {
    useStyleTag(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h$3(T$3, { threshold: 300 })
  ]
});
const clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
const autoCatalog = "";
var D$1 = defineComponent({ name: "AutoCatalog", props: { base: { type: String, default: "" }, level: { type: Number, default: 3 }, index: Boolean }, setup(c2, { slots: h2 }) {
  const f2 = le({ "/": { "title": "目录" } }), O2 = usePageData(), g2 = useRouter(), T2 = useSiteData(), v2 = (i2) => {
    const u2 = i2["I"];
    return typeof u2 > "u" || u2;
  }, E2 = () => {
    const i2 = c2.base || O2.value.path.replace(/\/[^/]+$/, "/"), u2 = g2.getRoutes(), p2 = [];
    return u2.filter(({ meta: l2, path: e2 }) => {
      if (!A$1(e2, i2) || e2 === i2)
        return false;
      if (i2 === "/") {
        const t2 = h$2(T2.value.locales).filter((n2) => n2 !== "/");
        if (e2 === "/404.html" || t2.some((n2) => A$1(e2, n2)))
          return false;
      }
      return (Ie(e2, ".html") && !Ie(e2, "/index.html") || Ie(e2, "/")) && v2(l2);
    }).map(({ path: l2, meta: e2 }) => {
      const t2 = l2.substring(i2.length).split("/").length;
      return { title: e2["t"] || "", icon: e2["i"], base: l2.replace(/\/[^/]+\/?$/, "/"), order: e2["O"] || null, level: Ie(l2, "/") ? t2 - 1 : t2, path: l2 };
    }).filter(({ title: l2, level: e2 }) => typeof l2 == "string" && l2 && e2 <= c2.level).sort(({ title: l2, level: e2, path: t2, order: n2 }, { title: r2, level: o2, path: d2, order: s2 }) => e2 - o2 || (Ie(t2, "/index.html") ? -1 : Ie(d2, "/index.html") ? 1 : n2 === null ? s2 === null ? l2.localeCompare(r2) : s2 : s2 === null ? n2 : n2 > 0 ? s2 > 0 ? n2 - s2 : -1 : s2 < 0 ? n2 - s2 : 1)).forEach((l2) => {
      var e2;
      const { base: t2, level: n2 } = l2;
      switch (n2) {
        case 1:
          p2.push(l2);
          break;
        case 2: {
          const r2 = p2.find((o2) => o2.path === t2);
          r2 && (r2.children ?? (r2.children = [])).push(l2);
          break;
        }
        default: {
          const r2 = p2.find((o2) => o2.path === t2.replace(/\/[^/]+\/$/, "/"));
          if (r2) {
            const o2 = (e2 = r2.children) == null ? void 0 : e2.find((d2) => d2.path === t2);
            o2 && (o2.children ?? (o2.children = [])).push(l2);
          }
        }
      }
    }), p2;
  }, b2 = computed(() => E2());
  return () => h$3("div", { class: "auto-catalog-wrapper" }, [h$3("h2", { class: "main-title" }, f2.value.title), ...b2.value.map(({ children: i2 = [], icon: u2, path: p2, title: l2 }, e2) => [h$3("h3", { id: l2, class: ["child-title", { "has-children": i2.length }] }, [h$3("a", { href: `#${l2}`, class: "header-anchor" }, "#"), h$3(RouterLink, { class: "catalog-title", to: p2 }, () => [c2.index ? `${e2 + 1}.` : null, u2 && h2.icon ? h2.icon({ icon: u2 }) : null, l2 || "Unknown"])]), i2.length ? h$3("ul", { class: "child-catalog-wrapper" }, i2.map(({ children: t2 = [], icon: n2, path: r2, title: o2 }, d2) => h$3("li", { class: "child-catalog-item" }, [h$3("div", { class: ["sub-title", { "has-children": t2.length }] }, [h$3("a", { href: `#${o2}`, class: "header-anchor" }, "#"), h$3(RouterLink, { class: "catalog-title", to: r2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}` : null, n2 && h2.icon ? h2.icon({ icon: n2 }) : null, o2 || "Unknown"])]), t2.length ? h$3("div", { class: "sub-catalog-wrapper" }, t2.map(({ icon: s2, path: A2, title: L2 }, $2) => h$3(RouterLink, { class: "sub-catalog-item", to: A2 }, () => [c2.index ? `${e2 + 1}.${d2 + 1}.${$2 + 1}` : null, s2 && h2.icon ? h2.icon({ icon: s2 }) : null, L2 || "Unknown"]))) : null]))) : null])]);
} }), K$1 = defineClientConfig({ enhance: ({ app: c2 }) => {
  Z("AutoCatalog", c2) || c2.component("AutoCatalog", (h2) => h$3(D$1, h2, { icon: ({ icon: f2 }) => h$3(resolveComponent("HopeIcon"), { icon: f2 }) }));
} });
const vars$1 = "";
const externalLinkIcon = "";
const svg = h$3("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  h$3("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  h$3("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = computed(() => props.locales[routeLocale.value] ?? {
      openInNewWindow: "open in new window"
    });
    return () => h$3("span", [
      svg,
      h$3("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
const clientConfig4 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", h$3(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp = (n2, min, max2) => {
  if (n2 < min)
    return min;
  if (n2 > max2)
    return max2;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
const vars = "";
const nprogress = "";
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
const clientConfig5 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse('{"encrypt":{"config":{"/learning-notes/java/primary/总结.html":["$2a$10$bTtUIWOpUz3pi8ZujXQOjOWhIGo/K99WQ0SUBHqy4FFmoat9SINyO"],"/guide/2023计划表.html":["$2a$10$sLfOr9WEntq9IcvqxFXFZOvn16AMPiXm3gAqM2I1V62.7KWw6DDBy"]}},"themeColor":{"blue":"#2196f3","red":"#f26d6d","green":"#3eaf7c","orange":"#fb9b5f"},"author":{"name":"SOBER","url":"https://github.com/spoony-Z"},"fullscreen":true,"pure":false,"navbarLayout":{"start":["Brand"],"center":[],"end":["Links","Language","Repo","Outlook","Search"]},"logo":"/logo2.png","repo":"https://github.com/spoony-Z","docsDir":"docs","blog":{"name":"SOBER","description":"<div>168网校前端开发</div>","avatar":"/logo2.png","intro":"/guide/","sidebarDisplay":"none","timeline":"SOBER","articlePerPage":8,"articleInfo":["Author","Original","Date","PageView","Category","Tag","ReadingTime","Word"],"medias":{"Gitee":"https://gitee.com/spoony_Z","GitHub":"https://github.com/spoony-Z","Gmail":"mailto:info@example.com","Wechat":"https://example.com"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"vue模板","icon":"edit","prefix":"/vue-template-list/","children":[{"text":"fantastic-admin","icon":"edit","link":"fantastic-admin"},{"text":"gin-vue-admin","icon":"edit","link":"gin-vue-admin"},{"text":"naive-ui-admin","icon":"edit","link":"naive-ui-admin"},{"text":"soybean-admin","icon":"edit","link":"soybean-admin"},{"text":"vue-admin-better","icon":"edit","link":"vue-admin-better"},{"text":"vue-admin-box","icon":"edit","link":"vue-admin-box"},{"text":"vue-element-admin","icon":"edit","link":"vue-element-admin"},{"text":"vue-next-admin","icon":"edit","link":"vue-next-admin"},{"text":"vue-pure-admin","icon":"edit","link":"vue-pure-admin"},{"text":"vue-vben-admin","icon":"edit","link":"vue-vben-admin"},{"text":"vue3-admin-element-template","icon":"edit","link":"vue3-admin-element-template"},{"text":"vue3-antd-admin","icon":"edit","link":"vue3-antd-admin"},{"text":"vue3-composition-admin","icon":"edit","link":"vue3-composition-admin"}]},{"text":"笔记系列","icon":"edit","prefix":"/","children":[{"text":"学习笔记","icon":"edit","prefix":"learning-notes/","children":["java","TypeScript","vue"]},{"text":"开发笔记","icon":"edit","prefix":"development-notes/","children":["Javascript","recat","uniapp","vue"]}]},{"text":"软件工具","icon":"edit","prefix":"/","children":[{"text":"软件安装","icon":"edit","prefix":"software-installation/","children":["IDEA安装","IDEA的使用","MySql安装教程"]},{"text":"npm工具","icon":"edit","prefix":"npm-tool/","children":["rimraf"]}]},{"text":"PPT笔记","icon":"edit","link":"/zh/学习笔记"}],"sidebar":{"/learning-notes/java/":["","intro",{"text":"java初级","icon":"creative","prefix":"primary/","link":"primary/","children":"structure"},{"text":"java中级","icon":"note","prefix":"intermediate/","link":"intermediate/","children":"structure"},{"text":"java高级","icon":"note","prefix":"senior/","link":"senior/","children":"structure"},"sumUp"],"/learning-notes/vue/":[{"text":"vue学习笔记","icon":"creative","children":"structure"}],"/development-notes/vue/":[{"text":"vue开发笔记","icon":"creative","children":"structure"}],"/development-notes/Javascript/":[{"text":"Javascript开发笔记","icon":"creative","children":"structure"}],"/development-notes/uniapp/":[{"text":"uniapp开发笔记","icon":"creative","children":"structure"}],"npm-tool":"structure","software-installation":"structure","vue-template-list":"structure","/learning-notes/TypeScript/":["",{"text":"","children":"structure"}]},"footer":"SOBER @ SPOONY-Z","displayFooter":true}}}');
const themeData = ref(themeData$1);
const useThemeData$1 = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a2;
  return {
    ...theme,
    ...(_a2 = theme.locales) == null ? void 0 : _a2[routeLocale]
  };
};
const clientConfig6 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const button = "";
const S$3 = 800, u$1 = 2e3, M = { "/": { "copy": "复制代码", "copied": "已复制", "hint": "复制成功" } }, n$1 = false, P = ['.theme-hope-content div[class*="language-"] pre'], m$2 = false;
const l$2 = /* @__PURE__ */ new Map(), T$2 = () => {
  const { copy: C2 } = useClipboard({ legacy: true }), a2 = le(M), g2 = usePageData(), i2 = ce();
  const y2 = (o2) => {
    if (!o2.hasAttribute("copy-code-registered")) {
      const e2 = document.createElement("button");
      e2.type = "button", e2.classList.add("copy-code-button"), e2.innerHTML = '<div class="copy-icon" />', e2.setAttribute("aria-label", a2.value.copy), e2.setAttribute("data-copied", a2.value.copied), o2.parentElement && o2.parentElement.insertBefore(e2, o2), o2.setAttribute("copy-code-registered", "");
    }
  }, p2 = () => nextTick().then(() => new Promise((o2) => {
    setTimeout(() => {
      P.forEach((e2) => {
        document.querySelectorAll(e2).forEach(y2);
      }), o2();
    }, S$3);
  })), d2 = (o2, e2, t2) => {
    let { innerText: s2 = "" } = e2;
    /language-(shellscript|shell|bash|sh|zsh)/.test(o2.classList.toString()) && (s2 = s2.replace(/^ *(\$|>) /gm, "")), C2(s2).then(() => {
      t2.classList.add("copied"), clearTimeout(l$2.get(t2));
      const c2 = setTimeout(() => {
        t2.classList.remove("copied"), t2.blur(), l$2.delete(t2);
      }, u$1);
      if (l$2.set(t2, c2), n$1)
        ;
    });
  };
  onMounted(() => {
    (!i2.value || m$2) && p2(), useEventListener("click", (o2) => {
      const e2 = o2.target;
      if (e2.matches('div[class*="language-"] > button.copy')) {
        const t2 = e2.parentElement, s2 = e2.nextElementSibling;
        s2 && d2(t2, s2, e2);
      } else if (e2.matches('div[class*="language-"] div.copy-icon')) {
        const t2 = e2.parentElement, s2 = t2.parentElement, c2 = t2.nextElementSibling;
        c2 && d2(s2, c2, t2);
      }
    }), watch(() => g2.value.path, () => {
      (!i2.value || m$2) && p2();
    });
  });
};
var Y$2 = defineClientConfig({ setup: () => {
  T$2();
} });
const chart = "";
const parseChartConfig = (config, type) => {
  if (type === "json")
    return JSON.parse(config);
  const exports = {}, module = { exports };
  return eval(config), module.exports;
};
var ChartJS = defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const r2 = ref(), o2 = ref(), t2 = ref(true);
  return onMounted(async () => {
    const [{ default: n2 }] = await Promise.all([import("chart.js/auto"), new Promise((s2) => setTimeout(s2, 800))]);
    n2.defaults.maintainAspectRatio = false;
    const a2 = parseChartConfig(Te(e2.config), e2.type), i2 = o2.value.getContext("2d");
    new n2(i2, a2), t2.value = false;
  }), () => [e2.title ? h$3("div", { class: "chart-title" }, decodeURIComponent(e2.title)) : null, t2.value ? h$3(I$2, { class: "chart-loading", height: 192 }) : null, h$3("div", { ref: r2, class: "chart-wrapper", id: e2.id, style: { display: t2.value ? "none" : "block" } }, h$3("canvas", { ref: o2, height: 400 }))];
} });
const codeTabs = "";
const o$2 = useStorage("VUEPRESS_CODE_TAB_STORE", {});
var S$2 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(e2, { slots: v2 }) {
  const l2 = ref(e2.active), u2 = ref([]), c2 = () => {
    if (e2.tabId) {
      const { title: t2, id: a2 = t2 } = e2.data[l2.value];
      o$2.value[e2.tabId] = a2;
    }
  }, b2 = (t2 = l2.value) => {
    l2.value = t2 < u2.value.length - 1 ? t2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (t2 = l2.value) => {
    l2.value = t2 > 0 ? t2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p2 = (t2, a2) => {
    if (t2.key === " " || t2.key === "Enter" ? (t2.preventDefault(), l2.value = a2) : t2.key === "ArrowRight" ? (t2.preventDefault(), b2()) : t2.key === "ArrowLeft" && (t2.preventDefault(), f2()), e2.tabId) {
      const { title: d2, id: i2 = d2 } = e2.data[l2.value];
      o$2.value[e2.tabId] = i2;
    }
  }, y2 = () => {
    if (e2.tabId) {
      const t2 = e2.data.findIndex(({ title: a2, id: d2 = a2 }) => o$2.value[e2.tabId] === d2);
      if (t2 !== -1)
        return t2;
    }
    return e2.active;
  };
  return onMounted(() => {
    l2.value = y2(), watch(() => o$2.value[e2.tabId], (t2, a2) => {
      if (e2.tabId && t2 !== a2) {
        const d2 = e2.data.findIndex(({ title: i2, id: r2 = i2 }) => r2 === t2);
        d2 !== -1 && (l2.value = d2);
      }
    });
  }), () => e2.data.length ? h$3("div", { class: "code-tabs" }, [h$3("div", { class: "code-tabs-nav", role: "tablist" }, e2.data.map(({ title: t2 }, a2) => {
    const d2 = a2 === l2.value;
    return h$3("button", { type: "button", ref: (i2) => {
      i2 && (u2.value[a2] = i2);
    }, class: ["code-tabs-nav-tab", { active: d2 }], role: "tab", "aria-controls": `codetab-${e2.id}-${a2}`, "aria-selected": d2, onClick: () => {
      l2.value = a2, c2();
    }, onKeydown: (i2) => p2(i2, a2) }, t2);
  })), e2.data.map(({ title: t2, id: a2 = t2 }, d2) => {
    var i2;
    const r2 = d2 === l2.value;
    return h$3("div", { class: ["code-tab", { active: r2 }], id: `codetab-${e2.id}-${d2}`, role: "tabpanel", "aria-expanded": r2 }, (i2 = v2[`tab${d2}`]) == null ? void 0 : i2.call(v2, { title: t2, value: a2, isActive: r2 }));
  })]) : null;
} });
const codeGroup = "";
const c$3 = ({ active: p2 = false }, { slots: u2 }) => {
  var e2;
  return h$3("div", { class: ["code-group-item", { active: p2 }], "aria-selected": p2 }, (e2 = u2.default) == null ? void 0 : e2.call(u2));
};
c$3.displayName = "CodeGroupItem";
const h$1 = defineComponent({ name: "CodeGroup", setup(p2, { slots: u2 }) {
  const e2 = ref(-1), t2 = ref([]);
  const i2 = (a2 = e2.value) => {
    e2.value = a2 < t2.value.length - 1 ? a2 + 1 : 0, t2.value[e2.value].focus();
  }, f2 = (a2 = e2.value) => {
    e2.value = a2 > 0 ? a2 - 1 : t2.value.length - 1, t2.value[e2.value].focus();
  }, m2 = (a2, o2) => {
    a2.key === " " || a2.key === "Enter" ? (a2.preventDefault(), e2.value = o2) : a2.key === "ArrowRight" ? (a2.preventDefault(), i2(o2)) : a2.key === "ArrowLeft" && (a2.preventDefault(), f2(o2));
  };
  return () => {
    var a2;
    const o2 = (((a2 = u2.default) == null ? void 0 : a2.call(u2)) || []).filter((l2) => l2.type.name === "CodeGroupItem").map((l2) => (l2.props === null && (l2.props = {}), l2));
    return o2.length === 0 ? null : (e2.value < 0 || e2.value > o2.length - 1 ? (e2.value = o2.findIndex((l2) => "active" in l2.props), e2.value === -1 && (e2.value = 0)) : o2.forEach((l2, r2) => {
      l2.props.active = r2 === e2.value;
    }), h$3("div", { class: "code-group" }, [h$3("div", { class: "code-group-nav" }, o2.map((l2, r2) => {
      const s2 = r2 === e2.value;
      return h$3("button", { type: "button", ref: (v2) => {
        v2 && (t2.value[r2] = v2);
      }, class: ["code-group-nav-tab", { active: s2 }], "aria-pressed": s2, "aria-expanded": s2, onClick: () => {
        e2.value = r2;
      }, onKeydown: (v2) => m2(v2, r2) }, l2.props.title);
    })), o2]));
  };
} });
const index$2 = "";
const q$2 = () => h$3(c$4, { name: "back" }, () => h$3("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), a$1 = () => h$3(c$4, { name: "home" }, () => h$3("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" })), o$1 = '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', v$4 = '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', l$1 = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';
const codeDemo = "";
const L$1 = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, E = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, B$1 = (e2, s2, t2) => {
  const n2 = document.createElement(e2);
  return isPlainObject(s2) && h$2(s2).forEach((a2) => {
    if (a2.indexOf("data"))
      n2[a2] = s2[a2];
    else {
      const o2 = a2.replace("data", "");
      n2.dataset[o2] = s2[a2];
    }
  }), t2 && t2.forEach((a2) => {
    n2.appendChild(a2);
  }), n2;
}, w = (e2) => ({ ...L$1, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...L$1.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...L$1.cssLib || [], ...e2.cssLib || []])) }), m$1 = (e2, s2) => {
  if (e2[s2] !== void 0)
    return e2[s2];
  const t2 = new Promise((n2) => {
    var a2;
    const o2 = document.createElement("script");
    o2.src = s2, (a2 = document.querySelector("body")) == null || a2.appendChild(o2), o2.onload = () => {
      n2();
    };
  });
  return e2[s2] = t2, t2;
}, k$1 = (e2, s2) => {
  if (s2.css && Array.from(e2.childNodes).every((t2) => t2.nodeName !== "STYLE")) {
    const t2 = B$1("style", { innerHTML: s2.css });
    e2.appendChild(t2);
  }
}, V$1 = (e2, s2, t2) => {
  const n2 = t2.getScript();
  if (n2 && Array.from(s2.childNodes).every((a2) => a2.nodeName !== "SCRIPT")) {
    const a2 = document.createElement("script");
    a2.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e2} .code-demo-container').shadowRoot;
${n2}}`)), s2.appendChild(a2);
  }
}, H$2 = (e2) => {
  const s2 = h$2(e2), t2 = { html: [], js: [], css: [], isLegal: false };
  return ["html", "js", "css"].forEach((n2) => {
    const a2 = s2.filter((o2) => E[n2].types.includes(o2));
    if (a2.length) {
      const o2 = a2[0];
      t2[n2] = [e2[o2].replace(/^\n|\n$/g, ""), E[n2].map[o2] || o2];
    }
  }), t2.isLegal = (!t2.html.length || t2.html[1] === "none") && (!t2.js.length || t2.js[1] === "none") && (!t2.css.length || t2.css[1] === "none"), t2;
}, $$1 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), x$1 = (e2) => `<div id="app">
${$$1(e2)}
</div>`, I$1 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, J = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), O$2 = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, q$1 = (e2, s2) => {
  const t2 = w(s2), n2 = e2.js[0] || "";
  return { ...t2, html: $$1(e2.html[0] || ""), js: n2, css: e2.css[0] || "", isLegal: e2.isLegal, getScript: () => {
    var a2;
    return t2.useBabel ? ((a2 = window.Babel.transform(n2, { presets: ["es2015"] })) == null ? void 0 : a2.code) || "" : n2;
  } };
}, F$1 = (e2, s2) => {
  const t2 = w(s2), n2 = e2.html[0] || "", a2 = /<template>([\s\S]+)<\/template>/u.exec(n2), o2 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(n2), d2 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(n2), u2 = a2 ? a2[1].replace(/^\n|\n$/g, "") : "", [i2 = "", c2 = ""] = o2 ? [o2[4].replace(/^\n|\n$/g, ""), o2[3]] : [], [l2 = "", h2 = ""] = d2 ? [d2[4].replace(/^\n|\n$/g, ""), d2[3]] : [], f2 = c2 === "" && (h2 === "" || h2 === "css");
  return { ...t2, html: x$1(u2), js: J(i2), css: l2, isLegal: f2, jsLib: [t2.vue, ...t2.jsLib], getScript: () => {
    var y2, p2;
    const g2 = s2.useBabel ? ((p2 = (y2 = window.Babel) == null ? void 0 : y2.transform(i2, { presets: ["es2015"] })) == null ? void 0 : p2.code) || "" : i2.replace(/export\s+default/u, "return");
    return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${O$2(g2)};appOptions.template=\`${u2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
  } };
}, G = (e2, s2) => {
  const t2 = w(s2);
  return { ...t2, html: x$1(""), js: I$1(e2.js[0] || ""), css: e2.css[0] || (e2.js[0] ? e2.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e2.isLegal, jsLib: [t2.react, t2.reactDOM, ...t2.jsLib], jsx: true, getScript: () => {
    var n2, a2;
    const o2 = ((a2 = (n2 = window.Babel) == null ? void 0 : n2.transform(e2.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : a2.code) || "";
    return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${O$2(o2)}))`;
  } };
}, v$3 = {}, Y$1 = (e2) => Promise.all([m$1(v$3, e2.babel), m$1(v$3, e2.react), m$1(v$3, e2.reactDOM)]), K = (e2) => {
  const s2 = [m$1(v$3, e2.vue)];
  return e2.useBabel && s2.push(m$1(v$3, e2.babel)), Promise.all(s2);
}, U = (e2) => e2.useBabel ? m$1(v$3, e2.babel) : Promise.resolve();
var W$1 = defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e2, { slots: s2 }) {
  const [t2, n2] = useToggle(false), a2 = ref(), o2 = ref(), d2 = ref("0"), u2 = ref(false), i2 = computed(() => JSON.parse(e2.config ? Te(e2.config) : "{}")), c2 = computed(() => {
    const p2 = JSON.parse(Te(e2.code));
    return H$2(p2);
  }), l2 = computed(() => e2.type === "react" ? G(c2.value, i2.value) : e2.type === "vue" ? F$1(c2.value, i2.value) : q$1(c2.value, i2.value)), h2 = computed(() => l2.value.isLegal), f2 = (p2 = false) => {
    const g2 = a2.value.attachShadow({ mode: "open" }), S2 = document.createElement("div");
    S2.classList.add("code-demo-app"), g2.appendChild(S2), h2.value ? (p2 && (S2.innerHTML = l2.value.html), k$1(g2, l2.value), V$1(e2.id, g2, l2.value), d2.value = "0") : d2.value = "auto", u2.value = true;
  }, y2 = () => {
    switch (e2.type) {
      case "react":
        return Y$1(l2.value).then(() => f2());
      case "vue":
        return K(l2.value).then(() => f2());
      default:
        return U(l2.value).then(() => f2(true));
    }
  };
  return onMounted(() => {
    setTimeout(() => {
      y2();
    }, 800);
  }), () => {
    var p2;
    return h$3("div", { class: "code-demo-wrapper", id: e2.id }, [h$3("div", { class: "code-demo-header" }, [l2.value.isLegal ? h$3("button", { type: "button", title: "toggle", "aria-hidden": true, class: ["toggle-button", t2.value ? "down" : "end"], onClick: () => {
      d2.value = t2.value ? "0" : `${o2.value.clientHeight + 13.8}px`, n2();
    } }) : null, e2.title ? h$3("span", { class: "title" }, decodeURIComponent(e2.title)) : null, l2.value.isLegal && l2.value.jsfiddle !== false ? h$3("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [h$3("input", { type: "hidden", name: "html", value: l2.value.html }), h$3("input", { type: "hidden", name: "js", value: l2.value.js }), h$3("input", { type: "hidden", name: "css", value: l2.value.css }), h$3("input", { type: "hidden", name: "wrap", value: "1" }), h$3("input", { type: "hidden", name: "panel_js", value: "3" }), h$3("input", { type: "hidden", name: "resources", value: [...l2.value.cssLib, ...l2.value.jsLib].join(",") }), h$3("button", { type: "submit", class: "jsfiddle-button", innerHTML: v$4, "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, !l2.value.isLegal || l2.value.codepen !== false ? h$3("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [h$3("input", { type: "hidden", name: "data", value: JSON.stringify({ html: l2.value.html, js: l2.value.js, css: l2.value.css, js_external: l2.value.jsLib.join(";"), css_external: l2.value.cssLib.join(";"), layout: l2.value.codepenLayout, html_pre_processor: c2.value ? c2.value.html[1] : "none", js_pre_processor: c2.value ? c2.value.js[1] : l2.value.jsx ? "babel" : "none", css_pre_processor: c2.value ? c2.value.css[1] : "none", editors: l2.value.codepenEditors }) }), h$3("button", { type: "submit", innerHTML: o$1, class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })]) : null]), u2.value ? null : h$3(I$2, { class: "code-demo-loading" }), h$3("div", { ref: a2, class: "code-demo-container", style: { display: h2.value && u2.value ? "block" : "none" } }), h$3("div", { class: "code-demo-code-wrapper", style: { height: d2.value } }, h$3("div", { ref: o2, class: "code-demo-codes" }, (p2 = s2.default) == null ? void 0 : p2.call(s2)))]);
  };
} });
const echarts = "";
const parseEChartsConfig = (config, type) => {
  if (type === "js") {
    const exports = {}, module = { exports };
    return eval(config), module.exports;
  }
  return JSON.parse(config);
};
var ECharts = defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(t2) {
  const o2 = ref();
  let e2;
  const r2 = ref(true);
  return useEventListener("resize", useDebounceFn(() => e2 == null ? void 0 : e2.resize(), 100)), onMounted(() => {
    Promise.all([import("echarts"), new Promise((n2) => setTimeout(n2, 800))]).then(([n2]) => {
      const i2 = parseEChartsConfig(Te(t2.config), t2.type);
      e2 = n2.init(o2.value), e2.setOption(i2), r2.value = false;
    });
  }), onUnmounted(() => {
    e2 == null || e2.dispose();
  }), () => [t2.title ? h$3("div", { class: "echarts-title" }, decodeURIComponent(t2.title)) : null, h$3("div", { class: "echarts-wrapper" }, [h$3("div", { ref: o2, class: "echarts-container", id: t2.id }), r2.value ? h$3(I$2, { class: "echarts-loading", height: 360 }) : null])];
} });
const figure = "";
const flowchart = "";
var f = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, F = { ...f, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, b$1 = { ...f, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, y$1 = { ...f, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, s = { ant: F, vue: y$1, pie: b$1 }, g$1 = defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(l2) {
  let o2 = null;
  const p2 = ref(), n2 = ref(true), t2 = ref(1), r2 = computed(() => s[l2.preset] || (console.warn(`[md-enhance:flowchart] Unknown preset: ${l2.preset}`), s.vue)), c2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return onMounted(() => {
    Promise.all([import("flowchart.ts"), new Promise((e2) => setTimeout(e2, 800))]).then(([{ parse: e2 }]) => {
      o2 = e2(Te(l2.code)), t2.value = c2(window.innerWidth), n2.value = false, o2.draw(l2.id, { ...r2.value, scale: t2.value });
    }), useEventListener("resize", useDebounceFn(() => {
      if (o2) {
        const e2 = c2(window.innerWidth);
        t2.value !== e2 && (t2.value = e2, o2.draw(l2.id, { ...r2.value, scale: e2 }));
      }
    }, 100));
  }), () => [n2.value ? h$3(I$2, { class: "flowchart-loading", height: 192 }) : null, h$3("div", { ref: p2, class: ["flowchart-wrapper", l2.preset], id: l2.id, style: { display: n2.value ? "none" : "block" } })];
} });
const footnote = "";
const imageMark = "";
const mermaid = "";
const b = (e2) => ({ dark: e2, background: e2 ? "#1e1e1e" : "#fff", primaryColor: e2 ? "#389d70" : "#4abf8a", primaryBorderColor: e2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: e2 ? "#fff" : "#000", secondaryTextColor: e2 ? "#ddd" : "#333", tertiaryColor: e2 ? "#282828" : "#efeef4", tertiaryBorderColor: e2 ? "#bbb" : "#242424", tertiaryTextColor: e2 ? "#ddd" : "#333", noteBkgColor: e2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: e2 ? "#f6d365" : "#333", lineColor: e2 ? "#d3d3d3" : "#333", textColor: e2 ? "#fff" : "#242424", mainBkg: e2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: e2 ? "#389d70" : "#4abf8a", nodeTextColor: e2 ? "#fff" : "#242424", signalTextColor: e2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: e2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" });
var T$1 = defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(e2) {
  const i2 = ref(), a2 = ref(""), t2 = ref(false), n2 = computed(() => Te(e2.code)), f2 = async () => Promise.all([import("mermaid"), new Promise((o2) => setTimeout(o2, 800))]).then(async ([{ default: o2 }]) => {
    const r2 = { useMaxWidth: false };
    o2.initialize({ theme: "base", themeVariables: b(t2.value), flowchart: r2, sequence: r2, journey: r2, gantt: r2, er: r2, pie: r2, ...{}, startOnLoad: false }), a2.value = (await o2.render(e2.id, n2.value)).svg;
  });
  return onMounted(() => {
    const o2 = document.documentElement, r2 = () => o2.classList.contains("dark") || o2.getAttribute("data-theme") === "dark";
    t2.value = r2(), f2(), useMutationObserver(o2, () => {
      t2.value = r2();
    }, { attributeFilter: ["class", "data-theme"], attributes: true }), watch(t2, () => f2());
  }), () => h$3("div", { ref: i2, class: "mermaid-wrapper" }, a2.value ? h$3("div", { class: "mermaid-content", innerHTML: a2.value }) : h$3(I$2, { class: "mermaid-loading", height: 96 }));
} });
const o = () => import("reveal.js/plugin/highlight/highlight.esm.js"), t = () => import("reveal.js/plugin/markdown/markdown.esm.js"), e$1 = () => import("reveal.js/plugin/math/math.esm.js"), r$1 = () => import("reveal.js/plugin/notes/notes.esm.js"), a = () => import("reveal.js/dist/reveal.esm.js"), i$1 = () => import("reveal.js/plugin/search/search.esm.js"), c$2 = () => import("reveal.js/plugin/zoom/zoom.esm.js");
const useReveal = () => [a(), t(), o(), e$1(), i$1(), r$1(), c$2()];
const index$1 = "";
const leagueGothic = "";
const sourceSansPro = "";
var S$1 = defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, code: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(r2) {
  const t2 = usePageFrontmatter(), s2 = ref(""), u2 = ref(true), d2 = ref();
  let i2 = null;
  const m2 = async (e2) => {
    const p2 = [new Promise((o2) => setTimeout(o2, 800)), ...useReveal()], [, c2, ...v2] = await Promise.all(p2), n2 = new c2.default(e2, { plugins: v2.map(({ default: o2 }) => o2) });
    return await n2.initialize({ backgroundTransition: "slide", hash: t2.value.layout === "Slide", mouseWheel: t2.value.layout === "Slide", transition: "slide", slideNumber: true, ...{}, ...t2.value.reveal || {}, embedded: t2.value.layout !== "Slide" }), n2.configure({ backgroundTransition: "slide" }), n2;
  };
  return onMounted(async () => {
    const e2 = d2.value;
    e2 && (s2.value = Te(r2.code), e2.setAttribute("id", r2.id), e2.setAttribute("data-theme", r2.theme), i2 = await m2(e2), u2.value = false);
  }), onUnmounted(() => {
    i2 == null || i2.destroy();
  }), () => h$3("div", { class: "presentation-wrapper" }, [h$3("div", { ref: d2, class: ["reveal", "reveal-viewport"] }, h$3("div", { class: "slides", innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${s2.value}<\/script></section>` })), u2.value ? h$3(I$2, { class: "reveal-loading", height: 400 }) : null]);
} });
const playground = "";
var i = defineComponent({ name: "Playground", props: { title: { type: String, default: "" }, link: { type: String, required: true } }, setup(r2) {
  return () => [h$3("div", { class: "playground-wrapper" }, [h$3("div", { class: "title-wrapper" }, [r2.title ? h$3("div", { class: "title" }, decodeURIComponent(r2.title)) : null, h$3("div", { class: "actions" }, [h$3("a", { class: "action", href: decodeURIComponent(r2.link), target: "_blank", innerHTML: l$1 })])]), h$3("div", { class: "playground-container" }, h$3("iframe", { src: decodeURIComponent(r2.link) }))])];
} });
const tabs = "";
const v$2 = useStorage("VUEPRESS_TAB_STORE", {});
var S = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, id: { type: String, required: true }, tabId: { type: String, default: "" } }, setup(a2, { slots: o2 }) {
  const l2 = ref(a2.active), u2 = ref([]), s2 = () => {
    if (a2.tabId) {
      const { title: t2, id: e2 = t2 } = a2.data[l2.value];
      v$2.value[a2.tabId] = e2;
    }
  }, b2 = (t2 = l2.value) => {
    l2.value = t2 < u2.value.length - 1 ? t2 + 1 : 0, u2.value[l2.value].focus();
  }, f2 = (t2 = l2.value) => {
    l2.value = t2 > 0 ? t2 - 1 : u2.value.length - 1, u2.value[l2.value].focus();
  }, p2 = (t2, e2) => {
    t2.key === " " || t2.key === "Enter" ? (t2.preventDefault(), l2.value = e2) : t2.key === "ArrowRight" ? (t2.preventDefault(), b2()) : t2.key === "ArrowLeft" && (t2.preventDefault(), f2()), s2();
  }, m2 = () => {
    if (a2.tabId) {
      const t2 = a2.data.findIndex(({ title: e2, id: i2 = e2 }) => v$2.value[a2.tabId] === i2);
      if (t2 !== -1)
        return t2;
    }
    return a2.active;
  };
  return onMounted(() => {
    l2.value = m2(), watch(() => v$2.value[a2.tabId], (t2, e2) => {
      if (a2.tabId && t2 !== e2) {
        const i2 = a2.data.findIndex(({ title: r2, id: n2 = r2 }) => n2 === t2);
        i2 !== -1 && (l2.value = i2);
      }
    });
  }), () => a2.data.length ? h$3("div", { class: "tab-list" }, [h$3("div", { class: "tab-list-nav", role: "tablist" }, a2.data.map(({ title: t2 }, e2) => {
    const i2 = e2 === l2.value;
    return h$3("button", { type: "button", ref: (r2) => {
      r2 && (u2.value[e2] = r2);
    }, class: ["tab-list-nav-item", { active: i2 }], role: "tab", "aria-controls": `tab-${a2.id}-${e2}`, "aria-selected": i2, onClick: () => {
      l2.value = e2, s2();
    }, onKeydown: (r2) => p2(r2, e2) }, t2);
  })), a2.data.map(({ title: t2, id: e2 = t2 }, i2) => {
    var r2;
    const n2 = i2 === l2.value;
    return h$3("div", { class: ["tab-item", { active: n2 }], id: `tab-${a2.id}-${i2}`, role: "tabpanel", "aria-expanded": n2 }, (r2 = o2[`tab${i2}`]) == null ? void 0 : r2.call(o2, { title: t2, value: e2, isActive: n2 }));
  })]) : null;
} });
const tasklist = "";
const katex_min = "";
const katex = "";
const clientConfig8 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", S$2);
    if (!Z("CodeGroup", app))
      app.component("CodeGroup", h$1);
    if (!Z("CodeGroupItem", app))
      app.component("CodeGroupItem", c$3);
    app.component("CodeDemo", W$1);
    app.component("ECharts", ECharts);
    app.component("FlowChart", g$1);
    app.component("Mermaid", T$1);
    app.component("Presentation", S$1);
    app.component("Playground", i);
    app.component("Tabs", S);
    app.component("VuePlayground", defineAsyncComponent(() => import("./assets/VuePlayground-3bdc0e0d.js")));
  }
});
const HopeIcon = (props) => {
  const { icon = "" } = props;
  return isLinkHttp(icon) ? h$3("img", { class: "icon", src: icon, "no-view": "" }) : ze(icon) ? h$3("img", { class: "icon", src: withBase(icon), "no-view": "" }) : h$3(resolveComponent("FontIcon"), props);
};
HopeIcon.displayName = "HopeIcon";
const useAutoLink = (item, preferFull = false) => {
  const router = useRouter();
  const { fullPath, meta, name } = j(router, encodeURI(item));
  return {
    text: !preferFull && meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] ? meta[
      "s"
      /* ArticleInfoType.shortTitle */
    ] : meta[
      "t"
      /* ArticleInfoType.title */
    ] || item,
    link: name === "404" ? item : fullPath,
    ...meta[
      "i"
      /* ArticleInfoType.icon */
    ] ? { icon: meta[
      "i"
      /* ArticleInfoType.icon */
    ] } : {}
  };
};
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url)
      if (ze(url)) {
        if (route.path !== url)
          void router.push(url);
      } else if (isLinkHttp(url) || isLinkMailto(url)) {
        if (window)
          window.open(url);
      } else {
        const base = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base}/${encodeURI(url)}`);
      }
  };
};
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePure = () => computed(() => Boolean(useThemeData().value.pure));
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return ke(author);
    if (author === false)
      return [];
    return ke(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => Se(frontmatter.value.category).map((name) => {
    var _a2, _b2;
    return {
      name,
      // this is a hack
      path: ((_b2 = (_a2 = inject(Symbol.for("categoryMap"))) == null ? void 0 : _a2.value.map[name]) == null ? void 0 : _b2.path) || ""
    };
  }));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return computed(() => xe(frontmatter.value.tag).map((name) => {
    var _a2, _b2;
    return {
      name,
      // this is a hack
      path: ((_b2 = (_a2 = inject(Symbol.for("tagMap"))) == null ? void 0 : _a2.value.map[name]) == null ? void 0 : _b2.path) || ""
    };
  }));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData();
  return computed(() => {
    const date = ye(frontmatter.value.date);
    if (date)
      return date;
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return new Date(createdTime);
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category = usePageCategory();
  const tag = usePageTag();
  const date = usePageDate();
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: page2.value.localizedDate,
    tag: tag.value,
    isOriginal: frontmatter.value.isOriginal || false,
    readingTime: page2.value.readingTime || null,
    pageview: "pageview" in frontmatter.value ? frontmatter.value.pageview : true
  }));
  const items = computed(() => "pageInfo" in frontmatter.value ? frontmatter.value.pageInfo : "pageInfo" in themeLocale.value ? themeLocale.value.pageInfo : null);
  return { info, items };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const useWindowSize = () => {
  const themeData2 = useThemeData();
  const isMobile = ref(false);
  const isPC = ref(false);
  const windowSizeHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
    isPC.value = window.innerWidth >= (themeData2.value.pcBreakPoint || 1440);
  };
  onMounted(() => {
    windowSizeHandler();
    useEventListener("resize", windowSizeHandler, false);
    useEventListener("orientationchange", windowSizeHandler, false);
  });
  return {
    isMobile,
    isPC
  };
};
const darkModeSymbol = Symbol("");
const useDarkmode = () => {
  const darkmode = inject(darkModeSymbol);
  if (!darkmode)
    throw new Error("useDarkmode() is called without provider.");
  return darkmode;
};
const injectDarkmode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = usePreferredDark();
  const status = useStorage("vuepress-theme-hope-scheme", "auto");
  const config2 = computed(() => themeData2.value.darkmode || "switch");
  const isDarkmode = computed(() => {
    const darkmode = config2.value;
    return darkmode === "disable" ? false : (
      // force darkmode
      darkmode === "enable" ? true : (
        // auto
        darkmode === "auto" ? isDarkPreferred.value : (
          // toggle
          darkmode === "toggle" ? status.value === "dark" : (
            // switch
            status.value === "dark" || status.value === "auto" && isDarkPreferred.value
          )
        )
      )
    );
  });
  const canToggle = computed(() => {
    const darkmode = config2.value;
    return darkmode === "switch" || darkmode === "toggle";
  });
  app.provide(darkModeSymbol, {
    canToggle,
    config: config2,
    isDarkmode,
    status
  });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkmode: { get: () => isDarkmode.value }
  });
};
const setupDarkmode = () => {
  const { isDarkmode } = useDarkmode();
  const updateDOM = (isDark = isDarkmode.value) => document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  onMounted(() => {
    watch(isDarkmode, updateDOM, { immediate: true });
  });
};
const AutoLink = defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    /**
     * @description Autolink config
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * @description Whether it's active only when exact match
     */
    exact: Boolean,
    /**
     * @description Whether to hide externalLinkIcon
     */
    noExternalLinkIcon: Boolean
  },
  emits: ["focusout"],
  setup(props, { attrs, emit, slots }) {
    const route = useRoute();
    const siteData2 = useSiteData();
    const config2 = toRef(props, "config");
    const hasHttpProtocol = computed(() => isLinkHttp(config2.value.link));
    const hasNonHttpProtocol = computed(() => isLinkMailto(config2.value.link) || isLinkTel(config2.value.link));
    const linkTarget = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.target || (hasHttpProtocol.value ? "_blank" : void 0));
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const renderRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const anchorRel = computed(() => hasNonHttpProtocol.value ? void 0 : config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : void 0));
    const linkAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const shouldBeActiveInSubpath = computed(() => {
      if (props.exact)
        return false;
      const localeKeys = h$2(siteData2.value.locales);
      return localeKeys.length ? (
        // check all the locales
        localeKeys.every((key) => key !== config2.value.link)
      ) : (
        // check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => renderRouterLink.value ? config2.value.activeMatch ? new RegExp(config2.value.activeMatch).test(route.path) : (
      // if this link is active in subpath
      !shouldBeActiveInSubpath.value ? route.path === config2.value.link : A$1(route.path, config2.value.link)
    ) : false);
    return () => {
      var _a2, _b2, _c;
      const { text, icon, link } = config2.value;
      return renderRouterLink.value ? h$3(RouterLink, {
        to: link,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", { active: isActive.value }, attrs["class"]],
        onFocusout: () => emit("focusout")
      }, () => {
        var _a3, _b3, _c2;
        return ((_a3 = slots["default"]) == null ? void 0 : _a3.call(slots)) || [
          ((_b3 = slots["before"]) == null ? void 0 : _b3.call(slots)) || h$3(HopeIcon, { icon }),
          text,
          (_c2 = slots["after"]) == null ? void 0 : _c2.call(slots)
        ];
      }) : h$3("a", {
        href: link,
        rel: anchorRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        // class needs to be merged manually
        class: ["nav-link", attrs["class"]],
        onFocusout: () => emit("focusout")
      }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
        ((_b2 = slots["before"]) == null ? void 0 : _b2.call(slots)) || h$3(HopeIcon, { icon }),
        text,
        props.noExternalLinkIcon ? null : h$3(ExternalLinkIcon),
        (_c = slots["after"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (Le(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && Le(route, item.prefix);
  return false;
};
const renderItem = (config2, props) => isString(config2.link) ? (
  // if the item has link, render it as `<AutoLink>`
  h$3(AutoLink, {
    ...props,
    config: config2
  })
) : (
  // if the item only has text, render it as `<p>`
  h$3("p", props, [h$3(HopeIcon, { icon: config2.icon }), config2.text])
);
const renderChildren$1 = (children) => {
  const route = useRoute();
  if (!children)
    return null;
  return h$3("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h$3("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren$1(child.children)
    ]);
  }));
};
const sidebarData = { "/learning-notes/java/primary/": ["java快速入门", "java基础", "变量", "进制", "运算符", "基本数据类型", "基本数据类型的转换", "控制结构", "数组、排序、查找", "面向对象编程", "DOS命令了解", "Java API 文档"], "/learning-notes/java/intermediate/": ["面向对象中级"], "/learning-notes/java/senior/": ["Java高级教程"], "/learning-notes/vue/": ["创建项目"], "/development-notes/vue/": ["前端批量导出图片", "基于element-ui二次封装表格", "在vue中使用高德地图", "vue图片裁剪", "封装组件使用v-model传递值", "1.Vue依赖注入 - Provide  Inject", "动态渲染组件以及传值", "vue生成二维码"], "/development-notes/Javascript/": ["数组中的some方法", "toLocaleString与toString的区别"], "/development-notes/uniapp/": ["uniapp 下一页返回上一页传参", "uniapp中调起微信小程序授权"], "npm-tool": ["rimraf"], "software-installation": ["IDEA安装", "IDEA的使用", "MySql安装教程"], "vue-template-list": ["fantastic-admin", "gin-vue-admin", "naive-ui-admin", "soybean-admin", "vue-vben-admin", "vue-admin-better", "vue-admin-box", "vue-element-admin", "vue-next-admin", "vue-pure-admin", "vue3-admin-element-template", "vue3-antd-admin", "vue3-composition-admin"], "/learning-notes/TypeScript/": ["TypeScript基础", "初体验", "TypeScript常用类型", "TypeScript高级类型"] };
const resolvePrefix = (prefix = "", path = "") => ze(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page2 = usePageData();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a2;
    const childItem = isString(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: (
        // if the sidebar item is current page and children is not set
        // use headers of current page as children
        childItem.link === page2.value.path ? headersToSidebarItemChildren(
          // skip h1 header
          ((_a2 = page2.value.headers[0]) == null ? void 0 : _a2.level) === 1 ? page2.value.headers[0].children : page2.value.headers,
          headerDepth
        ) : []
      )
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const page2 = usePageData();
  const sidebarRoutes = h$2(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base of sidebarRoutes)
    if (A$1(decodeURI(page2.value.path), base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : matchedConfig, headerDepth, base) : [];
    }
  console.warn(`${page2.value.path} is missing sidebar config.`);
  return [];
};
const resolveSidebarItems = () => {
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "structure";
  const headerDepth = frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol("");
const setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems)
    throw new Error("useSidebarItems() is called without provider.");
  return sidebarItems;
};
const footer = "";
const PageFooter = defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : isString(footer2) ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = computed(() => "copyright" in frontmatter.value ? frontmatter.value.copyright : "copyright" in themeLocale.value ? themeLocale.value.copyright : author.value.length ? `Copyright © ${new Date().getFullYear()} ${author.value[0].name}` : false);
    return () => enable.value ? h$3("footer", { class: "footer-wrapper" }, [
      content.value ? h$3("div", { class: "footer", innerHTML: content.value }) : null,
      copyright.value ? h$3("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
const dropdownLink = "";
const DropdownLink = defineComponent({
  name: "NavbarDropdownLink",
  props: {
    /**
     * Dropdown config
     *
     * 下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const page2 = usePageData();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a2;
      return h$3("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        h$3("button", {
          type: "button",
          class: "dropdown-title",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a2 = slots["title"]) == null ? void 0 : _a2.call(slots)) || h$3("span", { class: "title" }, [
            h$3(HopeIcon, { icon: config2.value.icon }),
            props.config.text
          ]),
          h$3("span", { class: "arrow" }),
          h$3("ul", { class: "nav-dropdown" }, config2.value.children.map((child, index2) => {
            const isLastChild = index2 === config2.value.children.length - 1;
            return h$3("li", { class: "dropdown-item" }, "children" in child ? [
              h$3("h4", { class: "dropdown-subtitle" }, child.link ? h$3(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (
                    // no children
                    child.children.length === 0 && isLastChild
                  )
                    open.value = false;
                }
              }) : h$3("span", child.text)),
              h$3("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => h$3("li", { class: "dropdown-subitem" }, h$3(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (
                    // last item of grandchild
                    grandIndex === child.children.length - 1 && isLastChild
                  )
                    open.value = false;
                }
              }))))
            ] : h$3(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const I18nIcon = () => h$3(c$4, { name: "i18n" }, () => [
  h$3("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const resolveNavbarItem = (item, prefix = "") => {
  if (isString(item))
    return useAutoLink(`${prefix}${item}`);
  if ("children" in item)
    return {
      ...item,
      ...item.link && !isLinkExternal(item.link) ? useAutoLink(`${prefix}${item.link}`) : {},
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix}${item.prefix || ""}`))
    };
  return {
    ...item,
    link: isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix}${item.link}`).link
  };
};
const useNavbarConfig = () => computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = useRouter();
  const route = useRoute();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const localePaths = h$2(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const { path, fullPath } = router.currentRoute.value;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: [
        ...localePaths.map((targetLocalePath) => {
          var _a2, _b2, _c;
          const targetSiteLocale = ((_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) ?? {};
          const targetThemeLocale = ((_b2 = themeData2.value.locales) == null ? void 0 : _b2[targetLocalePath]) ?? {};
          const targetLang = targetSiteLocale.lang || "";
          const text = ((_c = targetThemeLocale.navbarLocales) == null ? void 0 : _c.langName) ?? targetLang;
          let link;
          if (targetLang === siteLocale.value.lang) {
            link = path;
          } else {
            const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
            link = // try to link to the corresponding page of current page
            router.getRoutes().some((item) => item.path === targetLocalePage) ? (
              // try to keep current hash across languages
              fullPath.replace(path, targetLocalePage)
            ) : (
              // or fallback to homepage
              targetThemeLocale.home ?? targetLocalePath
            );
          }
          return {
            text,
            link
          };
        }),
        ...$$2(themeData2.value.extraLocales || {}).map(([text, path2]) => ({
          text,
          link: path2.replace(":route", route.path.replace(routeLocale.value, ""))
        }))
      ]
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = computed(() => themeLocale.value.repo || null);
  const repoLink2 = computed(() => repo.value ? Ae(repo.value) : null);
  const repoType = computed(() => repo.value ? $e(repo.value) : null);
  const repoLabel = computed(() => repoLink2.value ? themeLocale.value.repoLabel ?? (repoType.value === null ? "Source" : repoType.value) : null);
  return computed(() => {
    if (!repoLink2.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink2.value
    };
  });
};
defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? h$3("div", { class: "nav-item" }, h$3(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a2;
        return h$3(I18nIcon, {
          "aria-label": (_a2 = dropdown.value) == null ? void 0 : _a2.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
const navScreenDropdown = "";
const NavScreenDropdown = defineComponent({
  name: "NavScreenDropdown",
  props: {
    /**
     * Navbar Screen Dropdown list config
     *
     * 导航栏下拉列表配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const page2 = usePageData();
    const config2 = toRef(props, "config");
    const dropdownAriaLabel = computed(() => config2.value.ariaLabel || config2.value.text);
    const open = ref(false);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      h$3("button", {
        type: "button",
        class: ["nav-screen-dropdown-title", { active: open.value }],
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        h$3("span", { class: "title" }, [
          h$3(HopeIcon, { icon: config2.value.icon }),
          props.config.text
        ]),
        h$3("span", { class: ["arrow", open.value ? "down" : "end"] })
      ]),
      h$3("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config2.value.children.map((child) => h$3("li", { class: "dropdown-item" }, "children" in child ? [
        h$3("h4", { class: "dropdown-subtitle" }, child.link ? h$3(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config2.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : h$3("span", child.text)),
        h$3("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => h$3("li", { class: "dropdown-subitem" }, h$3(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config2.value.children))
              open.value = false;
          }
        }))))
      ] : h$3(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config2.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
const navScreenLinks = "";
const NavScreenLinks = defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$3("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config2) => h$3("div", { class: "navbar-links-item" }, "children" in config2 ? h$3(NavScreenDropdown, { config: config2 }) : h$3(AutoLink, { config: config2 })))) : null;
  }
});
const DarkIcon = () => h$3(c$4, { name: "dark" }, () => h$3("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => h$3(c$4, { name: "light" }, () => h$3("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => h$3(c$4, { name: "auto" }, () => h$3("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => h$3(c$4, { name: "enter-fullscreen" }, () => h$3("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => h$3(c$4, { name: "cancel-fullscreen" }, () => h$3("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => h$3(c$4, { name: "outlook" }, () => [
  h$3("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
const appearanceSwitch = "";
const AppearanceSwitch = defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const { config: config2, status } = useDarkmode();
    const toggleDarkMode = () => {
      if (config2.value === "switch")
        status.value = {
          light: "dark",
          dark: "auto",
          auto: "light"
        }[status.value];
      else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => h$3("button", {
      type: "button",
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      h$3(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      h$3(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      h$3(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
const AppearanceMode = defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { canToggle } = useDarkmode();
    const locale = computed(() => themeLocale.value.outlookLocales.darkmode);
    return () => canToggle.value ? h$3("div", { class: "appearance-wrapper" }, [
      h$3("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      h$3(AppearanceSwitch)
    ]) : null;
  }
});
const themeColorPicker = "";
const ThemeColorPicker = defineComponent({
  name: "ThemeColorPicker",
  props: {
    /**
     * Theme color picker config
     *
     * 主题色选择器配置
     */
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = h$2(props.themeColor).map((color) => `theme-${color}`);
      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeColorClass) => themeColorClass !== `theme-${theme}`));
      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    };
    onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => h$3("ul", { id: "theme-color-picker" }, [
      h$3("li", h$3("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...$$2(props.themeColor).map(([color, value]) => h$3("li", h$3("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
const ThemeColor = defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? h$3("div", { class: "theme-color-wrapper" }, [
      h$3("label", { class: "theme-color-title", for: "theme-color-picker" }, locale.value),
      h$3(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
const toggleFullScreenButton = "";
const ToggleFullScreenButton = defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = useFullscreen();
    const fullscreenLocale = computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? h$3("div", { class: "full-screen-wrapper" }, [
      h$3("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      h$3("button", {
        type: "button",
        class: "full-screen",
        id: "full-screen-switch",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? h$3(CancelFullScreenIcon) : h$3(EnterFullScreenIcon))
    ]) : null;
  }
});
const OutlookSettings = defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen);
    return () => h$3(ClientOnly, () => [
      enableThemeColor.value ? h$3(ThemeColor) : null,
      h$3(AppearanceMode),
      enableFullScreen.value ? h$3(ToggleFullScreenButton) : null
    ]);
  }
});
const navScreen = "";
const NavScreen = defineComponent({
  name: "NavScreen",
  props: {
    /**
     * Whether to show the screen
     *
     * 是否显示
     */
    show: Boolean
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const page2 = usePageData();
    const { isMobile } = useWindowSize();
    const body = ref();
    const isLocked = useScrollLock(body);
    onMounted(() => {
      body.value = document.body;
      watch(isMobile, (value) => {
        if (!value && props.show) {
          isLocked.value = false;
          emit("close");
        }
      });
      watch(() => page2.value.path, () => {
        isLocked.value = false;
        emit("close");
      });
    });
    onUnmounted(() => {
      isLocked.value = false;
    });
    return () => h$3(Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a2, _b2;
      return props.show ? h$3("div", { id: "nav-screen" }, h$3("div", { class: "container" }, [
        (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
        h$3(NavScreenLinks),
        h$3("div", { class: "outlook-wrapper" }, h$3(OutlookSettings)),
        (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
      ])) : null;
    });
  }
});
const navbarBrand = "";
const NavbarBrand = defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = computed(() => siteLocale.value.title);
    const siteBrandLogo = computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => h$3(RouterLink, { to: siteBrandLink.value, class: "brand" }, () => [
      siteBrandLogo.value ? h$3("img", {
        class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
        src: siteBrandLogo.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandLogoDark.value ? h$3("img", {
        class: ["logo dark"],
        src: siteBrandLogoDark.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandTitle.value ? h$3("span", {
        class: [
          "site-name",
          {
            "hide-in-pad": siteBrandLogo.value && themeLocale.value.hideSiteNameOnMobile !== false
          }
        ]
      }, siteBrandTitle.value) : null
    ]);
  }
});
const navbarLinks = "";
const NavbarLinks = defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? h$3("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config2) => h$3("div", { class: "nav-item hide-in-mobile" }, "children" in config2 ? h$3(DropdownLink, { config: config2 }) : h$3(AutoLink, { config: config2 })))
    ]) : null;
  }
});
const repoLink = "";
const RepoLink = defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon: S$4, GiteeIcon: k$2, GitHubIcon: O$3, GitLabIcon: _$1, SourceIcon: x$2 },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? h$3("div", { class: "nav-item" }, h$3("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, h$3(resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
const toggleNavbarButton = "";
const ToggleNavbarButton = ({ active = false }, { emit }) => h$3("button", {
  type: "button",
  class: ["toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, h$3("span", { class: "button-container" }, [
  h$3("span", { class: "button-top" }),
  h$3("span", { class: "button-middle" }),
  h$3("span", { class: "button-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
const toggleSidebarButton = "";
const ToggleSidebarButton = (_2, { emit }) => h$3("button", {
  type: "button",
  class: "toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, h$3("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
const outlookButton = "";
const OutlookButton = defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = useFullscreen();
    const themeData2 = useThemeData();
    const pure = usePure();
    const page2 = usePageData();
    const { canToggle } = useDarkmode();
    const open = ref(false);
    const enableThemeColor = computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = computed(() => !pure.value && themeData2.value.fullscreen && isSupported);
    watch(() => page2.value.path, () => {
      open.value = false;
    });
    return () => canToggle.value || enableFullScreen.value || enableThemeColor.value ? h$3(
      "div",
      { class: "nav-item hide-in-mobile" },
      // only AppearanceSwitch is enabled
      canToggle.value && !enableFullScreen.value && !enableThemeColor.value ? h$3(AppearanceSwitch) : (
        // only FullScreen is enabled
        enableFullScreen.value && !canToggle.value && !enableThemeColor.value ? h$3(ToggleFullScreenButton) : h$3("button", {
          type: "button",
          class: ["outlook-button", { open: open.value }],
          tabindex: "-1",
          "aria-hidden": true
        }, [
          h$3(OutlookIcon),
          h$3("div", { class: "outlook-dropdown" }, h$3(OutlookSettings))
        ])
      )
    ) : null;
  }
});
const navbar = "";
const Navbar = defineComponent({
  name: "NavBar",
  emits: ["toggleSidebar"],
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const { isMobile } = useWindowSize();
    const showScreen = ref(false);
    const autoHide = computed(() => {
      const { navbarAutoHide = "mobile" } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = computed(() => themeLocale.value.navbarLayout || {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"]
    });
    return () => {
      var _a2, _b2, _c, _d, _e, _f;
      const map = {
        Brand: h$3(NavbarBrand),
        Language: null,
        Links: h$3(NavbarLinks),
        Repo: h$3(RepoLink),
        Outlook: h$3(OutlookButton),
        Search: Z("Docsearch") ? h$3(resolveComponent("Docsearch")) : Z("SearchBox") ? h$3(resolveComponent("SearchBox")) : Z("SearchBox") ? h$3(resolveComponent("SearchBox")) : null
      };
      return [
        h$3("header", {
          class: [
            "navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": themeLocale.value.navbarIcon === false
            }
          ],
          id: "navbar"
        }, [
          h$3("div", { class: "navbar-start" }, [
            h$3(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggleSidebar");
              }
            }),
            (_a2 = slots["startBefore"]) == null ? void 0 : _a2.call(slots),
            ...(navbarLayout.value.start || []).map((item) => map[item]),
            (_b2 = slots["startAfter"]) == null ? void 0 : _b2.call(slots)
          ]),
          h$3("div", { class: "navbar-center" }, [
            (_c = slots["centerBefore"]) == null ? void 0 : _c.call(slots),
            ...(navbarLayout.value.center || []).map((item) => map[item]),
            (_d = slots["centerAfter"]) == null ? void 0 : _d.call(slots)
          ]),
          h$3("div", { class: "navbar-end" }, [
            (_e = slots["endBefore"]) == null ? void 0 : _e.call(slots),
            ...(navbarLayout.value.end || []).map((item) => map[item]),
            (_f = slots["endAfter"]) == null ? void 0 : _f.call(slots),
            h$3(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        h$3(NavScreen, {
          show: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["screenTop"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["screenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        })
      ];
    };
  }
});
const sidebarChild = "";
const SidebarChild = defineComponent({
  name: "SidebarChild",
  props: {
    /**
     * Sidebar item config
     *
     * 侧边栏项目配置
     */
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          { active: isActiveSidebarItem(route, props.config, true) }
        ],
        exact: true
      }),
      renderChildren$1(props.config.children)
    ];
  }
});
const sidebarGroup = "";
const SidebarGroup = defineComponent({
  name: "SidebarGroup",
  props: {
    /**
     * Sidebar group item config
     *
     * 侧边栏分组配置
     */
    config: {
      type: Object,
      required: true
    },
    /**
     * Whether current group is open
     *
     * 当前分组是否展开
     */
    open: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = useRoute();
    const active = computed(() => isActiveSidebarItem(route, props.config));
    const exact = computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsible, children = [], icon, prefix, link, text } = props.config;
      return h$3("section", { class: "sidebar-group" }, [
        h$3(collapsible ? "button" : "p", {
          class: [
            "sidebar-heading",
            {
              clickable: collapsible || link,
              exact: exact.value,
              active: active.value
            }
          ],
          ...collapsible ? {
            type: "button",
            onClick: () => emit("toggle"),
            onKeydown: (event) => {
              if (event.key === "Enter")
                emit("toggle");
            }
          } : {}
        }, [
          // icon
          h$3(HopeIcon, { icon }),
          // title
          link ? h$3(RouterLink, { to: link, class: "title" }, () => text) : h$3("span", { class: "title" }, text),
          // arrow
          collapsible ? h$3("span", { class: ["arrow", props.open ? "down" : "end"] }) : null
        ]),
        props.open || !collapsible ? h$3(SidebarLinks, { key: prefix, config: children }) : null
      ]);
    };
  }
});
const sidebarLinks = "";
const SidebarLinks = defineComponent({
  name: "SidebarLinks",
  props: {
    /**
     * Sidebar links config
     *
     * 侧边栏链接配置
     */
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const openGroupIndex = ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    watch(() => route.path, () => {
      const index2 = props.config.findIndex((item) => isMatchedSidebarItem(route, item));
      openGroupIndex.value = index2;
    }, { immediate: true, flush: "post" });
    return () => h$3("ul", { class: "sidebar-links" }, props.config.map((config2, index2) => h$3("li", config2.type === "group" ? h$3(SidebarGroup, {
      config: config2,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : h$3(SidebarChild, { config: config2 }))));
  }
});
const sidebar = "";
const Sidebar = defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const route = useRoute();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const sidebar2 = ref();
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar2.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      });
    });
    return () => {
      var _a2, _b2, _c;
      return h$3("aside", {
        class: [
          "sidebar",
          { "hide-icon": themeLocale.value.sidebarIcon === false }
        ],
        id: "sidebar",
        ref: sidebar2
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || h$3(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const common = "";
const CommonWrapper = defineComponent({
  name: "CommonWrapper",
  props: {
    /**
     * Whether disable navbar
     *
     * 是否禁用导航栏
     */
    noNavbar: Boolean,
    /**
     * Whether disable sidebar
     *
     * 是否禁用侧边栏
     */
    noSidebar: Boolean
  },
  setup(props, { slots }) {
    const router = useRouter();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { isMobile, isPC } = useWindowSize();
    const [isMobileSidebarOpen, toggleMobileSidebar] = useToggle(false);
    const [isDesktopSidebarCollapsed, toggleDesktopSidebar] = useToggle(false);
    const sidebarItems = useSidebarItems();
    const hideNavbar = ref(false);
    const enableNavbar = computed(() => {
      if (props.noNavbar)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const enableSidebar = computed(() => {
      if (props.noSidebar)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (
        // horizontal swipe
        Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40
      )
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
    };
    const enableToc = computed(() => frontmatter.value.home ? false : frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let lastDistance = 0;
    useEventListener("scroll", useThrottleFn(() => {
      const distance = getScrollTop();
      if (distance <= 58 || distance < lastDistance)
        hideNavbar.value = false;
      else if (lastDistance + 200 < distance && !isMobileSidebarOpen.value)
        hideNavbar.value = true;
      lastDistance = distance;
    }, 300, true));
    watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    onMounted(() => {
      const isLocked = useScrollLock(document.body);
      watch(isMobileSidebarOpen, (value) => {
        isLocked.value = value;
      });
      const unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
      onUnmounted(() => {
        isLocked.value = false;
        unregisterRouterHook();
      });
    });
    return () => h$3(Z("GlobalEncrypt") ? resolveComponent("GlobalEncrypt") : J$1, () => {
      var _a2;
      return h$3("div", {
        class: [
          "theme-container",
          // classes
          {
            "no-navbar": !enableNavbar.value,
            "no-sidebar": !enableSidebar.value && !(slots["sidebar"] || slots["sidebarTop"] || slots["sidebarBottom"]),
            "has-toc": enableToc.value,
            "hide-navbar": hideNavbar.value,
            "sidebar-collapsed": !isMobile.value && !isPC.value && isDesktopSidebarCollapsed.value,
            "sidebar-open": isMobile.value && isMobileSidebarOpen.value
          },
          frontmatter.value.containerClass || ""
        ],
        onTouchStart,
        onTouchEnd
      }, [
        // navbar
        enableNavbar.value ? h$3(Navbar, { onToggleSidebar: () => toggleMobileSidebar() }, {
          startBefore: () => {
            var _a3;
            return (_a3 = slots["navbarStartBefore"]) == null ? void 0 : _a3.call(slots);
          },
          startAfter: () => {
            var _a3;
            return (_a3 = slots["navbarStartAfter"]) == null ? void 0 : _a3.call(slots);
          },
          centerBefore: () => {
            var _a3;
            return (_a3 = slots["navbarCenterBefore"]) == null ? void 0 : _a3.call(slots);
          },
          centerAfter: () => {
            var _a3;
            return (_a3 = slots["navbarCenterAfter"]) == null ? void 0 : _a3.call(slots);
          },
          endBefore: () => {
            var _a3;
            return (_a3 = slots["navbarEndBefore"]) == null ? void 0 : _a3.call(slots);
          },
          endAfter: () => {
            var _a3;
            return (_a3 = slots["navbarEndAfter"]) == null ? void 0 : _a3.call(slots);
          },
          screenTop: () => {
            var _a3;
            return (_a3 = slots["navScreenTop"]) == null ? void 0 : _a3.call(slots);
          },
          screenBottom: () => {
            var _a3;
            return (_a3 = slots["navScreenBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        // sidebar mask
        h$3(Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? h$3("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        // toggle sidebar button
        h$3(Transition, { name: "fade" }, () => isMobile.value ? null : h$3("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, h$3("span", {
          class: [
            "arrow",
            isDesktopSidebarCollapsed.value ? "end" : "start"
          ]
        }))),
        // sidebar
        h$3(Sidebar, {}, {
          ...slots["sidebar"] ? {
            default: () => {
              var _a3;
              return (_a3 = slots["sidebar"]) == null ? void 0 : _a3.call(slots);
            }
          } : {},
          top: () => {
            var _a3;
            return (_a3 = slots["sidebarTop"]) == null ? void 0 : _a3.call(slots);
          },
          bottom: () => {
            var _a3;
            return (_a3 = slots["sidebarBottom"]) == null ? void 0 : _a3.call(slots);
          }
        }),
        (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots),
        h$3(PageFooter)
      ]);
    });
  }
});
const featurePanel = "";
const FeaturePanel = defineComponent({
  name: "FeaturePanel",
  props: {
    /**
     * Feature config
     */
    items: {
      type: Object,
      default: () => []
    },
    /**
     * Feature header
     */
    header: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    return () => h$3("div", { class: "feature-panel" }, [
      props.header ? h$3("h2", { class: "feature-header" }, props.header) : null,
      props.items.length ? h$3("div", { class: "feature-wrapper" }, props.items.map((feature) => {
        const children = [
          h$3("h3", [
            h$3(HopeIcon, { icon: feature.icon }),
            h$3("span", { innerHTML: feature.title })
          ]),
          h$3("p", { innerHTML: feature.details })
        ];
        return feature.link ? isLinkExternal(feature.link) ? h$3("a", {
          class: "feature-item link",
          href: feature.link,
          role: "navigation",
          "aria-label": feature.title,
          target: "_blank"
        }, children) : h$3(RouterLink, {
          class: "feature-item link",
          to: feature.link,
          role: "navigation",
          "aria-label": feature.title
        }, () => children) : h$3("div", { class: "feature-item" }, children);
      })) : null
    ]);
  }
});
const DropTransition = defineComponent({
  name: "DropTransition",
  props: {
    /**
     * @description Transition type
     */
    type: {
      type: String,
      default: "single"
    },
    /**
     * @description Transition delay
     */
    delay: { type: Number, default: 0 },
    /**
     * @description Transition duration
     */
    duration: { type: Number, default: 0.25 },
    /**
     * @description appear
     */
    appear: Boolean
  },
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => h$3(
      // @ts-ignore
      props.type === "single" ? Transition : TransitionGroup,
      {
        name: "drop",
        appear: props.appear,
        onAppear: setStyle,
        onAfterAppear: unsetStyle,
        onEnter: setStyle,
        onAfterEnter: unsetStyle,
        onBeforeLeave: setStyle
      },
      () => {
        var _a2;
        return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
      }
    );
  }
});
const heroInfo = "";
const HeroInfo = defineComponent({
  name: "HeroInfo",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase(frontmatter.value.heroImage);
    });
    const heroImageDark = computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase(frontmatter.value.heroImageDark);
    });
    const heroAlt = computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = computed(() => frontmatter.value.actions ?? []);
    return () => {
      var _a2, _b2;
      return h$3("header", { class: "hero-info-wrapper" }, [
        ((_a2 = slots["heroImage"]) == null ? void 0 : _a2.call(slots)) || h$3(DropTransition, { appear: true, type: "group" }, () => [
          heroImage.value ? h$3("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt.value
          }) : null,
          heroImageDark.value ? h$3("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt.value
          }) : null
        ]),
        ((_b2 = slots["heroInfo"]) == null ? void 0 : _b2.call(slots)) || h$3("div", { class: "hero-info" }, [
          heroText.value ? h$3(DropTransition, { appear: true, delay: 0.04 }, () => h$3("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? h$3(DropTransition, { appear: true, delay: 0.08 }, () => h$3("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? h$3(DropTransition, { appear: true, delay: 0.12 }, () => h$3("p", { class: "actions" }, actions.value.map((action) => h$3(AutoLink, {
            class: ["action-button", action.type || "default"],
            config: action,
            noExternalLinkIcon: true
          })))) : null
        ])
      ]);
    };
  }
});
const MarkdownContent = ({ custom }) => h$3(Content, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
const homePage = "";
const HomePage = defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const pure = usePure();
    const frontmatter = usePageFrontmatter();
    const features = computed(() => {
      const { features: features2 } = frontmatter.value;
      if (isArray(features2))
        return features2.some((item) => !("items" in item)) ? [{ items: features2 }] : features2;
      return [];
    });
    return () => {
      var _a2, _b2, _c;
      return h$3("main", {
        class: ["home project", { pure: pure.value }],
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h$3(HeroInfo),
        features.value.map(({ header = "", items }, index2) => h$3(DropTransition, { appear: true, delay: 0.16 + index2 * 0.08 }, () => h$3(FeaturePanel, { header, items }))),
        (_b2 = slots["center"]) == null ? void 0 : _b2.call(slots),
        h$3(DropTransition, { appear: true, delay: 0.16 + features.value.length * 0.08 }, () => h$3(MarkdownContent)),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const getAncestorLinks = (path, routeLocale) => {
  const routePaths = path.replace(routeLocale, "/").split("/");
  const links = [];
  let link = removeEndingSlash(routeLocale);
  routePaths.forEach((element, index2) => {
    if (index2 !== routePaths.length - 1) {
      link += `${element}/`;
      links.push(link);
    } else if (element !== "") {
      link += element;
      links.push(link);
    }
  });
  return links;
};
const breadcrumb = "";
const BreadCrumb = defineComponent({
  name: "BreadCrumb",
  setup() {
    const router = useRouter();
    const page2 = usePageData();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config2 = ref([]);
    const enable = computed(() => (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config2.value.length > 1);
    const iconEnable = computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const routes = router.getRoutes();
      const breadcrumbConfig = getAncestorLinks(page2.value.path, routeLocale.value).map((link) => {
        const route = routes.find((route2) => route2.path === link);
        if (route) {
          const { meta, path } = j(router, route.path);
          const title = meta[
            "s"
            /* ArticleInfoType.shortTitle */
          ] || meta[
            "t"
            /* ArticleInfoType.title */
          ];
          if (title)
            return {
              title,
              icon: meta[
                "i"
                /* ArticleInfoType.icon */
              ],
              path
            };
        }
        return null;
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config2.value = breadcrumbConfig;
    };
    onMounted(() => {
      getBreadCrumbConfig();
      watch(() => page2.value.path, getBreadCrumbConfig);
    });
    return () => h$3("nav", { class: ["breadcrumb", { disable: !enable.value }] }, enable.value ? h$3("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config2.value.map((item, index2) => h$3("li", {
      class: { "is-active": config2.value.length - 1 === index2 },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      h$3(RouterLink, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        // icon
        iconEnable.value ? h$3(HopeIcon, { icon: item.icon }) : null,
        // text
        h$3("span", { property: "name" }, item.title || "Unknown")
      ]),
      // meta
      h$3("meta", { property: "position", content: index2 + 1 })
    ]))) : []);
  }
});
const pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return false;
  if (isString(conf))
    return useAutoLink(conf, true);
  if (isPlainObject(conf))
    return conf;
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
const PageNav = defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const page2 = usePageData();
    const navigate = useNavigate();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page2.value.path, -1));
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, page2.value.path, 1));
    });
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? h$3("nav", { class: "page-nav" }, [
      prevNavLink.value ? h$3(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$3("div", { class: "hint" }, [
            h$3("span", { class: "arrow start" }),
            themeLocale.value.metaLocales.prev
          ]),
          h$3("div", { class: "link" }, [
            h$3(HopeIcon, {
              icon: (_a2 = prevNavLink.value) == null ? void 0 : _a2.icon
            }),
            (_b2 = prevNavLink.value) == null ? void 0 : _b2.text
          ])
        ];
      }) : null,
      nextNavLink.value ? h$3(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a2, _b2;
        return [
          h$3("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            h$3("span", { class: "arrow end" })
          ]),
          h$3("div", { class: "link" }, [
            (_a2 = nextNavLink.value) == null ? void 0 : _a2.text,
            h$3(HopeIcon, {
              icon: (_b2 = nextNavLink.value) == null ? void 0 : _b2.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const AuthorIcon = () => h$3(c$4, { name: "author" }, () => h$3("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => h$3(c$4, { name: "calendar" }, () => h$3("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon$1 = () => h$3(c$4, { name: "category" }, () => h$3("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon$1.displayName = "CategoryIcon";
const EyeIcon = () => h$3(c$4, { name: "eye" }, () => h$3("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => h$3(c$4, { name: "fire" }, () => h$3("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const PrintIcon = () => h$3(c$4, { name: "print" }, () => h$3("path", {
  d: "M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"
}));
PrintIcon.displayName = "PrintIcon";
const TagIcon$1 = () => h$3(c$4, { name: "tag" }, () => h$3("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon$1.displayName = "TagIcon";
const TimerIcon = () => h$3(c$4, { name: "timer" }, () => h$3("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => h$3(c$4, { name: "word" }, () => [
  h$3("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  h$3("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return computed(() => themeLocale.value.metaLocales);
};
const readingTimeLocales = { "/": { "word": "约 $word 字", "less1Minute": "小于 1 分钟", "time": "大约 $time 分钟" } };
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = $e(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = frontmatter.value.editLink ?? editLink ?? true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2, _b2;
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;
    if (!showLastUpdated)
      return null;
    if (!((_a2 = page2.value.git) == null ? void 0 : _a2.updatedTime))
      return null;
    const updatedDate = new Date((_b2 = page2.value.git) == null ? void 0 : _b2.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return computed(() => {
    var _a2;
    const showContributors = frontmatter.value.contributors ?? themeLocale.value.contributors ?? true;
    if (!showContributors)
      return null;
    return ((_a2 = page2.value.git) == null ? void 0 : _a2.contributors) ?? null;
  });
};
const authorInfo = "";
const AuthorInfo = defineComponent({
  name: "AuthorInfo",
  inheritAttrs: false,
  props: {
    /**
     * Author information
     *
     * 作者信息
     */
    author: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? h$3("span", {
      class: "page-author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "🖊"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$3(AuthorIcon),
      h$3("span", props.author.map((item) => item.url ? h$3("a", {
        class: "page-author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : h$3("span", { class: "page-author-item" }, item.name))),
      h$3("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
const categoryInfo = "";
const CategoryInfo = defineComponent({
  name: "CategoryInfo",
  inheritAttrs: false,
  props: {
    /**
     * Category information
     *
     * 分类信息
     */
    category: {
      type: Array,
      required: true
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && page2.value.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.category.length ? h$3("span", {
      class: "page-category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "🌈"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$3(CategoryIcon$1),
      ...props.category.map(({ name, path }) => h$3("span", {
        class: [
          "page-category-item",
          {
            // TODO: magic number 9 is tricky here
            [`category${Ee(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h$3("meta", {
        property: "articleSection",
        content: props.category.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const DateInfo = defineComponent({
  name: "DateInfo",
  inheritAttrs: false,
  props: {
    /**
     * Date information
     *
     * 日期信息
     */
    date: {
      type: Object,
      default: null
    },
    /**
     * Localized date text
     *
     * 本地化的日期文字
     */
    localizedDate: {
      type: String,
      default: ""
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    return () => props.date ? h$3("span", {
      class: "page-date-info",
      "aria-label": `${metaLocale.value.date}${props.pure ? "" : "📅"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$3(CalendarIcon),
      h$3("span", h$3(ClientOnly, () => props.localizedDate || props.date.toLocaleDateString(lang.value))),
      h$3("meta", {
        property: "datePublished",
        // ISO Format Date string
        content: props.date.toISOString() || ""
      })
    ]) : null;
  }
});
const originalInfo = "";
const OriginalInfo = defineComponent({
  name: "OriginalInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether the article is original
     *
     * 文章是否是原创
     */
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? h$3("span", { class: "page-original-info" }, metaLocale.value.origin) : null;
  }
});
defineComponent({
  name: "PageViewInfo",
  inheritAttrs: false,
  props: {
    /**
     * Whether show pageview and it's path
     *
     * 是否显示浏览量以及其路径
     */
    pageview: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const route = useRoute();
    const metaLocale = useMetaLocale();
    const pageviewElement = ref();
    const pageViews = ref(0);
    useMutationObserver(pageviewElement, () => {
      const count = pageviewElement.value.textContent;
      if (count && !isNaN(Number(count)))
        pageViews.value = Number(count);
    }, { childList: true });
    return () => props.pageview ? h$3("span", {
      class: "page-pageview-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "🔢"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$3(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      h$3("span", {
        ref: pageviewElement,
        class: "waline-pageview-count",
        id: "ArtalkPV",
        /** visitorID */
        "data-path": isString(props.pageview) ? props.pageview : withBase(route.path)
      }, "...")
    ]) : null;
  }
});
const ReadingTimeInfo = defineComponent({
  name: "ReadingTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = le(readingTimeLocales);
    const readingTime = computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" } : {
        text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
        time: `PT${Math.round(minutes)}M`
      };
    });
    return () => readingTime.value ? h$3("span", {
      class: "page-reading-time-info",
      "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "⌛"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$3(TimerIcon),
      h$3("span", readingTime.value.text),
      h$3("meta", {
        property: "timeRequired",
        content: readingTime.value.time
      })
    ]) : null;
  }
});
const tagInfo = "";
const TagInfo = defineComponent({
  name: "TagInfo",
  inheritAttrs: false,
  props: {
    /**
     * Tag information
     *
     * 标签信息
     */
    tag: {
      type: Array,
      default: () => []
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const router = useRouter();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const navigate = (event, path = "") => {
      if (path && page2.value.path !== path) {
        event.preventDefault();
        void router.push(path);
      }
    };
    return () => props.tag.length ? h$3("span", {
      class: "page-tag-info",
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "🏷"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$3(TagIcon$1),
      ...props.tag.map(({ name, path }) => h$3("span", {
        class: [
          "page-tag-item",
          {
            // TODO: magic number 9 is tricky here
            [`tag${Ee(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: (event) => navigate(event, path)
      }, name)),
      h$3("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
const WordInfo = defineComponent({
  name: "ReadTimeInfo",
  inheritAttrs: false,
  props: {
    /**
     * Reading time information
     *
     * 阅读时间信息
     */
    readingTime: {
      type: Object,
      default: () => null
    },
    /**
     * Whether in pure mode
     *
     * 是否处于纯净模式
     */
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = le(readingTimeLocales);
    const words = computed(() => {
      var _a2;
      return (_a2 = props.readingTime) == null ? void 0 : _a2.words.toString();
    });
    const wordText = computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
    return () => words.value ? h$3("span", {
      class: "page-word-info",
      "aria-label": `${metaLocale.value.words}${props.pure ? "" : "🔠"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      h$3(WordIcon),
      h$3("span", wordText.value),
      h$3("meta", {
        property: "wordCount",
        content: words.value
      })
    ]) : null;
  }
});
const pageInfo = "";
const PageInfo = defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo: () => null,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    /**
     * Article information to display
     *
     * 待展示的文章信息
     */
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "PageView",
        "ReadingTime",
        "Category",
        "Tag"
      ]
    },
    /**
     * Article information
     *
     * 文章信息配置
     */
    info: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? h$3("div", { class: "page-info" }, props.items.map((item) => h$3(resolveComponent(`${item}Info`), {
      ...props.info,
      pure: pure.value
    }))) : null;
  }
});
const pageTitle = "";
const PageTitle = defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { info, items } = usePageInfo();
    return () => h$3("div", { class: "page-title" }, [
      h$3("h1", [
        themeLocale.value.titleIcon === false ? null : h$3(HopeIcon, { icon: frontmatter.value.icon }),
        page2.value.title
      ]),
      h$3(PageInfo, {
        info: info.value,
        ...items.value === null ? {} : { items: items.value }
      }),
      h$3("hr")
    ]);
  }
});
const EditIcon = () => h$3(c$4, { name: "edit" }, () => [
  h$3("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  h$3("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const pageMeta = "";
const PageMeta = defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return h$3("footer", { class: "page-meta" }, [
        editLink.value ? h$3("div", { class: "meta-item edit-link" }, h$3(AutoLink, { class: "label", config: editLink.value }, { before: () => h$3(EditIcon) })) : null,
        h$3("div", { class: "meta-item git-info" }, [
          updateTime.value ? h$3("div", { class: "update-time" }, [
            h$3("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
            h$3(ClientOnly, () => h$3("span", { class: "info" }, updateTime.value))
          ]) : null,
          contributors.value && contributors.value.length ? h$3("div", { class: "contributors" }, [
            h$3("span", { class: "label" }, `${metaLocales.contributors}: `),
            contributors.value.map(({ email, name }, index2) => [
              h$3("span", { class: "contributor", title: `email: ${email}` }, name),
              index2 !== contributors.value.length - 1 ? "," : ""
            ])
          ]) : null
        ])
      ]);
    };
  }
});
const printButton = "";
const PrintButton = defineComponent({
  name: "PrintButton",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    return () => themeData2.value.print === false ? null : h$3("button", {
      type: "button",
      class: "print-button",
      title: themeLocale.value.metaLocales.print,
      onClick: () => {
        window.print();
      }
    }, h$3(PrintIcon));
  }
});
const toc = "";
const renderHeader = ({ title, level, slug }) => h$3(RouterLink, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
const renderChildren = (headers, headerDepth) => {
  const route = useRoute();
  return headers.length && headerDepth > 0 ? h$3("ul", { class: "toc-list" }, headers.map((header) => {
    const children = renderChildren(header.children, headerDepth - 1);
    return [
      h$3("li", {
        class: [
          "toc-item",
          { active: Le(route, `#${header.slug}`) }
        ]
      }, renderHeader(header)),
      children ? h$3("li", children) : null
    ];
  })) : null;
};
const TOC = defineComponent({
  name: "TOC",
  props: {
    /**
     * TOC items config
     *
     * TOC 项目配置
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Max header nesting depth
     *
     * 最大的标题嵌套深度
     */
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props, { slots }) {
    const route = useRoute();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const toc2 = ref();
    const scrollTo = (top) => {
      var _a2;
      (_a2 = toc2.value) == null ? void 0 : _a2.scrollTo({ top, behavior: "smooth" });
    };
    onMounted(() => {
      watch(() => route.hash, (hash) => {
        if (toc2.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc2.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc2.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc2.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      var _a2, _b2;
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page2.value.headers ? renderChildren(page2.value.headers, props.headerDepth) : null;
      return tocHeaders ? h$3("div", { class: "toc-place-holder" }, [
        h$3("aside", { id: "toc" }, [
          (_a2 = slots["before"]) == null ? void 0 : _a2.call(slots),
          h$3("div", { class: "toc-header" }, [
            metaLocale.value.toc,
            h$3(PrintButton)
          ]),
          h$3("div", { class: "toc-wrapper", ref: toc2 }, tocHeaders),
          (_b2 = slots["after"]) == null ? void 0 : _b2.call(slots)
        ])
      ]) : null;
    };
  }
});
const page$1 = "";
const NormalPage = defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkmode } = useDarkmode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => h$3("main", { class: "page", id: "main-content" }, h$3(Z("LocalEncrypt") ? resolveComponent("LocalEncrypt") : J$1, () => {
      var _a2, _b2, _c, _d;
      return [
        (_a2 = slots["top"]) == null ? void 0 : _a2.call(slots),
        h$3(BreadCrumb),
        h$3(PageTitle),
        tocEnable.value ? h$3(TOC, {
          headerDepth: frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2
        }, {
          before: () => {
            var _a3;
            return (_a3 = slots["tocBefore"]) == null ? void 0 : _a3.call(slots);
          },
          after: () => {
            var _a3;
            return (_a3 = slots["tocAfter"]) == null ? void 0 : _a3.call(slots);
          }
        }) : null,
        (_b2 = slots["contentBefore"]) == null ? void 0 : _b2.call(slots),
        h$3(MarkdownContent),
        (_c = slots["contentAfter"]) == null ? void 0 : _c.call(slots),
        h$3(PageMeta),
        h$3(PageNav),
        Z("CommentService") ? h$3(resolveComponent("CommentService"), {
          darkmode: isDarkmode.value
        }) : null,
        (_d = slots["bottom"]) == null ? void 0 : _d.call(slots)
      ];
    }));
  }
});
const skipLink = "";
const SkipLink = defineComponent({
  name: "SkipLink",
  props: {
    /** @description Content ID */
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const page2 = usePageData();
    const themeLocale = useThemeLocaleData();
    const skipToMainContent = ref();
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    onMounted(() => {
      watch(() => page2.value.path, () => skipToMainContent.value.focus());
    });
    return () => [
      h$3("span", {
        ref: skipToMainContent,
        tabindex: "-1"
      }),
      h$3("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, themeLocale.value.routeLocales.skipToContent)
    ];
  }
});
const fadeSlideY = "";
const FadeSlideY = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const { resolve: onBeforeEnter, pending: onBeforeLeave } = useScrollPromise();
    return () => h$3(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a2;
      return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
    });
  }
});
const Layout = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const { isMobile } = useWindowSize();
    const sidebarDisplay = computed(
      () => {
        var _a2, _b2;
        return ((_a2 = themeLocale.value.blog) == null ? void 0 : _a2.sidebarDisplay) || ((_b2 = themeData2.value.blog) == null ? void 0 : _b2.sidebarDisplay) || "mobile";
      }
    );
    return () => [
      h$3(SkipLink),
      h$3(CommonWrapper, {}, {
        default: () => frontmatter.value.home ? h$3(HomePage) : h$3(FadeSlideY, () => h$3(NormalPage, { key: page2.value.path })),
        ...sidebarDisplay.value !== "none" ? { navScreenBottom: () => h$3(resolveComponent("BloggerInfo")) } : {},
        ...!isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => h$3(resolveComponent("BloggerInfo")) } : {}
      })
    ];
  }
});
const notFoundHint = "";
const NotFoundHint = defineComponent({
  name: "NotFoundHint",
  setup() {
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["notFoundMsg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    return () => h$3("div", { class: "not-found-hint" }, [
      h$3("p", { class: "error-code" }, "404"),
      h$3("h1", { class: "error-title" }, themeLocale.value.routeLocales["notFoundTitle"]),
      h$3("p", { class: "error-hint" }, getMsg())
    ]);
  }
});
const notFound = "";
const NotFound = defineComponent({
  name: "NotFound",
  setup(_props, { slots }) {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const { navigate } = useLink({
      to: themeLocale.value.home ?? routeLocale.value
    });
    return () => [
      h$3(SkipLink),
      h$3(CommonWrapper, { noSidebar: true }, () => {
        var _a2;
        return h$3("main", { class: "page not-found", id: "main-content" }, ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
          h$3(NotFoundHint),
          h$3("div", { class: "actions" }, [
            h$3("button", {
              type: "button",
              class: "action-button",
              onClick: () => {
                window.history.go(-1);
              }
            }, themeLocale.value.routeLocales.back),
            h$3("button", {
              type: "button",
              class: "action-button",
              onClick: () => navigate()
            }, themeLocale.value.routeLocales.home)
          ])
        ]);
      })
    ];
  }
});
const icons = { "Gitee": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>', "Gmail": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#DB4437"/><path fill="#E67C73" d="M277.48 285.567h465.767v441.362H277.48V285.567z"/><path fill="#FFF" d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z"/></svg>', "Wechat": '<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"/><path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"/><path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"/></svg>' };
const categoryMap = { "category": { "/": { "path": "/category/", "map": { "使用指南": { "path": "/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", "keys": ["v-56c59782", "v-2d0ad528"] }, "笔记": { "path": "/category/%E7%AC%94%E8%AE%B0/", "keys": ["v-cce9318c"] } } } }, "tag": { "/": { "path": "/tag/", "map": { "页面配置": { "path": "/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", "keys": ["v-56c59782"] }, "使用指南": { "path": "/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", "keys": ["v-56c59782"] }, "PPT": { "path": "/tag/ppt/", "keys": ["v-cce9318c"] } } } } };
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-cce9318c", "v-56c59782", "v-15f3a468", "v-1bda4865", "v-2e8a1b87", "v-54fc9519", "v-20833aa2", "v-fffb8e28", "v-7ec14f5c", "v-6aea5eee", "v-1242d0e0", "v-b8be1f04", "v-7c03131a", "v-b16d0f60", "v-6372ff5d", "v-9dd68ef0", "v-5caa8386", "v-2fbd3c71", "v-2940ada0", "v-485200df", "v-0f6a97ba", "v-e09ecb86", "v-341a274e", "v-7c3f7418", "v-7e07386f", "v-858cfdd6", "v-2d0ad528", "v-269ae70f", "v-7f3f3cee", "v-3b49d4b6", "v-46f649f1", "v-1a27c043", "v-27e6293a", "v-e02a7b2e", "v-6ae988d6", "v-d4a19512", "v-71457cdb", "v-c48744e4", "v-44381fd2", "v-c6604412", "v-44271714", "v-b9bc5e48", "v-36799354", "v-23d83276", "v-9b417ccc", "v-0d6f74fe", "v-774607c5", "v-c3ba9dae", "v-8e40c442", "v-83ad57fe", "v-15e38c6a", "v-22bf1c4e", "v-252217f8", "v-fde30f02", "v-e9d64f6a", "v-4b466692", "v-1ab94b83", "v-18a9f2a7", "v-b0967778"] } }, "star": { "/": { "path": "/star/", "keys": ["v-cce9318c", "v-56c59782"] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-15f3a468", "v-1bda4865", "v-2e8a1b87", "v-54fc9519", "v-20833aa2", "v-fffb8e28", "v-7ec14f5c", "v-6aea5eee", "v-1242d0e0", "v-b8be1f04", "v-7c03131a", "v-b16d0f60", "v-6372ff5d", "v-9dd68ef0", "v-5caa8386", "v-2fbd3c71", "v-2940ada0", "v-485200df", "v-0f6a97ba", "v-e09ecb86", "v-341a274e", "v-7c3f7418", "v-7e07386f", "v-858cfdd6", "v-2d0ad528", "v-269ae70f", "v-7f3f3cee", "v-3b49d4b6", "v-46f649f1", "v-1a27c043", "v-27e6293a", "v-e02a7b2e", "v-6ae988d6", "v-d4a19512", "v-71457cdb", "v-c48744e4", "v-44381fd2", "v-c6604412", "v-44271714", "v-b9bc5e48", "v-36799354", "v-23d83276", "v-9b417ccc", "v-0d6f74fe", "v-774607c5", "v-c3ba9dae", "v-8e40c442", "v-83ad57fe", "v-15e38c6a", "v-22bf1c4e", "v-252217f8", "v-fde30f02", "v-e9d64f6a", "v-4b466692", "v-1ab94b83", "v-cce9318c", "v-56c59782"] } } };
const _ = ref(categoryMap), k = (e2 = "") => {
  const m2 = usePageData(), u2 = useRouter(), i2 = useRouteLocale();
  return computed(() => {
    var r2;
    const p2 = e2 || ((r2 = usePageFrontmatter().value.blog) == null ? void 0 : r2.key) || "";
    if (!p2)
      return console.warn("useBlogCategory: key not found"), { path: "/", map: {} };
    const l2 = u2.getRoutes();
    if (!_.value[p2])
      throw new Error(`useBlogCategory: key ${p2} is invalid`);
    const n2 = _.value[p2][i2.value], o2 = { path: n2.path, map: {} };
    for (const a2 in n2.map) {
      const t2 = n2.map[a2];
      o2.map[a2] = { path: t2.path, items: [] };
      for (const B2 of t2.keys) {
        const f2 = l2.find(({ name: s2 }) => s2 === B2);
        if (f2) {
          const s2 = j(u2, f2.path);
          o2.map[a2].items.push({ path: s2.path, info: s2.meta });
        }
      }
      m2.value.path === t2.path && (o2.currentItems = o2.map[a2].items);
    }
    return o2;
  });
};
const c$1 = ref(typeMap), C$2 = (e2 = "") => {
  const m2 = useRouter(), u2 = useRouteLocale();
  return computed(() => {
    var i2;
    const r2 = e2 || ((i2 = usePageFrontmatter().value.blog) == null ? void 0 : i2.key) || "";
    if (!r2)
      return console.warn("useBlogType: key not found"), { path: "/", items: [] };
    if (!c$1.value[r2])
      throw new Error(`useBlogType: key ${e2} is invalid`);
    const p2 = m2.getRoutes(), l2 = c$1.value[r2][u2.value], n2 = { path: l2.path, items: [] };
    for (const o2 of l2.keys) {
      const a2 = p2.find(({ name: t2 }) => t2 === o2);
      if (a2) {
        const t2 = j(m2, a2.path);
        n2.items.push({ path: t2.path, info: t2.meta });
      }
    }
    return n2;
  });
};
const categoryMapSymbol = Symbol.for("categoryMap");
const useCategoryMap = () => {
  const categoryMap2 = inject(categoryMapSymbol);
  if (!categoryMap2)
    throw new Error("useCategoryMap() is called without provider.");
  return categoryMap2;
};
const setupCategoryMap = () => {
  const categoryMap2 = k("category");
  provide(categoryMapSymbol, categoryMap2);
};
const useBlogOptions = () => {
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return computed(() => ({
    ...themeData2.value.blog,
    ...themeLocale.value.blog
  }));
};
const tagMapSymbol = Symbol.for("tagMap");
const useTagMap = () => {
  const tagMap = inject(tagMapSymbol);
  if (!tagMap)
    throw new Error("useTagMap() is called without provider.");
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = k("tag");
  provide(tagMapSymbol, tagMap);
};
const useArticleAuthor = (info) => {
  const themeLocale = useThemeLocaleData();
  return computed(() => {
    const { [
      "a"
      /* ArticleInfoType.author */
    ]: author } = info.value;
    if (author)
      return ke(author);
    if (author === false)
      return [];
    return ke(themeLocale.value.author, false);
  });
};
const useArticleCategory = (info) => {
  const categoryMap2 = useCategoryMap();
  return computed(() => Se(info.value[
    "c"
    /* ArticleInfoType.category */
  ]).map((name) => ({
    name,
    path: categoryMap2.value.map[name].path
  })));
};
const useArticleTag = (info) => {
  const tagMap = useTagMap();
  return computed(() => xe(info.value[
    "g"
    /* ArticleInfoType.tag */
  ]).map((name) => ({
    name,
    path: tagMap.value.map[name].path
  })));
};
const useArticleDate = (info) => computed(() => {
  const { [
    "d"
    /* ArticleInfoType.date */
  ]: timestamp } = info.value;
  return ye(timestamp);
});
const useArticleInfo = (props) => {
  const articleInfo = toRef(props, "info");
  const blogOptions = useBlogOptions();
  const author = useArticleAuthor(articleInfo);
  const category = useArticleCategory(articleInfo);
  const tag = useArticleTag(articleInfo);
  const date = useArticleDate(articleInfo);
  const info = computed(() => ({
    author: author.value,
    category: category.value,
    date: date.value,
    localizedDate: articleInfo.value[
      "l"
      /* ArticleInfoType.localizedDate */
    ] || "",
    tag: tag.value,
    isOriginal: articleInfo.value[
      "o"
      /* ArticleInfoType.isOriginal */
    ] || false,
    readingTime: articleInfo.value[
      "r"
      /* ArticleInfoType.readingTime */
    ] || null,
    pageview: props.path
  }));
  const items = computed(() => blogOptions.value.articleInfo);
  return { info, items };
};
const articlesSymbol = Symbol("");
const useArticles = () => {
  const articles = inject(articlesSymbol);
  if (!articles)
    throw new Error("useArticles() is called without provider.");
  return articles;
};
const setupArticles = () => {
  const articles = C$2("article");
  provide(articlesSymbol, articles);
};
const starsSymbol = Symbol("");
const useStars = () => {
  const stars = inject(starsSymbol);
  if (!stars)
    throw new Error("useStars() is called without provider.");
  return stars;
};
const setupStars = () => {
  const stars = C$2("star");
  provide(starsSymbol, stars);
};
const timelinesSymbol = Symbol("");
const useTimelines = () => {
  const timelines = inject(timelinesSymbol);
  if (!timelines)
    throw new Error("useTimelines() is called without provider.");
  return timelines;
};
const setupTimelines = () => {
  const timelines = C$2("timeline");
  const timelineItems2 = computed(() => {
    const timelineItems3 = [];
    timelines.value.items.forEach(({ info, path }) => {
      const date = ye(info[
        "d"
        /* ArticleInfoType.date */
      ]);
      const year = date == null ? void 0 : date.getFullYear();
      const month = date ? date.getMonth() + 1 : null;
      const day = date == null ? void 0 : date.getDate();
      if (year && month && day) {
        if (!timelineItems3[0] || timelineItems3[0].year !== year)
          timelineItems3.unshift({ year, items: [] });
        timelineItems3[0].items.push({
          date: `${month}/${day}`,
          info,
          path
        });
      }
    });
    return {
      ...timelines.value,
      config: timelineItems3.reverse()
    };
  });
  provide(timelinesSymbol, timelineItems2);
};
const setupBlog = () => {
  setupArticles();
  setupCategoryMap();
  setupStars();
  setupTagMap();
  setupTimelines();
};
const socialMedia = "";
const SocialMedia = defineComponent({
  name: "SocialMedia",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => {
      const config2 = blogOptions.value.medias;
      return config2 ? $$2(config2).map(([media, url]) => ({
        name: media,
        icon: icons[media],
        url
      })) : [];
    });
    return () => mediaLinks.value.length ? h$3("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => h$3("a", {
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name,
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: icon
    }))) : null;
  }
});
const bloggerInfo = "";
const BloggerInfo = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a2;
      return blogOptions.value.name || ((_a2 = ke(themeLocale.value.author)[0]) == null ? void 0 : _a2.name) || siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => h$3("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      h$3("div", {
        class: "blogger",
        ...intro.value ? {
          style: { cursor: "pointer" },
          "aria-label": locale.value.intro,
          "data-balloon-pos": "down",
          role: "navigation",
          onClick: () => navigate(intro.value)
        } : {}
      }, [
        bloggerAvatar.value ? h$3("img", {
          class: [
            "blogger-avatar",
            { round: blogOptions.value.roundAvatar }
          ],
          src: withBase(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? h$3("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? h$3("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? h$3("meta", { property: "url", content: withBase(intro.value) }) : null
      ]),
      h$3("div", { class: "num-wrapper" }, [
        h$3("div", { onClick: () => navigate(articles.value.path) }, [
          h$3("div", { class: "num" }, articles.value.items.length),
          h$3("div", locale.value.article)
        ]),
        h$3("div", { onClick: () => navigate(categoryMap2.value.path) }, [
          h$3("div", { class: "num" }, h$2(categoryMap2.value.map).length),
          h$3("div", locale.value.category)
        ]),
        h$3("div", { onClick: () => navigate(tagMap.value.path) }, [
          h$3("div", { class: "num" }, h$2(tagMap.value.map).length),
          h$3("div", locale.value.tag)
        ]),
        h$3("div", { onClick: () => navigate(timelines.value.path) }, [
          h$3("div", { class: "num" }, timelines.value.items.length),
          h$3("div", locale.value.timeline)
        ])
      ]),
      h$3(SocialMedia)
    ]);
  }
});
const CategoryIcon = () => h$3(c$4, { name: "category" }, () => h$3("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => h$3(c$4, { name: "tag" }, () => h$3("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => h$3(c$4, { name: "timeline" }, () => h$3("path", {
  d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"
}));
TimelineIcon.displayName = "TimelineIcon";
const SlideIcon = () => h$3(c$4, { name: "slides" }, () => h$3("path", {
  d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"
}));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => h$3(c$4, { name: "sticky" }, () => [
  h$3("path", {
    d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"
  })
]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => h$3(c$4, { name: "article" }, () => h$3("path", {
  d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"
}));
ArticleIcon.displayName = "ArticleIcon";
const BookIcon = () => h$3(c$4, { name: "book" }, () => h$3("path", {
  d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"
}));
BookIcon.displayName = "BookIcon";
const LinkIcon = () => h$3(c$4, { name: "link" }, () => h$3("path", {
  d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"
}));
LinkIcon.displayName = "LinkIcon";
const ProjectIcon = () => h$3(c$4, { name: "project" }, () => h$3("path", {
  d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"
}));
ProjectIcon.displayName = "ProjectIcon";
const FriendIcon = () => h$3(c$4, { name: "friend" }, () => h$3("path", {
  d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"
}));
FriendIcon.displayName = "FriendIcon";
const SlideDownIcon = () => h$3(c$4, { name: "slide-down" }, () => h$3("path", {
  d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"
}));
SlideDownIcon.displayName = "SlideDownIcon";
const emptyIcon = "";
const EmptyIcon = () => h$3("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  class: "empty-icon",
  viewBox: "0 0 1024 1024",
  innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
});
EmptyIcon.displayName = "EmptyIcon";
const LockIcon = () => h$3(c$4, { name: "lock" }, () => h$3("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
const articleItem = "";
const ArticleItem = defineComponent({
  name: "ArticleItem",
  props: {
    /**
     * Article information
     *
     * 文章信息
     */
    info: {
      type: Object,
      required: true
    },
    /**
     * Article path
     *
     * 文章路径
     */
    path: { type: String, required: true }
  },
  setup(props) {
    const info = toRef(props, "info");
    const { info: articleInfo, items } = useArticleInfo(props);
    return () => h$3("div", { class: "article-item" }, h$3("article", {
      class: "article",
      vocab: "https://schema.org/",
      typeof: "Article"
    }, [
      info.value[
        "u"
        /* ArticleInfoType.sticky */
      ] ? h$3(StickyIcon) : null,
      h$3(RouterLink, { to: props.path }, () => [
        h$3("header", { class: "title" }, [
          info.value[
            "n"
            /* ArticleInfoType.isEncrypted */
          ] ? h$3(LockIcon) : null,
          info.value[
            "y"
            /* ArticleInfoType.type */
          ] === "s" ? h$3(SlideIcon) : null,
          h$3("span", { property: "headline" }, info.value[
            "t"
            /* ArticleInfoType.title */
          ]),
          info.value[
            "v"
            /* ArticleInfoType.cover */
          ] ? h$3("meta", {
            property: "image",
            content: withBase(info.value[
              "v"
              /* ArticleInfoType.cover */
            ])
          }) : null
        ])
      ]),
      info.value[
        "e"
        /* ArticleInfoType.excerpt */
      ] ? h$3("div", {
        class: "article-excerpt",
        innerHTML: info.value[
          "e"
          /* ArticleInfoType.excerpt */
        ]
      }) : null,
      h$3("hr", { class: "hr" }),
      h$3(PageInfo, {
        info: articleInfo.value,
        ...items.value ? { items: items.value } : {}
      })
    ]));
  }
});
const message = "";
const pagination = "";
const Pagination = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pagination",
  props: {
    /**
     * Number of total items
     *
     * 项目总数
     */
    total: { type: Number, default: 10 },
    /**
     * Items per page
     *
     * 每页项目数
     */
    perPage: { type: Number, default: 10 },
    /**
     * Current page number
     *
     * 当前页面
     */
    current: { type: Number, default: 1 }
  },
  emits: ["updateCurrentPage"],
  setup(props, { emit }) {
    let message2;
    const themeLocale = useThemeLocaleData();
    const input = ref("");
    const locale = computed(() => themeLocale.value.paginationLocales);
    const totalPages = computed(() => Math.ceil(props.total / props.perPage));
    const enable = computed(() => Boolean(totalPages.value) && totalPages.value !== 1);
    const displayLeftEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current > 4;
    });
    const displayRightEllipsis = computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.current < totalPages.value - 3;
    });
    const indexes = computed(() => {
      const { current: currentPage } = props;
      let min = 1;
      let max2 = totalPages.value;
      const arr = [];
      if (totalPages.value >= 7) {
        if (currentPage <= 4 && currentPage < totalPages.value - 3) {
          min = 1;
          max2 = 5;
        } else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
          max2 = totalPages.value;
          min = totalPages.value - 4;
        } else if (totalPages.value > 7) {
          min = currentPage - 2;
          max2 = currentPage + 2;
        }
      }
      for (let i2 = min; i2 <= max2; i2++)
        arr.push(i2);
      return arr;
    });
    const navigate = (page2) => emit("updateCurrentPage", page2);
    const jumpPage = (index2) => {
      const pageNum = parseInt(index2);
      if (pageNum <= totalPages.value && pageNum > 0)
        navigate(pageNum);
      else
        message2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${locale.value.errorText.replace(/\$page/g, totalPages.value.toString())}`);
    };
    onMounted(() => {
      message2 = new Ne();
    });
    return () => h$3("div", { class: "pagination-wrapper" }, enable.value ? h$3("div", { class: "pagination-list" }, [
      h$3("div", { class: "page-number" }, [
        // prev button
        props.current > 1 ? h$3("div", {
          class: "prev",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current - 1)
        }, locale.value.prev) : null,
        // left ellipsis
        ...displayLeftEllipsis.value ? [
          h$3("div", {
            role: "navigation",
            onClick: () => navigate(1)
          }, 1),
          h$3("div", { class: "ellipsis" }, "...")
        ] : [],
        // numbers
        ...indexes.value.map((num) => h$3("div", {
          key: num,
          class: { active: props.current === num },
          role: "navigation",
          onClick: () => navigate(num)
        }, num)),
        // right ellipsis
        ...displayRightEllipsis.value ? [
          h$3("div", { class: "ellipsis" }, "..."),
          h$3("div", {
            role: "navigation",
            onClick: () => navigate(totalPages.value)
          }, totalPages.value)
        ] : [],
        // next button
        props.current < totalPages.value ? h$3("div", {
          class: "next",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.current + 1)
        }, locale.value.next) : null
      ]),
      h$3("div", { class: "navigate-wrapper" }, [
        h$3("label", { for: "navigation-text" }, `${locale.value.navigate}: `),
        h$3("input", {
          id: "navigation-text",
          value: input.value,
          onInput: ({ target }) => {
            input.value = target.value;
          },
          onKeydown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              jumpPage(input.value);
            }
          }
        }),
        h$3("button", {
          class: "navigate",
          role: "navigation",
          title: locale.value.action,
          onClick: () => jumpPage(input.value)
        }, locale.value.action)
      ])
    ]) : []);
  }
});
const articleList = "";
const ArticleList = defineComponent({
  name: "ArticleList",
  props: {
    /**
     * Articles
     *
     * 文章项目
     */
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const blogOptions = useBlogOptions();
    const currentPage = ref(1);
    const articlePerPage = computed(() => blogOptions.value.articlePerPage || 10);
    const currentArticles = computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
    const updatePage = (page2) => {
      currentPage.value = page2;
      const query = { ...route.query };
      if (query["page"] === page2.toString() || page2 === 1 && !query["page"])
        return;
      if (page2 === 1)
        delete query["page"];
      else
        query["page"] = page2.toString();
      void router.push({ path: route.path, query });
    };
    onMounted(() => {
      const { page: page2 } = route.query;
      updatePage(page2 ? Number(page2) : 1);
      watch(currentPage, () => {
        const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
        setTimeout(() => {
          window.scrollTo(0, distance);
        }, 100);
      });
    });
    return () => h$3("div", { id: "article-list", class: "article-wrapper" }, currentArticles.value.length ? [
      ...currentArticles.value.map(({ info, path }, index2) => h$3(DropTransition, { appear: true, delay: index2 * 0.04 }, () => h$3(ArticleItem, { key: path, info, path }))),
      h$3(Pagination, {
        current: currentPage.value,
        perPage: articlePerPage.value,
        total: props.items.length,
        onUpdateCurrentPage: updatePage
      })
    ] : h$3(EmptyIcon));
  }
});
const categoryList = "";
const CategoryList = defineComponent({
  name: "CategoryList",
  setup() {
    const page2 = usePageData();
    const categoryMap2 = useCategoryMap();
    return () => h$3("ul", { class: "category-list-wrapper" }, $$2(categoryMap2.value.map).map(([category, { path, items }]) => h$3("li", {
      class: [
        "category",
        // TODO: magic number 9 is tricky here
        `category${Ee(category, 9)}`,
        { active: path === page2.value.path }
      ]
    }, h$3(RouterLink, { to: path }, () => [
      category,
      h$3("span", { class: "category-num" }, items.length)
    ]))));
  }
});
const tagList = "";
const TagList = defineComponent({
  name: "TagList",
  setup() {
    const frontmatter = usePageFrontmatter();
    const tagMap = useTagMap();
    const isActive = (name) => {
      var _a2;
      return name === ((_a2 = frontmatter.value.blog) == null ? void 0 : _a2.name);
    };
    return () => h$3("ul", { class: "tag-list-wrapper" }, $$2(tagMap.value.map).map(([tag, { path, items }]) => h$3("li", {
      class: [
        "tag",
        // TODO: magic number 9 is tricky here
        `tag${Ee(tag, 9)}`,
        { active: isActive(tag) }
      ]
    }, h$3(RouterLink, { to: path }, () => [
      tag,
      h$3("span", { class: "tag-num" }, items.length)
    ]))));
  }
});
const timelineList = "";
const TimelineList = defineComponent({
  name: "TimelineList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const hint = computed(() => themeLocale.value.blogLocales.timeline);
    return () => h$3("div", { class: "timeline-list-wrapper" }, [
      h$3("div", {
        class: "timeline-list-title",
        onClick: () => navigate(timelines.value.path)
      }, [
        h$3(TimelineIcon),
        h$3("span", { class: "num" }, timelines.value.items.length),
        hint.value
      ]),
      h$3("hr"),
      h$3("div", { class: "timeline-content" }, h$3("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index2) => h$3(DropTransition, { appear: true, delay: 0.08 * (index2 + 1) }, () => h$3("li", [
        h$3("h3", { class: "timeline-year" }, year),
        h$3("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => h$3("li", { class: "timeline-item" }, [
          h$3("span", { class: "timeline-date" }, date),
          h$3(RouterLink, {
            class: "timeline-title",
            to: path
          }, () => info[
            "t"
            /* ArticleInfoType.title */
          ])
        ])))
      ])))))
    ]);
  }
});
const infoList = "";
const InfoList = defineComponent({
  name: "InfoList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const categoryNumber = computed(() => h$2(categoryMap2.value.map).length);
    const stars = useStars();
    const tagMap = useTagMap();
    const tagNumber = computed(() => h$2(tagMap.value.map).length);
    const navigate = useNavigate();
    const active = ref("article");
    const locale = computed(() => themeLocale.value.blogLocales);
    const buttons = [
      ["article", ArticleIcon],
      ["category", CategoryIcon],
      ["tag", TagIcon],
      ["timeline", TimelineIcon]
    ];
    return () => h$3("div", { class: "blog-info-list" }, [
      h$3("div", { class: "blog-type-wrapper" }, buttons.map(([key, icon]) => h$3("button", {
        type: "button",
        class: "blog-type-button",
        onClick: () => {
          active.value = key;
        }
      }, h$3("div", {
        class: ["icon-wrapper", { active: active.value === key }],
        "aria-label": locale.value[key],
        "data-balloon-pos": "up"
      }, h$3(icon))))),
      h$3(DropTransition, () => (
        // article
        active.value === "article" ? h$3("div", { class: "sticky-article-wrapper" }, [
          h$3("div", {
            class: "title",
            onClick: () => navigate(articles.value.path)
          }, [
            h$3(ArticleIcon),
            h$3("span", { class: "num" }, articles.value.items.length),
            locale.value.article
          ]),
          h$3("hr"),
          h$3("ul", { class: "sticky-article-list" }, stars.value.items.map(({ info, path }, index2) => h$3(DropTransition, { appear: true, delay: 0.08 * (index2 + 1) }, () => h$3("li", { class: "sticky-article" }, h$3(RouterLink, { to: path }, () => info[
            "t"
            /* ArticleInfoType.title */
          ])))))
        ]) : active.value === "category" ? h$3("div", { class: "category-wrapper" }, [
          categoryNumber.value ? h$3("div", {
            class: "title",
            onClick: () => navigate(categoryMap2.value.path)
          }, [
            h$3(CategoryIcon),
            h$3("span", { class: "num" }, categoryNumber.value),
            locale.value.category
          ]) : null,
          h$3("hr"),
          h$3(DropTransition, { delay: 0.04 }, () => h$3(CategoryList))
        ]) : active.value === "tag" ? h$3("div", { class: "tag-wrapper" }, [
          tagNumber.value ? h$3("div", {
            class: "title",
            onClick: () => navigate(tagMap.value.path)
          }, [
            h$3(TagIcon),
            h$3("span", { class: "num" }, tagNumber.value),
            locale.value.tag
          ]) : null,
          h$3("hr"),
          h$3(DropTransition, { delay: 0.04 }, () => h$3(TagList))
        ]) : h$3(DropTransition, () => h$3(TimelineList))
      ))
    ]);
  }
});
const page = "";
const BlogWrapper = defineComponent({
  name: "BlogWrapper",
  setup(_props, { slots }) {
    const { isMobile } = useWindowSize();
    return () => [
      h$3(SkipLink),
      h$3(CommonWrapper, { noSidebar: true }, {
        default: () => {
          var _a2;
          return (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots);
        },
        navScreenBottom: () => h$3(BloggerInfo),
        ...isMobile.value ? { sidebar: () => h$3(InfoList) } : {}
      })
    ];
  }
});
const infoPanel = "";
const InfoPanel = () => h$3("aside", { class: "blog-info-wrapper" }, [
  h$3(DropTransition, () => h$3(BloggerInfo)),
  h$3(DropTransition, { delay: 0.04 }, () => h$3(InfoList))
]);
InfoPanel.displayName = "InfoPanel";
const BlogCategory = defineComponent({
  name: "BlogPage",
  components: {
    CategoryList,
    TagList
  },
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const blogOptions = computed(() => frontmatter.value.blog || {});
    const componentName = computed(() => {
      const { key = "" } = blogOptions.value;
      return key === "category" ? "CategoryList" : key === "tag" ? "TagList" : null;
    });
    const items = computed(() => {
      const { name = "", key = "" } = blogOptions.value;
      return key === "category" ? name ? categoryMap2.value.map[name].items : [] : key === "tag" ? name ? tagMap.value.map[name].items : [] : [];
    });
    return () => h$3(BlogWrapper, () => h$3("div", { class: "page blog" }, h$3("div", { class: "blog-page-wrapper" }, [
      h$3("main", { class: "blog-main", id: "main-content" }, [
        h$3(DropTransition, () => componentName.value ? h$3(resolveComponent(componentName.value)) : null),
        blogOptions.value.name ? h$3(DropTransition, { appear: true, delay: 0.24 }, () => h$3(ArticleList, { key: page2.value.path, items: items.value })) : null
      ]),
      h$3(DropTransition, { delay: 0.16 }, () => h$3(InfoPanel))
    ])));
  }
});
const defaultHeroBgImagePath = "/spoony-z/assets/hero-197a9d2d.jpg";
const blogHero = "";
const BlogHero = defineComponent({
  name: "BlogHero",
  setup() {
    const title = usePageHeadTitle();
    const frontmatter = usePageFrontmatter();
    const hero = ref();
    const heroImage = computed(() => frontmatter.value.heroImage || null);
    const isFullScreen = computed(() => frontmatter.value.heroFullScreen || false);
    const bgImage = computed(() => {
      const { bgImage: bgImage2 } = frontmatter.value;
      return isString(bgImage2) ? withBase(bgImage2) : bgImage2 === false ? null : defaultHeroBgImagePath;
    });
    return () => frontmatter.value.hero === false ? null : h$3("div", {
      ref: hero,
      class: [
        "blog-hero",
        {
          fullscreen: isFullScreen.value,
          "no-bg": !bgImage.value
        }
      ]
    }, [
      bgImage.value ? h$3("div", {
        class: "mask",
        style: [
          {
            background: `url(${bgImage.value}) center/cover no-repeat`
          },
          frontmatter.value.bgImageStyle
        ]
      }) : null,
      h$3(DropTransition, { appear: true, delay: 0.04 }, () => heroImage.value ? h$3("img", {
        class: "hero-image",
        style: frontmatter.value.heroImageStyle,
        src: withBase(heroImage.value),
        alt: frontmatter.value.heroAlt || "hero image"
      }) : null),
      h$3(DropTransition, { appear: true, delay: 0.08 }, () => frontmatter.value.heroText === false ? null : h$3("h1", frontmatter.value.heroText || title.value)),
      h$3(DropTransition, { appear: true, delay: 0.12 }, () => frontmatter.value.tagline ? h$3("p", {
        class: "description",
        innerHTML: frontmatter.value.tagline
      }) : null),
      isFullScreen.value ? h$3("button", {
        type: "button",
        class: "slide-down-button",
        onClick: () => {
          window.scrollTo({
            top: hero.value.clientHeight,
            behavior: "smooth"
          });
        }
      }, [h$3(SlideDownIcon), h$3(SlideDownIcon)]) : null
    ]);
  }
});
const projectPanel = "";
const AVAILABLE_PROJECT_TYPES = [
  "link",
  "article",
  "book",
  "project",
  "friend"
];
const ProjectPanel = defineComponent({
  name: "ProjectPanel",
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  setup() {
    const frontmatter = usePageFrontmatter();
    const pure = usePure();
    const navigate = useNavigate();
    const renderIcon = (icon = "", alt = "icon") => {
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return h$3(resolveComponent(`${icon}-icon`));
      if (isLinkHttp(icon))
        return h$3("img", { src: icon, alt, class: "image" });
      if (ze(icon))
        return h$3("img", { src: withBase(icon), alt, class: "image" });
      return h$3(HopeIcon, { icon });
    };
    return () => {
      var _a2;
      return ((_a2 = frontmatter.value.projects) == null ? void 0 : _a2.length) ? h$3("div", { class: "project-panel" }, frontmatter.value.projects.map(({ icon, link, name, desc }, index2) => h$3("div", {
        class: [
          "project",
          // TODO: magic number 9 is tricky here
          { [`project${index2 % 9}`]: !pure.value }
        ],
        onClick: () => navigate(link)
      }, [
        renderIcon(icon, name),
        h$3("div", { class: "name" }, name),
        h$3("div", { class: "desc" }, desc)
      ]))) : null;
    };
  }
});
const home = "";
const BlogHome$1 = defineComponent({
  name: "BlogHome",
  setup() {
    const articles = useArticles();
    return () => h$3("div", { class: "page blog" }, [
      h$3(BlogHero),
      h$3("div", { class: "blog-page-wrapper" }, [
        h$3("main", { class: "blog-home", id: "main-content" }, [
          h$3(DropTransition, { appear: true, delay: 0.16 }, () => h$3(ProjectPanel)),
          h$3(DropTransition, { appear: true, delay: 0.24 }, () => h$3(ArticleList, { items: articles.value.items }))
        ]),
        h$3(DropTransition, { appear: true, delay: 0.16 }, () => h$3(InfoPanel))
      ]),
      h$3(DropTransition, { appear: true, delay: 0.28 }, () => h$3(MarkdownContent))
    ]);
  }
});
const BlogHome = defineComponent({
  name: "BlogHome",
  setup() {
    return () => h$3(BlogWrapper, () => h$3(BlogHome$1));
  }
});
const articleType = "";
const ArticleType = defineComponent({
  name: "ArticleType",
  setup() {
    const page2 = usePageData();
    const localePath = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const stars = useStars();
    const types = computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        ...[].map(({ key, path }) => ({
          text: locale[key],
          path: path.replace(/^\//, localePath.value)
        }))
      ];
    });
    return () => h$3("ul", { class: "article-type-wrapper" }, types.value.map((type2) => h$3("li", {
      class: [
        "article-type",
        { active: type2.path === page2.value.path }
      ]
    }, h$3(RouterLink, { to: type2.path }, () => type2.text))));
  }
});
const BlogType = defineComponent({
  name: "BlogPage",
  setup() {
    const blogType = C$2();
    const frontmatter = usePageFrontmatter();
    const page2 = usePageData();
    const articles = useArticles();
    const stars = useStars();
    const items = computed(() => {
      const { key = "", type: type2 } = frontmatter.value.blog || {};
      return key === "star" ? stars.value.items : type2 === "type" && key ? blogType.value.items : articles.value.items;
    });
    return () => h$3(BlogWrapper, () => h$3("div", { class: "page blog" }, h$3("div", { class: "blog-page-wrapper" }, [
      h$3("main", { class: "blog-main", id: "main-content" }, [
        h$3(DropTransition, () => h$3(ArticleType)),
        h$3(DropTransition, { appear: true, delay: 0.24 }, () => h$3(ArticleList, { key: page2.value.path, items: items.value }))
      ]),
      h$3(DropTransition, { delay: 0.16 }, () => h$3(InfoPanel))
    ])));
  }
});
const timelineItems = "";
const TimelineItems = defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const hint = computed(() => blogOptions.value.timeline || themeLocale.value.blogLocales.timelineTitle);
    const items = computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => h$3("div", { class: "timeline-wrapper" }, h$3("ul", { class: "timeline-content" }, [
      h$3(DropTransition, () => h$3("li", { class: "motto" }, hint.value)),
      h$3(TOC, { items: items.value }),
      ...timelines.value.config.map(({ year, items: items2 }, index2) => h$3(DropTransition, { appear: true, delay: 0.08 * (index2 + 1), type: "group" }, () => [
        h$3("h3", { key: "title", id: year, class: "timeline-year-title" }, h$3("span", year)),
        h$3("li", { key: "content", class: "timeline-year-list" }, [
          h$3("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => h$3("li", { class: "timeline-item" }, [
            h$3("span", { class: "timeline-date" }, date),
            h$3(RouterLink, {
              class: "timeline-title",
              to: path
            }, () => info[
              "t"
              /* ArticleInfoType.title */
            ])
          ])))
        ])
      ]))
    ]));
  }
});
const Timeline = defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Timeline",
  components: {
    ArticleType,
    CategoryList,
    TagList
  },
  setup() {
    return () => h$3(BlogWrapper, () => h$3("div", { class: "page blog" }, h$3("div", { class: "blog-page-wrapper" }, [
      h$3("main", { class: "blog-main", id: "main-content" }, [
        h$3(DropTransition, { appear: true, delay: 0.24 }, () => h$3(TimelineItems))
      ]),
      h$3(DropTransition, { delay: 0.16 }, () => h$3(InfoPanel))
    ])));
  }
});
const layout = "";
const passwordModal = "";
const PasswordModal = defineComponent({
  name: "PasswordModal",
  props: {
    /**
     * Whether is fullscreen
     *
     * 是否是全屏
     */
    full: Boolean
  },
  emits: ["verify"],
  setup(props, { emit }) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const password = ref("");
    const hasTried = ref(false);
    const remember = ref(false);
    const locale = computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value, remember.value);
      void nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => h$3("div", {
      class: [
        "password-layer",
        { expand: props.full || frontmatter.value["home"] }
      ]
    }, h$3("div", { class: "password-modal" }, [
      h$3("div", { class: ["hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : h$3(LockIcon, { "aria-label": locale.value.iconLabel })),
      h$3("div", { class: "password" }, [
        h$3("input", {
          type: "password",
          value: password.value,
          placeholder: locale.value.placeholder,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        })
      ]),
      h$3("div", { class: "remember-password" }, [
        h$3("input", {
          type: "checkbox",
          value: remember.value,
          onChange: () => remember.value = !remember.value
        }),
        locale.value.remember
      ]),
      h$3("button", { type: "button", class: "submit", onClick: () => verify() }, "OK")
    ]));
  }
});
const useEncryptData = () => {
  const themeData2 = useThemeData();
  return computed(() => themeData2.value.encrypt || {});
};
const STORAGE_KEY$1 = "VUEPRESS_HOPE_GLOBAL_TOKEN";
const useGlobalEncrypt = () => {
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY$1, "");
  const sessionToken = useSessionStorage(STORAGE_KEY$1, "");
  const isEncrypted = computed(() => {
    const { global: global2 = false, admin = [] } = encryptData.value;
    return global2 && admin.length > 0;
  });
  const isDecrypted = computed(() => {
    if (isEncrypted.value) {
      if (localToken.value)
        return encryptData.value.admin.some((hash) => compareSync(localToken.value, hash));
      if (sessionToken.value)
        return encryptData.value.admin.some((hash) => compareSync(sessionToken.value, hash));
    }
    return false;
  });
  const validate = (inputToken, keep = false) => {
    (keep ? localToken : sessionToken).value = inputToken;
  };
  return {
    isEncrypted,
    isDecrypted,
    validate
  };
};
const checkToken = (token = "", hash) => Boolean(token) && compareSync(token, hash);
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
const usePathEncrypt = () => {
  const page2 = usePageData();
  const encryptData = useEncryptData();
  const localToken = useStorage(STORAGE_KEY, {});
  const sessionToken = useSessionStorage(STORAGE_KEY, {});
  const getPathMatchedKeys = (path) => isPlainObject(encryptData.value.config) ? h$2(encryptData.value.config).filter((key) => A$1(decodeURI(path), key)).sort((a2, b2) => b2.length - a2.length) : [];
  const getStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length > 0) {
      const { config: config2 = {} } = encryptData.value;
      return {
        isEncrypted: true,
        isDecrypted: matchedKeys.some((key) => localToken.value[key] && config2[key].some((token) => checkToken(localToken.value[key], token)) || sessionToken.value[key] && config2[key].some((token) => checkToken(sessionToken.value[key], token)))
      };
    }
    return {
      isDecrypted: false,
      isEncrypted: false
    };
  };
  const status = computed(() => getStatus(page2.value.path));
  const validate = (inputToken, keep = false) => {
    const { config: config2 = {} } = encryptData.value;
    const matchedKeys = getPathMatchedKeys(page2.value.path);
    for (const hitKey of matchedKeys)
      if (config2[hitKey].filter((token) => checkToken(inputToken, token))) {
        (keep ? localToken : sessionToken).value[hitKey] = inputToken;
        break;
      }
  };
  return {
    status,
    getStatus,
    validate
  };
};
const GlobalEncrypt = defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isDecrypted, isEncrypted, validate } = useGlobalEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => h$3(FadeSlideY, () => {
      var _a2, _b2;
      return isEncrypted.value ? isMounted.value ? isDecrypted.value ? (_a2 = slots["default"]) == null ? void 0 : _a2.call(slots) : h$3(PasswordModal, { full: true, onVerify: validate }) : null : (_b2 = slots["default"]) == null ? void 0 : _b2.call(slots);
    });
  }
});
const LocalEncrypt = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { status, validate } = usePathEncrypt();
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a2, _b2;
      const { isEncrypted, isDecrypted } = status.value;
      return isEncrypted ? isMounted.value ? isDecrypted ? ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || null : h$3(PasswordModal, { full: true, onVerify: validate }) : null : ((_b2 = slots["default"]) == null ? void 0 : _b2.call(slots)) || null;
    };
  }
});
const slidePage = "";
var d$2 = defineComponent({ name: "SlidePage", setup() {
  const i2 = useRouter(), o2 = ref(false), n2 = ref(), s2 = () => {
    o2.value = !o2.value;
  }, e2 = () => {
    o2.value = false;
  }, u2 = () => {
    e2(), window.history.go(-1);
  }, r2 = () => {
    e2(), i2.push("/");
  };
  return onClickOutside(n2, e2), () => h$3("div", { class: "presentation" }, [h$3(Content), h$3("div", { ref: n2, class: ["menu", { active: o2.value }] }, [h$3("button", { type: "button", class: "menu-button", onClick: () => s2() }, h$3("span", { class: "icon" })), h$3("button", { type: "button", class: "back-button", onClick: () => u2() }, h$3(q$2)), h$3("button", { type: "button", class: "home-button", onClick: () => r2() }, h$3(a$1))])]);
} });
const index = "";
const clientConfig9 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
    injectDarkmode(app);
    app.component("HopeIcon", HopeIcon);
    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide: d$2
  }
});
const photoswipe = "";
const photoSwipe = "";
const T = ".theme-default-content :not(a) > img:not([no-view])", C$1 = { "/": { "closeTitle": "关闭按钮标签文字", "downloadTitle": "下载图片", "fullscreenTitle": "全屏按钮标签文字", "zoomTitle": "缩放按钮标签文字", "arrowPrevTitle": "上一个 (左箭头)", "arrowNextTitle": "下一个 (右箭头)", "shareTitle": "分享按钮标签文字", "prevTitle": "上一张图片按钮标签文字", "nextTitle": "下一张图片按钮标签文字" } }, O$1 = 800, x = {}, A = (e2) => isString(e2) ? Array.from(document.querySelectorAll(e2)) : e2.map((t2) => Array.from(document.querySelectorAll(t2))).flat(), p = (e2) => new Promise((t2, n2) => {
  e2.complete ? t2({ src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt }) : (e2.onload = () => t2(p(e2)), e2.onerror = (s2) => n2(s2));
}), H$1 = () => {
  const { isSupported: e2, toggle: t2 } = useFullscreen(), n2 = le(C$1), s2 = usePageData(), c2 = () => Promise.all([import("photoswipe"), nextTick().then(() => new Promise((l2) => setTimeout(l2, O$1)).then(() => A(T)))]).then(([{ default: l2 }, m2]) => {
    const h2 = '<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>';
    m2.forEach((d2, v2) => {
      const u2 = () => {
        const a2 = Array(m2.length).fill({ html: h2 }), o2 = new l2({ dataSource: a2, preloaderDelay: 0, ...n2.value, ...x, index: v2 });
        o2.on("uiRegister", () => {
          e2 && o2.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
            t2();
          } }), o2.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (r2, i2) => {
            r2.setAttribute("download", ""), r2.setAttribute("target", "_blank"), r2.setAttribute("rel", "noopener"), i2.on("change", () => {
              r2.href = i2.currSlide.data.src;
            });
          } });
        }), o2.init(), m2.forEach((r2, i2) => {
          p(r2).then((g2) => {
            a2.splice(i2, 1, g2), o2.refreshSlideContent(i2);
          });
        });
      };
      d2.style.cursor = "zoom-in", d2.addEventListener("click", () => {
        u2();
      }), d2.addEventListener("keypress", ({ key: a2 }) => {
        a2 === "Enter" && u2();
      });
    });
  });
  onMounted(() => {
    c2(), watch(() => s2.value.path, () => c2());
  });
};
var I = defineClientConfig({ setup: () => {
  H$1();
} });
const c = () => h$3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", preserveAspectRatio: "xMidYMid", viewBox: "0 0 100 100" }, [h$3("circle", { cx: "28", cy: "75", r: "11", fill: "currentColor" }, h$3("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1s", keyTimes: "0;0.2;1", repeatCount: "indefinite", values: "0;1;1" })), h$3("path", { fill: "none", stroke: "#88baf0", "stroke-width": "10", d: "M28 47a28 28 0 0 1 28 28" }, h$3("animate", { attributeName: "stroke-opacity", begin: "0.1s", dur: "1s", keyTimes: "0;0.2;1", repeatCount: "indefinite", values: "0;1;1" })), h$3("path", { fill: "none", stroke: "#88baf0", "stroke-width": "10", d: "M28 25a50 50 0 0 1 50 50" }, h$3("animate", { attributeName: "stroke-opacity", begin: "0.2s", dur: "1s", keyTimes: "0;0.2;1", repeatCount: "indefinite", values: "0;1;1" }))]);
c.displayName = "LoadingIcon";
const n = ({ hint: s2 }) => h$3("div", { class: "search-pro-result loading" }, [h$3(c), s2]);
n.displayName = "SearchLoading";
const l = () => h$3(c$4, { name: "close" }, () => h$3("path", { d: "M507.168 473.232 716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z" }));
l.displayName = "CloseIcon";
const h = () => h$3(c$4, { name: "heading" }, () => h$3("path", { d: "M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z" }));
h.displayName = "HeadingIcon";
const d$1 = () => h$3(c$4, { name: "heart" }, () => h$3("path", { d: "M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z" }));
d$1.displayName = "HeartIcon";
const m = () => h$3(c$4, { name: "history" }, () => h$3("path", { d: "M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z" }));
m.displayName = "HistoryIcon";
const y = () => h$3(c$4, { name: "title" }, () => h$3("path", { d: "M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z" }));
y.displayName = "TitleIcon";
const u = () => h$3(c$4, { name: "search" }, () => h$3("path", { d: "M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28" }));
u.displayName = "SearchIcon";
const r = { "delay": 300, "queryHistoryCount": 5, "resultHistoryCount": 5, "hotKeys": [{ "key": "k", "ctrl": true }], "worker": "search-pro.worker.js" }, H = { "0": "分类：$content", "1": "标签：$content" }, C = r.hotKeys, v$1 = { "/": { "cancel": "取消", "placeholder": "搜索", "search": "搜索", "searching": "搜索中", "select": "选择", "navigate": "切换", "exit": "关闭", "history": "搜索历史", "emptyHistory": "无搜索历史", "emptyResult": "没有找到结果", "loading": "正在加载搜索索引..." } }, g = "search-pro-query-history", e = useLocalStorage(g, []), L = () => {
  const { queryHistoryCount: s2 } = r, i2 = s2 > 0;
  return { enabled: i2, queryHistory: e, addQueryHistory: (o2) => {
    i2 && (e.value.length < s2 ? e.value = Array.from(/* @__PURE__ */ new Set([o2, ...e.value])) : e.value = Array.from(/* @__PURE__ */ new Set([o2, ...e.value.slice(0, s2 - 1)])));
  }, removeQueryHistory: (o2) => {
    e.value = [...e.value.slice(0, o2), ...e.value.slice(o2 + 1)];
  } };
};
const searchBox = "";
const searchModal = "";
const d = Symbol(""), D = () => {
  const e2 = ref(false);
  provide(d, e2);
}, N = (e2) => e2 instanceof Element ? document.activeElement === e2 && (["TEXTAREA", "SELECT", "INPUT"].includes(e2.tagName) || e2.hasAttribute("contenteditable")) : false, Y = (e2) => C.some((s2) => {
  const { key: n2, ctrl: r2 = false, shift: o2 = false, alt: c2 = false, meta: l2 = false } = s2;
  return n2 === e2.key && r2 === e2.ctrlKey && o2 === e2.shiftKey && c2 === e2.altKey && l2 === e2.metaKey;
}), O = '<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>', R = '<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>', q = '<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>', B = '<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>', v = C[0];
var Q = defineComponent({ name: "SearchBox", setup() {
  const e2 = le(v$1), s2 = inject(d), n2 = ref(false), r2 = computed(() => v ? [...(n2.value ? ["⌃", "⇧", "⌥", "⌘"] : ["Ctrl", "Shift", "Alt", "Win"]).filter((o2, c2) => v[["ctrl", "shift", "alt", "meta"][c2]]), v.key.toUpperCase()] : null);
  return useEventListener("keydown", (o2) => {
    !s2.value && Y(o2) && !N(o2.target) && (o2.preventDefault(), s2.value = true);
  }), onMounted(() => {
    const { userAgent: o2 } = navigator;
    n2.value = we(o2) || ve(o2) || ge(o2);
  }), () => [h$3("button", { type: "button", class: "search-pro-button", role: "search", "aria-label": e2.value.search, onClick: () => {
    s2.value = true;
  } }, [h$3(u), h$3("div", { class: "placeholder" }, e2.value.search), r2.value ? h$3("div", { class: "key-hints" }, r2.value.map((o2) => h$3("kbd", { class: "key" }, o2))) : null])];
} });
const V = defineAsyncComponent({ loader: () => import("./assets/SearchResult-c59bbba0.js"), loadingComponent: () => {
  const e2 = le(v$1);
  return h$3(n, { hint: e2.value.loading });
} });
var W = defineComponent({ name: "SearchModal", setup() {
  const e2 = inject(d), s2 = useSiteLocaleData(), n2 = ce(), r2 = le(v$1), { enabled: o2, queryHistory: c2 } = L(), l2 = ref(""), m2 = ref();
  return watch(e2, (t2) => {
    t2 && nextTick().then(() => {
      var i2;
      (i2 = m2.value) == null || i2.focus();
    });
  }), useEventListener("keydown", (t2) => {
    e2.value && t2.key === "Escape" && (e2.value = false);
  }), onMounted(() => {
    const t2 = useScrollLock(document.body);
    watch(e2, (i2) => {
      t2.value = i2;
    }), onUnmounted(() => {
      t2.value = false;
    });
  }), () => e2.value ? h$3("div", { class: "search-pro-modal-wrapper" }, [h$3("div", { class: "background", onClick: () => {
    e2.value = false, l2.value = "";
  } }), h$3("div", { class: "search-pro-modal" }, [h$3("div", { class: "search-pro-box" }, [h$3("form", [h$3("label", { for: "search-pro", "aria-label": r2.value.search }, h$3(u)), h$3("input", { ref: m2, type: "search", class: "search-pro-input", id: "search-pro", placeholder: r2.value.placeholder, spellcheck: "false", autocapitalize: "off", autocorrect: "off", autocomplete: o2 ? "on" : "off", name: `${s2.value.title}-search`, list: "search-pro-dataset", value: l2.value, "aria-controls": "search-pro-results", onInput: ({ target: t2 }) => {
    l2.value = t2.value;
  } }), h$3("dataset", { id: "search-pro-dataset" }, c2.value.map((t2) => h$3("options", { value: t2 })))]), h$3("button", { type: "button", class: "close-button", onClick: () => {
    e2.value = false, l2.value = "";
  } }, r2.value.cancel)]), h$3(V, { query: l2.value, onClose: () => {
    e2.value = false;
  }, onUpdateQuery: (t2) => {
    l2.value = t2;
  } }), n2.value ? null : h$3("div", { class: "search-pro-hints" }, [h$3("span", { class: "search-pro-hint" }, [h$3("kbd", { innerHTML: O }), r2.value.select]), h$3("span", { class: "search-pro-hint" }, [h$3("kbd", { innerHTML: q }), h$3("kbd", { innerHTML: R }), r2.value.navigate]), h$3("span", { class: "search-pro-hint" }, [h$3("kbd", { innerHTML: B }), r2.value.exit])])])]) : null;
} }), $ = defineClientConfig({ enhance({ app: e2 }) {
  e2.component("SearchBox", Q);
}, setup() {
  D();
}, rootComponents: [W] });
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  K$1,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  Y$2,
  clientConfig8,
  clientConfig9,
  I,
  $
];
const pagesRoutes = [
  ["v-8daa1a0e", "/", { "y": "h", "t": "首页", "i": "home" }, ["/index.html", "/README.md"]],
  ["v-54fc9519", "/development-notes/", { "d": 1681635726e3, "r": { "minutes": 0.03, "words": 9 }, "y": "a", "t": "指南" }, ["/development-notes/index.html", "/development-notes/README.md"]],
  ["v-20833aa2", "/guide/2023%E8%AE%A1%E5%88%92%E8%A1%A8.html", { "d": 1681635726e3, "u": false, "n": true, "r": { "minutes": 0.19, "words": 57 }, "y": "a", "t": "2023计划表", "I": 0 }, ["/guide/2023计划表.html", "/guide/2023%E8%AE%A1%E5%88%92%E8%A1%A8", "/guide/2023计划表.md", "/guide/2023%E8%AE%A1%E5%88%92%E8%A1%A8.md"]],
  ["v-fffb8e28", "/guide/", { "d": 1681635726e3, "e": '<div style="text-align: center">\n\n</div>\n<h1> 作者页</h1>\n', "r": { "minutes": 0.05, "words": 14 }, "y": "a", "t": "作者页" }, ["/guide/index.html", "/guide/README.md"]],
  ["v-7ec14f5c", "/npm-tool/rimraf.html", { "d": 1681635726e3, "e": "<h1> 快速删除node_modeules</h1>\n", "r": { "minutes": 0.12, "words": 36 }, "y": "a", "t": "快速删除node_modeules" }, ["/npm-tool/rimraf", "/npm-tool/rimraf.md"]],
  ["v-6aea5eee", "/software-installation/IDEA%E5%AE%89%E8%A3%85.html", { "d": 1681635726e3, "e": "<h1> IDEA 安装</h1>\n", "r": { "minutes": 1.01, "words": 304 }, "y": "a", "t": "IDEA 安装" }, ["/software-installation/IDEA安装.html", "/software-installation/IDEA%E5%AE%89%E8%A3%85", "/software-installation/IDEA安装.md", "/software-installation/IDEA%E5%AE%89%E8%A3%85.md"]],
  ["v-1242d0e0", "/software-installation/IDEA%E7%9A%84%E4%BD%BF%E7%94%A8.html", { "d": 1681635726e3, "e": "<h1> IDEA 的使用</h1>\n", "r": { "minutes": 0.48, "words": 143 }, "y": "a", "t": "IDEA 的使用" }, ["/software-installation/IDEA的使用.html", "/software-installation/IDEA%E7%9A%84%E4%BD%BF%E7%94%A8", "/software-installation/IDEA的使用.md", "/software-installation/IDEA%E7%9A%84%E4%BD%BF%E7%94%A8.md"]],
  ["v-b8be1f04", "/software-installation/MySql%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.html", { "d": 1681635726e3, "e": "<h1> MySql安装教程</h1>\n", "r": { "minutes": 0.73, "words": 218 }, "y": "a", "t": "MySql安装教程" }, ["/software-installation/MySql安装教程.html", "/software-installation/MySql%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B", "/software-installation/MySql安装教程.md", "/software-installation/MySql%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.md"]],
  ["v-7c03131a", "/vue-template-list/fantastic-admin.html", { "d": 1681635726e3, "e": "<h1> fantastic-admin</h1>\n", "r": { "minutes": 2.11, "words": 633 }, "y": "a", "t": "fantastic-admin" }, ["/vue-template-list/fantastic-admin", "/vue-template-list/fantastic-admin.md"]],
  ["v-b16d0f60", "/vue-template-list/gin-vue-admin.html", { "d": 1681635726e3, "e": "<h1> gin-vue-admin</h1>\n", "r": { "minutes": 8.55, "words": 2566 }, "y": "a", "t": "gin-vue-admin" }, ["/vue-template-list/gin-vue-admin", "/vue-template-list/gin-vue-admin.md"]],
  ["v-6372ff5d", "/vue-template-list/naive-ui-admin.html", { "d": 1681635726e3, "e": "<h1> naive-ui-admin</h1>\n", "r": { "minutes": 2.99, "words": 897 }, "y": "a", "t": "naive-ui-admin" }, ["/vue-template-list/naive-ui-admin", "/vue-template-list/naive-ui-admin.md"]],
  ["v-9dd68ef0", "/vue-template-list/soybean-admin.html", { "d": 1681635726e3, "e": "<h1> Soybean Admin</h1>\n", "r": { "minutes": 2.65, "words": 796 }, "y": "a", "t": "Soybean Admin" }, ["/vue-template-list/soybean-admin", "/vue-template-list/soybean-admin.md"]],
  ["v-5caa8386", "/vue-template-list/vue-admin-better.html", { "d": 1681635726e3, "e": "<h1> vue-admin-better</h1>\n", "r": { "minutes": 4.03, "words": 1208 }, "y": "a", "t": "vue-admin-better" }, ["/vue-template-list/vue-admin-better", "/vue-template-list/vue-admin-better.md"]],
  ["v-2fbd3c71", "/vue-template-list/vue-admin-box.html", { "d": 1681635726e3, "e": "<h1> vue-admin-box</h1>\n", "r": { "minutes": 3.22, "words": 965 }, "y": "a", "t": "vue-admin-box" }, ["/vue-template-list/vue-admin-box", "/vue-template-list/vue-admin-box.md"]],
  ["v-2940ada0", "/vue-template-list/vue-element-admin.html", { "d": 1681635726e3, "e": "<h1> vue-element-admin</h1>\n", "r": { "minutes": 5.02, "words": 1505 }, "y": "a", "t": "vue-element-admin" }, ["/vue-template-list/vue-element-admin", "/vue-template-list/vue-element-admin.md"]],
  ["v-485200df", "/vue-template-list/vue-next-admin.html", { "d": 1681635726e3, "e": "<h1> vue-next-admin</h1>\n", "r": { "minutes": 3.57, "words": 1070 }, "y": "a", "t": "vue-next-admin" }, ["/vue-template-list/vue-next-admin", "/vue-template-list/vue-next-admin.md"]],
  ["v-0f6a97ba", "/vue-template-list/vue-pure-admin.html", { "d": 1681635726e3, "e": "<h1> vue-pure-admin</h1>\n", "r": { "minutes": 3.08, "words": 924 }, "y": "a", "t": "vue-pure-admin" }, ["/vue-template-list/vue-pure-admin", "/vue-template-list/vue-pure-admin.md"]],
  ["v-e09ecb86", "/vue-template-list/vue-vben-admin.html", { "d": 1681635726e3, "e": "<h1> Vue vben admin</h1>\n", "r": { "minutes": 3.54, "words": 1061 }, "y": "a", "t": "Vue vben admin" }, ["/vue-template-list/vue-vben-admin", "/vue-template-list/vue-vben-admin.md"]],
  ["v-341a274e", "/vue-template-list/vue3-admin-element-template.html", { "d": 1681635726e3, "e": "<h1> Vue3 admin element template</h1>\n", "r": { "minutes": 1.95, "words": 584 }, "y": "a", "t": "Vue3 admin element template" }, ["/vue-template-list/vue3-admin-element-template", "/vue-template-list/vue3-admin-element-template.md"]],
  ["v-7c3f7418", "/vue-template-list/vue3-antd-admin.html", { "d": 1681635726e3, "e": "<h1> vue3-antd-admin</h1>\n", "r": { "minutes": 1.99, "words": 598 }, "y": "a", "t": "vue3-antd-admin" }, ["/vue-template-list/vue3-antd-admin", "/vue-template-list/vue3-antd-admin.md"]],
  ["v-7e07386f", "/vue-template-list/vue3-composition-admin.html", { "d": 1681635726e3, "e": "<h1> vue3-composition-admin</h1>\n", "r": { "minutes": 3.33, "words": 999 }, "y": "a", "t": "vue3-composition-admin" }, ["/vue-template-list/vue3-composition-admin", "/vue-template-list/vue3-composition-admin.md"]],
  ["v-858cfdd6", "/zh/intro.html", { "d": 1681635726e3, "e": "<h1> 介绍页</h1>\n<p>将你的个人介绍和档案放置在此处。</p>\n", "r": { "minutes": 0.07, "words": 20 }, "y": "a", "t": "介绍页", "i": "info" }, ["/zh/intro", "/zh/intro.md"]],
  ["v-56c59782", "/zh/page.html", { "a": "Ms.Hope", "d": 15778368e5, "l": "2020年1月1日", "c": ["使用指南"], "g": ["页面配置", "使用指南"], "u": true, "e": "<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n", "r": { "minutes": 4.98, "words": 1495 }, "y": "a", "t": "页面配置", "i": "page", "O": 1 }, ["/zh/page", "/zh/page.md"]],
  ["v-2d0ad528", "/zh/", { "d": 1681635726e3, "c": ["使用指南"], "e": '<h2> 目录</h2>\n<ul>\n<li>\n<p><a href="/spoony-z/zh/page.html" target="blank">页面展示</a></p>\n</li>\n<li>\n<p><a href="/spoony-z/zh/slides.html" target="blank">页面配置</a></p>\n</li>\n<li>\n<p><a href="/spoony-z/zh/intro.html" target="blank">个人信息</a></p>\n</li>\n</ul>\n', "r": { "minutes": 0.12, "words": 36 }, "y": "a", "t": "主要功能与配置演示", "i": "discover", "I": 0 }, ["/zh/index.html", "/zh/README.md"]],
  ["v-269ae70f", "/zh/slides.html", { "d": 1681635726e3, "e": "<!-- markdownlint-disable MD024 MD033 MD051 -->\n", "r": { "minutes": 4.5, "words": 1350 }, "y": "s", "t": "幻灯片页", "i": "slides" }, ["/zh/slides", "/zh/slides.md"]],
  ["v-cce9318c", "/zh/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html", { "a": "张艳艳", "d": 16810848e5, "l": "2023年4月10日", "c": ["笔记"], "g": ["PPT"], "u": true, "e": "<h1> PPT 学习笔记</h1>\n", "r": { "minutes": 12.95, "words": 3884 }, "y": "a", "t": "PPT 笔记", "i": "page", "O": 1 }, ["/zh/学习笔记.html", "/zh/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0", "/zh/学习笔记.md", "/zh/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.md"]],
  ["v-7f3f3cee", "/development-notes/Javascript/toLocaleString%E4%B8%8EtoString%E7%9A%84%E5%8C%BA%E5%88%AB.html", { "d": 1681635726e3, "e": "<h1> toLocaleString与toString的区别</h1>\n", "r": { "minutes": 0.82, "words": 245 }, "y": "a", "t": "toLocaleString与toString的区别" }, ["/development-notes/Javascript/toLocaleString与toString的区别.html", "/development-notes/Javascript/toLocaleString%E4%B8%8EtoString%E7%9A%84%E5%8C%BA%E5%88%AB", "/development-notes/Javascript/toLocaleString与toString的区别.md", "/development-notes/Javascript/toLocaleString%E4%B8%8EtoString%E7%9A%84%E5%8C%BA%E5%88%AB.md"]],
  ["v-3b49d4b6", "/development-notes/Javascript/%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84some%E6%96%B9%E6%B3%95.html", { "d": 1681635726e3, "e": "<h1> 数组中的 some 方法</h1>\n", "r": { "minutes": 0.42, "words": 126 }, "y": "a", "t": "数组中的 some 方法" }, ["/development-notes/Javascript/数组中的some方法.html", "/development-notes/Javascript/%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84some%E6%96%B9%E6%B3%95", "/development-notes/Javascript/数组中的some方法.md", "/development-notes/Javascript/%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84some%E6%96%B9%E6%B3%95.md"]],
  ["v-46f649f1", "/development-notes/recat/recat%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95%E7%AC%AC%E4%B8%80%E7%AB%A0.html", { "d": 1681635726e3, "y": "a", "t": "" }, ["/development-notes/recat/recat开发记录第一章.html", "/development-notes/recat/recat%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95%E7%AC%AC%E4%B8%80%E7%AB%A0", "/development-notes/recat/recat开发记录第一章.md", "/development-notes/recat/recat%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95%E7%AC%AC%E4%B8%80%E7%AB%A0.md"]],
  ["v-1a27c043", "/development-notes/vue/1.Vue%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%20-%20Provide%20%20Inject.html", { "d": 1681635726e3, "e": "<h1> Vue 依赖注入 - Provide / Inject(重点)</h1>\n", "r": { "minutes": 0.53, "words": 159 }, "y": "a", "t": "Vue 依赖注入 - Provide / Inject(重点)" }, ["/development-notes/vue/1.Vue依赖注入 - Provide  Inject.html", "/development-notes/vue/1.Vue%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%20-%20Provide%20%20Inject", "/development-notes/vue/1.Vue依赖注入 - Provide  Inject.md", "/development-notes/vue/1.Vue%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5%20-%20Provide%20%20Inject.md"]],
  ["v-27e6293a", "/development-notes/vue/vue%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA.html", { "d": 1681635726e3, "e": "<h1> vue + elementUI + vue-cropper 实现图片裁剪实时预览</h1>\n", "r": { "minutes": 3.21, "words": 962 }, "y": "a", "t": "vue + elementUI + vue-cropper 实现图片裁剪实时预览" }, ["/development-notes/vue/vue图片裁剪.html", "/development-notes/vue/vue%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA", "/development-notes/vue/vue图片裁剪.md", "/development-notes/vue/vue%E5%9B%BE%E7%89%87%E8%A3%81%E5%89%AA.md"]],
  ["v-e02a7b2e", "/development-notes/vue/vue%E7%94%9F%E6%88%90%E4%BA%8C%E7%BB%B4%E7%A0%81.html", { "d": 1681635726e3, "e": "<h1> vue生成二维码</h1>\n", "r": { "minutes": 0.53, "words": 159 }, "y": "a", "t": "vue生成二维码" }, ["/development-notes/vue/vue生成二维码.html", "/development-notes/vue/vue%E7%94%9F%E6%88%90%E4%BA%8C%E7%BB%B4%E7%A0%81", "/development-notes/vue/vue生成二维码.md", "/development-notes/vue/vue%E7%94%9F%E6%88%90%E4%BA%8C%E7%BB%B4%E7%A0%81.md"]],
  ["v-6ae988d6", "/development-notes/vue/%E5%89%8D%E7%AB%AF%E6%89%B9%E9%87%8F%E5%AF%BC%E5%87%BA%E5%9B%BE%E7%89%87.html", { "d": 1681635726e3, "e": "<h1> 纯前端批量导出图片</h1>\n", "r": { "minutes": 0.28, "words": 85 }, "y": "a", "t": "纯前端批量导出图片" }, ["/development-notes/vue/前端批量导出图片.html", "/development-notes/vue/%E5%89%8D%E7%AB%AF%E6%89%B9%E9%87%8F%E5%AF%BC%E5%87%BA%E5%9B%BE%E7%89%87", "/development-notes/vue/前端批量导出图片.md", "/development-notes/vue/%E5%89%8D%E7%AB%AF%E6%89%B9%E9%87%8F%E5%AF%BC%E5%87%BA%E5%9B%BE%E7%89%87.md"]],
  ["v-d4a19512", "/development-notes/vue/%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6%E4%BB%A5%E5%8F%8A%E4%BC%A0%E5%80%BC.html", { "d": 1681635726e3, "e": "<h1> vue 中动态渲染组件以及传值</h1>\n", "r": { "minutes": 0.2, "words": 59 }, "y": "a", "t": "vue 中动态渲染组件以及传值" }, ["/development-notes/vue/动态渲染组件以及传值.html", "/development-notes/vue/%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6%E4%BB%A5%E5%8F%8A%E4%BC%A0%E5%80%BC", "/development-notes/vue/动态渲染组件以及传值.md", "/development-notes/vue/%E5%8A%A8%E6%80%81%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6%E4%BB%A5%E5%8F%8A%E4%BC%A0%E5%80%BC.md"]],
  ["v-71457cdb", "/development-notes/vue/%E5%9C%A8vue%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE.html", { "d": 1681635726e3, "e": "<h1> 在vue中使用高德地图</h1>\n", "r": { "minutes": 2.18, "words": 655 }, "y": "a", "t": "在vue中使用高德地图" }, ["/development-notes/vue/在vue中使用高德地图.html", "/development-notes/vue/%E5%9C%A8vue%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE", "/development-notes/vue/在vue中使用高德地图.md", "/development-notes/vue/%E5%9C%A8vue%E4%B8%AD%E4%BD%BF%E7%94%A8%E9%AB%98%E5%BE%B7%E5%9C%B0%E5%9B%BE.md"]],
  ["v-18a9f2a7", "/development-notes/vue/%E5%9F%BA%E4%BA%8Eelement-ui%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85%E8%A1%A8%E6%A0%BC.html", { "e": '<h1> 基于element-ui 二次封装(<strong>未完成</strong>)</h1>\n<p><strong>对于组件的封装先要了解以下属性</strong></p>\n<h2> $attrs 属性</h2>\n<blockquote>\n<p>使用 <code>v-bind="$attrs"</code> 可以将父组件的属性传递给子组件<br>\n子组件使用 <code>$attrs</code> 来获取父组件传递给子组件的属性值<br>\n子组件就可以通过 <code>$attrs</code> 来访问和使用父组件传递的属性值。<br>\n子组件打印 <code>console.log(this.$attrs);</code> <br></p>\n</blockquote>', "r": { "minutes": 2.47, "words": 742 }, "y": "a", "t": "基于element-ui 二次封装(未完成)" }, ["/development-notes/vue/基于element-ui二次封装表格.html", "/development-notes/vue/%E5%9F%BA%E4%BA%8Eelement-ui%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85%E8%A1%A8%E6%A0%BC", "/development-notes/vue/基于element-ui二次封装表格.md", "/development-notes/vue/%E5%9F%BA%E4%BA%8Eelement-ui%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85%E8%A1%A8%E6%A0%BC.md"]],
  ["v-c48744e4", "/development-notes/vue/%E5%B0%81%E8%A3%85%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8v-model%E4%BC%A0%E9%80%92%E5%80%BC.html", { "d": 1681635726e3, "e": "<h1> vue 封装组件 使用 v-model 传递值</h1>\n", "r": { "minutes": 0.56, "words": 168 }, "y": "a", "t": "vue 封装组件 使用 v-model 传递值" }, ["/development-notes/vue/封装组件使用v-model传递值.html", "/development-notes/vue/%E5%B0%81%E8%A3%85%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8v-model%E4%BC%A0%E9%80%92%E5%80%BC", "/development-notes/vue/封装组件使用v-model传递值.md", "/development-notes/vue/%E5%B0%81%E8%A3%85%E7%BB%84%E4%BB%B6%E4%BD%BF%E7%94%A8v-model%E4%BC%A0%E9%80%92%E5%80%BC.md"]],
  ["v-44381fd2", "/development-notes/uniapp/uniapp%20%E4%B8%8B%E4%B8%80%E9%A1%B5%E8%BF%94%E5%9B%9E%E4%B8%8A%E4%B8%80%E9%A1%B5%E4%BC%A0%E5%8F%82.html", { "d": 1681635726e3, "e": "<h1> uniapp 下一页返回上一页传参</h1>\n", "r": { "minutes": 0.27, "words": 82 }, "y": "a", "t": "uniapp 下一页返回上一页传参" }, ["/development-notes/uniapp/uniapp 下一页返回上一页传参.html", "/development-notes/uniapp/uniapp%20%E4%B8%8B%E4%B8%80%E9%A1%B5%E8%BF%94%E5%9B%9E%E4%B8%8A%E4%B8%80%E9%A1%B5%E4%BC%A0%E5%8F%82", "/development-notes/uniapp/uniapp 下一页返回上一页传参.md", "/development-notes/uniapp/uniapp%20%E4%B8%8B%E4%B8%80%E9%A1%B5%E8%BF%94%E5%9B%9E%E4%B8%8A%E4%B8%80%E9%A1%B5%E4%BC%A0%E5%8F%82.md"]],
  ["v-c6604412", "/development-notes/uniapp/uniapp%E4%B8%AD%E8%B0%83%E8%B5%B7%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%88%E6%9D%83.html", { "d": 1681635726e3, "e": "<h1> uniapp中调起微信小程序授权</h1>\n", "r": { "minutes": 0.5, "words": 149 }, "y": "a", "t": "uniapp中调起微信小程序授权" }, ["/development-notes/uniapp/uniapp中调起微信小程序授权.html", "/development-notes/uniapp/uniapp%E4%B8%AD%E8%B0%83%E8%B5%B7%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%88%E6%9D%83", "/development-notes/uniapp/uniapp中调起微信小程序授权.md", "/development-notes/uniapp/uniapp%E4%B8%AD%E8%B0%83%E8%B5%B7%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%8E%88%E6%9D%83.md"]],
  ["v-44271714", "/learning-notes/java/intro.html", { "d": 1681635726e3, "e": "<h1> 前言</h1>\n<p>将你的个人介绍和档案放置在此处。</p>\n", "r": { "minutes": 0.06, "words": 19 }, "y": "a", "t": "前言", "i": "info" }, ["/learning-notes/java/intro", "/learning-notes/java/intro.md"]],
  ["v-b9bc5e48", "/learning-notes/java/sumUp.html", { "d": 1681635726e3, "e": "<h1> 成为一个更好的Java程序员</h1>\n", "r": { "minutes": 11.43, "words": 3429 }, "y": "a", "t": "成为一个更好的Java程序员", "i": "info" }, ["/learning-notes/java/sumUp", "/learning-notes/java/sumUp.md"]],
  ["v-36799354", "/learning-notes/TypeScript/TypeScript%E5%9F%BA%E7%A1%80.html", { "d": 1681635726e3, "e": "<h1> TypeScript 介绍</h1>\n<h2> TypeScript为什么要为JS添加类型支持?</h2>\n<ol>\n<li><strong>背景：</strong> JS的类型系统存在“先天缺陷”，JS代码中绝大部分错误都是类型错误(UncaughtTypeError)。</li>\n<li><strong>问题：</strong> 增加了找Bug、改Bug的时间，严重影响开发效率</li>\n<li>从编程语言的动静来区分，TypeScript属于静态类型的编程语言，JS属于动态类型的编程语言。</li>\n<li><strong>静态类型：</strong> 编译期做类型检查;动态类型:执行期做类型检查。</li>\n<li><strong>编译和执行顺序：</strong> 1. 编译 2. 执行</li>\n<li><strong>对于JS来说：</strong> 需要等到代码真正去执行的时候才能发现错误(晚)，对于 TS 来说:在代码编译的时候 (代码执行前)就可以发现错误 (早)。并且，配合VSCode 等开发工具，T5 可以提前到在编写代码的同时就发现代码中的错误，减少找 Bug、改 Bug 时间。</li>\n</ol>", "r": { "minutes": 1.51, "words": 452 }, "y": "a", "t": "TypeScript 介绍", "O": 1 }, ["/learning-notes/TypeScript/TypeScript基础.html", "/learning-notes/TypeScript/TypeScript%E5%9F%BA%E7%A1%80", "/learning-notes/TypeScript/TypeScript基础.md", "/learning-notes/TypeScript/TypeScript%E5%9F%BA%E7%A1%80.md"]],
  ["v-1bda4865", "/learning-notes/TypeScript/TypeScript%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B.html", { "d": 1681751533e3, "e": '<h1> <strong>TypeScript</strong> 常用类型</h1>\n<h2> 概述</h2>\n<div class="hint-container tip">\n<p class="hint-container-title">提示</p>\n<p><strong>TypeScript</strong> 是JS的超集，TS提供了JS的所有功能，并且额外的增加了：类型系统</p>\n<ul>\n<li>所有的JS代码都是TS代码。</li>\n<li>JS有类型(比如，number/string等)，但是JS 不会检查变量的类型是否发生变化。而TS 会检查</li>\n<li>TypeScript 类型系统的主要优势: 可以显示标记出代码中的意外行为，从而降低了发生错误的可能性。</li>\n</ul>\n</div>', "r": { "minutes": 12.04, "words": 3613 }, "y": "a", "t": "TypeScript 常用类型", "O": 3 }, ["/learning-notes/TypeScript/TypeScript常用类型.html", "/learning-notes/TypeScript/TypeScript%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B", "/learning-notes/TypeScript/TypeScript常用类型.md", "/learning-notes/TypeScript/TypeScript%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B.md"]],
  ["v-15f3a468", "/learning-notes/TypeScript/TypeScript%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B.html", { "d": 168186905e4, "e": '<h1> TypeScript高级类型</h1>\n<h2> class 类</h2>\n<h3> 介绍</h3>\n<p><strong>Typescript</strong> 全面支持 ES2015 中引入的 <strong>class</strong> 关键字，并为其添加了类型注解和其他语法(比如，可见性修饰符等)</p>\n<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic">/** </span></span>\n<span class="line"><span style="color: #7F848E; font-style: italic"> * 基本使用 </span></span>\n<span class="line"><span style="color: #7F848E; font-style: italic"> * 声明成员age，类型为number (没有初始值)</span></span>\n<span class="line"><span style="color: #7F848E; font-style: italic"> * 声明成员 gender，并设置初始值，此时，可省略类型注解 (TS类型推论为 string 类型)</span></span>\n<span class="line"><span style="color: #7F848E; font-style: italic"> **/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #C678DD">class</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">Person</span><span style="color: #ABB2BF"> {</span></span>\n<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">age</span><span style="color: #ABB2BF">: </span><span style="color: #E5C07B">number</span></span>\n<span class="line"><span style="color: #ABB2BF">    </span><span style="color: #E06C75">gender</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">"男"</span></span>\n<span class="line"><span style="color: #ABB2BF">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #7F848E; font-style: italic">/** 此时 p 的类型为 Person */</span></span>\n<span class="line"><span style="color: #C678DD">const</span><span style="color: #ABB2BF"> </span><span style="color: #E5C07B">p</span><span style="color: #ABB2BF"> </span><span style="color: #56B6C2">=</span><span style="color: #ABB2BF"> </span><span style="color: #C678DD">new</span><span style="color: #ABB2BF"> </span><span style="color: #61AFEF">Person</span><span style="color: #ABB2BF">();</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', "r": { "minutes": 1.15, "words": 346 }, "y": "a", "t": "TypeScript高级类型", "O": 4 }, ["/learning-notes/TypeScript/TypeScript高级类型.html", "/learning-notes/TypeScript/TypeScript%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B", "/learning-notes/TypeScript/TypeScript高级类型.md", "/learning-notes/TypeScript/TypeScript%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B.md"]],
  ["v-2e8a1b87", "/learning-notes/TypeScript/%E5%88%9D%E4%BD%93%E9%AA%8C.html", { "d": 1681751533e3, "e": '<h1> TypeScript初体验</h1>\n<h2> 安装编译TS的工具包</h2>\n<div class="hint-container tip">\n<p class="hint-container-title">问题： 为什么要安装编译TS的工具包?</p>\n<p><strong>回答：</strong> Node.js/浏览器，只认识JS代码，不认识T5 代码。需要先将TS 代码转化为JS代码，然后才能运行。</p>\n<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #7F848E; font-style: italic"># 安装</span></span>\n<span class="line"><span style="color: #ABB2BF"> npm </span><span style="color: #98C379">i</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">-g</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">typescript</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #7F848E; font-style: italic"># 证是否安装成功</span></span>\n<span class="line"><span style="color: #ABB2BF"> tsc </span><span style="color: #D19A66">-v</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>typescript 包: 用来编译 TS 代码的包，提供了 <strong>tsc</strong> 命令，实现了<strong>TS -&gt; JS</strong> 的转化。\n编译过程图\n</p>\n</div>', "r": { "minutes": 1, "words": 299 }, "y": "a", "t": "TypeScript初体验", "O": 2 }, ["/learning-notes/TypeScript/初体验.html", "/learning-notes/TypeScript/%E5%88%9D%E4%BD%93%E9%AA%8C", "/learning-notes/TypeScript/初体验.md", "/learning-notes/TypeScript/%E5%88%9D%E4%BD%93%E9%AA%8C.md"]],
  ["v-b0967778", "/learning-notes/vue/%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE.html", { "e": '<h1> 创建vue项目</h1>\n<ol>\n<li>全局安装 vue-cli 脚手架</li>\n</ol>\n<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color: #282c34" tabindex="0"><code><span class="line"><span style="color: #ABB2BF">npm </span><span style="color: #98C379">install</span><span style="color: #ABB2BF"> </span><span style="color: #D19A66">-g</span><span style="color: #ABB2BF"> </span><span style="color: #98C379">@vue/cli@4.5.19</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', "r": { "minutes": 0.11, "words": 32 }, "y": "a", "t": "创建vue项目" }, ["/learning-notes/vue/创建项目.html", "/learning-notes/vue/%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE", "/learning-notes/vue/创建项目.md", "/learning-notes/vue/%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE.md"]],
  ["v-23d83276", "/learning-notes/java/intermediate/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%BA%A7.html", { "d": 1681635726e3, "e": "<h1> 面向对象中级</h1>\n", "r": { "minutes": 10.07, "words": 3022 }, "y": "a", "t": "面向对象中级" }, ["/learning-notes/java/intermediate/面向对象中级.html", "/learning-notes/java/intermediate/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%BA%A7", "/learning-notes/java/intermediate/面向对象中级.md", "/learning-notes/java/intermediate/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%AD%E7%BA%A7.md"]],
  ["v-9b417ccc", "/learning-notes/java/senior/Java%E9%AB%98%E7%BA%A7%E6%95%99%E7%A8%8B.html", { "d": 1681635726e3, "e": "<h1> 暂无 Java 高级教程</h1>\n", "r": { "minutes": 0.02, "words": 7 }, "y": "a", "t": "暂无 Java 高级教程" }, ["/learning-notes/java/senior/Java高级教程.html", "/learning-notes/java/senior/Java%E9%AB%98%E7%BA%A7%E6%95%99%E7%A8%8B", "/learning-notes/java/senior/Java高级教程.md", "/learning-notes/java/senior/Java%E9%AB%98%E7%BA%A7%E6%95%99%E7%A8%8B.md"]],
  ["v-0d6f74fe", "/learning-notes/java/primary/DOS%E5%91%BD%E4%BB%A4%E4%BA%86%E8%A7%A3.html", { "d": 1681635726e3, "e": "<h1> DOS介<strong>绍</strong></h1>\n", "r": { "minutes": 0.45, "words": 136 }, "y": "a", "t": "DOS介绍" }, ["/learning-notes/java/primary/DOS命令了解.html", "/learning-notes/java/primary/DOS%E5%91%BD%E4%BB%A4%E4%BA%86%E8%A7%A3", "/learning-notes/java/primary/DOS命令了解.md", "/learning-notes/java/primary/DOS%E5%91%BD%E4%BB%A4%E4%BA%86%E8%A7%A3.md"]],
  ["v-774607c5", "/learning-notes/java/primary/Java%20API%20%E6%96%87%E6%A1%A3.html", { "d": 1681635726e3, "e": "<h1> Java API 文档</h1>\n", "r": { "minutes": 0.47, "words": 141 }, "y": "a", "t": "Java API 文档" }, ["/learning-notes/java/primary/Java API 文档.html", "/learning-notes/java/primary/Java%20API%20%E6%96%87%E6%A1%A3", "/learning-notes/java/primary/Java API 文档.md", "/learning-notes/java/primary/Java%20API%20%E6%96%87%E6%A1%A3.md"]],
  ["v-c3ba9dae", "/learning-notes/java/primary/java%E5%9F%BA%E7%A1%80.html", { "d": 1681635726e3, "e": "<h1> 基础</h1>\n", "r": { "minutes": 2.18, "words": 653 }, "y": "a", "t": "基础", "O": 2 }, ["/learning-notes/java/primary/java基础.html", "/learning-notes/java/primary/java%E5%9F%BA%E7%A1%80", "/learning-notes/java/primary/java基础.md", "/learning-notes/java/primary/java%E5%9F%BA%E7%A1%80.md"]],
  ["v-8e40c442", "/learning-notes/java/primary/java%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.html", { "d": 1681635726e3, "e": "<h1> 快速入门</h1>\n", "r": { "minutes": 2.69, "words": 807 }, "y": "a", "t": "快速入门", "O": 1 }, ["/learning-notes/java/primary/java快速入门.html", "/learning-notes/java/primary/java%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8", "/learning-notes/java/primary/java快速入门.md", "/learning-notes/java/primary/java%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8.md"]],
  ["v-83ad57fe", "/learning-notes/java/primary/%E5%8F%98%E9%87%8F.html", { "d": 1681635726e3, "e": "<h1> 变量</h1>\n", "r": { "minutes": 1.52, "words": 455 }, "y": "a", "t": "变量", "O": 3 }, ["/learning-notes/java/primary/变量.html", "/learning-notes/java/primary/%E5%8F%98%E9%87%8F", "/learning-notes/java/primary/变量.md", "/learning-notes/java/primary/%E5%8F%98%E9%87%8F.md"]],
  ["v-15e38c6a", "/learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html", { "d": 1681635726e3, "e": "<h1> 基本数据类型</h1>\n", "r": { "minutes": 5.14, "words": 1543 }, "y": "a", "t": "基本数据类型", "O": 6 }, ["/learning-notes/java/primary/基本数据类型.html", "/learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B", "/learning-notes/java/primary/基本数据类型.md", "/learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md"]],
  ["v-22bf1c4e", "/learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%BD%AC%E6%8D%A2.html", { "d": 1681635726e3, "e": "<h1> 基本数据类型转换</h1>\n", "r": { "minutes": 3.72, "words": 1115 }, "y": "a", "t": "基本数据类型转换", "O": 7 }, ["/learning-notes/java/primary/基本数据类型的转换.html", "/learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%BD%AC%E6%8D%A2", "/learning-notes/java/primary/基本数据类型的转换.md", "/learning-notes/java/primary/%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%BD%AC%E6%8D%A2.md"]],
  ["v-252217f8", "/learning-notes/java/primary/%E6%8E%A7%E5%88%B6%E7%BB%93%E6%9E%84.html", { "d": 1681635726e3, "e": "<h1> 程序控制结构</h1>\n", "r": { "minutes": 8.96, "words": 2689 }, "y": "a", "t": "程序控制结构", "O": 8 }, ["/learning-notes/java/primary/控制结构.html", "/learning-notes/java/primary/%E6%8E%A7%E5%88%B6%E7%BB%93%E6%9E%84", "/learning-notes/java/primary/控制结构.md", "/learning-notes/java/primary/%E6%8E%A7%E5%88%B6%E7%BB%93%E6%9E%84.md"]],
  ["v-fde30f02", "/learning-notes/java/primary/%E6%95%B0%E7%BB%84%E3%80%81%E6%8E%92%E5%BA%8F%E3%80%81%E6%9F%A5%E6%89%BE.html", { "d": 1681635726e3, "e": "<h1> 数组、排序、查找</h1>\n", "r": { "minutes": 4.29, "words": 1288 }, "y": "a", "t": "数组、排序、查找", "O": 9 }, ["/learning-notes/java/primary/数组、排序、查找.html", "/learning-notes/java/primary/%E6%95%B0%E7%BB%84%E3%80%81%E6%8E%92%E5%BA%8F%E3%80%81%E6%9F%A5%E6%89%BE", "/learning-notes/java/primary/数组、排序、查找.md", "/learning-notes/java/primary/%E6%95%B0%E7%BB%84%E3%80%81%E6%8E%92%E5%BA%8F%E3%80%81%E6%9F%A5%E6%89%BE.md"]],
  ["v-e9d64f6a", "/learning-notes/java/primary/%E8%BF%90%E7%AE%97%E7%AC%A6.html", { "d": 1681635726e3, "e": "<h1> 运算符</h1>\n", "r": { "minutes": 4.02, "words": 1205 }, "y": "a", "t": "运算符", "O": 5 }, ["/learning-notes/java/primary/运算符.html", "/learning-notes/java/primary/%E8%BF%90%E7%AE%97%E7%AC%A6", "/learning-notes/java/primary/运算符.md", "/learning-notes/java/primary/%E8%BF%90%E7%AE%97%E7%AC%A6.md"]],
  ["v-4b466692", "/learning-notes/java/primary/%E8%BF%9B%E5%88%B6.html", { "d": 1681635726e3, "e": "<h1> 进制</h1>\n", "r": { "minutes": 3.14, "words": 943 }, "y": "a", "t": "进制", "O": 4 }, ["/learning-notes/java/primary/进制.html", "/learning-notes/java/primary/%E8%BF%9B%E5%88%B6", "/learning-notes/java/primary/进制.md", "/learning-notes/java/primary/%E8%BF%9B%E5%88%B6.md"]],
  ["v-1ab94b83", "/learning-notes/java/primary/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html", { "d": 1681635726e3, "e": "<h1> 面向对象编程</h1>\n", "r": { "minutes": 11.42, "words": 3427 }, "y": "a", "t": "面向对象编程", "O": 10 }, ["/learning-notes/java/primary/面向对象编程.html", "/learning-notes/java/primary/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B", "/learning-notes/java/primary/面向对象编程.md", "/learning-notes/java/primary/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.md"]],
  ["v-3706649a", "/404.html", { "y": "p", "t": "" }, ["/404"]],
  ["v-00707d48", "/npm-tool/", { "y": "p", "t": "Npm Tool" }, ["/npm-tool/index.html"]],
  ["v-6c6b6470", "/software-installation/", { "y": "p", "t": "Software Installation" }, ["/software-installation/index.html"]],
  ["v-3e61ee1e", "/vue-template-list/", { "y": "p", "t": "Vue Template List" }, ["/vue-template-list/index.html"]],
  ["v-488324ee", "/development-notes/Javascript/", { "y": "p", "t": "Javascript" }, ["/development-notes/Javascript/index.html"]],
  ["v-c98a53b6", "/development-notes/recat/", { "y": "p", "t": "Recat" }, ["/development-notes/recat/index.html"]],
  ["v-a77c6ffc", "/development-notes/vue/", { "y": "p", "t": "Vue" }, ["/development-notes/vue/index.html"]],
  ["v-7a82c3e5", "/development-notes/uniapp/", { "y": "p", "t": "Uniapp" }, ["/development-notes/uniapp/index.html"]],
  ["v-2619446e", "/learning-notes/java/", { "y": "p", "t": "Java" }, ["/learning-notes/java/index.html"]],
  ["v-65eaff04", "/learning-notes/", { "y": "p", "t": "Learning Notes" }, ["/learning-notes/index.html"]],
  ["v-90290af4", "/learning-notes/TypeScript/", { "y": "p", "t": "Type Script" }, ["/learning-notes/TypeScript/index.html"]],
  ["v-6ac3446d", "/learning-notes/vue/", { "y": "p", "t": "Vue" }, ["/learning-notes/vue/index.html"]],
  ["v-aa7521a6", "/learning-notes/java/intermediate/", { "y": "p", "t": "Intermediate" }, ["/learning-notes/java/intermediate/index.html"]],
  ["v-026853d4", "/learning-notes/java/senior/", { "y": "p", "t": "Senior" }, ["/learning-notes/java/senior/index.html"]],
  ["v-4a663736", "/learning-notes/java/primary/", { "y": "p", "t": "Primary" }, ["/learning-notes/java/primary/index.html"]],
  ["v-5bc93818", "/category/", { "y": "p", "t": "分类", "I": 0 }, ["/category/index.html"]],
  ["v-744d024e", "/tag/", { "y": "p", "t": "标签", "I": 0 }, ["/tag/index.html"]],
  ["v-e52c881c", "/article/", { "y": "p", "t": "文章", "I": 0 }, ["/article/index.html"]],
  ["v-154dc4c4", "/star/", { "y": "p", "t": "收藏", "I": 0 }, ["/star/index.html"]],
  ["v-01560935", "/timeline/", { "y": "p", "t": "时间轴", "I": 0 }, ["/timeline/index.html"]],
  ["v-03d57386", "/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { "y": "p", "t": "使用指南 分类", "I": 0 }, ["/category/使用指南/", "/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],
  ["v-a378ad66", "/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { "y": "p", "t": "页面配置 标签", "I": 0 }, ["/tag/页面配置/", "/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/index.html"]],
  ["v-49425445", "/category/%E7%AC%94%E8%AE%B0/", { "y": "p", "t": "笔记 分类", "I": 0 }, ["/category/笔记/", "/category/%E7%AC%94%E8%AE%B0/index.html"]],
  ["v-7b167472", "/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { "y": "p", "t": "使用指南 标签", "I": 0 }, ["/tag/使用指南/", "/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],
  ["v-b30870ee", "/tag/ppt/", { "y": "p", "t": "PPT 标签", "I": 0 }, ["/tag/ppt/index.html"]]
];
var Vuepress = defineComponent({
  name: "Vuepress",
  setup() {
    const layout2 = usePageLayout();
    return () => h$3(layout2.value);
  }
});
var createRoutes = () => pagesRoutes.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path
      }))
    );
    return result;
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress
    }
  ]
);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/spoony-z/")),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a2;
    if (to.path !== from.path || from === START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a2 = pagesComponents[to.name]) == null ? void 0 : _a2.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = ref(router.currentRoute.value.path);
  watch(
    () => router.currentRoute.value.path,
    (value) => routePath.value = value
  );
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageFrontmatter = computed(
    () => resolvers.resolvePageFrontmatter(pageData.value)
  );
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(() => resolvers.resolvePageLang(pageData.value));
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  app.provide(layoutsSymbol, layouts);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  app.provide(pageLayoutSymbol, pageLayout);
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    layouts,
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  var _a2;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a3;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a3 = clientConfig.setup) == null ? void 0 : _a3.call(clientConfig);
      }
      return () => [
        h$3(RouterView),
        ...clientConfigs.flatMap(
          ({ rootComponents = [] }) => rootComponents.map((component) => h$3(component))
        )
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await ((_a2 = clientConfig.enhance) == null ? void 0 : _a2.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  H,
  I$2 as I,
  L,
  l as a,
  usePageData as b,
  createVueApp,
  d$1 as d,
  f$1 as f,
  h,
  le as l,
  m,
  n,
  r,
  useRouteLocale as u,
  v$1 as v,
  y
};
