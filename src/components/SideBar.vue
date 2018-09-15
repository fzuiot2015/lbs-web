<template>
  <el-aside width="150px">
    <el-menu :default-active="$route.path" router class="el-menu-vertical-demo">

      <!--background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"-->


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
