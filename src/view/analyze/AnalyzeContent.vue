<template>
  <el-main>
    <analyze-chart></analyze-chart>
    <analyze-popover></analyze-popover>
  </el-main>
</template>

<script>
  import AnalyzeChart from "./AnalyzeChart";
  import AnalyzePopover from "./AnalyzePopover";

  export default {
    name: "AnalyzeContent",
    components: {AnalyzePopover, AnalyzeChart},
  }
</script>
