<template>
  <div class="vd-app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "VdApp",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
@include b(app) {
  height: 100%;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @include b(hello-world) {
    height: 100%;
  }
}
</style>
