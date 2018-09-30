<template>
  <el-header>
    <el-row type="flex" class="end">
      <el-button type="danger" @click="logout">退出</el-button>
    </el-row>
  </el-header>
</template>

<script>
  export default {
    name: "TopBar",
    methods: {
      logout() {
        this.$store.set('login_token', null);
        this.$router.replace('/login');
      }
    }
  }
</script>

<style scoped>

</style>
