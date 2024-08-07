<template>
<myCarsComponent 
    v-motion-slide-visible-left
      :delay="400"
    :duration="1500"
/>
</template>

<script lang="ts" setup>
import myCarsComponent from "@/components/dashboard/ledgerComponent.vue";
</script>
