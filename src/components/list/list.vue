<template>
  <el-container>
    <el-header>
      <headers />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <leftnav />
      </el-aside>
      <el-main>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="order_number" label="订单编号" width></el-table-column>
          <el-table-column prop="customer_name" label="客户名称" width></el-table-column>
          <el-table-column prop="pay_type" label="支付方式"></el-table-column>
          <el-table-column prop="order_time" label="下单时间"></el-table-column>
          <el-table-column prop="order_rice" label="订单金额"></el-table-column>
          <el-table-column prop="pay_state" label="支付状态"></el-table-column>
          <el-table-column prop="goods_state" label="发货状态"></el-table-column>
        </el-table>
        <input type="week" />
        <input type="date" />
        <input type="color" v-model="color" @change="changecolor()" />
        <input type="button" value="queding" @click="handleLogin()" />
        <input type="button" value="mock" @click="mocks()" />
        <a href="mailto: 942840260@qq.com">点击邮箱</a>
        {{count}}
        <!-- <input type="button" value="queding" @click="renderTableList()" /> -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import headers from "@/components/header.vue";
import leftnav from "@/components/leftnav.vue";
import { useRouter } from "vue-router";
import { UserService } from "@/api/index";
import axios from "axios";
// import mock from "@/mock/index.js";

// const renderTableList = async () => {
//   const d = await getTableList({ page: 1, size: 2, tag: "所有" });
//   console.log(d);
// };
// const Newsindex = async () => {
//   const d = await getNewsindex({ page: 1, size: 2, tag: "所有" });
//   console.log(d);
// };
// renderTableList();
// Newsindex();
export default defineComponent({
  data() {
    return {
      tableData: [
        {
          order_number: "1",
          customer_name: "1",
          pay_type: "1",
          order_time: "1",
          order_rice: "1",
          pay_state: "1",
          goods_state: "1",
        },
      ],
      color: "",
      listLoading: true,
      list: "",
      total: "123",
    };
  },
  methods: {
    changecolor() {
      async () => {
        const loginParams = {
          username: this.total,
          password: "777",
        };
        const res = await UserService.login(loginParams);
        console.log(res);
      };

      return {};
    },
    mocks() {
      fetch("/api/getUsers")
        .then((res) => {
          res.json();
          console.log(res);
        })
        .then((data) => console.log(data));
    },
  },
  components: {
    leftnav,
    headers,
  },
  setup() {
    const count = ref(0);
    const router = useRouter();
    const handleLogin = async () => {
      const loginParams = {
        username: "12",
        password: "777",
      };
      const res = await UserService.login(loginParams);
      console.log(res);
    };

    return { count, handleLogin };
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
</style>