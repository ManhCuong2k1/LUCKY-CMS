(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{706:function(t,e,r){var n=r(259);t.exports=function(t){return n(t,5)}},707:function(t,e,r){"use strict";var n={props:{title:{type:String,require:!0},activeName:{type:String,require:!0}},methods:{goBack:function(){this.$router.go(-1)}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-page-header",{staticClass:"mb-5",attrs:{content:t.title},on:{back:t.goBack}})}),[],!1,null,null,null);e.a=component.exports},708:function(t,e,r){"use strict";r.d(e,"a",(function(){return image}));r(93),r(77),r(115),"".concat(window.location.protocol,"//").concat(window.location.host);function image(t,e){return t&&!t.includes("http")?e?"".concat("http://web.lc:8000/","/").concat(e,"/").concat(t):"".concat("http://web.lc:8000/","/").concat(t):t}},709:function(t,e,r){var n=r(265),o=r(259),c=r(710),l=r(261),f=r(114),d=r(713),m=r(263),h=r(407),v=m((function(object,t){var e={};if(null==object)return e;var r=!1;t=n(t,(function(path){return path=l(path,object),r||(r=path.length>1),path})),f(object,h(object),e),r&&(e=o(e,7,d));for(var m=t.length;m--;)c(e,t[m]);return e}));t.exports=v},710:function(t,e,r){var n=r(261),o=r(711),c=r(712),l=r(94);t.exports=function(object,path){return path=n(path,object),null==(object=c(object,path))||delete object[l(o(path))]}},711:function(t,e){t.exports=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},712:function(t,e,r){var n=r(262),o=r(409);t.exports=function(object,path){return path.length<2?object:n(object,o(path,0,-1))}},713:function(t,e,r){var n=r(408);t.exports=function(t){return n(t)?void 0:t}},714:function(t,e,r){var n=r(264),o=r(114),c=r(715),l=r(260),f=r(172),d=r(95),m=Object.prototype.hasOwnProperty,h=c((function(object,source){if(f(source)||l(source))o(source,d(source),object);else for(var t in source)m.call(source,t)&&n(object,t,source[t])}));t.exports=h},715:function(t,e,r){var n=r(716),o=r(717);t.exports=function(t){return n((function(object,e){var r=-1,n=e.length,c=n>1?e[n-1]:void 0,l=n>2?e[2]:void 0;for(c=t.length>3&&"function"==typeof c?(n--,c):void 0,l&&o(e[0],e[1],l)&&(c=n<3?void 0:c,n=1),object=Object(object);++r<n;){var source=e[r];source&&t(object,source,r,c)}return object}))}},716:function(t,e,r){var n=r(170),o=r(406),c=r(266);t.exports=function(t,e){return c(o(t,e,n),t+"")}},717:function(t,e,r){var n=r(173),o=r(260),c=r(171),l=r(61);t.exports=function(t,e,object){if(!l(object))return!1;var r=typeof e;return!!("number"==r?o(object)&&c(e,object.length):"string"==r&&e in object)&&n(object[e],t)}},718:function(t,e,r){"use strict";var n=r(6),o=(r(404),r(709)),c=r.n(o),l=r(714),f=r.n(l),d={props:{pageSize:{type:Number,default:12},pagerCount:{type:Number,default:7},total:{type:Number,require:!0},currentPage:{type:Number,default:1},queryParam:{type:String,default:"page"}},methods:{go:function(t){this.$emit("changePage",t),this.$router.push(this.to(t))},to:function(t){var path=this.$route.path,e=c()(this.$route.query,[this.queryParam]);return{path:path,query:1!==t?f()({},e,Object(n.a)({},this.queryParam,t)):e}}}},m=r(12),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.total>1?r("el-pagination",{staticClass:"text-center mt-5",attrs:{"page-size":t.pageSize,"pager-count":t.pagerCount,total:t.total,"current-page":t.currentPage,background:"",layout:"prev, pager, next"},on:{"current-change":t.go}}):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},726:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(6);r(15),r(17),r(13),r(19),r(14),r(20);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=function(t){return Object.keys(t).filter((function(e){return null!=t[e]&&""!==t[e]})).reduce((function(a,e){return c(c({},a),{},Object(n.a)({},e,t[e]))}),{})}},913:function(t,e,r){},946:function(t,e,r){"use strict";r(913)},964:function(t,e,r){"use strict";r.r(e);r(17),r(13),r(15),r(19),r(14),r(20);var n=r(6),o=r(0),c=(r(7),r(51)),l=r(706),f=r.n(l),d=r(708),m={components:{},props:{data:{type:Array,require:!0}},data:function(){return{dataTable:f()(this.data),loadding:!1}},watch:{data:{handler:function(){this.dataTable=f()(this.data)},deep:!0}},methods:{toImage:d.a,deleteProduct:function(t){var e=this;this.$confirm("Bạn sẽ xóa bản ghi này ?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((function(){e.$emit("deleteGroup",t),e.$message({type:"success",message:"Xóa thành công"})})).catch((function(){e.$message({type:"info",message:"Đã hủy xóa"})}))}}},h=r(12),v=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{staticClass:"w-full",attrs:{data:t.dataTable,stripe:""}},[r("el-table-column",{attrs:{prop:"name",label:"Tên",fixed:"left","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("p",{staticClass:"break-normal font-bold"},[t._v("\n                    "+t._s(e.row.name)+"\n                ")])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"nameInGroup",label:"Tên trong nhóm",fixed:"left","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("p",{staticClass:"break-normal font-bold"},[t._v("\n                    "+t._s(e.row.RefProductGroups[0].nameInGroup)+"\n                ")])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"price",label:"Giá"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.promotionPrice>0?r("div",[r("div",{staticClass:"line-through text-gray-400"},[t._v("\n                        "+t._s(t._f("formatNumber")(e.row.price||0))+"\n                    ")]),t._v(" "),r("div",[t._v(t._s(t._f("formatNumber")(e.row.promotionPrice||0)))])]):r("div",[r("div",[t._v("\n                        "+t._s(t._f("formatNumber")(e.row.price||0))+"\n                    ")])])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"volumeUnit",label:"Đơn vị"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.volumeUnit||"N/A"))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"volume",label:"Còn lại"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t._f("formatNumber")(e.row.volume||0)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"totalPick",label:"Lượt chọn"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t._f("formatNumber")(e.row.totalPick||0)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"totalView",label:"Lượt xem"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t._f("formatNumber")(e.row.totalView||0)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Hành động"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button-group",[r("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(r){return t.deleteProduct(e.row.id)}}})],1)]}}])})],1)],1)}),[],!1,null,null,null).exports,y=r(718),O=r(707);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var w={data:function(){return{loading:!1,productId:null,nameInGroup:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)("admin/common",["optionsProductGroup"])),methods:{remoteProducts:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("admin/common/searchProductGroup",{searchKey:data});case 2:case"end":return e.stop()}}),e)})))()},submitForm:function(){this.$emit("submitForm",{ProductId:this.productId,nameInGroup:this.nameInGroup})},resetForm:function(t){this.$refs[t].resetFields()}}},_=Object(h.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-form",{staticClass:"w-full",attrs:{"label-width":"120px"}},[r("el-form-item",{attrs:{label:"Sản phẩm"}},[r("el-select",{attrs:{placeholder:"Chọn sản phẩm",filterable:"",remote:"","remote-method":t.remoteProducts},model:{value:t.productId,callback:function(e){t.productId=e},expression:"productId"}},t._l(t.optionsProductGroup,(function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"Tên trong nhóm",prop:"name"}},[r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"Tên"},model:{value:t.nameInGroup,callback:function(e){t.nameInGroup=e},expression:"nameInGroup"}})],1)],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("productForm")}}},[t._v("\n                Lưu\n            ")]),t._v(" "),r("el-button",{on:{click:function(e){return t.resetForm("productForm")}}},[t._v("\n                Làm mới\n            ")])],1)],1)],1)}),[],!1,null,null,null).exports,object=r(726);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={layout:"admin",components:{PageHeader:O.a,TableProduct:v,Pagination:y.a,ProductForm:_},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,filter,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=t.params,c={searchKey:null,page:r.page||1},filter=x(x({},c),r),l=Object(object.a)(filter),e.next=6,n.dispatch("admin/productGroup/fetch",x({ProductGroupId:o.id},l));case 6:return e.abrupt("return",{tableFilter:filter});case 7:case"end":return e.stop()}}),e)})))()},watchQuery:!0,data:function(){return{popupProduct:!1}},computed:x({},Object(c.d)("admin/productGroup",["productGroup","pagination"])),methods:{fetchProductGroup:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var filter;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:filter=Object(object.a)(x(x(x({},e.$route.query),e.tableFilter),t)),e.$router.push({query:filter});case 2:case"end":return r.stop()}}),r)})))()},updatePage:function(t){this.fetchProductGroup({page:t})},finishProductForm:function(data){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("admin/productGroup/create",{data:x(x({},data),{},{ProductGroupId:t.$route.params.id})});case 2:return e.next=4,t.$nuxt.refresh();case 4:t.popupProduct=!1;case 5:case"end":return e.stop()}}),e)})))()},actionDeleteProduct:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("admin/productGroup/delete",{ProductGroupId:e.$route.params.id,ProductId:t});case 2:return r.next=4,e.$nuxt.refresh();case 4:case"end":return r.stop()}}),r)})))()},openDialogProduct:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.popupProduct=!0;case 1:case"end":return e.stop()}}),e)})))()},updateSearchKeyproduct:function(){this.fetchProductGroup({page:null})}}},G=(r(946),Object(h.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("PageHeader",{attrs:{title:"Sản phẩm"}}),t._v(" "),r("div",{staticClass:"w-1/2"},[r("div",{staticClass:"mt-5 flex"},[r("el-input",{staticClass:"input-with-select mr-5",attrs:{placeholder:"Tìm kiếm",clearable:""},on:{clear:t.updateSearchKeyproduct},model:{value:t.tableFilter.searchKey,callback:function(e){t.$set(t.tableFilter,"searchKey",e)},expression:"tableFilter.searchKey"}}),t._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.updateSearchKeyproduct}},[t._v("\n                    Tìm kiếm\n                ")]),t._v(" "),r("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:function(e){return t.openDialogProduct()}}},[t._v("\n                    Thêm\n                ")])],1)]),t._v(" "),r("div",[r("TableProduct",{attrs:{data:t.productGroup},on:{deleteGroup:t.actionDeleteProduct}})],1),t._v(" "),r("div",[r("Pagination",{attrs:{"page-size":t.pagination.pageSize,total:t.pagination.total,"current-page":t.pagination.page},on:{changePage:t.updatePage}})],1)],1),t._v(" "),r("el-dialog",{attrs:{title:"Sản phẩm",visible:t.popupProduct,"destroy-on-close":!0},on:{"update:visible":function(e){t.popupProduct=e}}},[r("ProductForm",{on:{submitForm:t.finishProductForm}})],1)],1)}),[],!1,null,null,null));e.default=G.exports}}]);