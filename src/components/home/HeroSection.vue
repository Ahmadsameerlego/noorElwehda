<template>
  <swiper
    :pagination="true"
    :modules="modules"
        :effect="'fade'"
    class="mySwiper"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :loop="true"
  >
    <swiper-slide>
      <section class="hero">
        <div class="hero__content">
          <h1 class="text-start fw-bold type" style="width: 56%">
            Buy Cars from America while you are at home
          </h1>
          <p class="text-start" style="width: 65%">
            Working day and night to facilitate your car transportation starting
            from providing buyer accounts, towing, shipping, clearance, and
            tracking it at all times.
          </p>
        </div>
      </section>
    </swiper-slide>
    <swiper-slide>
      <section class="hero">
        <div class="hero__content">
          <h1 class="text-start fw-bold type" style="width: 56%">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p class="text-start" style="width: 65%">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure incidunt quas ipsa nam, iusto debitis? Distinctio quidem consequatur numquam quos?
          </p>
        </div>
      </section>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
  import 'swiper/css/effect-fade';
import "swiper/css/pagination";

import {EffectFade ,  Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade , Pagination, Autoplay],
    };
  },
};
</script>


<style>
.swiper-pagination-bullet {
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.41);

  box-shadow: 0px 0px 0px 2px #fff;
}
.swiper-pagination-bullet.active {
  background: #fff;

  box-shadow: 0px 0px 1px 0px #fff;
}
</style>
<style lang="scss" scoped>
.hero {
  background-image: url("@/assets/imgs/Image+Background.png"); // replace with actual path to background image
  background-size: cover;
  background-position: center;
  padding: 250px 20px;
  color: white;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: linear-gradient(
        0deg,
        rgba(51, 31, 142, 0.71) 0%,
        rgba(51, 31, 142, 0.476) 100%
      ),
      0px -197.443px / 100% 132.432% no-repeat;
  }

  &__content {
    position: absolute;
    z-index: 999;
    padding: 20px;
    border-radius: 10px;
    top: 10rem;
    left: 10rem;

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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 220px;
  background-color: #331f8e1f;

  &__text {
    max-width: 60%;

    h2 {
      font-size: 2rem;
      margin-bottom: 10px;

      .highlight {
        color: #5a33aa; // Your primary color
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
    position: absolute;
    width: 20%;
    right: 15%;
    top: -35%;
    z-index: 9999996;
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  }
}
</style>
