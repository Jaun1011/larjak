import Vue from 'vue'
import Router from 'vue-router'
import CockpitComponent from '@/components/CockpitComponent'
import SessionComponent from '@/components/SessionComponent'
import DefaultSessionComponent from '@/components/DefaultSessionComponent'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Cockpit',
            component: CockpitComponent
        },
        {
            path: '/new',
            name: 'SessionComponent',
            component: SessionComponent
        },
        {
            path: '/default',
            name: 'DefaultSession',
            component: DefaultSessionComponent
        }
    ]
})
