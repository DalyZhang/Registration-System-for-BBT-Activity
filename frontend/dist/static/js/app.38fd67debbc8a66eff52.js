webpackJsonp([8],{0:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("//Fk"),r=n.n(i),a=(n("SOGz"),n("7+uW")),o=n("/ocq");a.a.use(o.a);var _={logined:!1,studengId:"",name:"",isManager:!1},u=new o.a({routes:[{path:"/login",name:"Login",component:function(){return n.e(6).then(n.bind(null,"xJsL"))},meta:_},{path:"/activity",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"pGKz"))},children:[{path:"",name:"ActivityHome",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"cqKU"))},meta:_},{path:"publish",name:"ActivityCreator",component:function(){return n.e(2).then(n.bind(null,"R+vx"))},meta:_},{path:":id/edit",name:"ActivityEditor",component:function(){return n.e(1).then(n.bind(null,"1UK+"))},meta:_},{path:":id",name:"ActivityDetails",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"GYYd"))},meta:_}]},{path:"*",redirect:"/login"}]}),d=n("8+8L"),c={departmentList:["编辑部","综合管理部","综合新闻部","外联部","策划推广部","节目部","人力资源部","技术部","视频部","视觉设计部"],urls:{front:"backend/public",add:function(e){return this.front+e},init:function(){return this.add("/api/init")},login:function(){return this.add("/api/login")},signout:function(){return this.add("/api/signout")},publishV:function(){return this.add("/api/manager/publish/volunteer")},publishA:function(){return this.add("/api/manager/publish/award")},image:function(e){return this.add("/api/publisher/modify/image/"+e)},queryA:function(){return this.add("/api/user/query/activity")},queryD:function(e){return this.add("/api/manager/query/"+e+"/department")},queryU:function(e){return this.add("/api/manager/query/"+e+"/userinfo")},download:function(e){return this.add("/api/manager/download/"+e)},register:function(e){return this.add("/api/user/register/"+e)},unregister:function(e){return this.add("/api/user/unregister/"+e)},editV:function(e){return this.add("/api/publisher/modify/volunteer/"+e)},editA:function(e){return this.add("/api/publisher/modify/award/"+e)},delete:function(e){return this.add("/api/publisher/delete/"+e)},imageSrc:function(e){return this.add(e)}},getCookie:function(e){var t=new RegExp("(?:(?:^|.*;\\s*)"+e+"\\s*=\\s*([^;]*).*$)|^.*$");return document.cookie.replace(t,"$1")},removeCookie:function(e){var t=new Date;t.setTime(t.getTime()-1),document.cookie=e+"=;expires="+t.toUTCString()},compareDatetime:function(e){for(var t=new Date,n=[[e.slice(0,4),t.getFullYear()],[e.slice(5,7),t.getMonth()+1],[e.slice(8,10),t.getDate()],[e.slice(11,13),t.getHours()],[e.slice(14,16),t.getMinutes()],[e.slice(17,19),t.getSeconds()]],i=0;i<6;i++)if(n[i][0]=Number(n[i][0]),n[i][0]!==n[i][1])return n[i][0]-n[i][1];return 0},datetimeToInput:function(e){return e.replace(/^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}):\d{2}$/,"$1T$2")},inputToDatetime:function(e){return e.slice(0,10)+" "+e.slice(11)+":00"}},s={name:"App",data:function(){return{appWidth:void 0,loading:!0}},created:function(){this.flushSize(),window.addEventListener("resize",this.flushSize)},methods:{flushSize:function(){var e=document.body.clientWidth;e<300?e=300:e>450&&(e=450),this.appWidth=e/1080*100}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"global-bg"}}),e._v(" "),n("router-view",{staticClass:"main",class:{show:!e.loading},style:{fontSize:e.appWidth+"px"},on:{"main-fade-in":function(t){e.loading=!1},"main-fade-out":function(t){e.loading=!0}}})],1)},staticRenderFns:[]};var p,f=n("VU/8")(s,l,!1,function(e){n("RxKd"),n("qRj7")},"data-v-66af222b",null).exports;a.a.use(d.a),a.a.config.productionTip=!1,a.a.prototype.$global=c,u.beforeEach((p=!1,function(e,t,n){p?n():(p=!0,a.a.http.post(c.urls.init()).then(function(t){if(!((t=t.body)instanceof Object))return r.a.reject("服务器发生错误");if(t.err_code)return r.a.reject(t.err_msg);if((t=t.data).logined&&(e.meta.logined=!0,e.meta.studentId=t.student_id,e.meta.name=t.name,e.meta.isManager=t.is_manager),"/login"===e.fullPath)e.meta.logined&&n({path:"/activity",replace:!0});else if(e.meta.logined){if(-1!==e.fullPath.search(/^\/activity\/\d+\/edit$/))return a.a.http.post(c.urls.queryA(),{type:0,start_id:e.params.id,number:1})}else n({path:"/login",replace:!0});return r.a.reject(0)}).then(function(t){if(!((t=t.body)instanceof Object))return r.a.reject("服务器发生错误");if(t.err_code)return r.a.reject(t.err_msg);if(!((t=t.data).activities instanceof Array&&1===t.activities.length&&t.activities[0].id===Number(e.params.id)))return r.a.reject("活动不存在");var n=t.activities[0],i=!1;return 0===n.type?i=c.compareDatetime(n.action_time)>0:1===n.type&&(i=c.compareDatetime(n.book_time)>0),i&&n.is_publisher?void 0:r.a.reject("你没有修改权限")}).catch(function(t){0===t||("string"==typeof t?alert(t):(alert("服务器发生错误"),n({path:"/activity/"+e.params.id,replace:!0}))),n()}))})),new a.a({el:"#app",router:u,components:{App:f},template:"<App/>"})},RxKd:function(e,t){},SOGz:function(e,t){var n="";n+="________   ________   __________               \n",n+="|\\   __  \\ |\\   __  \\ |\\__    __\\        \n",n+="\\ \\  \\|\\ /_\\ \\  \\|\\ /_\\|__|\\  \\_|   \n",n+=" \\ \\   __  \\\\ \\   __  \\   \\ \\  \\      \n",n+="  \\ \\  \\|\\  \\\\ \\  \\|\\  \\   \\ \\  \\ \n",n+="   \\ \\_______\\\\ \\_______\\   \\ \\__\\    \n",n+="    \\|_______| \\|_______|    \\|__|  百步梯活动报名系统 2018.9 \n",n+="________________________________________________________________\n",n+="  Powered by 百步梯技术部  设计：陈泳文 前端：张梓健 后台：林子健. \n",console.log("%c"+n,"color: LightGreen")},qRj7:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.38fd67debbc8a66eff52.js.map