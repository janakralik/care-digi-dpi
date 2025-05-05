<template>
  <div class="background-wrapper">
    <h2 class="section-title">Impressum</h2>

    <div class="impressum-content">
      <p>
        <strong>Angaben gemäß § 5 TMG:</strong><br />
        Jana Kralik<br />
        Softwarepark 11<br />
        4232 Hagenberg im Mühlkreis
      </p>

      <p>
        <strong>Kontakt:</strong><br />
        Telefon: +123456<br />
        E-Mail:
        <a href="mailto:office@caredigi.at" class="email-link"
          >office@caredigi.at</a
        >
      </p>

      <p>
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong
        ><br />
        Jana Kralik<br />
        Softwarepark 11<br />
        4232 Hagenberg im Mühlkreis
      </p>

      <p>
        <strong>Haftungsausschluss:</strong><br />
        Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
        wir jedoch keine Gewähr übernehmen.
      </p>

      <p>
        <strong>Urheberrecht:</strong><br />
        © 2025 CAREdigi. Alle Rechte vorbehalten. Die auf dieser Website
        veröffentlichten Inhalte und Werke unterliegen dem Urheberrecht. Jede
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
        außerhalb der Grenzen des Urheberrechts bedarf der vorherigen
        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

      <p>
        <strong>Hinweis gemäß § 36 VSBG:</strong><br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  </div>
</template>

<style scoped>
.background-wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  margin: 20px 10px 20px;
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

.impressum-content {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}

.email-link {
  color: #6d3a8c;
  text-decoration: underline;
}

.email-link:hover {
  color: #e1b47a;
}

p {
  margin-bottom: 20px;
}
</style>
