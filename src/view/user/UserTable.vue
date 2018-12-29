<template>
  <lbs-table :items="items" :columns="columns" :query-event="queryEvent"
             :refresh-event="refreshEvent" :edit-event="editEvent"
             :list-url="listUrl" :item-url="itemUrl"></lbs-table>
</template>

<script>
  import LbsTable from "../../components/Table";

  export default {
    name: 'UserTable',
    components: {LbsTable},
    data() {
      return {
        items: [],
        columns: [
          {label: 'ID', prop: 'id'},
          {label: '账号', prop: 'username'},
          {label: '姓名', prop: 'name'},
          {label: '电话', prop: 'phone'},
          {label: '驾驶证号', prop: 'driverLicense'}
        ],
        queryEvent: 'userQueryEvent',
        refreshEvent: 'userRefreshEvent',
        editEvent: 'userEditEvent',
        listUrl: '/api/user/list/',
        itemUrl: '/api/user/'
      };
    },
  }
</script>
