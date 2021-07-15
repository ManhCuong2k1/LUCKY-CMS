import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4858be20 = () => interopDefault(import('../src/pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _4a3519ee = () => interopDefault(import('../src/pages/forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _4c8c7f12 = () => interopDefault(import('../src/pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6efe435c = () => interopDefault(import('../src/pages/login-trans.vue' /* webpackChunkName: "pages/login-trans" */))
const _95151df6 = () => interopDefault(import('../src/pages/register.vue' /* webpackChunkName: "pages/register" */))
const _62c5fd8a = () => interopDefault(import('../src/pages/reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _05204ad1 = () => interopDefault(import('../src/pages/admin/banner/index.vue' /* webpackChunkName: "pages/admin/banner/index" */))
const _17832fa3 = () => interopDefault(import('../src/pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _e31b8660 = () => interopDefault(import('../src/pages/admin/city/index.vue' /* webpackChunkName: "pages/admin/city/index" */))
const _e7b99f20 = () => interopDefault(import('../src/pages/admin/comment/index.vue' /* webpackChunkName: "pages/admin/comment/index" */))
const _7f8b98e5 = () => interopDefault(import('../src/pages/admin/dashboard/index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _8b7c7610 = () => interopDefault(import('../src/pages/admin/distributor/index.vue' /* webpackChunkName: "pages/admin/distributor/index" */))
const _e82d5428 = () => interopDefault(import('../src/pages/admin/image/index.vue' /* webpackChunkName: "pages/admin/image/index" */))
const _22a68c38 = () => interopDefault(import('../src/pages/admin/news/index.vue' /* webpackChunkName: "pages/admin/news/index" */))
const _3e8ca2ae = () => interopDefault(import('../src/pages/admin/notify/index.vue' /* webpackChunkName: "pages/admin/notify/index" */))
const _cdb4338c = () => interopDefault(import('../src/pages/admin/order-lucky/index.vue' /* webpackChunkName: "pages/admin/order-lucky/index" */))
const _1a284296 = () => interopDefault(import('../src/pages/admin/order-producer/index.vue' /* webpackChunkName: "pages/admin/order-producer/index" */))
const _935f9cea = () => interopDefault(import('../src/pages/admin/order-sale/index.vue' /* webpackChunkName: "pages/admin/order-sale/index" */))
const _41804791 = () => interopDefault(import('../src/pages/admin/point-of-sale/index.vue' /* webpackChunkName: "pages/admin/point-of-sale/index" */))
const _c01bca00 = () => interopDefault(import('../src/pages/admin/product/index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _3a9e019c = () => interopDefault(import('../src/pages/admin/product-group/index.vue' /* webpackChunkName: "pages/admin/product-group/index" */))
const _7dd5a434 = () => interopDefault(import('../src/pages/admin/promotion/index.vue' /* webpackChunkName: "pages/admin/promotion/index" */))
const _d8e451be = () => interopDefault(import('../src/pages/admin/setting/index.vue' /* webpackChunkName: "pages/admin/setting/index" */))
const _76614c2c = () => interopDefault(import('../src/pages/admin/sms/index.vue' /* webpackChunkName: "pages/admin/sms/index" */))
const _9f460832 = () => interopDefault(import('../src/pages/admin/transporter/index.vue' /* webpackChunkName: "pages/admin/transporter/index" */))
const _3b7f1730 = () => interopDefault(import('../src/pages/admin/user/index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _00970f7b = () => interopDefault(import('../src/pages/admin/category/create.vue' /* webpackChunkName: "pages/admin/category/create" */))
const _94a9b674 = () => interopDefault(import('../src/pages/admin/distributor/create.vue' /* webpackChunkName: "pages/admin/distributor/create" */))
const _59df4586 = () => interopDefault(import('../src/pages/admin/news/create.vue' /* webpackChunkName: "pages/admin/news/create" */))
const _8a880460 = () => interopDefault(import('../src/pages/admin/notify/create.vue' /* webpackChunkName: "pages/admin/notify/create" */))
const _52945ae8 = () => interopDefault(import('../src/pages/admin/order-producer/create.vue' /* webpackChunkName: "pages/admin/order-producer/create" */))
const _3b6a4a93 = () => interopDefault(import('../src/pages/admin/order-sale/create.vue' /* webpackChunkName: "pages/admin/order-sale/create" */))
const _163cf54d = () => interopDefault(import('../src/pages/admin/point-of-sale/create.vue' /* webpackChunkName: "pages/admin/point-of-sale/create" */))
const _c9b99c68 = () => interopDefault(import('../src/pages/admin/product-group/create.vue' /* webpackChunkName: "pages/admin/product-group/create" */))
const _f3f4e084 = () => interopDefault(import('../src/pages/admin/product/create.vue' /* webpackChunkName: "pages/admin/product/create" */))
const _64932d0a = () => interopDefault(import('../src/pages/admin/promotion/create.vue' /* webpackChunkName: "pages/admin/promotion/create" */))
const _6a65d13b = () => interopDefault(import('../src/pages/admin/report/product-sold.vue' /* webpackChunkName: "pages/admin/report/product-sold" */))
const _94b3853a = () => interopDefault(import('../src/pages/admin/report/revenue.vue' /* webpackChunkName: "pages/admin/report/revenue" */))
const _065fa3d8 = () => interopDefault(import('../src/pages/admin/sms/create.vue' /* webpackChunkName: "pages/admin/sms/create" */))
const _fa126892 = () => interopDefault(import('../src/pages/admin/transporter/create.vue' /* webpackChunkName: "pages/admin/transporter/create" */))
const _0bf3087e = () => interopDefault(import('../src/pages/admin/category/_id/edit.vue' /* webpackChunkName: "pages/admin/category/_id/edit" */))
const _1fc4538e = () => interopDefault(import('../src/pages/admin/city/_id/districts.vue' /* webpackChunkName: "pages/admin/city/_id/districts" */))
const _223dc892 = () => interopDefault(import('../src/pages/admin/city/_id/edit-city.vue' /* webpackChunkName: "pages/admin/city/_id/edit-city" */))
const _589f8ede = () => interopDefault(import('../src/pages/admin/comment/_id/edit.vue' /* webpackChunkName: "pages/admin/comment/_id/edit" */))
const _675211ee = () => interopDefault(import('../src/pages/admin/distributor/_id/edit.vue' /* webpackChunkName: "pages/admin/distributor/_id/edit" */))
const _3405e7c9 = () => interopDefault(import('../src/pages/admin/news/_id/edit.vue' /* webpackChunkName: "pages/admin/news/_id/edit" */))
const _5ed494da = () => interopDefault(import('../src/pages/admin/notify/_id/edit.vue' /* webpackChunkName: "pages/admin/notify/_id/edit" */))
const _3bdd92f2 = () => interopDefault(import('../src/pages/admin/order-lucky/_id/edit.vue' /* webpackChunkName: "pages/admin/order-lucky/_id/edit" */))
const _5869a6aa = () => interopDefault(import('../src/pages/admin/order-producer/_id/edit.vue' /* webpackChunkName: "pages/admin/order-producer/_id/edit" */))
const _423844d4 = () => interopDefault(import('../src/pages/admin/order-sale/_id/edit.vue' /* webpackChunkName: "pages/admin/order-sale/_id/edit" */))
const _4fb6c1d0 = () => interopDefault(import('../src/pages/admin/point-of-sale/_id/edit.vue' /* webpackChunkName: "pages/admin/point-of-sale/_id/edit" */))
const _33ffda8f = () => interopDefault(import('../src/pages/admin/product-group/_id/edit.vue' /* webpackChunkName: "pages/admin/product-group/_id/edit" */))
const _17087b2e = () => interopDefault(import('../src/pages/admin/product-group/_id/products.vue' /* webpackChunkName: "pages/admin/product-group/_id/products" */))
const _207af7fe = () => interopDefault(import('../src/pages/admin/product/_id/edit.vue' /* webpackChunkName: "pages/admin/product/_id/edit" */))
const _615dfe4d = () => interopDefault(import('../src/pages/admin/promotion/_id/edit.vue' /* webpackChunkName: "pages/admin/promotion/_id/edit" */))
const _3a85d727 = () => interopDefault(import('../src/pages/admin/promotion/_id/products.vue' /* webpackChunkName: "pages/admin/promotion/_id/products" */))
const _43423652 = () => interopDefault(import('../src/pages/admin/sms/_id/edit.vue' /* webpackChunkName: "pages/admin/sms/_id/edit" */))
const _7554a5ba = () => interopDefault(import('../src/pages/admin/transporter/_id/edit.vue' /* webpackChunkName: "pages/admin/transporter/_id/edit" */))
const _0da16836 = () => interopDefault(import('../src/pages/admin/user/_username/edit.vue' /* webpackChunkName: "pages/admin/user/_username/edit" */))
const _10121d60 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _4858be20,
    name: "admin"
  }, {
    path: "/forget-password",
    component: _4a3519ee,
    name: "forget-password"
  }, {
    path: "/login",
    component: _4c8c7f12,
    name: "login"
  }, {
    path: "/login-trans",
    component: _6efe435c,
    name: "login-trans"
  }, {
    path: "/register",
    component: _95151df6,
    name: "register"
  }, {
    path: "/reset-password",
    component: _62c5fd8a,
    name: "reset-password"
  }, {
    path: "/admin/banner",
    component: _05204ad1,
    name: "admin-banner"
  }, {
    path: "/admin/category",
    component: _17832fa3,
    name: "admin-category"
  }, {
    path: "/admin/city",
    component: _e31b8660,
    name: "admin-city"
  }, {
    path: "/admin/comment",
    component: _e7b99f20,
    name: "admin-comment"
  }, {
    path: "/admin/dashboard",
    component: _7f8b98e5,
    name: "admin-dashboard"
  }, {
    path: "/admin/distributor",
    component: _8b7c7610,
    name: "admin-distributor"
  }, {
    path: "/admin/image",
    component: _e82d5428,
    name: "admin-image"
  }, {
    path: "/admin/news",
    component: _22a68c38,
    name: "admin-news"
  }, {
    path: "/admin/notify",
    component: _3e8ca2ae,
    name: "admin-notify"
  }, {
    path: "/admin/order-lucky",
    component: _cdb4338c,
    name: "admin-order-lucky"
  }, {
    path: "/admin/order-producer",
    component: _1a284296,
    name: "admin-order-producer"
  }, {
    path: "/admin/order-sale",
    component: _935f9cea,
    name: "admin-order-sale"
  }, {
    path: "/admin/point-of-sale",
    component: _41804791,
    name: "admin-point-of-sale"
  }, {
    path: "/admin/product",
    component: _c01bca00,
    name: "admin-product"
  }, {
    path: "/admin/product-group",
    component: _3a9e019c,
    name: "admin-product-group"
  }, {
    path: "/admin/promotion",
    component: _7dd5a434,
    name: "admin-promotion"
  }, {
    path: "/admin/setting",
    component: _d8e451be,
    name: "admin-setting"
  }, {
    path: "/admin/sms",
    component: _76614c2c,
    name: "admin-sms"
  }, {
    path: "/admin/transporter",
    component: _9f460832,
    name: "admin-transporter"
  }, {
    path: "/admin/user",
    component: _3b7f1730,
    name: "admin-user"
  }, {
    path: "/admin/category/create",
    component: _00970f7b,
    name: "admin-category-create"
  }, {
    path: "/admin/distributor/create",
    component: _94a9b674,
    name: "admin-distributor-create"
  }, {
    path: "/admin/news/create",
    component: _59df4586,
    name: "admin-news-create"
  }, {
    path: "/admin/notify/create",
    component: _8a880460,
    name: "admin-notify-create"
  }, {
    path: "/admin/order-producer/create",
    component: _52945ae8,
    name: "admin-order-producer-create"
  }, {
    path: "/admin/order-sale/create",
    component: _3b6a4a93,
    name: "admin-order-sale-create"
  }, {
    path: "/admin/point-of-sale/create",
    component: _163cf54d,
    name: "admin-point-of-sale-create"
  }, {
    path: "/admin/product-group/create",
    component: _c9b99c68,
    name: "admin-product-group-create"
  }, {
    path: "/admin/product/create",
    component: _f3f4e084,
    name: "admin-product-create"
  }, {
    path: "/admin/promotion/create",
    component: _64932d0a,
    name: "admin-promotion-create"
  }, {
    path: "/admin/report/product-sold",
    component: _6a65d13b,
    name: "admin-report-product-sold"
  }, {
    path: "/admin/report/revenue",
    component: _94b3853a,
    name: "admin-report-revenue"
  }, {
    path: "/admin/sms/create",
    component: _065fa3d8,
    name: "admin-sms-create"
  }, {
    path: "/admin/transporter/create",
    component: _fa126892,
    name: "admin-transporter-create"
  }, {
    path: "/admin/category/:id/edit",
    component: _0bf3087e,
    name: "admin-category-id-edit"
  }, {
    path: "/admin/city/:id/districts",
    component: _1fc4538e,
    name: "admin-city-id-districts"
  }, {
    path: "/admin/city/:id/edit-city",
    component: _223dc892,
    name: "admin-city-id-edit-city"
  }, {
    path: "/admin/comment/:id/edit",
    component: _589f8ede,
    name: "admin-comment-id-edit"
  }, {
    path: "/admin/distributor/:id/edit",
    component: _675211ee,
    name: "admin-distributor-id-edit"
  }, {
    path: "/admin/news/:id/edit",
    component: _3405e7c9,
    name: "admin-news-id-edit"
  }, {
    path: "/admin/notify/:id/edit",
    component: _5ed494da,
    name: "admin-notify-id-edit"
  }, {
    path: "/admin/order-lucky/:id?/edit",
    component: _3bdd92f2,
    name: "admin-order-lucky-id-edit"
  }, {
    path: "/admin/order-producer/:id?/edit",
    component: _5869a6aa,
    name: "admin-order-producer-id-edit"
  }, {
    path: "/admin/order-sale/:id?/edit",
    component: _423844d4,
    name: "admin-order-sale-id-edit"
  }, {
    path: "/admin/point-of-sale/:id?/edit",
    component: _4fb6c1d0,
    name: "admin-point-of-sale-id-edit"
  }, {
    path: "/admin/product-group/:id/edit",
    component: _33ffda8f,
    name: "admin-product-group-id-edit"
  }, {
    path: "/admin/product-group/:id/products",
    component: _17087b2e,
    name: "admin-product-group-id-products"
  }, {
    path: "/admin/product/:id/edit",
    component: _207af7fe,
    name: "admin-product-id-edit"
  }, {
    path: "/admin/promotion/:id/edit",
    component: _615dfe4d,
    name: "admin-promotion-id-edit"
  }, {
    path: "/admin/promotion/:id/products",
    component: _3a85d727,
    name: "admin-promotion-id-products"
  }, {
    path: "/admin/sms/:id/edit",
    component: _43423652,
    name: "admin-sms-id-edit"
  }, {
    path: "/admin/transporter/:id/edit",
    component: _7554a5ba,
    name: "admin-transporter-id-edit"
  }, {
    path: "/admin/user/:username/edit",
    component: _0da16836,
    name: "admin-user-username-edit"
  }, {
    path: "/",
    component: _10121d60,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
