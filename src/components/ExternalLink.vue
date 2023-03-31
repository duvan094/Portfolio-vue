<template>
    <a :href="link" target="_blank" class="external-link">
        <EmailIcon v-if="email"/>
        <HyperLinkIcon v-else/>
        {{ title }}
    </a>
</template>
  
  <script>
  import HyperLinkIcon from './icons/HyperLinkIcon.vue';
  import EmailIcon from './icons/EmailIcon.vue';

  export default {
    name: 'MainHeader',
    components: {
        HyperLinkIcon,
        EmailIcon
    },
    props: {
        link: {
            type: String,
        },
        title: {
            type: String
        },
        email: {
            type: Boolean,
            default: false
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
  