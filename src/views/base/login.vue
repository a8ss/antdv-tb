<script setup lang="ts">
import { onBeforeMount, reactive } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import useBaseStore from "@/stores/base";
import useUserStore from "@/stores/user";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const baseStore = useBaseStore();
const userStore = useUserStore();

onBeforeMount(() => {
  if (userStore.Authorization) {
    const router = useRouter();
    router.push({ name: "home" });
    return;
  }
  baseStore.loadWebSite();
});

const formState = reactive<LoginFormState>({
  username: "",
  password: "",
  remember: true,
});

const onFinish = (values: any) => {
  userStore.login(values).catch((msg) => {
    console.log(msg)
    message.error(msg);
  });
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <div class="main">
    <div class="header">
      <div class="title">{{ baseStore.name }}</div>
      <div class="desc"></div>
    </div>
    <div class="form">
      <a-form
        :model="formState"
        name="basic"
        :wrapper-col="{ span: 24 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item name="username" :rules="[{ required: true, message: '' }]">
          <a-input
            v-model:value="formState.username"
            size="large"
            placeholder="账户：手机号码、邮箱"
          >
            <template #prefix>
              <user-outlined style="color: #1677ff;" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: '' }]">
          <a-input-password
            v-model:value="formState.password"
            size="large"
            placeholder="密码：请输入密码"
          >
            <template #prefix>
              <LockOutlined style="color: #1677ff;" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button
            type="primary"
            size="large"
            html-type="submit"
            style="width: 100%"
            >确定
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-width: 368px;
  width: 20%;
  margin: 0 auto;
  padding-top: 10vh;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 33px;
}

.desc {
  color: rgba(0, 0, 0, 0.88);
}
</style>
