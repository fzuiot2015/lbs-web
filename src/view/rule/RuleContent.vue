<template>
  <el-main>
    <rule-filter-input></rule-filter-input>
    <rule-table></rule-table>
  </el-main>
</template>

<script>
  import RuleFilterInput from "./RuleFilterInput";
  import RuleTable from "./RuleTable";

  export default {
    name: "RuleContent",
    components: {RuleTable, RuleFilterInput},
  }
</script>
