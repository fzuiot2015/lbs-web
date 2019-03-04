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
      this.showData()
    },
    methods: {
      showData() {
        const myChart = this.$echarts.init(document.getElementById("radar"));
        myChart.setOption({
          title : {
            text: '罗纳尔多 vs 舍普琴科',
            subtext: '完全实况球员数据'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            x : 'center',
            data:['罗纳尔多']
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          polar : [
            {
              indicator : [
                {text : '进攻', max  : 100},
                {text : '防守', max  : 100},
                {text : '体能', max  : 100},
                {text : '速度', max  : 100},
                {text : '力量', max  : 100},
                {text : '技巧', max  : 100}
              ],
              radius : 130
            }
          ],
          series : [
            {
              name: '完全实况球员数据',
              type: 'radar',
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default'
                  }
                }
              },
              data : [
                {
                  value : [197, 32, 74, 95, 88, 92],
                  name : '罗纳尔多'
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
