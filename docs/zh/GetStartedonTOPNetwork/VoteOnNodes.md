# 参与投票

投票者可以投票给自己支持的节点，同时获得节点的分红。

- 开始投票前请您阅读[投票](docs-cn/Node/NodeVote.md)和[投票者分红](docs-cn/Node/VoterDividend.md)两章内容，了解TOP Network投票相关知识；
- 如果您想在主网(New-Horizons)上操作投票，最佳选择是[Staking DAPP](http://104.248.153.202:7800/)，它是基于区块链的Web应用，支持PC端和移动端访问，提供图形化的界面和良好的用户体验；
- 如果您想在测试网上体验投票，或者您已经成为主网上的节点，可以通过[TOPIO](docs-cn/Tools/TOPIO/Overview.md)进行投票。

本章将向您展示如何使用TOPIO给自己支持的节点投票。

## 通过TOPIO投票

1. [安装和启动TOPIO](docs-cn/Tools/InstallTOPIO.md)。

2. 确保您的账户中有TOP token，如果您还不知道如何创建账户并获取TOP token，请阅读[接收与转出TOP](docs-cn/GetStartedonTOPNetwork/ReceiveandSendTOP.md)。

3. 进入topcl交互环境。

```
topio topcl
```

4. 兑换选票。

```
sendtx stakevote <vote_amount> <lock_duration>
```

vote_amount：兑票数量，每次兑票1,000票起兑；lock_duration：TOP token锁定期，锁定期单位：天。锁定期最少为30天，且必须为30的整数倍。

示例：

兑换2000张票，TOP token锁定期为60天。

```
sendtx stakevote 2000 60
```

5. 给节点投票。

```
system voteNode <node_num> <node_account_addr> <vote_num>
```

node_num：接受投票的节点数，可同时给多个节点投票；node_account_addr：接受投票账户地址；vote_num：投票数量，投到一个节点上的起投票数100票，后续累加投票无限制。

示例：

分别给高级节点"T-0-LQHpzTF1jjj8ie4g7SYPCPvi5D5c2Q3nP5"和"T-0-LSiFkNdXxRh9KyrYDsDEX2QJrnCCUScMqB"投1000张票。

```
system voteNode 2 T-0-LQHpzTF1jjj8ie4g7SYPCPvi5D5c2Q3nP5 1000 T-0-LSiFkNdXxRh9KyrYDsDEX2QJrnCCUScMqB 1000
```



<details>
<summary>投票高级操作</summary>

- 取消投票
  ```
  system unvoteNode <node_num> <node_account_addr> <vote_num>
  ```

  node_num：投票节点数；node_account_addr：接受投票的节点账户地址；vote_num：取消投票数量。

- 解锁兑票押金

  ```
  sendtx unstakeVote <votes_num>
  ```

  votes_num：选票数量，解锁相应的TOP token。

- 查看投票分布

  ```
  system listVoteUsed <target_account_addr>
  ```

  target_account_addr：投票者账户地址。

- 查看投票者分红

  ```
  system queryVoterDividend <target_account_addr>
  ```

  target_account_addr：投票者账户地址。

- 领取投票者分红。

  ```
  system claimVoterDividend

  ```
</details>


