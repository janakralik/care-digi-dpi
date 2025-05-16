<template>
  <div class="background-wrapper">
    <div class="ausfluege">
      <h2 class="section-title">Meine Ausflugstipps</h2>
      <p class="einleitungstext">
        Unter „Ausflüge“ findest du Vorschläge für schöne Unternehmungen in
        deiner Nähe. Vielleicht ein Spaziergang im Park, ein Besuch im Museum
        oder ein Ausflug mit der Gruppe? Hier kannst du stöbern und dich
        inspirieren lassen, mal wieder etwas Schönes zu unternehmen.w
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
          <button class="hilfe-button">Mehr Infos</button>
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
          bild: "https://upload.wikimedia.org/wikipedia/commons/6/6b/City_Park_in_Summer_-_Panorama_-_München_-_Bavaria_-_Germany_-_DSC03568.JPG",
        },
        {
          name: "Besuch im Heimatmuseum",
          beschreibung: "Erkunde lokale Geschichte mit barrierefreiem Zugang.",
          bild: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Museum_of_History_Moscow_02-2017_img3.jpg",
        },
        {
          name: "Ausflug an den See",
          beschreibung:
            "Genieße frische Luft und eine schöne Aussicht am Wasser.",
          bild: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Scharm%C3%BCtzelsee_07-2014_img11.jpg",
        },
        {
          name: "Kaffee und Kuchen im Gartenlokal",
          beschreibung: "Gemütliches Beisammensitzen in schöner Atmosphäre.",
          bild: "https://upload.wikimedia.org/wikipedia/commons/2/22/Teehaus_Tiergarten_Sch%C3%B6nbrunn_2017-05-05_09-44-34.jpg",
        },
        {
          name: "Kleine Waldwanderung",
          beschreibung:
            "Ein kurzer, flacher Rundweg durch den nahegelegenen Wald.",
          bild: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Waldweg_im_Harz_2017-09-14_img2.jpg",
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
  box-shadow: 0px 0px 10px #ccc;
}

.section-title {
  background-color: #6d3a8c;
  color: white;
  padding: 10px;
  display: inline-block;
  border-radius: 20px;
  font-size: 22px;
  margin: 0 0 20px 0;
  border-top: 5px solid #6d3a8c;
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
  border: 3px solid #e1b47a; /* oranger Rahmen */
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
}
</style>
