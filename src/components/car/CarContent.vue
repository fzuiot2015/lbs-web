<template>
  <el-main>
    <car-filter-input></car-filter-input>
    <car-table></car-table>
  </el-main>
</template>

<script>
  import CarTable from "./CarTable";
  import CarFilterInput from "./CarFilterInput";

  export default {
    name: "CarContent",
    components: {CarFilterInput, CarTable}
  }
</script>
