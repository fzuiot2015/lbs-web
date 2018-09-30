<template>
  <el-container>
    <side-bar></side-bar>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import SideBar from "./SideBar";
  import UserContent from "./user/UserContent";
  import CarContent from "./car/CarContent";
  import AccidentContent from "./accident/AccidentContent";
  import TopBar from "./TopBar";

  export default {
    name: "Index",
    components: {TopBar, AccidentContent, CarContent, UserContent, SideBar},
  }
</script>

