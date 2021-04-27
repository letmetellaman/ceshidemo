<template>
  <div class="login-bg">
    <div class="login-form">
      <div class="title"></div>
      <el-form>
        <el-form-item>
          <el-input prefix-icon="el-icon-user-solid" v-model="name" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-lock"
            v-model="password"
            placeholder="请输入密码"
            @keyup.enter="onLogin()"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-row gutter="{1}">
            <el-col>
              <el-button class="login-btn" type="success" @click="onLogin()">登录</el-button>
            </el-col>
            <!-- <el-col span="{12}">
              <el-button class="login-btn" type="primary">注册</el-button>
            </el-col>-->
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import router from "../router";
import { ElMessage } from "element-plus";
export default defineComponent({
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      if (this.name.length <= 0) {
        ElMessage.warning({
          message: "账号不能为空！",
          type: "warning",
        });
        return;
      } else if (this.password.length <= 0) {
        ElMessage.warning({
          message: "密码不能为空！",
          type: "warning",
        });
        return;
      }
      ElMessage.success({
        message: "登录成功！",
        type: "success",
      });
      sessionStorage.setItem("name", "测试");
      router.replace("/list");
    },
  },
  //   setup() {
  //   },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.login-bg {
  height: 100vh;
  background: #ffd89b;
  background: -webkit-linear-gradient(to right, #19547b, #ffd89b);
  background: linear-gradient(to right, #19547b, #ffd89b);

  /* background: #232526;
     background: -webkit-linear-gradient(to right, #414345, #232526);
     background: linear-gradient(to right, #414345, #232526); */

  display: flex;
  align-items: center;
  justify-content: center;
}
.login-form {
  padding: 60px;
  width: 600px;
  margin: auto;
  /* height: 600px; */
  /* border: 4px #24C6DC solid; */
  /* border-radius: 10px; */
}
.login-btn {
  width: 100%;
}
.el-input__inner {
  height: 50px;
}
.title {
  font-weight: bold;
  text-align: center;
  font-size: 80px;
  margin-bottom: 20px;
  color: #1f1c2c;
}
</style>