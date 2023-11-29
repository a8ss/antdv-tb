import type {RouteRecordRaw} from "vue-router";
import HomeView from "@/views/HomeView.vue";

const backendRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    }
]