<template>
  <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm"
           label-position="left" label-width="70px" class="demo-ruleForm">

    <el-form-item label="账号" prop="username">
      <el-input v-model.number="loginForm.username"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="loginForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      <el-button @click="resetForm('loginForm')">重置</el-button>

    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "Login",
    data() {
      //TODO:表单校验
      const checkUsername = (rule, value, callback) => {
        if (!value) {
          callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          //TODO:
          callback()
        }, 50000);
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.checkPass !== '') {
            this.$refs.loginForm.validateField('checkPass');
          }
          callback();
        }
      };
      const validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          username: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validateCheckPass, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.set('login_token', '12345'); //储存信息
            this.$router.push('/user');
            alert('登录成功!');
          } else {
            console.log('登录失败!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
