<template>
  <div>
    <el-row :gutter="gutter">
      <el-col :span="span">
        <el-input v-model="params.vin" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">车辆识别码</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.plate" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">车牌号</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.vehicleType" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">车辆类型</template>
        </el-input>
      </el-col>

    </el-row>

    <el-row :gutter="gutter">
      <el-col :span="span">
        <el-input v-model="params.owner" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">所有人</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.engine" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">发动机号</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.model" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">车型</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="gutter">
      <el-col :span="span">
        <el-button type="primary" size="small" @click="query">查询</el-button>
        <el-button type="primary" size="small" @click="cleanQueryTemp">清空</el-button>
        <el-button type="primary" size="small" @click="add">增加</el-button>
        <el-button type="primary" size="small" @click="refresh">刷新</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "CarFilterInput",
    data() {
      return {
        user: {},
        params: {id: '', vin: '', plate: '', vehicleType: '', owner: '', engine: '', model: ''},
        gutter: 20,
        span: 8,
      }
    },
    methods: {
      query() {
        const queryParams = this.$util.trimObject(this.params);
        this.$Bus.$emit('carQueryEvent', queryParams);
      },
      cleanQueryTemp() {
        this.params = {}
      },
      add() {
        this.$Bus.$emit('carEditEvent', {});
      },
      refresh() {
        this.$Bus.$emit('carRefreshEvent');
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }
</style>
