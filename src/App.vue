<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
  <footer>
    Jacob Duvander
  </footer>
</template>

<style scoped lang="scss">

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    .wrapper {
      width: 100%;
      max-width: 1080px;
      margin: auto;
      padding: 1rem;

      nav {
        display: flex;
        gap: 1rem;
      }
    }
  }

  main {
    margin: auto;
    width: 100%;
    max-width: 720px;
    min-height: 720px;
    display:flex;
    align-items: center;
  }

  footer {
    text-align: center;
  }

</style>
