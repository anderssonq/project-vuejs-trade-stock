<template>
  <div id="app" class="container">
    <appHeader></appHeader>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  },
  created(){
    this.$store.dispatch('initStocks');
  }
};
</script>

<style>
</style>
