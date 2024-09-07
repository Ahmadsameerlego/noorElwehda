<template>
<termsComponent
       data-aos="fade-up" data-aos-duration="2000"
 />
</template>

<script>
import termsComponent from "@/components/layout/termsComponent.vue";
import AOS from "aos";

export default{
  mounted() {
    AOS.init();
  },
  components:{
termsComponent
  }
}
</script>
