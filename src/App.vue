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
      padding: 1rem 2rem;

      nav {
        display: flex;
        gap: 1rem;
      }
    }
  }

  main {
    display:flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 88px);
    margin: 0 auto;
    padding: 6rem 2rem;
    width: 100%;
    max-width: 720px;



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
    padding: 2rem;
    text-align: center;
  }

</style>
