<template>
  <el-main>
    <my-chart></my-chart>
    <radar></radar>
  </el-main>
</template>

<script>
  import MyChart from "./AnalyzeChart";
  import Radar from "./AnalyzeRadar";

  export default {
    name: "InsuranceContent",
    components: {Radar, MyChart}
  }
</script>
