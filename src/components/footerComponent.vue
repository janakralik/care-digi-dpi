/* eslint-disable vue/multi-word-component-names */

<template>
  <div class="footer">
    <div class="contact-info">
      Softwarepark 11, 4232 Hagenberg im Mühlkreis<br />
      Telefon: +123456<br />
      E-Mail: <a href="mailto:office@caredigi.at">office@caredigi.at</a><br /><br />
      © 2025 CAREdigi.
    </div>
    <div class="links">
      <router-link to="/impressum" class="nav-item active">Impressum</router-link>
      <router-link to="/datenschutz" class="nav-item active">Datenschutz</router-link>
    </div>
  </div>
</template>

<style>
.footer {
  width: 100%;
  background-color: #efd1b0;
  padding: 20px; /* Reduzierter Padding für weniger Höhe */
  box-sizing: border-box;
  text-align: center; /* Zentriert den Text */
}

.footer img {
  width: 150px; /* Kleinere Bildgröße */
  height: 150px;
  margin-bottom: 10px; /* Weniger Abstand zum Text */
}

.footer .contact-info {
  font-size: 16px; /* Kleinere Schriftgröße */
  color: black;
  line-height: 1.4;
  margin-bottom: 10px; /* Weniger Abstand zum unteren Text */
}

.footer .links a {
  color: black;
  font-size: 16px; /* Kleinere Schriftgröße */
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  margin: 5px 15px; /* Weniger Abstand zwischen den Links */
}
</style>
