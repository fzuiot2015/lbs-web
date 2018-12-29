<template>
  <div>
    <el-row :gutter="gutter">
      <el-form :model="item" status-icon
               label-position="left" label-width="70px">

        <el-col :span="span">

          <el-form-item label="车辆价格" prop="time">
            <el-input-number v-model="item.price" :min="0" :max="99999999"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="span">
          <el-form-item label="车载人数" prop="address">
            <el-input-number v-model="item.personNum" :min="1" :max="10"></el-input-number>
          </el-form-item>
        </el-col>

      </el-form>

      <el-col :span="span">
        <el-button type="primary" size="small" @click="getData">查询</el-button>
      </el-col>
    </el-row>

    <div id="analyzeChart" style="height: 500px;width: 1000px"></div>

  </div>
</template>

<script>
  export default {
    name: "MyChart",
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
        this.$http.get('/api/analyse', this.item,
          (data) => {
            let series;
            series = data.result;
            this.showData(series);
          },
          (res) => this.$message.error('数据获取失败[' + res.status + ']:' + res.message)
        );
      },
      showData(series) {
        const myChart = this.$echarts.init(document.getElementById("analyzeChart"));
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
            data: ['车辆损失险', '全车盗抢险', '玻璃单独破碎险', '自燃损失险', '车上人员责任险'],  //TODO:分层
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
            axisLabel: {
              formatter: '{value}元'
            }
          },
          series: series
        })
      }
    }
  }
</script>

<style scoped>

</style>
