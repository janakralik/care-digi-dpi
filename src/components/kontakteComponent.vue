/* eslint-disable vue/multi-word-component-names */

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
      kontakte: [
        { name: "Marie", telefon: "0676 / 8142123", foto: "pfad/zu/marie.png" },
        { name: "Lena", telefon: "0676 / 8142673", foto: "pfad/zu/lena.png" },
        { name: "Klaus", telefon: "0667 / 8142123", foto: "pfad/zu/klaus.png" },
      ],
    };
  },
};
</script>

<style scoped>
.background-wrapper {
  background-color: #fafafa;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.section-title {
  background-color: #6d3a8c;
  color: white;
  padding: 10px;
  border-radius: 20px;
  font-size: 22px;
  margin: 40px 0 20px 0;
}

.kontakt-card {
  background: #fff;
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #efd1b0;
  border-radius: 10px;
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
