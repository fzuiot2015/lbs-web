<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="item" :rules="rules" status-icon :ref="ref"
             label-position="left" label-width="70px">

      <el-form-item label="保险公司" prop="insurer">
        <el-input v-model="item.insurer" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="油耗因数" prop="oilFactor">
        <el-input v-model="item.oilFactor" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="行程因数" prop="distanceFactor">
        <el-input v-model="item.distanceFactor" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="事故因数" prop="accidentCountFactor">
        <el-input v-model="item.accidentCountFactor" auto-complete="off"></el-input>
      </el-form-item>

    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="submit">确定</el-button>
      <el-button :plain="true" type="danger" @click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  const refreshEvent = 'ruleRefreshEvent';
  const editEvent = 'ruleEditEvent';
  const itemUrl = '/api/rule/';

  export default {
    name: "RuleEditModal",
    data() {
      const checkInsurer = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入保险公司'));
        } else {
          callback();
        }
      };
      const checkOilFactor = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入油耗因数'));
        } else {
          callback();
        }
      };
      const checkDistanceFactor = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入行程因数'));
        } else {
          callback();
        }
      };
      const checkAccidentCountFactor = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入事故因数'));
        } else {
          callback();
        }
      };
      return {
        ref: 'ruleForm',
        visible: false,
        item: {},
        rules: {
          insurer: [
            {validator: checkInsurer, trigger: 'blur'}
          ],
          oilFactor: [
            {validator: checkOilFactor, trigger: 'blur'}
          ],
          distanceFactor: [
            {validator: checkDistanceFactor, trigger: 'blur'}
          ],
          accidentCountFactor: [
            {validator: checkAccidentCountFactor, trigger: 'blur'}
          ],
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
