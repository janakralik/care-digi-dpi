<template>
  <div class="background-wrapper">
    <h2 class="section-title">Startseiten-Bild ändern</h2>

    <div class="bild-und-aktionen">
      <!-- Bildvorschau -->
      <div class="bild-vorschau-bereich">
        <p>Aktuelles Bild:</p>
        <img
          :src="vorschauBild || defaultBild"
          alt="Hero Bild Vorschau"
          class="bild-vorschau"
        />
      </div>

      <!-- Buttons neben dem Bild -->
      <div class="bild-aktionen">
        <label class="upload-label">
          <input
            type="file"
            @change="verarbeiteUpload"
            accept="image/*"
            class="upload-feld"
          />
        </label>
        <button class="speichern-button" @click="speichereBild">
          Bild speichern
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultBild: require("@/assets/field.jpg"),
      vorschauBild: null,
    };
  },
  mounted() {
    const gespeichertesBild = localStorage.getItem("heroBild");
    if (gespeichertesBild) {
      this.vorschauBild = gespeichertesBild;
    }
  },
  methods: {
    verarbeiteUpload(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.vorschauBild = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    speichereBild() {
      if (this.vorschauBild) {
        localStorage.setItem("heroBild", this.vorschauBild);
        alert("Das neue Startseiten-Bild wurde gespeichert.");
      }
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
  width: 100%;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  background-color: #9353a4;
  color: white;
  padding: 10px;
  display: inline-block;
  border-radius: 20px;
  font-size: 22px;
  margin-bottom: 20px;
}

.bild-und-aktionen {
  display: flex;
  align-items: flex-start;
  gap: 40px; /* Abstand zwischen Bild und Buttons */
  flex-wrap: wrap;
}

.bild-vorschau-bereich {
  flex: 0 0 auto;
}

.bild-vorschau {
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  margin-top: 10px;
}

.bild-aktionen {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  margin-top: 32px;
}

.upload-feld {
  display: block;
}

.speichern-button {
  background-color: #eab377;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

.upload-label input {
  font-size: 16px;
}
</style>
