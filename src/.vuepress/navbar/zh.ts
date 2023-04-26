import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "vue模板",
    icon: "edit",
    prefix: "/vue-template-list/",
    children: [
      { text: "fantastic-admin", icon: "edit", link: "fantastic-admin" },
      { text: "gin-vue-admin", icon: "edit", link: "gin-vue-admin" },
      { text: "naive-ui-admin", icon: "edit", link: "naive-ui-admin" },
      { text: "soybean-admin", icon: "edit", link: "soybean-admin" },
      { text: "vue-admin-better", icon: "edit", link: "vue-admin-better" },
      { text: "vue-admin-box", icon: "edit", link: "vue-admin-box" },
      { text: "vue-element-admin", icon: "edit", link: "vue-element-admin" },
      { text: "vue-next-admin", icon: "edit", link: "vue-next-admin" },
      { text: "vue-pure-admin", icon: "edit", link: "vue-pure-admin" },
      { text: "vue-vben-admin", icon: "edit", link: "vue-vben-admin" },
      { text: "vue3-admin-element-template", icon: "edit", link: "vue3-admin-element-template" },
      { text: "vue3-antd-admin", icon: "edit", link: "vue3-antd-admin" },
      { text: "vue3-composition-admin", icon: "edit", link: "vue3-composition-admin" },
    ]
  },
  {
    text: "笔记系列",
    icon: "edit",
    prefix: "/",
    children: [
      {
        text: "学习笔记",
        icon: "edit",
        prefix: "learning-notes/",
        children: [
          "java",
          "TypeScript",
          "vue",
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
        ],
      },
    ],
  },
  {
    text: "软件工具",
    icon: "edit",
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
          "Charles测试工具"
        ],
      },
      {
        text: "npm工具",
        icon: "edit",
        prefix: "npm-tool/",
        children: [
          "rimraf",
          "npm上传包"
        ],
      },
    ]
    },

    {
      text: "PPT笔记",
      icon: "edit",
      link: "/zh/学习笔记"
      }

    
  // {
  //   text: "gitHub",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
