(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{422:function(t,e,n){"use strict";n.r(e);var a=n(18),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"send-transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#send-transactions"}},[t._v("#")]),t._v(" Send Transactions")]),t._v(" "),n("p",[t._v("Support sending transactions, including transfer, node staking, node registration, node voting, node claiming rewards, etc.")]),t._v(" "),n("p",[t._v("Before sending transactions,make sure that:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("You already have an account on the chain.")])]),t._v(" "),n("li",[n("p",[t._v("Get the identity token via  "),n("code",[t._v("requestToken")]),t._v(".")])])]),t._v(" "),n("h2",{attrs:{id:"transaction-costs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-costs"}},[t._v("#")]),t._v(" Transaction Costs")]),t._v(" "),n("p",[t._v("Caution：")]),t._v(" "),n("blockquote",[n("p",[t._v("In RPC, account balance, transaction deposit,etc.The unit is uTOP, 1TOP=1*10^6 uTOP.")])]),t._v(" "),n("p",[t._v("Sending transactions on TOP Network chain consumes certain gas resources. If the account balance is greater than or equal to 100*10^6 uTOP, the system will give the account 25,000 Tgas for free.")]),t._v(" "),n("p",[t._v("Each transaction requires at least 100,000 uTOP as the transaction deposit, otherwise the transaction will be discarded.")]),t._v(" "),n("p",[t._v("If the account‘s gas resources are sufficient, the transaction deposit will be returned to your account immediately after the transaction is successful. If the account's gas resources are insufficient to pay the transaction costs, a fee shall be deducted from the transaction deposit to exchange gas resources to pay the transaction costs, and the deducted TOP tokens will be destroyed.")]),t._v(" "),n("p",[t._v("If the transaction deposit is not enough to exchange gas resources, the transaction will eventually fail.")]),t._v(" "),n("p",[t._v("For transactions that running the contracts deployed on the Root-beacon (registration node-related, proposal related, starting xnode), in addition to the minimum transaction deposit of 100,000 uTOP tokens, the system will automatically deduct the 100*10^6 uTOP tokens as transaction fee from the sender's account and then destroy it.")]),t._v(" "),n("p",[t._v("The resources consumed by transaction, please refer to "),n("RouterLink",{attrs:{to:"/en/AboutTOPNetwork/Protocol/ResourceModel.html"}},[t._v("Resource Model")]),t._v(".")],1),t._v(" "),n("p",[t._v("More about Root-Beacon contract, please refer to "),n("RouterLink",{attrs:{to:"/en/SmartContract/SmartContract.html"}},[t._v("Smart Contract")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"rpc-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpc-instructions"}},[t._v("#")]),t._v(" RPC Instructions")]),t._v(" "),n("p",[n("strong",[t._v("Request Method")])]),t._v(" "),n("p",[n("code",[t._v("sendTransaction")])]),t._v(" "),n("p",[n("strong",[t._v("Request Parameters")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Parameter Name")]),t._v(" "),n("th"),t._v(" "),n("th",[t._v("Required")]),t._v(" "),n("th",[t._v("Parameter Name")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("authorization")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("Transaction body signature.")])]),t._v(" "),n("tr",[n("td",[t._v("challenge_proof")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The reserve parameter, default to empty string.")])]),t._v(" "),n("tr",[n("td",[t._v("ext")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The reserve parameter, default to empty string.")])]),t._v(" "),n("tr",[n("td",[t._v("from_ledger_id")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v('The reserve parameter, default to "0".')])]),t._v(" "),n("tr",[n("td",[t._v("last_tx_hash")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v('The hash of the previous transaction, used for transaction sorting and removing duplicates. The "0x" hash.')])]),t._v(" "),n("tr",[n("td",[t._v("last_tx_nonce")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint64")]),t._v(" "),n("td",[t._v("The nonce of the previous transaction, used for transaction sorting and removing duplicates.")])]),t._v(" "),n("tr",[n("td",[t._v("note")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("Transaction note.")])]),t._v(" "),n("tr",[n("td",[t._v("to_ledger_id")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v('The reserve parameter, default to "0".')])]),t._v(" "),n("tr",[n("td",[t._v("receiver_action")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("Transaction receiver action.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_authorization")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("Action signature, JSON structure. When the transaction is application contract deployment, the public key of the contract is displayed here. The public key is used to verify whether the contract account matches the account of the transaction sender.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_ext")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The reserve parameter, default to empty string.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_hash")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint32")]),t._v(" "),n("td",[t._v('xxhash32 of the action. Default to "0". Temporary unused.')])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_name")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The name of contract function."),n("br"),t._v("The system smart contract function, please refer to [System Smart Contract API](/en/Smart Contract/SystemContractAPI.md).")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_param")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The transaction receiver action. The serialization of different action perform content please refer to [Action Param Serialization](docs- en/Interface/RPC-API/sendTransaction/action-param-serialization.md).")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_size")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v("Action size.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_type")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v("Different transaction type correspond to different receiver action type, please refer to [TX Type and Action Type](docs- en/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)."),n("br"),t._v("xaction_type_asset_out                = 0,  "),n("br"),t._v("xaction_type_create_contract_account    = 3,    "),n("br"),t._v("xaction_type_run_contract              = 5,    "),n("br"),t._v("xaction_type_asset_in                = 6,    "),n("br"),t._v("xaction_type_pledge_token_vote          = 21,   "),n("br"),t._v("xaction_type_redeem_token_vote          = 22,"),n("br"),t._v("xaction_type_pledge_token               = 23,   "),n("br"),t._v("xaction_type_redeem_token               = 24,")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("tx_receiver_account_addr")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("Transaction receiver account address.")])]),t._v(" "),n("tr",[n("td",[t._v("send_timestamp")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint64")]),t._v(" "),n("td",[t._v("Transaction send timestamp.")])]),t._v(" "),n("tr",[n("td",[t._v("sender_action")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Object")]),t._v(" "),n("td",[t._v("Transaction sender action.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_authorization")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("Action signature, JSON structure.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_ext")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The reserve parameter, default to empty string.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_hash")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint32")]),t._v(" "),n("td",[t._v('xxhash32 of the action.Default to "0". Temporary unused.')])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_name")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The reserve parameter, default to empty string.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_param")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The transaction sender action. The serialization of different action perform content please refer to [Action Param Serialization](docs- en/Interface/RPC-API/sendTransaction/action-param-serialization.md).")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_size")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v("Action size.")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("action_type")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v("Different transaction types correspond to different sender action types, please refer to [TX Type and Action Type](docs- en/Interface/RPC-API/sendTransaction/tx-type-and-action-type.md)."),n("br"),t._v("xaction_type_asset_out                  = 0,    "),n("br"),t._v("xaction_type_source_null =1,")])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[t._v("tx_sender_account_addr")]),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("Transaction sender account address.")])]),t._v(" "),n("tr",[n("td",[t._v("tx_deposit")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint32")]),t._v(" "),n("td",[t._v("Transaction deposit. The unit is uTOP.")])]),t._v(" "),n("tr",[n("td",[t._v("tx_expire_duration")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v("If the transaction expires, it will be discarded with the default time of 100s.")])]),t._v(" "),n("tr",[n("td",[t._v("tx_hash")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The hexadecimal of the transaction hash.")])]),t._v(" "),n("tr",[n("td",[t._v("tx_len")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v("Transaction size.")])]),t._v(" "),n("tr",[n("td",[t._v("tx_random_nonce")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint32")]),t._v(" "),n("td",[t._v('Random nonce. Default to "0".Temporary unused.')])]),t._v(" "),n("tr",[n("td",[t._v("tx_structure_version")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v('Transaction structure version. Default to "0".Temporary unused.')])]),t._v(" "),n("tr",[n("td",[t._v("tx_type")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Yes")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v("Transaction type."),n("br"),t._v("Different transaction types have different action param and action type in action."),n("br"),t._v("xtransaction_type_create_contract_account      = 1, "),n("br"),t._v("xtransaction_type_run_contract                           = 3,"),n("br"),t._v("xtransaction_type_transfer                                   = 4,"),n("br"),t._v("xtransaction_type_vote                                             = 20, "),n("br"),t._v("xtransaction_type_abolish_vote                               = 21,"),n("br"),t._v("xtransaction_type_pledge_token_gas                      = 22,  "),n("br"),t._v("xtransaction_type_redeem_token_gas                    = 23,   "),n("br"),t._v("xtransaction_type_pledge_token_vote                     = 27,"),n("br"),t._v("xtransaction_type_redeem_token_vote                    = 28,")])])])]),t._v(" "),n("p",[n("strong",[t._v("Response Parameters")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Parameter Name")]),t._v(" "),n("th",[t._v("Parameter Type")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("tx_hash")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("The transaction hash which can be used to retrieve the transaction consensus status.")])]),t._v(" "),n("tr",[n("td",[t._v("tx_size")]),t._v(" "),n("td",[t._v("Uint16")]),t._v(" "),n("td",[t._v("The gas consumed by transaction consensus is related to the transaction size.")])])])]),t._v(" "),n("p",[n("strong",[t._v("Request Sample")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('account_address=T-0-LZzAeUA93vv7WsXswb85xC42s2Jonka6oN&\nbody={\n"params":{\n      "authorization" : "0x012d20ecbb8f66a3a4c64376d0900bda0540f97d1cb7ac47ecd5b54dcc07b2023c03d64a4d1b7b03322740e61fa334728416b88498ba6eaee0f53845eb725af993",\n      "challenge_proof" : "",\n      "ext" : "",\n      "from_ledger_id" : 0,\n      "last_tx_hash" : "0xf6e9be5d70632cf5",\n      "last_tx_nonce" : 0,\n      "note" : "",\n      "receiver_action" : {\n         "action_authorization" : "",\n         "action_ext" : "",\n         "action_hash" : 0,\n         "action_name" : "",\n         "action_param" : "0x26000000542d302d4c4e6935335562373236486350585a6643347a367a4c67546f356b7336477a545570",\n         "action_size" : 0,\n         "action_type" : 2,\n         "tx_receiver_account_addr" : "T-0-LNi53Ub726HcPXZfC4z6zLgTo5ks6GzTUp"\n      },\n      "send_timestamp" : 1600303446,\n      "sender_action" : {\n         "action_authorization" : "",\n         "action_ext" : "",\n         "action_hash" : 0,\n         "action_name" : "",\n         "action_param" : "",\n         "action_size" : 0,\n         "action_type" : 1,\n         "tx_sender_account_addr" : "T-0-LNi53Ub726HcPXZfC4z6zLgTo5ks6GzTUp"\n      },\n      "to_ledger_id" : 0,\n      "tx_deposit" : 100000,\n      "tx_expire_duration" : 100,\n      "tx_hash" : "0x56601b2c5b5da1ed850ca2b545403837b9b34f88c3fbe0765577c54fc69296f3",\n      "tx_len" : 0,\n      "tx_random_nonce" : 0,\n      "tx_structure_version" : 0,\n      "tx_type" : 0\n   }\n}&\nmethod=sendTransaction&\nsequence_id=2&\nidentity_token=&\nversion=1.0\n')])])]),n("p",[n("strong",[t._v("Response Schema")])]),t._v(" "),n("ul",[n("li",[t._v("Successful")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "2",\n\t"tx_hash": "0x34ca8f317107ce6b01c933b017f28e6cf0f84f2e31627a8349f167c1aa9ade10",\n\t"tx_size": 306\n}\nPlease use command \'get transaction\' to query transaction status later on!!!\n')])])]),n("p",[t._v("Use"),n("code",[t._v("get transaction")]),t._v(" to query the transaction details and final consensus status.")]),t._v(" "),n("ul",[n("li",[t._v("Failed")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n\t"errmsg": "ok",\n\t"errno": 0,\n\t"sequence_id": "3",\n\t"tx_hash": "0xc73f6295bc5b6be1ace273d59504f4c97d1b01cd2d3301c47cf042e28795e35b",\n\t"tx_size": 306\n}\nPlease use command \'get transaction\' to query transaction status later on!!!\n')])])]),n("p",[t._v("In case of a transaction is failed, the transaction consensus final status will not be returned directly, and the transaction details need to be queried by "),n("code",[t._v("get Transaction")]),t._v(" .")])])}),[],!1,null,null,null);e.default=_.exports}}]);