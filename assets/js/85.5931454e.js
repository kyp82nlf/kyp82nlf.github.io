(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{467:function(_,t,v){"use strict";v.r(t);var a=v(18),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"资源模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#资源模型"}},[_._v("#")]),_._v(" 资源模型")]),_._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[_._v("#")]),_._v(" 概述")]),_._v(" "),v("p",[_._v("TOP Network链上的交易可被分为分片交易、Root-Beacon系统交易、Sub-Beacon系统交易，每笔交易都会消耗链上资源。")]),_._v(" "),v("p",[_._v("像NET、CPU这种临时占用的资源，我们称为gas。")]),_._v(" "),v("p",[_._v("每个账户：包括智能合约账户和普通账户，都有免费的gas资源配额。")]),_._v(" "),v("p",[_._v("为了获得更高的配额，账户必须锁定TOP Token以兑换gas资源。")]),_._v(" "),v("p",[_._v("gas资源每24小时恢复到最大数量。")]),_._v(" "),v("h2",{attrs:{id:"gas消耗规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gas消耗规则"}},[_._v("#")]),_._v(" gas消耗规则")]),_._v(" "),v("p",[_._v("gas消费规则根据交易涉及的交易类型以及账户类型而不同。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("非调用合约的交易，仅向发起方收费。")])]),_._v(" "),v("li",[v("p",[_._v("普通账户调用用户合约交易，优先向发起方收费，发起方与合约共同承担（用户合约可设置愿意为交易支付的gas费上限）。")])]),_._v(" "),v("li",[v("p",[_._v("普通用户调用系统合约向发起方收费，系统内部触发的系统合约调用不收取费用。")])])]),_._v(" "),v("p",[_._v("交易消耗的gas如下表所示。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("交易类型")]),_._v(" "),v("th"),_._v(" "),v("th",[_._v("总消耗gas")]),_._v(" "),v("th",[_._v("交易费发送方支付")]),_._v(" "),v("th",[_._v("交易接收方支付")]),_._v(" "),v("th",[_._v("备注")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("单账户交易")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("tx_size*1")]),_._v(" "),v("td",[_._v("tx_size*1")]),_._v(" "),v("td",[_._v("-")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("跨账户交易")]),_._v(" "),v("td",[_._v("非调用合约交易")]),_._v(" "),v("td",[_._v("tx_size*3")]),_._v(" "),v("td",[_._v("tx_size*3")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("调用系统合约交易")]),_._v(" "),v("td",[_._v("tx_size*3")]),_._v(" "),v("td",[_._v("tx_size*3")]),_._v(" "),v("td",[_._v("0")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("调用用户合约交易")]),_._v(" "),v("td",[_._v("tx_size*3+CPU ns(合约指令集)/40")]),_._v(" "),v("td",[_._v("费用的一半由发送方承担，另一半优先由用户合约承担，合约无法支付再由发送方承担")]),_._v(" "),v("td",[_._v("min(gasLimit,合约余额,receiver action消耗的gas/2)")]),_._v(" "),v("td",[_._v("gasLimit：合约愿意为交易发送方付出的每笔交易的gas费用上限。")])])])]),_._v(" "),v("p",[_._v("提醒：")]),_._v(" "),v("blockquote",[v("p",[_._v("对于Beacon系统合约交易（注册节点相关、提案相关、启动节点进程入网）来说，除了会消耗gas，交易发送放还将会被自动扣除一笔手续费并被销毁，当前为100*10^6 uTOP token。这一小笔费以保护Beacon系统免受泛滥交易攻击。")])]),_._v(" "),v("h2",{attrs:{id:"每日免费gas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#每日免费gas"}},[_._v("#")]),_._v(" 每日免费gas")]),_._v(" "),v("p",[_._v("默认情况下，若账户余额大于等于100 TOP token，该账户每24小时还会被免费赠送25,000Tgas。这允许该账户每日可以进行多次免费交易。")]),_._v(" "),v("p",[_._v("最低限额可避免作恶者使用免费分配的gas来创建大量账户和泛滥交易实施攻击。")]),_._v(" "),v("p",[_._v("账户已使用gas随时间逐步衰减，24小时（链上治理参数）后衰减到0，即可用gas恢复到gas额度，衰减的公式如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"ResourceModel.assets/image2020-7-22_20-50-55-1602230404660.png",alt:"image2020-7-22_20-50-55"}})]),_._v(" "),v("p",[_._v("比如在时间T1时刻，账户gas已使用量为U，到T1+12h，账户再次使用gas为u,此时账户已使用TGAS为 U/2 + u。")]),_._v(" "),v("h3",{attrs:{id:"锁定top-token兑换gas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁定top-token兑换gas"}},[_._v("#")]),_._v(" 锁定TOP token兑换gas")]),_._v(" "),v("p",[_._v("普通账户和合约账户都可以锁定TOP  token以兑换更多的gas（合约账户无法主动发起，可由部署合约的父账户发起）。")]),_._v(" "),v("p",[_._v("兑换gas的公式如下：")]),_._v(" "),v("p",[v("img",{attrs:{src:"ResourceModel.assets/Snap57.jpg",alt:"Snap57"}})]),_._v(" "),v("p",[_._v("其中：系统总gas=单片gas*分片数(validator_group_count)。单片gas和分片数可以通过链上治理调整。分片数目前被设置为4，系统gas总量随着分片数的增长而增长。")]),_._v(" "),v("p",[_._v("锁定在系统中的TOP token总数每十分钟更新一次，其值存储在一个系统合约中。")]),_._v(" "),v("p",[_._v("系统总锁定TOP=初始值+用户锁定值，以免初始gasprice为0。")]),_._v(" "),v("p",[_._v("一个普通账户24小时内可以获得的gas不超过200,000Tgas，大约可以发起800条交易。")]),_._v(" "),v("p",[_._v("一个合约账户24小时内可以获得的gas不超过10,000,000Tgas，大约可以执行4万条交易，使用4秒CPU。")]),_._v(" "),v("h3",{attrs:{id:"gas消耗与net-cpu的关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gas消耗与net-cpu的关系"}},[_._v("#")]),_._v(" gas消耗与NET/CPU的关系")]),_._v(" "),v("p",[_._v("1Tgas相当于1byte的带宽或40ns的CPU时间。")]),_._v(" "),v("p",[_._v("字节是根据原始交易的大小计算的。")]),_._v(" "),v("p",[_._v("CPU时间仅在执行合约时消耗，并且总CPU时间是根据合约指令集确定的。")]),_._v(" "),v("p",[_._v("一个交易最多允许消耗25,000Tgas。")]),_._v(" "),v("h2",{attrs:{id:"交易保证金-tx-deposit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交易保证金-tx-deposit"}},[_._v("#")]),_._v(" 交易保证金(tx_deposit)")]),_._v(" "),v("p",[_._v("大多数用户将有足够的免费gas来满足他们的日常需求，而那些发送较多交易的用户可能会用光gas，并需要支付一笔数额很小的交易保证金。")]),_._v(" "),v("p",[_._v("当账户没有足够的gas来发送交易时，TOP Network将从其交易保证金(tx_deposit)余额中扣除一部分费用兑换gas以支付交易费用。")]),_._v(" "),v("p",[_._v("交易保证金余额必须大于或等于0.1 TOP token来抵消gas花费，这笔费用随即被销毁。")]),_._v(" "),v("p",[_._v("每笔交易保证金从账户除转账金额以外的账户余额中冻结。")]),_._v(" "),v("p",[_._v("当前交易保证金兑换gas比例设置为：1Tgas=100 uTOP token。")]),_._v(" "),v("p",[_._v("交易保证金可以通过链上治理进行更改。")])])}),[],!1,null,null,null);t.default=s.exports}}]);