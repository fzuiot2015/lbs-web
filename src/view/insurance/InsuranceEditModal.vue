<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="item" :rules="rules" status-icon :ref="ref"
             label-position="left" label-width="70px">

      <el-form-item label="用户ID" prop="userId">
        <el-input v-model="item.userId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保险公司" prop="insurer">
        <el-input v-model="item.insurer" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保单号" prop="policyId">
        <el-input v-model="item.policyId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="保险电话" prop="insurancePhone">
        <el-input v-model="item.insurancePhone" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="开始时间" prop="startTime">
        <el-date-picker
          v-model="item.startTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="结束时间" prop="endTime">
        <el-date-picker
          v-model="item.endTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

    </el-form>


    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="submit">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  const refreshEvent = 'insuranceRefreshEvent';
  const editEvent = 'insuranceEditEvent';
  const itemUrl = '/api/insurance/';

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
      const checkStartTime = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请选择开始时间'));
        } else {
          callback();
        }
      };
      const checkEndTime = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请选择结束时间'));
        } else if (this.item.startTime > this.item.endTime) {
          callback(new Error('请选择结束时间应大于开始时间'));
        } else {
          callback();
        }
      };

      return {
        ref: 'insuranceForm',
        visible: false,
        item: {},
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
          ],
          startTime: [
            {validator: checkStartTime, trigger: 'blur'}
          ],
          endTime: [
            {validator: checkEndTime, trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      this.reset();
      this.$Bus.$on(editEvent, (res) => {
        this.reset();
        this.item = res;
        this.visible = true;
      });
    },
    methods: {
      submit() {
        this.$refs[this.ref].validate((valid) => {
          if (valid) {
            this.save();
          }
        });
      },
      save() {
        this.$http.put(itemUrl, this.item,
          () => {
            this.$Bus.$emit(refreshEvent);
            this.visible = false;
            this.$message.success('提交成功!');
          },
          (res) => this.$message.error('提交失败[' + res.status + ']:' + res.message)
        );
      },
      close() {
        this.visible = false;
      },
      reset() {
        const ref = this.$refs[this.ref];
        if (ref !== undefined) {
          ref.resetFields();
        }
      }

    }
  }
</script>

<style scoped>

</style>
