import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    name: 'Home',
    component: Home,
    meta:{
    requiresAuth: true
    },
    children:[
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          requiresAuth: true
        } 
      },
    ]
  },
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      guest: true
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
