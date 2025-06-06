<template>
  <div class="background-wrapper">
    <h2 class="section-title">Persönliche Nachricht</h2>

    <textarea
      v-model="nachricht"
      placeholder="Schreibe deine Nachricht..."
    ></textarea>

    <button @click="speichern">Speichern</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nachricht: "",
    };
  },
  mounted() {
    this.nachricht = localStorage.getItem("omaNachricht") || "";
  },
  methods: {
    speichern() {
      localStorage.setItem("omaNachricht", this.nachricht);
      alert("Nachricht gespeichert.");
    },
  },
};
</script>

<style scoped>
.background-wrapper {
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #ccc;
  margin-bottom: 30px;
}

.section-title {
  background-color: #9353a4;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 22px;
  display: inline-block;
  margin-bottom: 15px;
}

textarea {
  width: 100%;
  min-height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  resize: vertical;
}

button {
  background-color: #eab377;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
</style>
