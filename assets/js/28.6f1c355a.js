(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{594:function(t,a,v){"use strict";v.r(a);var _=v(13),e=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dialog-对话框-可拖曳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dialog-对话框-可拖曳"}},[t._v("#")]),t._v(" Dialog 对话框(可拖曳 )")]),t._v(" "),a("h2",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("1.可拖拽的Dialog, 可缩小和放大, 缩小为悬浮按钮, 放大为弹窗;")]),t._v(" "),a("p",[t._v("2.其组件是相对定位，使用包裹该组件的div长宽小于100, 该组件将相对于视窗定位")])]),t._v(" "),a("base-code-block",[a("dialog-demo-dialog"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<template>\n  <div>\n    <el-button @click="visible = true" type="primary">打开弹窗</el-button>\n    <draggable-dialog\n      :visible.sync="visible"\n      title="dragDialog"\n      width="40%"\n  ></draggable-dialog>\n  </div>\n</template>\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<script>\nexport default {\n  name: 'demo-dialog',\n  data() {\n    return {\n      visible: false\n    }\n  }\n}\n<\/script>\n")])])])])],1),t._v(" "),a("h2",{attrs:{id:"attributes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[t._v("#")]),t._v(" Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("visible")]),t._v(" "),a("td",[t._v("是否显示 Dialog，支持 .sync 修饰符")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Dialog 的标题，也可通过具名 slot （见下表）传入")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("Dialog 的宽度")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("40%")])]),t._v(" "),a("tr",[a("td",[t._v("posByParent")]),t._v(" "),a("td",[t._v("是否是相对父组件定位，false即相对于视窗定位")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("true")])])])]),t._v(" "),a("h2",{attrs:{id:"slot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("#")]),t._v(" Slot")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Dialog 的内容")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("Dialog 标题区的内容")])]),t._v(" "),a("tr",[a("td",[t._v("footer")]),t._v(" "),a("td",[t._v("Dialog 底部区的内容")])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);