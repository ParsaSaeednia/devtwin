<script setup>
  import Navbar from "./components/Navbar.vue";
  import Arcaptcha from "./components/Arcaptcha.vue";
</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <Arcaptcha site_key="of3fqwsxwd"> </Arcaptcha>
</template>

<style scoped>
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
</style>
