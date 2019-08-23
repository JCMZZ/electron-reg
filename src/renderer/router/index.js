import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/pages/home/home').default
    },
    {
      path: '/startup',
      name: 'startup',
      component: require('@/pages/startup/startup').default,
      meta: {start: true}
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/pages/login/login').default,
      meta: {start: true}
    },
    {
      path: '/register',
      name: 'register',
      component: require('@/pages/register/register').default,
      meta: {start: true}
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
