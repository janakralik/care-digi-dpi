<template>
  <div class="dashboard-wrapper">
    <grussComponent />

    <!-- Einleitungstext -->
    <div class="einleitung">
      <h2>Was möchtest du heute machen?</h2>
      <p>Hier findest du alles Wichtige auf einen Blick:</p>
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
  </div>
</template>

<script>
import grussComponent from "@/components/grussComponent.vue";
import erinnerungenComponent from "@/components/erinnerungenComponent.vue";
import kontakteComponent from "@/components/kontakteComponent.vue";
import linksComponent from "@/components/linksComponent.vue";

export default {
  components: {
    grussComponent,
    erinnerungenComponent,
    kontakteComponent,
    linksComponent,
  },
};
</script>

<style scoped>
.dashboard-wrapper {
  background-color: #fafafa;
  padding: 20px;
  border-radius: 20px;
}

.einleitung {
  margin-bottom: 40px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px #ccc;
}

.einleitung h2 {
  color: #6d3a8c;
  margin-bottom: 10px;
}

.einleitungsliste {
  list-style: none;
  padding: 0;
}

.einleitungsliste li {
  margin-bottom: 10px;
  font-size: 18px;
}

.einleitungsliste a {
  color: #eab377;
  text-decoration: none;
  font-weight: bold;
}

.einleitungsliste a:hover {
  text-decoration: underline;
}
</style>
