<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="params.id" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">编号</template>
        </el-input>
      </el-col>

      <el-col :span="8">
        <el-input v-model="params.name" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">姓名</template>
        </el-input>
      </el-col>

      <el-col :span="8">
        <el-input v-model="params.phone" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">电话</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="params.driverLicense" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">驾驶证号</template>
        </el-input>
      </el-col>

      <el-col :span="8">
        <el-input v-model="params.address" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">住址</template>
        </el-input>
      </el-col>

      <el-col :span="8">
        <el-button type="primary" size="small" @click="queryUsers">查询</el-button>
        <el-button type="primary" size="small" @click="cleanQueryTemp">清空</el-button>
        <el-button type="primary" size="small" @click="addUser">增加</el-button>
        <el-button type="primary" size="small" @click="getUsers">刷新</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Bus from '../eventBus.js'

  export default {
    name: "UserFilterInput",
    data() {
      return {
        params: {id: '', name: '', phone: '', driverLicense: '', address: ''}
      }
    },
    methods: {
      queryUsers: function () {
        const queryParams = this.$util.trimObject(this.params);
        queryParams.pageNum = 0;
        console.log(queryParams);
        this.$axios.get("/api/user/list", {
          params: queryParams
        })
          .then((res) => {
            console.log(res.data);
            Bus.$emit('userQueryEvent', res.data);
          })
          .catch(function (res) {
            console.log(res)
          });
      },
      cleanQueryTemp() {
        this.params = {}
      },
      addUser() {

      },
      getUsers() {

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
