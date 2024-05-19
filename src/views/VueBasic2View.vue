<script setup lang="ts">
import { ref, onMounted } from 'vue'
const input = ref<HTMLInputElement | null>(null)
onMounted(() => {
  input.value?.focus()
})
</script>

<template>
  <input type="text" ref="input" />
</template>

<style scoped></style>
