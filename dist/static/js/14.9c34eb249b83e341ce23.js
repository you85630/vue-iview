webpackJsonp([14],{JJ7h:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Form",{attrs:{model:e.formItem,"label-width":80}},[a("FormItem",{attrs:{label:"输入框"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formItem.input,callback:function(t){e.$set(e.formItem,"input",t)},expression:"formItem.input"}})],1),e._v(" "),a("FormItem",{attrs:{label:"选择器"}},[a("Select",{attrs:{placeholder:"请选择"},model:{value:e.formItem.select,callback:function(t){e.$set(e.formItem,"select",t)},expression:"formItem.select"}},[a("Option",{attrs:{value:"beijing"}},[e._v("北京市")]),e._v(" "),a("Option",{attrs:{value:"shanghai"}},[e._v("上海市")]),e._v(" "),a("Option",{attrs:{value:"shenzhen"}},[e._v("深圳市")])],1)],1),e._v(" "),a("FormItem",{attrs:{label:"日期控件"}},[a("Row",[a("Col",{attrs:{span:"4"}},[a("DatePicker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formItem.date,callback:function(t){e.$set(e.formItem,"date",t)},expression:"formItem.date"}})],1),e._v(" "),a("Col",{staticStyle:{"text-align":"center"},attrs:{span:"2"}},[e._v("-")]),e._v(" "),a("Col",{attrs:{span:"4"}},[a("TimePicker",{attrs:{type:"time",placeholder:"选择时间"},model:{value:e.formItem.time,callback:function(t){e.$set(e.formItem,"time",t)},expression:"formItem.time"}})],1)],1)],1),e._v(" "),a("FormItem",{attrs:{label:"单选框"}},[a("RadioGroup",{model:{value:e.formItem.radio,callback:function(t){e.$set(e.formItem,"radio",t)},expression:"formItem.radio"}},[a("Radio",{attrs:{label:"male"}},[e._v("男")]),e._v(" "),a("Radio",{attrs:{label:"female"}},[e._v("女")])],1)],1),e._v(" "),a("FormItem",{attrs:{label:"多选框"}},[a("CheckboxGroup",{model:{value:e.formItem.checkbox,callback:function(t){e.$set(e.formItem,"checkbox",t)},expression:"formItem.checkbox"}},[a("Checkbox",{attrs:{label:"吃饭"}}),e._v(" "),a("Checkbox",{attrs:{label:"睡觉"}}),e._v(" "),a("Checkbox",{attrs:{label:"跑步"}}),e._v(" "),a("Checkbox",{attrs:{label:"看电影"}})],1)],1),e._v(" "),a("FormItem",{attrs:{label:"开关"}},[a("i-switch",{attrs:{size:"large"},model:{value:e.formItem.switch,callback:function(t){e.$set(e.formItem,"switch",t)},expression:"formItem.switch"}},[a("span",{attrs:{slot:"open"},slot:"open"},[e._v("开启")]),e._v(" "),a("span",{attrs:{slot:"close"},slot:"close"},[e._v("关闭")])])],1),e._v(" "),a("FormItem",{attrs:{label:"滑块"}},[a("Slider",{attrs:{range:""},model:{value:e.formItem.slider,callback:function(t){e.$set(e.formItem,"slider",t)},expression:"formItem.slider"}})],1),e._v(" "),a("FormItem",{attrs:{label:"文本域"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入..."},model:{value:e.formItem.textarea,callback:function(t){e.$set(e.formItem,"textarea",t)},expression:"formItem.textarea"}})],1),e._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"}},[e._v("提交")]),e._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"ghost"}},[e._v("取消")])],1)],1)},o=[],l={render:r,staticRenderFns:o};t.a=l},Uxb1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("uDkr"),o=a("JJ7h"),l=a("VU/8"),s=l(r.a,o.a,!1,null,null,null);t.default=s.exports},uDkr:function(e,t,a){"use strict";t.a={data:function(){return{formItem:{input:"",select:"",radio:"male",checkbox:[],switch:!0,date:"",time:"",slider:[20,50],textarea:""}}}}}});