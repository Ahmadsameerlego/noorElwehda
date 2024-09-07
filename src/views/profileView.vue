<template>
<loginComponentVue
    v-motion-slide-visible-left
      :delay="400"
    :duration="1500"
 />
</template>

<script lang="ts" setup>
import loginComponentVue from "@/components/auth/profileComponent.vue";
import HeroSectionVue from "@/components/home/HeroSection.vue";

</script>
