<template>
  <el-container>

    <side-bar></side-bar>

      <router-view></router-view>

  </el-container>
</template>

<script>

  import SideBar from "./SideBar";
  import UserContent from "./user/UserContent";
  import CarContent from "./car/CarContent";
  import AccidentContent from "./accident/AccidentContent";

  export default {
    name: "Index",
    components: {AccidentContent, CarContent, UserContent, SideBar},
  }
</script>

