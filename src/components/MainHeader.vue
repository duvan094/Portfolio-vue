<template>
  <header>
    <div class="wrapper">
      <button class="hamburger-btn" :class="{'toggled': menuToggled}" @click="toggleMenu">
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="nav" :class="{'visible': menuToggled}">
      <nav>
        <RouterLink @click="this.menuToggled = false" to="/">Home</RouterLink>
        <RouterLink @click="this.menuToggled = false" to="/about">About me</RouterLink>
      </nav>
      <div class="background"></div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'


export default {
  name: 'MainHeader',
  components: {
    RouterLink,
  },
  data(){
    return {
      menuToggled: false
    }
 },
 methods: {
  toggleMenu() {
    this.menuToggled = !this.menuToggled
  }
 }

}
</script>

<style lang="scss" scoped>
    header {
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      width: 100%;

      .wrapper {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        max-width: 1080px;
        margin: auto;
        padding: 1rem 2rem;
        z-index: 1000;
        pointer-events: none;
      }
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      height: 100vh;
      width: 100%;
      top:0;
      left:0;
      z-index: 100;
      padding: 2rem;
      pointer-events: none;

      .background {
        position: fixed;
        background: #508484;
        border-radius: 50%;
        width: 200vh;
        height: 200vh;
        overflow: hidden;

        @media(min-width: 100vh) {
          width: 150vw;
          height: 150vw;
        }

        transform: scale(0);
        transition: .4s ease-out transform;
        transform-origin: top right;
      }

      nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 720px;
        width: 100%;
        z-index: 1;
        opacity: 0;
        transition: .2s ease-out opacity;
        transition-delay: 0s;

        a {
          color: #FAFFFD;
          font-size: 2em;

          @media (min-width: 720px) {
            font-size: 4em;
          }
          
        }
      }
      &.visible {
        opacity: 1;
        pointer-events: all;
        nav {
          opacity: 1;
          transition-delay: .2s;
        }
        .background {
          transform: scale(1);
        }
      }
    }

    .hamburger-btn {
      position: relative;
      padding: 0;
      width: 45px;
      height: 45px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      pointer-events: all;

      span {
        position: absolute;
        display: block;
        width: 100%;
        height: 3px;
        background-color: #0C0F0A;
        transform-origin: center;
        top: 50%;
        transition: .2s ease-out transform, .2s ease-out background-color; 
        
        &:first-child {
          transform: translate(0, -200%);
        }

        &:last-child {
          transform: translate(0, 200%);
        }
      }


      &.toggled {
        span {
          background-color: #FAFFFD;
          &:first-child {
            transform: translate(0, 0) rotate(45deg);
          }

          &:last-child {
            transform: translate(0, 0) rotate(-45deg);
          }
      }
      }
    }

</style>
