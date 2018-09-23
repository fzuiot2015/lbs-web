import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import UserContent from '../components/user/UserContent'
import CarContent from '../components/car/CarContent'
import AccidentContent from '../components/accident/AccidentContent'
import InsuranceContent from "../components/insurance/InsuranceContent"
import RuleContent from "../components/rule/RuleContent"
import Login from '../components/Login'
import store from '../assets/js/storage'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta: {Login: true},
      children: [
        {
          path: '/',
          redirect: '/user',
          meta: {Login: true},
        },
        {
          path: '/user',
          component: UserContent,
          meta: {Login: true}
        },
        {
          path: '/car/',
          component: CarContent,
          meta: {Login: true}
        },
        {
          path: '/accident',
          component: AccidentContent,
          meta: {Login: true}
        },
        {
          path: '/insurance',
          component: InsuranceContent,
          meta: {Login: true}
        },
        {
          path: '/rule',
          component: RuleContent,
          meta: {Login: true}
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.Login) {
    if (store.get('login_token') === '12345') {
      next();
    } else {
      next({path: '/login'})
    }
  } else {
    next();
  }
});

export default router;
