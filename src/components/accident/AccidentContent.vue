<template>
  <el-main>
    <accident-filter-input></accident-filter-input>
    <accident-table></accident-table>
  </el-main>
</template>

<script>
  import AccidentFilterInput from "./AccidentFilterInput";
  import AccidentTable from "./AccidentTable";

  export default {
    name: "AccidentContent",
    components: {AccidentTable, AccidentFilterInput},
  }
</script>
