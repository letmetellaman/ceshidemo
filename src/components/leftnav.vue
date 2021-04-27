<template>
  <div id="leftnav">
    <el-row class="tac">
      <el-col>
        <!-- <h5>默认颜色</h5> -->
        <el-menu default-active="1-2" style="background-color:#fff" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-2">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template #title>
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item index="2-2">设置</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
export default {
  methods: {
    //    handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
  },
};
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
#leftnav {
  height: 500px;
}
</style>