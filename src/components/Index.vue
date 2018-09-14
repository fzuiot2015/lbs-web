<template>
  <el-container>
    <el-aside>
      <nav-menu></nav-menu>
    </el-aside>

    <el-main>
      <user-filter-input></user-filter-input>
      <user-table></user-table>
    </el-main>
  </el-container>
</template>

<script>
  import NavMenu from "./NavMenu";
  import UserFilterInput from "./UserFilterInput";
  import UserTable from "./UserTable";

  export default {
    name: "Index",
    components: {UserTable, UserFilterInput, NavMenu}
  }
</script>

