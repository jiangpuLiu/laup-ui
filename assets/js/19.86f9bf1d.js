(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{557:function(t,e,n){},575:function(t,e,n){"use strict";n(557)},587:function(t,e,n){"use strict";n.r(e);var i={name:"code-block",props:{title:String,description:String,onlineLink:{type:String,default:""}},data:()=>({isShow:!1,codeTextBtn:"显示代码",codeTextBtnOnline:"在线运行"}),methods:{handleToggleShow(){this.isShow=!this.isShow,this.codeTextBtn=this.isShow?"隐藏代码":"显示代码"},handleOnline(){window.open(this.onlineLink)}}},s=(n(575),n(13)),o=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"code"},[e("div",{staticClass:"code--title"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("small",[t._v(t._s(t.description))])]),t._v(" "),e("div",{staticClass:"code--demo"},[e("div",{staticClass:"code-content"},[t._t("default")],2)]),t._v(" "),e("el-collapse-transition",[t.isShow?e("div",{staticClass:"code--segment"},[t._t("codeText")],2):t._e()]),t._v(" "),t.$slots.codeText?e("div",{staticClass:"code--button"},[e("div",{staticClass:"code--show",on:{click:t.handleToggleShow}},[t._v("\n      "+t._s(t.codeTextBtn)+"\n    ")]),t._v(" "),t.onlineLink?e("div",{staticClass:"code--online",on:{click:t.handleOnline}},[t._v("\n      "+t._s(t.codeTextBtnOnline)+"\n    ")]):t._e()]):t._e()],1)}),[],!1,null,"b57157fe",null);e.default=o.exports}}]);