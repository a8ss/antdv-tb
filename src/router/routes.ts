import type { RouteRecordRaw } from "vue-router";
import BackendLayout from "@/components/layout/BackendLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "backend",
    component: BackendLayout,
    redirect: { name: "home" },
    children: [
      {
        path: "home",
        name: "home",
        component: () => import('../views/HomeView.vue')
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/base/login.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

export default routes;
