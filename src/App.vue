<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Index from "./view/Index";

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
