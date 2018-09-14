<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="queryTemp.id" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">编号</template>
        </el-input>
      </el-col>

      <el-col :span="8">
        <el-input v-model="queryTemp.name" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">姓名</template>
        </el-input>
      </el-col>

      <el-col :span="8">
        <el-input v-model="queryTemp.phone" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">电话</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="queryTemp.driverLicense" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
          <template slot="prepend">驾驶证号</template>
        </el-input>
      </el-col>

      <el-col :span="8">
        <el-input v-model="queryTemp.address" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
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

    <el-table :data="users" height="300" border style="width: 100%" ref="user-table">
      <el-table-column label="编号" prop="id" sortable width="180"></el-table-column>
      <el-table-column label="姓名" prop="name" sortable width="180"></el-table-column>
      <el-table-column label="电话" prop="phone" sortable width="180"></el-table-column>
      <el-table-column label="驾驶证号" prop="driverLicense" sortable width="180"></el-table-column>
      <el-table-column label="住址" prop="address" sortable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="editUser(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handelDeleteUser(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "UserContent",
    data() {
      return {
        users: [],
        query: {id: '', name: '', phone: '', driverLicense: '', address: ''},
        queryTemp: {id: '', name: '', phone: '', driverLicense: '', address: ''}
      }
    },
    mounted: function () {
      this.getUsers();
    },
    methods: {
      getUsers() {
        const that = this;
        const queryParams = this.$util.trimObject(that.query);
        console.log(queryParams);

        this.$axios.get("/api/user/list", {
          params: queryParams
        }).then(
          function (res) {
            console.log(res);
            const data = res.data;
            that.setUsers(data.result);
          })
      },
      deletUser(){
        this.$axios.delete("/api/user")
          .then(

          )
      },
      setUsers(users) {
        this.users = users;
      },
      queryUsers() {
        this.query = this.queryTemp;
        this.getUsers();
      },
      cleanQueryTemp() {
        this.queryTemp = {};
      },
      addUser() {

      },
      handelDeleteUser(index, row) {
        console.log(row);
      },
      editUser(index, row) {
        console.log(row);
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
  }
</style>
