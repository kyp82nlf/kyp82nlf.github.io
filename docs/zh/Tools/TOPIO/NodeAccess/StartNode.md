# 节点入网

## 概述

在“TOP Network入门”[成为节点](docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/Overview.md)一章中，我们已为您介绍了节点一键注册并加入TOP Network网络的方法，本章节将为您介绍更多节点入网的内容，包括设置了node_sign_key的节点一键入网，以及先注册节点，后启动节点进程xnode入网。

## 节点设置node_sign_key入网

为了更好地保护您的账户资产，建议您使用`wallet createKey`创建一对无资产的公私钥对作为节点的node_sign_key，在节点注册入网后，节点工作时使用其私钥为节点签名。

注册节点，启动节点进程xnode，加入TOP Network网络：

```
topio --register_deposit --node_type --nodename --node_account_addr --node_sign_keysotre  --password
```

选项说明如下表所示。

| 选项名称             | 默认值 | 类型   | 说明                                                         |
| -------------------- | ------ | ------ | ------------------------------------------------------------ |
| --register_deposit   | -      | Uint64 | 节点注册保证金，各类型节点注册保证金要求请参见[成为节点的要求](http://192.168.30.12/#/docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/Requirment)。 |
| --node_type          | -      | String | 节点类型：edge（边缘节点）、validator（验证节点）、advance（高级节点）。 |
| --nodename           | -      | String | 节点昵称，4-16字符，字母、数字或下划线。                     |
| --node_account_addr  | -      | String | 节点账户地址。                                               |
| --node_sign_keystore | -      | String | 您可以使用节点账户公钥(Base64)作为节点注册的node sign key。 为了更好地保护您的账户资产，建议您使用`wallet createKey`创建一对无资产的公私钥对作为节点的node sign key，在节点注册入网后，节点工作时使用其私钥为节点签名。 此处请输入对应的公钥(Base64)，其他节点可使用该公钥进行验签。 |
| --password           | -      | String | keystore文件密码。                                           |

示例：

节点"T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW"注册成为高级节点，并设置了node_sign_key的入网命令如下：

```
topio --register_deposit 500000000000 --node_type validator --nodename top1 --node_account_addr T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW --node_sign_keystore /root/Topnetwork/keystore/T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW --password 123456abc
```

执行命令后，请等待节点入网，若最终打印如下信息，则证明您已成功加入TOP Network网络、进入候选池，等待选举。

```
join p2p network ok
join chain network transaction ok
```

## 节点先注册后入网

支持先注册节点，再启动节点进程xnode。

### 注册节点

注册节点命令如下：

```
system <register_deposit> <node_type> <nodename> --node_sign_key
```

参数说明如下表所示。

| 参数名称         | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ---------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| register_deposit | 是       | -      | Uint64 | 节点注册保证金，单位uTOP。                                   |
| node_type        | 是       | -      | String | 节点类型，包括edge（边缘节点）、validator（验证节点）、advance（高级节点），高级节点兼具archive（存档）、validator（验证）、auditor（审计）角色。<br/>您可以注册成为三种类型中的一种。<br/>注册成为高级节点后，advance节点被选举为何种工作角色取决于节点的选票：<br/>advance节点被选举为audtior、archive、Root-Beacon、Sub-Beacon角色，节点所获得的选票需要大于等于节点实际质押的保证金（此处节点保证金以TOP计算，非uTOP）。<br/>当选票低于实际质押保证金时，advance节点只能被选为validator。<br/>说明：<br/>节点选票须由接受投票而得，可以由其他节点投票，也可由本账户投票。<br/>提醒：<br/>高级节点注册后，如使用`system stakeDeposit`为节点增加保证金，则节点想被选举为audtior、archive、Root-Beacon、Sub-Beacon角色，需要增加相应的票数。 |
| nodename         | 是       | -      | String | 节点昵称，4-16字符，字母、数字或下划线。                     |

选项说明如下表所示。

| 选项名称        | 默认值   | 类型   | 说明                                                         |
| --------------- | -------- | ------ | ------------------------------------------------------------ |
| --node_sign_key | 账户公钥 | String | 您可以使用节点账户公钥(Base64)作为节点注册的node sign key。<br/>为了更好地保护您的账户资产，建议您使用`wallet createKey`创建一对无资产的公私钥对作为节点的node sign key，在节点注册入网后，节点工作时使用其私钥为节点签名。<br/>此处请输入对应的公钥(Base64)，其他节点可使用该公钥进行验签。<br/>如不设置node_sign_key，系统默认使用账户公钥作为node_sign_key。 |

示例：

账户"T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hC"注册成为高级节点。

```
system registerNode 500000000000 validator top1 --node_sign_key BFYRfp557uqBAKA54JmFkT+UVXf74LVdHDnjtLBM/V3nyIdKiHLwX2yr7s03RCoHNfciT0Zays3oUvcmkRv5VK4=
```

### 启动节点进程xnode

节点注册成功后，启动节点进程xnode，加入TOP Network网络。

```
topio --node_account_addr --node_sign_keystore --password
```

选项说明如下表所示：

| 选项名称             | 默认值 | 类型   | 说明                                                         |
| -------------------- | ------ | ------ | ------------------------------------------------------------ |
| --node_account_addr  | -      | String | 节点账户地址。                                               |
| --node_sign_keystore | -      | String | 如您注册节点时设置了node_sign_key，则此处需要传入node_sign_key的keystore文件路径。<br/>如您注册节点时未设置node_sign_key，则不需要此选项。 |
| --password           | -      | String | keystore文件密码。                                           |

## 停止节点进程xnode

支持单进程及多进程。

```
[root@Jiao ~/top/xchain/cbuild/bin/Linux]# topio -s stop
signal:stop
env home:/root
found runing xnode_pid:28795
will send SIGKILL signal to pid:28795
done signal operations
```

或者使用`Ctrl`+`C`，或者Linux命令`kill`停止xnode。

## 查询节点入网后的网络信息

查询节点入网后的网络信息，需要使用TOPIO console模式或者attach模式。

查询命令具体请参见[查询节点网络信息](docs-cn/Tools/TOPIO/xnode/command.md)。