<!-- components/LinkHilfePopup.vue -->
<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal">
      <h2>Neuen Link hinzufügen</h2>
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

        <div class="button-row">
          <button type="submit">Hinzufügen</button>
          <button type="button" @click="close">Schließen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visible"],
  emits: ["close", "link-added"],
  data() {
    return {
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
    };
  },
  methods: {
    addLink() {
      const gespeicherteLinks = JSON.parse(
        localStorage.getItem("links") || "[]"
      );
      gespeicherteLinks.push({ ...this.newLink });
      localStorage.setItem("links", JSON.stringify(gespeicherteLinks));

      this.$emit("link-added", this.newLink);
      this.close();
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal {
  background: white;
  padding: 30px;
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
}
.button-row {
  display: flex;
  justify-content: space-between;
}
</style>
