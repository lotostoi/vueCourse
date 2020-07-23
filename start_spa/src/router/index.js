
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Cart from "./../views/Cart"
import Cotalog from "./../views/Cotalog"


const routes = [
    {
        name: 'Cotalog',
        path: "/toCotalog",
        component: Cotalog
    },
    {
        name: 'Cart',
        path: "/toCart",
        component: Cart
    },
]


export default new VueRouter({
    mode: 'history',
    routes
})
