import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../src/layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_cookieuniversalnuxt_65d3434a from 'nuxt_plugin_cookieuniversalnuxt_65d3434a' // Source: ./cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_pluginclient_18cd69ce from 'nuxt_plugin_pluginclient_18cd69ce' // Source: ./content/plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_5952bca1 from 'nuxt_plugin_pluginserver_5952bca1' // Source: ./content/plugin.server.js (mode: 'server')
import nuxt_plugin_workbox_1b20990f from 'nuxt_plugin_workbox_1b20990f' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_52d36122 from 'nuxt_plugin_metaplugin_52d36122' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_axios_5242f69a from 'nuxt_plugin_axios_5242f69a' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_recaptcha_592381a2 from 'nuxt_plugin_recaptcha_592381a2' // Source: ./recaptcha.js (mode: 'all')
import nuxt_plugin_fontawesome_581cc5b5 from 'nuxt_plugin_fontawesome_581cc5b5' // Source: ./fontawesome.js (mode: 'all')
import nuxt_plugin_googleanalytics_20a4f593 from 'nuxt_plugin_googleanalytics_20a4f593' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_constants_f13b644a from 'nuxt_plugin_constants_f13b644a' // Source: ../src/plugins/constants (mode: 'all')
import nuxt_plugin_elementui_d905880e from 'nuxt_plugin_elementui_d905880e' // Source: ../src/plugins/element-ui (mode: 'all')
import nuxt_plugin_filters_2abc1387 from 'nuxt_plugin_filters_2abc1387' // Source: ../src/plugins/filters (mode: 'all')
import nuxt_plugin_validation_0214b1bc from 'nuxt_plugin_validation_0214b1bc' // Source: ../src/plugins/mixins/validation (mode: 'all')
import nuxt_plugin_user_2e108598 from 'nuxt_plugin_user_2e108598' // Source: ../src/plugins/mixins/user (mode: 'all')
import nuxt_plugin_axios_2228ef02 from 'nuxt_plugin_axios_2228ef02' // Source: ../src/plugins/axios (mode: 'all')
import nuxt_plugin_rating_95d2f874 from 'nuxt_plugin_rating_95d2f874' // Source: ../src/plugins/rating.js (mode: 'client')
import nuxt_plugin_persistedState_3bffb2e5 from 'nuxt_plugin_persistedState_3bffb2e5' // Source: ../src/plugins/persistedState.js (mode: 'all')
import nuxt_plugin_auth_6ecf7bc6 from 'nuxt_plugin_auth_6ecf7bc6' // Source: ./auth.js (mode: 'all')
import nuxt_plugin_auth_55a16724 from 'nuxt_plugin_auth_55a16724' // Source: ../src/plugins/auth (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"en"},"title":"Lucky Admin","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"name":"application-name","content":"Lucky"},{"property":"og:site_name","content":"Lucky"},{"hid":"description","name":"description","content":"Camel"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:title","property":"og:title","content":"Lucky Admin"},{"hid":"og:description","name":"og:description","content":"Camel"},{"hid":"og:image","property":"og:image","content":"http:\u002F\u002Fweb.lc:8000\u002F\u002Fog-facebook-3.png"},{"hid":"twitter:title","name":"twitter:title","content":"Lucky Admin"},{"hid":"twitter:card","name":"twitter:card","content":"summary"},{"name":"google-site-verification","content":"RKTOz1S8uxhAZHqaOsf6cSvT_pqnPHEyAnlTnlLiiok"},{"name":"msapplication-TileColor","content":"#FFFFFF"},{"name":"msapplication-TileImage","content":"\u002Fmstile-144x144.png"},{"name":"msapplication-square70x70logo","content":"\u002Fmstile-70x70.png"},{"name":"msapplication-square150x150logo","content":"\u002Fmstile-150x150.png"},{"name":"msapplication-wide310x150logo","content":"\u002Fmstile-310x150.png"},{"name":"msapplication-square310x310logo","content":"\u002Fmstile-310x310.png"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"ls"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"ls"}],"link":[{"rel":"alternate","type":"application\u002Frss+xml","name":"Camel RSS Feed","href":"\u002Frss"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:400,400i,700,700i|Open+Sans:400,400i,700,700i&subset=vietnamese"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.15.2\u002Fcss\u002Fall.css","integrity":"sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu","crossorigin":"anonymous"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002FCamel AdminCamel Admin"},{"rel":"apple-touch-icon-precomposed","sizes":"57x57","href":"\u002Fapple-touch-icon-57x57.png"},{"rel":"apple-touch-icon-precomposed","sizes":"114x114","href":"\u002Fapple-touch-icon-114x114.png"},{"rel":"apple-touch-icon-precomposed","sizes":"72x72","href":"\u002Fapple-touch-icon-72x72.png"},{"rel":"apple-touch-icon-precomposed","sizes":"144x144","href":"\u002Fapple-touch-icon-144x144.png"},{"rel":"apple-touch-icon-precomposed","sizes":"60x60","href":"\u002Fapple-touch-icon-60x60.png"},{"rel":"apple-touch-icon-precomposed","sizes":"120x120","href":"\u002Fapple-touch-icon-120x120.png"},{"rel":"apple-touch-icon-precomposed","sizes":"76x76","href":"\u002Fapple-touch-icon-76x76.png"},{"rel":"apple-touch-icon-precomposed","sizes":"152x152","href":"\u002Fapple-touch-icon-152x152.png"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-196x196.png","sizes":"196x196"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-96x96.png","sizes":"96x96"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-32x32.png","sizes":"32x32"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-16x16.png","sizes":"16x16"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicon-128.png","sizes":"128x128"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.fa49f2ad.json","hid":"manifest"}],"script":[{"type":"module","src":"\u002Fjs\u002Fscript.js","body":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_cookieuniversalnuxt_65d3434a === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_65d3434a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_18cd69ce === 'function') {
    await nuxt_plugin_pluginclient_18cd69ce(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_5952bca1 === 'function') {
    await nuxt_plugin_pluginserver_5952bca1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_1b20990f === 'function') {
    await nuxt_plugin_workbox_1b20990f(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_52d36122 === 'function') {
    await nuxt_plugin_metaplugin_52d36122(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5242f69a === 'function') {
    await nuxt_plugin_axios_5242f69a(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_592381a2 === 'function') {
    await nuxt_plugin_recaptcha_592381a2(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_581cc5b5 === 'function') {
    await nuxt_plugin_fontawesome_581cc5b5(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_20a4f593 === 'function') {
    await nuxt_plugin_googleanalytics_20a4f593(app.context, inject)
  }

  if (typeof nuxt_plugin_constants_f13b644a === 'function') {
    await nuxt_plugin_constants_f13b644a(app.context, inject)
  }

  if (typeof nuxt_plugin_elementui_d905880e === 'function') {
    await nuxt_plugin_elementui_d905880e(app.context, inject)
  }

  if (typeof nuxt_plugin_filters_2abc1387 === 'function') {
    await nuxt_plugin_filters_2abc1387(app.context, inject)
  }

  if (typeof nuxt_plugin_validation_0214b1bc === 'function') {
    await nuxt_plugin_validation_0214b1bc(app.context, inject)
  }

  if (typeof nuxt_plugin_user_2e108598 === 'function') {
    await nuxt_plugin_user_2e108598(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_2228ef02 === 'function') {
    await nuxt_plugin_axios_2228ef02(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_rating_95d2f874 === 'function') {
    await nuxt_plugin_rating_95d2f874(app.context, inject)
  }

  if (typeof nuxt_plugin_persistedState_3bffb2e5 === 'function') {
    await nuxt_plugin_persistedState_3bffb2e5(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_6ecf7bc6 === 'function') {
    await nuxt_plugin_auth_6ecf7bc6(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_55a16724 === 'function') {
    await nuxt_plugin_auth_55a16724(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
