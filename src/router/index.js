import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import SessionComponent from '@/components/SessionComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/session/new',
      name: 'SessionComponent',
      component: SessionComponent
    },
    {
      path: '/default/edit',
      name: 'SessionView',
      component: HelloWorld
    }
  ]
})
