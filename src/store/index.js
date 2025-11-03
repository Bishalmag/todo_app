import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      tasks: JSON.parse(localStorage.getItem('tasks')) || []
    }
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push({ ...task, hiddenUntil: null })
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    toggleTask(state, taskIndex) {
      const task = state.tasks[taskIndex]
      task.completed = !task.completed
      if (task.completed) {
        const today = new Date().toDateString()
        task.hiddenUntil = today
      } else {
        task.hiddenUntil = null
      }
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, taskIndex) {
      state.tasks.splice(taskIndex, 1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  getters: {
    visibleTasks: (state) => {
      const today = new Date().toDateString()
      return state.tasks.filter(task => task.hiddenUntil !== today)
    },
    completedTasks: (state) => {
      return state.tasks.filter(task => task.completed)
    }
  }
})
