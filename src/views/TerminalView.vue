<template>
  <div id="app">
    <terminal name="my-terminal" v-bind="terminalConfig" @exec-cmd="onExecCmd"></terminal>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import Terminal from 'vue-web-terminal'
import 'vue-web-terminal/lib/theme/dark.css'

const terminalConfig = {
  context: '/home',
  prompt: 'root@localhost'
}

const onExecCmd = (key, command, success, failed) => {
  if (key === 'fail') {
    failed('Something wrong!!!')
  } else {
    let allClass = ['success', 'error', 'system', 'info', 'warning']

    let clazz = allClass[Math.floor(Math.random() * allClass.length)]
    success({
      type: 'normal',
      class: clazz,
      tag: '成功',
      content: command
    })
  }
}
</script>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
