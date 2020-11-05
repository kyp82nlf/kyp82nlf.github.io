(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{524:function(t,a,s){"use strict";s.r(a);var e=s(18),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"topio数据存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topio数据存储"}},[t._v("#")]),t._v(" TOPIO数据存储")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("本章将指导您如何存储链上数据及管理数据库。")]),t._v(" "),s("p",[t._v("节点入网后，TOPIO将自动同步链上数据至节点本地数据库。")]),t._v(" "),s("h2",{attrs:{id:"数据库目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库目录"}},[t._v("#")]),t._v(" 数据库目录")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("建议您不要修改数据库目录名称及目录下的文件名称，否则将导致TOPIO部分功能无法正常使用！")])]),t._v(" "),s("p",[t._v("TOPIO数据目录如下图所示。")]),t._v(" "),s("p",[s("img",{attrs:{src:"StorewithTOPIO.assets/Snap52-1600310027938.jpg",alt:"Snap52"}})]),t._v(" "),s("p",[t._v("db：存储所有链上数据；log：存储TOPIO运行过程中的日志；keystore：存储账户、公私钥对keystore文件，keystore文件目录可自行另外指定。")]),t._v(" "),s("h2",{attrs:{id:"数据库管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库管理"}},[t._v("#")]),t._v(" 数据库管理")]),t._v(" "),s("p",[t._v("提供链数据库备份、还原功能。")]),t._v(" "),s("h3",{attrs:{id:"备份数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份数据库"}},[t._v("#")]),t._v(" 备份数据库")]),t._v(" "),s("h4",{attrs:{id:"请求方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求方式"}},[t._v("#")]),t._v(" 请求方式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("topio db backup\n")])])]),s("h4",{attrs:{id:"请求参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求参数"}},[t._v("#")]),t._v(" 请求参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("是否必选")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("backupdir")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Text")]),t._v(" "),s("td",[t._v("数据库备份目标路径。")])])])]),t._v(" "),s("h4",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项名称")]),t._v(" "),s("th",[t._v("值")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-h,--help")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("查看命令帮助。")])]),t._v(" "),s("tr",[s("td",[t._v("-d,--dir")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("TEXT")]),t._v(" "),s("td",[t._v("数据库源路径，默认为当前数据路径。")])])])]),t._v(" "),s("h4",{attrs:{id:"请求样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求样例"}},[t._v("#")]),t._v(" 请求样例")]),t._v(" "),s("p",[t._v('以下请求样例中，数据库源路径为"/root/Topnetwork"，数据库备份路径为"/home/cathy2"。')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("topio db backup -d /root/Topnetwork /home/cathy2\n")])])]),s("h4",{attrs:{id:"返回样例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回样例"}},[t._v("#")]),t._v(" 返回样例")]),t._v(" "),s("h5",{attrs:{id:"成功返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成功返回"}},[t._v("#")]),t._v(" 成功返回")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Database backup operating successfully.\nDBversion : 1\n")])])]),s("h5",{attrs:{id:"失败返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#失败返回"}},[t._v("#")]),t._v(" 失败返回")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Backup failed\nError: the /home/db or /home/pdb does not exist.\n")])])]),s("h3",{attrs:{id:"还原数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#还原数据库"}},[t._v("#")]),t._v(" 还原数据库")]),t._v(" "),s("p",[t._v("::: 还原的目标路径必须为空，否则还原将失败。 :::")]),t._v(" "),s("p",[t._v("还原数据库前，使用命令"),s("code",[t._v("topio db list_dbversion")]),t._v("查询备份路径下所有的数据库版本。")]),t._v(" "),s("p",[t._v("选择一个版本，还原至一个空的路径下。如不指定版本，则默认还原最新版本。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root@localhost topio-0.0.0.0-debug]# topio db list_dbversion /home/cathy2\nDBversion:1,timestamp:2020-06-05 07:04:02.\nDBversion:2,timestamp:2020-06-05 07:07:29.\n")])])]),s("h4",{attrs:{id:"请求方式-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求方式-2"}},[t._v("#")]),t._v(" 请求方式")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("topio db restore\n")])])]),s("h4",{attrs:{id:"请求参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求参数-2"}},[t._v("#")]),t._v(" 请求参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名称")]),t._v(" "),s("th",[t._v("是否必选")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("backupdir")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Text")]),t._v(" "),s("td",[t._v("数据库源路径。")])])])]),t._v(" "),s("h4",{attrs:{id:"选项-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项-2"}},[t._v("#")]),t._v(" 选项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项名称")]),t._v(" "),s("th",[t._v("值")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-h,--help")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("查看命令帮助。")])]),t._v(" "),s("tr",[s("td",[t._v("-d,--dir")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Text")]),t._v(" "),s("td",[t._v("数据库还原的目标路径，必须为空。")])]),t._v(" "),s("tr",[s("td",[t._v("-D,--DBversion")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Integer")]),t._v(" "),s("td",[t._v("备份的数据库版本，如不指定，默认还原最新版本。")])])])]),t._v(" "),s("h4",{attrs:{id:"请求样例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求样例-2"}},[t._v("#")]),t._v(" 请求样例")]),t._v(" "),s("p",[t._v("将路径"),s("code",[t._v("/home/cathy2")]),t._v('中的数据库版本"2"还原至路径'),s("code",[t._v("/home/peter2")]),t._v("下。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("topio db restore -d /home/peter2 /home/cathy2 -D 2\n")])])]),s("h4",{attrs:{id:"返回样例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回样例-2"}},[t._v("#")]),t._v(" 返回样例")]),t._v(" "),s("h5",{attrs:{id:"成功返回-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成功返回-2"}},[t._v("#")]),t._v(" 成功返回")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Database restore operating successfully.\n")])])]),s("h5",{attrs:{id:"失败返回-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#失败返回-2"}},[t._v("#")]),t._v(" 失败返回")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Restore failed\nError: The target dir for restore is not empty, please input a empty one.\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);