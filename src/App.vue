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

  changeTheme(savedTheme, true)
})

function changeTheme(savedTheme = null, initial = false) {
  /* Preset darkmode depending on device setting */
  if(initial && typeof savedTheme !== 'boolean' && !!window?.matchMedia) {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    darkTheme.value = isDarkMode
  } else {
    if(typeof savedTheme === 'boolean') {
      darkTheme.value = savedTheme
    } else {
      darkTheme.value = !darkTheme.value
    }
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
  <!--   <div class="border"></div> -->
  <ScrollToContent />
  <MainHeader />
  <main>
    <RouterView />
  </main>
  <footer>
    <ToggleButton @toggle="changeTheme()" :toggled="darkTheme" title="Dark mode" toggleOn="On" toggleOff="Off"/>
    Copyright © {{ new Date().getFullYear()}} Jacob Duvander {{ emoji }}
  </footer>
</template>

<style scoped lang="scss">
  main {
    min-height: calc(100vh - 157px);
    width: 100%;
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    padding-top: 8rem;
    text-align: center;
    color: var(--text-color);
  }

</style>
