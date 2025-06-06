<template>
  <div class="dashboard-wrapper">
    <!-- Hero-Bild über die gesamte Breite -->
    <div
      class="hero-image"
      :style="{ backgroundImage: 'url(' + heroBild + ')' }"
    ></div>

    <!-- Gruss-Komponente -->
    <div class="gruss-container">
      <grussComponent />
    </div>

    <!-- Nachricht vom Enkel o.Ä. (nur Text) -->
    <div class="nachricht" v-if="nachricht">
      <p class="nachricht-text">{{ nachricht }}</p>
    </div>

    <!-- Einleitungstext -->
    <div class="einleitung">
      <h2>Was möchtest du heute machen?</h2>
      <ul class="einleitungsliste">
        <li>
          <a href="#erinnerungen">📝 Erinnerungen</a> – Behalte deine Aufgaben
          im Überblick und hake sie einfach ab.
        </li>
        <li>
          <a href="#kontakte">📞 Ansprechpartner</a> – Ruf schnell wichtige
          Personen an, wenn du Hilfe brauchst.
        </li>
        <li>
          <a href="#links">🌐 Wichtige Seiten</a> – Direktzugriff auf deine
          wichtigsten Online-Dienste.
        </li>
        <li>
          <a href="#ausfluege">🌸 Ausflüge</a> – Finde Ausflüge in deiner Nähe.
        </li>
      </ul>
    </div>

    <!-- Komponenten -->
    <div id="erinnerungen">
      <erinnerungenComponent />
    </div>
    <div id="kontakte">
      <kontakteComponent />
    </div>
    <div id="links">
      <linksComponent />
    </div>
    <div id="ausfluege">
      <ausflugComponent />
    </div>
  </div>
</template>

<script>
import grussComponent from "@/components/grussComponent.vue";
import erinnerungenComponent from "@/components/erinnerungenComponent.vue";
import kontakteComponent from "@/components/kontakteComponent.vue";
import linksComponent from "@/components/linksComponent.vue";
import ausflugComponent from "@/components/ausflugComponent.vue";

export default {
  components: {
    grussComponent,
    erinnerungenComponent,
    kontakteComponent,
    linksComponent,
    ausflugComponent,
  },
  data() {
    return {
      heroBild: require("@/assets/field.jpg"),
      nachricht: null,
    };
  },
  mounted() {
    const gespeichertesBild = localStorage.getItem("heroBild");
    if (gespeichertesBild) {
      this.heroBild = gespeichertesBild;
    }
    this.nachricht = localStorage.getItem("omaNachricht");
  },
};
</script>

<style scoped>
.dashboard-wrapper {
  background-color: #ffffff;
}

.hero-image {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.gruss-container {
  max-width: 1200px;
  margin: -60px auto 30px auto;
  padding: 0 20px;
  z-index: 2;
  position: relative;
}

.nachricht {
  text-align: center;
  margin: 0 auto 60px auto;
  padding: 20px;
  max-width: 800px;
  background-color: #fefaf7;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #ccc;
}

.nachricht-text {
  font-size: 20px;
  color: #4f4f4f;
  font-style: italic;
}

.einleitung {
  margin: 0 auto 60px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 0px 10px #ccc;
  max-width: 1000px;
}

.einleitung h2 {
  color: #4f4f4f;
  margin-bottom: 10px;
}

.einleitungsliste {
  list-style: none;
  padding: 0;
  padding-top: 10px;
}

.einleitungsliste li {
  margin-bottom: 15px;
  font-size: 18px;
  color: #4f4f4f;
}

.einleitungsliste a {
  color: #eab377;
  text-decoration: none;
  font-weight: bold;
}

.einleitungsliste a:hover {
  text-decoration: underline;
}

#erinnerungen,
#kontakte,
#links,
#ausfluege {
  margin-bottom: 150px;
}

#erinnerungen {
  margin-top: 150px;
}
</style>
