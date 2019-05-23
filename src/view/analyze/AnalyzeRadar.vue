<template>
  <div id="radar" style="height: 500px;width: 1000px"></div>
</template>

<script>
  export default {
    name: "AnalyzeRadar",
    data() {
      return {
        item: {
          price: 0,
          personNum: 1
        },
        gutter: 20,
        span: 8
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.$http.get('/analyse/behavior', this.item,
          (data) => {
            let value;
            value = data.result;
            this.showData(value);
          },
          (res) => this.$message.error('数据获取失败[' + res.status + ']:' + res.message)
        );
      },
      showData(value) {
        const myChart = this.$echarts.init(document.getElementById("radar"));
        myChart.setOption({
          title: {
            text: '驾驶行为分析',
          },
          tooltip: {},
          calculable: true,
          radar: [
            {
              indicator: [
                {text: '行程里程(m)', max: 1000},
                {text: '平均时速(km/h)', max: 2},
                {text: '超速次数', max: 10},
                {text: '急加速次数', max: 10},
                {text: '急刹车次数', max: 10},
                {text: '急转弯次数', max: 10}
              ],
              radius: 130
            }
          ],
          series: [
            {
              name: '驾驶行为分析',
              type: 'radar',
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default'
                  }
                }
              },
              data: [
                {
                  value: value
                }
              ]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>

</style>
