<template>
  <div>
    <h3 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.title }}</h3>
    <button @click="$store.commit('toggleTask', index)">Toggle Complete</button>
    <button @click="$store.commit('deleteTask', index)">Delete</button>
  </div>
</template>

<script setup>
defineProps({
  task: Object,
  index: Number
})
</script>
