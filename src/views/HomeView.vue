<script setup>
import ExternalLink from '../components/ExternalLink.vue'
import SlideShow from '../components/SlideShow.vue'
</script>

<template>
  <main>
    <section>
      <h1 tabindex="-1" id="welcome">Welcome to my&nbsp;site!</h1>
      <h4>I'm a frontend developer currently living in Jönköping, Sweden. This is just a site for&nbsp;fun.</h4>
      <p>The website is still a work in progress but I will use it for gathering links to hobby projects I've been working on.</p>
      <SlideShow v-if="false"/>
    </section>
    <section>
      <h2>Projects</h2>
      <p>Here are a few selected hobby projects. After I graduated and started working full-time as a web developer I had a long break from hobby projects, hopefully I'll have more time in the future 🤞</p>
      <div class="link-container">
        <h4>2023</h4>
        <div class="link-group">
          <p><ExternalLink title="AoE2 Soundboard" link="https://aoe2.jacobduvander.se"/></p>
        </div>
        <h4>2019</h4>
        <div class="link-group">
          <p><ExternalLink title="Wasted time" link="https://wastedtime.jacobduvander.se"/></p>
        </div>
        <h4>2018</h4>
        <div class="link-group">
          <ExternalLink title="Quiz" link="https://quiz.jacobduvander.se/"/>
          <ExternalLink title="Coffee infographic" link="https://coffee.jacobduvander.se"/>
          <ExternalLink title="Swiss design poster" link="https://swiss.jacobduvander.se"/>
        </div>
        <h4>2017</h4>
        <div class="link-group">
          <p><ExternalLink title="Christmas bird" link="https://christmasbird.jacobduvander.se/"/></p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>

.link-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.link-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;

  @media(min-width: 720px) {
    gap: 2rem;
  }
}

</style>