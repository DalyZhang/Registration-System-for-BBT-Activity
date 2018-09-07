webpackJsonp([2],{"7k97":function(t,e){},"R+vx":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("//Fk"),a=i.n(s),n=i("eA7o"),r={name:"ActivityCreator",props:["meta"],components:{"input-tips":i("otAq").a,"input-image":n.a},data:function(){return{image:"",usedMeta:this.meta,type:-1,title:"",details:"",time:"",number:0,inputType:1,same:0,numberList:[0,0,0,0,0,0,0,0,0,0],loading:!1,saved:!1,id:0}},watch:{same:function(){var t=this;t.numberList.forEach(function(e,i){t.$set(t.numberList,i,t.same)})},inputType:function(){1===this.inputType&&(this.same=this.numberList[0])}},computed:{isTitleValid:function(){return""!==this.title&&this.title.length<=25},isDetailsValid:function(){return""!==this.details&&this.details.length<=100},isTimeValid:function(){return""!==this.time&&this.$global.compareDatetime(this.time+":00")>0},isNumberValid:function(){return this.isPosInt(this.number)},isSameValid:function(){return this.isPosInt(this.same)},isSumValid:function(){var t=0;return 1===this.inputType?t=10*this.same:2===this.inputType&&this.numberList.forEach(function(e){""!==e&&(t+=e)}),this.isNumberValid&&t>=this.number},isValid:function(){var t=this.isTitleValid&&this.isDetailsValid&&this.isTimeValid&&this.isNumberValid;return t?0===this.type?t:1===this.type?t&&this.isSumValid:void 0:t}},beforeRouteLeave:function(t,e,i){this.saved||-1===this.type&&""===this.image||confirm("确定放弃当前工作？")?(this.$emit("con-fade-out"),setTimeout(function(){i()},100)):i(!1)},beforeCreate:function(){this.$global.logined||this.$root.$router.replace("/login"),this.$global.isManager||this.$root.$router.replace("/activity")},created:function(){var t=this;this.$global.logined&&this.$global.isManager&&(setTimeout(function(){t.usedMeta.queryTypes=["发起活动"],t.usedMeta.value=0,t.usedMeta.back=t.back,t.usedMeta.flush=function(){}},100),setTimeout(function(){t.$emit("nav-fade-in")},200))},mounted:function(){var t=this;setTimeout(function(){t.$emit("con-fade-in")},100)},methods:{isPosInt:function(t){return""!==t&&t>0&&t%1==0},back:function(){this.$root.$router.push("/activity")},addActivity:function(){var t,e,i=this;i.loading=!0,0===i.type?(t="/api/manager/publish/volunteer",e={title:i.title,details:i.details,action_time:i.$global.inputToDatetime(i.time),member:i.number}):1===i.type&&(t="/api/manager/publish/award",e={title:i.title,details:i.details,book_time:i.$global.inputToDatetime(i.time),award:i.number,member_list:i.numberList}),i.$http.post(t,e).then(function(t){if((t=t.body)instanceof Object){if(t.err_code)return a.a.reject(t.err_msg);if(i.id=t.id,""!==i.image){var e=new FormData;return e.append("image",i.image),i.$http.post("/api/publisher/modify/image/"+i.id,e)}return a.a.reject(0)}return a.a.reject("服务器发生错误")}).then(function(t){return(t=t.body)instanceof Object?t.err_code?a.a.reject(t.err_msg):a.a.reject(0):a.a.reject("服务器发生错误")}).catch(function(t){i.loading=!1,0===t?(i.saved=!0,i.$root.$router.push("/activity/"+i.id)):"string"==typeof t?alert(t):alert("404！该服务暂时不可用")})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"activity-creater"}},[i("div",{staticClass:"image"},[i("input-image",{attrs:{first:!0},on:{change:function(e){t.image=e}}},[i("template",{slot:"before"},[t._v("上传图片")]),t._v(" "),i("template",{slot:"after"},[t._v("轻触取消上传")])],2)],1),t._v(" "),i("div",{staticClass:"content"},[i("input-tips",{attrs:{type:"select","err-when":!1},model:{value:t.type,callback:function(e){t.type=t._n(e)},expression:"type"}},[i("template",{slot:"title"},[t._v("活动类型：")]),t._v(" "),i("template",{slot:"options"},[i("option",{attrs:{value:"-1",disabled:""}},[t._v("请选择")]),t._v(" "),i("option",{attrs:{value:"0"}},[t._v("志愿者活动")]),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("福利活动")])])],2),t._v(" "),0===t.type||1===t.type?i("div",[i("input-tips",{attrs:{"err-when":!t.isTitleValid},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[i("template",{slot:"title"},[t._v("标题：")]),t._v(" "),""===t.title?i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("标题不能为空")]):i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("标题应不超过25字符")])],2),t._v(" "),i("input-tips",{attrs:{"err-when":!t.isDetailsValid},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}},[i("template",{slot:"title"},[t._v("详情：")]),t._v(" "),""===t.details?i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("详情不能为空")]):i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("详情应不超过100字符")])],2),t._v(" "),i("input-tips",{attrs:{type:"datetime-local","err-when":!t.isTimeValid},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[i("template",{slot:"title"},[t._v("时间：")]),t._v(" "),""===t.time?i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("时间信息不全")]):i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("时间必须晚于当前")])],2),t._v(" "),i("input-tips",{attrs:{type:"number","err-when":!t.isNumberValid},model:{value:t.number,callback:function(e){t.number=t._n(e)},expression:"number"}},[0===t.type?i("span",{attrs:{slot:"title"},slot:"title"},[t._v("限制人数：")]):1===t.type?i("span",{attrs:{slot:"title"},slot:"title"},[t._v("奖品总数：")]):t._e(),t._v(" "),i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("数量应为正整数")])]),t._v(" "),1===t.type?i("div",[i("input-tips",{attrs:{type:"select","err-when":!1},model:{value:t.inputType,callback:function(e){t.inputType=t._n(e)},expression:"inputType"}},[i("template",{slot:"title"},[t._v("各部门人数限制：")]),t._v(" "),i("template",{slot:"options"},[i("option",{attrs:{value:"1"}},[t._v("各部门相同")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("自定义")])])],2),t._v(" "),1===t.inputType?i("div",[i("input-tips",{attrs:{type:"number","err-when":!t.isSameValid},model:{value:t.same,callback:function(e){t.same=t._n(e)},expression:"same"}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("各个部门：")]),t._v(" "),!t.isNumberValid||t.isSumValid?i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("数量应为正整数")]):t._e()])],1):2===t.inputType?i("div",t._l(t.numberList,function(e,s){return i("div",{key:"inputList"+s},[i("input-tips",{attrs:{type:"number","err-when":!t.isPosInt(t.numberList[s])},model:{value:t.numberList[s],callback:function(e){t.$set(t.numberList,s,t._n(e))},expression:"numberList[i]"}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$global.departmentList[s])+"：")]),t._v(" "),9!==s||!t.isNumberValid||t.isSumValid?i("span",{attrs:{slot:"tips"},slot:"tips"},[t._v("数量应为正整数")]):t._e()])],1)})):t._e()],1):t._e()],1):t._e(),t._v(" "),1===t.type&&t.isNumberValid&&!t.isSumValid?i("div",{staticClass:"sum-error"},[t._v("限制总人数应不小于奖品数")]):t._e()],1),t._v(" "),i("div",{staticClass:"button-content"},[-1!==t.type?i("div",{staticClass:"button",class:{"button-dis":!t.isValid||t.loading},on:{click:function(e){!t.isValid||t.loading||t.addActivity()}}},[i("div",{staticClass:"button-text"},[t._v("发 布")])]):t._e()])])},staticRenderFns:[]};var o=i("VU/8")(r,l,!1,function(t){i("mIRA")},"data-v-dc1209dc",null);e.default=o.exports},eA7o:function(t,e,i){"use strict";var s=i("//Fk"),a=i.n(s),n={name:"ImageInputer",props:["first","src"],data:function(){return{inputted:!1,imageSrc:""}},created:function(){this.$emit("change","")},methods:{changeFile:function(t){var e=this;t.files.length>0&&this.readImage(t.files[0]).then(function(i){e.imageSrc=i,e.$emit("change",t.files[0]),e.inputted=!0}).catch(function(e){t.value="",alert(e)})},showImage:function(t){this.imageSrc=t},cancel:function(){this.$emit("change",""),this.imageSrc="",document.getElementById("image-inputer").value="",this.inputted=!1},readImage:function(){var t={jpeg:"/9j/4",png:"iVBORw"};return function(e){return new a.a(function(i,s){if(e.size>=204800)s("图片大小应小于200KB");else{var a=new FileReader;a.onload=function(){var e=event.target.result;!function(e){var i=e.indexOf(",")+1;for(var s in t)if(e.indexOf(t[s])===i)return s;return!1}(e)?s("图片格式应为.jpg或.png"):i(e)},a.readAsDataURL(e)}})}}()}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{backgroundImage:"url("+(t.first?"":t.src)+")"},attrs:{id:"image-inputer-box"}},[i("input",{attrs:{id:"image-inputer",type:"file",accept:"image/*"},on:{change:function(e){t.changeFile(e.target)}}}),t._v(" "),i("div",{staticClass:"image",style:{backgroundImage:"url("+t.imageSrc+")"}}),t._v(" "),t.inputted?i("div",{staticClass:"image cover",on:{click:t.cancel}},[i("div",{staticClass:"info"},[t._t("after")],2)]):i("label",{staticClass:"image",class:{cover:!t.first},attrs:{for:"image-inputer"}},[i("div",{staticClass:"info",class:{first:t.first}},[t._t("before")],2)])])},staticRenderFns:[]};var l=i("VU/8")(n,r,!1,function(t){i("xpzv")},"data-v-61594793",null);e.a=l.exports},mIRA:function(t,e){},otAq:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-tips"},[i("div",{staticClass:"flex-title"},[i("div",{staticClass:"title"},[t._t("title")],2)]),t._v(" "),i("div",{staticClass:"flex-input"},[i("div",{staticClass:"input-box"},["select"!==t.type?i("input",{attrs:{type:t.type,spellcheck:"false"},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)},focus:function(e){t.inputting=!0},blur:function(e){t.inputting=!1}}}):i("select",{domProps:{value:t.value},on:{change:function(e){t.$emit("input",e.target.value)}}},[t._t("options")],2),t._v(" "),"select"===t.type?i("div",{staticClass:"select-image"}):t._e()]),t._v(" "),i("div",{staticClass:"error"},[!t.inputting&&t.errWhen?t._t("tips"):t._e()],2)])])},staticRenderFns:[]};var a=i("VU/8")({name:"InputTips",props:["value","type","errWhen"],data:function(){return{inputting:!0}}},s,!1,function(t){i("7k97")},"data-v-ea6e8846",null);e.a=a.exports},xpzv:function(t,e){}});
//# sourceMappingURL=2.b21ded59902f96842ec3.js.map