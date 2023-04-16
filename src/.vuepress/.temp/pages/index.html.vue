<template><div><!-- 
projects:
  - icon: project
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: article
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: friend
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

    - icon: /logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    -->
</div></template>



<style>
  .titleH1 {
    background-image: linear-gradient(to right,  #FFCC00, #ff1818, #ff4775);
    color:transparent;
    background-clip:text;
  }
  .gradient {
    font-size: 16px;
    font-weight: 600;
    width: 150px;
    height: 50px;
    color: #fff;
    border:1px solid rgba(0, 0, 0, 0.15);
    border-radius:100px;
    background: linear-gradient(-45deg, #ff1818, #FFCC00, #ff4775);
    animation: gradientBG 5s ease infinite;
    margin-right: 20px;
  }
  @keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
</style>