<template>
<HeroSectionVue 
    v-motion-slide-visible-right
      :delay="400"
    :duration="1500"
/>
<loginComponentVue
    v-motion-slide-visible-left
      :delay="400"
    :duration="1500"
 />
</template>

<script lang="ts" setup>
import loginComponentVue from "@/components/auth/loginComponent.vue";
import HeroSectionVue from "@/components/home/HeroSection.vue";

</script>
