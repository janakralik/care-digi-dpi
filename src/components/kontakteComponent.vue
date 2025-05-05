<template>
  <div class="background-wrapper">
    <div class="kontakte">
      <h2 class="section-title">Meine Ansprechpartner</h2>

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
        <button class="anrufen-button">Anrufen</button>
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
};
</script>

<style scoped>
.background-wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px #ccc;
}

.section-title {
  background-color: #6d3a8c;
  color: white;
  padding: 10px;
  display: inline-block;
  border-radius: 20px;
  font-size: 22px;
  margin: 0 0 20px 0;
  border-top: 5px solid #6d3a8c;
}

.kontakt-card {
  background: #fff;
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #efd1b0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
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
