<template>
  <form @submit.prevent="addNewTask">
    <input v-model="taskTitle" placeholder="Task title" required />
    <button type="submit">Add Task</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const taskTitle = ref('')

function addNewTask() {
  if (taskTitle.value.trim()) {
    store.commit('addTask', { title: taskTitle.value, completed: false })
    taskTitle.value = ''
  }
}
</script>
