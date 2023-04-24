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
        <RouterLink tabindex="0" @click="this.menuToggled = false" to="/">Home</RouterLink>
        <RouterLink tabindex="0" @click="this.menuToggled = false" to="/about">About me</RouterLink>
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
      pointer-events: none;
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
        padding: 1rem;
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
        background: var(--header-bg-color);
        border-radius: 50%;
        width: 200vh;
        height: 200vh;
        overflow: hidden;

        @media(min-width: 100vh) {
          width: 150vw;
          height: 150vw;
        }

        transform: scale(0);
        will-change: transform;
        transition: .4s ease-out transform;
        transform-origin: top right;
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        max-width: 720px;
        width: 100%;
        z-index: 1;
        opacity: 0;
        transition: .2s ease-out opacity;
        transition-delay: 0s;

        a {
          color: var(--header-link-color);
          font-size: 2em;

          &:before {
            background-color: var(--header-link-color);
          }

          &:after {
            border: 3px solid var(--header-link-color);
          }

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
      width: 50px;
      height: 50px;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
      pointer-events: all;
      border-radius: 5px;   

      @media (max-width: 720px) {
        background-color: var(--header-mobile-background);
        
        transition: .2s ease-out background-color;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          box-shadow: var(--box-shadow);
          opacity: 1;
          transition: .2s ease-out opacity;
        }

        span {
          background-color: var(--header-link-color);
          width: calc(100% - 1rem);
        }
      }

      @media (min-width: 720px) {
        width: 45px;
        height: 45px;

        span {
          background-color: var(--link-color);
          width: 100%;
        }

        &:hover {
          span {
            background-color:var(--link-color-hover);
          }
        }
      }

      span {
        position: absolute;
        display: block;
        height: 3px;

        transform-origin: center;
        top: 50%;
        left: 50%;
        will-change: transform;
        transition: .2s ease-out transform, .2s ease-out background-color; 
        
        &:first-child {
          transform: translate(-50%, -200%);
        }

        &:last-child {
          transform: translate(-50%, 200%);
        }
      }


      &.toggled {
        &::before {
          opacity: 0;
        }

        &:after {
          border: 3px solid var(--header-link-color);
        }
        span {
          background-color: var(--header-link-color);
          &:first-child {
            transform: translate(-50%, 0) rotate(45deg);
          }

          &:last-child {
            transform: translate(-50%, 0) rotate(-45deg);
          }
      }
      }
    }

</style>
