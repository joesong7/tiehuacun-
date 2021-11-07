import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Program from '../views/Program.vue'
import Bazaar from '../views/Bazaar.vue'
import Article from '../views/Article.vue'
import Package from '../views/Package.vue'
import PackageContent from '../views/PackageContent.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
   
  },
  {
    path: '/program',
    name: 'Program ',
    component: Program,
  },
  {
    path: '/bazaar',
    name: 'Bazaar',
    component: Bazaar,
    props:true
  },
  {
    path:'/article',
    name:'Article',
    component:Article,
    props:true
  },
  {
    path:'/package',
    name:'Package',
    component:Package,
    props:true
  },
  {
    path:'/packageContent',
    name:'PackageContent',
    component:PackageContent,
    props:true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
