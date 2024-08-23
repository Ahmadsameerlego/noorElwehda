<template>

<loginComponentVue
          data-aos="fade-up" data-aos-duration="2000"

 />
</template>


<script>
import loginComponentVue from "@/components/auth/contactComponent.vue";
import AOS from "aos";

export default{
  mounted() {
    AOS.init();
  },
  components:{
loginComponentVue
  }
}
</script>