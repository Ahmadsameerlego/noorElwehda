<template>
<subCustomers
    v-motion-slide-visible-left
      :delay="400"
    :duration="1500"
 />
</template>

<script lang="ts" setup>
import subCustomers from "@/components/customer/subcustomersComponent.vue";
</script>
