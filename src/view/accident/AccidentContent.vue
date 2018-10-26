<template>
  <el-main>
    <accident-filter-input></accident-filter-input>
    <accident-table></accident-table>
    <accident-edit-modal></accident-edit-modal>
  </el-main>
</template>

<script>
  import AccidentFilterInput from "./AccidentFilterInput";
  import AccidentTable from "./AccidentTable";
  import AccidentEditModal from "./AccidentEditModal";

  export default {
    name: "AccidentContent",
    components: {AccidentEditModal, AccidentTable, AccidentFilterInput},
  }
</script>
