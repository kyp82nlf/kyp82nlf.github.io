(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{491:function(a,o,t){"use strict";t.r(o);var v=t(18),e=Object(v.a)({},(function(){var a=this,o=a.$createElement,t=a._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"节点选举规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点选举规则"}},[a._v("#")]),a._v(" 节点选举规则")]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("TOP Network节点选举系统是在分布式和无许可的思想指导下开发的。")]),a._v(" "),t("ul",[t("li",[a._v("permissionless（无许可），不仅仅在于节点可以自由进出网络，还在于任何节点，不管权益(stake)大小，都有机会选为在职节点；")]),a._v(" "),t("li",[a._v("PoS*共识机制，对于需要参与共识的节点角色，权益(stake)越高，被选为在职节点的概率越大；")]),a._v(" "),t("li",[a._v("共识节点随机产生且定期轮换，避免大户垄断网络；")]),a._v(" "),t("li",[a._v("权益(stake)越大共识越安全。")])]),a._v(" "),t("h2",{attrs:{id:"节点权益-stake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点权益-stake"}},[a._v("#")]),a._v(" 节点权益(stake)")]),a._v(" "),t("p",[a._v("在大多数PoS形式中，决定一个节点是否有资格加入网络的唯一因素是区块链token最低保证金。")]),a._v(" "),t("p",[a._v("TOP Network将这一概念扩展为我们所说的“综合权益(Comprehensive Stake)”，即hpPBFT-PoS"),t("em",[a._v('中的"')]),a._v('"。综合权益考虑多个因素，以确定一个节点被选举参与共识的可能性。')]),a._v(" "),t("p",[a._v("综合权益为：")]),a._v(" "),t("p",[t("strong",[a._v("保证金")])]),a._v(" "),t("p",[a._v("节点保证金是您账户抵押到节点注册合约中的TOP token。所有类型的节点都有最低保证金的要求，最低保证金链上治理可调节，创世初始值如下：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("节点类型")]),a._v(" "),t("th",[a._v("最低注册保证金")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("边缘节点(edge)")]),a._v(" "),t("td",[a._v("100,000*10^6 uTOP")])]),a._v(" "),t("tr",[t("td",[a._v("验证节点(validator)")]),a._v(" "),t("td",[a._v("500,000*10^6 uTOP")])]),a._v(" "),t("tr",[t("td",[a._v("高级节点(advance)")]),a._v(" "),t("td",[a._v("1,000,000*10^6 uTOP")])])])]),a._v(" "),t("p",[t("strong",[a._v("信誉分")])]),a._v(" "),t("p",[a._v("节点的贡献历史是考察节点信用或声誉的一种形式。一个节点成功完成的任务越多，节点的信誉就越高，因此节点的综合权益也就越大。如果一个节点的带宽或计算能力与其他节点相比过低，它的信誉分就会下降。")]),a._v(" "),t("p",[a._v("validator角色和auditor角色都有自己的信誉分。因为advance节点可同时兼任validator角色和auditor角色，所以advance节点既可以拥有validator角色信誉分，也可以拥有auditor角色信誉分。")]),a._v(" "),t("p",[a._v("节点注册后，信誉分默认为0.1。")]),a._v(" "),t("p",[a._v("为了统计信誉分，分片定期向Sub-Beacon报告每个验证节点和审计节点产生的区块数等数字。Sub-Beacon利用这些信息去更新节点的信誉分。")]),a._v(" "),t("p",[a._v("validator角色和auditor角色的信誉分随着新区块的增加而增长，最高分为1。节点信誉分达到最高分后，将不再上涨。")]),a._v(" "),t("p",[a._v("当一个节点的带宽或者计算能力远落后于其他节点，或者节点有作恶行为，它的信誉分将会下降到最低分0.1。")]),a._v(" "),t("p",[a._v("这些参数可通过链上治理来配置。")]),a._v(" "),t("p",[t("strong",[a._v("得票数")])]),a._v(" "),t("p",[a._v("任何token持有者都可以使用其token兑换选票为高级(advance)节点投票。")]),a._v(" "),t("p",[a._v("高级节点得到的选票越多，当选的机会就越大。")]),a._v(" "),t("p",[a._v("说明：")]),a._v(" "),t("blockquote",[t("p",[a._v("高级节点对于所得到的选票没有支配权，不可再用于为其他节点投票。")])]),a._v(" "),t("p",[a._v("注册成为高级节点后，advance节点被选举为何种工作角色取决于节点的选票：")]),a._v(" "),t("ul",[t("li",[a._v("advance节点被选举为audtior、archive、Root-Beacon、Sub-Beacon角色，节点所获得的选票需要大于等于节点实际质押的保证金（此处节点保证金以TOP计算，非uTOP）。")]),a._v(" "),t("li",[a._v("如节点继续增加保证金，节点若被选举为以上四种角色，需要增加相应的选票。")]),a._v(" "),t("li",[a._v("当选票低于实际质押保证金时，advance节点只能被选为validator。")])]),a._v(" "),t("h3",{attrs:{id:"节点权益-stake-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点权益-stake-算法"}},[a._v("#")]),a._v(" 节点权益(stake)算法")]),a._v(" "),t("p",[a._v("凡是需要参与共识的节点角色，都有节点stake，包括auditor、validator、Sub-Beacon、Root-Beacon。不同角色对应着着不同节点stake，不同角色的节点stake算法不同。")]),a._v(" "),t("h4",{attrs:{id:"auditor-stake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auditor-stake"}},[a._v("#")]),a._v(" auditor stake")]),a._v(" "),t("p",[a._v("auditor stake与节点保证金、节点得票数、auditor信誉分相关，算法如下：")]),a._v(" "),t("p",[a._v("auditor stake=（节点保证金+节点得票总数/2）*auditor信誉分")]),a._v(" "),t("h4",{attrs:{id:"validator-stake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validator-stake"}},[a._v("#")]),a._v(" validator stake")]),a._v(" "),t("p",[a._v("validator stake与节点保证金、节点得票数相关，算法如下：")]),a._v(" "),t("p",[a._v("validator stake=（节点保证金+票数/2）* validator信誉分")]),a._v(" "),t("p",[a._v("validator stake最大值为2450万（链上治理可调节）。")]),a._v(" "),t("h4",{attrs:{id:"sub-beacon-stake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sub-beacon-stake"}},[a._v("#")]),a._v(" Sub-Beacon stake")]),a._v(" "),t("p",[a._v("Sub-Beacon stake与节点保证金、节点得票数相关，算法如下：")]),a._v(" "),t("p",[a._v("Sub-Beacon stake=节点保证金+节点得票数/2")]),a._v(" "),t("h4",{attrs:{id:"root-beacon-stake"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root-beacon-stake"}},[a._v("#")]),a._v(" Root-Beacon stake")]),a._v(" "),t("p",[a._v("Root-Beacon stake与节点保证金、节点得票数相关，算法如下：")]),a._v(" "),t("p",[a._v("Root-Beacon stake=节点保证金+节点得票数/2")]),a._v(" "),t("h2",{attrs:{id:"节点选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点选举"}},[a._v("#")]),a._v(" 节点选举")]),a._v(" "),t("p",[a._v("在TOP Network，任何节点都有机会成为在职节点，只要满足相应要求。")]),a._v(" "),t("p",[a._v("在TOP Network共识网络中有几种类型的节点。节点注册和分类排序是通过部署在Root-Beacon和Sub-Beacon上的智能合约以及VRF-FTS算法来处理的。")]),a._v(" "),t("h3",{attrs:{id:"vrf-fts随机分类排序和leader选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vrf-fts随机分类排序和leader选举"}},[a._v("#")]),a._v(" VRF-FTS随机分类排序和leader选举")]),a._v(" "),t("p",[a._v("节点分类排序过程利用了VRF-FTS算法。本质上，VRF根据一些输入数据产生一种可公开验证的随机种子，然后将其反馈给FTS算法。FTS算法通过一个节点的综合权益加权。Root-Beacon和Sub-Beacon上的一系列智能合约跟踪节点的工作负载贡献、总保证金、投票和任何不良行为。这些值都由另一个智能合约计算，构成综合权益，用于加权FTS算法。节点的综合权益越高，被随机分到分片或集群中的可能性就越高。")]),a._v(" "),t("p",[a._v("leader的选择也是通过VRF-FTS过程来确定的。")]),a._v(" "),t("p",[a._v("被选为hpBFT leader的机会也由一个节点的综合权益来衡量。")]),a._v(" "),t("p",[a._v("说明：")]),a._v(" "),t("blockquote",[t("p",[a._v("选举块使用时钟块表示，10s出一个时钟块。")])]),a._v(" "),t("h3",{attrs:{id:"root-beacon-group选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root-beacon-group选举"}},[a._v("#")]),a._v(" Root-Beacon group选举")]),a._v(" "),t("p",[a._v("选举的是Root-Beacon共识节点。")]),a._v(" "),t("p",[a._v("选举频率：每7天换届，Root-Beacon leader发现时钟块高度达到7天，发起Root-Beacon换届选举。")]),a._v(" "),t("p",[a._v("选举出块共识组：Root-Beacon group，当前届Root-Beacon选出下一届Root-Beacon。首届Root-Beacon由32个创世节点组成。")]),a._v(" "),t("p",[a._v("选举对象：Root-Beacon候选池合约中，所有高级节点以及创世节点。")]),a._v(" "),t("p",[a._v("选举节点数：")]),a._v(" "),t("p",[a._v("Root-Beacon group没选满情况下，只轮入不轮出；Root-Beacon group已选满，此时轮入轮出节点数一致。具体逻辑如下：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("当Root-Beacon group中的数=Root-Beacon group最大节点数 max_Root-Beacon_group_size 时：\n轮入节点数 = 轮出节点数 =min（ max（1/6*Root-Beacon group节点数向下取整，1），候选Root-Beacon节点数 ）；")])]),a._v(" "),t("li",[t("p",[a._v("当Root-Beacon group中的数 ＜Root-Beacon group最大节点数 max_Root-Beacon_group_size 时：\n轮出节点数 = 0\n轮入节点数= min（ max（1/6*Root-Beacon group节点数向下取整，1），候选Root-Beacon数 ）")])])]),a._v(" "),t("p",[a._v("轮入节点策略：按照Root-Beacon_stake 进行FTS，Root-Beacon_stake越高越大概率入选。")]),a._v(" "),t("p",[a._v("轮出节点策略：优先将不是Root-Beacon（包括更改节点类型不再担任Root-Beacon）的节点和注销节点（包括节点主动注销，被系统惩罚注销）轮出，如果已经超出轮出节点数，那么采用随机算法确定哪些节点轮出；如果以上节点未超出本轮需轮出节点数，剩余节点从Root-Beacon group中按照 1/Root-Beacon_stake 进行 FTS，即Root-Beacon_stake越高越小概率轮出。")]),a._v(" "),t("h3",{attrs:{id:"sub-beacon-group选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sub-beacon-group选举"}},[a._v("#")]),a._v(" Sub-Beacon group选举")]),a._v(" "),t("p",[a._v("选举的是Sub-Beacon共识节点。")]),a._v(" "),t("p",[a._v("选举频率与触发：每7天换届一次，Root-Beacon leader发现时钟块高度达到7天，发起Sub-Beacon选举。")]),a._v(" "),t("p",[a._v("选举出块共识组：Root-Beacon group")]),a._v(" "),t("p",[a._v("选举对象：Root-Beacon候选池合约中，所有高级节点以及创世节点。")]),a._v(" "),t("p",[a._v("选举节点数：")]),a._v(" "),t("p",[a._v("Sub-Beacon group没选满情况下，节点只轮入不轮出；Sub-Beacon group已选满，此时轮入轮出节点数一致。具体逻辑如下：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("当Sub-Beacon group中的数=Sub-Beacon group最大节点数 max_Sub-Beacon_group_size 时：\n轮入节点数 = 轮出节点数 =min（ max（1/6*Sub-Beacon group节点数向下取整，1），候选Sub-Beacon节点数 ）；")])]),a._v(" "),t("li",[t("p",[a._v("当Sub-Beacon group中的数 ＜Sub-Beacon group最大节点数 max_ZEC_group_size 时：\n轮出节点数 = 0\n轮入节点数= min（ max（1/6*Sub-Beacon group节点数向下取整，1），候选Sub-Beacon数 ）")])])]),a._v(" "),t("p",[a._v("轮入节点策略：按照Sub-Beacon_stake 进行FTS，Sub-Beacon_stake越高越大概率入选。")]),a._v(" "),t("p",[a._v("轮出节点策略：优先将不是Sub-Beacon（包括更改节点类型不再担任Sub-Beacon）的节点和注销节点（包括节点主动注销，被系统惩罚注销）轮出，如果已经超出轮出节点数，那么采用随机算法确定哪些节点轮出；如果以上节点未超出本轮需轮出节点数，剩余节点从Sub-Beacon group中按照1/Sub-Beacon_stake 进行 FTS，即Sub-Beacon_stake越高越小概率轮出。")]),a._v(" "),t("h3",{attrs:{id:"共识cluster选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共识cluster选举"}},[a._v("#")]),a._v(" 共识cluster选举")]),a._v(" "),t("p",[a._v("一个共识cluster包括1个auditor group 和 2个validator group。不同cluster的选举彼此独立，不会同时进行；而某个cluster选举时会先进行auditor group选举然后进行validator group选举；同一个cluster下的两个validator group会进行同时选举。")]),a._v(" "),t("p",[a._v("选举频率与触发：初始每10分钟轮换一次，后面通过链上提案修改为每3小时轮换一次。")]),a._v(" "),t("p",[a._v("选举出块共识组：Sub-Beacon group。")]),a._v(" "),t("p",[a._v("选举流程：先确定auditor候选池节点列表 → 确定group中注销auditor数 → 确定auditor轮出与轮入节点数 →根据策略auditor轮换 → 确定validator候选池节点列表（上一步骤轮出的auditor会加入该候选池）→ 确定group中注销validator数 → 确定validator轮出与轮入节点数 → 根据策略对该cluster下多个validator group 同时轮换（上一group的节点不会轮入下一group中）。")]),a._v(" "),t("h4",{attrs:{id:"auditor-group选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auditor-group选举"}},[a._v("#")]),a._v(" auditor group选举")]),a._v(" "),t("p",[a._v("轮入节点的候选节点池：")]),a._v(" "),t("p",[a._v("Sub-Beacon上候选池合约中票数和保证金满足最低要求的高级节点中，所有未当选在职auditor，且没有在当前cluster担任在职validator的高级节点，且没有在其他cluster担任在职auditor的节点，创世节点也包括在内。")]),a._v(" "),t("p",[a._v("auditor有效stake：")]),a._v(" "),t("p",[a._v("节点注册合约中会保存每个节点的auditor stake。")]),a._v(" "),t("p",[a._v("当auditor stake=0（如创世节点），该节点不参与排序，直接赋值有效stake=1；")]),a._v(" "),t("p",[a._v("当auditor stake＞0，对auditor stake进行排序，从大到小，以27个节点为一段（27为链上治理参数），同一段内的auditor有效stake 一致，下一段节点 有效stake比上一段要低10%向下取整（10%链上治理参数），首段有效stake值为1亿，有效stake最小值为1，即 An+1=max（An*90%向下取整，1）。具体如下：")]),a._v(" "),t("p",[a._v("A1: 100000000")]),a._v(" "),t("p",[a._v("A2: 90000000")]),a._v(" "),t("p",[a._v("A3: 81000000")]),a._v(" "),t("p",[a._v("A4: 79000000")]),a._v(" "),t("p",[a._v("……")]),a._v(" "),t("p",[a._v("An+1：max（An*90%向下取整，1）")]),a._v(" "),t("p",[a._v("轮出节点策略：")]),a._v(" "),t("p",[a._v("优先将不是auditor（包括票数不足、更改节点类型不再担任auditor）的节点和注销节点（包括节点主动注销，被系统惩罚注销）轮出，如果已经超出轮出节点数，那么采用随机算法确定哪些节点轮出；如果以上节点未超出本轮需轮出节点数，剩余节点从auditor group中按照 “（候选池最大有效auditor stake * 1亿 / 当前节点有效auditor stake）向下取整” 进行 FTS，即auditor_stake越高越小概率轮出。")]),a._v(" "),t("p",[a._v("轮入节点策略：")]),a._v(" "),t("p",[a._v("按照auditor stake从高到低排序，每27个节点一组，组内节点有效stake一致，按照有效stake进行 FTS，即auditor有效stake越高越大概率轮入。")]),a._v(" "),t("p",[a._v("轮换节点数：")]),a._v(" "),t("p",[a._v("候选池节点充足，auditor group没选满情况下，只轮入不轮出；候选节点不足，或者候选节点充足但auditor group已选满，此时轮入轮出节点数一致。")]),a._v(" "),t("h4",{attrs:{id:"validator-group选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validator-group选举"}},[a._v("#")]),a._v(" validator group选举")]),a._v(" "),t("p",[a._v("轮入节点的候选节点池：")]),a._v(" "),t("p",[a._v("Sub-Beacon上候选池合约中保证金满足最低要求的高级节点和验证节点中，所有未当选在职validator，且没有在当前cluster担任在职auditor的高级节点（包括本轮刚刚被选到auditor group中的节点），且没有在其他cluster担任在职validator的验证节点，注意也包括本轮刚刚被FTS算法轮换出auditor group的高级节点（注销、更改节点类型而轮出的高级节点不算），创世节点也包括在内。")]),a._v(" "),t("p",[a._v("轮出节点策略：")]),a._v(" "),t("p",[a._v("优先将不是validator（更改节点类型不担任validator）的节点和注销节点（包括节点主动注销，被系统惩罚注销）轮出，如果已经超出轮出节点数，那么采用随机算法确定哪些节点轮出；如果以上节点未超出本轮需轮出节点数，剩余节点从validator group中按照 “候选池最大validator stake * 1亿 / 当前节点validator stake” 进行 FTS，即validator_stake越高越小概率轮出。")]),a._v(" "),t("p",[a._v("轮入节点策略：")]),a._v(" "),t("p",[a._v("对validator候选池节点按照sqrt(validator_stake)进行 FTS，即validator_stake越高越大概率轮入。")]),a._v(" "),t("p",[a._v("轮换节点数：")]),a._v(" "),t("p",[a._v("候选池节点充足，auditor group没选满情况下，只轮入不轮出；候选节点不足，或者候选节点充足但auditor group已选满，此时轮入轮出节点数一致。")]),a._v(" "),t("h3",{attrs:{id:"archive-选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#archive-选举"}},[a._v("#")]),a._v(" archive 选举")]),a._v(" "),t("p",[a._v("选举频率：360时钟周期")]),a._v(" "),t("p",[a._v("选举出块共识组：Root-Beacon")]),a._v(" "),t("p",[a._v("选举对象：Root-Beacon候选池合约中票数和保证金满足archive最低要求的高级节点及创世节点。")]),a._v(" "),t("p",[a._v("轮入节点数：轮入所有的候选archive节点。")]),a._v(" "),t("p",[a._v("轮出节点数：注销、更换节点类型的archive节点，全部轮出。")]),a._v(" "),t("h3",{attrs:{id:"edge-选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edge-选举"}},[a._v("#")]),a._v(" edge 选举")]),a._v(" "),t("p",[a._v("选举频率：360时钟周期")]),a._v(" "),t("p",[a._v("选举出块共识组：Root-Beacon")]),a._v(" "),t("p",[a._v("选举对象：Root-Beacon候选池合约中所有edge节点及创世节点。")]),a._v(" "),t("p",[a._v("轮入节点数：轮入所有的候选edge节点。")]),a._v(" "),t("p",[a._v("轮出节点数：注销、更换节点类型的edge节点，全部轮出。")]),a._v(" "),t("h3",{attrs:{id:"共识group-leader选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共识group-leader选举"}},[a._v("#")]),a._v(" 共识group leader选举")]),a._v(" "),t("h4",{attrs:{id:"root-beacon-group-leader选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#root-beacon-group-leader选举"}},[a._v("#")]),a._v(" Root-Beacon group leader选举")]),a._v(" "),t("p",[a._v("选举频率：交易级别。")]),a._v(" "),t("p",[a._v("选举出块共识组：Root-Beacon group。")]),a._v(" "),t("p",[a._v("节点池：该group中的全部在职Root-Beacon节点。")]),a._v(" "),t("p",[a._v("选举节点数：1个节点。")]),a._v(" "),t("p",[a._v("选举规则：按照Root-Beacon stake进行FTS。")]),a._v(" "),t("h4",{attrs:{id:"sub-beacon-group-leader选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sub-beacon-group-leader选举"}},[a._v("#")]),a._v(" Sub-Beacon group leader选举")]),a._v(" "),t("p",[a._v("选举频率：交易级别。")]),a._v(" "),t("p",[a._v("选举出块共识组：Sub-Beacon group。")]),a._v(" "),t("p",[a._v("节点池：该group中的全部在职Sub-Beacon节点。")]),a._v(" "),t("p",[a._v("选举节点数：1个节点。")]),a._v(" "),t("p",[a._v("选举规则：按照Sub-Beacon stake进行FTS。")]),a._v(" "),t("h4",{attrs:{id:"共识cluster-leader选举"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共识cluster-leader选举"}},[a._v("#")]),a._v(" 共识cluster leader选举")]),a._v(" "),t("p",[a._v("第N轮leader从validator group中按照validator stake选，第N+1轮leader就从auditor group中按auditor stake选，交替选leader，每来一笔交易选一个leader。")]),a._v(" "),t("p",[a._v("leader选举的共识组为交易sender account 所在的validator group和上级auditor group组成的共识group。")])])}),[],!1,null,null,null);o.default=e.exports}}]);