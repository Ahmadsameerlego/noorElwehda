<template>
<privacyComponent
       data-aos="fade-up" data-aos-duration="2000"
 />
</template>

<script>
import privacyComponent from "@/components/layout/privacyComponent.vue";
import AOS from "aos";

export default{
  mounted() {
    AOS.init();
  },
  components:{
privacyComponent
  }
}
</script>
