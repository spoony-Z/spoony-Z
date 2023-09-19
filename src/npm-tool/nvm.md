# nvm 

nvm 是用来管理 nodejs 和 npm 版本的工具，可以用来随意切换不同版本的 node和 npm 版本。

## 安装 nvm
安装前请先卸载已安装的 node
- 下载**nvm-setup.zip** 安装包：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)
- 解压——安装——完成，无需配置直接使用。

::: warning 注意
1. nvm 的安装目录不能有空格或者中文字符，否则会报错
2. 安装的路径有可能会出现权限问题，所以有时需要用管理员权限（管理员方式打开cmd）
:::

## 使用命令

在任意目录打开命令提示符
- `nvm --version`   已安装的 nvm 版本
- `nvm list`    查看当前本机使用 nvm 已安装的 node 的版本列表
- `nvm arch`    查看当前本机是 32 bit 还是 64 bit
- `nvm use node@版本号 或 nvm use 直接版本号`     使用指定版本的 node
- `nvm install node@版本号 或 nvm install 直接版本号`     安装指定版本的 node
- `nvm uninstall node@版本号 或 nvm uninstall 直接版本号`     卸载指定版本的 node
- `nvm install latest`    安装最新版本的 node
- `nvm root`    查看本机安装的 nvm 的安装目录地址
- `nvm on`    开启 nodejs 版本管理
- `nvm off`    关闭 nodejs 版本管理