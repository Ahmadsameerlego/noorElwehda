<template>
<aboutComponent
       data-aos="fade-up" data-aos-duration="2000"
 />
</template>

<script>
import aboutComponent from "@/components/layout/aboutComponent.vue";
import AOS from "aos";

export default{
  mounted() {
    AOS.init();
  },
  components:{
aboutComponent
  }
}
</script>
