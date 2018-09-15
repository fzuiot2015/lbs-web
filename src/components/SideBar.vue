<template>
  <el-aside>
    <el-menu  :default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">用户信息</span>
      </el-menu-item>

      <el-menu-item index="/car">
        <i class="el-icon-document"></i>
        <span slot="title">车辆信息</span>
      </el-menu-item>

      <el-menu-item index="/accident">
        <i class="el-icon-document"></i>
        <span slot="title">事故信息</span>
      </el-menu-item>

    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: "SideBar"
  }
</script>
