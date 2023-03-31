<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import ScrollToContent from './components/ScrollToContent.vue'
</script>

<template>
  <ScrollToContent />
  <MainHeader />
  <div class="page-wrapper" id="main">
    <RouterView />
  </div>
  <footer>
    Jacob Duvander © {{ new Date().getFullYear()}}
  </footer>
</template>

<style scoped lang="scss">
  .page-wrapper{
    display:flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 88px);
    margin: 0 auto;
    padding: 6rem 2rem;
    width: 100%;
    max-width: 720px;
  }

  main {
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
