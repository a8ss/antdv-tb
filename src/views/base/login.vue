<script setup lang="ts">
import { reactive } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <div class="main">
    <div class="header">
      <div class="title">antdv-tb</div>
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
              <user-outlined />
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
              <LockOutlined />
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
