<template>
  <div class="background-wrapper">
    <h2 class="section-title">Profil</h2>

    <!-- Senior Section -->
    <div class="profil-section">
      <h3 class="subsection-title">Senior</h3>
      <form @submit.prevent="speichernSenior" class="profil-formular">
        <input
          v-model="senior.vorname"
          type="text"
          placeholder="Vorname"
          required
        />
        <input
          v-model="senior.nachname"
          type="text"
          placeholder="Nachname"
          required
        />
        <input
          v-model="senior.geburtstag"
          type="date"
          placeholder="Geburtstag"
        />
        <button type="submit">Senior speichern</button>
      </form>
    </div>

    <!-- Administration Section -->
    <div class="profil-section">
      <h3 class="subsection-title">Administration</h3>
      <form @submit.prevent="speichernAdmin" class="profil-formular">
        <input
          v-model="admin.vorname"
          type="text"
          placeholder="Vorname"
          required
        />
        <input
          v-model="admin.nachname"
          type="text"
          placeholder="Nachname"
          required
        />
        <input
          v-model="admin.email"
          type="email"
          placeholder="E-Mail-Adresse"
          required
        />
        <input
          v-model="admin.telefonnummer"
          type="tel"
          placeholder="Telefonnummer"
        />
        <button type="submit">Admin speichern</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      senior: {
        vorname: "",
        nachname: "",
        geburtstag: "",
      },
      admin: {
        vorname: "",
        nachname: "",
        email: "",
        telefonnummer: "",
      },
    };
  },
  mounted() {
    // gespeicherte Daten laden
    const gespeicherterSenior = localStorage.getItem("seniorProfil");
    const gespeicherterAdmin = localStorage.getItem("adminProfil");

    if (gespeicherterSenior) {
      this.senior = JSON.parse(gespeicherterSenior);
    }
    if (gespeicherterAdmin) {
      this.admin = JSON.parse(gespeicherterAdmin);
    }
  },
  methods: {
    speichernSenior() {
      localStorage.setItem("seniorProfil", JSON.stringify(this.senior));
      alert("Senior-Profil gespeichert!");
    },
    speichernAdmin() {
      localStorage.setItem("adminProfil", JSON.stringify(this.admin));
      alert("Administrator-Profil gespeichert!");
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

.subsection-title {
  font-size: 18px;
  margin-bottom: 10px;
  color: #6d3a8c;
}

.profil-section {
  margin-bottom: 40px;
}

.profil-formular {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.profil-formular input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.profil-formular button {
  padding: 8px 16px; /* Etwas kleiner, kompakter */
  background-color: #e1b47a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px; /* Optional: Schrift etwas kleiner */
  max-width: 200px; /* NEU: Maximalbreite setzen */
  align-self: center; /* Optional: bleibt schön mittig */
}
</style>
