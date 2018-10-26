<template>
  <el-main>
    <car-filter-input></car-filter-input>
    <car-table></car-table>
    <car-edit-modal></car-edit-modal>
  </el-main>
</template>

<script>
  import CarTable from "./CarTable";
  import CarFilterInput from "./CarFilterInput";
  import AccidentEditModal from "../accident/AccidentEditModal";
  import CarEditModal from "./CarEditModal";

  export default {
    name: "CarContent",
    components: {CarEditModal, AccidentEditModal, CarFilterInput, CarTable}
  }
</script>
