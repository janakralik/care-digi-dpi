<template>
  <div class="greeting-container">
    <div class="greeting-box"></div>
    <div class="greeting-text">
      <span>Guten Morgen Hilde! Heute ist </span>
      <span class="highlight">{{ aktuellesDatum }}</span>
    </div>
    <div class="temperature">14 °C</div>
    <div class="weather-icon">
      <img src="@/assets/WetterIcon.png" alt="Logo" class="logo" />
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

<style>
.greeting-container {
  position: relative;
  width: 100%;
  height: 250px;
  top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.greeting-box {
  width: 1296px;
  height: 212px;
  background: #fafafa;
  border-radius: 20px;
  border: 1px #eab377 solid;
  position: absolute;
  z-index: 0;
}

.greeting-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  text-align: center;
}

.greeting-text span {
  font-size: 28px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
}

.greeting-text .highlight {
  color: #eab377;
}

.temperature {
  position: absolute;
  left: 279px;
  top: 126px;
  font-size: 35px;
  font-weight: 700;
  color: rgba(27, 31, 38, 0.72);
}

.weather-icon {
  position: absolute;
  left: 134px;
  top: 31px;
  width: 132px;
  height: 132px;
}
</style>
