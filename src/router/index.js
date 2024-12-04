import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../Pages/HomePage.vue";
import HomePageAndTest from "../Pages/HomePageAndTest.vue";

const routes = [
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/HomePageAndTest",
    name: "HomePageAndTest",
    component: HomePageAndTest,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
