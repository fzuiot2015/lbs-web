<template>
  <lbs-table :items="items" :columns="columns" :query-event="queryEvent"
             :refresh-event="refreshEvent" :edit-event="editEvent"
             :list-url="listUrl" :item-url="itemUrl"></lbs-table>
</template>

<script>
  import LbsTable from "../../components/Table";

  export default {
    name: 'YearlyTable',
    components: {LbsTable},
    data() {
      return {
        items: [],
        columns: [
          {label: '日期', prop: 'date'},
          {label: '下次车检日期', prop: 'nextDate'},
          {label: '描述', prop: 'description'},
        ],
        queryEvent: 'yearlyQueryEvent',
        refreshEvent: 'yearlyRefreshEvent',
        editEvent: 'yearlyEditEvent',
        listUrl: '/yearly/',
        itemUrl: '/yearly/'
      };
    },
  }
</script>



