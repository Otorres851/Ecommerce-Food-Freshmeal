import { createRouter, createWebHistory } from "vue-router";

// Views
import AboutView from "@/views/about/AboutView.vue";
import HomeView from "@/views/home/HomeView.vue";
import ProductsView from "@/views/products/ProductsView.vue";

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
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
