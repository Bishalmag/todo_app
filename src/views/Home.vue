<template>
  <div>
    <h1>My Tasks</h1>
    <div v-if="$store.getters.visibleTasks.length === 0">No tasks for today!</div>
    <TaskCard 
      v-for="(task, index) in $store.getters.visibleTasks" 
      :key="index" 
      :task="task" 
      :index="index" 
    />
  </div>
</template>

<script setup>
import TaskCard from '../components/TaskCard.vue'
</script>
