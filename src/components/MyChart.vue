<template>
  <div id="myChart" style="height: 500px;width: 1000px"></div>
</template>

<script>
  export default {
    name: "MyChart",
    data() {
      return {}
    },
    mounted() {
      let series;
      this.$http.get('/api/analyse', null,
        (data) => {
          series = data.result;
          this.initChart(series);
        },
        (res) => this.$message.error('数据获取失败[' + res.status + ']:' + res.message)
      );
    },
    methods:{
      initChart(series){
        const myChart = this.$echarts.init(document.getElementById("myChart"));
        myChart.setOption({
          title: {
            text: '保险价格分析',
            left: '20px',
            textStyle: {
              color: "#436EEE",
              fontSize: 17,
            }
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            itemWidth: 15,
            itemHeight: 15,
            data: ['车辆损失险', '全车盗抢险', '车上人员责任险'],  //TODO:分层
          },
          xAxis: {
            data: ["中国人寿保险", "平安保险", "太平洋保险", "中国大地保险", "天安保险", "安邦保险"],  //TODO:横坐标
            splitLine: {
              show: false,
            },
            axisLabel: {
              interval: 0
            }
          },
          yAxis: {
            splitLine: {
              show: false,
            },
          },
          series: series
/*          series: [{
            name: '车损险',
            type: 'bar',
            stack: '价格',
            data: [5, 20, 36, 10, 10, 20] //TODO:数据
          }, {
            name: '第三方责任险',
            type: 'bar',
            stack: '价格',
            data: [30, 22, 18, 35, 42, 10]
            // itemStyle: {
            //   normal: {color: "#3FBB49"},//TODO:颜色（可选）
            // }
          }, {
            name: '车上人员险',
            type: 'bar',
            stack: '价格',
            data: [10, 22, 13, 25, 22, 20]
          }]*/

        })
      }
    }
  }
</script>

<style scoped>

</style>
