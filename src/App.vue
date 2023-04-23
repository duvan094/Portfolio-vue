<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import ScrollToContent from './components/ScrollToContent.vue'

const emoji = computed(() => {
  const emojis = ['🌱', '☕', '📷', '🍺']
  return emojis[Math.floor(Math.random()*emojis.length)]
})
</script>

<template>
  <ScrollToContent />
  <MainHeader />
  <div class="page-wrapper">
    <RouterView />
  </div>
  <footer>
    Copyright © {{ new Date().getFullYear()}} Jacob Duvander {{ emoji }}
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

  footer {
    padding: 2rem;
    text-align: center;
    color: var(--text-color);
  }

</style>
