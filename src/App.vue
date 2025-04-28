<template>
  <div class="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/headerComponent.vue";
import FooterComponent from "./components/footerComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent },
};
</script>

<style>
* {
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
