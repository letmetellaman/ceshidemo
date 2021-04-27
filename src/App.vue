<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import list from "./components/list.vue";
import leftnav from "./components/leftnav.vue";

export default {
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
* {
  margin: 0;
  padding: 0;
}
.el-header,
.el-footer {
  background-color: #3f3f3f;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #3f3f3f;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
