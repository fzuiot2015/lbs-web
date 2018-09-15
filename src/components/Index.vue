<template>
  <el-container>
    <side-bar></side-bar>
    <router-view></router-view>
  </el-container>
</template>

<script>

  import SideBar from "./SideBar";

  export default {
    name: "Index",
    components: {SideBar},
  }
</script>

