<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const isLoggedIn = computed(() => store.state.auth.isLoggedIn);

onBeforeMount(() => {
  if (!isLoggedIn.value) router.push({ name: "login" });
});
</script>
<template>
  <RouterView />
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Helvetica, system-ui;
  background-color: #f1f1f4;
  overflow: hidden;
}

i {
  color: #6e6e91;
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background: #6e6e9146;
}
</style>
