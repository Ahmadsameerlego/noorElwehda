<template>
  <section class="about">
    <div class="about__header">
      <div class="about__line"></div>
      <h2 class="fw-bold">About us</h2>
      <div class="about__line"></div>
    </div>
    <p class="about__subheader">What we can do for you and your company?</p>
    <p class="about__text">
      {{ data }}
    </p>
  </section>
</template>

<script>
import axios from "axios" ;
export default {
  name: 'AboutSection',
  data(){
    return{
      data : ''
    }
  },
  methods:{
    async getAbout(){
      await axios.get('about')
      .then( (res)=>{
        this.data = res.data.data ;
      } )
    }
  },
  mounted(){
    this.getAbout()
  }
};
</script>

<style lang="scss">
.about {
  text-align: center;
  padding: 50px 20px;
  background-color: #f8f8f8;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    h2 {
      font-size: 1.5rem;
      color: #000;
      margin: 0;
    }

    .about__line {
      width: 50px;
      height: 2px;
      margin-left: 40px;
      margin-right: 40px;
      background-color: #5A33AA; // Your primary color
    }
  }

  &__subheader {
    font-size: 1rem;
    color: #666;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  &__text {
    font-size: 1rem;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
