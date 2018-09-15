<template>
  <el-dialog title="编辑" :visible.sync="visible">

    <el-form :model="car" label-position="left" label-width="70px">
      <el-form-item label="车辆识别码">
        <el-input v-model="car.vin" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="车牌号">
        <el-input v-model="car.plate" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="车辆类型">
        <el-input v-model="car.vehicleType" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="所有人">
        <el-input v-model="car.owner" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="发动机号">
        <el-input v-model="car.engine" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="车型">
        <el-input v-model="car.model" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="save(car)">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "CarEditModal",
    data() {
      return {
        visible: false,
        car: {}
      }
    },
    mounted() {
      this.car = {};
      this.$Bus.$on('carEditEvent', (res) => {
        console.log(res);
        this.car = res;
        this.visible = true;
      });
    },
    methods: {
      save(item) {
        this.$http.put('/api/car', item, () => {
            this.$Bus.$emit('carRefreshEvent');
            this.visible = false;
          }
        )
      },
      close() {
        this.visible = false;
      }
    }
  }
</script>
