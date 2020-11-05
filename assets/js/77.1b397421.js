(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{458:function(e,t,n){"use strict";n.r(t);var o=n(18),_=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"retrieve-node-network-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-node-network-information"}},[e._v("#")]),e._v(" Retrieve Node Network Information")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("Caution:")]),e._v(" "),n("blockquote",[n("p",[e._v("Use xnode(net) command to query, please use TOPIO Console mode or attach mode. Specific please see "),n("a",{attrs:{href:"/en/Tools/TOPIO/StartTOPIO"}},[e._v("start TOPIO")]),e._v(" .")])]),e._v(" "),n("p",[e._v("The net command provides network-layer query capabilities, including nodes joining physical network results, xnetwork IDs,and the maximum number of connection peers.")]),e._v(" "),n("h2",{attrs:{id:"net-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-commands"}},[e._v("#")]),e._v(" net Commands")]),e._v(" "),n("p",[e._v("Execute "),n("code",[e._v("xnode net -h")]),e._v(" or "),n("code",[e._v("xnode net --help")]),e._v(" view net commands.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$> xnode net\nNAME:\n    net\n\nCOMMANDS:\n    help                         Show a list of commands or help for one command.\n    Joined                       Get the result of whether the node has joined the network.\n    xnetworkID                   Get xnetwork ID which the node joined in.\n    maxpeer                      Get the count of max connect peers.\n    peercount                    Get the count of connecting peers.\n    netID                        Print the node's network IDs.\n    osInfo                       Print OS information.\n    accountAddr                  Print the node account address\n    nodeP2PAddr                  Print the nodes's P2P ID with IP:port.\n")])])]),n("h2",{attrs:{id:"command-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-instructions"}},[e._v("#")]),e._v(" Command Instructions")]),e._v(" "),n("h3",{attrs:{id:"net-joined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-joined"}},[e._v("#")]),e._v(" Net Joined")]),e._v(" "),n("p",[e._v("Query whether the node is joined to the physical network.")]),e._v(" "),n("p",[e._v("The node registers and starts xnode access through the node, then enters the node candidate pool and waits for the election.")]),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[n("code",[e._v("xnode net joined")])]),e._v(" "),n("p",[n("strong",[e._v("Request Parameters")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Options")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Response Parameters")])]),e._v(" "),n("p",[e._v('The result of the node joining to the physical network:"true" or "false".')]),e._v(" "),n("p",[n("strong",[e._v("Request Sample")])]),e._v(" "),n("p",[n("code",[e._v("xnode net joined")])]),e._v(" "),n("p",[n("strong",[e._v("Response Schema")])]),e._v(" "),n("ul",[n("li",[e._v("Successful")])]),e._v(" "),n("p",[n("code",[e._v("true")]),e._v(" or "),n("code",[e._v("false")])]),e._v(" "),n("ul",[n("li",[e._v("Failed")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("h3",{attrs:{id:"the-xnetworkid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-xnetworkid"}},[e._v("#")]),e._v(" the xnetworkID")]),e._v(" "),n("p",[e._v("Query whether the node joins the mainchain network or the business chain network.")]),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[n("code",[e._v("xnode net xnetworkID")])]),e._v(" "),n("p",[n("strong",[e._v("Request Parameters")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Options")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Response Parameters")])]),e._v(" "),n("p",[e._v('Mainchain network ID default to "0," business chain network ID default to "1."')]),e._v(" "),n("p",[n("strong",[e._v("Request Sample")])]),e._v(" "),n("p",[n("code",[e._v("xnode net xnetworkID")])]),e._v(" "),n("p",[n("strong",[e._v("Response Schema")])]),e._v(" "),n("ul",[n("li",[e._v("Successful")])]),e._v(" "),n("p",[e._v('"0" or "1"。')]),e._v(" "),n("ul",[n("li",[e._v("Failed")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("h3",{attrs:{id:"maximun-connected-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maximun-connected-peers"}},[e._v("#")]),e._v(" Maximun Connected Peers")]),e._v(" "),n("hr"),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[n("code",[e._v("xnode net peercount")])]),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Options")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Response Parameters")])]),e._v(" "),n("p",[e._v("The maximum number of connectd peers is now 256.")]),e._v(" "),n("p",[n("strong",[e._v("Request Sample")])]),e._v(" "),n("p",[n("code",[e._v("xnode net peercount")])]),e._v(" "),n("p",[n("strong",[e._v("Response Schema")])]),e._v(" "),n("ul",[n("li",[e._v("Successful")])]),e._v(" "),n("p",[n("code",[e._v("256")])]),e._v(" "),n("ul",[n("li",[e._v("Failed")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("h3",{attrs:{id:"connected-peers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connected-peers"}},[e._v("#")]),e._v(" Connected Peers")]),e._v(" "),n("p",[e._v("The number of connected peers is directly related to the number of nodes in the network.")]),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[n("code",[e._v("xnode net peercount")])]),e._v(" "),n("p",[n("strong",[e._v("Request Parameters")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Options")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Response Parameters")])]),e._v(" "),n("p",[e._v("Number of connected peers.")]),e._v(" "),n("p",[n("strong",[e._v("Request Sample")])]),e._v(" "),n("p",[n("code",[e._v("xnode net peercount")])]),e._v(" "),n("p",[n("strong",[e._v("Response Schema")])]),e._v(" "),n("ul",[n("li",[e._v("Successful")])]),e._v(" "),n("p",[n("code",[e._v("66")])]),e._v(" "),n("ul",[n("li",[e._v("Failed")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("h3",{attrs:{id:"network-id"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#network-id"}},[e._v("#")]),e._v(" Network ID")]),e._v(" "),n("p",[e._v("The network ID where the node has been elected.")]),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[n("code",[e._v("xnode net netID")])]),e._v(" "),n("p",[n("strong",[e._v("Request Parameters")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Options")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Response Parameters")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Network ID")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("xnetwork_id[0]")]),e._v(" "),n("td",[e._v("The node has not been elected to the network.")])]),e._v(" "),n("tr",[n("td",[e._v("xnetwork_id[0] zone_id[1]、cluster_id[0]、group_id[0]")]),e._v(" "),n("td",[e._v("Root-Beacon Network")])]),e._v(" "),n("tr",[n("td",[e._v("xnetwork_id[0] zone_id[2]、cluster_id[0]、group_id[0]")]),e._v(" "),n("td",[e._v("Sub-Beacon Network")])]),e._v(" "),n("tr",[n("td",[e._v("xnetwork_id[0] zone_id[14]、cluster_id[1]、group_id[1]")]),e._v(" "),n("td",[e._v("Archive Network")])]),e._v(" "),n("tr",[n("td",[e._v("xnetwork_id[0] zone_id[15]、cluster_id[1]、group_id[1]")]),e._v(" "),n("td",[e._v("Edge Network")])]),e._v(" "),n("tr",[n("td",[e._v("xnetwork_id[0] zone_id[0]、cluster_id[1]、group_id[n],n∈[1,63]")]),e._v(" "),n("td",[e._v("Audit  Network")])]),e._v(" "),n("tr",[n("td",[e._v("xnetwork_id[0] zone_id[0]、cluster_id[1]、group_id[m],m∈[64,126]")]),e._v(" "),n("td",[e._v("Validate Network")])])])]),e._v(" "),n("p",[n("strong",[e._v("Request Sample")])]),e._v(" "),n("p",[n("code",[e._v("xnode net netID")])]),e._v(" "),n("p",[n("strong",[e._v("Response Schema")])]),e._v(" "),n("ul",[n("li",[e._v("Successful")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("xnetwork_id[0] zone_id[14] cluster_id[1] group_id[1]   Archive Network\nxnetwork_id[0] zone_id[0] cluster_id[1] group_id[63]   Audit Network\nxnetwork_id[0] zone_id[0]  cluster_id[1] group_id[64]   Validate Network\n")])])]),n("p",[e._v("The returned results indicate that the different roles of this node are elected to Archive Network, Audit Network, and Validate Network.")]),e._v(" "),n("ul",[n("li",[e._v("Failed")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("h3",{attrs:{id:"os-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#os-information"}},[e._v("#")]),e._v(" OS information")]),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[n("code",[e._v("xnode net osInfo")])]),e._v(" "),n("p",[n("strong",[e._v("Request Parameters")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Options")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Response Parameters")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Parameter Name")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("OS name")]),e._v(" "),n("td",[e._v("OS name.")])]),e._v(" "),n("tr",[n("td",[e._v("Host Name")]),e._v(" "),n("td",[e._v("Host name.")])]),e._v(" "),n("tr",[n("td",[e._v("Release(Kernel)Version")]),e._v(" "),n("td",[e._v("Kernel Version.")])]),e._v(" "),n("tr",[n("td",[e._v("Kernel Build Timestamp")]),e._v(" "),n("td",[e._v("Kernel Build Timestamp")])]),e._v(" "),n("tr",[n("td",[e._v("Machine Arch")]),e._v(" "),n("td",[e._v("Machine Arch")])])])]),e._v(" "),n("p",[n("strong",[e._v("Request Sample")])]),e._v(" "),n("p",[n("code",[e._v("xnode net osInfo")])]),e._v(" "),n("p",[n("strong",[e._v("Response Schema")])]),e._v(" "),n("ul",[n("li",[e._v("Successful")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Os Name:Linux\nHost Name:Jiao\nRelease(Kernel) Version:3.10.0-1127.el7.x86_64\nKernel Build Timestamp:#1 SMP Tue Mar 31 23:36:51 UTC 2020\nMachine Arch:x86_64\n")])])]),n("ul",[n("li",[e._v("Failed")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("h3",{attrs:{id:"node-account-address"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-account-address"}},[e._v("#")]),e._v(" Node Account Address")]),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[n("code",[e._v("xnode net accountAddr")])]),e._v(" "),n("p",[n("strong",[e._v("Request Parameters")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Options")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Response Schema")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Parameter Name")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("accountaddr")]),e._v(" "),n("td",[e._v("The node account address.")])])])]),e._v(" "),n("p",[n("strong",[e._v("Request Sample")])]),e._v(" "),n("p",[n("code",[e._v("xnode net accountAddr")])]),e._v(" "),n("p",[n("strong",[e._v("Response Schema")])]),e._v(" "),n("ul",[n("li",[e._v("Successful")])]),e._v(" "),n("p",[n("code",[e._v("T-0-LeXNqW7mCCoj23LEsxEmNcWKs8m6kJH446")])]),e._v(" "),n("ul",[n("li",[e._v("Failed")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("h3",{attrs:{id:"node-p2p-ip-port"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-p2p-ip-port"}},[e._v("#")]),e._v(" Node P2P_IP:Port")]),e._v(" "),n("p",[n("strong",[e._v("Request")])]),e._v(" "),n("p",[n("code",[e._v("xnode net nodeP2PAddr")])]),e._v(" "),n("p",[n("strong",[e._v("Request Parameters")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Options")])]),e._v(" "),n("p",[e._v("None.")]),e._v(" "),n("p",[n("strong",[e._v("Response Parameters")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Parameter Name")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("tnode")]),e._v(" "),n("td",[e._v("Node P2P IP:port.")])])])]),e._v(" "),n("p",[n("strong",[e._v("Request Sample")])]),e._v(" "),n("p",[n("code",[e._v("xnode net nodeP2PAddr")])]),e._v(" "),n("p",[e._v("**Response **")]),e._v(" "),n("ul",[n("li",[e._v("Scuccessful")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("tnode://ffffff17236471b087a873b8daf14c840000000090e2bd5f54283eccc94e8d3bf0a81bc0@127.0.0.1:9002\n")])])]),n("ul",[n("li",[e._v("Failed")])]),e._v(" "),n("p",[e._v("None.")])])}),[],!1,null,null,null);t.default=_.exports}}]);