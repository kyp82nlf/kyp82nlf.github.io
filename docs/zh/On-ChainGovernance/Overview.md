# 链上治理

## 概述

TOP Network采用分布式的、民主的链上治理模式。

链上治理的目标是为社区成员、开发者以及矿工提供一种安全的方式更改和掌控生态系统的发展趋势。

## 链上治理参与者

任何用户都可以发起提案。

TOP Network治理的核心组织是TOP社区委员会（TOP Community Council，以下简称TCC）。TCC的职责是对社区提案进行表决和执行。

## 链上治理业务流程

TOP Network链上治理的一切活动都通过提案、TCC表决的方式进行。

![Snap22](Overview.assets/Snap22.jpg)

### 发起提案 

您可以通过[RPC API](docs-cn/Interface/RPC-API/Overiview.md)、[SDK](docs-cn/Interface/SDKs/Overiview.md)和主链命令行客户端[TOPIO](docs-cn/Tools/TOPIO/Overview.md)进行提案。

### 提案类型

目前提案类型如下：

#### 链上治理参数修改

支持对Beacon交易费、账户免费gas、交易保证金等参数通过提案的方式进行修改，链上治理参数具体请参见[链上治理参数](docs-cn/On-ChainGovernance/On-ChainGovernanceParameters.md)。

#### 社区基金管理

零工作量的节点奖励，TOP总发行量的4%等，会转到社区基金账户，无人拥有该账户的私钥，只能通过提案对该账户内的资金进行管理，包括销毁、转账到指定账户。

### 表决提案

只有TCC委员有表决权，委员可以表决“赞成”、“反对”，也可以在提案的30天有效期内不做任何表决，即视为委员弃权。

提案表决规则：

需要2/3的委员通过，且反对委员不超过1/5。

您可以通过[RPC API](docs-cn/Interface/RPC-API/Overiview.md)、[SDK](docs-cn/Interface/SDKs/Overiview.md)和主链命令行客户端[TOPIO](docs-cn/Tools/TOPIO/Overview.md)表决提案。

### 执行提案

提案表决通过后，将形成立法命令，发给全网节点。

