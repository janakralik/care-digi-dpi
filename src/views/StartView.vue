<template>
  <div class="startseite">
    <!-- Bild und Titel -->
    <div class="hero-section">
      <img src="@/assets/Startseite.png" class="hero-image" />
      <div class="hero-text">
        <h1>CAREdigi</h1>
        <p>Das digitale Zuhause für Senior*innen</p>
      </div>

      <!-- Buttons direkt unter dem Hero-Text -->
      <div class="button-container">
        <button class="senioren-dashboard-button">Senioren-Dashboard</button>
        <button class="administration-button">Administration</button>
      </div>
    </div>

    <!-- Willkommensnachricht -->
    <div class="einleitung welcome-text">
      <h1 class="welcome-heading">Herzlich Willkommen bei CAREdigi!</h1>
      <p>
        Ihr digitales Zuhause, das Sie unterstützt und Ihnen den Alltag
        erleichtert. Wir bieten eine Vielzahl von Funktionen, die Ihnen helfen,
        sicher und selbstständig zu leben. Ob Sie Erinnerungen für wichtige
        Aufgaben und Termine benötigen, sich über Ihre Gesundheitsdaten
        informieren möchten oder die Verbindung zu Ihrem Arzt oder Ihrer Familie
        suchen – mit CAREdigi haben Sie alles an einem Ort. Unsere Plattform ist
        speziell darauf ausgelegt, den Bedürfnissen von Senior*innen gerecht zu
        werden und bietet Ihnen eine benutzerfreundliche und sichere Umgebung.
        Lassen Sie uns gemeinsam Ihre Lebensqualität verbessern und Ihnen den
        Alltag noch angenehmer gestalten. Sie können sich darauf verlassen, dass
        CAREdigi Ihnen immer zur Seite steht und Sie bei allen wichtigen
        Aspekten des Lebens unterstützt.
      </p>
    </div>

    <!-- Funktionen als Rechtecke mit Icons -->
    <div class="einleitung features">
      <h1 class="features-heading">Die Funktionen</h1>
      <div class="features-container">
        <!-- Erinnerung (Kalender Icon) -->
        <div class="feature-box">
          <i class="fas fa-calendar-alt fa-3x"></i>
          <h3>Erinnerungen</h3>
          <p>
            Erstellen Sie Erinnerungen für wichtige Aufgaben und Termine, um
            Ihren Alltag zu organisieren und nichts zu vergessen.
          </p>
        </div>

        <!-- Kontaktpersonen (Telefon Icon) -->
        <div class="feature-box">
          <i class="fas fa-phone-alt fa-3x"></i>
          <h3>Kontaktpersonen</h3>
          <p>
            Verwalten Sie Ihre wichtigsten Kontakte und halten Sie den Kontakt
            zu Familie und Freunden einfach und sicher.
          </p>
        </div>

        <!-- Externe Links (WWW Icon) -->
        <div class="feature-box">
          <i class="fas fa-link fa-3x"></i>
          <h3>Links zu externen Seiten</h3>
          <p>
            Nutzen Sie Links zu externen Seiten für wichtige Gesundheits- und
            Verwaltungsinformationen, die Sie regelmäßig benötigen.
          </p>
        </div>
      </div>
    </div>

    <!-- Hinweis zur Administration -->
    <div class="admin-note">
      <p>
        Wichtig: Die Seite wird von den Angehörigen administriert, um
        sicherzustellen, dass alle Einstellungen und Informationen korrekt
        verwaltet werden.
      </p>
    </div>
  </div>
</template>

<style scoped>
.startseite {
  font-family: Arial, sans-serif;
}

/* Hero Section */
.hero-section {
  position: relative;
  width: 100%;
  height: 800px; /* Größere Höhe für den Hero-Bereich */
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9; /* Das Bild wird jetzt 50% transparent */
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 35px;
  background-color: rgba(
    250,
    250,
    250,
    0.8
  ); /* RGB für hellgrau mit Transparenz */
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
}

/* Buttons direkt unter dem Hero-Text */
.button-container {
  position: absolute;
  top: 60%; /* Buttons unterhalb des Hero-Textes */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 2;
}

.senioren-dashboard-button,
.administration-button {
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, border 0.3s ease;
}

.senioren-dashboard-button {
  background-color: #e1b47a;
  color: white;
  border: none;
}

.senioren-dashboard-button:hover {
  background-color: #d59a5f;
}

.administration-button {
  background-color: white;
  color: #e1b47a;
  border: 2px solid #e1b47a;
}

.administration-button:hover {
  background-color: #e1b47a;
  color: white;
}

/* Willkommensnachricht */
.welcome-text {
  padding: 20px;
  text-align: left; /* Text jetzt links ausgerichtet */
  font-size: 18px;
  color: #333;
  max-width: 1400px; /* Maximalbreite für den Text */
  margin: 0 auto; /* Zentriert */
}

.welcome-heading {
  color: #e1b47a; /* Orange */
  font-size: 30px;
  text-align: left; /* Links ausgerichtet */
  margin-bottom: 20px;
}

/* Funktionen */
.features {
  padding: 20px;
  text-align: left; /* Text jetzt links ausgerichtet */
  max-width: 1400px; /* Maximalbreite für den Funktionsbereich */
  margin: 0 auto; /* Zentriert */
}

.features-heading {
  color: #e1b47a;
  font-size: 30px;
  text-align: left; /* Links ausgerichtet */
  margin-bottom: 20px;
}

.features-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.feature-box {
  background: #eab377;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ccc;
  text-align: center;
  width: 30%; /* Jedes Rechteck nimmt 30% der Breite ein */
}

.feature-box i {
  color: #fbe3ca; /* Farbige Icons */
  margin-bottom: 10px;
}

.feature-box h3 {
  color: #fbe3ca;
  font-size: 24px;
  margin-bottom: 10px;
}

.feature-box p {
  color: #333;
  font-size: 16px;
}

/* Admin Note */
.admin-note {
  padding: 20px;
  text-align: left; /* Text jetzt links ausgerichtet */
  font-size: 18px;
  color: #333;
}

/* Die Einleitungsbox */
.einleitung {
  margin-bottom: 40px;
  background: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px #ccc;
}
</style>
