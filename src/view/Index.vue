<template>
  <el-container>
    <side-bar></side-bar>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import SideBar from "../components/SideBar";

  export default {
    name: "Index",
    components: {SideBar},
  }
</script>

