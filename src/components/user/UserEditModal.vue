<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="user" :rules="rules" status-icon :ref="ref"
             label-position="left" label-width="70px">

      <el-form-item label="账号" prop="username">
        <el-input v-model="user.username" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" type="password" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="rePassword">
        <el-input v-model="user.rePassword" type="password" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="姓名" prop="name">
        <el-input v-model="user.name" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="电话" prop="phone">
        <el-input v-model="user.phone" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="驾驶证号" prop="driverLicense">
        <el-input v-model="user.driverLicense" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="住址" prop="address">
        <el-input v-model="user.address" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="submit">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  const refreshEvent = 'userRefreshEvent';
  const editEvent = 'userEditEvent';
  const itemUrl = '/api/user/';

  export default {
    name: 'UserEditModal',
    data() {
      const checkUsername = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      const checkPassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      const checkRePassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.password) {
          callback(new Error('两次输入的密码不一致'));
        } else {
          callback();
        }
      };
      const checkName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入姓名'));
        } else {
          callback();
        }
      };
      const checkPhone = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入手机号'));
        } else {
          callback();
        }
      };
      const checkDriverLicense = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入驾驶证号'));
        } else {
          callback();
        }
      };
      const checkAddress = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入地址'));
        } else {
          callback();
        }
      };
      return {
        ref: 'userForm',
        visible: false,
        user: {},
        rules: {
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ],
          password:
            [
              {validator: checkPassword, trigger: 'blur'}
            ],
          rePassword:
            [
              {validator: checkRePassword, trigger: 'blur'}
            ],
          name:
            [
              {validator: checkName, trigger: 'blur'}
            ],
          phone:
            [
              {validator: checkPhone, trigger: 'blur'}
            ],
          driverLicense:
            [
              {validator: checkDriverLicense, trigger: 'blur'}
            ],
          address:
            [
              {validator: checkAddress, trigger: 'blur'}
            ]
        }
      }
    },
    mounted() {
      this.reset();
      this.$Bus.$on(editEvent, (res) => {
        this.reset();
        this.user = res;
        this.user.rePassword = res.password;
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
        this.$http.put(itemUrl, this.user,
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
