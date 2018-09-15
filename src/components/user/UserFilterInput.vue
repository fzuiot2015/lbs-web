<template>
  <div>
    <el-row :gutter="gutter">
      <el-col :span="span">
        <el-input v-model="params.username" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">账号</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.name" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">姓名</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.phone" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">电话</template>
        </el-input>
      </el-col>

    </el-row>

    <el-row :gutter="gutter">
      <el-col :span="span">
        <el-input v-model="params.driverLicense" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">驾驶证号</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.address" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">住址</template>
        </el-input>
      </el-col>

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
    name: 'UserFilterInput',
    data() {
      return {
        user: {},
        params: {id: '', username: '', name: '', phone: '', driverLicense: '', address: ''},
        gutter: 20,
        span: 8,
      }
    },
    methods: {
      query() {
        const queryParams = this.$util.trimObject(this.params);
        this.$Bus.$emit('userQueryEvent', queryParams);
      },
      cleanQueryTemp() {
        this.params = {}
      },
      add() {
        this.$Bus.$emit('userEditEvent', {});
      },
      refresh() {
        this.$Bus.$emit('userRefreshEvent');
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
