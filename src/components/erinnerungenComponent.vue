/* eslint-disable vue/multi-word-component-names */

<template>
  <div class="background-wrapper">
    <div class="erinnerungen">
      <h2 class="section-title">Mein Tag auf einem Blick</h2>

      <!-- Kalender-Woche -->
      <div class="kalender">
        <div
          v-for="(tag, index) in wochentage"
          :key="index"
          :class="['kalender-tag', { heute: index === 0 }]"
        >
          <div>{{ tag.tag }}</div>
          <div>{{ tag.datum }}</div>
        </div>
      </div>

      <!-- Erinnerungen -->
      <div
        v-for="(item, index) in erinnerungen"
        :key="index"
        class="erinnerung"
        :class="{ erledigt: item.done }"
      >
        <img :src="item.icon" alt="Icon" class="icon" />
        <div class="info">
          <strong>{{ item.title }}</strong>
          <p>{{ item.beschreibung }}</p>
        </div>
        <button @click="toggleDone(index)" class="done-button">✔️</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wochentage: [
        { tag: "MO", datum: 24 },
        { tag: "DI", datum: 25 },
        { tag: "MI", datum: 26 },
        { tag: "DO", datum: 27 },
        { tag: "FR", datum: 28 },
        { tag: "SA", datum: 29 },
        { tag: "SO", datum: 30 },
      ],
      erinnerungen: [
        {
          title: "Blutdrucktabletten nehmen",
          beschreibung: "Um 08.00 und 18.00 - Lade neben dem Bett.",
          done: false,
          icon: "pfad/zu/icon1.png",
        },
        {
          title: "Lena Geburtstag",
          beschreibung: "Lena feiert heute. 🎉",
          done: false,
          icon: "pfad/zu/icon2.png",
        },
        {
          title: "Abhof-Verkauf",
          beschreibung: "Abhof-Verkauf beim Bauern.",
          done: false,
          icon: "pfad/zu/icon3.png",
        },
      ],
    };
  },
  methods: {
    toggleDone(index) {
      this.erinnerungen[index].done = !this.erinnerungen[index].done;
    },
  },
};
</script>

<style scoped>
.background-wrapper {
  background-color: #fafafa;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.section-title {
  background-color: #6d3a8c;
  color: white;
  padding: 10px;
  border-radius: 20px;
  font-size: 22px;
  margin-bottom: 20px;
}

.kalender {
  display: flex;
  justify-content: space-around;
  background: #ffffff; /* Kalender bleibt weiß */
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 20px;
}

.kalender-tag {
  text-align: center;
  padding: 5px;
}

.kalender-tag.heute {
  background-color: #e1b47a;
  border-radius: 50%;
  padding: 10px;
}

.erinnerung {
  background: #fff;
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ccc;
}

.icon {
  width: 60px;
  height: 60px;
  margin-right: 20px;
}

.info {
  flex: 1;
}

.done-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.erledigt {
  opacity: 0.5;
}
</style>
