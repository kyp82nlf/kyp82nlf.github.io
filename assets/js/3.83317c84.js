(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{321:function(t,e,i){},323:function(t,e,i){"use strict";i(321)},324:function(t,e,i){"use strict";i(100),i(27),i(67);var n=/\/$/,a=/^[a-z]+:/i,s={name:"EditOrIssue",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},openIssueLink:function(){var t=this.$site.themeConfig.feedbackWidget.docsRepoIssue;return"https://github.com/".concat(t,"/issues/new?assignees=&labels=Content+Improvement&template=documentation-issue.md&title=%5BDOCS+ISSUE%5D+Page:+").concat(this.$page.title)},editLink:function(){var t=this.$site.themeConfig,e=t.repo,i=t.docsDir,n=void 0===i?"":i,a=t.docsBranch,s=void 0===a?"master":a,o=t.docsRepo,r=void 0===o?e:o;return r&&this.$page.relativePath?this.createEditLink(e,r,n,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,i,s,o){return/bitbucket.org/.test(t)?(a.test(e)?e:t).replace(n,"")+"/src"+"/".concat(s,"/")+(i?i.replace(n,"")+"/":"")+o+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(a.test(e)?e:"https://github.com/".concat(e)).replace(n,"")+"/edit"+"/".concat(s,"/")+(i?i.replace(n,"")+"/":"")+o}}},o=i(18),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"local-page-edit"},[t.editLink?i("div",{staticClass:"local-edit-link"},[i("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),t.$site.themeConfig.feedbackWidget.docsRepoIssue?i("span",[t._v("\n      on GitHub or\n      "),i("a",{attrs:{href:t.openIssueLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("open an issue")])]):t._e()]):t._e()])}),[],!1,null,null,null).exports,c={data:function(){return{voteSubmitted:!1,currentPath:this.$route.path}},methods:{sendFeedback:function(t){this.voteSubmitted=!0,window.ga&&window.ga("send","event",{eventCategory:t,eventAction:"click",eventLabel:this.currentPath})}},watch:{"$route.path":function(t){this.voteSubmitted=!1,this.currentPath=t}},props:{titleTxt:{type:String,default:"Was this information helpful?"},thanksTxt:{type:String,default:"Thank you for the feedback."},evtYes:{type:String,default:"yes"},evtNo:{type:String,default:"no"},yesTxt:{type:String,default:"Yes"},noTxt:{type:String,default:"No"},editOrIssueLinks:{type:Boolean,default:!0}},components:{EditOrIssue:r}},l=(i(323),Object(o.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"feedback"},[i("h3",[t._v(t._s(t.titleTxt))]),t._v(" "),t.voteSubmitted?t._e():i("div",{staticClass:"feedback-actions"},[i("button",{staticClass:"btn btn-primary",attrs:{title:t.yesTxt},on:{click:function(e){return t.sendFeedback(t.evtYes)}}},[t._v("\n      "+t._s(t.yesTxt)+"\n    ")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{title:t.noTxt},on:{click:function(e){return t.sendFeedback(t.evtNo)}}},[t._v("\n      "+t._s(t.noTxt)+"\n    ")])]),t._v(" "),t.voteSubmitted?i("div",{staticClass:"feedback-result"},[i("p",[t._v(t._s(t.thanksTxt))])]):t._e(),t._v(" "),t.editOrIssueLinks?i("div",{staticClass:"feedback-edit-or-issue"},[i("EditOrIssue")],1):t._e()])}),[],!1,null,"5f530d7b",null));e.a=l.exports},334:function(t,e,i){},335:function(t,e,i){},340:function(t,e,i){},341:function(t,e,i){},342:function(t,e,i){},343:function(t,e,i){},354:function(t,e,i){"use strict";var n={name:"Home",data:function(){return{manualSidebar:[{title:"aaaaaaaaaaaaaaaaaaa",path:"/get-started",children:[{title:"What is Filecoin?",path:"/about-filecoin/what-is-filecoin"},{title:"How Filecoin Works",path:"/about-filecoin/how-filecoin-works"},{title:"Filecoin networks",path:"https://networks.filecoin.io"},{title:"Lotus installation and setup",path:"/get-started/lotus/installation"},{title:"Lotus wallets",path:"/get-started/lotus/send-and-receive-fil"},{title:"Filecoin FAQ",path:"/about-filecoin/faq"},{title:"Glossary",path:"/reference/glossary"}]},{title:"Store",path:"/store",children:[{title:"Slingshot competition",path:"http://slingshot.filecoin.io/"},{title:"Store data with Slate",path:"/store/slate"},{title:"Store data with Lotus",path:"/store/lotus/store-data"},{title:"Very large files",path:"/store/lotus/very-large-files"},{title:"Retrieve data with Lotus",path:"/store/lotus/retrieve-data"},{title:"Import data from IPFS",path:"/store/lotus/import-data-from-ipfs"}]},{title:"Mine",path:"/mine",children:[{title:"How mining works",path:"/mine/how-mining-works"},{title:"Hardware requirements",path:"/mine/hardware-requirements"},{title:"Mining architectures",path:"/mine/mining-architectures"},{title:"Lotus guides for miners",path:"/mine/lotus"},{title:"Lotus miner setup",path:"/mine/lotus/miner-setup"},{title:"Configuration reference",path:"/mine/lotus/miner-configuration"},{title:"Seal workers",path:"/mine/lotus/seal-workers"}]},{title:"Build",path:"/build",children:[{title:"Build with Textile Buckets",path:"/build/textile-buckets"},{title:"Build with Hosted Powergate",path:"/build/hosted-powergate"},{title:"Build with Glif Nodes",path:"/build/hosted-lotus"},{title:"Filecoin-backed pinning services",path:"/build/filecoin-pinning-services"},{title:"Lotus API",path:"/reference/lotus-api"},{title:"Example applications",path:"/build/examples"},{title:"Filecoin community resources",path:"https://github.com/filecoin-project/docs/wiki#community-resources"},{title:"Protocol specification",path:"https://github.com/filecoin-project/specs"}]},{title:"Community",path:"/community",children:[{title:"Ways to contribute",path:"/community/contribute/ways-to-contribute"},{title:"Chat & discussion forums",path:"/community/chat-and-discussion-forums"},{title:"Social media",path:"/community/social-media/social-media"},{title:"Docs: Grammar, formatting and style",path:"/community/contribute/grammar-formatting-and-style"},{title:"Docs: Writing guide",path:"/community/contribute/writing-guide"},{title:"Docs: Contribution tutorial",path:"/community/contribute/contribution-tutorial"}]},{title:"Project",path:"/project",children:[{title:"Security issues",path:"https://github.com/filecoin-project/community/blob/master/SECURITY.md"},{title:"Roadmap",path:"https://app.instagantt.com/shared/s/1152992274307505/latest"},{title:"Research",path:"https://research.filecoin.io/"},{title:"Related projects",path:"/en/project/related-projects"},{title:"Code of conduct",path:"https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md"}]}]}},methods:{isExternal:i(320).f},watch:{$route:function(t,e){console.log(e),console.log(t)}},mounted:function(){console.log(1)}},a=(i(366),i(367),i(18)),s=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"home"},[e("div",{staticClass:"home-container theme-default-content"},[e("Content",{staticClass:"intro"})],1)])}),[],!1,null,"f62af0b6",null);e.a=s.exports},366:function(t,e,i){"use strict";i(334)},367:function(t,e,i){"use strict";i(335)},371:function(t,e,i){"use strict";i(340)},372:function(t,e,i){"use strict";i(341)},373:function(t,e,i){"use strict";i(342)},374:function(t,e,i){"use strict";i(343)},385:function(t,e,i){"use strict";i(182),i(68),i(33),i(178),i(183),i(329);var n=i(386),a=i(387),s=(i(339),i(27),i(322),{name:"Breadcrumbs",computed:{bread:function(){var t=this.$page.path.split("/");t[t.length-1].length||t.pop();for(var e="",i=[],n=0;n<t.length;n++){e+=t[n];var a=this.$site.pages.find((function(t){return t.path===e||t.path===e+"/"}));e+="/",null!=a&&i.push({path:a.path,title:a.frontmatter.breadcrumb||a.title})}return i}}}),o=(i(371),i(372),i(18)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.bread.length>1?i("nav",{staticClass:"breadcrumbs fixed"},[i("div",{staticClass:"nav-wrapper"},t._l(t.bread,(function(e){return i("router-link",{key:e.path,staticClass:"breadcrumb",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]):t._e()}),[],!1,null,"c65b7bde",null).exports,c=i(324),l={computed:{legacyUrl:function(){return this.$frontmatter&&this.$frontmatter.legacyUrl}}},u=(i(373),Object(o.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"legacy-callout"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.legacyUrl?i("section",{staticClass:"legacy-links"},[i("a",{attrs:{target:"_blank",href:t.legacyUrl}},[t._v("View this page on legacy site")])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("This docs site is new. Help us improve it!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"block"},[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/filecoin-project/filecoin-docs/issues/new?assignees=&labels=Content+Improvement&template=content-request.md&title=%5BCONTENT+REQUEST%5D+%28add+your+title+here%21%29",target:"_blank"}},[this._v("Suggest new content")])])])]),this._v(" "),e("div",{staticClass:"block"},[e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/filecoin-project/filecoin-docs/issues/new?assignees=&labels=Content+Improvement&template=documentation-issue.md&title=%5BDOCS+ISSUE%5D+%28add+your+title+here%21%29",target:"_blank"}},[this._v("Give general feedback")])])])])])}],!1,null,"4445e606",null).exports),h=(i(67),{data:function(){return{searchBox:!1,queryVal:null}},mounted:function(){document.addEventListener("click",this.trackOutbound);var t=document.querySelector(".navbar .links input");t&&(t.addEventListener("keyup",this.captureSearch),t.addEventListener("focusout",(function(t){return t.target.value=""})),this.searchBox=t)},beforeDestroy:function(){document.removeEventListener("click",this.trackOutbound),this.searchBox&&this.searchBox.removeEventListener("keyup",this.captureSearch)},watch:{"$route.path":function(t){this.queryVal&&this.trackQuery(t)},$route:function(){this.searchBox&&this.searchBox.blur()}},methods:{captureSearch:function(t){this.queryVal=this.searchBox.value},trackQuery:function(t){if(window.ga){var e=encodeURIComponent(this.queryVal).replace(/%20/g,"+");ga("send","pageview","/search/?q=".concat(e)),this.queryVal=null}},trackOutbound:function(t){if(window.ga){var e=t.target.closest("a");null!==e&&window.location.host!==e.host&&ga("send","event","outbound","click",e.href)}}}}),d=Object(o.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports,m=(i(179),i(72),{methods:{scrollTop:function(){navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(window.scrollTo(0,0),setTimeout((function(){window.scrollTo(0,0)}),100))}},watch:{"$route.path":function(t){this.scrollTop()},$route:function(){var t=document.querySelectorAll(".sidebar-links .active");if(t.length&&document.documentElement.scrollIntoView){var e=t.item(t.length-1);try{e.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}catch(t){e.scrollIntoView(!1)}}}}}),p=Object(o.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports,f=i(354),g={name:"Page",components:{PageEdit:n.a,PageNav:a.a,Breadcrumbs:r,Feedback:c.a,LegacyCallout:u,Analytics:d,ScrollPatch:p,Home:f.a},props:["sidebarItems"],computed:{isContentStatus:function(){return!(!this.$frontmatter||!this.$frontmatter.issueUrl)},isHome:function(){return!(!this.$frontmatter||!this.$frontmatter.homepage)}},methods:{smoothScroll:function(){var t=document.getElementsByTagName("html")[0];return t.scrollHeight<15e3?t.classList.add("smooth-scroll"):t.classList.remove("smooth-scroll")},htmlRouteClass:function(){var t=document.getElementsByTagName("html")[0],e=this.$page.path;this.$themeConfig.locales["/zh"].nav.slice(1).map((function(t){return t.link})).some((function(t){return e.includes(t)}))?t.classList.remove("route-index"):t.classList.add("route-index")}},mounted:function(){},updated:function(){}},v=(i(374),Object(o.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"page"},[t._t("top"),t._v(" "),i("Breadcrumbs"),t._v(" "),t.isHome?t.isHome?i("Home"):t._e():i("Content",{staticClass:"theme-default-content"}),t._v(" "),t.isContentStatus||t.isHome?t._e():i("div",{staticClass:"content-footer"},[i("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),i("PageEdit")],1),t._v(" "),i("Analytics"),t._v(" "),i("ScrollPatch"),t._v(" "),t._t("bottom")],2)}),[],!1,null,"64d2c529",null));e.a=v.exports}}]);