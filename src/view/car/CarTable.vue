<template>
  <lbs-table :items="items" :columns="columns" :query-event="queryEvent"
             :refresh-event="refreshEvent" :edit-event="editEvent"
             :list-url="listUrl" :item-url="itemUrl"></lbs-table>
</template>

<script>
  import LbsTable from "../../components/Table";

  export default {
    name: 'CarTable',
    components: {LbsTable},
    data() {
      return {
        items: [],
        columns: [
          // {label: 'ID', prop: 'id'},
          {label: '用户ID', prop: 'userId'},
          {label: '车辆识别码', prop: 'vin'},
          {label: '车牌号', prop: 'plate'},
          {label: '车辆类型', prop: 'vehicleType'},
          {label: '发动机号', prop: 'engine'},
          {label: '车型', prop: 'model'},
        ],
        queryEvent: 'carQueryEvent',
        refreshEvent: 'carRefreshEvent',
        editEvent: 'carEditEvent',
        listUrl: '/car/',
        itemUrl: '/car/'
      };
    },
  }
</script>
