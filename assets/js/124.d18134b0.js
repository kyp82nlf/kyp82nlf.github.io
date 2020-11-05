(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{505:function(v,_,t){"use strict";t.r(_);var a=t(18),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"投票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#投票"}},[v._v("#")]),v._v(" 投票")]),v._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("p",[v._v("TOP Network的投票系统遵循以下设计思想：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("一票一投；")])]),v._v(" "),t("li",[t("p",[v._v("保护投票人利益：本金担保，分红收益系统派发；")])]),v._v(" "),t("li",[t("p",[v._v("参与民主的投票者有相应的门槛，保证投票者利益与社区一致；")])]),v._v(" "),t("li",[t("p",[v._v("积极选民适合直接民主（直投），懒惰选民适合流动民主（代投）；")])]),v._v(" "),t("li",[t("p",[v._v("一个矿工/矿池会拥有多个节点，代投对矿工来说可以更好的分配选票，降低投票人成本。")])])]),v._v(" "),t("h2",{attrs:{id:"角色说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#角色说明"}},[v._v("#")]),v._v(" 角色说明")]),v._v(" "),t("p",[t("strong",[v._v("节点")])]),v._v(" "),t("p",[v._v("只有注册为advance节点才可以获得选票，advance节点可以设置分红比例，将节点奖励按照分红比例分配给支持自己的投票账户。")]),v._v(" "),t("p",[v._v("分红比例14天可以修改1次。分红比例范围在0~100%之间。例如，当节点设置节点分红比例为80%时，表示节点奖励的80%将分给投票给该节点的其他节点账户。")]),v._v(" "),t("p",[t("strong",[v._v("投票人")])]),v._v(" "),t("p",[v._v("任何持币的普通账户都是投票人，投票人可以将选票投给节点，或者委托给代投，并因此拿到投票者分红。")]),v._v(" "),t("p",[v._v("持币人输入锁定期、锁定的TOP金额，发起锁币兑票交易，交易照常消耗gas资源，交易成功后，账户下相应数量的TOP被锁定，未使用票数增加。")]),v._v(" "),t("h2",{attrs:{id:"锁币兑票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁币兑票"}},[v._v("#")]),v._v(" 锁币兑票")]),v._v(" "),t("p",[v._v("每次兑票1000票起兑。")]),v._v(" "),t("p",[v._v("选择锁定期越长，同样票数需要锁定的TOP token金额越少。")]),v._v(" "),t("p",[v._v("1 TOP token锁定30天兑换1票，锁定60天兑换1.04票，以30天为单位（不足30天的部分不算），每增加30天的锁定期，可以多兑换4%，直到TOP:票=1:2。")]),v._v(" "),t("p",[v._v("兑票计算方法：")]),v._v(" "),t("p",[v._v("1TOP兑票数=min（1.04^(锁定期/30-1)，2），其中1.04为“兑票率因子”。")]),v._v(" "),t("p",[v._v("说明：")]),v._v(" "),t("blockquote",[t("p",[v._v("兑换投票金额是锁在用户账户下，而非转账到shard投票合约中。")])]),v._v(" "),t("h2",{attrs:{id:"投票-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#投票-2"}},[v._v("#")]),v._v(" 投票")]),v._v(" "),t("p",[v._v("投票人或代投可随时发起投票交易。")]),v._v(" "),t("p",[v._v("投到一个节点上的起投票数100票，后续累加投票无限制。")]),v._v(" "),t("p",[v._v("投票交易照常消耗gas资源，没有额外的服务费。")]),v._v(" "),t("h2",{attrs:{id:"取消投票"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取消投票"}},[v._v("#")]),v._v(" 取消投票")]),v._v(" "),t("p",[v._v("投票人可以随时将已经投到节点上的选票取消并收回，使节点上的选票减少，用户账户中未使用的选票增加。")]),v._v(" "),t("p",[v._v("每次取消投票的票数无限制，但时不能高于给节点投票的总数，否则取消投票将失败。")]),v._v(" "),t("p",[v._v("取消投票交易同样消耗gas资源。")]),v._v(" "),t("h2",{attrs:{id:"解锁兑票top-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解锁兑票top-token"}},[v._v("#")]),v._v(" 解锁兑票TOP token")]),v._v(" "),t("p",[v._v("锁定期内的TOP token不能解锁，只能解锁到期的TOP token。")]),v._v(" "),t("p",[v._v("发起解锁后，解锁的金额会立刻到账。")]),v._v(" "),t("p",[v._v("已经被使用的选票对应锁定的TOP token不能被解锁。")])])}),[],!1,null,null,null);_.default=s.exports}}]);