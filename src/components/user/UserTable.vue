<template>
  <div>
    <el-table :data="users" height="400" border style="width: 100%" ref="user-table">
      <el-table-column label="账号" prop="username" sortable width="170"></el-table-column>
      <el-table-column label="姓名" prop="name" sortable width="170"></el-table-column>
      <el-table-column label="电话" prop="phone" sortable width="170"></el-table-column>
      <el-table-column label="驾驶证号" prop="driverLicense" sortable width="170"></el-table-column>
      <el-table-column label="住址" prop="address" sortable></el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteItem(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination layout="prev, pager, next" v-on:current-change="changePage"
                   :page-size="5" :total="total" :current-page.sync="pageNum">
    </el-pagination>

    <UserEditModal></UserEditModal>
  </div>
</template>

<script>
  import UserEditModal from "./UserEditModal";

  export default {
    name: 'UserTable',
    components: {UserEditModal},
    data() {
      return {
        users: [],
        params: {},
        pageNum: 0,
        total: 0,
      }
    },
    mounted() {
      this.get();
      this.$Bus.$on('userQueryEvent', (queryParams) => {
        this.params = queryParams;
        this.get()
      });
      this.$Bus.$on('userRefreshEvent', () => {
        this.params.pageNum = 0;
        this.get();
      });
    },
    methods: {
      get() {
        this.$http.get('/api/user/list', this.params, (data) => {
          this.users = data.result;
          this.pageNum = data.pageNum + 1;
          this.total = data.total;
        })
      },
      changePage(pageNum) {
        this.params.pageNum = pageNum - 1;
        this.get()
      },
      edit(index, item) {
        this.$Bus.$emit('userEditEvent', item);
      },
      deleteItem(index, item) {
        this.$http.delete('/api/user/', item.id, () => {
          this.get();
        })
      }
    }
  }
</script>


