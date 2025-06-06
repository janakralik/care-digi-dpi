<template>
  <div class="background-wrapper">
    <div class="header-zeile">
      <h2 class="section-title">Ansprechpartner</h2>
      <button @click="toggleForm" class="toggle-button">
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <!-- Formular -->
    <div v-if="formVisible">
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
          type="file"
          @change="handleFileUpload"
          accept="image/*"
          ref="fileInput"
          required
        />
        <button type="submit">Hinzufügen</button>
      </form>
    </div>

    <!-- Bereits hinzugefügte Kontakte -->
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
        <button class="entfernen-button" @click="removeKontakt(index)">
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
      kontakte: [],
      newKontakt: {
        name: "",
        telefon: "",
        foto: "",
      },
      formVisible: false,
    };
  },
  mounted() {
    const gespeicherteKontakte = localStorage.getItem("kontakte");
    if (gespeicherteKontakte) {
      this.kontakte = JSON.parse(gespeicherteKontakte);
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newKontakt.foto = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    addKontakt() {
      if (!this.newKontakt.foto) {
        alert("Bitte ein Foto hochladen!");
        return;
      }

      this.kontakte.push({ ...this.newKontakt });
      localStorage.setItem("kontakte", JSON.stringify(this.kontakte));

      this.newKontakt.name = "";
      this.newKontakt.telefon = "";
      this.newKontakt.foto = "";
      this.$refs.fileInput.value = "";
    },
    removeKontakt(index) {
      this.kontakte.splice(index, 1);
      localStorage.setItem("kontakte", JSON.stringify(this.kontakte));
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
  background: #fef3e3;
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

.entfernen-button {
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;
}
</style>
