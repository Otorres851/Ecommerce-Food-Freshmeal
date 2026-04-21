import { createRouter, createWebHistory } from "vue-router";

// Views
import AboutView from "@/views/about/AboutView.vue";
import HomeView from "@/views/home/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
