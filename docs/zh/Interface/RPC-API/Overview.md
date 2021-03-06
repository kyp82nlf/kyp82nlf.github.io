# RPC API

## 概述

RPC API是TOP Network提供给社区使用的与链交互的接口，包括发送交易，查询交易信息、节点信息、主链信息等。

## 连接到RPC

您可以连到您个人所拥有的edge节点，也可以连接到TOP Network创世edge节点。

TOP Network创世edge节点官方域名：http://edge1.topnetwork.org/top_edge_seeds.json。

## 请求方法

| 方法名             | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| requestToken       | 在与链交互前需要先获取身份令牌。<br/>根据账户获取身份令牌(identity token)，每个账户身份令牌不同。 |
| sendTransaction    | 发送交易，包括转账、节点staking、节点注册、节点投票、节点领取奖励、调用合约等。 |
| getAccount         | 查询链上账户信息。                                           |
| getTransaction     | 查询账户交易信息。                                           |
| getBlock           | 查询区块信息。                                               |
| getStandbys        | 查询节点候选池中节点信息。                                   |
| getCGP             | 查询链上治理参数(on-chain governance parameters)。           |
| getChainInfo       | 查询主链信息。                                               |
| queryNodeInfo      | 查询节点信息。                                               |
| queryNodeReward    | 查询节点奖励。                                               |
| listVoteUsed       | 查询节点投票分布。                                           |
| queryVoterDividend | 查询投票者分红。                                             |
| queryProposal      | 查询提案信息。                                               |

## 请求参数

| 参数名称            | 是否必选 | 默认值 | 类型   | 说明                                                         |
| ------------------- | -------- | ------ | ------ | ------------------------------------------------------------ |
| target_account_addr | 是       | -      | String | 扩展字段，当前未使用，您可填入任意一个账户地址。             |
| body                | 是       | -      | Object | body里为具体业务参数，需将json格式转化成String格式。<br/>业务参数说明请参见各接口“请求参数”。 |
| method              | 是       | -      | String | 请求方法。                                                   |
| sequence_id         | 是       | -      | String | 客户端会话次数，递增。                                       |
| identity_token      | 是       | -      | String | 与链交互前首先需要获取链访问身份令牌(identity token)，身份令牌因账户不同而不同。当前未对该字段进行校验。 |
| version             | 是       | 1.0    | String | RPC API版本。                                                |

## 请求样例

**请求方式**：POST

以查询链上账户信息为例：

* C++
````C
```c++
auto account_info_response = client.request("POST", "/", "target_account_addr=T-0-LaN5M2j2p4neS4TsN6WAjo6vf1yKrUoKtv&body=%7b%22params%22%3a%7b%22account_addr%22%3a%22T-0-LaN5M2j2p4neS4TsN6WAjo6vf1yKrUoKtv%22%7d%7d&method=getAccount&sequence_id=5&identity_token=&version=1.0");
```
````

* curl命令

```
curl -X POST --data 'target_account_addr=T-0-LaN5M2j2p4neS4TsN6WAjo6vf1yKrUoKtv&body=%7b%22params%22%3a%7b%22account_addr%22%3a%22T-0-LaN5M2j2p4neS4TsN6WAjo6vf1yKrUoKtv%22%7d%7d&method=getAccount&sequence_id=5&identity_token=&version=1.0'  http://localhost:19081
```

## 返回结构

返回体为Json结构。

```
{
   "data" : {
      "account_addr" : "T-0-LaN5M2j2p4neS4TsN6WAjo6vf1yKrUoKtv",
      "available_gas" : 25000,
      "balance" : 100000000000000,
      "burned_token" : 0,
      "cluster_id" : 1,
      "contract_address" : [T-3-MaSkcvg2iyqMRDRMFnTQ8o5237Xs1dT9TR],
      "created_time" : 1596520429,
      "disk_staked_token" : 0,
      "group_id" : 64,
      "gas_staked_token" : 0,
      "latest_tx_hash" : "0xfcd8843c36b1c8fee81bcac7e7cf2b38682deef723e9a237918b70b3a6dfc4c9",
      "latest_tx_hash_xxhash64" : "0xdb73d04d0f5daa84",
      "latest_unit_height" : 1,
      "lock_balance" : 0,
      "lock_deposit_balance" : 0,
      "lock_gas" : 0,
      "nonce" : 1,
      "total_free_gas" : 25000,
      "total_gas" : 25000,
      "total_stake_gas" : 0,
      "unlock_disk_staked" : 0, 
      "unlock_gas_staked" : 0,
      “unused_free_gas" : 25000,
      "unused_stake_gas" : 0,
      "unused_vote_amount" : 0,
      "vote_staked_token" : 0,
      "zone_id" : 0
   },
   "errmsg" : "ok",
   "errno" : 0,
   "sequence_id" : "5"
}
```

返回参数说明

| 参数名称    | 类型   | 说明                     |
| ----------- | ------ | ------------------------ |
| data        | Object | 返回各接口具体业务数据。 |
| errmsg      | String | 错误信息。               |
| errno       | Int    | 错误码。                 |
| sequence_id | String | 客户端会话次数，递增。   |

## 错误码

RPC 标准错误码

| 代码   | 错误类型         | 返回信息                                                     | 说明                                                    |
| :----- | :--------------- | :----------------------------------------------------------- | :------------------------------------------------------ |
| -32700 | 服务器解析错误。 | body json parse error json parse errorrpc param error        | 服务器收到无效的json。<br/>服务器解析json文本发生错误。 |
| -32602 | 无效的方法参数   | miss param params account_addr or account_addr is not valid<br/>miss param params amount or amount is not valid<br/>miss param params last_hash or last_hash is not valid<br/>miss param params nonce or nonce is not valid<br/>miss param params data or data is not valid<br/>miss param params tx_deposit or tx_deposit is not valid<br/>miss param params to_ledger_id or to_ledger_id is not valid<br/>miss param params from_ledger_id or from_ledger_id is not valid<br/>miss param params tx_type or tx_type is not valid<br/>miss param params tx_len or tx_len is not valid<br/>miss param params send_timestamp or send_timestamp is not valid<br/>miss param params tx_random_nonce or tx_random_nonce is not valid<br/>miss param params last_tx_nonce or last_tx_nonce is not valid<br/>miss param params challenge_proof or challenge_proof is not valid<br/>miss param params tx_hash<br/>miss param sender_action<br/>miss param receiver_action<br/>miss param sender_action action_hash<br/>miss param sender_action action_type<br/>miss param sender_action action_size<br/>miss param sender_action account_addr<br/>miss param sender_action action_name<br/>miss param sender_action action_param<br/>miss param sender_action action_authorization<br/>miss param receiver_action action_hash<br/>miss param receiver_action action_type<br/>miss param receiver_action action_size<br/>miss param receiver_action account_addr<br/>miss param receiver_action action_name<br/>miss param receiver_action action_param<br/>miss param receiver_action action_authorization<br/>miss param method or method is not valid<br/>miss param version or version is not valid <br/>miss param sequence_id or version is not valid<br/>msg list is empty | 方法参数丢失或者无效的方法参数（参数类型错误）。        |

自定义错误码

| 错误码 | 错误类型           | 返回信息                                                     | 说明                                                         |
| :----- | :----------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 0      | 交易投递状态       | OK                                                           | 交易被投递成功，进入共识，不代表交易最终共识状态，交易共识最终状态需要通过交易hash查询。 |
| 1      | 业务相关的参数错误 | version must be 1.0 now                                      | RPC API版本当前是1.0版本。                                   |
|        |                    | transaction hash error                                       | 交易hash错误。                                               |
|        |                    | transaction sign error                                       | 交易签名错误。                                               |
|        |                    | str+ length is not correct                                   | 字符串（交易hash等）长度错误。                               |
| 2      | 未知错误           | unknown exception                                            | 未知错误。                                                   |
| 3      | Shard执行错误      | account not found on chain                                   | 在链上未查询到此账户信息。                                   |
|        |                    | account address or transaction hash error/does not exist     | 在链上未查询到此交易（交易既不在交易池又不在区块，可能账户地址或者hash错误/不存在）。 |
|        |                    | account address does not exist or block height does not exist<br/> | 区块不存在（可能账户不存在、高度不存在）。                   |
|        |                    | unknown msg type<br/>                                        | 发送了交易和查询之外的消息类型。                             |
|        |                    | request time out                                             | 请求超时。                                                   |
| 110    | 请求限流           | request too often                                            | 流控开启时，同一账户、同一IP地址1秒最多发送10次请求。        |