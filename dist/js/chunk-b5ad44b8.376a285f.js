(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5ad44b8"],{"159b":function(t,s,a){var i=a("da84"),e=a("fdbc"),n=a("17c2"),o=a("9112");for(var r in e){var c=i[r],u=c&&c.prototype;if(u&&u.forEach!==n)try{o(u,"forEach",n)}catch(l){u.forEach=n}}},"17c2":function(t,s,a){"use strict";var i=a("b727").forEach,e=a("a640"),n=a("ae40"),o=e("forEach"),r=n("forEach");t.exports=o&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,s,a){"use strict";var i=a("23e7"),e=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=e},{forEach:e})},7011:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"product_details"},[a("div",{staticClass:"swipe_box"},[a("div",{staticClass:"btn"},[a("van-icon",{staticClass:"pop",attrs:{name:"arrow-left"}}),a("van-icon",{staticClass:"pop",attrs:{name:"shopping-cart"}})],1),a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.productList,(function(t,s){return a("van-swipe-item",[a("img",{attrs:{src:t,alt:""}})])})),1)],1),a("div",{staticClass:"baseInfo"},[a("h3",[t._v("￥"+t._s(t.goods_price))]),a("span",{staticClass:"goodName"},[t._v(t._s(t.goods_name))]),a("span",{staticClass:"diver"})]),a("div",{ref:"info",staticClass:"info"}),a("div",{staticClass:"bottomTools"},[a("div",{staticClass:"iconBtn"},[a("van-icon",{attrs:{name:"shop"}}),a("span",[t._v("店铺")])],1),a("div",{staticClass:"iconBtn"},[a("van-icon",{attrs:{name:"map-marked"}}),a("span",[t._v("客服")])],1),a("div",{staticClass:"iconBtn"},[a("van-icon",{attrs:{name:"star"}}),a("span",[t._v("收藏")])],1),a("div",{staticClass:"textBtn add"},[t._v("加入购物车")]),a("div",{staticClass:"textBtn buy"},[t._v("立即购买")])])])},e=[],n=(a("4160"),a("159b"),a("03af")),o={name:"ProductDetails",components:{},data:function(){return{productList:[],goods_price:"",goods_name:""}},methods:{getDetails:function(){var t=this;Object(n["a"])("/goods/detail",{goods_id:this.$route.params.id}).then((function(s){t.$refs.info.innerHTML=s.data.message.goods_introduce;var a=s.data.message.pics;a.forEach((function(s){t.productList.push(s.pics_sma_url)})),t.goods_price=s.data.message.goods_price,t.goods_name=s.data.message.goods_name,console.log(t.productList)})).catch((function(t){console.log(t)}))}},mounted:function(){this.getDetails()}},r=o,c=(a("9c8b"),a("2877")),u=Object(c["a"])(r,i,e,!1,null,"14f90b8b",null);s["default"]=u.exports},9518:function(t,s,a){},"9c8b":function(t,s,a){"use strict";a("9518")},a640:function(t,s,a){"use strict";var i=a("d039");t.exports=function(t,s){var a=[][t];return!!a&&i((function(){a.call(null,s||function(){throw 1},1)}))}},b727:function(t,s,a){var i=a("0366"),e=a("44ad"),n=a("7b0b"),o=a("50c4"),r=a("65f0"),c=[].push,u=function(t){var s=1==t,a=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(p,v,m,h){for(var L,g,_=n(p),b=e(_),C=i(v,m,3),S=o(b.length),T=0,w=h||r,E=s?w(p,S):a?w(p,0):void 0;S>T;T++)if((f||T in b)&&(L=b[T],g=C(L,T,_),t))if(s)E[T]=g;else if(g)switch(t){case 3:return!0;case 5:return L;case 6:return T;case 2:c.call(E,L)}else if(l)return!1;return d?-1:u||l?l:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},fdbc:function(t,s){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-b5ad44b8.376a285f.js.map