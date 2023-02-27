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
      background: #508484;
      padding: 2rem;
      opacity: 0;
      transition: .2s ease-out opacity;
      pointer-events: none;
      &.visible {
        opacity: 1;
        pointer-events: all;
      }

      nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 720px;
        width: 100%;
        a {
          color: #FAFFFD;
          font-size: 2em;

          @media (min-width: 720px) {
            font-size: 4em;
          }
          
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
