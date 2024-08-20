<template>
  <section class="avialbe">
   <section class="about">
    <div class="about__header">
      <div class="about__line"></div>
      <h2 class="fw-bold">Avilable Cars</h2>
      <div class="about__line"></div>
    </div>
    <p class="about__subheader">What You get with logistics business</p>
    
  </section>    

  <!-- slider  -->

   <Carousel :autoplay="100" transition="2000" :items-to-show="4" :wrap-around="true" :breakpoints="breakpoints" v-if="cars.length>0">
    <Slide v-for="(slide, index) in cars" :key="index">
      <div class="slide-item">
      <div class="carousesl-image">
              <img :src="slide.image" alt="">
      </div>
      <div class="slide-details">
        <h3 class="fw-bold car_name">
          {{ sllide.brand }}, {{ sllide.model }}, {{ sllide.year }}
        </h3>
        <p>
          Price <span class="price">{{ sllide.year }} AED </span>
        </p>
        <p>
            Car ID <span class="car_id">{{ car.car_num }}</span>
        </p>
        <p>
            VIN  <span class="vin">{{  car.vin }}</span>
        </p>
      </div>
    </div>
    </Slide>
  </Carousel>

  <div v-else>
    <Message severity="info">No Avilable Cars Yet !</Message>

  </div>

  </section>
</template>

<script>
import axios from "axios";
import { Carousel,  Slide } from 'vue3-carousel'
import Message from 'primevue/message';

import 'vue3-carousel/dist/carousel.css'

export default {
  data(){
    return{
      breakpoints: {
        320:{
                  itemsToShow: 1,
        snapAlign: 'center',

        },
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'center',
      },
    },
    cars : []
    }
  },
  name: 'HeroSection',
    components: {
    Carousel,
    Slide,
    Message 
  },

  methods:{
    async getCars(){
      await axios.get('available-cars')
      .then( (res)=>{
        this.cars = res.data.data.data ;
      } )
    }
  },
  mounted(){
    this.getCars()
  }

};
</script>



<style>
.p-message{
  width: 60%;
  margin: auto;
  height: 50px;
}
.p-message-wrapper{
  display: flex;
  justify-content: space-around;
  align-items:center;
  height: 100%;
}
.carousel__item {
  min-height: 300px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  overflow: visible;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>



<style lang="scss" scoped>
.slide-item{
  width: 300px;
  height: 430px;
  border-radius: 10px;
  .carousesl-image{
    img{
      object-fit: cover;
      width: 300px;
      height: 250px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  }
  .slide-details{
    position: relative;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    p{
      color:  #322E2D;
      text-align: center;
      font-family: Poppins;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .price{
    color: #FF0B0B;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    }
    .car_id , .vin{
      color: #331F8E;
      font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    }
  }
  .car_name{
    color:  #331F8E;
    text-align: center;
    font-family: Poppins;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px; /* 140% */

  }
}
.avialbe {
  background-image: url('@/assets/imgs/Image+Background.png'); // replace with actual path to background image
  background-size: cover;
  background-position: center;
  background-color: #383838B2;
  padding: 50px 20px 70px 0 ;
  color: white;
  text-align: center;
  
    .about{
        background-color: transparent;
        h2 , p{
                    color: #fff;
        }
    }
  &__content {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
    }
  }
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  background-color: #f4f4f4;
  
  &__text {
    max-width: 60%;
    
    h2 {
      font-size: 2rem;
      margin-bottom: 10px;

      .highlight {
        color: #5A33AA; // Your primary color
        font-weight: bold;
      }
    }

    p {
      font-size: 1rem;
      color: #666;
    }
  }

  &__image {
    max-width: 35%;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  }
}
</style>
