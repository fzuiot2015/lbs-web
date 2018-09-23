<template>
  <el-main>
    <insurance-filter-input></insurance-filter-input>
    <insurance-table></insurance-table>
  </el-main>
</template>

<script>
  import InsuranceFilterInput from "./InsuranceFilterInput";
  import InsuranceTable from "./InsuranceTable";

  export default {
    name: "InsuranceContent",
    components: {InsuranceTable, InsuranceFilterInput}
  }
</script>
