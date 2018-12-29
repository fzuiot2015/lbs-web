<template>
  <el-main>
    <insurance-filter-input></insurance-filter-input>
    <insurance-table></insurance-table>
    <insurance-edit-modal></insurance-edit-modal>
    <my-chart></my-chart>
  </el-main>
</template>

<script>
  import InsuranceFilterInput from "./InsuranceFilterInput";
  import InsuranceTable from "./InsuranceTable";
  import InsuranceEditModal from "./InsuranceEditModal";
  import MyChart from "../../components/MyChart";

  export default {
    name: "InsuranceContent",
    components: {MyChart, InsuranceEditModal, InsuranceTable, InsuranceFilterInput}
  }
</script>
