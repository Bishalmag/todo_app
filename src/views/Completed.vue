<template>
  <div class="completed">
    <h1>Completed Tasks</h1>

    <transition-group name="fade" tag="div" class="task-list">
      <div
        v-for="(task, index) in $store.getters.completedTasks"
        :key="index"
        class="task-item"
      >
        <h3>{{ task.title }}</h3>
        <button class="undo" @click="$store.commit('toggleTask', index)">Undo</button>
        <button class="delete" @click="$store.commit('deleteTask', index)">Delete</button>
      </div>
    </transition-group>

    <div v-if="$store.getters.completedTasks.length === 0" class="empty">
      No completed tasks yet!
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.completed {
  text-align: center;
  margin: 30px auto;
  max-width: 600px;
  font-family: 'Poppins', sans-serif;
}

h1 {
  color: #4f46e5;
  margin-bottom: 20px;
}

.task-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  padding: 16px;
  margin: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.task-item:hover {
  transform: scale(1.02);
}

.task-item h3 {
  color: #555;
  margin: 0;
  text-decoration: line-through;
}

.undo {
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
}

.delete {
  background: #ef4444;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
}
.empty {
  color: #999;
  font-style: italic;
  margin-top: 20px;
}
</style>
