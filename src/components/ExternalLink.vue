<template>
    <a :href="link" target="_blank" class="external-link">
        <HyperLinkIcon />
        {{ title }}
    </a>
</template>
  
  <script>
  import HyperLinkIcon from './icons/HyperLinkIcon.vue';
  
  export default {
    name: 'MainHeader',
    components: {
        HyperLinkIcon,
    },
    props: {
        link: {
            type: String,
        },
        title: {
            type: String
        }
    }

  }
  </script>
  
  <style lang="scss" scoped>

    .external-link {
        margin-left: 25px;
        svg {
            position: absolute;
            left: -25px;
            width: 20px;
            fill: #508484;
        }
    }  

  </style>
  