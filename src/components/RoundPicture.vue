<template>
    <div class="img">
        <div class="img-wrapper" :class="{'loaded': revealImg}">
          <img :src="imageLink" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "RoundPicture",
        props: {
            imageLink: {
                type: String
            }
        },
        data() {
          return {
            revealImg: false
          }
        },
        mounted() {
          const img = new Image()
          img.src = this.imageLink

          img.onload = ()=>{
            this.revealImg = true
          }

        }
    }

</script>

  <style lang="scss" scoped>
    
    .img {
      width: 100%;
      max-width: 250px;
      
      .img-wrapper {
        position: relative;
        border-radius: 50%;
        height: 0;
        padding-top: 100%;
        width: 100%;
  
        overflow: hidden;
        box-shadow: -1px 10px 30px -10px rgba(0,0,0,0.75);

        opacity: 0;
        transition: .2s ease-out opacity;

        &.loaded{
          opacity: 1;
        }

  
        img {
          position: absolute;
          top:0;
          left:0;
          width: 100%;
        }
      }
    }
  
  
  </style>
  