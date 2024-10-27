<script setup>
  import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/Homecards.vue'
  import Joblistings from '@/components/Joblistings.vue';
</script>


<template>
<Hero  title="Hello Vue"  subtitle="this is my first Vue project" />
<HomeCards  />
<Joblistings limit="3" :showButton="true" />    
</template>