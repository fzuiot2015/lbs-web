<template>
  <div>
    <el-row :gutter="gutter">
      <el-col :span="span">
        <el-input v-model="params.userId" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">用户ID</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.insurer" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">保险公司</template>
        </el-input>
      </el-col>

      <el-col :span="span">
        <el-input v-model="params.policyId" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">保单号</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="gutter">
      <el-col :span="span">
        <el-button type="primary" size="small" @click="query">查询</el-button>
        <el-button type="primary" size="small" @click="cleanParams">清空</el-button>
        <el-button type="primary" size="small" @click="add">新增</el-button>
        <el-button type="primary" size="small" @click="refresh">刷新</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  const queryEvent = 'insuranceQueryEvent';
  const refreshEvent = 'insuranceRefreshEvent';
  const editEvent = 'insuranceEditEvent';

  export default {
    name: 'InsuranceFilterInput',
    data() {
      return {
        params: {},
        gutter: 20,
        span: 8,
      }
    },
/*    mounted() {
      this.params.userId = this.$route.query.userId;
    },*/
    methods: {
      query() {
        const queryParams = this.$util.trimObject(this.params);
        this.$Bus.$emit(queryEvent, queryParams);
      },
      cleanParams() {
        this.params = {}
      },
      add() {
        this.$Bus.$emit(editEvent, {});
      },
      refresh() {
        this.$Bus.$emit(refreshEvent);
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
