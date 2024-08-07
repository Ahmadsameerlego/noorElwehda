<template>
<HeroSectionVue 
    v-motion-slide-visible-right
      :delay="400"
    :duration="1500"
/>
<daboardComponent 
    v-motion-slide-visible-left
      :delay="400"
    :duration="1500"
/>
</template>

<script lang="ts" setup>
import daboardComponent from "@/components/dashboard/daboardComponent.vue";
import HeroSectionVue from "@/components/home/HeroSection.vue";

</script>
