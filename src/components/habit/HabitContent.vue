<template>
  <el-main>
    <habit-filter-input></habit-filter-input>
    <habit-table></habit-table>
  </el-main>
</template>

<script>


  import HabitFilterInput from "./HabitFilterInput";
  import HabitTable from "./HabitTable";
  export default {
    name: "HabitContent",
    components: {HabitTable, HabitFilterInput},
  }
</script>
