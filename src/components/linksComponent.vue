<template>
  <div class="background-wrapper">
    <div class="links">
      <h2 class="section-title">Meine wichtigsten Seiten</h2>
      <p class="einleitungstext">
        Hier findest du direkte Links zu den Internetseiten, die du regelmäßig
        brauchst – zum Beispiel für Gesundheit, Behörden oder Informationen. Du
        musst nicht lange suchen oder tippen, sondern kommst mit einem Klick
        dorthin, wo du hinmöchtest.
      </p>

      <div class="links-grid">
        <a
          v-for="(link, index) in links"
          :key="index"
          :href="link.url"
          class="link-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="link.icon" alt="Icon" class="link-icon" />
          <div class="link-name">{{ link.name }}</div>
          <div class="link-details">
            <p>{{ link.beschreibung }}</p>
          </div>
          <button class="hilfe-button">HILFE</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  mounted() {
    const gespeicherteLinks = localStorage.getItem("links");
    if (gespeicherteLinks) {
      this.links = JSON.parse(gespeicherteLinks);
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

.einleitungstext {
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 70px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 1.6;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.link-card:hover {
  transform: scale(1.05);
}

.link-icon {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.link-name {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
}

.link-details {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  text-align: center;
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
