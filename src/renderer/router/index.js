import Vue from 'vue'
import Router from 'vue-router'
/* 处理menu router-link */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'home-page',
      component: require('@/pages/home/home').default
    },
    {
      path: '/',
      redirect: '/index'
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
      path: '/particulars',
      name: 'particulars',
      component: require('@/pages/user/particulars').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
