<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const text = ref('')
const picked = ref('One')
const checkedNames = ref([])
const selected = ref('')
const message = ref('')

const toggle = ref('yes')

onMounted(() => {
  console.log(`the component is now mounted.`)
})

// ---- 侦听器 watch & config ----
const obj = reactive({ count: 0 })

watch(
  () => obj.count,
  (newValue, oldValue) => {
    console.log('watch obj', newValue, oldValue)
  },
  { immediate: true, once: true }
)
setTimeout(() => {
  obj.count++
}, 1000)

// ---- 侦听器 watchEffect & config ----
const todoId = ref(1)
const data = ref(null)

watch(
  todoId,
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data.value = await response.json()
  },
  { immediate: true }
)
</script>

<template>
  <h2>v-for</h2>
  <li v-for="item of items" :key="item">{{ item.message }}111</li>

  <h2>v-model</h2>
  <h3>input 输入框</h3>
  <span>{{ text }}</span>
  <br />
  <input :value="text" @input="(evt) => (text = evt.target.value)" />
  <br />
  <input v-model.trim="text" />
  <br />

  <h3>radio 单选框</h3>
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input
    type="radio"
    id="two"
    value="Two"
    :checked="picked === 'Two'"
    @change="(evt) => (picked = evt.target.value)"
  />
  <label for="two">Two</label>

  <h3>checkbox 复选框</h3>
  <div>Checked names: {{ checkedNames }}</div>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>

  <input
    type="checkbox"
    id="mike"
    value="Mike"
    :checked="checkedNames.includes('Moke')"
    @change="
      (evt) => {
        console.log(evt, evt.target.value)
        if (evt.target.checked) {
          checkedNames.push(evt.target.value)
        } else {
          const index = checkedNames.indexOf(evt.target.value)
          checkedNames.splice(index, 1)
        }
      }
    "
  />
  <label for="mike">Mike</label>

  <h3>select 下拉框</h3>
  <div>Selected: {{ selected }}</div>

  <select
    :value="selected"
    @change="
      (evt) => {
        selected = evt.target.value
      }
    "
  >
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

  <h3>textarea 多行输入框</h3>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <textarea
    :value="message"
    @input="(evt) => (message = evt.target.value)"
    placeholder="add multiple lines"
  ></textarea>

  <h2>值绑定</h2>
  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />

  <h2>watchEffect</h2>
  <input type="text" v-model="todoId" />
  <div>{{ data }}</div>
</template>

<style scoped>
h2 {
  font-size: 20px;
  font-weight: 900;
  background: lightgray;
}
h3 {
  font-size: 16px;
  font-weight: 700;
  background: lightblue;
}
</style>
