<script setup>
import { computed, ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import ScrollToContent from './components/ScrollToContent.vue'
import ToggleButton from './components/ToggleButton.vue'

const emoji = computed(() => {
  const emojis = ['🌱', '☕', '📷', '🍺']
  return emojis[Math.floor(Math.random()*emojis.length)]
})

let darkTheme = ref(false)

onMounted(() => {
  const savedTheme = JSON.parse(localStorage.getItem("dark-theme"));

  changeTheme(savedTheme)
})

function changeTheme(savedTheme = null) {
  if(typeof savedTheme === 'boolean') {
    darkTheme.value = savedTheme
  } else {
    darkTheme.value = !darkTheme.value
  }
  
  if(darkTheme.value) {
    document.querySelector('body').classList.add('dark-theme')
    localStorage.setItem("dark-theme", true)
  } else {
    document.querySelector('body').classList.remove('dark-theme')
    localStorage.setItem("dark-theme", false)
  }
}
</script>

<template>
  <ScrollToContent />
  <MainHeader />
  <div class="page-wrapper">
    <RouterView />
  </div>
  <footer>
    <ToggleButton @toggle="changeTheme()" :toggled="darkTheme" title="Dark mode" toggleOn="On" toggleOff="Off"/>
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
    color: var(--text-color);
  }

</style>
