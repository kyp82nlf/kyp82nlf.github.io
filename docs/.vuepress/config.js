// .vuepress/config.js
module.exports = {
    head: require('./head'),
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        title: ' ',
        description: ' '
      },
      '/zh/': {
        lang: 'zh-CN',
        title: ' ',
        description: ' '
      }
    },
    themeConfig: {
      nextLinks: true,
      prevLinks: true,
      // algolia: {
      //   appID: 'VTPVROGVRZ',
      //   apiKey: '6321875e85d147f8ec75b33d8a646137',
      //   indexName: 'TOP_query_suggestions'
      // },
      // ui/ux
      logo: '/images/logo.png',
      locales: {
        '/': {
          label: 'English',
          sidebar: [
            {
              title: 'About TOP Network',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/AboutTOPNetwork/TOPNetworkPlatform', 'TOP Network Platform'],
                {
                  title: 'TOP Network Infrastructure',
                  path: '/AboutTOPNetwork/TOPChainInfrastructure/Overview',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    ['/AboutTOPNetwork/TOPChainInfrastructure/P2PNetworkInnovation(layer-0)', 'P2P Network Innovation(Layer-0)'],
                    // ['/AboutTOPNetwork/TOPChainInfrastructure/FullyShardingMainchain(layer-1)', 'Fully Sharding Mainchain(Layer-1)'],
                    ['/AboutTOPNetwork/TOPChainInfrastructure/ServiceChainandOne-WayStateChannel(layer-2)', 'Service Chainand One-Way State Channel(layer-2)'],
                    ['/AboutTOPNetwork/TOPChainInfrastructure/DataStructure', 'Data Structure'],
                    ['/AboutTOPNetwork/TOPChainInfrastructure/DistributedStorage', 'Distributed Storage'],
                  ],
                },
                {
                  title: 'TOP Network Protocol',
                  path: '/AboutTOPNetwork/Protocol/OverView',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    ['/AboutTOPNetwork/Protocol/TOPNetwokP2PNetwork', 'TOP Network P2P Network Protocol'],
                    ['/AboutTOPNetwork/Protocol/AccountProtocol', 'Account Protocol'],
                    ['/AboutTOPNetwork/Protocol/ResourceModel', 'Resource Model'],
                    ['/AboutTOPNetwork/Protocol/EconomicModel', 'Economic Model'],
                    ['/AboutTOPNetwork/Protocol/TransactionProtocol', 'Transaction Protocol'],
                    ['/AboutTOPNetwork/Protocol/ConsensusProtocol', 'Consensus Protocol'],
                  ],
                },
                ['/AboutTOPNetwork/Security', 'Security'],
                ['/AboutTOPNetwork/Glossary', 'Glossary'],
                ['/AboutTOPNetwork/Download/learningResource', 'Download'],
              ]
            },
            {
              title: 'TOP Network Node',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/Node/Overview', 'Overview'],
                ['/Node/JoiningNetwork', 'Node Access&Exit'],
                ['/Node/NodeSignature', 'Node Signature'],
                ['/Node/NodeElection', 'Node Election'],
                ['/Node/NodeReward', 'Node Reward System'],
                ['/Node/NodePunishment', 'Node Penalty System'],
                ['/Node/NodeVote', 'Vote'],
                ['/Node/VoterDividend', 'Voter Dividend'],
              ]
            },
            {
              title: 'Smart Contract',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/SmartContract/SmartContract', 'Overview'],
                ['/SmartContract/SystemContractAPI', 'Platform Smart Contract API'],
                ['/SmartContract/LuaAPI', 'Application Smart Contract API'],
              ]
            },
            {
              title: 'On-chain Governance',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/On-ChainGovernance/Overview', 'Overview'],
                ['/On-ChainGovernance/On-ChainGovernanceProposal', 'On-chain Governance Process'],
                ['/On-ChainGovernance/On-ChainGovernanceParameters', 'On-chain Governance Parameters'],
              ]
            },
            {
              title: 'TOPIO',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/Tools/TOPIO/Overview', 'Overview'],
                ['/Tools/TOPIO/InstallTOPIO', 'Install TOPIO'],
                ['/Tools/TOPIO/QuickStart', 'Quick Start'],
                ['/Tools/TOPIO/StartTOPIO', 'Start TOPIO'],
                ['/Tools/TOPIO/Command-line_Options', 'Command-line Options'],
                ['/Tools/TOPIO/wallet', 'Wallet'],
                {
                  title: 'topcl Instructions',
                  path: '/Tools/TOPIO/topcl/Overview',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    ['/Tools/TOPIO/topcl/SendTransactions', 'Send Transactions'],
                    ['/Tools/TOPIO/topcl/RetrievingInformationFromtheChain', 'Retrieving Information From the Chain'],
                    ['/Tools/TOPIO/topcl/SystemTransactions', 'System Transactions'],
                  ],
                },
                {
                  title: 'xnode Instructions',
                  path: '/Tools/TOPIO/xnode/Overview',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    ['/Tools/TOPIO/xnode/RetrieveNodeNetworkInformation', 'Retrieve Node Network Information'],
                  ],
                },
              ]
            },
            {
              title: 'RPC API Reference',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/Interface/RPC-API/Overview', 'Overview'],
                ['/Interface/RPC-API/requestToken', 'Request Token'],
                {
                  title: 'Send Transactions',
                  path: '/Interface/RPC-API/sendTransaction/sendTransaction',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    ['/Interface/RPC-API/sendTransaction/tx_typeandaction_type', 'tx_type and action_type'],
                    ['/Interface/RPC-API/sendTransaction/action_param_serialization', 'action param Serialization'],
                  ],
                },
                ['/Interface/RPC-API/RetrievingInformationFromtheChain', 'Retrieving Information From the Chain'],
              ]
            },
            {
              title: 'Wallet Integration Guide',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/AccessGuide/WalletAccessGuide/overview', 'Overview'],
                ['/AccessGuide/WalletAccessGuide/SDKintegartion', 'SDK Integration'],
              ]
            },
            {
              title: 'SDKs',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/Interface/SDKs/00-overview', 'Overview'],
                ['/Interface/SDKs/01-javascript-sdk', 'JavaScript SDK'],
                ['/Interface/SDKs/03-java-sdk', 'Java SDK'],
                ['/Interface/SDKs/02-c++-sdk', 'C++ SDK'],
              ]
            },
          ],
        },
        '/zh/': {
          label: '简体中文',
          sidebar: [
            {
              title: '认识 TOP Network',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/zh/AboutTOPNetwork/TOPNetworkPlatform', 'TOP Network 区块链平台'],
                {
                  title: 'TOP Network 基础设施层',
                  path: '/zh/AboutTOPNetwork/TOPChainInfrastructure/Overview',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    ['/zh/AboutTOPNetwork/TOPChainInfrastructure/P2PNetworkInnovation(layer-0)', 'P2P网络革新(Layer-0)'],
                    ['/zh/AboutTOPNetwork/TOPChainInfrastructure/ComprehensiveMulti-levelDynamicSharding(layer-1)', '全分片主链(Layer-1)'],
                    ['/zh/AboutTOPNetwork/TOPChainInfrastructure/ServiceChainandOne-WayStateChannels(layer-2)', '业务链和单向状态通道(Layer-2)'],
                    ['/zh/AboutTOPNetwork/TOPChainInfrastructure/DataStructure', '数据结构'],
                    ['/zh/AboutTOPNetwork/TOPChainInfrastructure/DistributedStorage', '分布式存储'],
                  ],
                },
                {
                  title: 'TOP Network 协议',
                  path: '/zh/AboutTOPNetwork/Protocol/OverView',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    ['/zh/AboutTOPNetwork/Protocol/TOPNetwokP2PNetwork', 'TOP Network P2P 网络协议'],
                    ['/zh/AboutTOPNetwork/Protocol/AccountProtocol', '账户协议'],
                    ['/zh/AboutTOPNetwork/Protocol/ResourceModel', '资源模型'],
                    ['/zh/AboutTOPNetwork/Protocol/EconomicModel', '经济模型'],
                    ['/zh/AboutTOPNetwork/Protocol/TransactionProtocol/TransactionProtocol', '交易协议'],
                    ['/zh/AboutTOPNetwork/Protocol/ConsensusProtocol', '共识协议'],
                  ],
                },
                ['/zh/AboutTOPNetwork/Security', '链安全'],
                ['/zh/AboutTOPNetwork/Glossary', '术语'],
                ['/zh/AboutTOPNetwork/Download/learningResource', '下载中心'],
              ]
            },
            {
              title: 'TOP Network 节点',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/zh/Node/NodeVote', '节点投票'],
                ['/zh/Node/VoterDividend', '投票者分红'],
              ]
            },
            {
              title: '智能合约',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/zh/SmartContract/SmartContract', '概述'],
                ['/zh/SmartContract/SystemContractAPI', '系统智能合约 API'],
                ['/zh/SmartContract/LuaAPI', '用户智能合约 API'],
              ]
            },
            {
              title: '链上治理',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/zh/On-ChainGovernance/Overview', '概述'],
                ['/zh/On-ChainGovernance/On-ChainGovernanceParameters', '链上治理参数'],
              ]
            },
            {
              title: 'TOPIO 使用指南',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/zh/Tools/TOPIO/Overview', '概述'],
                ['/zh/Tools/TOPIO/InstallTOPIO', '安装 TOPIO'],
                ['/zh/Tools/TOPIO/StartTOPIO', '启动 TOPIO'],
                ['/zh/Tools/TOPIO/Command-line_Options', '命令行选项'],
                ['/zh/Tools/TOPIO/StorewithTOPIO', 'TOPIO 数据存储'],
                ['/zh/Tools/TOPIO/wallet', '钱包功能'],
                {
                  title: 'topcl 使用指南',
                  path: '/zh/Tools/TOPIO/topcl/Overview',
                  sidebarDepth: 1,
                  collapsable: true,
                  children: [
                    ['/zh/Tools/TOPIO/topcl/sendtx', '发送交易'],
                    ['/zh/Tools/TOPIO/topcl/GET', '查询链上信息'],
                    ['/zh/Tools/TOPIO/topcl/system', '系统交易'],
                  ],
                },
              ]
            },
            {
              title: 'RPC API',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/zh/Interface/RPC-API/Overview', '概述'],
                ['/zh/Interface/RPC-API/requestToken', '获取链访问身份令牌'],
                ['/zh/Interface/RPC-API/get', '查询链上信息'],
              ]
            },
            {
              title: '钱包对接指南',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/zh/AccessGuide/WalletAccessGuide/overview', '概述'],
                ['/zh/AccessGuide/WalletAccessGuide/SDKintegartion', 'SDK 集成'],
              ]
            },
            {
              title: 'SDKs',
              sidebarDepth: 1,
              collapsable: true,
              children: [
                ['/zh/Interface/SDKs/00-overview', '概述'],
                ['/zh/Interface/SDKs/01-javascript-sdk', 'JavaScript SDK'],
                ['/zh/Interface/SDKs/03-java-sdk', 'Java SDK'],
                ['/zh/Interface/SDKs/02-c++-sdk', 'C++ SDK'],
              ]
            },
          ],
        }
      }
    },
    plugins: [
      '@vuepress/plugin-back-to-top',
      [
        '@vuepress/active-header-links',
        {
          sidebarLinkSelector: '.sidebar-link',
          headerAnchorSelector: '.header-anchor',
          headerTopOffset: 120
        }
      ],
      '@vuepress/plugin-last-updated',
      [
        'vuepress-plugin-clean-urls',
        {
          normalSuffix: '/',
          indexSuffix: '/',
          notFoundPath: '/404/'
        }
      ],
      [
        '@vuepress/google-analytics',
        {
          ga: 'UA-148766289-2'
        }
      ],
      ['vuepress-plugin-code-copy', { align: 'bottom', color: '#fff' }],
      [
        'vuepress-plugin-medium-zoom',
        {
          selector: '.theme-default-content img',
          delay: 500,
          options: {
            margin: 20,
            background: 'rgba(255,255,255,0.8)',
            scrollOffset: 0
          }
        }
      ],
      [
        'vuepress-plugin-seo',
        {
          siteTitle: ($page, $site) => $site.title,
          title: $page => $page.title,
          description: $page => $page.frontmatter.description,
          author: ($page, $site) =>
            $page.frontmatter.author || $site.themeConfig.author,
          tags: $page => $page.frontmatter.tags,
          twitterCard: _ => 'summary_large_image',
          type: $page =>
            ['articles', 'posts', 'blog'].some(folder =>
              $page.regularPath.startsWith('/' + folder)
            )
              ? 'article'
              : 'website',
          url: ($page, $site, path) => ($site.themeConfig.domain || '') + path,
          image: ($page, $site) =>
            $page.frontmatter.image
              ? ($site.themeConfig.domain || '') + $page.frontmatter.image
              : ($site.themeConfig.domain || '') + $site.themeConfig.defaultImage,
          publishedAt: $page =>
            $page.frontmatter.date && new Date($page.frontmatter.date),
          modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
          customMeta: (add, context) => {
            const { $site, image } = context
            add(
              'twitter:site',
              ($site.themeConfig.author && $site.themeConfig.author.twitter) || ''
            )
            add('image', image)
            add('keywords', $site.themeConfig.keywords)
          }
        }
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'callout',
          defaultTitle: ''
        }
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'right',
          defaultTitle: ''
        }
      ],
      [
        'vuepress-plugin-container',
        {
          type: 'left',
          defaultTitle: ''
        }
      ],
      'vuepress-plugin-check-md',
    ],
  }
  