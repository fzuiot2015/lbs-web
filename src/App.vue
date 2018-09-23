<template>
  <div id="app">
    <router-view></router-view>
    <!--<Index></Index>-->
  </div>
</template>

<script>
  import Index from "./components/Index";

  export default {
    name: 'App',
    components: {Index}
  }
</script>

<style>
  body{
    margin:0;
    padding:0;
  }
</style>
