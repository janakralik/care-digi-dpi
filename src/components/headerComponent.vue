/* eslint-disable vue/multi-word-component-names */

<template>
  <header class="header">
    <img src="@/assets/DIGIcare-4.png" />

    <nav>
      <div class="nav-items">
        <router-link
          to="/"
          class="nav-item"
          :class="{ active: $route.path === '/' }"
          >CAREdigi Home</router-link
        >
        <router-link
          to="/administration"
          class="nav-item"
          :class="{ active: $route.path === '/administration' }"
          >Administration</router-link
        >
        <router-link
          to="/profil"
          class="nav-item"
          :class="{ active: $route.path === '/profil' }"
          >Profil</router-link
        >
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-item.active {
  color: #ffffff;
  font-weight: bold;
}
</style>

<style>
.header {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #eab377;
  z-index: 0;
}

.logo {
  position: absolute;
  top: 20px;
  left: 30px;
  width: 150px;
  height: 150px;
}

nav {
  position: absolute;
  top: 50px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  z-index: 1;
}

.nav-items {
  display: flex;
  gap: 35px;
}

.nav-item {
  font-size: 20px;
  font-weight: 500;
  color: #252525;
  cursor: pointer;
  text-decoration: none;
}

.nav-item.secondary {
  color: #252525;
  opacity: 0.7;
  font-weight: 400;
}

.nav-item.active {
  color: #ffffff;
  font-weight: 600;
}
</style>
