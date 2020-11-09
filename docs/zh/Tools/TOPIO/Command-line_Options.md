# TOPIO命令行选项

```
HELP OPTIONS:
    -h --help                                print help info
    -v --version                             topio version

COMMANDS:
    wallet                                   Create and manage accounts and public-private key pairs.
    topcl                                    Enter topcl which is a command line interface to interact with the blockchain and manage accounts without starting xnode.
    console                                  Enter the interactive shell environment with starting xnode.
    attach                                   Enter topcl which is a command line interface to interact with the blockchain and manage accounts without starting xnode.
    db                                       Manage  the  chain  database.

START OPTIONS:
       --datadir               [value]       Data directory for the databases and log (default: ~/Library/Topnetwork)
       --register_deposit      [value]       Required option when node has not registered，node register deposit 
       --node_type             [value]       Required option when node has not registered，node type: edge、validator、advance
       --nodename              [value]       Required option when node has not registered，node nickname
    -k --node_sign_keystore    [value]       Optional option，start xnode with import keystore file
       --node_account_addr     [value]       Required option，node-account address
    -p --password              [value]       using password to decrypt keystore file
    -f --password_file         [value]       using password_file to decrypt keystore file
    -S --single_process                      start topio as single_process(default master+worker mode)
       --cpu_net_interval      [value]       the interval of monitoring cpu and net (default: 10)
       --ntp_interval          [value]       the interval of monitoring ntp (default: 10)
       --admin_http_port       [value]       Connect to Admin Http Server (default: 8000)
       --bootnodes             [value]       Comma separated endpoints(ip:port) for P2P  discovery bootstrap
       --net_port              [value]       Network listening port (default: 9000)

OTHER OPTIONS:
    -s --signal                [value]       send signal to a master process, choices: [stop, reload]
```

## 命令说明(COMMANDS)

| 命令    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| wallet  | 创建、管理本地账户及公私钥对。                               |
| topcl   | 进入topcl交互环境。                                          |
| console | 启动节点进程xnode，同时进入TOPIO交互环境。                   |
| attach  | 连接到本地节点服务器上正在运行的节点进程xnode，同时进入TOPIO交互环境。 |
| db      | 管理链数据库，包括备份、还原数据库。                         |

## 选项说明

### 帮助选项(HELP OPTIONS)

| 选项         | 说明                                                 |
| ------------ | ---------------------------------------------------- |
| -h,--help    | 查看帮助信息，包括命令列表及某个命令的具体使用帮助。 |
| -v,--version | 查看TOPIO版本。                                      |

### 启动选项(START OPTIONS)

启动TOPIO的时候可以使用短命令模式或者长命令模式，比如`-c `或者 `--config_file`。

help信息中"value"表示需要传入一个值作为参数。

| 选项                    | 说明                                                         |
| ----------------------- | ------------------------------------------------------------ |
| --datadir               | TOPIO数据目录，数据库(DB)和日志(log)等一切文件均在此目录产生，不同操作系统默认目录如下：<br/>Mac: $HOME/Library/Topnetwork；<br/>Unix: $root/Topnetwork；<br/>Windows: C:\Topnetwork。<br/>提醒：<br/>为了在本地运行多个节点进程，您必须确保每个节点都有一个单独的数据目录。 |
| --register_deposit      | 节点注册保证金，具体请参见[成为节点的要求](docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/Requirment.md)。启动节点进程时，如节点还未注册，需要此选项。 |
| --node_type             | 节点类型：edge（边缘节点）、validator（验证节点）、高级节点（advance)。启动节点进程时，如节点还未注册，需要此选项。 |
| --nodename              | 节点名称，4-16字符，字母、数字或下划线。启动节点进程时，如节点还未注册，需要此选项。 |
| -k,--node_sign_keystore | 对于设置了node_sign_key的节点，在启动节点进程时需要使用node_sign_key的keystore文件。 |
| --node_account_addr     | 启动节点进程时需要传入节点账户地址。                         |
| -p,--password(-p)       | keystore文件密码，用来解密keystore文件。                     |
| -f,--password_file(-f)  | 指定密码文件，用来解密keystore文件。                         |
| -s,--single_process     | 单进程启动TOPIO，默认以多进程的方式启动。                    |
| --cpu_net_interval      | CPU和Net的监控间隔，默认10s。                                |
| --ntp_interval          | 时间同步间隔，默认10s。                                      |
| --admin_http_port       | 连接的节点端口号（默认8000）。                               |
| --bootnodes             | 种子节点，用于新节点加入P2P网络。格式：192.168.10.11:8000,192.168.30.10:8000。 |
| --net_port              | P2P网络传输层监听的端口，默认为"9000"。                      |

### 其他选项(OTHER OPTIONS)

| 选项        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| -s,--signal | -s stop：停止TOPIO；<br/>-s reload：TOPIO热更新后重新载入TOPIO。但如果在启动节点进程时没有使用默认路径"/root/Topnetwork"，重新载入将失败。 |