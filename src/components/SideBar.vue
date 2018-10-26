<template>
  <el-aside width="140px">
    <el-menu :default-active="$route.path" router>

      <el-menu-item v-for="(item,key) in items" :index="item.index" :key="key">
        <i :class="item.icon"></i>
        <span :slot="title">{{item.name}}</span>
      </el-menu-item>

      <el-menu-item index="/" @click="logout">
        <i class="el-icon-circle-close"></i>
        <span slot="title">退出</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: "SideBar",
    data() {
      return {
        items: [
          {index: '/user', name: '用户信息', icon: 'el-icon-menu'},
          {index: '/car', name: '车辆信息', icon: 'el-icon-info'},
          {index: '/accident', name: '事故信息', icon: 'el-icon-warning'},
          {index: '/insurance', name: '保险信息', icon: 'el-icon-document'},
        ]
      }
    },
    methods: {
      logout() {
        this.$confirm('是否退出登录状态并返回登录界面?', '退出', {
          confirmButtonText: '退出',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$store.set('login_token', null);
            this.$router.replace('/login');
            this.$message('已退出登录状态!');
          })
      }
    }
  }
</script>
