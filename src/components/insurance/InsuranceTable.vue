<template>
  <div>
    <el-table :data="insurances" border style="width: 100%;height:100%" ref="user-table">
      <el-table-column label="ID" prop="id" sortable width="170"></el-table-column>
      <el-table-column label="用户ID" prop="userId" sortable width="170"></el-table-column>
      <el-table-column label="保险公司" prop="insurer" sortable width="170"></el-table-column>
      <el-table-column label="保单号" prop="policyId" sortable width="170"></el-table-column>
      <el-table-column label="保险电话" prop="insurancePhone" sortable></el-table-column>
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

    <insurance-edit-modal></insurance-edit-modal>
  </div>
</template>

<script>
  import InsuranceEditModal from "./InsuranceEditModal";

  export default {
    name: 'InsuranceTable',
    components: {InsuranceEditModal},
    data() {
      return {
        insurances: [],
        params: {},
        pageNum: 0,
        total: 0,
      }
    },
    mounted() {
      this.params.owner = this.$route.query.userId;
      this.get();
      this.$Bus.$on('insuranceQueryEvent', (queryParams) => {
        this.params = queryParams;
        this.get()
      });
      this.$Bus.$on('insuranceRefreshEvent', () => {
        this.params.pageNum = 0;
        this.get();
      });
    },
    methods: {
      get() {
        this.$http.get('/api/insurance/list', this.params, (data) => {
          this.insurances = data.result;
          this.pageNum = data.pageNum + 1;
          this.total = data.total;
        })
      },
      changePage(pageNum) {
        this.params.pageNum = pageNum - 1;
        this.get()
      },
      edit(index, item) {
        this.$Bus.$emit('insuranceEditEvent', item);
      },
      deleteItem(index, item) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$http.delete('/api/insurance/', item.id, () => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
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

