<script setup lang="ts">
import {getComponentsConfig} from "./packages/getComponents.ts";
import {onMounted, ref} from "vue";
import Banner from "./packages/banner/banner.vue";

let components = ref([])
onMounted(async () => {
  components.value = await getComponentsConfig()
})
</script>

<template>
  <div  v-for="item in components" :key="item.id">
    <component  :is="item.name"  :key="item.id" :obj="{}"></component>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
