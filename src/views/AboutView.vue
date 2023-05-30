<template>
  <main>
    <section class="main-section">
      <div class="profile">
        <RoundPicture imageLink="profile.jpg" altText="Profile picture of me"/>
      </div>
      <div>
        <h1 tabindex="-1" id="about-me" class="animate-text">
          <span>Hello there,</span> <span>I'm&nbsp;Jacob.</span>
        </h1>
        <p>I'm a UX focused frontend developer from Gothenburg, currently living in Jönköping, Sweden.</p>
        <p>Currently I work as a System developer at <a href="https://www.zmarta.se/" target="_blank" rel="noopener noreferrer">Zmarta</a> where I mainly do frontend work, but occasionally some backend sprinkled here and there.</p>
        <p>Previously I've studied Graphic design and Web development at Jönköping University, where I graduated from in summer of 2019.</p>
        <p>I am primarly a JavaScript developer and am used to working with frameworks such as Vue and React, but I also have experience with CMS (Content Management System), like Wordpress.</p>
        <p>In my spare time, I'm interested in photography, taking care of my plants, and running, as well the occasional beer brewing.</p>
      </div>
    </section>
    <ExpandableSection title="Developer tools">
      <p>HTML, CSS, SCSS, JavaScript, Vue, React, Node.js, TypeScript, WordPress, PHP, SQL, Firebase, Git.</p>
    </ExpandableSection>
    <ExpandableSection title="UX/UI tools">
      <p>Figma (Adobe XD, Sketch), Adobe Photoshop/Illustrator/InDesign.</p>
    </ExpandableSection>
    <ExpandableSection title="Experience">
      <div class="small-text">
        <div class="content">
            <p><b>Zmarta</b> · Oct. 2020 - present<br> Working on the Zmarta platform. My work mainly involves frontend work as well as some UX, but occasionally backend.</p>
          </div>
          <div class="content">
            <p><b>Tross</b> · Mar. 2019 - Oct. 2020<br>An advertising agency located in Jönköping. I worked at the web department and projects mainly involved building WordPress themes, but also occasional web apps with React.</p>
        </div>
        <div class="content">
          <p><b>Trustcruit</b> · Jan. 2018 - Sep. 2018<br>An extra job after school hours building a WordPress theme.</p>
        </div>
        <div class="content">
          <p><b>Hype reklambyrå</b> · Feb. 2017 - Jan. 2018<br>Hype is a student driven nonprofit advertising agency at Jönköping University where I worked as an Art Director.</p>
        </div>
        <div class="content">
          <p><b>Jönköping University</b> · Sep. 2017 - Dec. 2017<br>Lab assistant in a Web developing course throughout a semester. Work involved helping students with Wordpress and JavaScript.</p>
        </div>
      </div>
    </ExpandableSection>
    <ExpandableSection title="Education">
      <div class="small-text">
        <div class="content">
          <p><b>Jönköping University</b> · 2016 - 2019<br>Bachelor degree in informatics. Specialization in Graphic Design and Web development.</p>
        </div>
        <div class="content">
          <p><b>Chalmers University of Technology</b> · 2014 - 2016<br>Software engineering. Programming primarily with Java, but also Assembler and C.</p>
        </div>
        <div class="content">
          <p><b>Lerums Gymnasium</b> · 2010 - 2013<br>Studied a Media Technology program. My first introduction to Adobe collection and web development.</p>
        </div>
      </div>
    </ExpandableSection>
    <section>
      <h2>Socials</h2>
      <p>Feel free to reach out to me on social media.</p>
      <div class="links">
        <ExternalLink title="Email" link="mailto:jacobduvander@gmail.com" :email="true"/>
        <ExternalLink title="Github" link="https://github.com/duvan094"/>
        <ExternalLink title="LinkedIn" link="https://www.linkedin.com/in/jacobduvander/"/>
      </div>
    </section>
    <section>
      <h2>Resumé</h2>
      <p>Check out my full CV down below 👇</p>
      <div class="links">
        <a href="/cv-en.pdf" target="_blank">CV - English version</a>
        <a href="/cv-sv.pdf" target="_blank">CV - Swedish version</a>
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

/*   .main-section {

    @media(max-width: 720px) {
      margin-top: 2rem;
      display: flex;
      flex-direction: column-reverse;

      .profile {
        margin-top: 2rem;
        margin-bottom: 0;
      }
    }
  } */

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

  .links {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: .5rem;

    @media(min-width: 720px) {
      flex-direction: row;
      gap: 2rem;
    }
  }

  .content {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .small-text p {
    font-size: 1em;
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
