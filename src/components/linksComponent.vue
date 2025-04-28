/* eslint-disable vue/multi-word-component-names */

<template>
  <div class="background-wrapper">
    <div class="links">
      <h2 class="section-title">Meine wichtigsten Seiten</h2>

      <div class="links-grid">
        <div v-for="(link, index) in links" :key="index" class="link-card">
          <img :src="link.icon" alt="Icon" class="link-icon" />
          <div class="link-name">{{ link.name }}</div>
          <button class="hilfe-button">HILFE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Hausarzt Dr. Pum", icon: "pfad/zu/icon1.png" },
        { name: "Raiffeisen Bank", icon: "pfad/zu/icon2.png" },
        { name: "Optiker Oppenborn", icon: "pfad/zu/icon3.png" },
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

.links-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.link-card {
  background: #efd1b0;
  width: 250px; /* Breite auf 250px erhöht */
  text-align: center;
  padding: 30px; /* Etwas mehr Polsterung hinzugefügt */
  border-radius: 20px;
  box-shadow: 0px 0px 10px #ccc; /* Etwas stärkeren Schatten hinzugefügt */
}

.link-icon {
  width: 100px; /* Größeres Icon */
  height: 100px;
  margin-bottom: 20px; /* Mehr Abstand zum Text */
}

.link-name {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 18px; /* Größere Schrift */
}

.hilfe-button {
  background-color: #e1b47a;
  border: none;
  padding: 10px 15px; /* Mehr Polsterung */
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
</style>
