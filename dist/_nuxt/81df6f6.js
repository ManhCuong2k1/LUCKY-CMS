(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1018:function(r,e,t){"use strict";t.r(e);var n=t(0),o=(t(7),t(706)),c=t.n(o),l=t(888),m=t(707),d={layout:"admin",components:{TransporterForm:l.a,PageHeader:m.a},asyncData:function(r){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.params,n=r.store,e.next=3,n.dispatch("admin/transporter/show",t.id);case 3:return o=c()(n.state.admin.transporter.transporterDetail),e.next=6,n.dispatch("admin/common/searchDistributors",{query:o.AdminId});case 6:return e.abrupt("return",{transporter:o});case 7:case"end":return e.stop()}}),e)})))()},methods:{updateTransporter:function(form){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.$store.dispatch("admin/transporter/update",{id:r.transporter.id,data:form});case 3:r.$router.push("/admin/transporter/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r.$message({message:"Update error.",type:"error"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},confirmPOS:function(r){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("admin/transporter/update",{id:r,data:{status:"confirm"}});case 3:e.$router.push("/admin/transporter/"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.$message({message:"Update error.",type:"error"});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},f=t(12),component=Object(f.a)(d,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("PageHeader",{attrs:{title:r.transporter.name}}),r._v(" "),t("TransporterForm",{attrs:{"transporter-data":r.transporter},on:{submitForm:r.updateTransporter,confirmPOS:r.confirmPOS}})],1)}),[],!1,null,null,null);e.default=component.exports},706:function(r,e,t){var n=t(259);r.exports=function(r){return n(r,5)}},707:function(r,e,t){"use strict";var n={props:{title:{type:String,require:!0},activeName:{type:String,require:!0}},methods:{goBack:function(){this.$router.go(-1)}}},o=t(12),component=Object(o.a)(n,(function(){var r=this,e=r.$createElement;return(r._self._c||e)("el-page-header",{staticClass:"mb-5",attrs:{content:r.title},on:{back:r.goBack}})}),[],!1,null,null,null);e.a=component.exports},888:function(r,e,t){"use strict";t(17),t(13),t(15),t(19),t(14),t(20);var n=t(0),o=t(6),c=(t(7),t(51)),l=t(706),m=t.n(l);function d(object,r){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(object,r).enumerable}))),e.push.apply(e,t)}return e}function f(r){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(r,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(source,e))}))}return r}var h={name:null,phone:null,email:null,address:null,password:"",AdminId:null},v={components:{},props:{transporterData:{type:Object,required:!1}},data:function(){return{passVisiable:!1,loading:!1,transporterForm:this.transporterData?m()(this.transporterData):m()(h),rules:{name:[{required:!0,message:"Vui lòng nhập tên",trigger:"blur"}],phone:[{required:!0,message:"Vui lòng nhập số điện thoại",trigger:"blur"}]}}},computed:f(f({},Object(c.d)("admin/common",["optionDistributors"])),{},{userLoged:function(){return this.$store.state.auth.user}}),methods:{submitForm:function(r){var e=this;this.$refs[r].validate(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=4;break}e.$emit("submitForm",e.transporterForm),r.next=5;break;case 4:return r.abrupt("return",!1);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},confirmPOS:function(){var r=this;this.$confirm("Bạn sẽ duyệt điểm bán này ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){r.$emit("confirmPOS",r.transporterForm.id),r.$message({type:"success",message:"Thành công"})})).catch((function(){r.$message({type:"info",message:"Đã hủy"})}))},resetForm:function(r){this.$refs[r].resetFields()},resetPassword:function(){this.passVisiable=!0,this.transporterForm.password="123456"},remoteDistributor:function(r){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("admin/common/searchDistributors",{query:r});case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()}}},w=t(12),component=Object(w.a)(v,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",[t("el-col",{attrs:{span:12}},[t("el-form",{ref:"transporterForm",staticClass:"w-full",attrs:{model:r.transporterForm,"label-width":"150px",rules:r.rules}},[t("el-form-item",{attrs:{label:"Tên nhân viên",prop:"name"}},[t("el-input",{attrs:{placeholder:"Tên nhân viên"},model:{value:r.transporterForm.name,callback:function(e){r.$set(r.transporterForm,"name",e)},expression:"transporterForm.name"}})],1),r._v(" "),t("el-form-item",{attrs:{label:"Điện thoại",prop:"phone"}},[t("el-input",{attrs:{placeholder:"Điện thoại"},model:{value:r.transporterForm.phone,callback:function(e){r.$set(r.transporterForm,"phone",e)},expression:"transporterForm.phone"}})],1),r._v(" "),r.transporterForm.password.length?t("el-form-item",{attrs:{label:"Mật khẩu",prop:"password"}},[t("div",{staticClass:"flex"},[t("el-input",{staticClass:"mr-2",attrs:{type:"password",disabled:!r.passVisiable,placeholder:"Mạc định: 123456"},model:{value:r.transporterForm.password,callback:function(e){r.$set(r.transporterForm,"password",e)},expression:"transporterForm.password"}}),r._v(" "),t("el-button",{attrs:{disabled:r.passVisiable},on:{click:r.resetPassword}},[r._v("\n                        Đặt lại\n                    ")])],1)]):t("el-form-item",{attrs:{label:"Mật khẩu",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"Mạc định: 123456"},model:{value:r.transporterForm.password,callback:function(e){r.$set(r.transporterForm,"password",e)},expression:"transporterForm.password"}})],1),r._v(" "),t("el-form-item",{attrs:{label:"Email",prop:"email"}},[t("el-input",{attrs:{placeholder:"Email"},model:{value:r.transporterForm.email,callback:function(e){r.$set(r.transporterForm,"email",e)},expression:"transporterForm.email"}})],1),r._v(" "),t("el-form-item",{attrs:{label:"Địa chỉ",prop:"address"}},[t("el-input",{attrs:{placeholder:"Địa chỉ"},model:{value:r.transporterForm.address,callback:function(e){r.$set(r.transporterForm,"address",e)},expression:"transporterForm.address"}})],1),r._v(" "),"admin"==r.userLoged.type?t("el-form-item",{attrs:{label:"Nhà phân phối",prop:"AdminId"}},[t("el-select",{attrs:{placeholder:"Nhà phân phối",filterable:"",remote:"","remote-method":r.remoteDistributor,loading:r.loading},model:{value:r.transporterForm.AdminId,callback:function(e){r.$set(r.transporterForm,"AdminId",e)},expression:"transporterForm.AdminId"}},r._l(r.optionDistributors,(function(r){return t("el-option",{key:r.slug,attrs:{label:r.label,value:r.slug}})})),1)],1):r._e(),r._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(e){return r.submitForm("transporterForm")}}},[r._v("\n                    Lưu\n                ")]),r._v(" "),t("el-button",{on:{click:function(e){return r.resetForm("transporterForm")}}},[r._v("\n                    Làm mới\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports}}]);