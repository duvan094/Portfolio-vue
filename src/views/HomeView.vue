<script setup>
import ExternalLink from '../components/ExternalLink.vue'
import SlideShow from '../components/SlideShow.vue'
import TitleTag from '../components/TitleTag.vue'
import ContactForm from '../components/ContactForm.vue'
import { RouterLink } from 'vue-router'

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <section class="main-section large-margin divider">
    <div class="inner-section">
      <h1 tabindex="-1" id="welcome">Hi, welcome to my&nbsp;site!</h1>
      <h2 class="h4">I'm a frontend developer currently living in Jönköping, Sweden. This is just a site for&nbsp;fun.</h2>
      <p>The website is still a work in progress but I will use it for gathering links to hobby projects I've been working on.</p>
      <p><RouterLink tabindex="0" to="/about">Read more about me</RouterLink> or scroll down to see my hobby projects.</p>
      <SlideShow v-if="false"/>
    </div>
  </section>
  <section class="large-margin">
    <div class="inner-section">
      <h2 id="projects">Here are a few selected hobby&nbsp;projects.</h2>
      <p>After I graduated and started working full-time as a web developer, I had a long break from side projects in my free time. Hopefully I'll have more time in&nbsp;the&nbsp;future&nbsp;🤞</p>
      <div class="link-container">
        <TitleTag text="2023"/>
        <div class="link-group">
          <button class="link-button" tabindex="0" @click="scrollToTop()">This website</button>
          <ExternalLink title="Porcelain painting" link="https://porslin.jacobduvander.se"/>
          <ExternalLink title="Three.js demo" link="https://threejs.jacobduvander.se"/>
          <ExternalLink title="AoE2 Soundboard" link="https://aoe2.jacobduvander.se"/>
        </div>
        <TitleTag text="2019"/>
        <div class="link-group">
          <ExternalLink title="Wasted time" link="https://wastedtime.jacobduvander.se"/>
          <ExternalLink title="Quiz" link="https://quiz.jacobduvander.se/"/>
          <ExternalLink title="3d portfolio" link="https://te3b.jacobduvander.se/"/>
        </div>
        <TitleTag text="2018"/>
        <div class="link-group">
          <ExternalLink title="Coffee infographic" link="https://coffee.jacobduvander.se"/>
          <ExternalLink title="Swiss design poster" link="https://swiss.jacobduvander.se"/>
        </div>
        <TitleTag text="2017"/>
        <div class="link-group">
          <ExternalLink title="Christmas bird" link="https://christmasbird.jacobduvander.se/"/>
          <ExternalLink title="Wallz" link="https://wallz.jacobduvander.se/"/>
        </div>
      </div>
    </div>
  </section>
  <ContactForm />
</template>

<style lang="scss" scoped>

.link-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2rem;
}

.link-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media(min-width: 720px) {
    gap: 2rem;
    margin-bottom: 1rem;
  }
}

.large-margin {
  margin-top: 4rem;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.main-section {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 6rem;
  
  @media (min-width: 720px) {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }

/*   min-height: calc(100vh - 20rem); */
}

.divider {
  position: relative;
/*  border-bottom: 1px solid var(--link-color); */
 padding-bottom: 8rem;
 margin-bottom: 8rem;

  &::before, &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  &::before {
    border: 2px solid var(--link-color);
    height: 2.3rem;
    width: 1.5rem;
    border-radius: 2rem;
  }

  &::after {
   height: .7rem;
   width: .4rem;
   border-radius: 1rem;
   background-color: var(--link-color);
   animation: scroll infinite 1s ease-in alternate;

    @keyframes scroll {
      from {
        transform: translate(-50%, 20%);
      }
      
      to {
        transform: translate(-50%, 80%);
      }

    }

  }

}
</style>