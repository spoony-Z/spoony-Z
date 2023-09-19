import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "vue模板",
    icon: "vue",
    prefix: "/vue-template-list/",
    children: [
      { text: "fantastic-admin", link: "fantastic-admin" },
      { text: "gin-vue-admin", link: "gin-vue-admin" },
      { text: "naive-ui-admin", link: "naive-ui-admin" },
      { text: "soybean-admin", link: "soybean-admin" },
      { text: "vue-admin-better", link: "vue-admin-better" },
      { text: "vue-admin-box", link: "vue-admin-box" },
      { text: "vue-element-admin", link: "vue-element-admin" },
      { text: "vue-next-admin", link: "vue-next-admin" },
      { text: "vue-pure-admin", link: "vue-pure-admin" },
      { text: "vue-vben-admin", link: "vue-vben-admin" },
      { text: "vue3-admin-element", link: "vue3-admin-element" },
      { text: "vue3-antd-admin", link: "vue3-antd-admin" },
      { text: "vue3-composition-admin", link: "vue3-composition-admin" },
    ]
  },
  {
    text: "笔记系列",
    icon: "read",
    prefix: "/",
    children: [
      {
        text: "学习笔记",
        icon: "edit",
        prefix: "learning-notes/",
        children: [
          { text: "java", icon: "java", link: "java/HOME" },
          { text: "TypeScript", icon: "typescript", link: "TypeScript/HOME" },
          { text: "vue", icon: "vue", link: "vue/HOME" },
          { text: "Mysql", icon: "mysql", link: "Mysql/HOME" },
          { text: "React", icon: "react", link: "React/HOME" },
          { text: "Dart", icon: "app", link: "Dart/HOME" },
          { text: "Flutter", icon: "app", link: "Flutter/HOME" },
          { text: "Nginx", icon: "nginx", link: "Nginx/HOME" },
          { text: "Redis", icon: "stack", link: "Redis/HOME" },
          { text: "网络安全", icon: "network", link: "network-security/HOME" },
          { text: "搭建脚手架", icon: "network", link: "created-cli/HOME" },
        ],
      },
      {
        text: "开发笔记",
        icon: "edit",
        prefix: "development-notes/",
        children: [
          "Javascript",
          "recat",
          "uniapp",
          "vue",
          "css",
          { text: "微信小程序", icon: "network", link: "vx-applet/" },
        ],
      },
    ],
  },
  {
    text: "软件工具",
    icon: "operate",
    prefix: "/",
    children: [
      {
        text: "软件安装",
        icon: "edit",
        prefix: "software-installation/",
        children: [
          "IDEA安装",
          "IDEA的使用",
          "MySql安装教程",
          "Charles",
          "jmeter",
        ],
      },
      {
        text: "npm工具",
        icon: "edit",
        prefix: "npm-tool/",
        children: [
          "rimraf",
          "nvm",
          "npm上传包",
        ],
      },
    ]
  },
  {text: "168wangxiao-ui", link: "https://spoony_z.gitee.io/168wangxiao-ui"},
  {text: "tsTool-list", link: "https://spoony_z.gitee.io/168wangxiao-ui"},
    // {
    //   text: "PPT笔记",
    //   icon: "edit",
    //   link: "/zh/学习笔记"
    //   },
    
  // {
  //   text: "gitHub",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
