import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Demo_chat from '../components/Demo_chat.vue'
import DetailDoctor from '../views/DetailDoctor.vue'
import Demo_datepiker from '../views/demo/demo_datepicker.vue'
// import Home from '../views/Home.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path:'/detail-doctor/:id',
      name:'detailDoctor',
      component:DetailDoctor
    },
    {
      path:'/demo',
      name:'demo',
      component:Demo_chat
    },
    {
      path:'/demodate',
      name:'demodate',
      component:Demo_datepiker
    }
    

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path:'/ss',
    //   name:'home',
    //   component:'Home'
    // }
  ]
})

export default router
