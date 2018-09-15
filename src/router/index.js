import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import UserContent from '../components/user/UserContent'
import CarContent from '../components/car/CarContent'
import AccidentContent from '../components/accident/AccidentContent'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: Index, redirect: '/user'},
    {path: '/user', component: UserContent},
    {path: '/car', component: CarContent},
    {path: '/accident', component: AccidentContent}
  ]
})
