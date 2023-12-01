import {
  createRouter,
  createWebHistory,
  type RouteRecordName,
} from "vue-router";
import routes from "@/router/routes";
import useUserStore from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

const notAuthRouteNames: RouteRecordName[] = ["login", "about"];

router.beforeEach((to, from) => {
  if (notAuthRouteNames.indexOf(to.name as string) > -1) return;

  const userStore = useUserStore();

  if (!userStore.Authorization) {
    return { name: "login" };
  }
});

export default router;
