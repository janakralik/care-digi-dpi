<template>
  <div class="background-wrapper">
    <div class="links">
      <h2 class="section-title">Meine wichtigsten Seiten</h2>
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
          <button class="hilfe-button" @click.stop.prevent="zeigeHilfe(link)">
            HILFE
          </button>
        </a>
      </div>
    </div>

    <!-- Hilfe PopUp -->
    <div
      v-if="aktiveHilfe"
      class="modal-overlay"
      @click.self="aktiveHilfe = null"
    >
      <div class="modal">
        <h3>{{ aktiveHilfe.name }}</h3>
        <p>{{ aktiveHilfe.beschreibung }}</p>
        <button @click="aktiveHilfe = null" class="schliessen-button">
          Schließen
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [],
      aktiveHilfe: null,
    };
  },
  mounted() {
    const gespeicherteLinks = localStorage.getItem("links");
    if (gespeicherteLinks) {
      this.links = JSON.parse(gespeicherteLinks);
    }
  },
  methods: {
    zeigeHilfe(link) {
      this.aktiveHilfe = link;
    },
  },
};
</script>

<style scoped>
.background-wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 2px #ccc;
}

.section-title {
  background-color: #9353a4;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 22px;
  margin-bottom: 30px;
  display: inline-block;
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
  position: relative;
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
  font-size: 20px;
  margin-bottom: 10px;
}

.link-text {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
  text-align: center;
}

.hilfe-button {
  background-color: #d79b52;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 0px 10px #999;
  text-align: center;
}

.modal h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.modal p {
  font-size: 16px;
  color: #444;
  margin-bottom: 20px;
}

.schliessen-button {
  background-color: #9353a4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
