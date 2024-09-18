<template>
  <section class="main-section">
    <div class="inner-section">
      <div class="profile">
        <RoundPicture imageLink="profile.jpeg" altText="Profile picture of me"/>
        <div class="emojis">
          <span>🌱</span>
          <span>🍺</span>
          <span>📷</span>
          <span>☕</span>
        </div>
      </div>
      <div>
        <h1 tabindex="-1" id="about-me" class="animate-text">
          <span>Hello there,</span> <span>I'm&nbsp;Jacob.</span>
        </h1>
        <p>I'm a UX focused frontend developer from Gothenburg, currently living in Jönköping, Sweden.</p>
        <p>Currently I am working as a consultant at <a href="https://knowitexperience.com/" target="_blank" rel="noopener noreferrer">Knowit&nbsp;Experience</a>.</p>
        <p>Previously I've studied Graphic design and Web development at Jönköping University, where I graduated from in summer of 2019.</p>
        <p>I am primarly a frontend developer and I am used to working with frameworks such as Vue and React, but I also have experience building Wordpress themes and some backend experience using Node.js/Express.js.</p>
        <p>In my spare time, I'm interested in photography, taking care of my plants, and running, as well the occasional beer brewing.</p>
      </div>
    </div>
  </section>
  <section>
    <div class="inner-section">
      <ExpandableSection title="Developer tools">
        <p>HTML, CSS, SCSS, JavaScript, Vue, React, Next.js, Node.js, TypeScript, WordPress, Episerver CMS, Contentful, PHP, SQL, Firebase, Git.</p>
      </ExpandableSection>
      <ExpandableSection title="UX/UI tools">
        <p>Figma (Adobe XD, Sketch), Adobe Photoshop/Illustrator/InDesign.</p>
      </ExpandableSection>
      <ExpandableSection title="Experience">
        <div>
          <div class="content">
              <h4>Knowit Experience</h4>
              <small class="date">August 2023 - present</small>
              <p class="small">Currently working as a Web developer/Consultant. Primarly working with React, Next.js and WordPress / PHP. Also occassionally doing UX/UI when needed.</p>
            </div>
          <div class="content">
              <h4>Zmarta</h4>
              <small class="date">October 2020 - August 2023</small>
              <p class="small">Worked on the Zmarta platform. My work mainly involved frontend work as well as some UX, but occasionally backend. Mainly using Vue, Node.js.</p>
            </div>
            <div class="content">
              <h4>Tross</h4>
              <small class="date">March 2019 - October 2020</small>
              <p class="small">An advertising agency located in Jönköping. I worked at the web department and projects mainly involved building WordPress themes, but also occasional web apps with React.</p>
          </div>
          <div class="content">
            <h4>Trustcruit</h4>
            <small class="date">January 2018 - September 2018</small>
            <p class="small">An extra job after school hours building a WordPress theme.</p>
          </div>
          <div class="content">
            <h4>Hype reklambyrå</h4>
            <small class="date">February 2017 - January 2018</small>
            <p class="small">Hype is a student driven nonprofit advertising agency at Jönköping University where I worked as an Art Director.</p>
          </div>
          <div class="content">
            <h4>Jönköping University</h4>
            <small class="date">September 2017 - December 2017</small>
            <p class="small">Lab assistant in a Web developing course throughout a semester. Work involved helping students with Wordpress and JavaScript.</p>
          </div>
        </div>
      </ExpandableSection>
      <ExpandableSection title="Education">
        <div class="small-text">
          <div class="content">
            <h4>Jönköping University</h4>
            <small class="date">2016 - 2019</small>
            <p class="small">Bachelor degree in informatics. Specialization in Graphic Design and Web development.</p>
          </div>
          <div class="content">
            <h4>Chalmers University of Technology</h4>
            <small class="date">2014 - 2016</small>
            <p class="small">Software engineering. Programming primarily with Java, but also Assembler and C.</p>
          </div>
          <div class="content">
            <h4>Lerums Gymnasium</h4>
            <small class="date">2010 - 2013</small>
            <p class="small">Studied a Media Technology program. My first introduction to Adobe collection and web development.</p>
          </div>
        </div>
      </ExpandableSection>
    </div>
  </section>
  <section>
    <div class="inner-section">
      <h2>Socials</h2>
      <p>Feel free to reach out to me on social media.</p>
      <div class="links">
        <ExternalLink title="Email" link="mailto:jacobduvander@gmail.com" :email="true"/>
        <ExternalLink title="Github" link="https://github.com/duvan094"/>
        <ExternalLink title="LinkedIn" link="https://www.linkedin.com/in/jacobduvander/"/>
        <ExternalLink title="CodePen" link="https://codepen.io/duvander" />
      </div>
    </div>
  </section>
<!--     <section>
      <h2>Resumé</h2>
      <p>Check out my full CV down below 👇</p>
      <div class="links">
        <a href="/cv-en.pdf" target="_blank">CV - English version</a>
        <a href="/cv-sv.pdf" target="_blank">CV - Swedish version</a>
      </div>
    </section> -->
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

  .main-section {
    padding-top: 6rem;
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
    padding: 0 0.5rem 1rem 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--border-expandable-content);

    &:last-child {
      margin-bottom: 1rem;
      border-bottom: none;
    }
  }

  .content small {
    display: inline-block;
    font-size: 1em;
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }

  }

  .content .date {
    margin-bottom: 1rem;
  }

  .content h4 {
    margin-bottom: 0;
  }

  .content p.small {
    font-size: 1em;
  }

  .small-text p {
    font-size: 1em;
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .emojis {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
    filter: grayscale(0.5);
    opacity: 0.6;
    font-size: 2rem;
    width: 100%;
    height: calc(100% + 4rem);
    pointer-events: none;
  }

  .emojis span {
    animation-duration: 6s;
    animation-name: flowing-emojis;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    opacity: 0;    
    transform: scale(0.8);
  }

  .emojis span:nth-child(2) {
    animation-delay: 3s;
  }

  .emojis span:nth-child(3) {
    animation-delay: 1.5s;
  }

  .emojis span:nth-child(4) {
    animation-delay: 4.5s;
  }

  .emojis span:nth-child(5) {
    animation-delay: 6s;
  }

  @keyframes flowing-emojis {
    0% {
      opacity: 0;
      transform: scale(0.8);
      top: 100%;
      transform-origin: center bottom;
    }

    10% {
      opacity: 100%;
      transform: scale(1);
    }

    90% {
      opacity: 100%;
      transform: scale(1);
    }

    100% {
      opacity: 0;
      top: 0;
      transform: scale(0.8);
      transform-origin: center top;
    }
  }

</style>
