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
          Willkommen bei CAREdigi: Ihre digitale Unterstützung
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
      <div class="features-grid">
        <!-- Feature 1 -->
        <div class="feature-item">
          <div class="feature-icon-circle">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <h3>Erinnerungen</h3>
          <p class="feature-description">
            Mit CAREdigi erhalten Seniorinnen hilfreiche Erinnerungen für
            wichtige Aufgaben und Termine – zum Beispiel Arztbesuche, die
            Einnahme von Medikamenten oder Alltagserledigungen. Angehörige legen
            diese Erinnerungen an, damit alles Wichtige rechtzeitig angezeigt
            wird – ganz ohne zusätzlichen Aufwand für die Seniorinnen.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-item">
          <div class="feature-icon-circle">
            <i class="fas fa-phone"></i>
          </div>
          <h3>Kontaktpersonen</h3>
          <p class="feature-description">
            In CAREdigi können die wichtigsten Kontaktpersonen wie
            Familienmitglieder, Freunde oder Ärzte hinterlegt werden. So haben
            Senior*innen jederzeit schnellen Zugriff auf alle wichtigen
            Telefonnummern und Kontaktdaten – übersichtlich, sicher und einfach
            abrufbar.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-item">
          <div class="feature-icon-circle">
            <i class="fas fa-link"></i>
          </div>
          <h3>Links zu externen Seiten</h3>
          <p class="feature-description">
            Ob Apotheke, Hausarztpraxis oder wichtige Informationsseiten –
            CAREdigi ermöglicht den direkten Zugriff auf vertrauenswürdige
            Links. Angehörige hinterlegen die passenden Webseiten, sodass
            Senior*innen sie leicht finden und sicher nutzen können, ohne lange
            suchen zu müssen.
          </p>
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

    <!-- Testimonial -->
    <section class="testimonial-section">
      <div class="testimonial-card">
        <p class="testimonial-text">
          „Jetzt kann ich endlich alleine das Internet nutzen.“
        </p>
        <p class="testimonial-author">- Traudi (86 Jahre)</p>
      </div>
    </section>

    <!-- Vorteile -->
    <section class="advantages-section">
      <div class="advantages-content">
        <h2>Ihre Vorteile mit CAREdigi</h2>
        <ul>
          <li>Einfache Nutzung ohne technisches Vorwissen</li>
          <li>Persönliche Betreuung durch Angehörige</li>
          <li>Alles Wichtige auf einen Blick</li>
          <li>Sicherer Zugang über PC, Tablet oder Smartphone</li>
          <li>Mehr Selbstständigkeit im digitalen Alltag</li>
        </ul>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <h2>Häufige Fragen</h2>

      <details>
        <summary>Wie funktioniert das Erstellen von Erinnerungen?</summary>
        <p>
          Die Angehörigen erstellen über die Administrationsseite Erinnerungen,
          die automatisch auf dem Dashboard der Senior*innen angezeigt werden.
        </p>
      </details>

      <details>
        <summary>Wer kann meine CAREdigi-Seite verwalten?</summary>
        <p>
          Die Verwaltung übernehmen ausschließlich Ihre vertrauten Angehörigen.
          Sie richten Erinnerungen, Links und Kontakte für Sie ein.
        </p>
      </details>

      <details>
        <summary>Muss ich selbst Einstellungen vornehmen?</summary>
        <p>
          Nein, Sie müssen nichts selbst einstellen. Alle Inhalte werden von
          Ihren Angehörigen gepflegt, sodass Sie einfach alles Wichtige auf
          einen Blick sehen.
        </p>
      </details>

      <details>
        <summary>Was passiert mit meinen Daten?</summary>
        <p>
          Ihre Daten werden sicher gespeichert und ausschließlich für die
          Funktionen von CAREdigi verwendet. Es erfolgt keine Weitergabe an
          Dritte.
        </p>
      </details>

      <details>
        <summary>
          Kann ich CAREdigi auf meinem Smartphone oder Tablet nutzen?
        </summary>
        <p>
          Ja, CAREdigi funktioniert auf allen gängigen Geräten wie PC, Tablet
          oder Smartphone – ohne zusätzliche Apps oder spezielle Hardware.
        </p>
      </details>

      <details>
        <summary>
          Welche Informationen werden auf meinem Dashboard angezeigt?
        </summary>
        <p>
          Sie sehen Ihre aktuellen Erinnerungen, wichtige Kontakte und nützliche
          Links – alles übersichtlich und einfach zugänglich an einem Ort.
        </p>
      </details>

      <details>
        <summary>
          Was passiert, wenn sich etwas ändert (z.B. neue Termine)?
        </summary>
        <p>
          Ihre Angehörigen können jederzeit Änderungen oder neue Informationen
          einpflegen. Ihr Dashboard wird automatisch aktualisiert, ohne dass Sie
          etwas tun müssen.
        </p>
      </details>
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
  color: #723381;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
}

/* Features */
.features-modern {
  background: linear-gradient(135deg, #eab377 0%, #fedeba 50%, #eab377 100%);
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

.feature-item:hover {
  background: linear-gradient(145deg, #fff9f0, #f0e3d6);
  box-shadow: 0 4px 20px rgba(234, 179, 119, 0.2);
  border-radius: 16px;
  padding: 30px 20px;
  transition: box-shadow 0.3s ease;
}

.feature-item {
  border-radius: 16px;
  padding: 30px 20px;
  transition: box-shadow 0.3s ease;
}

.feature-icon-circle {
  background: rgba(
    255,
    255,
    255,
    0.25
  ); /* halbtransparentes Weiß für Glaslook */
  backdrop-filter: blur(8px); /* Glas-Effekt durch Blur */
  -webkit-backdrop-filter: blur(8px);
  border-radius: 50%;
  padding: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3); /* leichter weißer Schatten */
  transition: box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.4); /* feiner weißer Rand für mehr Tiefe */
}

.feature-item:hover .feature-icon-circle {
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5); /* stärkerer weißer Schein beim Hover */
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

.photo-gallery img {
  filter: brightness(0.95);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.photo-gallery img:hover {
  filter: brightness(1);
  transform: scale(1.03);
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
  background: #f9f6fb;
  padding: 60px 20px;
  text-align: center;
}

.why-caredigi-content {
  max-width: 800px;
  margin: 0 auto;
}

.why-caredigi-content h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #723381;
}

.why-caredigi-content p {
  font-size: 18px;
  color: #555;
  line-height: 1.6;
}

/* Vorteile */
.advantages-section {
  background: linear-gradient(135deg, #eab377 0%, #fedeba 50%);
  padding: 60px 20px;
  text-align: center;
}

.advantages-content {
  max-width: 800px;
  margin: 0 auto;
}

.advantages-content h2 {
  color: #723381;
  font-size: 32px;
  margin-bottom: 20px;
}

.advantages-content ul {
  list-style: none;
  padding: 0;
}

.advantages-content li {
  font-size: 18px;
  color: #555;
  margin: 10px 0;
  position: relative;
  padding-left: 25px;
}

.hero-section,
.welcome-section,
.features-modern,
.why-caredigi-section,
.photo-gallery,
.testimonial-section,
.advantages-section,
.faq-section {
  margin-bottom: 100px; /* oder eine andere Zahl je nach Wunsch */
}
</style>
