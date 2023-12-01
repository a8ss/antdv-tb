import { defineStore } from "pinia";
import axios from "axios";

interface WebSite {
  name: string;
  copyright: string;
  icp: string;
}

const useBaseStore = defineStore("base", {
  state: () => ({
    name: "",
    copyright: "",
    icp: "",
  }),
  getters: {},
  actions: {
    async loadWebSite() {
      const webSite = await axios.get<WebSite>("/website.json", {
        baseURL: "/",
      });
      this.name = webSite.data.name;
      this.copyright = webSite.data.copyright;
      this.icp = webSite.data.icp;
    },
  },
});

export default useBaseStore;
