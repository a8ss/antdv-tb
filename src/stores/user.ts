import { defineStore } from "pinia";
import axios from "axios";
import { useRouter } from "vue-router";
import backendRoutes from "@/router/backend";

interface LoginResponse {
  token: "";
  username: "";
}

const useUserStore = defineStore("user", {
  state: () => ({
    Authorization: false,
  }),
  getters: {},
  actions: {
    async login(params: LoginFormState) {
      const res = await axios.post<LoginResponse>("/login", params);
      if (res.status == 200 && res.data.token != "") {
        // 添加路由
        const router = useRouter();
        for (const item of backendRoutes) router.addRoute(item);

        axios.defaults.headers["Authorization"] = "Bearer " + res.data.token;
        this.Authorization = true;
      } else {
        throw "登录失败";
      }
    },
  },
});

export default useUserStore;
