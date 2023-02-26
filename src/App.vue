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
    Jacob Duvander © {{ new Date().getFullYear()}}
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

    display:flex;
    flex-direction: column;
    justify-content: center;

    animation: .5s ease-out reveal;

    @keyframes reveal {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }

  }

  footer {
    text-align: center;
  }

</style>
