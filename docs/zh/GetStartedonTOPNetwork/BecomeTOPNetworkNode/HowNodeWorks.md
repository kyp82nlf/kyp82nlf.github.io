# 节点是如何工作的

## 概述

TOP Network网络中的节点负责交易路由、验证、数据存储和生产新区块。

## 节点类型及角色

TOP Network目前有三种类型的节点：edge（边缘节点）、validator（验证节点）、advance（高级节点）。

其中高级节点可在不同的网络里同时担任多个角色：验证(validator)、审计(auditor)、存档(archive)、Root-Beacon、Sub-Beacon。

各节点职责见下表。

| 节点角色            | 职责                                                         |
| ------------------- | ------------------------------------------------------------ |
| 边缘节点(edge)      | 边缘节点充当客户端的接入点，所有交易在被转发到路由网络和核心网络之前都会被先发送到边缘网络的边缘节点。保护共识节点免受DDoS及其他类似攻击。 |
| 验证节点(validator) | 验证节点组成了TOP Network链的分片，负责通过hpPBFT共识机制验证交易。 |
| 审计节点(auditor)   | 审计节点在TOP Network链中有几个职责。这些包括：跨分片同步、跨分片交易路由，同时参与参与TOP Network hpPBFT共识。 |
| 存档节点(archive)   | 存档节点存储TOP Network链的整个状态。这是他们的首要责任。除此之外，因为节点在分片和集群之间移动，存档节点帮助新节点同步当前区块链状态，并确保数据可用。 |
| Root-Beacon         | TOP Network的 Root-Beacon节点充当了系统的协调者和记账者等许多角色。它还处理节点注册和archive、edge、Root-Beacon 等选举，以及staking、投票和链上治理。Root-Beacon还通过定期产生时钟块，充当整个系统的全局时钟。 |
| Sub-Beacon          | TOP Network Sub-Beacon节点主要负责auditor、validator选举及工作量统计、审计、惩罚等工作。 |

## 交易

交易是指启动从一个账户到另一个帐户的资产转移的命令。交易还可以包含在处理交易时将被触发的操作。

![Snap63](HowNodeWorks.assets/Snap63.jpg)

1.客户端对交易签名后，交易直接被发送至Edge Network，从而保护共识网络（Audit Network、Validate Network、Root-Beacon Network及Sub-Beacon Network）免受泛滥交易的攻击。

2.交易到达Edge Network后，根据交易接收方账户所属网络分片，将交易发送至对应的Audit Network。

3.交易到达Audit Network后，交易将被路由至交易接收方账户所在网络分片(Validator/Root-Beacon/Sub-Beacon Network)。

4.交易到达接收方账户所在网络分片后，开始交易共识，具体请参见[共识协议](docs-cn/AboutTOPNetwork/Protocol/ConsensusProtocol.md)。

5.交易共识完成后，将数据打包到区块中，并将区块数据存入交易接收方账户所在分片的所有节点以及archive节点的数据库中。



