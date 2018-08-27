<template>
  <div id="app">
    <slds-vue></slds-vue>
  </div>
</template>

<script>
import SldsVue from './components/SldsVue.vue';

export default {
  name: 'app',
  components: {
    SldsVue,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
