webpackJsonp([8],{"2Ahv":function(t,e){},"3sjA":function(t,e){},J4g7:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("Dd8w"),i=n.n(s),o=n("R4Sj"),r={name:"TheEntry",computed:i()({},Object(o.b)(["auth","user"])),methods:{logout:function(){var t=this;this.$swal({text:"你确定要退出吗?",confirmButtonText:"退出"}).then(function(e){e.value&&t.$store.dispatch("logout")})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-right"},[t.auth?n("ul",{staticClass:"nav navbar-nav github-login"},[n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[t.user?n("span",[t.user.avatar?n("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar}}):t._e(),t._v(" "),t.user.name?n("span",[t._v(t._s(t.user.name))]):t._e()]):n("span",[t._v("佚名")]),t._v(" "),n("span",{staticClass:"caret"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/users/edit"}},[n("i",{staticClass:"fa fa-cog text-md i-middle"}),t._v("\n            编辑资料\n          ")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out text-md"}),t._v("退出")])])])])]):n("div",{staticClass:"nav navbar-nav github-login"},[n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/login"}},[n("i",{staticClass:"fa fa-user"}),t._v(" 登 录\n    ")]),t._v(" "),n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[n("i",{staticClass:"fa fa-user-plus"}),t._v(" 注 册\n    ")])],1)])},staticRenderFns:[]};var c={name:"TheHeader",components:{TheEntry:n("VU/8")(r,l,!1,function(t){n("f+hN")},"data-v-564cfd7f",null).exports},data:function(){return{logo:{src:this.uploadsUrl+"mw690/007d7DTvgy1g02d9sjo8mj305301o3yi.jpg",title:"智能拐杖"},navList:["首页","产品介绍","项目介绍","定位地图","关于我们"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://wx2.sinaimg.cn/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])],1),t._v(" "),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return n("li",{class:{active:a===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){return t.changeNavIndex(a)}}},[t._v(t._s(e))])])}),0),t._v(" "),n("div",{staticClass:"navbar-right"},[n("TheEntry")],1)])])])},staticRenderFns:[]};function d(t,e){var n=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n        <div class="popover title-popover top fade in" style="position:fixed;">\n          <div class="arrow"></div>\n          <div class="popover-content"></div>\n        </div>\n      ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),a=n.style;if(void 0===e)a.display="none";else{var s=t.getBoundingClientRect(),i=window.getComputedStyle(t,null),o=parseInt(i.getPropertyValue("padding-right"))||0,r=parseInt(i.getPropertyValue("padding-top"))||0;a.visibility="hidden",a.display="block",n.querySelector(".popover-content").textContent=e,a.left=s.left-n.offsetWidth/2+(t.offsetWidth-o)/2+"px",a.top=s.top-n.offsetHeight+r+"px",a.display="block",a.visibility="visible"}}var v={name:"TheFooter",directives:{title:{bind:function(t,e,n){var a=["mouseenter","mouseleave","click"],s=function(n){"mouseenter"===n.type?d(t,e.value):d()};a.forEach(function(e){t.addEventListener(e,s,!1)}),t.destroy=function(){a.forEach(function(e){t.removeEventListener(e,s,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}}},data:function(){return{description:"智能拐杖是一个为老人服务的机构",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:zngz@163.com"},{icon:"weibo",title:"机构微博",link:"https://weibo.com/"},{icon:"weixin",title:"加我微信",link:"#"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">★</span>\n          <a href="https://github.com/wangyicong"target="_blank"style="color:inherit">WangYiCong</a>\n        </span>\n      ',sponsor:{title:"官方微信",list:{logo:"https://wx1.sinaimg.cn/mw690/007d7DTvgy1g0c7dbfu63j30gb0gd0wv.jpg",title:"官方微信",link:"#"}},statistics:{title:"统计信息",list:[{title:"网站会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"关于我们",list:[{icon:"thumbs-up",title:"机构服务",link:"#"},{icon:"globe",title:"合作商",link:"#"}]}}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])}),0),t._v(" "),n("br"),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),n("a",{attrs:{href:t.sponsor.list.link,target:"_blank"}},[n("img",{staticClass:"footer-sponsor-link",attrs:{src:t.sponsor.list.logo,alt:t.sponsor.list.title,width:"98"}})])]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",[t._v(t._s(e.title)+": "+t._s(e.description))])}),0)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}),0)])])])])])])},staticRenderFns:[]};var f={name:"App",components:{TheHeader:n("VU/8")(c,u,!1,function(t){n("2Ahv")},"data-v-6b8479bf",null).exports,TheFooter:n("VU/8")(v,p,!1,function(t){n("3sjA")},"data-v-727434e2",null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[e("router-view")],1),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var m=n("VU/8")(f,h,!1,function(t){n("J4g7")},null,null).exports,g=n("KGCO"),b=[{path:"/auth/register",name:"Register",component:function(){return n.e(1).then(n.bind(null,"0jH9"))}},{path:"/",name:"Home",component:function(){return n.e(6).then(n.bind(null,"j7e0"))}},{path:"*",redirect:"/"},{path:"/auth/login",name:"Login",component:function(){return n.e(3).then(n.bind(null,"3Jfp"))}},{path:"/users/edit",name:"EditUsers",component:function(){return n.e(0).then(n.bind(null,"56Zq"))}},{path:"/users/1/edit",component:function(){return n.e(0).then(n.bind(null,"56Zq"))},children:[{path:"",name:"EditProfile",component:function(){return n.e(5).then(n.bind(null,"Plmk"))},meta:{auth:!0}},{path:"/users/1/edit_avatar",name:"EditAvatar",component:function(){return n.e(4).then(n.bind(null,"o8vE"))},meta:{auth:!0}},{path:"/users/1/edit_password",name:"EditPassword",component:function(){return n.e(2).then(n.bind(null,"6m7U"))},meta:{auth:!0}}]}];a.a.use(g.a);var _=new g.a({mode:"history",linkExactActiveClass:"active",routes:b});_.beforeEach(function(t,e,n){var a=_.app,s=a.$options.store.state.auth;a.$message.hide(),s&&-1!==t.path.indexOf("/auth/")||!s&&t.meta.auth?n("/"):n()});var y=_,C=n("W3Iv"),w=n.n(C),k=n("BO1k"),E=n.n(k),x=n("d7EF"),T=n.n(x),S=n("pFYg"),U=n.n(S);function L(t,e,n){n=n&&"object"===(void 0===n?"undefined":U()(n))?n:{};var a="string"==typeof t.value?t.value.trim():"",s=n,i=s.title,o=void 0===i?"该项":i,r=s.error,l="";if(e.required&&""===a)l=o+"不能为空";else if(n.target){var c=document.querySelector(n.target);(c?c.value:null)!==a&&(l="输入的"+o+"不匹配")}else if(n.regex)try{n.regex.test(a)||(l=o+"格式不正确")}catch(t){}l?N(t,void 0===r?l:r):N(t)}function N(t,e){var n=t.parentElement,a=function(t){var e=t.parentElement,n=e.querySelector(".help-block");if(!n){var a=document.createRange().createContextualFragment('<span class="help-block"></span>');e.appendChild(a),n=e.querySelector(".help-block")}return n}(t);void 0===e?(a.style.display="none",n.classList.remove("has-error")):(a.textContent=e,a.style.display="block",n.classList.add("has-error"))}var A={validator:{bind:function(t,e,n){var a=e.value,s=e.arg,i=e.modifiers,o=-1!==["change","blur","input"].indexOf(s)?s:"change",r=function(){N(t)},l=function(){L(t,i,a)};t.addEventListener("input",r,!1),t.addEventListener(o,l,!1),t.destroy=function(){t.removeEventListener("input",r,!1),t.removeEventListener(o,l,!1),t.destroy=null}},inserted:function(t,e,n){var a=e.value,s=e.modifiers,i=t.closest("[data-validator-form]"),o=i?i.querySelector("[type=submit]"):null;if(o){var r=function(){L(t,s,a),i.querySelectorAll(".has-error").length?o.canSubmit=!1:o.canSubmit=!0};o.addEventListener("click",r,!1),t.destroySubmitBtn=function(){o.removeEventListener("click",r,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}},dropdown:{bind:function(t,e,n){var a=function(){t.parentElement.classList.toggle("open")},s=function(e){var n=e.target;n.isSameNode(t)||t.contains(n)||t.parentElement.classList.remove("open")};t.addEventListener("click",a,!1),document.addEventListener("click",s,!1),t.destroy=function(){t.removeEventListener("click",a,!1),document.removeEventListener("click",s,!1),t.destroy=null}},unbind:function(t){t.destroy()}}},I=!0,$=!1,j=void 0;try{for(var H,R=E()(w()(A));!(I=(H=R.next()).done);I=!0){var P=H.value,q=T()(P,2),F=q[0],B=q[1];a.a.directive(F,B)}}catch(t){$=!0,j=t}finally{try{!I&&R.return&&R.return()}finally{if($)throw j}}var D={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],class:"alert alert-"+this.type+" alert-dismissible"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:this.close}},[e("span",[this._v("×")])]),this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var O=n("VU/8")(D,V,!1,function(t){n("r5yU")},"data-v-34015d2d",null).exports;a.a.component("Message",O);var z=n("ssT3");a.a.use(o.a);var J={user:z.a.getItem("user"),auth:z.a.getItem("auth")},W={UPDATE_USER:function(t,e){t.user=e,z.a.setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,z.a.setItem("auth",e)}},M={login:function(t,e){var n=t.commit;e&&n("UPDATE_USER",e),n("UPDATE_AUTH",!0),y.push("/")},logout:function(t){(0,t.commit)("UPDATE_AUTH",!1),y.push({name:"Home",params:{logout:!0}})},updateUser:function(t,e){var n=t.state,a=t.commit,s=n.user;s&&"object"===(void 0===s?"undefined":U()(s))&&(e=i()({},s,e)),a("UPDATE_USER",e)}},Y=new o.a.Store({state:J,mutations:W,actions:M}),Z=n("2Vzz"),G=n.n(Z),K={install:function(t){G.a.setDefaults({type:"warning",showCancelButton:!0,confirmButtonColor:"rgb(140,212,245)",cancelButtonColor:"rgb(193,193,193)"}),t.swal=G.a,t.prototype.$swal=G.a}},Q={install:function(t){var e=new(t.extend(O)),n=e.$mount().$el;t.nextTick(function(){document.querySelector("#main-container").prepend(n)}),e.$on("update:show",function(t){e.show=t});var a={show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e.msg=n,e.type=a,e.show=!1,t.nextTick(function(){e.show=!0})},hide:function(){t.nextTick(function(){e.show=!1})}};t.prototype.$message=a}};a.a.use(K),a.a.use(Q),a.a.config.productionTip=!1,new a.a({el:"#app",router:y,store:Y,components:{App:m},template:"<App/>"})},"f+hN":function(t,e){},r5yU:function(t,e){},ssT3:function(t,e,n){"use strict";var a=n("mvHQ"),s=n.n(a),i=localStorage;e.a={setItem:function(t,e){i.setItem(t,s()(e))},getItem:function(t){try{return JSON.parse(i.getItem(t))}catch(t){return null}},removeItem:function(t){i.removeItem(t)}}}},["NHnr"]);