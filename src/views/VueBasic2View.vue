<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
const input = ref<HTMLInputElement | null>(null)
onMounted(() => {
  input.value?.focus()
})
</script>

<template>
  <input type="text" ref="input" />
  <HelloWorld />
  <HelloWorld msg="aaa" />
</template>

<style scoped></style>
