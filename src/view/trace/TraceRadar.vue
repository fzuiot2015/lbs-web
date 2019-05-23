<template>

  <div>
    <el-row :gutter="gutter">
      <el-form :model="item" status-icon
               label-position="left" label-width="70px">

        <el-col :span="span">
          <el-form-item label="用户ID" prop="entityName">
            <el-input v-model="item.entityName" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>

      </el-form>

      <el-col :span="span">
        <el-button type="primary" size="small" @click="getData">查询</el-button>
      </el-col>
    </el-row>

    <div id="radar" style="height: 500px;width: 1000px"></div>
  </div>
</template>

<script>
  export default {
    name: "TraceRadar",
    data() {
      return {
        item: {},
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
                {text: '行程里程(m)', max: 50000},
                {text: '平均时速(km/h)', max: 10},
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
