webpackJsonp([8],{Y2uY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("in9P"),l=a("YXew"),n=a("VU/8"),i=n(o.a,l.a,!1,null,null,null);t.default=i.exports},YXew:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Checkbox-group",{on:{"on-change":e.changeTableColumns},model:{value:e.tableColumnsChecked,callback:function(t){e.tableColumnsChecked=t},expression:"tableColumnsChecked"}},[a("Checkbox",{attrs:{label:"show"}},[e._v("展示")]),e._v(" "),a("Checkbox",{attrs:{label:"weak"}},[e._v("唤醒")]),e._v(" "),a("Checkbox",{attrs:{label:"signin"}},[e._v("登录")]),e._v(" "),a("Checkbox",{attrs:{label:"click"}},[e._v("点击")]),e._v(" "),a("Checkbox",{attrs:{label:"active"}},[e._v("激活")]),e._v(" "),a("Checkbox",{attrs:{label:"day7"}},[e._v("7日留存")]),e._v(" "),a("Checkbox",{attrs:{label:"day30"}},[e._v("30日留存")]),e._v(" "),a("Checkbox",{attrs:{label:"tomorrow"}},[e._v("次日留存")]),e._v(" "),a("Checkbox",{attrs:{label:"day"}},[e._v("日活跃")]),e._v(" "),a("Checkbox",{attrs:{label:"week"}},[e._v("周活跃")]),e._v(" "),a("Checkbox",{attrs:{label:"month"}},[e._v("月活跃")])],1),e._v(" "),a("Table",{attrs:{data:e.tableData2,columns:e.tableColumns2,border:""}})],1)},l=[],n={render:o,staticRenderFns:l};t.a=n},in9P:function(e,t,a){"use strict";t.a={data:function(){return{tableData2:this.mockTableData2(),tableColumns2:[],tableColumnsChecked:["show","weak","signin","click","active","day7","day30","tomorrow","day","week","month"]}},methods:{mockTableData2:function(){function e(){return Math.floor(1e4*Math.random()+1)}for(var t=[],a=0;a<10;a++)t.push({name:"推广名称"+(a+1),fav:0,show:e(),weak:e(),signin:e(),click:e(),active:e(),day7:e(),day30:e(),tomorrow:e(),day:e(),week:e(),month:e()});return t},getTable2Columns:function(){var e=this,t={name:{title:"名称",key:"name",fixed:"left",width:200,render:function(t,a){var o=e.tableData2[a.index].fav;return t("div",[t("Icon",{style:0===o?{cursor:"pointer"}:{cursor:"pointer",color:"#f50"},props:{type:0===o?"ios-star-outline":"ios-star"},nativeOn:{click:function(){e.toggleFav(a.index)}}})])}},show:{title:"展示",key:"show",width:150,sortable:!0},weak:{title:"唤醒",key:"weak",width:150,sortable:!0},signin:{title:"登录",key:"signin",width:150,sortable:!0},click:{title:"点击",key:"click",width:150,sortable:!0},active:{title:"激活",key:"active",width:150,sortable:!0},day7:{title:"7日留存",key:"day7",width:150,sortable:!0},day30:{title:"30日留存",key:"day30",width:150,sortable:!0},tomorrow:{title:"次日留存",key:"tomorrow",width:150,sortable:!0},day:{title:"日活跃",key:"day",width:150,sortable:!0},week:{title:"周活跃",key:"week",width:150,sortable:!0},month:{title:"月活跃",key:"month",width:150,sortable:!0}},a=[t.name];return this.tableColumnsChecked.forEach(function(e){return a.push(t[e])}),a},changeTableColumns:function(){this.tableColumns2=this.getTable2Columns()},toggleFav:function(e){this.tableData2[e].fav=0===this.tableData2[e].fav?1:0}},mounted:function(){this.changeTableColumns()}}}});