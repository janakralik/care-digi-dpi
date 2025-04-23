<template>
  <div>
    <h1>CAREdigi Home</h1>
    <GrussComponent />
    <ErinnerungenComponent />
    <KontakteComponent />
    <LinksComponent />
  </div>
</template>

<script>
import GrussComponent from "../components/grussComponent.vue";
import ErinnerungenComponent from "../components/erinnerungenComponent.vue";
import KontakteComponent from "../components/kontakteComponent.vue";
import LinksComponent from "../components/linksComponent.vue";

export default {
  components: {
    GrussComponent,
    ErinnerungenComponent,
    KontakteComponent,
    LinksComponent,
  },
};
</script>
