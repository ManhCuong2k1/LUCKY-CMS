(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{893:function(e,t,r){},920:function(e,t,r){"use strict";r(893)},992:function(e,t,r){"use strict";r.r(t);var n=r(0),l=(r(116),r(7),{data:function(){return{username:"",email:"",fullname:"",password:"",repassword:"",errorLogin:!1}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.init();case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})))()},beforeDestroy:function(){this.$recaptcha.destroy()},methods:{regAction:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$recaptcha.execute("register");case 3:return r=t.sent,t.next=6,e.$axios.post("/auth/register",{username:e.username,email:e.email,fullname:e.fullname,password:e.password,token:r});case 6:e.$router.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),e.errorLogin=!0,setTimeout((function(){e.errorLogin=!1}),5e3);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},regGoogle:function(){window.location.href="".concat("http://web.lc:8000/","/api/auth/login/google")}}}),o=(r(920),r(12)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center h-screen bg-gray-100"},[r("el-card",{staticClass:"flex align-middle m-auto p-3 md:w-1/4 sm:w-full",attrs:{shadow:"always"}},[r("div",{staticClass:"font-bold text-center text-xl mb-5"},[e._v("\n            Đăng ký\n        ")]),e._v(" "),r("div",{staticClass:"mb-5"},[e.errorLogin?r("el-alert",{attrs:{title:"Wrong username/email or password",type:"error"}}):e._e()],1),e._v(" "),r("div",{staticClass:"mb-2"},[r("el-input",{attrs:{placeholder:"Tên đăng nhập"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),r("div",{staticClass:"mb-2"},[r("el-input",{attrs:{placeholder:"Tên hiển thị"},model:{value:e.fullname,callback:function(t){e.fullname=t},expression:"fullname"}})],1),e._v(" "),r("div",{staticClass:"mb-2"},[r("el-input",{attrs:{placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("div",{staticClass:"mb-2"},[r("el-input",{attrs:{placeholder:"Mật khẩu","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("div",{staticClass:"mb-1"},[r("el-input",{attrs:{placeholder:"Nhập lại mật khẩu","show-password":""},model:{value:e.repassword,callback:function(t){e.repassword=t},expression:"repassword"}})],1),e._v(" "),r("div",{staticClass:"w-full mt-3"},[r("el-button",{staticClass:"w-full",attrs:{type:"success"},on:{click:e.regAction}},[e._v("\n                Đăng ký\n            ")])],1),e._v(" "),r("div",{staticClass:"flex align-items-center justify-content-between my-4"},[r("hr",{staticClass:"flex-1 m-auto"}),e._v(" "),r("span",{staticClass:"mx-3"},[e._v("\n                Hoặc sử dụng\n            ")]),e._v(" "),r("hr",{staticClass:"flex-1 m-auto"})]),e._v(" "),r("div",{staticClass:"flex justify-center"},[r("el-button",{on:{click:e.regGoogle}},[r("i",{staticClass:"text-red-600 mr-2 fab fa-google"}),e._v("Google\n            ")])],1)])],1)}),[],!1,null,null,null);t.default=component.exports}}]);