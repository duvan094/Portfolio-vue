<template>
  <main>
    <section>
      <div class="profile">
        <RoundPicture imageLink="profile.jpg" altText="Profile picture of me"/>
      </div>
      <h1 tabindex="-1" id="about-me">Hello there, I'm&nbsp;Jacob.</h1>
      <p>I'm a UX focused frontend developer from Gothenburg, currently living in Jönköping, Sweden.</p>
      <p>Currently I work as a System developer at Zmarta where I mainly do frontend work, but occasionally some backend sprinkled here and there.</p>
      <p>Previously I've studied Graphic design and Web development at Jönköping University, where I graduated from in summer of 2019.</p>
      <p>I am primarly a JavaScript developer and am used to working with frameworks such as Vue and React, but I also have experience with CMS (Content Managing Systems), like Wordpress.</p>
      <p>In my spare time, I'm interested in photography, taking care of my plants, and running, as well the occasional beer brewing.</p>
    </section>
    <ExpandableSection title="Developer tools" text="HTML, CSS, SCSS, JavaScript, Vue, React, Node.js, TypeScript, WordPress, PHP, Git."/>
    <ExpandableSection title="UX/UI tools" text="Figma (Adobe XD, Sketch), Adobe Photoshop/Illustrator/InDesign."/>
    <section>
      <h2>Socials</h2>
      <p>Feel free to reach out to me on social media.</p>
      <ul>
        <li><ExternalLink title="Email" link="mailto:jacobduvander@gmail.com" :email="true"/></li>
        <li><ExternalLink title="Github" link="https://github.com/duvan094"/></li>
        <li><ExternalLink title="LinkedIn" link="https://www.linkedin.com/in/jacobduvander/"/></li>
      </ul>
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

</style>
