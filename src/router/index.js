import Vue from 'vue'
import VueRouter from 'vue-router'
import MidasManifest from '../views/MidasManifest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/MidasManifest',
    name: 'MidasManifest',
    component: MidasManifest,
    meta:{
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((/*to, from, next*/) => {
//   // debugger
//   // console.log(to)
//   // console.log(from)
//   // console.log(next)
//   // const publicPages = ["/login", "/register"];
//   // const authRequired = !publicPages.includes(to.path);
//   // // const loggedIn = localStorage
//   // if(authRequired){
//   //   return next("/login")
//   // }
//   // next();
// })
export default router
