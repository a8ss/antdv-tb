import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn.js";

import App from "./App.vue";
import router from "./router";

import "ant-design-vue/dist/reset.css";
import axios from "axios";

dayjs.locale("zh-cn");

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount("#app");

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.timeout = 9000;
// axios.interceptors.request.use();
// axios.interceptors.response.use();
