# 链上治理参数

## Beacon系统合约交易费

| 参数名称      | 创世初始值       | 参数/初始值说明                   |
| ------------- | ---------------- | --------------------------------- |
| beacon_tx_fee | 100,000,000 uTOP | 调用Root-Beacon系统合约的服务费。 |

## 资源(gas)

| 参数名称                      | **创世初始值**               | 参数/初始值说明                                              |
| ----------------------------- | ---------------------------- | ------------------------------------------------------------ |
| total_gas_shard(24h)          | 2,160,000,000,000 Tgas       | 24小时单片总gas。                                            |
| min_free_gas_balance          | 100,000,000 uTOP             | 一个账户如需要被免费赠与gas，则账户中至少有100,000,000 uTOP的余额。<br/>防止恶意节点spam。 |
| free_gas                      | 25,000 Tgas                  | 一个账户最多一天可以被免费赠与25,000Tgas。                   |
| tx_deposit_gas_exchange_ratio | 100 uTOP/Tgas                | 交易保证金抵扣gas的gasprice。                                |
| cpu_gas_exchange_ratio        | 40 ns                        | 1Tgas 可以消耗的CPU ns数。                                   |
| usedgas_decay_cycle           | 8641个时钟块（24h多10s）     | 已使用gas衰减为0的时长。                                     |
| single_tx_max_cpu_time        | 0.1 s                        | 单交易允许执行最大CPU时长。                                  |
| min_tx_deposit                | 100,000 uTOP                 | 交易保证金最低值。                                           |
| unlock_gas_staked_delay_time  | 8641个时钟块（24小时多10秒） | 解锁兑换gas锁定金延迟到账的时间。                            |
| max_gas_account               | 200,000 Tgas                 | 一个普通账户单日可获取的最多gas。                            |
| max_gas_contract              | 10,000,000 Tgas              | 一个合约账户单日可获取的最多gas。                            |
| initial_total_locked_token    | 10,000,000,000,000 uTOP      | 系统初始化总TOP锁定金额(gas)。<br/>gasprice=总gas锁定金额/系统总gas，该值用来形成初始gasprice，使其不致于为0。 |

## 节点注册

| 参数名称                       | 创世初始值          | 字段/初始值说明                 |
| ------------------------------ | ------------------- | ------------------------------- |
| min_edge_deposit               | 100,000*10^6 uTOP   | edge节点最低保证金。            |
| min_validator_deposit          | 500,000*10^6 uTOP   | validator节点最低保证金。       |
| min_archive_deposit            | 500,000*10^6 uTOP   | archive节点最低保证金。         |
| min_auditor_deposit            | 1,000,000*10^6 uTOP | auditor节点最低保证金。         |
| dividend_ratio_change_interval | 14 d                | 分红比例修改时间间隔。          |
| min_mainnet_active_archives    | 1                   | 主网激活时archive最低节点数。   |
| min_mainnet_active_auditors    | 128                 | 主网激活时auditor最低节点数。   |
| min_mainnet_active_edges       | 1                   | 主网激活时edge最低节点数。      |
| min_mainnet_active_votes       | 0                   | 主网激活时最低总票数。          |
| min_mainnet_active_validators  | 512                 | 主网激活时最低validator节点数。 |

## 兑票与投票

| 参数名称              | 创世初始值 | 字段/初始值说明                                              |
| --------------------- | ---------- | ------------------------------------------------------------ |
| min_stake_votes_num   | 1,000      | 最低兑票数，一千票起兑。                                     |
| min_votes_num         | 0          | 最低票数。<br/>在一笔交易中，给每个节点增加的票数和取消的票数必须大于该值。 |
| max_vote_nodes_num    | 100        | 单个账户最大投票节点数。                                     |
| votes_report_interval | 30时钟块   | shard票数上报周期。                                          |

## 增发与奖励

| 参数名称                      | 创世初始值 | 字段/初始值说明                                              |
| ----------------------------- | ---------- | ------------------------------------------------------------ |
| total_issuance                | 200亿 TOP  | TOP token最初最大发行总量。                                  |
| additional_issue_year_ratio   | 8%         | 年总奖励比例/年初剩余预留奖励比例。<br/>总奖励比例逐年递减，下年奖励比例=max( 第n年年初剩余预留奖励比例*8%, 2%），首年比例为38%*8%=3.04%，第二年总奖励比例=（38%-3.04%）*8%=2.7968%，以此类推。 |
| min_ratio_annual_total_reward | 2%         | 年总奖励最低比例：200亿TOP的2%。                             |
| vote_reward_ratio             | 20%        | 节点选票奖励占总奖励比。所有得票节点按照其得票占系统中所有选票的比例分总奖励。 |
| governance_reward_ratio       | 4%         | 链上治理委员奖励占总奖励比。                                 |
| edge_reward_ratio             | 3%         | edge节点工作奖励占总奖励比。                                 |
| auditor_reward_ratio          | 10%        | auditor节点工作奖励占总奖励比。                              |
| validator_reward_ratio        | 60%        | validator节点工作奖励占总奖励比。                            |
| archive_reward_ratio          | 3%         | archive节点工作奖励占总奖励比。                              |
| reward_issue_interval         | 24 h       | 奖励计算与发放周期。                                         |
| workload_timer_interval       | 18个时钟块 | 检查是否有需要下发奖励的定时器时间。                         |
| task_num_per_round            | 16         | 每次下发的奖励笔数。                                         |
| workload_per_tx               | 1          | 共识leader产生的table block中多封装一笔交易的工作量。        |
| workload_per_tableblock       | 2          | 共识leader产生一个table block的工作量。                      |
| workload_report_interval      | 3 h        | 工作量上报周期。                                             |
| schedule_table_num_per_clock  | 4          | 每个时钟块调度table合约检查是否满足工作量上报条件的table数量。 |
| shard_zero_workload           | 0          | validator分片工作小于等于该值时，分片按零工作量计算。        |
| cluster_zero_workload         | 0          | auditor集群工作小于等于该值时，集群按零工作量计算。          |

##  节点惩罚与信誉分奖励

| 参数名称                                       | 创世初始值                     | 字段/初始值说明                                              |
| ---------------------------------------------- | ------------------------------ | ------------------------------------------------------------ |
| sign_table_blocks_report_interval              | 311个时钟块(51m50s)            | 签块数上报周期。                                             |
| min_table_block_report                         | 32个                           | 签块数上报最低table块。                                      |
| punish_interval_time_block                     | 8641个时钟块（24小时多10秒）   | 惩罚周期（时钟块）。                                         |
| punish_interval_table_block                    | 147456个table块                | 惩罚周期（table 块）。                                       |
| sign_block_publishment_threshold_value         | 0%                             | 签块率惩罚阈值。<br/>签块率：实际出块数/应该出块数（当选为leader的次数）。对签块率＜0（即掉线）的节点进行惩罚；适用于auditor和validator。 |
| sign_block_ranking_publishment_threshold value | 100,000/1,000,000(10%)         | 签块率排名惩罚阈值。<br/>适用于auditor和validator，排名＜后10%*总节点数 的节点可能会被惩罚。 |
| min_credit                                     | 0.1                            | 节点最小信誉分。<br/>适用于auditor和validator，该值是新节点注册的初始值，惩罚信誉分扣分不得低于该值。 |
| backward_validator_slash_credit                | 0.1                            | validator落后罚没信誉分。                                    |
| backward_auditor_slash_credit                  | 0.1                            | auditor落后罚没信誉分。<br/>因为惩罚周期内节点正常工作，可以增加0.03分，所以落后惩罚0.1分，相当于落后一次需要3.3天补救。 |
| sign_block_ranking_reward_threshold value      | 0%                             | 签块率排名奖励阈值。对签块数＞0的节点进行信誉分奖励。        |
| sign_block_reward_threshold value              | 80                             | 签块率奖励阈值。<br/>对排名＜前80%*总节点数 的节点进行信誉分奖励；适用于auditor和validator。 |
| award_validator_credit                         | 0.03                           | validator增加的信誉分。<br/>每24小时增加0.03分，从0.1分增加到1分，需要正常工作30天。 |
| ward_auditor_credit                            | 0.03                           | auditor增加的信誉分。<br/>每24小时增加0.03分，从0.1分增加到1分，需要正常工作30天。 |
| backward_node_lock_duration_increment          | 103681个时钟块（12天多10秒）   | 节点落后增加的保证金锁定期。                                 |
| max_nodedeposit_lock_duration                  | 3153593个时钟块（365天少70秒） | 节点保证金最大锁定期。<br/>一个节点连续30天落后，节点保证金会被锁定1年。 |

## 白名单

| 参数名称         | 创世初始值       | **字段/初始值说明** |
| ---------------- | ---------------- | ------------------- |
| toggle_whitelist | true             | 默认打开白名单。    |
| whitelist        | genesis accounts | 白名单列表。        |

## 链上治理

| 参数名称                 | 创世初始值   | 参数/初始值说明      |
| ------------------------ | ------------ | -------------------- |
| cgc_proposal_expire_time | 259200时钟块 | 提案超时时间：30天。 |
| tcc_member_number        | 7            | TCC成员数量。        |
| min_cgc_proposal_deposit | 0            | 提案质押金最低值。   |

## 选举

| 参数名称                                                     | 创世初始值                                  | 参数/初始值说明                                              |
| ------------------------------------------------------------ | ------------------------------------------- | ------------------------------------------------------------ |
| rec_election_interval                                        | 60480时钟周期（逻辑时间7天：7*24*60*60/10） | Root-Beacon group选举周期。                                  |
| zec_election_interval                                        | 8640时钟周期（逻辑时间1天：1*24*60*60/10）  | Sub-Beacon group选举周期。                                   |
| zone_election_trigger_interval                               | 31时钟周期                                  | zone选举触发周期（创世前）。                                 |
| edge_election_interval                                       | 360时钟周期                                 | edge选举周期。                                               |
| archive_election_interval                                    | 360时钟周期                                 | archive选举周期。                                            |
| cluster_election_interval                                    | 71时钟周期                                  | 共识cluster选举周期（创世前）。                              |
| auditor_group_count                                          | 2                                           | auditor group的数量。                                        |
| validator_group_count                                        | 4                                           | validator group的数量。                                      |
| election_rotation_count_ratio                                | 16%                                         | 最大节点轮换个数与当前group_size的比例。                     |
| cluster_election_minimum_rotation_ratio                      | 33%                                         | 对于consensus节点选举，当可选入节点数<=66%*当前group_size时，需要进行轮换。 |
| min_auditor_group_size                                       | 64                                          | auditor group最小节点个数。                                  |
| max_auditor_group_size                                       | 128                                         | auditor group最大节点个数。                                  |
| min_validator_group_size                                     | 32                                          | validator group最小节点个数。                                |
| max_validator_group_size                                     | 128                                         | validator group最大节点个数。                                |
| min_election_committee_size                                  | 32                                          | Root-Beacon group最小节点个数。                              |
| max_election_committee_size                                  | 256                                         | Root-Beacon group最大节点个数。                              |
| max_auditor_rotation_count                                   | 2                                           | 每个auditor group轮换时，更新的集群数。                      |
| max_edge_group_size                                          | 512                                         | edge group最大节点数。                                       |
| max_archive_group_size                                       | 512                                         | archive group最大节点数。                                    |
| rec_standby_pool_update_interval                             | 10                                          | Root-Beacon备选池定时刷新间隔（触发时会同步注册合约的最新节点信息）。 |
| zec_standby_pool_update_interval                             | 59                                          | Sub-Beacon备选池定时刷新间隔（触发时会获取REC备选池最新可信高度）。 |
| cross_reading_rec_standby_pool_contract_height_step_imitation | 2                                           | Sub-Beacon备选池获取Root-Beacon备选池可信高度时的最大步长限制。 |
| cross_reading_rec_standby_pool_contract_logic_timeout_limitation | 137                                         | Sub-Beacon备选池获取Root-Beacon备选池可信高度的超时时间。    |

## 节点权益

| 参数名称                  | 创世初始值 | 参数/初始值说明                                              |
| ------------------------- | ---------- | ------------------------------------------------------------ |
| max_validator_stake       | 24,500,000 | validator stake最大值，当validator stake达到最大值时，更多的保证金或票数都不再计算。 |
| auditor_nodes_per_segment | 27         | auditor stake分组后组内节点数。                              |

##  共识

| 参数名称                             | 创世初始值  | 参数/初始值说明                                              |
| ------------------------------------ | ----------- | ------------------------------------------------------------ |
| tx_send_timestamp_tolerances         | 5mins       | 交易发送时间戳允许的误差时间，即允许钱包客户端和各个节点之间的时钟误差，大于该误差的交易被丢弃。 |
| custom_property_alias_name_max_len   | 32 bytes    | 账户别名最大字节长度。                                       |
| custom_property_name_max_len         | 16 bytes    | 属性名称最大字节长度。                                       |
| custom_property_max_number           | 128         | 用户自定义属性最大数量。                                     |
| application_contract_code_max_len    | 32768 bytes | 用户合约代码最大字节长度。                                   |
| fullunit_contain_of_unit_num         | 21          | 每隔21个块产生一个fullunit。                                 |
| tableblock_batch_unit_max_num        | 64          | table block最多打包的unit数量。                              |
| contract_transaction_size            | 8           | 合约账户一笔交易同时可以调用的合约数量。                     |
| unitblock_confirm_tx_batch_num       | 8           | 区块中打包确认的交易数量。                                   |
| unitblock_recv_transfer_tx_batch_num |             | 区块中打包的接受转账交易的数量。                             |
| unitblock_send_transfer_tx_batch_num | 3           | 区块中打包的发送转账交易的数量。                             |