<template>
  <div class="dashboard-wrapper">
    <grussComponent />

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
};
</script>

<style scoped>
.dashboard-wrapper {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
}

.einleitung {
  margin-bottom: 60px;
  padding: 20px;
  align: center;
  background-color: #fefaf7;
}

.einleitung h2 {
  color: #4f4f4f;
  margin-bottom: 10px;
}

.einleitung p {
  color: #4f4f4f;
  margin-bottom: 10px;
  font-size: 18px;
}

.einleitungsliste {
  list-style: none;
  padding: 0;
  padding-top: 10px;
}

.einleitungsliste li {
  margin-bottom: 15px; /* Etwas mehr Abstand zwischen den Listenelementen */
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

/* Mehr Abstand zwischen den Komponenten */
#erinnerungen,
#kontakte,
#links,
#ausfluege {
  margin-bottom: 90px; /* Abstand zwischen den Komponenten */
}

#erinnerungen {
  margin-top: 80px;
}
</style>
