<template>
  <div class="background-wrapper">
    <h2 class="section-title">Neuen Ansprechpartner hinzufügen</h2>

    <form @submit.prevent="addKontakt" class="kontakt-formular">
      <input
        v-model="newKontakt.name"
        type="text"
        placeholder="Name"
        required
      />
      <input
        v-model="newKontakt.telefon"
        type="text"
        placeholder="Telefonnummer"
        required
      />
      <input
        v-model="newKontakt.foto"
        type="text"
        placeholder="Foto-URL"
        required
      />
      <button type="submit">Hinzufügen</button>
    </form>

    <div class="kontakte">
      <h3>Bereits hinzugefügt:</h3>

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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kontakte: [],
      newKontakt: {
        name: "",
        telefon: "",
        foto: "",
      },
    };
  },
  mounted() {
    const gespeicherteKontakte = localStorage.getItem("kontakte");
    if (gespeicherteKontakte) {
      this.kontakte = JSON.parse(gespeicherteKontakte);
    }
  },
  methods: {
    addKontakt() {
      this.kontakte.push({ ...this.newKontakt });
      localStorage.setItem("kontakte", JSON.stringify(this.kontakte));

      // Formular leeren
      this.newKontakt.name = "";
      this.newKontakt.telefon = "";
      this.newKontakt.foto = "";
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

.kontakt-formular {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

.kontakt-formular input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.kontakt-formular button {
  padding: 10px;
  background-color: #e1b47a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.kontakte h3 {
  margin-top: 20px;
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
</style>
