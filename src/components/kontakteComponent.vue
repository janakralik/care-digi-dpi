<template>
  <div class="background-wrapper">
    <div class="kontakte">
      <h2 class="section-title">Meine Ansprechpartner</h2>
      <p class="einleitungstext">
        Wenn du Unterstützung brauchst oder einfach jemanden anrufen möchtest,
        bist du hier richtig. Ob Familie, Nachbarn, Pflegedienst oder
        Notfallkontakt – mit einem Knopfdruck kannst du die Personen erreichen,
        die dir wichtig sind.
      </p>

      <div
        v-for="(kontakt, index) in kontakte"
        :key="index"
        class="kontakt-card"
      >
        <img :src="kontakt.foto" alt="Foto" class="kontakt-foto" />
        <div class="kontakt-info">
          <strong>{{ kontakt.name }}</strong>
          <p>{{ kontakt.telefon }}</p>
        </div>
        <!-- Button mit tel-Link im Alert -->
        <button class="anrufen-button" @click="anrufen(kontakt.telefon)">
          Anrufen
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kontakte: [],
    };
  },
  mounted() {
    const gespeicherteKontakte = localStorage.getItem("kontakte");
    if (gespeicherteKontakte) {
      this.kontakte = JSON.parse(gespeicherteKontakte);
    } else {
      // Falls nichts gespeichert: Standardkontakte laden
      this.kontakte = [
        { name: "Marie", telefon: "0676 / 8142123", foto: "pfad/zu/marie.png" },
        { name: "Lena", telefon: "0676 / 8142673", foto: "pfad/zu/lena.png" },
        { name: "Klaus", telefon: "0667 / 8142123", foto: "pfad/zu/klaus.png" },
      ];
    }
  },
  methods: {
    anrufen(telefon) {
      const nummer = telefon.replace(/[^0-9+]/g, ""); // nur gültige Zeichen
      const confirmed = confirm(`Möchtest du ${telefon} anrufen?`);
      if (confirmed) {
        window.location.href = `tel:${nummer}`;
      }
    },
  },
};
</script>

<style scoped>
.background-wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 2px #ccc;
}

.section-title {
  background-color: #9353a4;
  color: white;
  padding: 10px;
  display: inline-block;
  border-radius: 20px;
  font-size: 22px;
  margin: 0 0 20px 0;
}

.kontakt-card {
  background: white;
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border: 3px solid #e1b47a; /* oranger Rahmen */
  border-radius: 20px; /* wie bei Ausflügen */
  box-shadow: 0px 0px 10px #ccc; /* wie bei Ausflügen */
  transition: transform 0.2s;
  cursor: pointer;
}

.kontakt-card:hover {
  transform: scale(1.05);
}

.einleitungstext {
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 70px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 1.6;
}

.kontakt-foto {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.kontakt-info {
  flex: 1;
}

.anrufen-button {
  background-color: #e1b47a;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
</style>
