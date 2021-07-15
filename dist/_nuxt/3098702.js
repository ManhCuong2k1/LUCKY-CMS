(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{706:function(t,r,e){var n=e(259);t.exports=function(t){return n(t,5)}},707:function(t,r,e){"use strict";var n={props:{title:{type:String,require:!0},activeName:{type:String,require:!0}},methods:{goBack:function(){this.$router.go(-1)}}},o=e(12),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement;return(t._self._c||r)("el-page-header",{staticClass:"mb-5",attrs:{content:t.title},on:{back:t.goBack}})}),[],!1,null,null,null);r.a=component.exports},719:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));e(93),e(720),e(721),e(26),e(61);var n=function(t,r,e){r.length<t.min||r.length>t.max?e(new Error("Length should be ".concat(t.min," to ").concat(t.max))):e()}},720:function(t,r,e){var n=e(268),o=e(405),c=e(267);t.exports=function(object,t){var r={};return t=c(t,3),o(object,(function(e,o,object){n(r,o,t(e,o,object))})),r}},721:function(t,r,e){t.exports=e(722)},722:function(t,r,e){var n=e(174),o=e(723),c=e(725),l=e(26);t.exports=function(t,r){return(l(t)?n:o)(t,c(r))}},723:function(t,r,e){var n=e(405),o=e(724)(n);t.exports=o},724:function(t,r,e){var n=e(260);t.exports=function(t,r){return function(e,o){if(null==e)return e;if(!n(e))return t(e,o);for(var c=e.length,l=r?c:-1,m=Object(e);(r?l--:++l<c)&&!1!==o(m[l],l,m););return e}}},725:function(t,r,e){var n=e(170);t.exports=function(t){return"function"==typeof t?t:n}},742:function(t,r,e){"use strict";e(17),e(13),e(15),e(19),e(14),e(20);var n=e(0),o=e(6),c=(e(7),e(51)),l=e(706),m=e.n(l),d=e(719);function h(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var v={name:"",phone:"",email:"",address:"",CityId:"",password:"",DistrictId:""},F={components:{},props:{distributorData:{type:Object,required:!1}},data:function(){return{loading:!1,passVisiable:!1,distributorForm:this.distributorData?m()(this.distributorData):m()(v),rules:{name:[{required:!0,message:"Vui lòng nhập tên",trigger:"blur"},{min:1,max:300,validator:d.a,trigger:"blur"}],email:[{required:!0,message:"Vui lòng nhập email",trigger:"blur"}],CityId:[{required:!0,message:"Vui lòng chọn thành phố ",trigger:"blur"}],DistrictId:[{required:!0,message:"Vui lòng chọn quận/huyện",trigger:"blur"}],phone:[{required:!0,message:"Vui lòng nhập số điện thoại",trigger:"blur"}]}}},computed:f(f({},Object(c.d)("admin/common",["optionCities"])),Object(c.d)("admin/common",["optionDistricts"])),beforeMount:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$store.dispatch("admin/common/searchCities");case 2:if(null==t.distributorData){r.next=5;break}return r.next=5,t.$store.dispatch("admin/common/searchDistrics",{cityId:t.distributorData.CityId});case 5:case"end":return r.stop()}}),r)})))()},methods:{updateSelectCity:function(t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,r.$store.dispatch("admin/common/searchDistrics",{cityId:t});case 3:case"end":return e.stop()}}),e)})))()},submitForm:function(t){var r=this;this.$refs[t].validate(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}r.$emit("submitForm",r.distributorForm),t.next=5;break;case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())},resetPassword:function(){this.passVisiable=!0,this.distributorForm.password="123456"},resetForm:function(t){this.$refs[t].resetFields()}}},w=e(12),component=Object(w.a)(F,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("el-col",{attrs:{span:12}},[e("el-form",{ref:"distributorForm",staticClass:"w-full",attrs:{model:t.distributorForm,"label-width":"150px",rules:t.rules}},[e("el-form-item",{attrs:{label:"Tên nhà phân phối",prop:"name"}},[e("el-input",{attrs:{placeholder:"Tên nhà phân phối"},model:{value:t.distributorForm.name,callback:function(r){t.$set(t.distributorForm,"name",r)},expression:"distributorForm.name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"Điện thoại",prop:"phone"}},[e("el-input",{attrs:{placeholder:"Điện thoại"},model:{value:t.distributorForm.phone,callback:function(r){t.$set(t.distributorForm,"phone",r)},expression:"distributorForm.phone"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"Email",prop:"email"}},[e("el-input",{attrs:{placeholder:"Email"},model:{value:t.distributorForm.email,callback:function(r){t.$set(t.distributorForm,"email",r)},expression:"distributorForm.email"}})],1),t._v(" "),t.distributorForm.password.length?e("el-form-item",{attrs:{label:"Mật khẩu",prop:"password"}},[e("div",{staticClass:"flex"},[e("el-input",{staticClass:"mr-2",attrs:{type:"password",disabled:!t.passVisiable,placeholder:"Mạc định: 123456"},model:{value:t.distributorForm.password,callback:function(r){t.$set(t.distributorForm,"password",r)},expression:"distributorForm.password"}}),t._v(" "),e("el-button",{attrs:{disabled:t.passVisiable},on:{click:t.resetPassword}},[t._v("\n                        Đặt lại\n                    ")])],1)]):e("el-form-item",{attrs:{label:"Mật khẩu",prop:"password"}},[e("el-input",{attrs:{type:"password",placeholder:"Mạc định: 123456"},model:{value:t.distributorForm.password,callback:function(r){t.$set(t.distributorForm,"password",r)},expression:"distributorForm.password"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"Địa chỉ",prop:"address"}},[e("el-input",{attrs:{placeholder:"Địa chỉ"},model:{value:t.distributorForm.address,callback:function(r){t.$set(t.distributorForm,"address",r)},expression:"distributorForm.address"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"Tỉnh\\Thành phố",prop:"CityId"}},[e("el-select",{attrs:{placeholder:"Thành phố"},on:{change:t.updateSelectCity},model:{value:t.distributorForm.CityId,callback:function(r){t.$set(t.distributorForm,"CityId",r)},expression:"distributorForm.CityId"}},t._l(t.optionCities,(function(t){return e("el-option",{key:t.slug,attrs:{label:t.label,value:t.slug}})})),1)],1),t._v(" "),e("el-form-item",{attrs:{label:"Quận\\Huyện",prop:"DistrictId"}},[e("el-select",{attrs:{placeholder:"Quận huyện"},model:{value:t.distributorForm.DistrictId,callback:function(r){t.$set(t.distributorForm,"DistrictId",r)},expression:"distributorForm.DistrictId"}},t._l(t.optionDistricts,(function(t){return e("el-option",{key:t.slug,attrs:{label:t.label,value:t.slug}})})),1)],1),t._v(" "),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(r){return t.submitForm("distributorForm")}}},[t._v("\n                    Lưu\n                ")]),t._v(" "),e("el-button",{on:{click:function(r){return t.resetForm("distributorForm")}}},[t._v("\n                    Làm mới\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);r.a=component.exports},996:function(t,r,e){"use strict";e.r(r);var n=e(0),o=(e(7),e(742)),c=e(707),l={layout:"admin",components:{DistributorForm:o.a,PageHeader:c.a},methods:{create:function(form){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.loading=!0,r.prev=2,r.next=5,t.$axios.post("/admin/distributor",form);case 5:t.$message({type:"success",message:"Thêm thành công!"}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),t.$message({type:"error",message:"Thông tin nhà phân phối không hợp lệ"});case 11:t.$router.push("/admin/distributor"),r.next=18;break;case 14:throw r.prev=14,r.t1=r.catch(0),t.$message.error(t.$constants.ERROR_MESSAGE.Default),r.t1;case 18:return r.prev=18,t.loading=!1,r.finish(18);case 21:case"end":return r.stop()}}),r,null,[[0,14,18,21],[2,8]])})))()}}},m=e(12),component=Object(m.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("PageHeader",{attrs:{title:"Tạo nhà phân phối"}}),t._v(" "),e("DistributorForm",{on:{submitForm:t.create}})],1)}),[],!1,null,null,null);r.default=component.exports}}]);