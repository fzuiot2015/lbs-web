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
  import UserContent from "./user/UserContent";
  import CarContent from "./car/CarContent";
  import AccidentContent from "./accident/AccidentContent";

  export default {
    name: "Index",
    components: { AccidentContent, CarContent, UserContent, SideBar},
  }
</script>

