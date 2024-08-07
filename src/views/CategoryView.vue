<template>
<categoryComponentVue
    v-motion-slide-visible-right
      :delay="400"
    :duration="1500"
 />
</template>

<script lang="ts" setup>
import categoryComponentVue from "@/components/dashboard/categoryComponent.vue";
</script>
