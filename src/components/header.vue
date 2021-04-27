<template>
  <div id="header">
    <el-dropdown style="float:right;line-height:60px;color:#ccc">
      <span class="el-dropdown-link">
        测试
        <i class="el-icon-user-solid el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="goback()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import router from "../router";
export default defineComponent({
  setup() {
    function goback() {
      sessionStorage.removeItem("name");
      router.replace("/login");
    }
    return { goback };
  },
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
#header {
  color: black;
}
</style>