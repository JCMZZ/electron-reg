import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/LandingPage/LandingPage').default
    },
    {
      path: '/startup',
      name: 'startup',
      component: require('@/pages/startup/startup').default,
      meta: {start: true}
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
