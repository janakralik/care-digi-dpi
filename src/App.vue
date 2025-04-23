<template>
  <div>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<css>
* {
  font-family: 'Inter', sans-serif;
}
</css>

<script>
import HeaderComponent from "./components/headerComponent.vue";
import FooterComponent from "./components/footerComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent },
};
</script>
