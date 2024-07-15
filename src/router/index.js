import { createRouter, createWebHistory } from 'vue-router';

import Menu from '../Pages/Menu.vue';

const routes = [
  {
  path: '/',
  name: 'menu',
  component: Menu
},
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



export default router;
