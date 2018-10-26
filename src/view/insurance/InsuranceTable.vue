<template>
  <lbs-table :items="items" :columns="columns" :query-event="queryEvent"
             :refresh-event="refreshEvent" :edit-event="editEvent"
             :list-url="listUrl" :item-url="itemUrl"></lbs-table>
</template>

<script>
  import LbsTable from "../../components/Table";

  export default {
    name: 'InsuranceTable',
    components: {LbsTable},
    data() {
      return {
        items: [],
        columns: [
          {label: 'ID', prop: 'id'},
          {label: '用户ID', prop: 'userId'},
          {label: '保险公司', prop: 'insurer'},
          {label: '保单号', prop: 'policyId'},
          {label: '保险电话', prop: 'insurancePhone'},
          {label: '开始时间', prop: 'startTime'},
          {label: '结束时间', prop: 'endTime'},
        ],
        queryEvent: 'insuranceQueryEvent',
        refreshEvent: 'insuranceRefreshEvent',
        editEvent: 'insuranceEditEvent',
        listUrl: '/api/insurance/list',
        itemUrl: '/api/insurance/'
      };
    },
  }
</script>
