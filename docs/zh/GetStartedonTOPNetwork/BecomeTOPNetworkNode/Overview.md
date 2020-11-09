# 成为节点

节点指安装了TOP Network挖矿软件TOPIO的服务器，TOP Network网络由节点组成，节点在网络中负责交易路由、验证、数据存储。

- 如果您想成为测试网节点，您只需要使用TOPIO即可；
- 如果您想成为主网（New-Horizons）节点，建议您前往[TOP Staking DAPP](http://104.248.153.202:7800/)，它有友好的用户界面，会逐步引导您成为主网节点。

本章的内容将说明如何使用TOPIO，快速成为TOP Network节点，获取丰厚的挖矿奖励。

## 开始吧

1. 阅读[节点入网要求](docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/Requirment.md)一章内容，了解成为节点的条件。
2. 确保您的TOP账户中有足额的TOP token，如果您还不知道如何创建账户并获取TOP token，请阅读[接收与转出TOP]()。
3. [安装和启动TOPIO](docs-cn/Tools/TOPIO/InstallTOPIO.md)。

以上工作完成后，只需一步，您可以轻松加入TOP Network网络，成为TOP Network节点，获取奖励。

4. 执行如下命令进行节点注册与入网。

```
topio <--register_deposit> <--node_type> <--nodename> <--node_account_addr> <--password>
```

--register_deposit：节点注册保证金；--node_type：节点类型：edge、validator、advance；--nodename：节点昵称；--node_account_addr：节点账户地址；--password：节点账户keystore文件密码。

示例：

账户"T-0-LQHpzTF1jjj8ie4g7SYPCPvi5D5c2Q3nP5"注册成为高级节点加入TOP Network网络。

```
topio --register_deposit 1000000000000 --node_type advance --nodename qiqi --node_account_addr T-0-LQHpzTF1jjj8ie4g7SYPCPvi5D5c2Q3nP5 --password nba321321
```

执行命令后，请等待节点入网，若最终打印如下信息，则证明您已成功加入TOP Network网络、进入候选池，等待选举。

```
join p2p network ok
join chain network transaction ok
```

<details>

<summary>节点高级操作</summary>

高级操作需要您阅读以下文档，大致了解TOP Network节点的工作方式，并熟悉节点软件[TOPIO](docs-cn/Tools/TOPIO/Overview.md)。

* [节点是如何工作的](docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/HowNodeWorks.md)。
* [节点选举规则](docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/NodeElection.md)。
* [节点正常工作时的奖励制度](docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/NodeReward.md)。
* [节点落后时的惩罚制度](docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/NodePublishment.md)。
* [节点签名](docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/NodeSignature.md)。

* 对于设置node_sign_key的节点，一键注册并启动节点进程，加入TOP Network网络命令如下：

  ```
  topio <--register_deposit> <--node_type> <--nodename> <--node_account_addr> <--node_sign_keystore> <--password>
  ```

* 先注册节点再启动节点进程。

  * 注册节点

    为了更好地保护资产，您可以使用一对无资产公私钥作为节点的工作key，其中公钥作为节点注册的node_sign_key。

    ```
    system registerNode <register_deposit> <node_type> <nodename> 
    ```

  ​       register_deposit：节点注册保证金；node_type：节点类型：边缘节点(edge)、验证节点(validator)、高级节点(advance)；nodename：节点名称。

  * 启动节点进程

    ```
    topio --node_account_addr --password
    ```

​              --node_account_addr：节点账户地址；--password：keystore文件密码。

* 查询注册成功的节点信息。

  ```
  system queryNodeInfo <target_account_addr>
  ```

  target_account_addr：节点账户地址。

* 对于高级节点，可设置分红比例，将节点得到的奖励（工作奖励、选票奖励）按照分红比例分发给自己投票的节点。14天内最多修改一次。

  ```
  system setDividendRatio <percent>
  ```

  percent：分红百分比，取值范围 [0,100]。

* 查询节点奖励。

  ```
  system queryNodeReward <target_account_addr>
  ```

  target_account_addr：节点账户地址。

* 领取节点奖励。

  ```
  system claimNodeReward
  ```

* 节点退网，请注销节点。

  ```
  system unregisterNode
  ```

* 赎回节点保证金。

  节点注销后，节点保证金将会被锁定72小时。锁定期到期后，需要主动赎回节点保证金。

  ```
  system redeemNodeDeposit
  ```

* 更新节点类型

  ```
  system updateNodeType <deposit> <node_type>
  ```

​       deposit：增加的节点保证金，单位uTOP，如不增加，则输入"0"；node_type：更新后的节点类型。

* 增加节点保证金

  ```
  system stakeDeposit <deposit>
  ```

​       deposit：增加的节点保证金，单位uTOP。

* 减少节点保证金

  ```
  system unstakeDeposit <deposit>
  ```

​       deposit：减少的节点保证金。

​       关于节点高级操作更多内容，请参见[系统交易](docs-cn/Tools/TOPIO/topcl/system.md)中节点操作相关内容。

</details>





