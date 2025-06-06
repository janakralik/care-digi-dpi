<template>
  <div class="background-wrapper">
    <!-- Titel und Button in einer Zeile -->
    <div class="header-zeile">
      <h2 class="section-title">Erinnerungen</h2>
      <button @click="toggleForm" class="toggle-button">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <!-- Formular zum Hinzufügen -->
    <div v-if="formVisible">
      <form @submit.prevent="addErinnerung" class="link-formular">
        <input
          v-model="newErinnerung.title"
          type="text"
          placeholder="Name"
          required
        />
        <textarea
          v-model="newErinnerung.beschreibung"
          placeholder="Beschreibung"
          required
        ></textarea>

        <input v-model="newErinnerung.datum" type="date" required />
        <input v-model="newErinnerung.uhrzeit" type="time" required />

        <div class="icon-auswahl">
          <label
            v-for="(icon, index) in icons"
            :key="index"
            class="icon-option"
          >
            <input
              type="radio"
              v-model="newErinnerung.icon"
              :value="icon"
              required
            />
            <img :src="icon" alt="Icon" />
          </label>
        </div>

        <button type="submit">Hinzufügen</button>
      </form>
    </div>

    <!-- Bereits hinzugefügte Erinnerungen -->
    <div class="links">
      <h3>Bereits hinzugefügt:</h3>
      <div
        v-for="(erinnerung, index) in erinnerungen"
        :key="index"
        class="link-card"
      >
        <img :src="erinnerung.icon" alt="Icon" class="link-icon" />
        <div class="link-info">
          <strong>{{ erinnerung.title }}</strong>
          <p>{{ erinnerung.beschreibung }}</p>
          <small>{{ erinnerung.datum }} {{ erinnerung.uhrzeit }}</small>
        </div>
        <button @click="entferneErinnerung(index)" class="entfernen-button">
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
      erinnerungen: [],
      newErinnerung: {
        title: "",
        beschreibung: "",
        datum: "",
        uhrzeit: "",
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
    const gespeicherteErinnerungen = localStorage.getItem("erinnerungen");
    if (gespeicherteErinnerungen) {
      this.erinnerungen = JSON.parse(gespeicherteErinnerungen);
    }
  },
  methods: {
    addErinnerung() {
      this.erinnerungen.push({ ...this.newErinnerung, done: false });
      localStorage.setItem("erinnerungen", JSON.stringify(this.erinnerungen));

      // Formular zurücksetzen
      this.newErinnerung.title = "";
      this.newErinnerung.beschreibung = "";
      this.newErinnerung.datum = "";
      this.newErinnerung.uhrzeit = "";
      this.newErinnerung.icon = "";
    },
    entferneErinnerung(index) {
      this.erinnerungen.splice(index, 1);
      localStorage.setItem("erinnerungen", JSON.stringify(this.erinnerungen));
    },
    toggleForm() {
      this.formVisible = !this.formVisible;
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

.header-zeile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  background-color: #9353a4;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 22px;
  margin: 0;
  display: inline-block;
}

.toggle-button {
  background-color: #fafafa;
  color: #9353a4;
  font-size: 22px;
  padding: 5px 12px;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
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
