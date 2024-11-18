import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../Pages/HomePage.vue";

const routes = [
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
