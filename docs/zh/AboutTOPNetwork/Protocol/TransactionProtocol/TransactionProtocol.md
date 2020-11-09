# 交易协议

## 概述

交易是指启动从一个账户到另一个帐户的资产转移的命令。交易还可以包含在处理交易时将被触发的操作。

动作(Action)：一个动作可以是一个内置的系统功能，比如Hash和投票，或者是一个自定义的智能合约。用户可以通过发送交易或消息来触发动作。

消息(Message)：消息就是对账户属性发起操作的指令。消息的数据包含属性、动作、输入参数和输出参数。为安全起见，消息不能更改账户余额。

消息是一种特殊的交易。一个发送高频消息的账户会受到流量控制，必须支付gas费，否则账户所有者可能被迫执行工作证明(POW)。

## 交易对象数据结构

| 参数名称             |                          | 是否必选 | 类型   | 说明                                                         |
| -------------------- | ------------------------ | -------- | ------ | ------------------------------------------------------------ |
| authorization        |                          | 是       | String | 交易体签名。采用ECDSA数字签名算法。                          |
| challenge_proof      |                          | 是       | String | 预留字段，空字符串。                                         |
| ext                  |                          | 是       | String | 预留字段，空字符串。                                         |
| from_ledger_id       |                          | 是       | Uint16 | 预留字段，为"0"。                                            |
| last_tx_hash         |                          | 是       | String | 交易发送方上次交易的xx64hash，用于交易的排序和去重。"0x"开头的hash。 |
| last_tx_nonce        |                          | 是       | Uint64 | 交易发送方上次交易的nonce，用于交易的排序和去重。            |
| note                 |                          | 是       | String | 交易备注。                                                   |
| to_ledger_id         |                          | 是       | Uint16 | 预留字段，为"0"。                                            |
| receiver_action      |                          |          | Object | 交易接受方执行内容。                                         |
|                      | action_authorization     | 是       | String | action签名，json结构，当交易为部署合约交易时，此处需要输入合约的公钥信息，公钥用来验证合约账户与交易发送方账户是否匹配。 |
|                      | action_ext               | 是       | String | 预留扩展字段，空字符串。                                     |
|                      | action_hash              | 是       | Uint32 | 整个action的xxhash32。默认为"0"，暂未使用。                  |
|                      | action_name              | 是       | String | 调用合约时，合约的函数名。系统合约函数请参见[系统合约函数](docs-cn/SmartContract/SystemContractFunction.md)。非合约交易时，默认为空。 |
|                      | action_param             | 是       | String | 接收方执行内容。不同action type执行内容的序列化请参见[action param序列化](docs-cn/Interface/RPC-API/sendTransaction/action-param-serialization.md)。 |
|                      | action_size              | 是       | Uint16 | action对象的大小。                                           |
|                      | action_type              | 是       | Uint16 | 接收方执行类型，不同的交易类型对应不同的action type，具体请参见[tx_type与action_type说明](docs-cn/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)。<br/>xaction_type_create_contract_account    = 3,    // 创建用户合约账户  <br/>xaction_type_run_contract              = 5,    // 调用智能合约<br/>xaction_type_asset_in                = 6,    // 资产转入<br/>xaction_type_pledge_token_vote          = 21,   //锁定TOP token兑换选票<br/>    xaction_type_redeem_token_vote          = 22,   // 解锁兑换选票的TOP token<br/>    xaction_type_pledge_token               = 23,   //锁定TOP token兑换gas<br/>    xaction_type_redeem_token               = 24,   //解锁兑换gas的TOP token |
|                      | tx_receiver_account_addr | 是       | String | 交易接受方账户地址。                                         |
| send_timestamp       |                          | 是       | Uint64 | 交易发送时间戳GMT。                                          |
| sender_action        |                          |          | Object | 交易发送方执行内容。                                         |
|                      | action_authorization     | 是       | String | action签名，json结构。                                       |
|                      | action_ext               | 是       | String | 预留扩展字段，空字符串。                                     |
|                      | action_hash              | 是       | Uint32 | 整个action的xxhash32。默认为"0"，暂未使用。                  |
|                      | action_name              | 是       | String | 预留字段，空字符串。                                         |
|                      | action_param             | 是       | String | 发送方执行内容。不同action type执行内容的序列化请参见[action param序列化](docs-cn/Interface/RPC-API/sendTransaction/action-param-serialization.md)。 |
|                      | action_size              | 是       | Uint16 | action对象的大小。                                           |
|                      | action_type              | 是       | Uint16 | 发送方执行类型，不同的交易类型对应不同的action type，具体请参见[tx_type与action_type说明](docs-cn/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)。<br/>xaction_type_asset_out                  = 0,    // 资产转出。<br/>xaction_type_source_null =1,          // 源端不执行操作 |
|                      | tx_sender_account_addr   | 是       | String | 交易发送方账户地址。                                         |
| tx_deposit           |                          | 是       | Uint32 | 交易保证金，最低为0.1*10^6 uTOP。                            |
| tx_expire_duration   |                          | 是       | Uint16 | 交易到期时长，超过则被丢弃，默认100s。                       |
| tx_hash              |                          | 是       | String | 交易hash的十六进制。                                         |
| tx_len               |                          | 是       | Uint16 | 交易大小。交易消耗的gas与交易大小相关。                      |
| tx_random_nonce      |                          | 是       | Uint32 | 随机数字。预留字段，为"0"。                                  |
| tx_structure_version |                          | 是       | String | 交易结构版本号。默认为"0"，暂未使用。                        |
| tx_type              |                          | 是       | Uint16 | 交易类型，不同的交易类型，action中action_param（执行内容）及action type（执行类型）不同。<br/>xtransaction_type_create_contract_account      = 1,    // 创建合约账户 <br/>xtransaction_type_run_contract                           = 3,    // 调用智能合约<br/>xtransaction_type_transfer                                   = 4,    // 转账<br/>xtransaction_type_vote                                             = 20,   //投票<br/>xtransaction_type_abolish_vote                               = 21,   //取消投票<br/>xtransaction_type_pledge_token_gas                      = 22,   // 锁定TOP token兑换gas<br/>xtransaction_type_redeem_token_gas                    = 23,   // 解锁兑换gas锁定的TOP token<br/>xtransaction_type_pledge_token_vote                     = 27,   // 锁定TOP token兑换选票<br/>xtransaction_type_redeem_token_vote                    = 28,   // 解锁兑换选票锁定的TOP token |

## tx_type与action_type说明

创建交易时，不同交易类型，对应的sender_action及receiver action中action_type不同。

提醒：

> 创建交易时，请确保tx_type与sender action type以及receiver action type按照以下表格进行配置，否则交易将失败。

| 交易名称                | 交易类型（tx_type）                          | 发送方执行类型（sender_action action_type） | 接收方执行类型（receiver_action action_type） | 备注                                                         |
| ----------------------- | -------------------------------------------- | ------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| 创建用户合约            | 1: xtransaction_type_create_contract_account | 0: xaction_type_asset_out                   | 3: xaction_type_create_contract_account       |                                                              |
| 调用合约                | 3: xtransaction_type_run_contract            | 0: xaction_type_asset_out                   | 5: xaction_type_run_contract                  | 调用合约交易包括：<br/>调用用户合约交易;<br/>调用系统合约交易：<br/>注册节点；<br/>注销节点；<br/>赎回节点保证金；<br/>更新节点类型；<br/>减少节点保证金；<br/>增加节点保证金；<br/>设置节点昵称；<br/>设置分红比例；<br/>领取节点奖励；<br/>领取投票者分红；<br/>提交提案；<br/>撤回提案；<br/>TCC表决提案。 |
| 转账                    | 4: xtransaction_type_transfer                | 0: xaction_type_asset_out                   | 6: xaction_type_asset_in                      |                                                              |
| 投票                    | 20: xtransaction_type_vote                   | 1: xaction_type_source_null                 | 5: xaction_type_run_contract                  |                                                              |
| 取消投票                | 21: xtransaction_type_abolish_vote           | 1: xaction_type_source_null                 | 5: xaction_type_run_contract                  |                                                              |
| 锁定TOP token兑换gas    | 22: xtransaction_type_pledge_token_gas       | 1: xaction_type_source_null                 | 23: xaction_type_pledge_token                 |                                                              |
| 解锁兑换gas的TOP token  | 23: xtransaction_type_redeem_token_gas       | 1: xaction_type_source_null                 | 24: xaction_type_redeem_token                 |                                                              |
| 锁定TOP token兑换选票   | 27: xtransaction_type_pledge_token_vote      | 1: xaction_type_source_null                 | 21: xaction_type_pledge_token_vote            |                                                              |
| 解锁兑换选票的TOP token | 28: xtransaction_type_redeem_token_vote      | 1: xaction_type_source_null                 | 22: xaction_type_redeem_token_vote            |                                                              |

**action说明**

| action                               | 功能                         | 参数                                                         |
| ------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| xaction_type_source_null             | 源端不执行操作               | 无。                                                         |
| xaction_type_asset_out               | 资产转出                     | symbol（代币符号）、amount（转出币的数量）                   |
| xaction_type_create_contract_account | 创建合约账户（部署合约）     | gas_limit（一次合约调用中，用户合约愿意付出的gas费用上限）、contract code（合约代码） |
| xaction_type_run_contract            | 调用合约                     | action_name（执行合约的函数名）、action_param（执行合约的参数） |
| xaction_type_asset_in                | 资产转入                     | symbol（代币符号）、amount（转入币的数量）                   |
| xaction_type_pledge_token            | 锁定TOP token兑换资源（gas)  | symbol（代币符号）、amount（锁定币的数量）                   |
| xaction_type_redeem_token            | 解锁兑换资源(gas)的TOP token | symbol（代币符号）、amount（解锁币的数量）                   |
| xaction_type_pledge_token_vote       | 锁定TOP token兑换选票        | vote_amount（兑票数）、lock_duration（TOP token锁定期）      |
| xaction_type_redeem_token_vote       | 解锁兑换选票的TOP token      | vote_amount（赎回票数）                                      |