import type { RouteRecordRaw } from "vue-router";
import BackendLayout from "@/components/layout/BackendLayout.vue";

const backendRoutes: RouteRecordRaw[] = [
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
];
export default backendRoutes;
