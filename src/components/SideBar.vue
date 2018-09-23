<template>
  <el-aside width="140px">
    <el-menu :default-active="$route.path" router>

      <el-menu-item index="/user">
        <i class="el-icon-menu"></i>
        <span slot="title">用户信息</span>
      </el-menu-item>

      <el-menu-item index="/car">
        <i class="el-icon-info"></i>
        <span slot="title">车辆信息</span>
      </el-menu-item>

      <el-menu-item index="/accident">
        <i class="el-icon-warning"></i>
        <span slot="title">事故信息</span>
      </el-menu-item>

      <el-menu-item index="/insurance">
        <i class="el-icon-document"></i>
        <span slot="title">保险信息</span>
      </el-menu-item>

      <el-menu-item index="/rule">
        <i class="el-icon-document"></i>
        <span slot="title">保险规则</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style>
  .el-menu {
    height: 100%;
  }
</style>
