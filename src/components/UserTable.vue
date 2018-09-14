<template>
  <div>
    <el-table :data="users" height="300" border style="width: 100%" ref="user-table">
      <el-table-column label="编号" prop="id" sortable width="180"></el-table-column>
      <el-table-column label="姓名" prop="name" sortable width="180"></el-table-column>
      <el-table-column label="电话" prop="phone" sortable width="180"></el-table-column>
      <el-table-column label="驾驶证号" prop="driverLicense" sortable width="180"></el-table-column>
      <el-table-column label="住址" prop="address" sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="editUser(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handelDeleteUser(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination layout="prev, pager, next" v-on:current-change="changePage"
                   :page-size="5" :pager-count="10"
                   :total="total" :current-page.sync="pageNum">
    </el-pagination>
  </div>
</template>

<script>
  import Bus from '../eventBus.js'

  export default {
    name: "UserTable",
    data() {
      return {
        users: [],
        params: {},
        pageNum: 0,
        total: 0,
      }
    },
    mounted() {
      this.getUsers();
      Bus.$on('userQueryEvent', (data) => {
        this.users = data.result;
        this.pageNum = data.pageNum + 1;
        this.total = data.total;
      });
    },
    methods: {
      getUsers() {
        this.$axios.get("/api/user/list", {
          params: this.params
        }).then((res) => {
          console.log(res);
          const data = res.data;
          this.users = data.result;
          this.pageNum = data.pageNum + 1;
          this.total = data.total;
        })
          .catch((res) => {
            console.log(res);
          })
      },
      changePage(pageNum) {
        this.params.pageNum = pageNum - 1;
        this.getUsers()
      },
      editUser() {

      },
      handelDeleteUser() {

      }
    }
  }
</script>


