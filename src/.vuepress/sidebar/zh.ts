import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  /** structure 通过文件结构自动生成
   * 例如："/zh/": structure
   * 下面将 children 自动生成
   * 通过页面 Frontmatter 中的 index 控制同一文件夹下的文件是否被包含 index: false
   * 通过 order 来控制它们的排序方式 order: 1
   * https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E9%93%BE%E6%8E%A5
   */
  "/learning-notes/java/": [
    "",
    "intro",
    {
      text: "java初级",
      icon: "creative",
      prefix: "primary/",
      link: "primary/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "面向对象（初级）",
      icon: "note",
      prefix: "面向对象(初级)/",
      link: "面向对象(初级)/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "面向对象(中级)",
      icon: "note",
      prefix: "intermediate/",
      link: "intermediate/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "面向对象(高级)",
      icon: "note",
      prefix: "面向对象(高级)/",
      link: "面向对象(高级)/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "枚举和注解",
      icon: "note",
      prefix: "枚举和注解/",
      link: "枚举和注解/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Exception",
      icon: "note",
      prefix: "Exception/",
      link: "Exception/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "常用类",
      icon: "note",
      prefix: "常用类/",
      link: "常用类/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "java高级",
      icon: "note",
      prefix: "senior/",
      link: "senior/",
      children: "structure",
      collapsible: true,
    },
    'sumUp',
    'DOS',
    'JavaAPI文档',
  ],
  "/learning-notes/vue/": [
    {
      text: "vue学习笔记",
      icon: "creative",
      children: "structure",
    },
  ],
  "/learning-notes/Mysql/": [
    {
      text: "MySql",
      icon: "stack",
      link: "HOME",
      children: "structure",
    },
  ],
  "/development-notes/vue/": [
    {
      text: "vue开发笔记",
      icon: "creative",
      children: "structure",
    },
  ],
  "/development-notes/Javascript/": [
    {
      text: "Javascript开发笔记",
      icon: "creative",
      children: "structure",
    },
  ],
  "/development-notes/uniapp/": [
    {
      text: "uniapp开发笔记",
      icon: "creative",
      children: "structure",
    },
  ],
  "/development-notes/CSS/": [
    {
      text: "CSS开发笔记",
      icon: "creative",
      children: "structure",
    },
    
  ],
  "/development-notes/vx-applet/": [
    {
      text: "微信小程序",
      icon: "creative",
      children: "structure",
    },
    
  ],
  "/learning-notes/network-security/": [
    {
      text: "网络安全",
      icon: "network",
      link: "HOME",
      children: "structure",
    },
  ],
  "/learning-notes/created-cli/": [
    {
      text: "搭建脚手架",
      icon: "network",
      link: "HOME",
      children: "structure",
    },
  ],
  'npm-tool': 'structure',
  "software-installation": 'structure',
  "vue-template-list": 'structure',
  "/learning-notes/TypeScript/": [
    "",
    {
      text: "",
      children: "structure",
    },
  ],
});
