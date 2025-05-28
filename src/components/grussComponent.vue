<template>
  <div class="gruss-card">
    <div class="gruss-left">
      <img src="@/assets/WetterIcon.png" alt="Wetter" class="wetter-icon" />
      <div class="temperatur">14°C</div>
    </div>
    <div class="gruss-right">
      <div class="gruss-text">
        <span class="greeting">
          Guten Morgen, <strong class="highlight">Hilde</strong>
        </span>
        <span class="datum-text">
          Heute ist der <strong class="highlight">{{ aktuellesDatum }}</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aktuellesDatum: "",
    };
  },
  mounted() {
    const heute = new Date();
    const wochentage = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    const monate = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];

    const wochentag = wochentage[heute.getDay()];
    const tag = heute.getDate();
    const monat = monate[heute.getMonth()];

    this.aktuellesDatum = `${wochentag}, der ${tag}. ${monat}.`;
  },
};
</script>

<style scoped>
.gruss-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #9353a4;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 30px 40px;
  max-width: 1200px;
  margin: 0 auto 50px auto;
  gap: 20px;
  flex-wrap: wrap;
}

.gruss-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.wetter-icon {
  width: 80px;
  height: 80px;
}

.temperatur {
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
}

.gruss-right {
  flex: 1;
}

.gruss-text {
  text-align: left;
}

.greeting {
  display: block;
  font-size: 28px;
  font-weight: 400;
  color: #ffffff;
}

.greeting .highlight {
  font-weight: 700;
  color: #ffffff;
}

.datum-text {
  font-size: 20px;
  color: #ffffff;
  margin-top: 6px;
  display: inline-block;
}

.datum-text .highlight {
  font-weight: 700;
  color: #ffffff;
}
</style>
