<template>
  <div class="gruss-card">
    <!-- Linke Seite: Wetter -->
    <div class="gruss-left">
      <img :src="wetterBild" alt="Wetter" class="wetter-icon" />
      <div class="temperatur">
        {{ temperatur !== null ? temperatur + "°C" : "–°C" }}
      </div>
    </div>

    <!-- Rechte Seite: Text -->
    <div class="gruss-right">
      <div class="gruss-text">
        <span class="greeting">
          Guten Tag, <strong class="highlight">Hilde</strong>
        </span>
        <span class="datum-text">
          Heute ist <strong class="highlight">{{ aktuellesDatum }}</strong>
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
      temperatur: null,
      wetterBild: require("@/assets/sun.png"), // Fallback
    };
  },
  mounted() {
    this.setzeDatum();
    this.holeWetter();
  },
  methods: {
    setzeDatum() {
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

    async holeWetter() {
      const username = "fhoberoesterreich_kralik_jana";
      const password = "3Axr77OEGe";
      const encoded = btoa(`${username}:${password}`);

      const isoDate = new Date().toISOString().split(".")[0] + "Z";
      const url = `https://api.meteomatics.com/${isoDate}/t_2m:C,weather_symbol_1h:idx/48.3069,14.2858/json`;

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Basic ${encoded}`,
          },
        });

        const data = await res.json();
        const temp = data.data.find((d) => d.parameter === "t_2m:C")
          .coordinates[0].dates[0].value;
        const symbol = data.data.find(
          (d) => d.parameter === "weather_symbol_1h:idx"
        ).coordinates[0].dates[0].value;

        this.temperatur = Math.round(temp);

        // Wetterbild anhand des Symbols auswählen
        if (symbol === 1) {
          this.wetterBild = require("@/assets/sun.png");
        } else if ([2, 3].includes(symbol)) {
          this.wetterBild = require("@/assets/sun-clouds.png");
        } else if ([4, 5].includes(symbol)) {
          this.wetterBild = require("@/assets/clouds.png");
        } else {
          this.wetterBild = require("@/assets/rain.png");
        }
      } catch (error) {
        console.error("Fehler beim Wetterabruf:", error);
        this.temperatur = null;
      }
    },
  },
};
</script>

<style scoped>
.gruss-card {
  display: flex;
  max-height: 100px;
  margin: 0 auto 50px auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

/* Beide Hälften direkt nebeneinander */
.gruss-left {
  background: #723381;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 280px;
}

.gruss-right {
  background: #9353a4;
  flex: 1;
  padding: 30px 40px;
  display: flex;
  align-items: center;
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
