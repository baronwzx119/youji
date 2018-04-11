import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome/Welcome'
import HelloWorld from '@/components/HelloWorld'
import login from '../components/Login/login'
import home from '../components/home/home'
import list from '../components/list/list'
import message from '../components/message/message'
import user from '../components/user/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
