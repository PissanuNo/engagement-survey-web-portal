import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../Pages/HomePage.vue';
import Login from '../Pages/Login.vue';


const routes = [
  {
  path: '/HomePage',
  name: 'HomePage',
  component: HomePage
},
{
path: '/Login',
name: 'Login',
component: Login
},

];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



export default router;
