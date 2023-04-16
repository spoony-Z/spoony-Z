import { defineUserConfig } from "vuepress";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  // base: "/SOBER-Blog/",
  base: "/spoony-z/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "SOBER",
      description: "SOBER",
    },
  },


  plugins: [
    /** 代码主题（https://theme-hope.vuejs.press/zh/guide/interface/code-theme.html#%E5%8F%AF%E7%94%A8%E7%9A%84%E4%B8%BB%E9%A2%98） */
    shikiPlugin({
      theme: "one-dark-pro",
    }),

    /** 图片预览插件 */
    photoSwipePlugin({
      locales: {
        "/": {
          /**
           * 关闭按钮标签文字
           */
          close: "关闭按钮标签文字",

          /**
           * 全屏按钮标签文字
           */
          fullscreen: "全屏按钮标签文字",

          /**
           * 分享按钮标签文字
           */
          share: "分享按钮标签文字",

          /**
           * 缩放按钮标签文字
           */
          zoom: "缩放按钮标签文字",

          /**
           * 上一张图片按钮标签文字
           */
          prev: "上一张图片按钮标签文字",

          /**
           * 下一张图片按钮标签文字
           */
          next: "下一张图片按钮标签文字",

          /**
           * 功能按钮配置
           */
          // buttons: PhotoSwipeDefaultUI.ShareButtonData[];
        },
      },
    }),

    /** 搜索插件 */
     searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    })
  ],
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
