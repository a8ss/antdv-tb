<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Menu from "@/components/layout/Menu.vue";
import Breadcrumb from "@/components/layout/Breadcrumb.vue";

const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};
</script>

<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      style="height: 100vh"
    >
      <div class="logo" />
      <Menu />
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background-color: #fff; padding: 0">
        <Header />
      </a-layout-header>

      <Breadcrumb />

      <a-layout-content
        :style="{
          background: '#fff',
          padding: '24px',
          margin: 0,
          minHeight: '280px',
        }"
      >
        <router-view v-slot="{ Component }">
          <keep-alive :max="10">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </a-layout-content>
      <!--      <a-layout-footer style="text-align: center"></a-layout-footer>-->
    </a-layout>
  </a-layout>
</template>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
