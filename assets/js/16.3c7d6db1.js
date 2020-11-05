(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{400:function(e,t,s){"use strict";s.r(t);var a=s(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"consensus-protocol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consensus-protocol"}},[e._v("#")]),e._v(" Consensus Protocol")]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("It is difficult to achieve data consistency in a distributed network of nodes.")]),e._v(" "),s("p",[e._v('A node must be selected through a certain mechanism, and this node decides which transaction needs to be processed at this time. It broadcasts the execution result of this transaction to other nodes for verification or storage. Therefore, the consistency of node data in the entire network can be achieved . We call this node "leader", and the mechanism for selecting the leader and reaching data agreement is called "consensus mechanism".')]),e._v(" "),s("p",[e._v("The leader is elected through the VRF-FTS. The chance of being selected as a hpPBFT leader according to the comprehensive stake of the node, more about comprehensive, please refer to "),s("RouterLink",{attrs:{to:"/en/Node/NodeElection.html"}},[e._v("Node Elections")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"three-layer-consensus-network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#three-layer-consensus-network"}},[e._v("#")]),e._v(" Three Layer Consensus Network")]),e._v(" "),s("p",[s("img",{attrs:{src:"ConsensusProtocol.assets/image-20200429115213180-1600998306679.jpg",alt:"image-20200429115213180"}})]),e._v(" "),s("p",[e._v("The TOP Network consensus network is divided into three layers:\nThe Edge Network: All transactions will be sent to edge network before reaching the audit network.")]),e._v(" "),s("p",[e._v("The Audit Network: Consists of audit nodes randomly partitioned into clusters, and handles most of the bandwidth heavy operations such as cross-shard communication, and participate in transaction validation.")]),e._v(" "),s("p",[e._v("The Validate Network: Consists of shard made up of validator nodes. This is where the transactions validation takes place. Within each shard, validator nodes validate and confirm transactions using a parallel hpPBFT algorithm.")]),e._v(" "),s("p",[e._v("A tiered network is used for multiple reasons. First, splitting duties among multiple types of nodes helps keep node requirements low. The Audit Network handles most of the bandwidth heavy operations such as cross-shard communication, which allows validator nodes to have relatively low requirements. In addition, the Edge Network helps protect the Audit and Validate Network from spam attacks, as clients can only send transactions directly to edge Nodes.")]),e._v(" "),s("h2",{attrs:{id:"consensus-algorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consensus-algorithm"}},[e._v("#")]),e._v(" Consensus Algorithm")]),e._v(" "),s("h3",{attrs:{id:"highly-parallel-pbft"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#highly-parallel-pbft"}},[e._v("#")]),e._v(" Highly-Parallel pBFT")]),e._v(" "),s("p",[e._v("TOP Network’s pBFT inspired algorithm, dubbed hpPBFT, adopts a three-phase commit stratagem which permits O(n) communication complexity with O(n) view-change complexity. The algorithm uses VRF time-based view changes, but adds additional security through a secondary audit network, and increased scalability through parallelization.")]),e._v(" "),s("h3",{attrs:{id:"secondary-audit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secondary-audit"}},[e._v("#")]),e._v(" Secondary Audit")]),e._v(" "),s("p",[e._v("TOP Network’s hpPBFT avoids this issue by making a change to the protocol which lowers the view-change complexity to O(n), while increasing security. The view-change process is simplified by using a 3-phase commit paradigm instead of the usual 2-phase commit. While inserting an extra phase adds a small amount of latency, it is well worth it to achieve linear leader replacement complexity.")]),e._v(" "),s("p",[e._v("Security of the protocol is increased by introducing an audit committee and leader from the audit network. During each view, the audit committee performs their owns checks along with the original pBFT group. As a result, consensus does not rely too heavily on the original pBFT leader. Even if a shard is compromised or the leader is malicious, the audit network will prevent any invalid state transitions.")]),e._v(" "),s("p",[s("img",{attrs:{src:"ConsensusProtocol.assets/image-20200430134830691.png",alt:"image-20200430134830691"}})]),e._v(" "),s("h3",{attrs:{id:"completely-parallel-consensus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#completely-parallel-consensus"}},[e._v("#")]),e._v(" Completely Parallel Consensus")]),e._v(" "),s("p",[e._v("TOP applies several techniques to produce a high degree of parallelization. Besides the obvious parallel nature of sharding in general, TOP implements several other forms of parallelization.")]),e._v(" "),s("h4",{attrs:{id:"node-virtualization-over-multiple-cpu-cores"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-virtualization-over-multiple-cpu-cores"}},[e._v("#")]),e._v(" Node Virtualization Over Multiple CPU Cores")]),e._v(" "),s("p",[e._v("In our design, each node can take on multiple roles simultaneously. For instance, an Advance node can perform the duties of a Validator node concurrently. The necessary code for each type of node is assigned to run on separate CPU cores. This expands the total useful work a node can do, and essentially increases node count, thus increases overall scalability. It also helps to make shards more secure, as Advance nodes which have higher staking requirements can act as Validators, making it harder for attackers to gain the majority of stake within a shard. To be eligible for this functionality, a node needs to meet the minimum deposit and voting requirements set for Advance nodes.")]),e._v(" "),s("h4",{attrs:{id:"parallel-subset-committee-consensus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parallel-subset-committee-consensus"}},[e._v("#")]),e._v(" Parallel Subset Committee Consensus")]),e._v(" "),s("p",[e._v("As with all sharding designs, each shard can perform transaction validation in parallel with other shards. However, TOP goes one step further and allows for further parallelization within a shard. For each transaction sent from each account, a subset of nodes within the destination shard is randomly selected via VRF-FTS algorithm to form a consensus committee. If multiple transactions from accounts within the same account subspace are sent at the same time, multiple sub-committees within the associated shard will be selected simultaneously. In some cases, the same Validator node will be selected to participate in multiple sub-committees at the same time. This is accomplished through multi-threading techniques.\nEach node can use multiple threads to execute the consensus algorithm in multiple sub-groups at the same time (fig 6). This extra level of parallelization is made possible due to the account chain model discussed in chapter "),s("RouterLink",{attrs:{to:"/en/AboutTOPNetwork/TOPChainInfrastructure/DataStructure.html"}},[e._v("Chain Data Structure")]),e._v(".")],1),e._v(" "),s("p",[s("img",{attrs:{src:"ConsensusProtocol.assets/Snap18.jpg",alt:"Snap18"}})]),e._v(" "),s("h3",{attrs:{id:"pos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pos"}},[e._v("#")]),e._v(" PoS*")]),e._v(" "),s("p",[e._v("pBFT algorithms on their own are not secure in a permissionless setting. Instead, these algorithms need to be paired with some form of Sybil resistance. For blockchains like Bitcoin and Ethereum, PoW is used as the Sybil resistance mechanism. However, PoW is very energy inefficient, and requires nodes to use expensive mining equipment. TOP Network Chain instead uses Proof-of-Stake (PoS) to prevent Sybil attacks.\nPoS dictates that nodes must deposit stake in the form of the native blockchain token in order to join the network. This makes it expensive for malicious entities to gain control of enough nodes to launch attacks.")]),e._v(" "),s("p",[e._v("In most forms of PoS, the only factor determining a node’s eligibility to join the network is a minimum deposit of the blockchain’s native token. TOP expands this concept into what we call Comprehensive Stake—which is represented by the the * in hpPBFT-PoS*. Comprehensive stake takes into account multiple factors to determine how likely a node is to participate in consensus. These are:")]),e._v(" "),s("p",[s("strong",[e._v("Deposit")]),e._v(": The main component of the Comprehensive Stake is the number of TOP tokens deposited. Each types of node on TOP has differing requirements in terms of the minimum deposit to be eligible.\n"),s("strong",[e._v("Credit")]),e._v(": A node’s contribution history is used as a form of credit or reputation. The more jobs successfully completed by a node, the higher its credit, and thus Comprehensive Stake. If a node’s bandwidth or compute power is too low compared to the rest of the nodes, its reputation score will drop.")]),e._v(" "),s("p",[s("strong",[e._v("Voting")]),e._v(": Any token holder can use their tokens to vote for a particular node. The more votes a node receives, the higher its chances of election. TOP allows for proxy voting via smart-contract. Token holders can pledge their tokens to another individual or organization to vote on their behalf.")]),e._v(" "),s("h2",{attrs:{id:"transaction-consensus-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-consensus-process"}},[e._v("#")]),e._v(" Transaction Consensus Process")]),e._v(" "),s("p",[e._v("Single account transactions only need a round of consensus, the transaction sending account and receiving account are the same, the account operation its own properties.")]),e._v(" "),s("p",[e._v("Cross-account transactions need three rounds of consensus:")]),e._v(" "),s("p",[e._v("Taking account A to account B transfer 200 TOP token as an example, the cross-account transaction consensus process is shown in the figure below.")]),e._v(" "),s("p",[s("img",{attrs:{src:"ConsensusProtocol.assets/Snap76-1601019157203.jpg",alt:"Snap76"}})]),e._v(" "),s("p",[e._v("1.The transaction is routed to Network 1 where account A is located.")]),e._v(" "),s("p",[e._v("2.The sender transaction consensus was successful, and the balance of account A decreased by 200 TOP.")]),e._v(" "),s("p",[e._v("Sender transaction process:")]),e._v(" "),s("p",[e._v("The hpPBFT leader verifies the transaction at first. After the verification, the verification results will be broadcast to other nodes in Network 1, and the other nodes will verify the results. When the leader receives the signature or votes from 2/3 nodes in Network 1, the consensus will be successful, and the block will be stored in the database. Meanwhile, the balance of account A is reduced by 200 TOP.")]),e._v(" "),s("p",[e._v("3.Post the transaction and transaction sending receipt to Network 1 where the account A is located.")]),e._v(" "),s("p",[e._v("The transaction receipt consists of the transaction multiple signatures and the Merkle tree path. The function of the transaction receipt is to prove that the transaction consensus is  successful, including sending transaction receipt and receiving transaction receipt.")]),e._v(" "),s("p",[e._v("4.The receiver transaction consensus was successful, and the balance of account B increased by 200 TOP.")]),e._v(" "),s("p",[e._v("Refer to the process of sending transaction consensus to gain a better understanding of how this works.")]),e._v(" "),s("p",[e._v("5.Post the receiving transaction receipt to Network 1 where the account A is located.")]),e._v(" "),s("p",[e._v("6.Each node in Network 1 confirms that the transaction receipt. If the transaction is timed out and has not been received, the transaction sending receipt will be reposted.")]),e._v(" "),s("h2",{attrs:{id:"table-block-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-block-status"}},[e._v("#")]),e._v(" Table Block Status")]),e._v(" "),s("p",[e._v("The transaction will go through three rounds of consensus before it is finally confirmed, and each consensus block will go through the following three states.")]),e._v(" "),s("p",[s("img",{attrs:{src:"ConsensusProtocol.assets/Snap80.jpg",alt:"Snap80"}})]),e._v(" "),s("p",[e._v('After the first consensus, the state of the block will be "HighQC"; after the second consensus, the state of the block will change to the "Lock" state; after the third consensus, the state of the block will change to the final confirmation state "Commit".')]),e._v(" "),s("p",[e._v('The consensus leader will be updated in each round of consensus and when the new leader finds that there are no transactions in the transaction pool, an empty block is created to help the last block to reach the "Commit" status.')])])}),[],!1,null,null,null);t.default=o.exports}}]);