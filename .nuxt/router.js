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
const _7f8b98e5 = () => interopDefault(import('../src/pages/admin/dashboard/index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _443208ee = () => interopDefault(import('../src/pages/admin/history-user/index.vue' /* webpackChunkName: "pages/admin/history-user/index" */))
const _cdb4338c = () => interopDefault(import('../src/pages/admin/order-lucky/index.vue' /* webpackChunkName: "pages/admin/order-lucky/index" */))
const _3b7f1730 = () => interopDefault(import('../src/pages/admin/user/index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _3bdd92f2 = () => interopDefault(import('../src/pages/admin/order-lucky/_id/edit.vue' /* webpackChunkName: "pages/admin/order-lucky/_id/edit" */))
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
    path: "/admin/dashboard",
    component: _7f8b98e5,
    name: "admin-dashboard"
  }, {
    path: "/admin/history-user",
    component: _443208ee,
    name: "admin-history-user"
  }, {
    path: "/admin/order-lucky",
    component: _cdb4338c,
    name: "admin-order-lucky"
  }, {
    path: "/admin/user",
    component: _3b7f1730,
    name: "admin-user"
  }, {
    path: "/admin/order-lucky/:id?/edit",
    component: _3bdd92f2,
    name: "admin-order-lucky-id-edit"
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
