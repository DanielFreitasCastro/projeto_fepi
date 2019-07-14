import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import List from './pages/List'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/lista/:term',
            name: 'Lista',
            component: List
        },
        {
            path: '*',
            name: 'no-term',
            component: List
        },
    ]
})