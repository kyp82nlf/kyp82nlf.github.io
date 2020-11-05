(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{521:function(t,e,_){"use strict";_.r(e);var v=_(18),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"节点入网"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#节点入网"}},[t._v("#")]),t._v(" 节点入网")]),t._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),_("p",[t._v("在“TOP Network入门”"),_("RouterLink",{attrs:{to:"/zh/Tools/TOPIO/NodeAccess/docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/Overview.html"}},[t._v("成为节点")]),t._v("一章中，我们已为您介绍了节点一键注册并加入TOP Network网络的方法，本章节将为您介绍更多节点入网的内容，包括设置了node_sign_key的节点一键入网，以及先注册节点，后启动节点进程xnode入网。")],1),t._v(" "),_("h2",{attrs:{id:"节点设置node-sign-key入网"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#节点设置node-sign-key入网"}},[t._v("#")]),t._v(" 节点设置node_sign_key入网")]),t._v(" "),_("p",[t._v("为了更好地保护您的账户资产，建议您使用"),_("code",[t._v("wallet createKey")]),t._v("创建一对无资产的公私钥对作为节点的node_sign_key，在节点注册入网后，节点工作时使用其私钥为节点签名。")]),t._v(" "),_("p",[t._v("注册节点，启动节点进程xnode，加入TOP Network网络：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("topio --register_deposit --node_type --nodename --node_account_addr --node_sign_keysotre  --password\n")])])]),_("p",[t._v("选项说明如下表所示。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("选项名称")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("--register_deposit")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("Uint64")]),t._v(" "),_("td",[t._v("节点注册保证金，各类型节点注册保证金要求请参见"),_("a",{attrs:{href:"http://192.168.30.12/#/docs-cn/GetStartedonTOPNetwork/BecomeTOPNetworkNode/Requirment",target:"_blank",rel:"noopener noreferrer"}},[t._v("成为节点的要求"),_("OutboundLink")],1),t._v("。")])]),t._v(" "),_("tr",[_("td",[t._v("--node_type")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("节点类型：edge（边缘节点）、validator（验证节点）、advance（高级节点）。")])]),t._v(" "),_("tr",[_("td",[t._v("--nodename")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("节点昵称，4-16字符，字母、数字或下划线。")])]),t._v(" "),_("tr",[_("td",[t._v("--node_account_addr")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("节点账户地址。")])]),t._v(" "),_("tr",[_("td",[t._v("--node_sign_keystore")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("您可以使用节点账户公钥(Base64)作为节点注册的node sign key。 为了更好地保护您的账户资产，建议您使用"),_("code",[t._v("wallet createKey")]),t._v("创建一对无资产的公私钥对作为节点的node sign key，在节点注册入网后，节点工作时使用其私钥为节点签名。 此处请输入对应的公钥(Base64)，其他节点可使用该公钥进行验签。")])]),t._v(" "),_("tr",[_("td",[t._v("--password")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("keystore文件密码。")])])])]),t._v(" "),_("p",[t._v("示例：")]),t._v(" "),_("p",[t._v('节点"T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW"注册成为高级节点，并设置了node_sign_key的入网命令如下：')]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("topio --register_deposit 500000000000 --node_type validator --nodename top1 --node_account_addr T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW --node_sign_keystore /root/Topnetwork/keystore/T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hCW --password 123456abc\n")])])]),_("p",[t._v("执行命令后，请等待节点入网，若最终打印如下信息，则证明您已成功加入TOP Network网络、进入候选池，等待选举。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("join p2p network ok\njoin chain network transaction ok\n")])])]),_("h2",{attrs:{id:"节点先注册后入网"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#节点先注册后入网"}},[t._v("#")]),t._v(" 节点先注册后入网")]),t._v(" "),_("p",[t._v("支持先注册节点，再启动节点进程xnode。")]),t._v(" "),_("h3",{attrs:{id:"注册节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注册节点"}},[t._v("#")]),t._v(" 注册节点")]),t._v(" "),_("p",[t._v("注册节点命令如下：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("system <register_deposit> <node_type> <nodename> --node_sign_key\n")])])]),_("p",[t._v("参数说明如下表所示。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数名称")]),t._v(" "),_("th",[t._v("是否必选")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("register_deposit")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("Uint64")]),t._v(" "),_("td",[t._v("节点注册保证金，单位uTOP。")])]),t._v(" "),_("tr",[_("td",[t._v("node_type")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("节点类型，包括edge（边缘节点）、validator（验证节点）、advance（高级节点），高级节点兼具archive（存档）、validator（验证）、auditor（审计）角色。"),_("br"),t._v("您可以注册成为三种类型中的一种。"),_("br"),t._v("注册成为高级节点后，advance节点被选举为何种工作角色取决于节点的选票："),_("br"),t._v("advance节点被选举为audtior、archive、Root-Beacon、Sub-Beacon角色，节点所获得的选票需要大于等于节点实际质押的保证金（此处节点保证金以TOP计算，非uTOP）。"),_("br"),t._v("当选票低于实际质押保证金时，advance节点只能被选为validator。"),_("br"),t._v("说明："),_("br"),t._v("节点选票须由接受投票而得，可以由其他节点投票，也可由本账户投票。"),_("br"),t._v("提醒："),_("br"),t._v("高级节点注册后，如使用"),_("code",[t._v("system stakeDeposit")]),t._v("为节点增加保证金，则节点想被选举为audtior、archive、Root-Beacon、Sub-Beacon角色，需要增加相应的票数。")])]),t._v(" "),_("tr",[_("td",[t._v("nodename")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("节点昵称，4-16字符，字母、数字或下划线。")])])])]),t._v(" "),_("p",[t._v("选项说明如下表所示。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("选项名称")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("--node_sign_key")]),t._v(" "),_("td",[t._v("账户公钥")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("您可以使用节点账户公钥(Base64)作为节点注册的node sign key。"),_("br"),t._v("为了更好地保护您的账户资产，建议您使用"),_("code",[t._v("wallet createKey")]),t._v("创建一对无资产的公私钥对作为节点的node sign key，在节点注册入网后，节点工作时使用其私钥为节点签名。"),_("br"),t._v("此处请输入对应的公钥(Base64)，其他节点可使用该公钥进行验签。"),_("br"),t._v("如不设置node_sign_key，系统默认使用账户公钥作为node_sign_key。")])])])]),t._v(" "),_("p",[t._v("示例：")]),t._v(" "),_("p",[t._v('账户"T-0-LebeXEZGGTctfqA5Y8mnJroPckUDkE2hC"注册成为高级节点。')]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("system registerNode 500000000000 validator top1 --node_sign_key BFYRfp557uqBAKA54JmFkT+UVXf74LVdHDnjtLBM/V3nyIdKiHLwX2yr7s03RCoHNfciT0Zays3oUvcmkRv5VK4=\n")])])]),_("h3",{attrs:{id:"启动节点进程xnode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启动节点进程xnode"}},[t._v("#")]),t._v(" 启动节点进程xnode")]),t._v(" "),_("p",[t._v("节点注册成功后，启动节点进程xnode，加入TOP Network网络。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("topio --node_account_addr --node_sign_keystore --password\n")])])]),_("p",[t._v("选项说明如下表所示：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("选项名称")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("--node_account_addr")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("节点账户地址。")])]),t._v(" "),_("tr",[_("td",[t._v("--node_sign_keystore")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("如您注册节点时设置了node_sign_key，则此处需要传入node_sign_key的keystore文件路径。"),_("br"),t._v("如您注册节点时未设置node_sign_key，则不需要此选项。")])]),t._v(" "),_("tr",[_("td",[t._v("--password")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("keystore文件密码。")])])])]),t._v(" "),_("h2",{attrs:{id:"停止节点进程xnode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#停止节点进程xnode"}},[t._v("#")]),t._v(" 停止节点进程xnode")]),t._v(" "),_("p",[t._v("支持单进程及多进程。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("[root@Jiao ~/top/xchain/cbuild/bin/Linux]# topio -s stop\nsignal:stop\nenv home:/root\nfound runing xnode_pid:28795\nwill send SIGKILL signal to pid:28795\ndone signal operations\n")])])]),_("p",[t._v("或者使用"),_("code",[t._v("Ctrl")]),t._v("+"),_("code",[t._v("C")]),t._v("，或者Linux命令"),_("code",[t._v("kill")]),t._v("停止xnode。")]),t._v(" "),_("h2",{attrs:{id:"查询节点入网后的网络信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询节点入网后的网络信息"}},[t._v("#")]),t._v(" 查询节点入网后的网络信息")]),t._v(" "),_("p",[t._v("查询节点入网后的网络信息，需要使用TOPIO console模式或者attach模式。")]),t._v(" "),_("p",[t._v("查询命令具体请参见"),_("RouterLink",{attrs:{to:"/zh/Tools/TOPIO/NodeAccess/docs-cn/Tools/TOPIO/xnode/command.html"}},[t._v("查询节点网络信息")]),t._v("。")],1)])}),[],!1,null,null,null);e.default=a.exports}}]);