<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/mechanic">Mechanic</router-link>
  </nav>
<!--  <div>-->
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <hello-world msg="Hello" />-->
  <router-view/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-details a {
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>