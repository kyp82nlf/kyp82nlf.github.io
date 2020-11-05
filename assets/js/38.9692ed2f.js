(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{420:function(t,e,a){"use strict";a.r(e);var r=a(18),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rpc-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc-api"}},[t._v("#")]),t._v(" RPC API")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("RPC API is provided by TOP Network to the community to interact with the chain, including sending transactions and retrieving information on the chain: transaction information, node information, mainchain information, etc.")]),t._v(" "),a("h2",{attrs:{id:"connect-to-rpc-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-rpc-api"}},[t._v("#")]),t._v(" Connect to RPC API")]),t._v(" "),a("p",[t._v("Caution:")]),t._v(" "),a("blockquote",[a("p",[t._v("It is suggested that you connect to the creation edge node of TOP Network. If you use your own edge node, your edge node may be rotated out during node election due to the rotation mechanism of TOP Network, which will make your edge node unavailable and result in the failure of transaction sending.")])]),t._v(" "),a("p",[t._v("You can use standard HTTP requests to connect to an Edge node to use RPC API, please use the Edge node official domain name:")]),t._v(" "),a("h2",{attrs:{id:"request-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-instructions"}},[t._v("#")]),t._v(" Request Instructions")]),t._v(" "),a("p",[t._v("Sample:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('auto account_info_response = client.request("POST", "/", transaction_info_request);\n')])])]),a("p",[a("strong",[t._v("Request Approach")]),t._v(": POST.")]),t._v(" "),a("p",[a("strong",[t._v("Request Path")]),t._v(": /, root path.")]),t._v(" "),a("p",[a("strong",[t._v("Request Body")]),t._v(' : "transaction_info_request" is the request body,  please refer to '),a("a",{attrs:{href:"#Methods"}},[t._v("Methods")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request Body")]),t._v(" "),a("h4",{attrs:{id:"public-request-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-request-parameters"}},[t._v("#")]),t._v(" Public Request Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter Name")]),t._v(" "),a("th",[t._v("Required")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Parameter Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("target_account_addr")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Extension field, not currently in use, you can fill in any account address.")])]),t._v(" "),a("tr",[a("td",[t._v("body")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("The body defines business parameters, the JSON format needs to be serialized into String format.")])]),t._v(" "),a("tr",[a("td",[t._v("method")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Request method.")])]),t._v(" "),a("tr",[a("td",[t._v("sequence_id")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Client sequence ID, incremental.")])]),t._v(" "),a("tr",[a("td",[t._v("identity_token")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Please get the identity token before interacting with the chain."),a("br"),t._v("The identity token is different for each account."),a("br"),t._v("This field is not  validated.")])]),t._v(" "),a("tr",[a("td",[t._v("version")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("1.0")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("RPC API version.")])])])]),t._v(" "),a("h3",{attrs:{id:"request-sample"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-sample"}},[t._v("#")]),t._v(" Request Sample")]),t._v(" "),a("p",[t._v("Take getting account transaction information as an example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('target_account_addr=T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn&\nbody={\n"params" : {\n    "account_addr" : "T-0-LPiPwUsQK8A7qeLaByLcfk57khRTM9XTpn",\n    "tx_hash" : "0x8aa1e7082af07bf22840a1526745c484a5a20115d8e92cff2d9ed413128ac2b4"\n   }\n}&\nmethod=getTransaction&\nsequence_id=22&\nidentity_token=&\nversion=1.0\n')])])]),a("h4",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("requestToken")]),t._v(" "),a("td",[t._v("Please get the identity token before interacting with the chain."),a("br"),t._v("The identity token is different for each account.")])]),t._v(" "),a("tr",[a("td",[t._v("sendTransaction")]),t._v(" "),a("td",[t._v("Transfer, staking, node registration, voting,claiming rewards, etc.")])]),t._v(" "),a("tr",[a("td",[t._v("getAccount")]),t._v(" "),a("td",[t._v("Get account information on the chain.")])]),t._v(" "),a("tr",[a("td",[t._v("getTransaction")]),t._v(" "),a("td",[t._v("Get transaction details.")])]),t._v(" "),a("tr",[a("td",[t._v("getBlock")]),t._v(" "),a("td",[t._v("Get block by account address.")])]),t._v(" "),a("tr",[a("td",[t._v("getStandbys")]),t._v(" "),a("td",[t._v("Get candidate nodes.")])]),t._v(" "),a("tr",[a("td",[t._v("getCGP")]),t._v(" "),a("td",[t._v("Get on-chain governance parameters.")])]),t._v(" "),a("tr",[a("td",[t._v("getChainInfo")]),t._v(" "),a("td",[t._v("Get the mainchain information.")])]),t._v(" "),a("tr",[a("td",[t._v("queryNodeInfo")]),t._v(" "),a("td",[t._v("Get node information by account address.")])]),t._v(" "),a("tr",[a("td",[t._v("queryNodeReward")]),t._v(" "),a("td",[t._v("Get node reward.")])]),t._v(" "),a("tr",[a("td",[t._v("listVoteUsed")]),t._v(" "),a("td",[t._v("Get the distribution of node used votes.")])]),t._v(" "),a("tr",[a("td",[t._v("queryVoterDividend")]),t._v(" "),a("td",[t._v("Get voter dividend.")])]),t._v(" "),a("tr",[a("td",[t._v("queryProposal")]),t._v(" "),a("td",[t._v("Get proposal details.")])])])]),t._v(" "),a("h2",{attrs:{id:"error-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-code"}},[t._v("#")]),t._v(" Error Code")]),t._v(" "),a("p",[t._v("RPC Standard Errors")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Error Code")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Error Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Return Message")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-32700")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Parse error.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("body json parse error json parse errorrpc param error")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-32602")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Miss params or invalid params.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("miss param params account_addr or account_addr is not valid"),a("br"),t._v("miss param params amount or amount is not valid"),a("br"),t._v("miss param params last_hash or last_hash is not valid"),a("br"),t._v("miss param params nonce or nonce is not valid"),a("br"),t._v("miss param params data or data is not valid"),a("br"),t._v("miss param params tx_deposit or tx_deposit is not valid"),a("br"),t._v("miss param params to_ledger_id or to_ledger_id is not valid"),a("br"),t._v("miss param params from_ledger_id or from_ledger_id is not valid"),a("br"),t._v("miss param params tx_type or tx_type is not valid"),a("br"),t._v("miss param params tx_len or tx_len is not valid"),a("br"),t._v("miss param params send_timestamp or send_timestamp is not valid"),a("br"),t._v("miss param params tx_random_nonce or tx_random_nonce is not valid"),a("br"),t._v("miss param params last_tx_nonce or last_tx_nonce is not valid"),a("br"),t._v("miss param params challenge_proof or challenge_proof is not valid"),a("br"),t._v("miss param sender_action"),a("br"),t._v("miss param receiver_action"),a("br"),t._v("miss param sender_action action_hash"),a("br"),t._v("miss param sender_action action_type"),a("br"),t._v("miss param sender_action action_size"),a("br"),t._v("miss param sender_action account_addr"),a("br"),t._v("miss param sender_action action_name"),a("br"),t._v("miss param sender_action action_param"),a("br"),t._v("miss param sender_action action_authorization"),a("br"),t._v("miss param receiver_action action_hash"),a("br"),t._v("miss param receiver_action action_type"),a("br"),t._v("miss param receiver_action action_size"),a("br"),t._v("miss param receiver_action account_addr"),a("br"),t._v("miss param receiver_action action_name"),a("br"),t._v("miss param receiver_action action_param"),a("br"),t._v("miss param receiver_action action_authorization"),a("br"),t._v("miss param method or method is not valid"),a("br"),t._v("miss param version or version is not valid "),a("br"),t._v("miss param sequence_id or version is not valid"),a("br"),t._v("msg list is empty")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Miss method parameter(s) or invalid method parameter(s) (parameter type error).")])])])]),t._v(" "),a("p",[t._v("Custom Errors")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Error Code")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Error Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Return Message")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Transaction delivery status.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("OK")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("When the transaction is delivered successfully, it enters into consensus, which does not represent the final consensus status of the transaction. The final status of the transaction consensus needs to be inquired through the transaction hash.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Business related parameter error.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("version must be 1.0 now")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("RPC API current version is 1.0.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("transaction hash error")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("transaction sign error")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("str+ length is not correct")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String length error.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Unknown error")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("unknown exception")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Shard execution error.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("account not found on chain")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("account address or transaction hash error/does not exist")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("This transaction was not found on the chain (the transaction is neither in the transaction pool nor in the block, possibly the account address or hash error/does not exist).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("account address does not exist or block height does not exist"),a("br")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Block does not exist (possibly account address or block height does not exist).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("unknown msg type"),a("br")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Messages other than transactions and queries were sent.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("request time out")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);