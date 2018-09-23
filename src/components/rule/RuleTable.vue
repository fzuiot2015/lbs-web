<template>
  <div>
    <el-table :data="rules" border style="width: 100%;height:100%" ref="user-table">
      <el-table-column label="ID" prop="id" sortable width="170"></el-table-column>
      <el-table-column label="保险公司" prop="insurer" sortable width="170"></el-table-column>
      <el-table-column label="油耗因数" prop="oilFactor" sortable width="170"></el-table-column>
      <el-table-column label="行程因数" prop="distanceFactor" sortable width="170"></el-table-column>
      <el-table-column label="事故因数" prop="accidentCountFactor" sortable width="170"></el-table-column>

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

    <rule-edit-modal></rule-edit-modal>
  </div>
</template>

<script>

  import RuleEditModal from "./RuleEditModal";

  export default {
    name: "RuleTable",
    components: {RuleEditModal},
    data() {
      return {
        rules: [],
        params: {},
        pageNum: 0,
        total: 0,
      }
    },
    mounted() {
      this.get();
      this.$Bus.$on('ruleQueryEvent', (queryParams) => {
        this.params = queryParams;
        this.get()
      });
      this.$Bus.$on('ruleRefreshEvent', () => {
        this.params.pageNum = 0;
        this.get();
      });
    },
    methods: {
      get() {
        this.$http.get('/api/rule/list', this.params, (data) => {
          this.rules = data.result;
          this.pageNum = data.pageNum + 1;
          this.total = data.total;
        })
      },
      changePage(pageNum) {
        this.params.pageNum = pageNum - 1;
        this.get()
      },
      edit(index, item) {
        this.$Bus.$emit('ruleEditEvent', item);
      },
      deleteItem(index, item) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$http.delete('/api/rule/', item.id, () => {
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

