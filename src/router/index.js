import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTask from '../views/AddTask.vue'
import Completed from '../views/Completed.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddTask },
  { path: '/completed', component: Completed }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
