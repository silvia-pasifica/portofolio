<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <AppNavbar />
  <router-view></router-view>
</template>

<script>
import AppNavbar from "./components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AppNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
