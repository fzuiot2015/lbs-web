<template>
  <el-main>
    <violation-filter-input></violation-filter-input>
    <violation-table></violation-table>
    <violation-edit-modal></violation-edit-modal>
  </el-main>
</template>

<script>

  import ViolationFilterInput from "./ViolationFilterInput";
  import ViolationTable from "./ViolationTable";
  import ViolationEditModal from "./ViolationEditModal";

  export default {
    name: "ViolationContent",
    components: {ViolationEditModal, ViolationTable, ViolationFilterInput},
  }
</script>
