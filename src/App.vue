<script setup>
  import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component, route }">
    <transition
      :name="route.meta.transition || 'page-slide'"
      mode="out-in"
    >
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style scoped>
  /* Elegant slide-up transition */
  .page-slide-enter-from {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
    filter: blur(4px);
  }
  
  .page-slide-leave-to {
    opacity: 0;
    transform: translateY(-20px) scale(0.98);
    filter: blur(2px);
  }
  
  .page-slide-enter-active {
    transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  
  .page-slide-leave-active {
    transition: all 0.35s cubic-bezier(0.4, 0, 1, 1);
  }

  /* Alternative: Horizontal slide for variety */
  .page-slide-left-enter-from {
    opacity: 0;
    transform: translateX(-60px);
  }
  
  .page-slide-left-leave-to {
    opacity: 0;
    transform: translateX(60px);
  }
  
  .page-slide-left-enter-active,
  .page-slide-left-leave-active {
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .page-slide-right-enter-from {
    opacity: 0;
    transform: translateX(60px);
  }
  
  .page-slide-right-leave-to {
    opacity: 0;
    transform: translateX(-60px);
  }
  
  .page-slide-right-enter-active,
  .page-slide-right-leave-active {
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
</style>
