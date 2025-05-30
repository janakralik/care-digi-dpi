<template>
  <div class="background-wrapper">
    <div class="ausfluege">
      <h2 class="section-title">Meine Ausflugstipps</h2>
      <p class="einleitungstext">
        Unter „Ausflüge“ findest du Vorschläge für schöne Unternehmungen in
        deiner Nähe. Vielleicht ein Spaziergang im Park, ein Besuch im Museum
        oder ein Ausflug mit der Gruppe? Hier kannst du stöbern und dich
        inspirieren lassen, mal wieder etwas Schönes zu unternehmen.
      </p>

      <div class="ausflug-grid">
        <div
          v-for="(ausflug, index) in ausfluege"
          :key="index"
          class="ausflug-card"
        >
          <img
            :src="ausflug.bild"
            alt="Bild vom Ausflug"
            class="ausflug-bild"
          />
          <div class="ausflug-name">{{ ausflug.name }}</div>
          <div class="ausflug-beschreibung">
            <p>{{ ausflug.beschreibung }}</p>
          </div>
          <a
            :href="ausflug.link"
            target="_blank"
            rel="noopener"
            class="hilfe-button"
          >
            Mehr Infos
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ausfluege: [
        {
          name: "Spaziergang im Stadtpark",
          beschreibung:
            "Ein ruhiger Spaziergang durch grüne Alleen und blühende Beete.",
          bild: require("@/assets/Ausfluege_Park.jpg"),
          link: "https://www.linz.at/umwelt/35286.php",
        },
        {
          name: "Besuch im Heimatmuseum",
          beschreibung: "Erkunde lokale Geschichte mit barrierefreiem Zugang.",
          bild: require("@/assets/Ausfluege_Museum.jpg"),
          link: "https://www.oberoesterreich.at/oesterreich-poi/detail/400186/heimatmuseum.html",
        },
        {
          name: "Ausflug an den See",
          beschreibung:
            "Genieße frische Luft und eine schöne Aussicht am Wasser.",
          bild: require("@/assets/Ausfluege_See.jpg"),
          link: "https://www.ausflugstipps.at/am-see.html",
        },
        {
          name: "Kaffee und Kuchen im Gartenlokal",
          beschreibung: "Gemütliches Beisammensitzen in schöner Atmosphäre.",
          bild: require("@/assets/Ausfluege_Kuchen.jpg"),
          link: "https://www.cafe-kowalski.at/standorte-speisekarten/gallneukirchen",
        },
        {
          name: "Kleine Waldwanderung",
          beschreibung:
            "Ein kurzer, flacher Rundweg durch den nahegelegenen Wald.",
          bild: require("@/assets/Ausfluege_Wald.jpg"),
          link: "https://www.oberoesterreich.at/wandern/die-schoensten-rundwanderwege.html",
        },
      ],
    };
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

.section-title {
  background-color: #9353a4;
  color: white;
  padding: 10px;
  display: inline-block;
  border-radius: 20px;
  font-size: 22px;
  margin: 0 0 20px 0;
}

.einleitungstext {
  font-size: 18px;
  color: #4f4f4f;
  margin-bottom: 70px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 1.6;
}

.ausflug-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.ausflug-card {
  background: white;
  width: 250px;
  text-align: center;
  padding: 20px 20px 30px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #ccc;
  border: 3px solid #e1b47a;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
}

.ausflug-card:hover {
  transform: scale(1.05);
}

.ausflug-bild {
  width: 100%;
  height: 140px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 12px;
}

.ausflug-name {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
}

.ausflug-beschreibung {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  text-align: center;
}

.hilfe-button {
  background-color: #e1b47a;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  color: white;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s;
}

.hilfe-button:hover {
  background-color: #d39e60;
}
</style>
