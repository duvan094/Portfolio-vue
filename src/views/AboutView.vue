<template>
  <main>
    <section>
      <div class="profile">
        <RoundPicture imageLink="profile.jpg" altText="Profile picture of me"/>
      </div>
      <h1 tabindex="-1" id="about-me" class="animate-text">
        <span>Hello there,</span> <span>I'm&nbsp;Jacob.</span>
      </h1>
      <p>I'm a UX focused frontend developer from Gothenburg, currently living in Jönköping, Sweden.</p>
      <p>Currently I work as a System developer at <a href="https://www.zmarta.se/" target="_blank">Zmarta</a> where I mainly do frontend work, but occasionally some backend sprinkled here and there.</p>
      <p>Previously I've studied Graphic design and Web development at Jönköping University, where I graduated from in summer of 2019.</p>
      <p>I am primarly a JavaScript developer and am used to working with frameworks such as Vue and React, but I also have experience with CMS (Content Managing Systems), like Wordpress.</p>
      <p>In my spare time, I'm interested in photography, taking care of my plants, and running, as well the occasional beer brewing.</p>
    </section>
    <ExpandableSection title="Developer tools" text="HTML, CSS, SCSS, JavaScript, Vue, React, Node.js, TypeScript, WordPress, PHP, Git."/>
    <ExpandableSection title="UX/UI tools" text="Figma (Adobe XD, Sketch), Adobe Photoshop/Illustrator/InDesign."/>
    <section>
      <h2>Socials</h2>
      <p>Feel free to reach out to me on social media.</p>
      <div class="socials">
        <ExternalLink title="Email" link="mailto:jacobduvander@gmail.com" :email="true"/>
        <ExternalLink title="Github" link="https://github.com/duvan094"/>
        <ExternalLink title="LinkedIn" link="https://www.linkedin.com/in/jacobduvander/"/>
      </div>
    </section>
  </main>
</template>

<script setup>
import ExternalLink from '../components/ExternalLink.vue'
import ExpandableSection from '../components/ExpandableSection.vue';
import RoundPicture from '../components/RoundPicture.vue'
</script>

<style lang="scss" scoped>
  .profile {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .animate-text {
    span {
      display: inline-block;
      font-family: inherit;
      font-weight: inherit;
      font-size: inherit;
      will-change: transform, opacity;
    }
    @for $i from 0 through 10 {
      span:nth-child(#{$i+1}) {
        opacity: 0;
        transform: translateY(3rem);
        animation: 1s ease reveal calc($i * 1s + .5s);
        animation-fill-mode: forwards;
      }
    }

    @keyframes reveal {
      0%{
        opacity: 0;
        transform: translateY(1rem);
      }
      100%{
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .socials {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: .5rem;

    @media(min-width: 720px) {
      flex-direction: row;
      gap: 2rem;
    }
  }

</style>
