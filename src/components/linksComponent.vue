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
  background-color: white; /* Weißer Hintergrund */
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px #ccc; /* Leichter Schatten */
}

.section-title {
  background-color: #6d3a8c;
  color: white;
  padding: 10px;
  border-radius: 20px;
  font-size: 22px;
  margin: 0 0 20px 0; /* Abstand nach unten */
  border-top: 5px solid #6d3a8c; /* Lila Rand oben */
}

.links-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.link-card {
  background: #fbe3ca;
  width: 250px;
  text-align: center;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #ccc;
}

.link-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.link-name {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 18px;
}

.hilfe-button {
  background-color: #e1b47a;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
</style>
