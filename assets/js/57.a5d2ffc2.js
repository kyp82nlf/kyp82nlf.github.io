(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{437:function(a,s,t){"use strict";t.r(s);var r=t(18),v=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"链上治理业务流程on-chain-governance-business-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链上治理业务流程on-chain-governance-business-process"}},[a._v("#")]),a._v(" 链上治理业务流程On-chain Governance Business Process")]),a._v(" "),t("h2",{attrs:{id:"概述overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述overview"}},[a._v("#")]),a._v(" 概述Overview")]),a._v(" "),t("p",[a._v("TOP Network链上治理的一切活动都通过提案、TCC表决的方式进行。")]),a._v(" "),t("p",[a._v("All governance activities on the TOP Network chain are conducted by proposals and TCC voting.")]),a._v(" "),t("h2",{attrs:{id:"提案业务流程proposal-business-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提案业务流程proposal-business-process"}},[a._v("#")]),a._v(" 提案业务流程Proposal Business Process")]),a._v(" "),t("p",[t("img",{attrs:{src:"On-ChainGovernanceProposal.assets/Snap22.jpg",alt:"Snap22"}})]),a._v(" "),t("h2",{attrs:{id:"发起提案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发起提案"}},[a._v("#")]),a._v(" 发起提案")]),a._v(" "),t("p",[a._v("任何用户抵押不少于100TOP都可以发起提案，当提案结束或者超过30天有效期，将退还给用户。")]),a._v(" "),t("h2",{attrs:{id:"提案类型及级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提案类型及级别"}},[a._v("#")]),a._v(" 提案类型及级别")]),a._v(" "),t("p",[a._v("不同提案的级别不一样，级别越高，表决通过的要求越高。")]),a._v(" "),t("p",[a._v("目前提案类型如下：")]),a._v(" "),t("h3",{attrs:{id:"链上参数修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链上参数修改"}},[a._v("#")]),a._v(" 链上参数修改")]),a._v(" "),t("p",[a._v("包括白名单的管理、TCC成员名单管理也属于此类型。不同的参数级别不一样，每一个参数都有一个治理range。")]),a._v(" "),t("h3",{attrs:{id:"白名单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#白名单"}},[a._v("#")]),a._v(" 白名单")]),a._v(" "),t("p",[a._v("主网发布，默认打开白名单功能，对于链上的一些交易，仅限白名单内的账户可以发送。")]),a._v(" "),t("p",[a._v("限制交易类型有：转账（包含激活账户），创建子账户，部署合约，兑票，投票，领取投票者奖励，调用LUA合约，注意其他交易不做限制，比如调用节点注册合约的方法、领取节点奖励、质押gas质押金等。")]),a._v(" "),t("p",[a._v("白名单内的账户默认只有创世账户，通过链上治理委员会可以修改白名单中的账户名单，包括添加、删除；通过链上治理委员会可以关闭白名单功能，使所有账户不受限制发送这些交易。")]),a._v(" "),t("h3",{attrs:{id:"系统服务开关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统服务开关"}},[a._v("#")]),a._v(" 系统服务开关")]),a._v(" "),t("p",[a._v('系统终止服务shut down与开启服务，shut down是指停止所有交易的传递与处理，级别为"critical"。')]),a._v(" "),t("p",[a._v("注意系统升级通过链下治理的方式实现，系统升级采用平滑升级的方式进行，即节点下载新的程序后，并不会立即生效，节点汇报自己的版本信息，监控全网在指定时钟块高度之前超过4/5 stake和2/3节点已经更新到新的程序，才在该时钟生效。")]),a._v(" "),t("p",[a._v("如果超过该时钟仍未达到目标，则升级失败，全网继续使用旧版本的程序。")]),a._v(" "),t("h3",{attrs:{id:"社区治理基金管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#社区治理基金管理"}},[a._v("#")]),a._v(" 社区治理基金管理")]),a._v(" "),t("p",[a._v('级别为"critical"。')]),a._v(" "),t("p",[a._v("零工作量时的节点奖励，发行量的4%等，会转到社区基金账户，没有人拥有该账户的私钥，只能通过提案对该账户内的资金进行管理，包括销毁、转账到指定账户。")]),a._v(" "),t("h2",{attrs:{id:"提案表决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提案表决"}},[a._v("#")]),a._v(" 提案表决")]),a._v(" "),t("p",[a._v("只有TCC委员委员有表决权，委员可以表决“赞成”、“反对”，也可以在提案的30天有效期内不做任何表决，即视为委员弃权。提案的有效期为链上治理参数。")]),a._v(" "),t("p",[a._v("对于不同级别的提案，表决通过的规则不一样：")]),a._v(" "),t("p",[a._v('对于"critical"类型的提案，需要2/3的委员通过，且反对委员不超过1/5；')]),a._v(" "),t("p",[a._v('对于"important"类型的提案，需要51%的委员通过，弃权委员不超过1/4；')]),a._v(" "),t("p",[a._v('对于"normal"类型的提案，需要51%的委员通过。')]),a._v(" "),t("h2",{attrs:{id:"提案执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提案执行"}},[a._v("#")]),a._v(" 提案执行")]),a._v(" "),t("p",[a._v("提案表决通过后，且没有被否决，将形成立法命令，发给全网节点。")])])}),[],!1,null,null,null);s.default=v.exports}}]);