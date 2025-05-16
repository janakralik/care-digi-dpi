<template>
  <div class="background-wrapper">
    <div class="erinnerungen">
      <h2 class="section-title">Mein Tag auf einem Blick</h2>
      <p class="einleitungstext">
        Mit der Erinnerungsfunktion kannst du deine täglichen Aufgaben, Termine
        oder wichtige Erledigungen ganz einfach im Blick behalten. Du siehst,
        was heute ansteht, und kannst abhaken, was du bereits geschafft hast. So
        geht nichts verloren, und du behältst die Kontrolle über deinen Tag.
      </p>

      <!-- Wochen-Navigation -->
      <div class="kalender-nav">
        <button @click="vorherigeWoche">←</button>
        <div class="kalender">
          <div
            v-for="(tag, index) in getWochentage()"
            :key="index"
            :class="[
              'kalender-tag',
              { heute: isHeute(tag), ausgewaehlt: isAusgewaehlt(tag) },
            ]"
            @click="waehleTag(tag)"
          >
            <div>{{ formatWochentag(tag) }}</div>
            <div>{{ tag.getDate() }}</div>
          </div>
        </div>
        <button @click="naechsteWoche">→</button>
      </div>

      <!-- Erinnerungen nur für ausgewählten Tag -->
      <div
        v-for="(item, index) in getErinnerungenFuerTag()"
        :key="index"
        class="erinnerung"
        :class="{ erledigt: item.done }"
      >
        <img :src="item.icon" alt="Icon" class="icon" />
        <div class="info">
          <strong>{{ item.title }}</strong>
          <p>{{ item.beschreibung }}</p>
          <small>{{ item.datum }} um {{ item.uhrzeit }}</small>
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
      currentWeekStart: this.getMonday(new Date()),
      selectedDate: new Date(),
      erinnerungen: [],
    };
  },
  mounted() {
    const gespeicherte = localStorage.getItem("erinnerungen");
    if (gespeicherte) {
      this.erinnerungen = JSON.parse(gespeicherte);
    }
    this.selectedDate = new Date();
    this.currentWeekStart = this.getMonday(this.selectedDate);
  },
  methods: {
    // Montag der Woche für ein Datum
    getMonday(date) {
      const d = new Date(date);
      const day = d.getDay();
      const diff = d.getDate() - (day === 0 ? 6 : day - 1);
      return new Date(d.setDate(diff));
    },

    // Array mit 7 Tagen der aktuellen Woche
    getWochentage() {
      const start = new Date(this.currentWeekStart);
      let tage = [];
      for (let i = 0; i < 7; i++) {
        let tag = new Date(start);
        tag.setDate(start.getDate() + i);
        tage.push(tag);
      }
      return tage;
    },

    vorherigeWoche() {
      this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
      this.currentWeekStart = new Date(this.currentWeekStart);
      this.selectedDate = new Date(this.currentWeekStart);
    },

    naechsteWoche() {
      this.currentWeekStart.setDate(this.currentWeekStart.getDate() + 7);
      this.currentWeekStart = new Date(this.currentWeekStart);
      this.selectedDate = new Date(this.currentWeekStart);
    },

    waehleTag(tag) {
      this.selectedDate = new Date(tag);
    },

    toggleDone(index) {
      // Erinnerung für aktuellen Tag toggeln
      const gefilterte = this.getErinnerungenFuerTag();
      const erinnerung = gefilterte[index];
      const originalIndex = this.erinnerungen.findIndex(
        (e) => e === erinnerung
      );
      if (originalIndex > -1) {
        this.erinnerungen[originalIndex].done =
          !this.erinnerungen[originalIndex].done;
        localStorage.setItem("erinnerungen", JSON.stringify(this.erinnerungen));
      }
    },

    getErinnerungenFuerTag() {
      const selDateStr = this.selectedDate.toISOString().slice(0, 10);
      return this.erinnerungen.filter((e) => e.datum === selDateStr);
    },

    formatWochentag(date) {
      return date.toLocaleDateString("de-DE", { weekday: "short" });
    },

    isHeute(date) {
      const heute = new Date();
      return (
        date.getDate() === heute.getDate() &&
        date.getMonth() === heute.getMonth() &&
        date.getFullYear() === heute.getFullYear()
      );
    },

    isAusgewaehlt(date) {
      return (
        date.getDate() === this.selectedDate.getDate() &&
        date.getMonth() === this.selectedDate.getMonth() &&
        date.getFullYear() === this.selectedDate.getFullYear()
      );
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
  display: inline-block;
  border-radius: 20px;
  font-size: 22px;
  margin-bottom: 20px;
}

.kalender-nav {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.kalender {
  display: flex;
  justify-content: space-around;
  background: white;
  border-radius: 15px;
  padding: 10px;
  flex: 1;
}

.kalender-tag {
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.2s, color 0.2s;
}

.kalender-tag.heute {
  background-color: #e1b47a;
  color: white;
  font-weight: bold;
}

.kalender-tag.ausgewaehlt {
  background-color: #eab377;
  color: white;
  font-weight: bold;
}

.kalender-nav button {
  background-color: transparent;
  color: #6d3a8c;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
}

.erinnerung {
  background: #fbe3ca;
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #efd1b0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
}

.einleitungstext {
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 70px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 1.6;
}

.erinnerung:hover {
  transform: scale(1.05);
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
