<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <section>
      <h1 tabindex="-1" id="welcome">404 - Page not found :(</h1>
      <p>We couldn't find the page you were looking for...</p>
      <p><RouterLink tabindex="0" to="/">Go back to the start page</RouterLink></p>
    </section>
  </main>
</template>

<style lang="scss" scoped>

</style>