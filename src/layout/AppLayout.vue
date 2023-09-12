<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import SideMenu from "@/components/SideMenu.vue";
</script>
<template>
  <div class="container">
    <SideMenu />
    <div style="height: 100vh; overflow: hidden">
      <Navbar />
      <RouterView
        style="
          padding: 2.2rem;
          height: 100%;
          padding-bottom: 100px;
          overflow: auto;
        "
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;

  > div {
    width: 100%;
  }
}
</style>
