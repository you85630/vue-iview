import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const contain = () => import('views/contain')
const NotFound = () => import('views/notfound')
const user = () => import('views/user')

const vuetable = () => import('components/pages/vuetable')
const vuetable1 = () => import('components/pages/vuetable1')
const vuetable2 = () => import('components/pages/vuetable2')
const vuetable3 = () => import('components/pages/vuetable3')
const vueform = () => import('components/pages/vueform')
const vuetimeline = () => import('components/pages/vuetimeline')
const vuetooltip = () => import('components/pages/vuetooltip')
const vuesteps = () => import('components/pages/vuesteps')
const vueprogress = () => import('components/pages/vueprogress')
const vuenotice = () => import('components/pages/vuenotice')
const vuecarousel = () => import('components/pages/vuecarousel')
const vuecard = () => import('components/pages/vuecard')
const vuemodal = () => import('components/pages/vuemodal')
const vuealert = () => import('components/pages/vuealert')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/read'
    }, {
      path: '*',
      name: '404',
      component: NotFound,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/read',
      component: contain,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/read/vuetable',
          component: vuetable,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vueform',
          component: vueform,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuetable1',
          component: vuetable1,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuetable2',
          component: vuetable2,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuetable3',
          component: vuetable3,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuetimeline',
          component: vuetimeline,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuetooltip',
          component: vuetooltip,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuesteps',
          component: vuesteps,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vueprogress',
          component: vueprogress,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuenotice',
          component: vuenotice,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuecarousel',
          component: vuecarousel,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuecarousel',
          component: vuecarousel,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuecard',
          component: vuecard,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuemodal',
          component: vuemodal,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/read/vuealert',
          component: vuealert,
          meta: {
            requireAuth: true
          }
        }
      ]
    }, {
      path: '/arts',
      component: contain,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/arts/vuetable',
          component: vuetable,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/arts/vueform',
          component: vueform,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/arts/vuetable1',
          component: vuetable1,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/arts/vuetable2',
          component: vuetable2,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/arts/vuetable3',
          component: vuetable3,
          meta: {
            requireAuth: true
          }
        }
      ]
    }, {
      path: '/learn',
      component: contain,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/learn/vuetable',
          component: vuetable,
          meta: {
            requireAuth: true
          }
        }, {
          path: '/learn/vueform',
          component: vueform,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})

export default router
