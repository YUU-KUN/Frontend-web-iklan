import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Beranda from '../views/Beranda.vue'
import Profile from '../views/Profile.vue'
import ProdukSaya from '../views/ProdukSaya.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/produkSaya',
    name: 'produkSaya',
    component: ProdukSaya
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/',
    name: 'beranda',
    component: Beranda
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
