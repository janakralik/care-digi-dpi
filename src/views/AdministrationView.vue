<template>
  <div class="admin-wrapper">
    <!-- Einleitungstext -->
    <div class="einleitung">
      <h2>Willkommen im Administrationsbereich</h2>
      <p>
        Hier kannst du alles verwalten, was die App betrifft. Du hast die
        Möglichkeit, Inhalte zu bearbeiten, neue Erinnerungen hinzuzufügen oder
        bestehende Einträge zu aktualisieren und zu löschen. Dieser Bereich ist
        speziell dafür da, um dir die Organisation zu erleichtern und
        sicherzustellen, dass alle Informationen für die Nutzer:innen aktuell
        und hilfreich sind. Nimm dir Zeit, schau dich um und gestalte die App
        so, wie sie am besten passt!
      </p>
      <ul class="einleitungsliste">
        <li>
          <a href="#erinnerungen">Erinnerungen</a> – Erstellen Sie Erinnerungen,
          damit kein Termin vergessen wird.
        </li>
        <li>
          <a href="#links">Wichtige Seiten</a> – Verwalten Sie Links zu
          bevorzugten Websites.
        </li>
        <li>
          <a href="#kontakte">Ansprechpartner</a> – Fügen Sie wichtige Kontakte
          hinzu.
        </li>
      </ul>
    </div>

    <!-- Komponenten -->

    <div id="erinnerungen" class="admin-section">
      <ErinnerungErstellen />
    </div>

    <div id="links" class="admin-section">
      <LinkErstellen />
    </div>

    <div id="kontakte" class="admin-section">
      <KontakteErstellen />
    </div>

    <div id="nachrichtenVerwalten" class="admin-section">
      <NachrichtVerwalten />
    </div>

    <div id="heroBildAuswählen" class="admin-section">
      <HeroBildVerwalten />
    </div>
  </div>
</template>

<script>
import HeroBildVerwalten from "@/components/HeroBildVerwalten.vue";
import KontakteErstellen from "@/components/kontakteErstellen.vue";
import LinkErstellen from "@/components/linksErstellen.vue";
import ErinnerungErstellen from "@/components/erinnerungenErstellen.vue";
import NachrichtVerwalten from "@/components/nachrichtVerwalten.vue";

export default {
  components: {
    HeroBildVerwalten,
    KontakteErstellen,
    LinkErstellen,
    ErinnerungErstellen,
    NachrichtVerwalten,
  },
};
</script>

<style scoped>
.admin-wrapper {
  padding: 20px;
}

p {
  margin-bottom: 30px; /* Abstand unter der Beschreibung */
}

.admin-section {
  margin-bottom: 50px; /* Abstand zwischen den einzelnen Formular-Komponenten */
}

.einleitung {
  margin: 50px auto 60px auto;
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
}

.einleitungsliste li {
  margin-bottom: 15px; /* Etwas mehr Abstand zwischen den Listenelementen */
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
