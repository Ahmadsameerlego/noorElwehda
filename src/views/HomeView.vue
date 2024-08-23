<template>
  <HeroSectionVue
          data-aos="fade-up" data-aos-duration="2000"

  />
  <infoComponentVue
    data-aos="fade-up" data-aos-duration="2000"
   />
  <AboutSectionVue 
   data-aos="fade-up" data-aos-duration="2000"
  />
  <AvilableCarsVue 
   data-aos="fade-up" data-aos-duration="2000"
  />
  <CustomerSectionVue
    data-aos="fade-up" data-aos-duration="2000"
   />
</template>

<script >
import AOS from "aos";
import AboutSectionVue from "@/components/home/AboutSection.vue";
import AvilableCarsVue from "@/components/home/AvilableCars.vue";
import CustomerSectionVue from "@/components/home/CustomerSection.vue";
import HeroSectionVue from "@/components/home/HeroSection.vue";
import infoComponentVue from "@/components/home/infoComponent.vue";

export default{
   mounted() {
    AOS.init();
  },
  components:{
    AboutSectionVue,
    AvilableCarsVue,
    CustomerSectionVue,
    infoComponentVue,
    HeroSectionVue
  }
}
</script>
