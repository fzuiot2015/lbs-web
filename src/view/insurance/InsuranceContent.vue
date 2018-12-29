<template>
  <el-main>
    <insurance-filter-input></insurance-filter-input>
    <insurance-table></insurance-table>
    <insurance-edit-modal></insurance-edit-modal>
  </el-main>
</template>

<script>
  import InsuranceFilterInput from "./InsuranceFilterInput";
  import InsuranceTable from "./InsuranceTable";
  import InsuranceEditModal from "./InsuranceEditModal";

  export default {
    name: "InsuranceContent",
    components: {InsuranceEditModal, InsuranceTable, InsuranceFilterInput}
  }
</script>
