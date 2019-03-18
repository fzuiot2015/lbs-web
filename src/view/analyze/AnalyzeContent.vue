<template>
  <el-main>
    <analyze-chart></analyze-chart>
    <analyze-popover></analyze-popover>
    <analyze-radar></analyze-radar>
  </el-main>
</template>

<script>
  import AnalyzeChart from "./AnalyzeChart";
  import AnalyzePopover from "./AnalyzePopover";
  import AnalyzeRadar from "./AnalyzeRadar";

  export default {
    name: "AnalyzeContent",
    components: {AnalyzeRadar, AnalyzePopover, AnalyzeChart},
  }
</script>
