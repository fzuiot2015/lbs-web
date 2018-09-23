<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="insurance" :rules="rules" status-icon ref="insuranceForm"
             label-position="left" label-width="70px" class="demo-ruleForm">

      <el-form-item label="用户ID" prop="userId">
        <el-input v-model="insurance.userId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保险公司" prop="insurer">
        <el-input v-model="insurance.insurer" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保单号" prop="policyId">
        <el-input v-model="insurance.policyId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保险电话" prop="insurancePhone">
        <el-input v-model="insurance.insurancePhone" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="save">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'InsuranceEditModal',
    data() {
      const checkUserId = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入用户ID'));
        } else {
          callback();
        }
      };
      const checkInsurer = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入保险公司'));
        } else {
          callback();
        }
      };
      const checkPolicyId = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入保单号'));
        } else {
          callback();
        }
      };
      const checkInsurancePhone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入保险电话'));
        } else {
          callback();
        }
      };
      return {
        visible: false,
        insurance: {},
        rules: {
          userId: [
            {validator: checkUserId, trigger: 'blur'}
          ],
          insurer: [
            {validator: checkInsurer, trigger: 'blur'}
          ],
          policyId: [
            {validator: checkPolicyId, trigger: 'blur'}
          ],
          insurancePhone: [
            {validator: checkInsurancePhone, trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      this.reset();
      this.$Bus.$on('insuranceEditEvent', (res) => {
        this.reset();
        this.insurance = res;
        this.visible = true;
      });
    },
    methods: {
      save() {
        this.$refs['insuranceForm'].validate((valid) => {
          if (valid) {
            this.$http.put('/api/insurance', this.insurance,
              () => {
                this.$Bus.$emit('insuranceRefreshEvent');
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
        const ref = this.$refs['insuranceForm'];
        if (ref !== undefined) {
          ref.resetFields();
        }
      }
    }
  }
</script>

<style scoped>

</style>
