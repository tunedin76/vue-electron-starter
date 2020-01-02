import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/About.vue'
import Help from '../views/Help.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'

Vue.use( Router )

const router = new Router( {
  routes: [
    {},
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',

      meta: {
        title: 'Home',
        icon: 'fa-home',
      },
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About',
        icon: 'fa-info-circle',
      },
      component: About,
    },
    {
      path: '/help',
      name: 'help',
      meta: {
        title: 'Help',
        icon: 'fa-info-circle',
      },
      component: Help,
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        title: 'Profile',
        icon: 'fa-profile',
      },
      component: Profile,
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login',
        icon: 'fa-monitor',
      },
      component: Login,
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
} )

// dynamically set application title to current view
router.afterEach( to => {
  let title =
    to.path === '/home'
      ? process.env.PRODUCT_NAME
      : `${to.meta.title} - ${process.env.PRODUCT_NAME}`

  if ( !title ) {
    title = 'Home'
  }

  document.title = title
} )

export default router
