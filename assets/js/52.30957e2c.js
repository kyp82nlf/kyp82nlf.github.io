(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{431:function(e,t,n){"use strict";n.r(t);var a=n(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"node-signature"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-signature"}},[e._v("#")]),e._v(" Node Signature")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The system saves the public and private keys of the account in a keystore encrypted file, ensuring the security of the account private key.")]),e._v(" "),n("p",[e._v("In the case that the account keystore needs to be uploaded to the cloud server, the system provides another set of methods for node signatures:")]),e._v(" "),n("p",[e._v("Use a pair of public and private keys without assets to bind to the node, and the node uses the private key to sign when sending a transaction.")]),e._v(" "),n("p",[e._v("Even after the private key is stolen, the node's own assets will be safe.")]),e._v(" "),n("h2",{attrs:{id:"node-signature-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-signature-process"}},[e._v("#")]),e._v(" Node Signature Process")]),e._v(" "),n("p",[n("img",{attrs:{src:"NodeSignature.assets/Snap87.jpg",alt:"Snap87"}})]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Create an account: The client initiates a transaction to create an account on the chain, and then the user creates a pair of public and private keys locally (stored in a keystore file) on the client, and the public and private keys will be used as the nodekey.")])]),e._v(" "),n("li",[n("p",[e._v('Node registration: On the client side, use the node account to initiate a transaction, sign with the private key of the node account, and execute a "node registration" transaction. After the node registration transaction is successful, complete the binding of the node account and the node key public key;')])]),e._v(" "),n("li",[n("p",[e._v("Import node key to the node server: The user uploads the keystore file of nodekey to the node server.")])]),e._v(" "),n("li",[n("p",[e._v('Physical node network access and node network access transaction: Use the private key of nodekey to start the xnode node process, one is to initiate a physical network access request and the other to initiate a transaction with the node account, and sign with nodekey to initiate a "node access" transaction.')])]),e._v(" "),n("li",[n("p",[e._v("Node election: Nodes are elected regularly. After the election, the node account and bound nodekey will be broadcast to the entire network in the election block.")])]),e._v(" "),n("li",[n("p",[e._v("Node work: After receiving the election block, the node can use the nodekey to sign the block.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);