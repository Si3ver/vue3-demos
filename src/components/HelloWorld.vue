<script setup lang="ts">
type Props = {
  msg?: string
}
const props = withDefaults(defineProps<Props>(), {
  msg: 'defaultMsg'
})

// const emit = defineEmits<{
//   (e: 'myClick', payload: string): void
// }>()

// 3.3+ 更简洁的事件声明语法
// const emit = defineEmits<{
//   myClick: [payload: string]
// }>()

// 添加事件校验
const emit = defineEmits({
  myClick: (payload: string) => {
    return payload !== 'wtf'
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green" @click="emit('myClick', 'wtf')">line1: {{ props.msg }}</h1>
    <h1 class="green" @click="emit('myClick', 'wtf!')">line2: {{ props.msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.greetings h1 {
  text-align: center;
}
</style>
