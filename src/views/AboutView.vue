<template>
  <div>
    <section>
      <div class="profile">
        <RoundPicture imageLink="profile.jpg"/>
      </div>
      <h1>About me</h1>
      <p>This is a description of me as a person. Hope you learned something!</p>
    </section>
    <section>
      <h2>Socials</h2>
      <ul>
        <li><a href="mailto:jacobduvander@gmail.com">Email</a></li>
        <li><a href="https://github.com/duvan094" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/jacobduvander/" target="_blank">LinkedIn</a></li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import RoundPicture from '../components/RoundPicture.vue'
</script>

<style lang="scss" scoped>
  .profile {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

</style>
