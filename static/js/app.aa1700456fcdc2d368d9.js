webpackJsonp([2,0],{0:function(t,s,e){(function(t){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=e(111),n=s(a),i=e(119),o=s(i),r=e(127),d=s(r),l=e(125),m=s(l),c=e(126),u=s(c),f=e(120),p=s(f),v=e(110),j=s(v),h=e(121),_=s(h);n.default.use(d.default),n.default.use(m.default),n.default.material.registerTheme("default",{primary:"black",accent:"red",warn:"red",background:"white"}),n.default.use(u.default);var b=[{path:"/",component:j.default},{path:"/main",component:_.default,name:"main",meta:{requiresAuth:!0}},{path:"/add",component:p.default,name:"add",meta:{requiresAuth:!0}},{path:"/nothing",component:menu}],y=new d.default({mode:"history",base:t,routes:b});y.beforeEach(function(t,s,e){console.log(y.params),e()});new n.default({el:"#app",router:y,render:function(t){return t(o.default)}})}).call(s,"/")},110:function(t,s,e){var a,n;e(116),a=e(113);var i=e(123);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-69dbe41f",t.exports=a},112:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var n=e(110),i=a(n);s.default={name:"app",components:{Login:i.default}}},113:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{username:"",password:"",checkbox:"",validinfo:!1,data:null,message:"Please check your login info"}},methods:{checklog:function(){for(var t=0;t<this.data.body.length;t++)console.log(this.data.body[t].login.username),this.data.body[t].login.username==this.username&&this.data.body[t].login.password==this.password?this.$router.push({name:"main",params:{name:this.data.body[t].name,items:this.data.body[t].items,email:this.data.body[t].email,picture:this.data.body[t].picture}}):this.data.body[t].login.username==this.username?(this.message="Incorrect password",this.validinfo=!0):this.validinfo=!0}},created:function(){var t=this;this.$http.get("http://192.168.1.7:3000/users").then(function(s){console.log(s.body[0].login.username),t.data=s},function(t){alert("failed")})}}},114:function(t,s,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var n=e(1),i=a(n);s.default={data:function(){return{name:"",items:null,email:"",picture:""}},created:function(){console.log("main",this.$route.params),this.name=this.$route.params.name,this.items=this.$route.params.items,this.email=this.$route.params.email,this.picture=this.$route.params.picture},computed:{sort:function(t){return this.items.sort(function(t,s){return t.time<s.time})}},filters:{moment:function(t){return(0,i.default)(t).format("dddd Do")},relative:function(t){return(0,i.default)(t).fromNow()}}}},115:function(t,s){},116:function(t,s){},117:function(t,s){},118:function(t,s,e){function a(t){return e(n(t))}function n(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./af":2,"./af.js":2,"./ar":8,"./ar-dz":3,"./ar-dz.js":3,"./ar-ly":4,"./ar-ly.js":4,"./ar-ma":5,"./ar-ma.js":5,"./ar-sa":6,"./ar-sa.js":6,"./ar-tn":7,"./ar-tn.js":7,"./ar.js":8,"./az":9,"./az.js":9,"./be":10,"./be.js":10,"./bg":11,"./bg.js":11,"./bn":12,"./bn.js":12,"./bo":13,"./bo.js":13,"./br":14,"./br.js":14,"./bs":15,"./bs.js":15,"./ca":16,"./ca.js":16,"./cs":17,"./cs.js":17,"./cv":18,"./cv.js":18,"./cy":19,"./cy.js":19,"./da":20,"./da.js":20,"./de":22,"./de-at":21,"./de-at.js":21,"./de.js":22,"./dv":23,"./dv.js":23,"./el":24,"./el.js":24,"./en-au":25,"./en-au.js":25,"./en-ca":26,"./en-ca.js":26,"./en-gb":27,"./en-gb.js":27,"./en-ie":28,"./en-ie.js":28,"./en-nz":29,"./en-nz.js":29,"./eo":30,"./eo.js":30,"./es":32,"./es-do":31,"./es-do.js":31,"./es.js":32,"./et":33,"./et.js":33,"./eu":34,"./eu.js":34,"./fa":35,"./fa.js":35,"./fi":36,"./fi.js":36,"./fo":37,"./fo.js":37,"./fr":40,"./fr-ca":38,"./fr-ca.js":38,"./fr-ch":39,"./fr-ch.js":39,"./fr.js":40,"./fy":41,"./fy.js":41,"./gd":42,"./gd.js":42,"./gl":43,"./gl.js":43,"./he":44,"./he.js":44,"./hi":45,"./hi.js":45,"./hr":46,"./hr.js":46,"./hu":47,"./hu.js":47,"./hy-am":48,"./hy-am.js":48,"./id":49,"./id.js":49,"./is":50,"./is.js":50,"./it":51,"./it.js":51,"./ja":52,"./ja.js":52,"./jv":53,"./jv.js":53,"./ka":54,"./ka.js":54,"./kk":55,"./kk.js":55,"./km":56,"./km.js":56,"./ko":57,"./ko.js":57,"./ky":58,"./ky.js":58,"./lb":59,"./lb.js":59,"./lo":60,"./lo.js":60,"./lt":61,"./lt.js":61,"./lv":62,"./lv.js":62,"./me":63,"./me.js":63,"./mi":64,"./mi.js":64,"./mk":65,"./mk.js":65,"./ml":66,"./ml.js":66,"./mr":67,"./mr.js":67,"./ms":69,"./ms-my":68,"./ms-my.js":68,"./ms.js":69,"./my":70,"./my.js":70,"./nb":71,"./nb.js":71,"./ne":72,"./ne.js":72,"./nl":74,"./nl-be":73,"./nl-be.js":73,"./nl.js":74,"./nn":75,"./nn.js":75,"./pa-in":76,"./pa-in.js":76,"./pl":77,"./pl.js":77,"./pt":79,"./pt-br":78,"./pt-br.js":78,"./pt.js":79,"./ro":80,"./ro.js":80,"./ru":81,"./ru.js":81,"./se":82,"./se.js":82,"./si":83,"./si.js":83,"./sk":84,"./sk.js":84,"./sl":85,"./sl.js":85,"./sq":86,"./sq.js":86,"./sr":88,"./sr-cyrl":87,"./sr-cyrl.js":87,"./sr.js":88,"./ss":89,"./ss.js":89,"./sv":90,"./sv.js":90,"./sw":91,"./sw.js":91,"./ta":92,"./ta.js":92,"./te":93,"./te.js":93,"./tet":94,"./tet.js":94,"./th":95,"./th.js":95,"./tl-ph":96,"./tl-ph.js":96,"./tlh":97,"./tlh.js":97,"./tr":98,"./tr.js":98,"./tzl":99,"./tzl.js":99,"./tzm":101,"./tzm-latn":100,"./tzm-latn.js":100,"./tzm.js":101,"./uk":102,"./uk.js":102,"./uz":103,"./uz.js":103,"./vi":104,"./vi.js":104,"./x-pseudo":105,"./x-pseudo.js":105,"./yo":106,"./yo.js":106,"./zh-cn":107,"./zh-cn.js":107,"./zh-hk":108,"./zh-hk.js":108,"./zh-tw":109,"./zh-tw.js":109};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=118},119:function(t,s,e){var a,n;e(115),a=e(112);var i=e(122);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=a},120:function(t,s){var e,a;a=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(a=e=e.default),"function"==typeof a&&(a=a.options),t.exports=e},121:function(t,s,e){var a,n;e(117),a=e(114);var i=e(124);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-7798dab8",t.exports=a},122:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("transition",{attrs:{name:"bounce",mode:"out-in"}},[e("router-view",{staticClass:"view"})],1)],1)},staticRenderFns:[]}},123:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bg"},[e("md-button",{staticClass:"md-icon-button md-fab-top-left md-fab md-mini testi md-primary"},[e("md-tooltip",{attrs:{"md-delay":"100","md-direction":"right"}},[t._v("For testing you can try user1/password1 and user2/password2")]),t._v(" "),e("md-icon",{staticStyle:{color:"white"}},[t._v("info")])],1),t._v(" "),e("div",{staticClass:"Login"},[e("md-whiteframe",{staticClass:"limiter md-primary",attrs:{"md-elevation":"24"}},[e("span",{staticClass:"md-display-3 logheading"},[t._v("Do"),e("span",{staticClass:"loghead2"},[t._v("To")])]),t._v(" "),e("form",{staticClass:"myForm",attrs:{novalidate:""},on:{submit:function(s){s.stopPropagation(),s.preventDefault(),t.submit(s)}}},[e("transition",{attrs:{name:"fade"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.validinfo,expression:"validinfo"}],staticClass:"md-subheading alert"},[t._v(t._s(t.message))])]),t._v(" "),e("md-input-container",[e("label",[t._v("Username")]),t._v(" "),e("md-input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],domProps:{value:t.username},on:{input:function(s){t.username=s}}})],1),t._v(" "),e("md-input-container",{attrs:{"md-has-password":""}},[e("label",[t._v("Password")]),t._v(" "),e("md-input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){t.password=s}}})],1),t._v(" "),e("md-layout",{staticClass:"options",attrs:{"md-gutter":""}},[e("md-layout",{attrs:{"md-flex":"25","md-flex-offset":"5"}},[e("md-checkbox",{directives:[{name:"model",rawName:"v-model",value:t.checkbox,expression:"checkbox"}],staticClass:"md-primary",attrs:{id:"my-test1",name:"my-test1"},domProps:{value:t.checkbox},on:{input:function(s){t.checkbox=s}}},[t._v("Remember me")])],1),t._v(" "),e("md-layout",{attrs:{"md-flex":"25","md-flex-offset":"25"}},[e("md-button",{staticClass:"md-raised md-dense md-primary",on:{click:t.checklog}},[t._v("Login")])],1)],1)],1),t._v(" "),e("md-layout",{attrs:{"md-gutter":""}},[e("md-layout",{attrs:{"md-flex":"25","md-flex-offset":"25"}},[e("span",{staticClass:"md-body-1"},[t._v("Register")])]),t._v(" "),e("md-layout",{attrs:{"md-flex":"25","md-flex-offset":"9"}},[e("span",{staticClass:"md-body-1"},[t._v("Forgot Password?")])])],1)],1)],1)],1)},staticRenderFns:[]}},124:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app-viewport",attrs:{id:"file-list"}},[e("md-sidenav",{ref:"sidebar",staticClass:"md-right md-fixed"},[e("md-toolbar",{staticClass:"md-account-header"},[e("md-list",{staticClass:"md-transparent"},[e("md-list-item",{staticClass:"md-avatar-list"},[e("md-avatar",{staticClass:"md-large"},[e("img",{attrs:{src:"https://placeimg.com/64/64/people/8",alt:"People"}})]),t._v(" "),e("md-list-item",[e("div",{staticClass:"md-list-text-container"},[e("span",{staticClass:"md-headline tocap"},[t._v(t._s(t.name.first)+" "+t._s(t.name.last))]),t._v(" "),e("span"),t._v(" "),e("span",{staticClass:"email"},[t._v(t._s(t.email))])]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",[t._v("arrow_drop_down")])],1)],1)],1)],1)],1),t._v(" "),e("md-list",[e("md-list-item",{staticClass:"md-primary",on:{click:function(s){t.$refs.sidebar.toggle()}}},[e("md-icon",[t._v("insert_drive_file")]),t._v(" "),e("span",[t._v("My files")])],1)],1)],1),t._v(" "),e("md-whiteframe",{attrs:{"md-elevation":"3"}},[e("md-toolbar",{staticClass:"md-medium"},[e("div",{staticClass:"md-toolbar-container"},[e("div",{staticClass:"spacer"},[e("span",{staticClass:"md-display-3 logheading"},[e("span",{staticClass:"loghead2"},[t._v(" Do"),e("span",{staticClass:"loghead3"},[t._v("To")])])])]),t._v(" "),e("span",{staticStyle:{flex:"1"}}),t._v(" "),e("md-button",{staticClass:"md-icon-button"},[e("md-icon",[t._v("search")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button",on:{click:function(s){t.$refs.sidebar.toggle()}}},[e("md-icon",[t._v("menu")])],1)],1),t._v(" "),e("div",{staticClass:"md-toolbar-container"},[e("md-button",{staticClass:"md-fab-bottom-center md-fab"},[e("md-icon",[t._v("add")])],1)],1)])],1),t._v(" "),e("md-list",{staticClass:"md-double-line"},[t._l(t.sort,function(s){return e("md-list-item",[e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-icon",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(s.icon)+"\n\t\t\t\t\t\t")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("span",{staticClass:"tocap"},[t._v(t._s(s.description))]),t._v(" "),e("p",[t._v(t._s(t._f("moment")(s.time))+" "+t._s(t._f("relative")(s.time))+" ")])]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",{staticStyle:{color:"#AED581"}},[t._v("update")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",{staticStyle:{color:"#EF5350"}},[t._v("delete")])],1),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",{staticStyle:{color:"#64B5F6"}},[t._v("info")])],1)],1)}),t._v(" "),e("md-list-item",[e("md-avatar",{staticClass:"md-avatar-icon"},[e("md-icon",[t._v("folder")])],1),t._v(" "),e("div",{staticClass:"md-list-text-container"},[e("span",[t._v("Photos")]),t._v(" "),e("p",[t._v("Jan 9, 2014")])]),t._v(" "),e("md-button",{staticClass:"md-icon-button md-list-action"},[e("md-icon",[t._v("info")])],1)],1)],2)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.aa1700456fcdc2d368d9.js.map