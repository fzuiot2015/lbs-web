<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="car" :rules="rules" status-icon ref="carForm"
             label-position="left" label-width="70px" class="demo-ruleForm">

      <el-form-item label="VIN码" prop="vin">
        <el-input v-model="car.vin" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="车牌号" prop="plate">
        <el-input v-model="car.plate" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="车辆类型" prop="vehicleType">
        <el-input v-model="car.vehicleType" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="所有人" prop="owner">
        <el-input v-model="car.owner" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="发动机号" prop="engine">
        <el-input v-model="car.engine" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="车型" prop="model">
        <el-input v-model="car.model" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="save()">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "CarEditModal",
    data() {
      const checkVin = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入VIN码'));
        } else {
          callback();
        }
      };
      const checkPlate = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入车牌号'));
        } else {
          callback();
        }
      };
      const checkVehicleType = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入车辆类型'));
        } else {
          callback();
        }
      };
      const checkOwner = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入所有人'));
        } else {
          callback();
        }
      };
      const checkEngine = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入发动机号'));
        } else {
          callback();
        }
      };
      const checkModel = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入车型'));
        } else {
          callback();
        }
      };
      return {
        visible: false,
        car: {},
        rules: {
          vin: [
            {validator: checkVin, trigger: 'blur'}
          ],
          plate: [
            {validator: checkPlate, trigger: 'blur'}
          ],
          vehicleType: [
            {validator: checkVehicleType, trigger: 'blur'}
          ],
          owner: [
            {validator: checkOwner, trigger: 'blur'}
          ],
          engine: [
            {validator: checkEngine, trigger: 'blur'}
          ],
          model: [
            {validator: checkModel, trigger: 'blur'}
          ],
        }
      }
    },
    mounted() {
      this.reset();
      this.$Bus.$on('carEditEvent', (res) => {
        this.reset();
        this.car = res;
        this.visible = true;
      });
    },
    methods: {
      save() {
        this.$refs['carForm'].validate((valid) => {
          if (valid) {
            this.$http.put('/api/car', this.car,
              () => {
                this.$Bus.$emit('carRefreshEvent');
                this.visible = false;
                this.$message.success('提交成功!');
              }
            );
          } else {
            this.$message.error('提交失败!');
            return false;
          }
        });
      },
      close() {
        this.visible = false;
      },
      reset() {
        const ref = this.$refs['carForm'];
        if (ref !== undefined) {
          ref.resetFields();
        }
      }
    }
  }
</script>
