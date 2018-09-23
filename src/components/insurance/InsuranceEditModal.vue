<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="insurance" label-position="left" label-width="70px">
      <el-form-item label="用户ID">
        <el-input v-model="insurance.userId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保险公司">
        <el-input v-model="insurance.insurer" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保单号">
        <el-input v-model="insurance.policyId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保险电话">
        <el-input v-model="insurance.insurancePhone" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="save(insurance)">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'InsuranceEditModal',
    data() {
      return {
        visible: false,
        insurance: {}
      }
    },
    mounted() {
      this.insurance = {};
      this.$Bus.$on('insuranceEditEvent', (res) => {
        console.log(res);
        this.insurance = res;
        this.visible = true;
      });
    },
    methods: {
      save(item) {
        this.$http.put('/api/insurance', item, () => {
            this.$Bus.$emit('insuranceRefreshEvent');
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

<style scoped>

</style>
