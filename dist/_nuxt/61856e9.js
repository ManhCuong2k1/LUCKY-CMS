(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{706:function(t,e,r){var n=r(259);t.exports=function(t){return n(t,5)}},707:function(t,e,r){"use strict";var n={props:{title:{type:String,require:!0},activeName:{type:String,require:!0}},methods:{goBack:function(){this.$router.go(-1)}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-page-header",{staticClass:"mb-5",attrs:{content:t.title},on:{back:t.goBack}})}),[],!1,null,null,null);e.a=component.exports},709:function(t,e,r){var n=r(265),o=r(259),c=r(710),l=r(261),d=r(114),f=r(713),h=r(263),m=r(407),y=h((function(object,t){var e={};if(null==object)return e;var r=!1;t=n(t,(function(path){return path=l(path,object),r||(r=path.length>1),path})),d(object,m(object),e),r&&(e=o(e,7,f));for(var h=t.length;h--;)c(e,t[h]);return e}));t.exports=y},710:function(t,e,r){var n=r(261),o=r(711),c=r(712),l=r(94);t.exports=function(object,path){return path=n(path,object),null==(object=c(object,path))||delete object[l(o(path))]}},711:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},712:function(t,e,r){var n=r(262),o=r(409);t.exports=function(object,path){return path.length<2?object:n(object,o(path,0,-1))}},713:function(t,e,r){var n=r(408);t.exports=function(t){return n(t)?void 0:t}},714:function(t,e,r){var n=r(264),o=r(114),c=r(715),l=r(260),d=r(172),f=r(95),h=Object.prototype.hasOwnProperty,m=c((function(object,source){if(d(source)||l(source))o(source,f(source),object);else for(var t in source)h.call(source,t)&&n(object,t,source[t])}));t.exports=m},715:function(t,e,r){var n=r(716),o=r(717);t.exports=function(t){return n((function(object,e){var r=-1,n=e.length,c=n>1?e[n-1]:void 0,l=n>2?e[2]:void 0;for(c=t.length>3&&"function"==typeof c?(n--,c):void 0,l&&o(e[0],e[1],l)&&(c=n<3?void 0:c,n=1),object=Object(object);++r<n;){var source=e[r];source&&t(object,source,r,c)}return object}))}},716:function(t,e,r){var n=r(170),o=r(406),c=r(266);t.exports=function(t,e){return c(o(t,e,n),t+"")}},717:function(t,e,r){var n=r(173),o=r(260),c=r(171),l=r(61);t.exports=function(t,e,object){if(!l(object))return!1;var r=typeof e;return!!("number"==r?o(object)&&c(e,object.length):"string"==r&&e in object)&&n(object[e],t)}},718:function(t,e,r){"use strict";var n=r(6),o=(r(404),r(709)),c=r.n(o),l=r(714),d=r.n(l),f={props:{pageSize:{type:Number,default:12},pagerCount:{type:Number,default:7},total:{type:Number,require:!0},currentPage:{type:Number,default:1},queryParam:{type:String,default:"page"}},methods:{go:function(t){this.$emit("changePage",t),this.$router.push(this.to(t))},to:function(t){var path=this.$route.path,e=c()(this.$route.query,[this.queryParam]);return{path:path,query:1!==t?d()({},e,Object(n.a)({},this.queryParam,t)):e}}}},h=r(12),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.total>1?r("el-pagination",{staticClass:"text-center mt-5",attrs:{"page-size":t.pageSize,"pager-count":t.pagerCount,total:t.total,"current-page":t.currentPage,background:"",layout:"prev, pager, next"},on:{"current-change":t.go}}):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},726:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(6);r(15),r(17),r(13),r(19),r(14),r(20);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=function(t){return Object.keys(t).filter((function(e){return null!=t[e]&&""!==t[e]})).reduce((function(a,e){return c(c({},a),{},Object(n.a)({},e,t[e]))}),{})}},727:function(t,e,r){"use strict";var n={props:{selectedRange:{type:Array,require:!1}},data:function(){return{pickerOptions:{shortcuts:[{text:"Tuần trước",onClick:function(t){var e=new Date,r=new Date;r.setTime(r.getTime()-6048e5),t.$emit("pick",[r,e])}},{text:"Tháng trước",onClick:function(t){var e=new Date,r=new Date;r.setTime(r.getTime()-2592e6),t.$emit("pick",[r,e])}},{text:"3 tháng",onClick:function(t){var e=new Date,r=new Date;r.setTime(r.getTime()-7776e6),t.$emit("pick",[r,e])}}]},dateValue:this.selectedRange||[]}},methods:{updateDateRange:function(){this.$emit("changeDateRange",this.dateValue)}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"To","start-placeholder":"Ngày bắt đầu","end-placeholder":"Ngày kết thúc","picker-options":t.pickerOptions,format:"dd-MM-yyyy"},on:{change:t.updateDateRange},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})}),[],!1,null,null,null);e.a=component.exports},729:function(t,e,r){"use strict";var n={props:{options:{type:[Array,Object],require:!0},placeholder:{type:String,require:!1},selected:{type:String,require:!1},disabled:{type:Boolean,default:!1}},data:function(){return{value:this.selected||""}},methods:{updateValue:function(){this.$emit("changeValue",this.value)}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-select",{staticClass:"w-full",attrs:{clearable:"",placeholder:t.placeholder||"Lựa chọn",disabled:t.disabled},on:{change:t.updateValue},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return r("el-option",{key:t.slug,attrs:{label:t.label,value:t.slug}})})),1)}),[],!1,null,null,null);e.a=component.exports},897:function(t,e,r){},929:function(t,e,r){"use strict";r(897)},969:function(t,e,r){"use strict";r.r(e);r(17),r(13),r(15),r(19),r(14),r(20);var n=r(6),o=r(0),c=(r(7),r(40),r(51)),l=r(21),d=r(702),f=r(727),h=r(729),m=r(706),y=r.n(m);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={props:{data:{type:Array,require:!0}},data:function(){return{dataTable:y()(this.data)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)("admin/distributor",["distributors","distributorDelete","distributorRestore"])),watch:{data:{handler:function(){this.dataTable=y()(this.data)},deep:!0}},methods:{switchDeleteDistrictbutor:function(t,e){var r=this;null===e?this.$confirm("Bạn sẽ xóa bản ghi này ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){r.actionDeleteDistributor(t),r.$message({type:"success",message:"Xóa thành công"})})).catch((function(){r.$message({type:"info",message:"Đã hủy xóa"})})):(this.actionRestoreDistributor(t),this.$message({type:"success",message:"Khôi phục thành công"}))},actionDeleteDistributor:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("admin/distributor/delete",{id:t});case 2:case"end":return r.stop()}}),r)})))()},actionRestoreDistributor:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("admin/distributor/restore",{id:t});case 2:case"end":return r.stop()}}),r)})))()}}},w=r(12),D=Object(w.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{staticClass:"w-full",attrs:{data:t.dataTable}},[r("el-table-column",{attrs:{prop:"name",label:"Tên"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"city",label:"Tỉnh/Thành phố",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.City.name))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"district",label:"Quận/Huyện",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.District.name))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"email",label:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.email))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"phone",label:"Điện thoại",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.phone))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Ngày tạo"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t._f("formatDate")(e.row.createdAt)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Hành động",fixed:"right",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:null==e.row.deletedAt?"":"danger",icon:"el-icon-delete"},on:{click:function(r){return t.switchDeleteDistrictbutor(e.row.id,e.row.deletedAt)}}}),t._v(" "),r("div",{staticClass:"inline-block"},[r("router-link",{attrs:{to:"/admin/distributor/"+e.row.id+"/edit"}},[r("el-button",{attrs:{icon:"el-icon-edit"}})],1)],1)]}}])})],1)],1)}),[],!1,null,null,null).exports,j=r(718),_=r(707),object=r(726);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P={layout:"admin",components:{PageHeader:_.a,DateRange:f.a,Select:h.a,TableDistributor:D,Pagination:j.a},watchQuery:!0,asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,filter,l,d,f,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.query,o=t.$axios,c={fromDate:null,toDate:null,city:null,district:null,searchKey:null,deletedAt:null,page:n.page||1},filter=k(k({},c),n),l=Object(object.a)(filter),e.next=6,r.dispatch("admin/distributor/fetch",l);case 6:return e.next=8,r.dispatch("admin/common/searchCities");case 8:return e.next=10,r.dispatch("admin/common/searchDistrics",{cityId:filter.city});case 10:return e.next=12,o.get("/admin/district/".concat(n.district));case 12:return d=e.sent,f=d.data.name,e.next=16,o.get("/admin/city/".concat(n.city));case 16:return h=e.sent,m=h.data.name,e.abrupt("return",{districtIdLabel:f,cityIdLabel:m,tableFilter:filter});case 19:case"end":return e.stop()}}),e)})))()},data:function(){return{dateValue:void 0,optionStatus:{PUBLISH:{label:"Publish",slug:"publish"},DRAFT:{label:"Draft",slug:"draft"}},nameCity:null,districts:null}},computed:k(k(k({},Object(c.d)("admin/distributor",["distributors","pagination"])),Object(c.d)("admin/common",["optionCities"])),Object(c.d)("admin/common",["optionDistricts"])),methods:{fetchData:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var filter;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:filter=Object(object.a)(k(k(k({},e.$route.query),e.tableFilter),t)),e.$router.push({query:filter});case 2:case"end":return r.stop()}}),r)})))()},updatePage:function(t){this.fetchData({page:t})},updateSelectStatus:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var filter,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return filter=k(k({},t),e.$route.query),n=Object(l.omitBy)(filter,l.isNull),r.next=5,e.$store.dispatch("admin/distributor/fetch",n);case 5:null,e.fetchData({deletedAt:t,page:null});case 7:case"end":return r.stop()}}),r)})))()},updateSelectCity:function(t){this.fetchData({city:t,page:null})},updateSelectDistrict:function(t){this.fetchData({district:t,page:null})},updateDaterange:function(t){var e=null,r=null;null!==t&&(e=Object(d.a)(new Date(t[0]),"yyyy-MM-dd"),r=Object(d.a)(new Date(t[1]),"yyyy-MM-dd")),this.fetchData({fromDate:e,toDate:r,page:null})},updateSearchKey:function(){this.fetchData({page:null})}}},S=(r(929),Object(w.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:"Nhà phân phối"}}),t._v(" "),r("div",{staticClass:"w-1/2"},[r("div",{staticClass:"flex"},[r("div",{staticClass:"mr-5"},[r("DateRange",{attrs:{"selected-range":[t.$route.query.fromDate,t.$route.query.toDate]},on:{changeDateRange:t.updateDaterange}})],1),t._v(" "),r("div",{staticClass:"flex-1 mr-5"},[r("Select",{attrs:{options:t.optionStatus,placeholder:"Trạng thái",selected:t.$route.query.deletedAt},on:{changeValue:t.updateSelectStatus}})],1),t._v(" "),r("div",{staticClass:"flex-1 mr-5"},[r("Select",{attrs:{options:t.optionCities,placeholder:"Thành Phố",selected:t.cityIdLabel},on:{changeValue:t.updateSelectCity}})],1),t._v(" "),r("div",{staticClass:"flex-1 mr-5"},[r("Select",{attrs:{options:t.optionDistricts,placeholder:"Quận huyện",selected:t.districtIdLabel},on:{changeValue:t.updateSelectDistrict}})],1)]),t._v(" "),r("div",{staticClass:"mt-5 flex"},[r("el-input",{staticClass:"input-with-select mr-5",attrs:{placeholder:"Tìm kiếm",clearable:""},model:{value:t.tableFilter.searchKey,callback:function(e){t.$set(t.tableFilter,"searchKey",e)},expression:"tableFilter.searchKey"}}),t._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.updateSearchKey}},[t._v("\n                Tìm kiếm\n            ")]),t._v(" "),r("nuxt-link",{staticClass:"ml-3",attrs:{to:"/admin/distributor/create"}},[r("el-button",{attrs:{type:"success",icon:"el-icon-plus"}},[t._v("\n                    Tạo mới\n                ")])],1)],1)]),t._v(" "),r("div",[r("TableDistributor",{attrs:{data:t.distributors}})],1),t._v(" "),r("div",[r("Pagination",{attrs:{"page-size":t.pagination.pageSize,total:t.pagination.total,"current-page":t.pagination.page},on:{changePage:t.updatePage}})],1)],1)}),[],!1,null,null,null));e.default=S.exports}}]);