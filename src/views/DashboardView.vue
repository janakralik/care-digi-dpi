<template>
  <div>
    <GrussComponent />
    <h1>CAREdigi Home</h1>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
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
