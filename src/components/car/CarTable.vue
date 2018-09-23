<template>
  <div>
    <el-table :data="cars" border style="width: 100%;height:100%" ref="user-table">
      <el-table-column label="ID" prop="id" sortable width="170"></el-table-column>
      <el-table-column label="VIN码" prop="vin" sortable width="170"></el-table-column>
      <el-table-column label="车牌号" prop="plate" sortable width="170"></el-table-column>
      <el-table-column label="车辆类型" prop="vehicleType" sortable width="170"></el-table-column>
      <el-table-column label="所有人" prop="owner" sortable width="170"></el-table-column>
      <el-table-column label="发动机号" prop="engine" sortable width="170"></el-table-column>
      <el-table-column label="车型" prop="model" sortable></el-table-column>
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

    <car-edit-modal></car-edit-modal>
  </div>
</template>

<script>
  import CarEditModal from "./CarEditModal";

  export default {
    name: "CarTable",
    components: {CarEditModal},
    data() {
      return {
        cars: [],
        params: {},
        pageNum: 0,
        total: 0,
      }
    },
    mounted() {
      this.params.owner = this.$route.query.userId;
      this.get();
      this.$Bus.$on('carQueryEvent', (queryParams) => {
        this.params = queryParams;
        this.get()
      });
      this.$Bus.$on('carRefreshEvent', () => {
        this.params.pageNum = 0;
        this.get();
      });
    },
    methods: {
      get() {
        this.$http.get('/api/car/list', this.params, (data) => {
          this.cars = data.result;
          this.pageNum = data.pageNum + 1;
          this.total = data.total;
        })
      },
      changePage(pageNum) {
        this.params.pageNum = pageNum - 1;
        this.get()
      },
      edit(index, item) {
        this.$Bus.$emit('carEditEvent', item);
      },
      deleteItem(index, item) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$http.delete('/api/car/', item.id, () => {
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
          })
      }
    }
  }
</script>

