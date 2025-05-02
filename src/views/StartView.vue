<template>
  <div class="startseite">
    <!-- Hero-Bereich -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- Bildbereich zuerst -->
        <div class="hero-image">
          <img src="@/assets/Startseite.png" alt="Seniorin mit Tablet" />
        </div>
        <!-- Textbereich -->
        <div class="hero-text">
          <h1>Ihr digitales Zuhause</h1>
          <p>
            Mit CAREdigi behalten Sie den Überblick über Gesundheitsdaten,
            Medikamente und Termine – einfach, sicher und übersichtlich.
          </p>
          <div class="button-container">
            <router-link to="/" class="senioren-dashboard-button">
              Senioren-Dashboard
            </router-link>
            <router-link to="/administration" class="administration-button">
              Administration
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Willkommensnachricht -->
    <section class="welcome-section">
      <div class="welcome-text">
        <h1 class="welcome-heading">Herzlich Willkommen bei CAREdigi</h1>
        <p>
          Ihr digitales Zuhause, das Sie unterstützt und Ihnen den Alltag
          erleichtert. Wir bieten eine Vielzahl von Funktionen, die Ihnen
          helfen, sicher und selbstständig zu leben. Ob Sie Erinnerungen für
          wichtige Aufgaben und Termine benötigen, sich über Ihre
          Gesundheitsdaten informieren möchten oder die Verbindung zu Ihrem Arzt
          oder Ihrer Familie suchen – mit CAREdigi haben Sie alles an einem Ort.
          Unsere Plattform ist speziell darauf ausgelegt, den Bedürfnissen von
          Senior*innen gerecht zu werden und bietet Ihnen eine
          benutzerfreundliche und sichere Umgebung. Lassen Sie uns gemeinsam
          Ihre Lebensqualität verbessern und Ihnen den Alltag noch angenehmer
          gestalten. Wichtig: Die Seite wird von den Angehörigen administriert,
          um sicherzustellen, dass alle Einstellungen und Informationen korrekt
          verwaltet werden.
        </p>
      </div>
    </section>

    <!-- Features -->
    <section class="features-modern">
      <div class="features-grid">
        <!-- Feature 1 -->
        <div class="feature-item">
          <div class="feature-icon-circle">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <h3>Erinnerungen</h3>
          <p class="feature-description">
            Behalte wichtige Aufgaben und Termine stets im Blick.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-item">
          <div class="feature-icon-circle">
            <i class="fas fa-phone"></i>
          </div>
          <h3>Kontaktpersonen</h3>
          <p class="feature-description">
            Halte Verbindung zu den Menschen, die dir wichtig sind.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-item">
          <div class="feature-icon-circle">
            <i class="fas fa-link"></i>
          </div>
          <h3>Links zu externen Seiten</h3>
          <p class="feature-description">
            Greife schnell auf vertrauenswürdige Gesundheitsinfos zu.
          </p>
        </div>
      </div>
    </section>

    <!-- Fotos -->
    <section class="photo-gallery">
      <img src="@/assets/Startseite.png" alt="Foto 1" />
      <img src="@/assets/Startseite2.png" alt="Foto 2" />
      <img src="@/assets/Startseite3.png" alt="Foto 3" />
    </section>

    <!-- Testimonial -->
    <section class="testimonial-section">
      <div class="testimonial-card">
        <p class="testimonial-text">
          „Jetzt kann ich endlich alleine das Internet nutzen.“
        </p>
        <p class="testimonial-author">- Traudi</p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <h2>Häufige Fragen</h2>
      <details>
        <summary>Wie funktioniert das Erstellen von Erinnerungen?</summary>
        <p>
          Die Angehörigen erstellen eine Erinnerung auf der
          Administrationsseite.
        </p>
      </details>
      <details>
        <summary>Was passiert mit meinen Daten?</summary>
        <p>
          Ihre Daten werden sicher gespeichert und nur für die notwendigen
          Funktionen verwendet.
        </p>
      </details>
    </section>
  </div>
</template>

<style scoped>
.startseite {
  font-family: "Inter", sans-serif;
}

/* Hero */
.hero-section {
  background-color: #fff5ec;
  padding: 4rem 1rem;
}

.hero-container {
  margin: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .hero-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
  }

  .hero-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: left;
    align-items: flex-start;
    padding-left: 2rem;
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
}

.hero-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000;
}

.hero-text p {
  font-size: 1.125rem;
  color: #555;
}

.button-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.senioren-dashboard-button,
.administration-button {
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  min-width: 200px;
}

.senioren-dashboard-button {
  background-color: #723381;
  color: white;
}

.senioren-dashboard-button:hover {
  background-color: #d49b6a;
}

.administration-button {
  border: 3px solid #723381;
  color: #723381;
  background-color: white;
}

.administration-button:hover {
  background-color: #fff7ed;
}

/* Hero-Bild */
.hero-image img {
  width: 100%;
  max-width: 600px;
  border-radius: 0;
  box-shadow: none;
  -webkit-mask-image: linear-gradient(to right, black 70%, transparent 100%);
  mask-image: linear-gradient(to right, black 70%, transparent 100%);
}

/* Welcome */
.welcome-section {
  background: #f9f6fb;
  padding: 60px 40px;
  text-align: left;
}

.welcome-text {
  max-width: 1000px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.6;
}

.welcome-heading {
  color: #723381;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
}

/* Features */
.features-modern {
  background: #fbe3ca;
  padding: 60px 20px;
  text-align: center;
}

.features-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .features-grid {
    flex-direction: row;
    justify-content: space-between;
  }
}

.feature-item {
  position: relative;
  background: transparent;
  text-align: center;
  flex: 1;
}

.feature-icon-circle {
  background: white;
  border-radius: 50%;
  padding: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feature-icon-circle i {
  font-size: 32px;
  color: #723381;
}

.feature-item h3 {
  font-size: 20px;
  color: #000000;
  margin-bottom: 10px;
}

.feature-description {
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  color: black;
  font-size: 16px;
}

.feature-item:hover .feature-description {
  opacity: 1;
  height: auto;
}

/* Fotos */
.photo-gallery {
  display: flex;
  justify-content: space-between;
  gap: 0; /* <-- Abstand komplett entfernt */
  margin: 40px 0;
}

.photo-gallery img {
  width: 33.3333%; /* exakt ein Drittel */
  border-radius: 0; /* Keine Rundungen */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover; /* falls die Höhe unterschiedlich wäre */
}

/* Testimonial */
.testimonial-section {
  background: #fbe3ca;
  padding: 40px 20px;
  text-align: center;
}

.testimonial-card {
  max-width: 600px;
  margin: 0 auto;
}

.testimonial-text {
  font-size: 20px;
  font-style: italic;
  color: #555;
}

.testimonial-author {
  font-weight: bold;
  margin-top: 10px;
  color: #333;
}

/* FAQ */
.faq-section {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.faq-section h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #723381;
}

details {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

details summary {
  font-weight: bold;
  color: #333;
}

details[open] summary {
  color: #e1b47a;
}

details p {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}
</style>
