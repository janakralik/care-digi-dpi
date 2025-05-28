<template>
  <div class="startseite">
    <!-- Hero-Bereich -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- Bildbereich zuerst -->
        <!-- Textbereich -->
        <div class="hero-text">
          <h1>Ihr digitales Zuhause</h1>
          <p>
            CAREdigi macht den digitalen Alltag für Senior*innen einfach,
            vertraut und zugänglich.
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
        <h1 class="welcome-heading">
          Willkommen bei CAREdigi: Deine digitale Unterstützung
        </h1>
        <p>
          CAREdigi ist eine speziell für Seniorinnen entwickelte Webanwendung,
          die den Einstieg und Umgang mit der digitalen Welt erleichtert. In
          einer übersichtlichen und leicht verständlichen Umgebung finden
          Seniorinnen alle wichtigen Informationen an einem Ort: Erinnerungen an
          Termine oder Medikamente, nützliche Links zu Ärzten, Apotheken oder
          Angehörigen – alles zentral auf einem persönlichen Dashboard.
          <span v-if="!showMore">…</span>
        </p>

        <p v-if="showMore">
          Das Besondere an CAREdigi: Seniorinnen müssen sich nicht selbst um die
          Pflege der Inhalte kümmern. Stattdessen übernehmen Angehörige oder
          Betreuerinnen die Verwaltung der Seite. Sie können Erinnerungen und
          wichtige Links einfach hinterlegen und aktuell halten. Dadurch bleiben
          die Nutzer*innen stets bestens informiert, ohne sich mit komplizierten
          Einstellungen auseinandersetzen zu müssen. Viele ältere Menschen
          fühlen sich im Umgang mit digitalen Geräten unsicher oder überfordert.
          CAREdigi begegnet dieser Herausforderung mit einem klaren Ziel: mehr
          Unabhängigkeit, mehr Sicherheit und ein gutes Gefühl im digitalen
          Alltag. Die intuitive Bedienung gibt Senior*innen Vertrauen und
          Orientierung – und ermöglicht ihnen, digitale Dienste auf einfache
          Weise zu nutzen. Auch für Angehörige ist CAREdigi eine echte
          Entlastung. Sie können die Inhalte jederzeit anpassen und wissen, dass
          ihre Liebsten im Alltag bestmöglich unterstützt werden. CAREdigi
          funktioniert geräteunabhängig: egal ob am PC, Tablet oder Smartphone –
          ohne zusätzliche Hardware. Damit ist CAREdigi eine moderne,
          benutzerfreundliche und umfassende Lösung, die Senior*innen einen
          sicheren Platz im Internet bietet und ihre Lebensqualität nachhaltig
          verbessert.
        </p>

        <button
          v-if="!showMore"
          @click="showMore = true"
          class="mehr-lesen-button"
        >
          mehr lesen
        </button>
        <button v-else @click="showMore = false" class="mehr-lesen-button">
          weniger anzeigen
        </button>
      </div>
    </section>

    <!-- Features -->
    <section class="features-modern">
      <div class="features-content">
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon-circle">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <h3>Erinnerungen</h3>
            <p>
              Für Medikamente, Arztbesuche und wichtige Alltagsaufgaben –
              zuverlässig, rechtzeitig, einfach.
            </p>
          </div>

          <div class="feature-item">
            <div class="feature-icon-circle">
              <i class="fas fa-user-friends"></i>
            </div>
            <h3>Kontaktpersonen</h3>
            <p>
              Familienmitglieder, Freunde oder Ärzt*innen – immer übersichtlich
              und griffbereit hinterlegt.
            </p>
          </div>

          <div class="feature-item">
            <div class="feature-icon-circle">
              <i class="fas fa-link"></i>
            </div>
            <h3>Wichtige Links</h3>
            <p>
              Direktzugriff auf Apotheken, Hausärzte oder Behörden – sicher und
              leicht auffindbar.
            </p>
          </div>

          <div class="feature-item">
            <div class="feature-icon-circle">
              <i class="fas fa-tree"></i>
            </div>
            <h3>Ausflüge</h3>
            <p>Finde Ausflüge in deiner Nähe.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Warum CAREdigi -->
    <section class="why-caredigi-section">
      <div class="why-caredigi-content">
        <h2>Warum CAREdigi?</h2>
        <p>
          CAREdigi macht die digitale Welt einfach zugänglich. Keine
          komplizierten Apps, keine verwirrenden Menüs – stattdessen eine klare
          Übersicht, individuell angepasst an Ihre Bedürfnisse. Für ein sicheres
          Gefühl und mehr Selbstständigkeit im Alltag.
        </p>
      </div>
    </section>

    <!-- Fotos -->
    <section class="photo-gallery">
      <img src="@/assets/Startseite1.png" alt="Foto 1" />
      <img src="@/assets/Startseite2.png" alt="Foto 2" />
      <img src="@/assets/Startseite3.png" alt="Foto 3" />
    </section>

    <!-- Vorteile -->
    <section class="vorteile-section">
      <div class="vorteile-content">
        <h2>Vorteile mit CAREdigi</h2>
        <div class="vorteile-grid">
          <div class="vorteil-item">
            <div class="vorteil-icon-circle">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3>Einfache Nutzung</h3>
            <p>Ohne technisches Vorwissen sofort einsatzbereit.</p>
          </div>

          <div class="vorteil-item">
            <div class="vorteil-icon-circle">
              <i class="fas fa-user-friends"></i>
            </div>
            <h3>Persönliche Betreuung</h3>
            <p>Betreuung und Pflege der Inhalte durch Angehörige.</p>
          </div>

          <div class="vorteil-item">
            <div class="vorteil-icon-circle">
              <i class="fas fa-laptop"></i>
            </div>
            <h3>Geräteunabhängig</h3>
            <p>Funktioniert auf PC, Tablet oder Smartphone.</p>
          </div>

          <div class="vorteil-item">
            <div class="vorteil-icon-circle">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Mehr Selbstständigkeit</h3>
            <p>Mehr Sicherheit und Vertrauen im digitalen Alltag.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="testimonial-section">
      <div class="testimonial-card">
        <p class="testimonial-text">
          „Jetzt kann ich endlich alleine das Internet nutzen.“
        </p>
        <p class="testimonial-author">- Traudi (86 Jahre)</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
    };
  },
};
</script>

<style scoped>
.startseite {
  font-family: "Inter", sans-serif;
}

/* Hero */
.hero-section {
  background: url("@/assets/Startseite.png") no-repeat center center;
  background-size: cover;
  padding: 8rem 2rem;
  color: white; /* Textfarbe auf dem Bild besser sichtbar */
  position: relative;
}

.hero-container {
  margin: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 3rem;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 165, 0, 0.1); /* sehr leichtes Orange */
  pointer-events: none;
  z-index: 1;
}

.hero-container {
  position: relative;
  z-index: 2; /* darüber damit Text klickbar bleibt */
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
  color: #ffffff;
}

.hero-text p {
  font-size: 1.125rem;
  color: #ffffff;
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
  text-decoration: underline;
}

.administration-button {
  border: 3px solid #723381;
  color: #723381;
  background-color: white;
}

.administration-button:hover {
  text-decoration: underline;
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
  background: linear-gradient(
    135deg,
    rgba(249, 246, 251, 0.6),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  padding: 60px 40px;
  text-align: left;
  margin-bottom: 20px;
}

.mehr-lesen-button {
  background: none;
  border: none;
  color: #723381;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  padding: 0;
  font-size: 16px;
}
.mehr-lesen-button:hover {
  text-decoration: underline;
}

.welcome-text {
  max-width: 1000px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.6;
}

.welcome-heading {
  color: #fffff;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 20px;
}

/* Features */
.features-modern {
  background: white;
  padding: 60px 20px;
  text-align: center;
}

.features-content {
  max-width: 1000px;
  margin: 0 auto;
}

.features-content h2 {
  font-size: 32px;
  color: #723381;
  margin-bottom: 40px;
}

.features-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (min-width: 768px) {
  .features-grid {
    flex-direction: row;
    justify-content: space-between;
  }
}

.feature-item {
  flex: 1 1 200px;
  max-width: 260px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-4px);
}

.feature-icon-circle {
  background: #f9f6fb;
  border: 2px solid #723381;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.feature-icon-circle i {
  font-size: 28px;
  color: #723381;
}

.feature-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.feature-item p {
  font-size: 14px;
  color: #555;
  padding-bottom: 10px;
}

/* Fotos */
.photo-gallery {
  display: flex;
  justify-content: space-between;
  gap: 0; /* <-- Abstand komplett entfernt */
  margin: 100px 0;
}

.photo-gallery img {
  width: 33.3333%; /* exakt ein Drittel */
  border-radius: 0; /* Keine Rundungen */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover; /* falls die Höhe unterschiedlich wäre */
}

.photo-gallery img {
  filter: brightness(0.95);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, filter 0.3s ease;
}

/* Testimonial */
.testimonial-section {
  background: #f9f6fb;
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
  margin-bottom: 32px;
  color: #723381;
}

details {
  background: #f9f6fb;
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

/* Warum CAREdigi */
.why-caredigi-section {
  background: #fff5ea;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 100px;
}

.why-caredigi-content {
  max-width: 800px;
  margin: 0 auto;
}

.why-caredigi-content h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #000000;
  padding-bottom: 20px;
}

.why-caredigi-content p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}

.vorteile-section {
  background: white;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 60px;
}

.vorteile-content {
  max-width: 1000px;
  margin: 0 auto;
}

.vorteile-content h2 {
  font-size: 32px;
  color: #000000;
  margin-bottom: 40px;
  padding-bottom: 20px;
}

.vorteile-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (min-width: 768px) {
  .vorteile-grid {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.vorteil-item {
  flex: 1 1 200px;
  max-width: 220px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.vorteil-item:hover {
  transform: translateY(-4px);
}

.vorteil-icon-circle {
  background: #f9f6fb;
  border: 2px solid #723381;
  color: #723381;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.vorteil-icon-circle i {
  font-size: 28px;
  color: #723381;
}

.vorteil-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.vorteil-item p {
  font-size: 14px;
  color: #555;
}

.hero-section,
.features-modern,
.why-caredigi-section,
.photo-gallery,
.testimonial-section,
.advantages-section,
.faq-section {
  margin-bottom: 150px;
}
</style>
