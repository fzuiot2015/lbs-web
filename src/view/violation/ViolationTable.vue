<template>
  <lbs-table :items="items" :columns="columns" :query-event="queryEvent"
             :refresh-event="refreshEvent" :edit-event="editEvent"
             :list-url="listUrl" :item-url="itemUrl"></lbs-table>
</template>

<script>
  import LbsTable from "../../components/Table";

  export default {
    name: 'ViolationTable',
    components: {LbsTable},
    data() {
      return {
        items: [],
        columns: [
          {label: '时间', prop: 'date'},
          {label: '地址', prop: 'address'},
          {label: '纬度', prop: 'lat'},
          {label: '经度', prop: 'lng'},
          {label: '描述', prop: 'description'},
        ],
        queryEvent: 'violationQueryEvent',
        refreshEvent: 'violationRefreshEvent',
        editEvent: 'violationEditEvent',
        listUrl: '/violation/',
        itemUrl: '/violation/'
      };
    },
  }
</script>



