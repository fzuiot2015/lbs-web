<template>
  <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm"
           class="login-form">

    <h3 class="title">系统登录</h3>

    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="请输入内容" clearable>
        <template slot="prepend">账号</template>
      </el-input>
    </el-form-item>

    <el-form-item prop="pass">
      <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="请输入内容" clearable>
        <template slot="prepend">密码</template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" style="width: 100%" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "Login",
    data() {
      const checkUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('账号不能为空'));
        } else {
          callback();
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {},
        rules: {
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {

            var params = new URLSearchParams();
            params.append('username', this.loginForm.username);
            params.append('pass', this.loginForm.pass);

            this.$http.post('/api/user/login', params,
              (data) => {
                const token = data.result;
                this.$store.set('login_token', token); //储存信息
                this.$router.replace('/user');
                this.$message.success('登录成功!');
              },
              (res) => this.$message.error('登录失败[' + res.status + ']:' + res.message)
            )
            ;
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style>
  .login-form {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
