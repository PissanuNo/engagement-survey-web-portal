import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Pages/Login.vue';
import Error from '../Pages/Error.vue';




const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login,
  },

  {
    path: '/error',
    name: 'error',
    component: Error,
    props: (route) => ({ error_status: route.query.error_status, error_message: route.query.error_message}),
    beforeEnter: (to, from, next) => {
      const defaultStatus = '404-Page not found';
      const defaultMessage = 'The page you are looking for might have been removed ';
      if ((to.query.error_status && to.query.error_message) || 
          (to.query.error_status === defaultStatus && to.query.error_message === defaultMessage)) {
        next();
      } else {
        next({ path: '/error', query: { error_status: defaultStatus, error_message: defaultMessage } });
      }
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'error'
  }
];

const public_path = ['login', 'error'];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('isAuthenticated') === 'false' && !public_path.includes(to.name)) {
    next({ name: 'login' }); 
  } else {
    next(); 
  }
});

export default router;
