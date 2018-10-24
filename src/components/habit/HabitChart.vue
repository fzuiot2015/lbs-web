<template>
  <div ref="habitChart" style="width:500px; height:500px"></div>
</template>

<script>
  export default {
    name: "HabitChart",
    mounted() {
      // 初始化echarts实例
      const myChart = this.$echarts.init(this.$refs.habitChart);
      // 绘制图表
      myChart.setOption({
        title: {text: 'ECharts测试'},
        tooltip: {},
        xAxis: {
          data: ['A', 'B']
        },
        yAxis: {},
        series: [{
          name: '价格',
          type: 'bar',
          data: [5, 20]
        }]
      });
    }
  }
</script>
