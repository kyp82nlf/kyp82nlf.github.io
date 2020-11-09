# 接收与转出TOP

当前您可以通过TOPIO或者TOP Network移动端钱包[HiWallet](https://www.hiwallet.org)创建、管理您的账户地址、向另外一个地址发送TOP。

本章将向您展示如何使用TOPIO创建、管理您的账户地址、以及获取TOP、发送TOP。

为了使用TOPIO接收和转出TOP，您需要[安装和启动TOPIO](docs-cn/Tools/InstallTOPIO.md)。

1. 创建账户。
2. 列出所有账户。
3. 获取TOP。
4. 发送TOP。

## 创建账户

```
topio wallet createAccount
```

执行此命令会创建一个新的账户，并打印账户地址、公钥和keystore文件路径。

提醒：

> * 您的账户信息和密钥存储在keystore文件中。删除这些文件也将删除密钥，您将失去对账户资产的控制权。我们建议您在创建账户后立即对其备份。

> * 请记住您的keystore文件密码且勿向他人透露您的文件密码，系统没有”忘记密码“选项，只可以通过密码提示找回密码。如果丢失了密码，您将无法使用该账户。

## 列出所有账户

您可以根据需要创建任意数量的账户，最新创建的是默认账户。

执行以下命令查看所有账户。

```
topio wallet list
```

## 获取TOP 

* 测试网TOP

  请前往[TOP Network水龙头](http://104.248.153.202:7804/en/faucet)获得测试网网络的TOP。

* 主网(New-Horizons)TOP

  当前只开放节点用户的账户映射，您需要一个以太坊账户并且充值ERC-20代币到此账户，随后请前往[TOP Network Staking DApp]( http://104.248.153.202:7800/)进行账户映射操作。

  非节点用户的账户映射将在未来开放。

获取一些TOP后，您可以通过以下方式检查余额：

（1）执行如下命令进入topcl。

```
topio topcl
```

（2）执行如下命令查看账户余额(balance)以及可用gas(available gas)。

```
get account <account_addr>
```

account_addr：账户地址，例如"T-0-LgenWwPF2XkmebRYx9ywW8acHXX3UQeGez"。

## 发送TOP

**设置默认账户**

执行如下命令设置默认账户：

```
wallet setDefault <keystore_file_path>
```

keystore_file_path：账户keystore文件路径。

示例：

设置账户"T-0-LgenWwPF2XkmebRYx9ywW8acHXX3UQeGez"为默认账户。

```
wallet setDefault /root/Topnetwork/keystore/T-0-LgenWwPF2XkmebRYx9ywW8acHXX3UQeGez
```

提醒：

> 当您退出topcl重新进入topcl时，在发送TOP（或者发送其他任何交易）前，需要您先设置默认账户。

**发送TOP**

您可以执行以下命令从默认账户发送TOP到另一个账户地址。

```
sendtx transfer <account_addr> <amount>
```

account_addr：转账目标账户地址；amount：转账金额(＞0)，单位uTOP。

示例：

给账户"T-0-LZw7tsrQ8ZN91cnSCyiqDC1ohD4coBNiwo"发送10000 uTOP tokens.

```
sendtx transfer T-0-LZw7tsrQ8ZN91cnSCyiqDC1ohD4coBNiwo 10000 
```

TOP Network链上发送交易会消耗一定的gas资源，交易所消耗的资源详细信息请参见[资源模型](http://192.168.30.12/#/docs-cn/AboutTOPNetwork/Protocol/ResourceModel)。

**查询TOP是否发送成功**

命令执行完成后，您可以通过以下命令查询交易结果。

```
get transaction <account_addr> <tx_hash>
```

account_addr：转账账户；tx_hash：本次交易hash。

示例：

查询账户"T-0-LZw7tsrQ8ZN91cnSCyiqDC1ohD4coBNiwo"交易hash为"0x8aa1e7082af07bf22840a1526745c484a5a20115d8e92cff2d9ed413128ac2b4"的交易详细信息。

```
get transaction T-0-LZw7tsrQ8ZN91cnSCyiqDC1ohD4coBNiwo 0x8aa1e7082af07bf22840a1526745c484a5a20115d8e92cff2d9ed413128ac2b4
```

如交易最终共识状态"exec_status"为”success"，则成功发送TOP。

再次执行如下命令查看账户余额"balance"以及可用gas"available gas"是否有相应变化。

```
get account
```
