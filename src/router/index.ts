import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/LoginPage.vue";
import Register from "@/views/RegisterPage.vue";
import Dasboard from "@/views/DashboardView.vue";
import AppLayout from "@/layout/AppLayout.vue";
import Performance from "@/views/PerformanceAnalytic.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/",
    component: AppLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dasboard,
      },
      {
        path: "/analytics/performance",
        name: "performance",
        component: Performance,
      },
      {
        path: "/shop/products",
        name: "products",
        component: () => import("@/views/Products.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
