<template>
  <div class="admin-wrapper">
    <!-- Einleitungstext -->
    <div class="einleitung">
      <h2>Willkommen im Administrationsbereich!</h2>
      <p>
        Hier können Sie die Homepage Ihrer Liebsten ganz einfach verwalten und
        anpassen.
      </p>
      <ul class="einleitungsliste">
        <li>
          <a href="#erinnerungen">📝 Erinnerungen</a> – Erstellen Sie
          Erinnerungen, damit kein Termin vergessen wird.
        </li>
        <li>
          <a href="#links">🌐 Wichtige Seiten</a> – Verwalten Sie Links zu
          bevorzugten Websites.
        </li>
        <li>
          <a href="#kontakte">📞 Ansprechpartner</a> – Fügen Sie wichtige
          Kontakte hinzu.
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
  </div>
</template>

<script>
import KontakteErstellen from "@/components/kontakteErstellen.vue";
import LinkErstellen from "@/components/linksErstellen.vue";
import ErinnerungErstellen from "@/components/erinnerungenErstellen.vue"; // <- Neu hinzugefügt

export default {
  components: {
    KontakteErstellen,
    LinkErstellen,
    ErinnerungErstellen, // <- Neu hinzugefügt
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
  margin-bottom: 60px; /* Mehr Abstand nach unten */
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
