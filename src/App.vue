<template>
  <div class="app">
    <HeaderComponent />
    <main class="main-content">
      <router-view />
    </main>
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

html,
body,
.app {
  height: 100%;
  background-color: #fff;
}

/* Abstand zum fixierten Header */
.main-content {
  margin-top: 100px; /* exakt wie Höhe im Header */
}
</style>
