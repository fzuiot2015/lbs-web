<template>
  <div>
    <el-table :data="cars" height="400" border style="width: 100%" ref="user-table">
      <el-table-column label="车辆识别码" prop="vin" sortable width="170"></el-table-column>
      <el-table-column label="车牌号" prop="plate" sortable width="170"></el-table-column>
      <el-table-column label="车辆类型" prop="vehicleType" sortable width="170"></el-table-column>
      <el-table-column label="所有人" prop="owner" sortable width="170"></el-table-column>
      <el-table-column label="发动机号" prop="engine" sortable width="170"></el-table-column>
      <el-table-column label="车型" prop="model" sortable width="170"></el-table-column>
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
        this.$http.delete('/api/car/', item.id, () => {
          this.get();
        })
      }
    }
  }
</script>

