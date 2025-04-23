/* eslint-disable vue/multi-word-component-names */

<template>
  <div class="footer">
    <div class="contact-info">
      Softwarepark 11, 4232 Hagenberg im Mühlkreis<br />
      Telefon: +123456<br />
      E-Mail: <a href="mailto:office@caredigi.at">office@caredigi.at</a
      ><br /><br />
      © 2025 CAREdigi.
    </div>
    <div class="links">
      <a href="impressum.html" class="nav-item active">Impressum</a>
      <a href="datenschutz.html" class="nav-item active">Datenschutz</a>
    </div>
  </div>
</template>

<style>
.footer {
  width: 100%;
  height: 459px;
  background-color: #efd1b0;
  position: absolute;
  bottom: 0;
  padding: 30px;
  box-sizing: border-box;
}

.footer img {
  width: 263px;
  height: 263px;
  position: absolute;
  right: 40px;
  top: 93px;
}

.footer .contact-info {
  font-size: 24px;
  color: black;
  line-height: 1.6;
}

.footer .links a {
  color: black;
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
  display: block;
  margin-top: 10px;
}
</style>
