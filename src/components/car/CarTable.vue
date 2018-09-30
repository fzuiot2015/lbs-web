<template>
  <div>
    <el-table :data="items" border style="width: 100%;height:100%" ref="user-table">
      <el-table-column label="ID" prop="id" sortable width="170"></el-table-column>
      <el-table-column label="VIN码" prop="vin" sortable width="170"></el-table-column>
      <el-table-column label="车牌号" prop="plate" sortable width="170"></el-table-column>
      <el-table-column label="车辆类型" prop="vehicleType" sortable width="170"></el-table-column>
      <el-table-column label="所有人" prop="owner" sortable width="170"></el-table-column>
      <el-table-column label="发动机号" prop="engine" sortable width="170"></el-table-column>
      <el-table-column label="车型" prop="model" sortable></el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteItem(scope.row)">删除</el-button>
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

  const queryEvent = 'carQueryEvent';
  const refreshEvent = 'carRefreshEvent';
  const editEvent = 'carEditEvent';

  const listUrl = '/api/car/list';
  const itemUrl = '/api/car/';

  export default {
    name: "CarTable",
    components: {CarEditModal},
    data() {
      return {
        items: [],
        params: {},
        pageNum: 0,
        total: 0,
      }
    },
    mounted() {
      this.get();
      this.$Bus.$on(queryEvent, (queryParams) => {
        this.params = queryParams;
        this.get()
      });
      this.$Bus.$on(refreshEvent, () => {
        this.params.pageNum = 0;
        this.get();
      });
    },
    methods: {
      //通过HttpGet方法从服务器获取数据
      get() {
        this.$http.get(listUrl, this.params,
          (data) => this.setData(data),
          (res) => this.$message.error('数据获取失败[' + res.status + ']:' + res.message)
        )
      },
      //设置表格的数据内容
      setData(data) {
        this.items = data.result;
        this.pageNum = data.pageNum + 1;
        this.total = data.total;
      },
      //翻页
      changePage(pageNum) {
        this.params.pageNum = pageNum - 1;
        this.get();
      },
      //触发编辑框的编辑事件
      edit(item) {
        this.$Bus.$emit(editEvent, item);
      },
      //弹出删除确认窗口
      deleteConfirm(item) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        )
          .then(() => this.delete(item))
          .catch(() => this.$message.info('已取消删除'));
      },
      //删除指定数据项
      delete(item) {
        this.$http.delete(itemUrl, item.id,
          () => {
            this.$message.success('删除成功!');
            this.get();
          },
          (res) => this.$message.error('删除失败[' + res.status + ']:' + res.message)
        )
      }

    }
  }
</script>

