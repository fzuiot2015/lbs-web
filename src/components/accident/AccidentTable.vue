<template>
  <div>
    <el-table :data="accidents" height="400" border style="width: 100%" ref="user-table">
      <el-table-column label="时间" prop="time" sortable width="170"></el-table-column>
      <el-table-column label="地址" prop="address" sortable width="170"></el-table-column>
      <el-table-column label="纬度" prop="lat" sortable width="170"></el-table-column>
      <el-table-column label="经度" prop="lng" sortable width="170"></el-table-column>
      <el-table-column label="描述" prop="description" sortable></el-table-column>
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
  import UserEditModal from "./AccidentEditModal";

  export default {
    name: 'AccidentTable',
    components: {UserEditModal},
    data() {
      return {
        accidents: [],
        params: {},
        pageNum: 0,
        total: 0,
      }
    },
    mounted() {
      this.params.userId = this.$route.query.userId;
      this.get();
      this.$Bus.$on('accidentQueryEvent', (queryParams) => {
        this.params = queryParams;
        this.get()
      });
      this.$Bus.$on('accidentRefreshEvent', () => {
        this.params.pageNum = 0;
        this.get();
      });
    },
    methods: {
      get() {
        this.$http.get('/api/accident/list', this.params, (data) => {
          this.accidents = data.result;
          this.pageNum = data.pageNum + 1;
          this.total = data.total;
        })
      },
      changePage(pageNum) {
        this.params.pageNum = pageNum - 1;
        this.get()
      },
      edit(index, item) {
        this.$Bus.$emit('accidentEditEvent', item);
      },
      deleteItem(index, item) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$http.delete('/api/accident/', item.id, () => {
              this.$message.success('删除成功!');
              this.get();
            });
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      }
    }
  }
</script>


