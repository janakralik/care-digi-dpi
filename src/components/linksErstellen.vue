<template>
  <div class="background-wrapper">
    <h2 class="section-title">Links</h2>

    <!-- Button zum Ein- und Ausklappen des Formulars -->
    <button @click="toggleForm" class="toggle-button">
      Neuen Link hinzufügen
    </button>

    <!-- Formular zum Hinzufügen eines neuen Links -->
    <div v-if="formVisible">
      <form @submit.prevent="addLink" class="link-formular">
        <input v-model="newLink.name" type="text" placeholder="Name" required />
        <textarea
          v-model="newLink.beschreibung"
          placeholder="Beschreibung"
          required
        ></textarea>
        <input
          v-model="newLink.url"
          type="url"
          placeholder="URL (z.B. https://...)"
          required
        />

        <div class="icon-auswahl">
          <label
            v-for="(icon, index) in icons"
            :key="index"
            class="icon-option"
          >
            <input type="radio" v-model="newLink.icon" :value="icon" required />
            <img :src="icon" alt="Icon" />
          </label>
        </div>

        <button type="submit">Hinzufügen</button>
      </form>
    </div>

    <!-- Bereits hinzugefügte Links -->
    <div class="links">
      <h3>Bereits hinzugefügt:</h3>
      <div v-for="(link, index) in links" :key="index" class="link-card">
        <img :src="link.icon" alt="Icon" class="link-icon" />
        <div class="link-info">
          <strong>{{ link.name }}</strong>
          <p>{{ link.beschreibung }}</p>
          <small>{{ link.url }}</small>
        </div>
        <button @click="entferneLink(index)" class="entfernen-button">
          Entfernen
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
      newLink: {
        name: "",
        beschreibung: "",
        url: "",
        icon: "",
      },
      icons: [
        require("@/assets/icons/doctor.png"),
        require("@/assets/icons/glasses.png"),
        require("@/assets/icons/money.png"),
        require("@/assets/icons/party-hat.png"),
        require("@/assets/icons/phone.png"),
        require("@/assets/icons/pills.png"),
        require("@/assets/icons/store.png"),
      ],
      formVisible: false,
    };
  },
  mounted() {
    const gespeicherteLinks = localStorage.getItem("links");
    if (gespeicherteLinks) {
      this.links = JSON.parse(gespeicherteLinks);
    }
  },
  methods: {
    addLink() {
      this.links.push({ ...this.newLink });
      localStorage.setItem("links", JSON.stringify(this.links));

      // Formular leeren
      this.newLink.name = "";
      this.newLink.beschreibung = "";
      this.newLink.url = "";
      this.newLink.icon = "";
    },
    entferneLink(index) {
      this.links.splice(index, 1);
      localStorage.setItem("links", JSON.stringify(this.links));
    },
    toggleForm() {
      this.formVisible = !this.formVisible;
    },
  },
};
</script>

<style scoped>
/* Hier bleibt alles exakt wie du es hattest */
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
  border-radius: 20px;
  font-size: 22px;
  margin: 0 0 20px 0;
  border-top: 5px solid #6d3a8c;
}

.toggle-button {
  background-color: #eab377;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 20px;
}

.link-formular {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

.link-formular input,
.link-formular textarea {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.link-formular button {
  padding: 10px;
  background-color: #e1b47a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.icon-auswahl {
  display: flex;
  gap: 10px;
  margin: 10px 0;
  flex-wrap: wrap;
}

.icon-option {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-option input {
  margin-bottom: 5px;
}

.icon-option img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
}

.links h3 {
  margin-top: 20px;
}

.link-card {
  background: #fbe3ca;
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #efd1b0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.link-icon {
  width: 70px;
  height: 70px;
  margin-right: 20px;
}

.link-info {
  flex: 1;
}

.entfernen-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
