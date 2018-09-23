<template>
    <el-main>
      <user-filter-input></user-filter-input>
      <user-table></user-table>
    </el-main>
</template>

<script>
  import UserFilterInput from "./UserFilterInput";
  import UserTable from "./UserTable";

  export default {
    name: "UserContent",
    components: {UserTable, UserFilterInput}
  }
</script>

<style scoped>

</style>
