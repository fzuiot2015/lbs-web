<template>
  <el-container>
    <el-aside>
      <nav-menu></nav-menu>
    </el-aside>

    <el-main>
      <user-content></user-content>
    </el-main>
  </el-container>
</template>

<script>
  import UserContent from "../components/UserContent";
  import NavMenu from "./NavMenu";

  export default {
    name: "Index",
    components: {NavMenu, UserContent}
  }
</script>

