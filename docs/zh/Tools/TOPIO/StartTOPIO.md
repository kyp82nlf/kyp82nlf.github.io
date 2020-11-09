# 使用TOPIO不同模式

## 概述

您可以使用TOPIO的不同模式：

* [console模式](#console模式)

启动节点进程xnode，同时进入TOPIO交互环境。

* [attach模式](#attach模式)

连接到本地节点服务器上正在运行的节点进程xnode，同时进入TOPIO交互环境。

### console模式

启动节点进程xnode，同时进入TOPIO交互环境。

如果您已经在本地后台启动xnode进程，可停止xnode进程后再使用console模式。

#### 进入console模式

* 不设置node_sign_key。

执行如下命令启动xnode。

```
topio --register_deposit 500000000000 --node_type validator --nodename rockey --node_account_addr T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW --password 123456abc console
```

* 设置node_sign_key

执行如下命令启动xnode。

```
topio --register_deposit 500000000000 --node_type validator --nodename rockey --node_account_addr T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW --node_sign_keystore /root/Topnetwork/keystore/T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW --password 123456abc console
```

#### 查看console模式帮助信息

```
NAME:
    console

USAGE:
    command [arguments...]

COMMANDS:
    help                     Show a list of commands and options.
    topcl                    A command line interface to interact with the blockchain and manage accounts.
    xnode                    Xnode is the core service daemon that runs on every TOP Network node.
```

#### console模式命令说明

执行`help`查看console帮助信息。

| 命令  | 说明                                                         |
| ----- | ------------------------------------------------------------ |
| help  | 查看console帮助信息。                                        |
| topcl | 与链进行交互及账户管理的命令行客户端。<br/>提醒：<br/>在console模式下使用topcl，需要在命令前加上"topcl"，例如"topcl wallet list"。 |
| xnode | xnode是在TOP Network网络节点上运行的核心服务进程，同时集成了节点网络信息查询、节点进程守护等功能。<br/>提醒：<br/>在console模式下使用xnode，需要在命令前加上"xnode"，例如"xnode net joined"。 |

#### 退出console模式

支持如下方式退出console模式。

* 按`Ctrl`+`C`退出 console模式。
* 使用命令`exit`、`q`、`quit`、`logout`。

### attach模式

连接到本地节点服务器上正在运行的节点进程xnode，同时进入TOPIO交互环境。

如果您已经在本地后台启动xnode进程，可使用attach模式，直接连接到本地节点。

::: warning 注意

进入attach模式前请确本地服务器已经运行了xnode进程。

:::

#### 进入attach模式

在TOPIO下，执行如下命令连接到本地运行的xnode，默认端口为"8000"。

```
topio attach
```

如果启动节点进程时指定了不同的服务端口，连接到指定节点进程时需要输入相应的服务端口号。

```
topio attach --admin_http_port 56391
```

#### 查看attach模式帮助信息

执行`help`查看attach帮助信息。

```
NAME:
    attach

USAGE:
    command [arguments...]

COMMANDS:
    help                     Show a list of commands and options.
    topcl                    A command line interface to interact with the blockchain and manage accounts.
    xnode                    Xnode is the core service daemon that runs on every TOP Network node.
```

#### attach模式命令说明

| 命令  | 说明                                                         |
| ----- | ------------------------------------------------------------ |
| help  | 查看attach帮助信息。                                         |
| topcl | 与链进行交互及账户管理的命令行客户端。<br/>提醒：<br/>在attach模式下使用topcl，需要在命令前加上"topcl"，例如"topcl wallet list"。 |
| xnode | xnode是在TOP Network网络节点上运行的核心服务进程，同时集成了节点网络信息查询、节点进程守护等功能。<br/>提醒：<br/>在attach模式下使用xnode，需要在命令前加上"xnode"，例如"xnode net joined"。 |

#### 退出attach模式

支持如下方式退出attach模式。

* 按`Ctrl`+`C`退出attach模式。

* 使用命令`exit`、`q`、`quit`、`logout`。

