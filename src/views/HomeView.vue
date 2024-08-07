<template>
  <HeroSectionVue
    
  />
  <infoComponentVue
     v-motion-slide-visible-bottom
    :delay="400"
    :duration="1500"
   />
  <AboutSectionVue 
    v-motion-slide-visible-bottom
    :delay="400"
    :duration="1500"
  />
  <AvilableCarsVue 
   v-motion-slide-visible-bottom
    :delay="400"
    :duration="1500"

  />
  <CustomerSectionVue
    v-motion-slide-visible-bottom
    :delay="400"
    :duration="1500"
   />
</template>

<script lang="ts" setup>
import AboutSectionVue from "@/components/home/AboutSection.vue";
import AvilableCarsVue from "@/components/home/AvilableCars.vue";
import CustomerSectionVue from "@/components/home/CustomerSection.vue";
import HeroSectionVue from "@/components/home/HeroSection.vue";
import infoComponentVue from "@/components/home/infoComponent.vue";
</script>
