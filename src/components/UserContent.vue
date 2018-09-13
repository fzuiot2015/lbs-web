<template>
  <div id="user" class="container-fluid tab-pane fade"><br>
    <div id="user-content" class="container">

      <!--用户管理界面搜索框部分-->
      <div>
        <div class="row">
          <input-group input-key="编号" :input-value="queryTemp.id"></input-group>
          <input-group input-key="姓名" :input-value="queryTemp.name"></input-group>
          <input-group input-key="电话" :input-value="queryTemp.phone"></input-group>
        </div>

        <div class="row">
          <input-group input-key="驾驶证号" :input-value="queryTemp.driverLicense"></input-group>
          <input-group input-key="住址" :input-value="queryTemp.address"></input-group>
        </div>

        <div class="row">
          {{allData}}
        </div>

      </div>
      <br>
      <!--用户管理界面搜索框部分-->

      <!--用户管理界面数据表格部分-->
      <table class="table table-hover table-bordered">
        <thead class="thead-light">
        <tr>
          <th>编号</th>
          <th>姓名</th>
          <th>电话</th>
          <th>驾驶证号</th>
          <th>住址</th>
          <th>操作</th>
        </tr>
        </thead>

        <tbody id="table-user">
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.driverLicense}}</td>
          <td>{{user.address}}</td>
          <td>
            <button class="btn btn-outline-secondary">编辑</button>
            <button class="btn btn-outline-danger">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <!--用户管理界面数据表格部分-->

      <ul class="pagination">
        <li id="page-start" class="page-item "><a class="page-link" href="javascript:void(0)">首页</a></li>
        <li id="page-previous" class="page-item "><a class="page-link" href="javascript:void(0)">上一页</a></li>
        <li class="page-item"><a id="page-num" class="page-link" href="javascript:void(0)">?/?</a></li>
        <li id="page-next" class="page-item"><a class="page-link" href="javascript:void(0)">下一页</a></li>
        <li id="page-end" class="page-item"><a class="page-link" href="javascript:void(0)">尾页</a></li>
      </ul>

    </div>
  </div>
</template>

<script>
  import InputGroup from "../components/InputGroup";

  export default {
    name: "UserContent",
    components: {InputGroup},
    data() {
      return {
        users: [],
        query: {id: '', name: '', phone: '', driverLicense: '', address: ''},
        queryTemp: {id: '', name: '', phone: '', driverLicense: '', address: ''}
      }
    },
    computed: {
      allData: function () {
        return this.queryTemp.id + ' ' + this.queryTemp.name + ' ' + this.queryTemp.phone + ' ' + this.queryTemp.driverLicense + ' ' + this.queryTemp.address;
      }
    },
    mounted: function () {
      this.getUsers();
    },
    methods: {
      getUsers() {
        const that = this;
        const queryParams = trimObject(that.query);
        console.log(queryParams);

        this.$axios.get("/user/list", {
          params: queryParams
        }).then(
          function (res) {
            const body = res.body;
            that.setUsers(body.result.content);
          })
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

      }
    }
  }
</script>

<style scoped>

</style>
