import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Index'
import UserContent from '../view/user/UserContent'
import CarContent from '../view/car/CarContent'
import AccidentContent from '../view/accident/AccidentContent'
import InsuranceContent from "../view/insurance/InsuranceContent"
import Login from '../view/Login'
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
    if (store.get('login_token') === null) {
      next({path: '/login'});
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
