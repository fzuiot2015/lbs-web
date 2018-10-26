<template>
    <el-main>
      <user-filter-input></user-filter-input>
      <user-table></user-table>
      <user-edit-modal></user-edit-modal>
    </el-main>
</template>

<script>
  import UserFilterInput from "./UserFilterInput";
  import UserTable from "./UserTable";
  import UserEditModal from "./UserEditModal";

  export default {
    name: "UserContent",
    components: {UserEditModal, UserTable, UserFilterInput}
  }
</script>

<style scoped>

</style>
